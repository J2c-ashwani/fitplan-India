"use server"

import { Resend } from "resend"

export async function submitConsultationForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const mobile = formData.get("mobile") as string
    const healthCondition = formData.get("healthCondition") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !mobile || !healthCondition) {
      return { success: false, error: "Please fill in all required fields." }
    }

    // Initialize Resend with proper error handling
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("[v0] RESEND_API_KEY environment variable is not set")
      return { success: false, error: "Email service is not configured. Please contact support." }
    }

    const resend = new Resend(apiKey)

    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: "FitPlan India <noreply@fitplanindia.com>",
      to: ["admin@fitplanindia.com"],
      subject: "New Consultation Request - FitPlan India",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">New Consultation Request</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile:</strong> ${mobile}</p>
            <p><strong>Health Condition:</strong> ${healthCondition}</p>
            <p><strong>Message:</strong> ${message || "No additional message"}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This request was submitted through the FitPlan India website contact form.
          </p>
        </div>
      `,
    })

    // Send confirmation email to client
    const clientEmailResult = await resend.emails.send({
      from: "FitPlan India <noreply@fitplanindia.com>",
      to: [email],
      subject: "Consultation Request Received - FitPlan India",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">Thank You for Your Consultation Request!</h2>
          <p>Dear ${name},</p>
          <p>We have received your consultation request for <strong>${healthCondition}</strong>.</p>
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
            <h3 style="color: #0ea5e9; margin-top: 0;">What happens next?</h3>
            <ul style="color: #374151;">
              <li>Our nutrition expert will review your request within 24 hours</li>
              <li>You will receive a call on <strong>${mobile}</strong> to schedule your consultation</li>
              <li>We'll discuss your health goals and create a personalized plan</li>
            </ul>
          </div>
          <p>If you have any urgent questions, please call us at <strong>+91-XXXXXXXXXX</strong></p>
          <p style="color: #6b7280; font-size: 14px;">
            Best regards,<br>
            FitPlan India Team
          </p>
        </div>
      `,
    })

    console.log("[v0] Admin email result:", adminEmailResult)
    console.log("[v0] Client email result:", clientEmailResult)

    return {
      success: true,
      message: "Thank you! Your consultation request has been submitted. We will contact you within 24 hours.",
    }
  } catch (error) {
    console.error("[v0] Error in submitConsultationForm:", error)
    return {
      success: false,
      error: "There was an error submitting your request. Please try again or contact us directly.",
    }
  }
}
