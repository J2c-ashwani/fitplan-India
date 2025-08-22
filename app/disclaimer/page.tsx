import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, AlertTriangle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Medical Disclaimer - FitPlan India",
  description:
    "Important medical disclaimer for FitPlan India nutrition consultation services. Not a substitute for professional medical advice.",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <Link href="/" className="text-2xl font-bold text-primary">
              FitPlan India
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/plans" className="text-sm font-medium hover:text-primary transition-colors">
              Weight Loss Plans
            </Link>
            <Link href="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Calculators
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center gap-2">
              ← Back to Home
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-orange-500" />
            <h1 className="text-4xl font-bold">Medical Disclaimer</h1>
          </div>
          <p className="text-muted-foreground">Last updated: January 1, 2024</p>
        </div>

        <div className="space-y-8">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800">Important Notice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 font-semibold">
                The information provided by FitPlan India is for educational and informational purposes only and is not
                intended as medical advice, diagnosis, or treatment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Not Medical Advice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The content on this website, including diet plans, nutrition advice, and health information, should not
                be considered as medical advice or a substitute for professional medical consultation, diagnosis, or
                treatment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Our nutritionists are certified in nutrition, not licensed medical doctors</li>
                <li>We do not diagnose, treat, cure, or prevent any disease or medical condition</li>
                <li>Individual results may vary and are not guaranteed</li>
                <li>Always seek the advice of your physician or qualified healthcare provider</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consult Your Doctor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground font-semibold">
                You should ALWAYS consult with a qualified healthcare professional before:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Starting any new diet or nutrition program</li>
                <li>Making significant changes to your eating habits</li>
                <li>Beginning any exercise or fitness routine</li>
                <li>Taking any dietary supplements</li>
                <li>If you have any medical conditions or take medications</li>
                <li>If you are pregnant, nursing, or planning to become pregnant</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Health Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any of the following conditions, medical supervision is especially important:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Diabetes (Type 1 or Type 2)</li>
                <li>Heart disease or cardiovascular conditions</li>
                <li>High blood pressure</li>
                <li>Kidney or liver disease</li>
                <li>Eating disorders</li>
                <li>Thyroid disorders</li>
                <li>PCOS/PCOD</li>
                <li>Any chronic medical condition</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Situations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you experience any adverse reactions, severe symptoms, or medical emergencies while following our
                recommendations, discontinue immediately and seek emergency medical attention. Call your local emergency
                number or visit the nearest hospital.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>No Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                FitPlan India, its owners, employees, and affiliates shall not be held liable for any adverse effects,
                injuries, or damages that may result from the use of information provided on this website or through our
                consultation services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Responsibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By using our services, you acknowledge that you understand this disclaimer and agree to take full
                responsibility for your health decisions. You agree to consult with appropriate healthcare professionals
                before implementing any recommendations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">
                <strong>Remember:</strong> Your health is precious. When in doubt, always consult a qualified healthcare
                professional.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
