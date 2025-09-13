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
        { error: "Google authentication failed" },
        { status: 401 }
      );
    }

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
    const range = "Leads!A:H";

    let existingRowIndex: number | null = null;

    // 🟢 Step 1: Check if lead already exists (only if updateExisting is true)
    if (updateExisting) {
      try {
        const readRes = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range,
        });
        const rows = readRes.data.values || [];

        existingRowIndex = rows.findIndex(
          (row) => row[2] === email && row[3] === mobile
        );

        if (existingRowIndex !== -1) {
          console.log(
            `🔄 Existing row found at index ${
              existingRowIndex + 1
            }, updating...`
          );

          const timestamp =
            rows[existingRowIndex][0] || new Date().toLocaleString();

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

          const updateRange = `Leads!A${existingRowIndex + 1}:H${
            existingRowIndex + 1
          }`;
          await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: updateRange,
            valueInputOption: "USER_ENTERED",
            requestBody: { values: [updatedRow] },
          });

          return NextResponse.json({ success: true, updatedRow });
        }
      } catch (err) {
        console.error("❌ Failed to read existing leads:", err);
        return NextResponse.json(
          { error: "Failed to read leads from Google Sheet" },
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
      console.error("❌ Failed to append new lead:", err);
      return NextResponse.json(
        { error: "Failed to save lead to Google Sheet" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("❌ Error in POST /api/save-lead:", error);
    return NextResponse.json(
      {
        error:
          "Unexpected server error. Please check server logs for more details.",
      },
      { status: 500 }
    );
  }
}
