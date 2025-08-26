import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions - FitPlan India",
  description: "Terms and conditions for using FitPlan India nutrition consultation services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center gap-2">
              ← Back to Home
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">Last updated: January 1, 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing and using FitPlan India's website and services, you accept and agree to be bound by the
                terms and provision of this agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Services Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">FitPlan India provides:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Personalized nutrition consultation services</li>
                <li>Customized diet plans for various health conditions</li>
                <li>Health and fitness calculators</li>
                <li>Educational content about nutrition and weight loss</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medical Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground font-semibold">
                IMPORTANT: Our services are NOT medical advice and should not replace professional medical consultation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Always consult with a qualified healthcare provider before starting any diet or exercise program
                </li>
                <li>Our nutritionists provide dietary guidance, not medical treatment</li>
                <li>Individual results may vary and are not guaranteed</li>
                <li>We are not responsible for any adverse effects from following our recommendations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Consultation fees are ₹500 and must be paid in advance</li>
                <li>Payments are processed securely through Razorpay</li>
                <li>Refunds are available within 24 hours of payment if consultation hasn't been conducted</li>
                <li>No refunds after consultation has been provided</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information about your health condition</li>
                <li>Follow the diet plan as recommended by our nutritionists</li>
                <li>Inform us of any adverse reactions or concerns</li>
                <li>Use our website and services in accordance with applicable laws</li>
                <li>Not share your personalized diet plans with others</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All content on this website, including diet plans, articles, and calculators, is the intellectual
                property of FitPlan India and is protected by copyright laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                FitPlan India shall not be liable for any direct, indirect, incidental, special, or consequential
                damages resulting from the use or inability to use our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">For questions about these Terms & Conditions, contact us at:</p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>Email: legal@fitplanindia.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Address: Mumbai, India</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
