"use server"

import { Resend } from "resend"

interface ConsultationFormData {
  name: string
  email: string
  mobile: string
  healthCondition: string
  message: string
  paymentId?: string
}

export async function submitConsultationForm(formData: ConsultationFormData) {
  try {
    const { name, email, mobile, healthCondition, message, paymentId } = formData

    // Validate required fields
    if (!name || !email || !mobile || !healthCondition) {
      return { success: false, error: "Please fill in all required fields." }
    }

    // Initialize Resend with proper error handling
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set")
      return { success: false, error: "Email service is not configured. Please contact support." }
    }

    const resend = new Resend(apiKey)

    // Determine admin email from environment or use default
    const adminEmail = process.env.ADMIN_EMAIL || "admin@fitplan.com"
    const fromEmail = process.env.FROM_EMAIL || "noreply@fitplan.com"

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: `FitPlan <${fromEmail}>`,
      to: [adminEmail],
      subject: "🔔 New Consultation Request - FitPlan",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">New Consultation Request</h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0;">Consultation Fee: $100 USD</p>
          </div>
          
          <div style="padding: 30px;">
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #059669; margin: 20px 0;">
              <h2 style="color: #047857; margin-top: 0; font-size: 20px;">Client Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600; width: 150px;">Name:</td>
                  <td style="padding: 8px 0; color: #111827;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #059669;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Phone:</td>
                  <td style="padding: 8px 0; color: #111827;"><a href="tel:${mobile}" style="color: #059669;">${mobile}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Health Condition:</td>
                  <td style="padding: 8px 0; color: #111827;"><strong>${healthCondition}</strong></td>
                </tr>
                ${paymentId ? `
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Payment ID:</td>
                  <td style="padding: 8px 0; color: #111827;"><code style="background: #f3f4f6; padding: 4px 8px; border-radius: 4px;">${paymentId}</code></td>
                </tr>
                ` : ''}
              </table>
            </div>

            ${message ? `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0; font-size: 16px;">Additional Information:</h3>
              <p style="color: #78350f; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            ` : ''}

            <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; color: #075985; font-size: 14px;">
                <strong>⏰ Action Required:</strong> Contact the client within 24 hours to schedule their consultation.
              </p>
            </div>
          </div>

          <div style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">
              This request was submitted through the FitPlan website contact form
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
              Timestamp: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', timeZoneName: 'short' })}
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to client
    const clientEmailResult = await resend.emails.send({
      from: `FitPlan <${fromEmail}>`,
      to: [email],
      subject: "✅ Consultation Request Received - FitPlan",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 40px 30px; text-align: center;">
            <div style="width: 60px; height: 60px; background: #ffffff; border-radius: 50%; margin: 0 auto 20px auto; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 30px;">✅</span>
            </div>
            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">Your consultation request has been received</p>
          </div>
          
          <div style="padding: 30px;">
            <p style="color: #111827; font-size: 16px; line-height: 1.6;">
              We're excited to help you achieve your health goals! Our certified nutritionists have received your request 
              for consultation regarding <strong style="color: #059669;">${healthCondition}</strong>.
            </p>

            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); padding: 25px; border-radius: 12px; margin: 25px 0; border: 2px solid #10b981;">
              <h2 style="color: #047857; margin-top: 0; font-size: 20px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">📋</span> What Happens Next?
              </h2>
              <ol style="color: #065f46; margin: 0; padding-left: 20px; line-height: 1.8;">
                <li style="margin: 10px 0;"><strong>Within 24 hours:</strong> Our team will call you at <strong>${mobile}</strong> to schedule your consultation</li>
                <li style="margin: 10px 0;"><strong>Consultation:</strong> 45-minute video session with your dedicated nutritionist</li>
                <li style="margin: 10px 0;"><strong>Custom Plan:</strong> Receive your personalized meal plan and recommendations</li>
                <li style="margin: 10px 0;"><strong>Follow-up:</strong> 1-week email/chat support to ensure you're on track</li>
              </ol>
            </div>

            <div style="background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0; font-size: 16px;">💡 Prepare for Your Consultation:</h3>
              <ul style="color: #1e3a8a; margin: 10px 0; padding-left: 20px; line-height: 1.6;">
                <li>Keep a food diary for 2-3 days before the call</li>
                <li>List any medications or supplements you're taking</li>
                <li>Note your activity level and exercise routine</li>
                <li>Write down specific questions or concerns</li>
              </ul>
            </div>

            ${paymentId ? `
            <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="color: #065f46; margin: 0; font-size: 14px;">
                <strong>Payment Confirmed:</strong> $100 USD • Transaction ID: <code style="background: #ffffff; padding: 2px 6px; border-radius: 4px;">${paymentId}</code>
              </p>
            </div>
            ` : ''}

            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 25px 0;">
              <p style="color: #92400e; margin: 0; font-size: 14px;">
                <strong>📞 Need immediate assistance?</strong><br>
                Email: <a href="mailto:support@fitplan.com" style="color: #ea580c;">support@fitplan.com</a><br>
                Phone: <a href="tel:+15551234567" style="color: #ea580c;">+1 (555) 123-4567</a>
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="https://fitplan.com/plans" style="display: inline-block; background: #059669; color: #ffffff; padding: 14px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">
                View Our Plans
              </a>
            </div>
          </div>

          <div style="background: #f9fafb; padding: 25px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #111827; font-weight: 600; margin: 0 0 10px 0;">Looking forward to working with you!</p>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Best regards,<br>
              <strong style="color: #059669;">The FitPlan Team</strong>
            </p>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                This email was sent because you requested a consultation at FitPlan.com
              </p>
            </div>
          </div>
        </div>
      `,
    })

    console.log("Admin email result:", adminEmailResult)
    console.log("Client email result:", clientEmailResult)

    return {
      success: true,
      message: "Thank you! Your consultation request has been submitted. We will contact you within 24 hours.",
    }
  } catch (error) {
    console.error("Error in submitConsultationForm:", error)
    return {
      success: false,
      error: "There was an error submitting your request. Please try again or contact us directly at support@fitplan.com",
    }
  }
}
