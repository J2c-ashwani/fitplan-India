import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, company, service, budget, message, source } = body

    console.log("📝 Contact form submission:", { firstName, lastName, email, company, service })

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Save to Google Sheets
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/save-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          mobile: phone || "",
          condition: service || "General Inquiry",
          message: `${message}\n\nCompany: ${company || "N/A"}\nBudget: ${budget || "N/A"}\nSource: ${source || "Contact Form"}`,
          status: "New Lead",
          leadSource: "Contact Form",
          timestamp: new Date().toISOString(),
        }),
      })
      console.log("✅ Saved to Google Sheets")
    } catch (sheetsError) {
      console.error("❌ Failed to save to sheets:", sheetsError)
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️ RESEND_API_KEY not configured")
      return NextResponse.json({ success: true })
    }

    const adminEmail = process.env.ADMIN_EMAIL || "hello@fitplanindia.com"
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev"

    try {
      // Send admin notification
      console.log("📨 Sending admin notification...")
      await resend.emails.send({
        from: `FSI Digital <${fromEmail}>`,
        to: [adminEmail],
        subject: `🔔 New Contact Form Submission - ${service || 'General Inquiry'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
            </div>
            
            <div style="padding: 30px; background: #f9fafb;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #059669; margin-top: 0;">Contact Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px; font-weight: 600; color: #6b7280;">Name:</td>
                    <td style="padding: 8px;">${firstName} ${lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: 600; color: #6b7280;">Email:</td>
                    <td style="padding: 8px;"><a href="mailto:${email}" style="color: #059669;">${email}</a></td>
                  </tr>
                  ${phone ? `
                  <tr>
                    <td style="padding: 8px; font-weight: 600; color: #6b7280;">Phone:</td>
                    <td style="padding: 8px;"><a href="tel:${phone}" style="color: #059669;">${phone}</a></td>
                  </tr>
                  ` : ''}
                  ${company ? `
                  <tr>
                    <td style="padding: 8px; font-weight: 600; color: #6b7280;">Company:</td>
                    <td style="padding: 8px;">${company}</td>
                  </tr>
                  ` : ''}
                  ${service ? `
                  <tr>
                    <td style="padding: 8px; font-weight: 600; color: #6b7280;">Service Interest:</td>
                    <td style="padding: 8px;"><strong>${service}</strong></td>
                  </tr>
                  ` : ''}
                  ${budget ? `
                  <tr>
                    <td style="padding: 8px; font-weight: 600; color: #6b7280;">Budget:</td>
                    <td style="padding: 8px;">${budget}</td>
                  </tr>
                  ` : ''}
                </table>
              </div>

              <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <h3 style="color: #92400e; margin-top: 0;">Message:</h3>
                <p style="color: #78350f; white-space: pre-wrap; margin: 0;">${message}</p>
              </div>

              <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 0; color: #075985; font-size: 14px;">
                  <strong>⏰ Action Required:</strong> Respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        `,
      })
      console.log("✅ Admin email sent")

      // Send customer confirmation
      console.log("📨 Sending customer confirmation...")
      await resend.emails.send({
        from: `FSI Digital <${fromEmail}>`,
        to: [email],
        subject: "✅ We Received Your Message - FSI Digital",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 40px 30px; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 15px;">✅</div>
              <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${firstName}!</h1>
              <p style="color: #d1fae5; margin: 10px 0 0 0;">We've received your message</p>
            </div>
            
            <div style="padding: 30px; background: #f9fafb;">
              <p style="font-size: 16px; color: #111827; line-height: 1.6;">
                Thank you for contacting FSI Digital! We've received your inquiry ${service ? `about <strong>${service}</strong>` : ''} 
                and our team will review it shortly.
              </p>

              <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border: 2px solid #10b981;">
                <h2 style="color: #047857; margin-top: 0; font-size: 20px;">📋 What Happens Next?</h2>
                <ol style="color: #065f46; margin: 0; padding-left: 20px; line-height: 1.8;">
                  <li style="margin: 10px 0;"><strong>Within 24 hours:</strong> Our team will review your request</li>
                  <li style="margin: 10px 0;"><strong>Initial Contact:</strong> We'll reach out via email or phone to discuss your needs</li>
                  <li style="margin: 10px 0;"><strong>Free Consultation:</strong> Schedule a discovery call to explore solutions</li>
                  <li style="margin: 10px 0;"><strong>Custom Proposal:</strong> Receive a tailored strategy and pricing</li>
                </ol>
              </div>

              <div style="background: white; padding: 20px; border-radius: 8px; border: 2px solid #e5e7eb; margin: 20px 0;">
                <h3 style="color: #111827; margin-top: 0;">Your Information:</h3>
                <p style="color: #6b7280; margin: 5px 0;">Name: <strong>${firstName} ${lastName}</strong></p>
                <p style="color: #6b7280; margin: 5px 0;">Email: <strong>${email}</strong></p>
                ${phone ? `<p style="color: #6b7280; margin: 5px 0;">Phone: <strong>${phone}</strong></p>` : ''}
                ${company ? `<p style="color: #6b7280; margin: 5px 0;">Company: <strong>${company}</strong></p>` : ''}
              </div>

              <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
                <p style="color: #92400e; margin: 0; font-size: 14px;">
                  <strong>📞 Need immediate assistance?</strong><br>
                  Email: <a href="mailto:hello@fsidigital.ca" style="color: #ea580c;">hello@fsidigital.ca</a><br>
                  Phone: <a href="tel:+19094048938" style="color: #ea580c;">+1 (909) 404-8938</a>
                </p>
              </div>
            </div>

            <div style="background: #1f2937; padding: 20px; text-align: center;">
              <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                © 2025 FSI Digital. All rights reserved.
              </p>
            </div>
          </div>
        `,
      })
      console.log("✅ Customer confirmation sent")
      
      return NextResponse.json({ 
        success: true,
        message: "Message received! We'll respond within 24 hours."
      })
      
    } catch (emailError: any) {
      console.error("❌ Email error:", emailError)
      // Still return success since data was saved
      return NextResponse.json({ success: true })
    }

  } catch (error: any) {
    console.error("❌ Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    )
  }
}
