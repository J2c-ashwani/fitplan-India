"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, CheckCircle, CreditCard, Users, Award } from "lucide-react"
import Link from "next/link"
import { submitConsultationForm } from "./actions"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    healthCondition: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const healthConditions = [
    "PCOS/PCOD",
    "Hypothyroidism",
    "Hyperthyroidism",
    "Diabetes (Type 1/2)",
    "Obesity",
    "Post-Pregnancy Weight Loss",
    "General Weight Loss",
    "Teenage Weight Management",
    "Senior Citizen Health",
    "Other Health Condition",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.mobile.trim()) return "Mobile number is required"
    if (!formData.healthCondition) return "Please select your health condition"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email"
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) return "Please enter a valid Indian mobile number"
    return null
  }

  // ✅ Save or update lead status in Google Sheets
  const saveLead = async (status: "Pending" | "Success" | "Abandoned") => {
    try {
      await fetch("/api/save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          condition: formData.healthCondition,
          message: formData.message,
          status,
          leadSource: "Website",
          updateExisting: true, // ✅ tell backend to update if exists
        }),
      })
    } catch (err) {
      console.error("❌ Failed to save/update lead:", err)
    }
  }

  const handlePayment = async () => {
    const validationError = validateForm()
    if (validationError) {
      setSubmitError(validationError)
      return
    }

    setIsPaymentProcessing(true)
    setSubmitError("")

    try {
      // ✅ Step 1: Log as Pending
      await saveLead("Pending")

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_key",
        amount: 50000,
        currency: "INR",
        name: "FitPlan India",
        description: "Nutrition Consultation Fee",
        image: "/logo.png",
        handler: async (response: any) => {
          try {
            setIsSubmitting(true)
            const result = await submitConsultationForm({
              ...formData,
              paymentId: response.razorpay_payment_id,
            })

            if (result.success) {
              await saveLead("Success")
              setSubmitSuccess(true)
              setFormData({ name: "", email: "", mobile: "", healthCondition: "", message: "" })
            } else {
              setSubmitError(result.error || "Failed to submit consultation request")
            }
          } catch (err) {
            setSubmitError("Failed to submit consultation request")
          } finally {
            setIsSubmitting(false)
            setIsPaymentProcessing(false)
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        notes: { health_condition: formData.healthCondition },
        theme: { color: "#15803d" },
        modal: {
          ondismiss: async () => {
            setIsPaymentProcessing(false)
            await saveLead("Abandoned")
          },
        },
      }

      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => {
        const rzp = new (window as any).Razorpay(options)
        rzp.open()
      }
      document.body.appendChild(script)
    } catch {
      setSubmitError("Payment initialization failed. Please try again.")
      setIsPaymentProcessing(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <section className="py-20 px-4 w-full max-w-3xl text-center">
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 text-foreground">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your consultation request has been submitted successfully. Our expert will contact you within 24 hours.
            </p>
          </div>

          <Card className="text-left">
            <CardHeader><CardTitle>What Happens Next?</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p>✅ Our certified professionals will review your health condition and call you within 24 hours.</p>
              <p>✅ After discussion, you will receive your personalized diet plan and support.</p>
            </CardContent>
          </Card>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild><Link href="/">Back to Home</Link></Button>
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/tools">Try Our Free Calculators</Link>
            </Button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/50 to-background text-center w-full">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">Expert Consultation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Book Your Consultation</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized diet plans and expert guidance from certified professionals.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Users className="h-4 w-4" /><span>1:1 Consultations</span></div>
            <div className="flex items-center gap-2"><Award className="h-4 w-4" /><span>Certified Professionals</span></div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>24hr Response</span></div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
          <div className="lg:col-span-2 flex justify-center">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle>Consultation Request Form</CardTitle>
                <CardDescription>Fill out the form to book your consultation.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">{submitError}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" type="text" placeholder="Enter your full name"
                      value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com"
                      value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input id="mobile" type="tel" placeholder="9876543210"
                    value={formData.mobile} onChange={(e) => handleInputChange("mobile", e.target.value)} required />
                </div>

                <div>
                  <Label>Health Condition *</Label>
                  <Select value={formData.healthCondition} onValueChange={(value) => handleInputChange("healthCondition", value)}>
                    <SelectTrigger><SelectValue placeholder="Select your primary health condition" /></SelectTrigger>
                    <SelectContent>
                      {healthConditions.map((condition) => (
                        <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" placeholder="Tell us about your diet, lifestyle, or goals"
                    rows={4} value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} />
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Consultation Fee: ₹500</h3>
                    <p className="text-sm text-muted-foreground">
                      Includes 45-minute consultation, personalized diet plan & 1-week follow-up.
                    </p>
                  </div>

                  <Button onClick={handlePayment} disabled={isPaymentProcessing || isSubmitting} className="w-full" size="lg">
                    {isPaymentProcessing ? <>Processing Payment...</> : (<><CreditCard className="h-4 w-4 mr-2" />Pay ₹500 & Book Consultation</>)}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Contact Info */}
          <div className="flex flex-col gap-6 justify-center">
            <Card>
              <CardHeader><CardTitle>Contact Information</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><span>+91 79035 25592</span></div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><span>hello@fitplanindia.com</span></div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /><span>Ahmedabad, India</span></div>
                <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /><span>Mon - Sat: 9AM - 7PM</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Why Choose Us?</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>✔ 10,000+ successful consultations</p>
                <p>✔ Certified and experienced dieticians</p>
                <p>✔ Personalized meal and lifestyle plans</p>
                <p>✔ Ongoing guidance and support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
