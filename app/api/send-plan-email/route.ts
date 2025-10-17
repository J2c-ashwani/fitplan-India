import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: NextRequest) {
  try {
    const { email, name, plan, profile } = await req.json()

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Generate PDF content (you can use libraries like jsPDF or puppeteer)
    // For now, sending HTML email with plan

    await resend.emails.send({
      from: "FitPlan AI Coach <noreply@fitplan.com>",
      to: [email],
      subject: "🎉 Your Personalized AI Fitness Plan is Ready!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Your AI Fitness Plan</h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0;">Personalized for ${name}</p>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #047857;">Your Personalized Plan</h2>
            <div style="white-space: pre-wrap; line-height: 1.6; color: #374151;">
              ${plan}
            </div>

            <div style="margin-top: 30px; padding: 20px; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #059669;">
              <h3 style="color: #047857; margin-top: 0;">📊 Your Profile Summary</h3>
              <p style="margin: 5px 0;"><strong>Goal:</strong> ${profile.primaryGoal}</p>
              <p style="margin: 5px 0;"><strong>Timeline:</strong> ${profile.timeline}</p>
              <p style="margin: 5px 0;"><strong>Diet:</strong> ${profile.dietType}</p>
              <p style="margin: 5px 0;"><strong>Activity:</strong> ${profile.activityLevel}</p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="https://fitplan.com/contact" style="display: inline-block; background: #059669; color: #ffffff; padding: 14px 30px; border-radius: 8px; text-decoration: none; font-weight: 600;">
                Book 1:1 Consultation ($100)
              </a>
            </div>
          </div>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
