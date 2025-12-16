import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, Droplets, Zap, Target, ArrowRight, Activity } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Health & Fitness Calculators | Free BMI, BMR & Protein Tools | FitPlan India",
  description: "Free scientifically accurate health calculators for Indian body types. Calculate BMI, BMR, Daily Calorie Needs, Water Intake, and Protein Requirements instantly.",
  keywords: "health calculators India, BMI calculator, BMR calculator, calorie calculator India, protein calculator, free health tools",
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-emerald-600 font-semibold">
              🧮 Free Health Tools
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Health & Fitness Calculators
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Take the guesswork out of your health journey. Use our scientifically accurate tools designed specifically for the Indian lifestyle to understand your body better.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* BMI Calculator Link */}
            <Link href="/tools/bmi-calculator" className="block group">
              <Card className="h-full border-2 border-transparent hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50 group-hover:from-emerald-100 group-hover:to-green-100 transition-colors">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Target className="h-8 w-8 text-emerald-600" />
                    </div>
                    <Badge variant="outline" className="bg-white">Most Popular</Badge>
                  </div>
                  <CardTitle className="text-2xl mt-4 text-emerald-950">BMI Calculator</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-6">
                    Calculate your Body Mass Index (BMI) to determine if you are in a healthy weight range. tailored for Indian guidelines.
                  </p>
                  <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all">
                    Use Calculator <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Calorie Calculator Link */}
            <Link href="/tools/calorie-calculator" className="block group">
              <Card className="h-full border-2 border-transparent hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors">
                  <div className="p-3 bg-white rounded-lg shadow-sm w-fit">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl mt-4 text-blue-950">Daily Calorie Calculator</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-6">
                    Find out your TDEE and BMR. Know exactly how many calories you need to eat to lose weight, gain muscle, or maintain.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Use Calculator <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Protein Calculator Link */}
            <Link href="/tools/protein-calculator" className="block group">
              <Card className="h-full border-2 border-transparent hover:border-purple-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100 transition-colors">
                  <div className="p-3 bg-white rounded-lg shadow-sm w-fit">
                    <Activity className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl mt-4 text-purple-950">Protein Calculator</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-6">
                    Discover your optimal daily protein intake. Essential for vegetarians and non-vegetarians looking to build strength.
                  </p>
                  <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                    Use Calculator <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Water Calculator Link */}
            <Link href="/tools/water-intake-calculator" className="block group">
              <Card className="h-full border-2 border-transparent hover:border-cyan-200 hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-cyan-50 to-sky-50 group-hover:from-cyan-100 group-hover:to-sky-100 transition-colors">
                  <div className="p-3 bg-white rounded-lg shadow-sm w-fit">
                    <Droplets className="h-8 w-8 text-cyan-600" />
                  </div>
                  <CardTitle className="text-2xl mt-4 text-cyan-950">Hydration Calculator</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-6">
                    Calculate exactly how much water you should drink daily based on your weight and Indian climate conditions.
                  </p>
                  <div className="flex items-center text-cyan-600 font-semibold group-hover:gap-2 transition-all">
                    Use Calculator <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Use Our FitPlan Calculators?</h2>
          <div className="prose max-w-none text-gray-600 leading-relaxed">
            <p>
              Achieving your fitness goals starts with knowing your numbers. Whether you are trying to combat <strong>PCOS weight gain</strong>, manage <strong>diabetes</strong>, or simply get fit, understanding your baseline metrics is crucial.
            </p>
            <p className="mt-4">
              Our free tools are designed keeping the Indian physique and diet in mind. We understand that standard global calculators often don't account for the vegetarian protein sources or the specific metabolic rates common in South Asia. These tools give you a scientifically backed starting point.
            </p>
          </div>

          <div className="mt-10">
            <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-6 text-lg font-semibold" asChild>
              <Link href="/plans">Explore Diet Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
