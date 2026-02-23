import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      mobile,
      condition,
      message,
      status,
      leadSource,
      updateExisting,
      leadId,
    } = body;

    if (!name || !email || !mobile || !status) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, mobile, or status" },
        { status: 400 }
      );
    }

    // ✅ Setup Google Sheets Auth
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
      return NextResponse.json(
        { error: "Google authentication failed", details: err },
        { status: 401 }
      );
    }

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
    const range = "Leads!A:H";

    // 🟢 Step 1: Check if lead already exists (only if updateExisting is true)
    if (updateExisting) {
      try {
        const readRes = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range,
        });
        const rows = readRes.data.values || [];

        /// Find the existing row index
        let rowIndex = -1;
        if (leadId && leadId > 0 && leadId <= rows.length) {
          // leadId is the 1-based exact row number
          rowIndex = leadId - 1;
        } else {
          rowIndex = rows.findIndex((row) => row[2] === email && row[3] === mobile);
        }

        if (rowIndex !== -1) {
          console.log(`🔄 Existing row found at index ${rowIndex + 1}, updating...`);

          const timestamp = rows[rowIndex][0] || new Date().toLocaleString();

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

          // Use the absolute row index (+1 for 1-based, ignoring any header offsets because rows array includes header if range is A:H)
          const actualRowNumber = rowIndex + 1;
          const updateRange = `Leads!A${actualRowNumber}:H${actualRowNumber}`;

          await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: updateRange,
            valueInputOption: "USER_ENTERED",
            requestBody: { values: [updatedRow] },
          });

          return NextResponse.json({ success: true, updatedRow, leadId: actualRowNumber });
        }
      } catch (err) {
        console.error(
          "❌ Failed to read existing leads:",
          JSON.stringify(err, Object.getOwnPropertyNames(err))
        );
        return NextResponse.json(
          { error: "Failed to read leads from Google Sheet", details: err },
          { status: 500 }
        );
      }
    }

    // 🟢 Step 2: Append new lead if not found
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

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [newRow] },
      });

      return NextResponse.json({ success: true, appendedRow: newRow });
    } catch (err) {
      console.error(
        "❌ Failed to append new lead:",
        JSON.stringify(err, Object.getOwnPropertyNames(err))
      );
      return NextResponse.json(
        { error: "Failed to save lead to Google Sheet", details: err },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(
      "❌ Error in POST /api/save-lead:",
      JSON.stringify(error, Object.getOwnPropertyNames(error))
    );
    return NextResponse.json(
      {
        error:
          "Unexpected server error. Please check server logs for more details.",
        details: error,
      },
      { status: 500 }
    );
  }
}
