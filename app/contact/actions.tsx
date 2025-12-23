"use server"

import { Resend } from "resend"
import { paymentNumberFormat } from "@/lib/utils/currency"

interface ConsultationFormData {
  name: string
  email: string
  mobile: string
  healthCondition: string
  message: string
  paymentId?: string
  paymentAmount?: number
  paymentCurrency?: string
}

export async function submitConsultationForm(formData: ConsultationFormData) {
  try {
    const { name, email, mobile, healthCondition, message, paymentId, paymentAmount, paymentCurrency } = formData

    console.log("========================================")
    console.log("📝 CONSULTATION FORM SUBMISSION STARTED")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Mobile:", mobile)
    console.log("Condition:", healthCondition)
    console.log("========================================")

    // Validate required fields
    if (!name || !email || !mobile || !healthCondition) {
      console.error("❌ Validation failed - missing required fields")
      return { success: false, error: "Please fill in all required fields." }
    }

    // STEP 1: Save to Google Sheets
    try {
      console.log("💾 Saving to Google Sheets...")
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
      console.log("Base URL:", baseUrl)

      const response = await fetch(`${baseUrl}/api/save-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          mobile,
          condition: healthCondition,
          message: message || "",
          status: "Success",
          leadSource: "Contact Page - Consultation",
          paymentId: paymentId || "",
          paymentAmount: paymentAmount || 0,
          paymentCurrency: paymentCurrency || "USD",
          timestamp: new Date().toISOString(),
        }),
      })

      const result = await response.json()
      console.log("✅ Google Sheets response:", result)
    } catch (sheetsError) {
      console.error("❌ Google Sheets save failed:", sheetsError)
    }

    // STEP 2: Check Resend API Key
    const apiKey = process.env.RESEND_API_KEY
    console.log("\n📧 EMAIL SENDING PROCESS:")
    console.log("API Key exists:", !!apiKey)
    console.log("API Key (first 10 chars):", apiKey ? apiKey.substring(0, 10) + "..." : "NOT FOUND")

    if (!apiKey) {
      console.warn("⚠️ RESEND_API_KEY not configured - skipping email")
      return {
        success: true,
        message: "Thank you! Your consultation request has been submitted. We will contact you within 24 hours.",
      }
    }

    // STEP 3: Initialize Resend
    console.log("🔧 Initializing Resend...")
    const resend = new Resend(apiKey)

    const adminEmail = process.env.ADMIN_EMAIL || "admin@fitplan.com"
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev"

    console.log("📤 From email:", fromEmail)
    console.log("📥 Admin email:", adminEmail)
    console.log("📥 Customer email:", email)

    try {
      // STEP 4: Send Admin Email
      console.log("\n📨 Sending admin notification email...")
      const adminResult = await resend.emails.send({
        from: `FitPlan <${fromEmail}>`,
        to: [adminEmail],
        subject: "🔔 New Consultation Request - FitPlan",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9fafb;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Consultation Request</h1>
                <p style="color: #d1fae5; margin: 10px 0 0 0;">${paymentAmount ? `${paymentCurrency} ${paymentAmount} Payment` : 'Consultation Request'}</p>
              </div>
              
              <div style="padding: 30px;">
                <h2 style="color: #047857; font-size: 18px;">Client Information</h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px; color: #6b7280; font-weight: 600;">Name:</td>
                    <td style="padding: 8px; color: #111827;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; color: #6b7280; font-weight: 600;">Email:</td>
                    <td style="padding: 8px;"><a href="mailto:${email}" style="color: #059669;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; color: #6b7280; font-weight: 600;">Phone:</td>
                    <td style="padding: 8px;"><a href="tel:${mobile}" style="color: #059669;">${mobile}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; color: #6b7280; font-weight: 600;">Condition:</td>
                    <td style="padding: 8px; color: #111827;"><strong>${healthCondition}</strong></td>
                  </tr>
                  ${message ? `
                  <tr>
                    <td style="padding: 8px; color: #6b7280; font-weight: 600;">Message:</td>
                    <td style="padding: 8px; color: #111827;">${message}</td>
                  </tr>
                  ` : ''}
                  ${paymentId ? `
                  <tr>
                    <td style="padding: 8px; color: #6b7280; font-weight: 600;">Payment ID:</td>
                    <td style="padding: 8px;"><code style="background: #f3f4f6; padding: 4px 8px; border-radius: 4px;">${paymentId}</code></td>
                  </tr>
                  ` : ''}
                </table>
                
                <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin-top: 20px;">
                  <p style="margin: 0; color: #075985; font-size: 14px;">
                    <strong>⏰ Action Required:</strong> Contact within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        `,
      })

      console.log("✅ Admin email sent successfully!")
      console.log("Admin email full response:", JSON.stringify(adminResult, null, 2))
      console.log("Admin email ID:", adminResult.data?.id || "NOT FOUND")

      // STEP 5: Send Customer Email
      console.log("\n📨 Sending customer confirmation email...")
      const clientResult = await resend.emails.send({
        from: `FitPlan <${fromEmail}>`,
        to: [email],
        subject: "✅ Consultation Request Received - FitPlan",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9fafb;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 40px 30px; text-align: center;">
                <div style="font-size: 48px; margin-bottom: 15px;">✅</div>
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
                <p style="color: #d1fae5; margin: 10px 0 0 0;">Your consultation request has been received</p>
              </div>
              
              <div style="padding: 30px;">
                <p style="color: #111827; font-size: 16px; line-height: 1.6;">
                  We're excited to help you with <strong style="color: #059669;">${healthCondition}</strong>!
                </p>

                <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #10b981;">
                  <h2 style="color: #047857; margin-top: 0; font-size: 18px;">📋 What Happens Next?</h2>
                  <ol style="color: #065f46; margin: 0; padding-left: 20px; line-height: 1.8;">
                    <li>We'll call you at <strong>${mobile}</strong> within 24 hours</li>
                    <li>45-minute video consultation with certified nutritionist</li>
                    <li>Personalized meal plan tailored to your needs</li>
                    <li>1-week follow-up support via email/chat</li>
                  </ol>
                </div>

                <div style="background: #eff6ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                  <h3 style="color: #1e40af; margin-top: 0; font-size: 16px;">💡 Prepare for Your Consultation:</h3>
                  <ul style="color: #1e3a8a; margin: 10px 0; padding-left: 20px;">
                    <li>Keep a food diary for 2-3 days</li>
                    <li>List current medications/supplements</li>
                    <li>Note your activity level</li>
                    <li>Write down any questions</li>
                  </ul>
                </div>

                ${paymentId ? `
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center;">
                  <p style="color: #065f46; margin: 0;">
                    <strong>Payment Confirmed:</strong> ${paymentNumberFormat(paymentAmount || 0, paymentCurrency || 'USD')}
                  </p>
                </div>
                ` : ''}

                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-top: 20px;">
               <p style="color: #92400e; margin: 0; font-size: 14px;">
                <strong>📞 Need help?</strong><br>
                  Email: hello@fitplanindia.com<br>
                  Phone: +91 95705 13778
                   </p>
                   </div>

              </div>

              <div style="background: #f9fafb; padding: 20px; text-align: center;">
                <p style="color: #6b7280; margin: 0;">
                  Looking forward to working with you!<br>
                  <strong style="color: #059669;">The FitPlan Team</strong>
                </p>
              </div>
            </div>
          </div>
        `,
      })

      console.log("✅ Customer email sent successfully!")
      console.log("Customer email full response:", JSON.stringify(clientResult, null, 2))
      console.log("Customer email ID:", clientResult.data?.id || "NOT FOUND")

      console.log("\n🎉 ALL EMAILS SENT SUCCESSFULLY!")
      console.log("========================================\n")

      return {
        success: true,
        message: "Thank you! Your consultation request has been submitted. Check your email for confirmation.",
      }

    } catch (emailError: any) {
      console.error("\n❌ EMAIL SENDING ERROR:")
      console.error("Error type:", emailError?.constructor?.name)
      console.error("Error message:", emailError?.message)
      console.error("Error stack:", emailError?.stack)
      console.error("Full error object:", JSON.stringify(emailError, null, 2))
      console.error("========================================\n")

      // Still return success since data was saved
      return {
        success: true,
        message: "Request saved! (Email notification pending - we'll contact you directly)",
      }
    }

  } catch (error: any) {
    console.error("\n❌ FATAL ERROR:")
    console.error("Error type:", error?.constructor?.name)
    console.error("Error message:", error?.message)
    console.error("Error stack:", error?.stack)
    console.error("========================================\n")

    return {
      success: false,
      error: "Failed to process request. Please try again or contact hello@fitplan.com",
    }
  }
}
