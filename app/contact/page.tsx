"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, CheckCircle, CreditCard, Users, Award, Globe, Shield } from "lucide-react"
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
    "Hormonal Imbalance",
    "Metabolic Issues",
    "Other Health Condition",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.mobile.trim()) return "Phone number is required"
    if (!formData.healthCondition) return "Please select your health condition"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email"
    return null
  }

  // Save lead to Google Sheets
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
          leadSource: "Contact Page",
          updateExisting: true,
        }),
      })
    } catch (err) {
      console.error("Failed to save lead:", err)
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
      // Save as pending
      await saveLead("Pending")

      // For international payments, redirect to Stripe or show PayPal
      // This is a placeholder - you'll need to implement Stripe/PayPal
      const result = await submitConsultationForm({
        ...formData,
        paymentId: "pending_payment", // Will be updated after Stripe/PayPal
      })

      if (result.success) {
        await saveLead("Success")
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", mobile: "", healthCondition: "", message: "" })
      } else {
        setSubmitError(result.error || "Failed to submit consultation request")
      }
    } catch {
      setSubmitError("Payment initialization failed. Please try again.")
      await saveLead("Abandoned")
    } finally {
      setIsPaymentProcessing(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="bg-white rounded-lg shadow-xl p-12">
              <div className="mb-8">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-12 w-12 text-emerald-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Thank You!</h1>
                <p className="text-xl text-gray-600 mb-8">
                  Your consultation request has been submitted successfully. Our expert will contact you within 24 hours.
                </p>
              </div>

              <Card className="text-left border-2 border-emerald-200">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="text-emerald-900">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Our certified nutritionists will review your health condition and goals.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">You'll receive a call within 24 hours to schedule your consultation.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">After consultation, you'll receive your personalized diet plan and ongoing support.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/">Back to Home</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2" asChild>
                  <Link href="/tools">Try Free Calculators</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-emerald-600 font-semibold">
              💬 Expert Consultation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Book Your Personalized Consultation
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get customized diet plans and expert guidance from certified nutritionists specializing in PCOS, thyroid, 
              diabetes, and other health conditions. Available worldwide via video call.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>1:1 Video Sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Certified Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>24hr Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                  <CardTitle className="text-2xl">Consultation Request Form</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below to book your personalized nutrition consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-8">
                  {submitError && (
                    <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                      <p className="text-red-700 font-medium">{submitError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mobile" className="text-sm font-semibold">Phone Number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange("mobile", e.target.value)}
                      className="mt-1"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Include country code for international numbers</p>
                  </div>

                  <div>
                    <Label className="text-sm font-semibold">Primary Health Condition *</Label>
                    <Select
                      value={formData.healthCondition}
                      onValueChange={(value) => handleInputChange("healthCondition", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your primary health condition" />
                      </SelectTrigger>
                      <SelectContent>
                        {healthConditions.map((condition) => (
                          <SelectItem key={condition} value={condition}>
                            {condition}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold">Additional Information</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your current diet, lifestyle, weight loss goals, or any specific concerns..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-emerald-700">$100 USD</h3>
                          <p className="text-sm text-gray-600 mt-1">One-time consultation fee</p>
                        </div>
                        <Shield className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>45-minute video consultation with certified nutritionist</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Personalized meal plan tailored to your condition</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>1-week follow-up support via email/chat</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>Supplement and lifestyle recommendations</span>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handlePayment}
                      disabled={isPaymentProcessing || isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-7"
                      size="lg"
                    >
                      {isPaymentProcessing ? (
                        <>Processing Payment...</>
                      ) : (
                        <>
                          <CreditCard className="h-5 w-5 mr-2" />
                          Pay $100 & Book Consultation
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <Link href="/terms" className="text-emerald-600 hover:underline">
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-emerald-600 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <p className="text-xs text-gray-500 text-center">
                      🔒 Secure payment processing via Stripe • All major cards accepted
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-gray-600">hello@fitplan.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-sm text-gray-600">Mon - Sat: 9AM - 7PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Worldwide Service</p>
                      <p className="text-sm text-gray-600">Video calls available in all time zones</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gradient-to-br from-emerald-50 to-green-50">
                <CardHeader>
                  <CardTitle className="text-lg text-emerald-900">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">10,000+ successful consultations worldwide</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Certified nutritionists with 10+ years experience</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Specialized in medical conditions (PCOS, thyroid, diabetes)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Personalized meal plans, not generic templates</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Ongoing support and accountability</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-lg text-blue-900">Money-Back Guarantee</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-700">
                    Not satisfied with your consultation? We offer a full refund within 7 days, no questions asked.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
