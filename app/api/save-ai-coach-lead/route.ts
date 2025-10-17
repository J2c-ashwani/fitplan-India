import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    // Save to Google Sheets or database
    await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL || "", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        leadSource: "AI Coach",
        timestamp: new Date().toISOString()
      })
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Save error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
