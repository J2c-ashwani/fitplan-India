import { Users, Heart, Award, Target, BookOpen, ShieldCheck, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About FitPlan India | Our Medical Review Board & Expert Nutritionists",
  description: "Meet the team of certified nutritionists and health experts behind FitPlan India. We provide science-backed, personalized diet plans for managing PCOS, Diabetes, and Thyroid conditions.",
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Trusted Since 2020</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Empowering India's Health <span className="text-emerald-600">Naturally</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            FitPlan India combines traditional Indian wisdom with modern nutritional science to help you reverse lifestyle diseases and achieve sustainable weight loss.
          </p>
        </div>
      </section>

      {/* Trust Signals / E-E-A-T */}
      <section className="py-12 bg-white border-y border-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="p-4">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10k+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Clients Helped</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Success Rate</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Certified Experts</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-emerald-600 mb-2">4.9</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <div className="prose text-gray-600 leading-relaxed space-y-4">
                <p>
                  FitPlan India was founded with a simple mission: to make professional clinical nutrition accessible to every Indian family. We realized that generic "Western" diet advice doesn't work for Indian bodies or Indian kitchens.
                </p>
                <p>
                  We specialize in Medical Nutrition Therapy (MNT) for conditions like <strong>PCOS, Thyroid, and Diabetes</strong>. Our plans respect your cultural food preferences—whether you eat Roti, Rice, or Idli—while ensuring you meet your health goals.
                </p>
              </div>
            </div>
            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <ShieldCheck className="text-emerald-600" /> Why Trust Us?
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-sm text-gray-600"><strong>Science-Backed:</strong> Every plan is based on clinical guidelines, not fads.</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-sm text-gray-600"><strong>Qualified Team:</strong> We only hire certified nutritionists and dietitians.</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon />
                  <span className="text-sm text-gray-600"><strong>Privacy First:</strong> Your medical data is 100% confidential.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Review Board / Experts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our content and plans are reviewed by qualified healthcare professionals to ensure accuracy and safety.
            </p>
          </div>

          <div className="flex justify-center">
            <ExpertCard
              name="Dr. Arti Kumari (MD)"
              role="Medical Director"
              qualification="BAMS Graduate, Ayurveda Specialist"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Have Questions?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We are real people based in India, ready to help you on your journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> Mon-Sat: 10:00 AM - 7:00 PM
            </div>
          </div>
          <a
            href="/contact"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  )
}

function ExpertCard({ name, role, qualification }: { name: string, role: string, qualification: string }) {
  return (
    <Card className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="pt-8 pb-8">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-gray-400">
          {name.charAt(4)}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-emerald-600 font-medium text-sm mb-2">{role}</p>
        <div className="w-8 h-1 bg-emerald-100 mx-auto mb-3"></div>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{qualification}</p>
      </CardContent>
    </Card>
  )
}

function CheckIcon() {
  return (
    <div className="mt-0.5 min-w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
    </div>
  )
}
