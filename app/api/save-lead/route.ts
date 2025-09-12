import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json();
    const { name, email, mobile, condition, status } = body;

    // Validate required fields
    if (!name || !email || !mobile || !status) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, mobile, or status" },
        { status: 400 }
      );
    }

    // Setup Google Sheets Auth
    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      undefined,
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    // Append row to Google Sheet
    const timestamp = new Date().toLocaleString(); // or use .toISOString() for UTC
    const row = [
      timestamp,
      name,
      email,
      mobile,
      "-",               // Placeholder for Health
      condition || "-",  // Condition column
      "-",               // Placeholder for Message
      status
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Leads!A:H", // Ensure this matches your sheet tab name
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ success: true, appendedRow: row });
  } catch (error: unknown) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { error: "Failed to save lead. Check server logs for details." },
      { status: 500 }
    );
  }
}
