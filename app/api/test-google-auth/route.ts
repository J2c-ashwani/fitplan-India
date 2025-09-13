import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    await auth.authorize();

    return NextResponse.json({
      success: true,
      message: "✅ Google authentication successful on Vercel!",
      clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    });
  } catch (error) {
    console.error("❌ Google Auth Test Failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "❌ Google authentication failed. Check your credentials.",
      },
      { status: 500 }
    );
  }
}
