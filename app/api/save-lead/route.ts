import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, mobile, condition, message, status, leadSource, updateExisting } = body;

    if (!name || !email || !mobile || !status) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, mobile, or status" },
        { status: 400 }
      );
    }

    // ✅ Setup Google Sheets Auth using safer object syntax
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    try {
      await auth.authorize();
      console.log("✅ Google Auth successful");
    } catch (err) {
      console.error("❌ Google Auth failed:", err);
      return NextResponse.json({ error: "Google Auth failed" }, { status: 401 });
    }

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
    const range = "Leads!A:H";

    // 🟢 Step 1: Fetch all rows to check for existing lead (if updateExisting=true)
    let existingRowIndex: number | null = null;
    if (updateExisting) {
      const readRes = await sheets.spreadsheets.values.get({ spreadsheetId, range });
      const rows = readRes.data.values || [];

      // Find row where email & mobile both match
      existingRowIndex = rows.findIndex(
        (row) => row[2] === email && row[3] === mobile
      );

      if (existingRowIndex !== -1) {
        console.log(`🔄 Existing row found at index ${existingRowIndex + 1}, updating...`);

        // Build updated row (preserve timestamp from column A)
        const timestamp = rows[existingRowIndex][0] || new Date().toLocaleString();
        const updatedRow = [
          timestamp,
          name,
          email,
          mobile,
          condition || "-",
          message || "-",
          leadSource || "Website",
          status,
        ];

        const updateRange = `Leads!A${existingRowIndex + 1}:H${existingRowIndex + 1}`;
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: updateRange,
          valueInputOption: "USER_ENTERED",
          requestBody: { values: [updatedRow] },
        });

        return NextResponse.json({ success: true, updatedRow });
      }
    }

    // 🟢 Step 2: If no existing row found, append a new one
    console.log("➕ No existing row found, appending new lead...");
    const newRow = [
      new Date().toLocaleString(),
      name,
      email,
      mobile,
      condition || "-",
      message || "-",
      leadSource || "Website",
      status,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [newRow] },
    });

    return NextResponse.json({ success: true, appendedRow: newRow });
  } catch (error: unknown) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { error: "Failed to save or update lead. Check server logs for details." },
      { status: 500 }
    );
  }
}
