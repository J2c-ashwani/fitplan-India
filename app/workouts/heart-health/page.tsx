import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Heart, Activity, Shield, TrendingUp, Clock, Target } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"


export const metadata: Metadata = {
  title: "Heart Health Exercise Program | Cardio Workouts for Cardiovascular Health",
  description: "Complete heart health exercise guide with safe cardio workouts, blood pressure lowering exercises, aerobic training, and cardiovascular fitness for heart disease prevention.",
  keywords: "heart health exercise, cardio workouts, heart disease prevention, blood pressure exercise, cardiovascular fitness, aerobic exercise, heart healthy workout, dash diet exercise",
  alternates: {
    canonical: "https://www.fitplanindia.com/workouts/heart-health",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Heart Health Exercise Program | Cardiovascular Fitness Guide",
    description: "Safe, effective exercises to strengthen your heart and improve cardiovascular health.",
    url: "https://www.fitplanindia.com/workouts/heart-health",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function HeartHealthWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Heart Health Plan", href: "/workouts/heart-health" },
  ]

  const tocItems = [
    { id: "stats", label: "Key Stats" },
    { id: "heart-rate", label: "Target Heart Rate" },
    { id: "exercises", label: "Best Exercises" },
    { id: "weekly-plan", label: "Weekly Plan" },
    { id: "safety", label: "Safety" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "How much exercise do I need for heart health?",
      answer: "American Heart Association recommends 150 min/week moderate cardio (30 min, 5x/week) OR 75 min/week vigorous cardio, PLUS 2 days strength training. Moderate = can talk but slightly breathless (50-70% max heart rate). Walking, cycling, swimming are perfect. Even 10-min sessions count - consistency matters most!"
    },
    {
      question: "Can exercise lower my blood pressure? By how much?",
      answer: "Yes! Regular aerobic exercise lowers blood pressure by 5-10 mmHg on average. This  reduction is as effective as some blood pressure medications. Results visible in 4-8 weeks of consistent exercise (5-6 days/week, 30-60 min). Walking is the #1 recommended exercise for high BP - simple, safe, effective."
    },
    {
      question: "Is it safe to exercise with heart disease?",
      answer: "Yes, BUT get doctor clearance first (stress test recommended). Exercise strengthens heart, improves circulation, reduces future heart attack risk by 35%. Start slowly with doctor-supervised cardiac rehab if available. Walking is safest starting point. STOP immediately if chest pain, severe shortness of breath, dizziness, or irregular heartbeat."
    },
    {
      question: "What's the best exercise for heart health - cardio or strength?",
      answer: "Cardio is #1 priority (walking, swimming, cycling) for direct heart benefits. Strength training is #2 but still important - improves metabolism, blood pressure, cholesterol. Best approach: 150 min cardio + 2 strength sessions weekly. If time-limited, prioritize cardio. Don't do ONLY strength training - heart needs cardio."
    },
    {
      question: "How do I calculate my target heart rate for safe exercise?",
      answer: "Formula: (220 - Age) × 0.50 to 0.70 = Moderate zone. Example: Age 60 → Max HR 160 → Moderate zone 80-112 bpm. Stay in this zone for heart health. Use fitness tracker or check pulse manually (count 15 sec × 4). 'Talk test' works too - should be able to hold conversation during exercise. If gasping, slow down!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ArticleSchema
        headline="Heart Health Exercise Program | Cardio Workouts for Health"
        description="Complete heart health exercise guide with safe cardio workouts, blood pressure lowering exercises, and cardiovascular fitness for prevention."
        keywords={["heart health", "cardio exercises", "blood pressure workout", "cardiovascular fitness", "heart disease prevention"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-rose-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-red-600 font-semibold">
              ❤️ Cardiovascular Health
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Heart Health Exercise: Strengthen Your Cardiovascular System
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover safe, effective cardiovascular exercises to lower blood pressure, reduce cholesterol, strengthen
              your heart, and prevent heart disease with aerobic training and heart-healthy workouts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#exercises">
                  View Exercises
                </Link>
              </Button>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/blog/heart-health">
                  Heart Health Diet (DASH)
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section id="stats" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">150 min</div>
                <div className="text-gray-600">Moderate Cardio/Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">5-10 mmHg</div>
                <div className="text-gray-600">BP Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50-70%</div>
                <div className="text-gray-600">Max Heart Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5-6x</div>
                <div className="text-gray-600">Training Per Week</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exercise for Cardiovascular Health</h2>
              <p className="text-lg text-gray-700 mb-6">
                Regular aerobic exercise is one of the most powerful tools for heart health. Exercise strengthens the heart
                muscle, lowers blood pressure (by 5-10 mmHg), reduces LDL cholesterol, increases HDL cholesterol, improves
                circulation, reduces inflammation, and helps maintain healthy weight. The American Heart Association recommends
                150 minutes of moderate-intensity or 75 minutes of vigorous-intensity aerobic exercise per week, plus 2 days
                of strength training. For heart health, focus on **moderate, steady-state cardio** at 50-70% max heart rate.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-red-800">Heart Health Benefits</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Lowers blood pressure (5-10 mmHg reduction)</li>
                    <li>• Reduces LDL (bad) cholesterol</li>
                    <li>• Increases HDL (good) cholesterol</li>
                    <li>• Strengthens heart muscle</li>
                    <li>• Improves circulation and blood flow</li>
                    <li>• Reduces risk of heart attack/stroke by 35%</li>
                  </ul>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-rose-800">Exercise Guidelines</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Frequency:</strong> 5-6 days per week</li>
                    <li>• <strong>Duration:</strong> 30-60 minutes per session</li>
                    <li>• <strong>Intensity:</strong> Moderate (50-70% max HR)</li>
                    <li>• <strong>Type:</strong> Aerobic/cardio activities</li>
                    <li>• <strong>Always:</strong> Get doctor clearance first</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Heart Rate */}
      <section id="heart-rate" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Target Heart Rate</h2>

            <Card className="border-red-200 mb-8">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Heart className="w-6 h-6 text-red-600 mr-3" />
                  <CardTitle className="text-red-700">Calculate Your Target Heart Rate Zone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Formula:</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>1. Max Heart Rate:</strong> 220 - Your Age
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>2. Moderate Intensity Zone (50-70%):</strong> Max HR × 0.50 to Max HR × 0.70
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>3. Vigorous Intensity Zone (70-85%):</strong> Max HR × 0.70 to Max HR × 0.85
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <h5 className="font-semibold text-blue-800 mb-2">Age 50</h5>
                      <p className="text-sm text-gray-700">Max HR: 170 bpm</p>
                      <p className="text-xs text-gray-600">Moderate: 85-119 bpm</p>
                      <p className="text-xs text-gray-600">Vigorous: 119-145 bpm</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <h5 className="font-semibold text-purple-800 mb-2">Age 60</h5>
                      <p className="text-sm text-gray-700">Max HR: 160 bpm</p>
                      <p className="text-xs text-gray-600">Moderate: 80-112 bpm</p>
                      <p className="text-xs text-gray-600">Vigorous: 112-136 bpm</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg text-center">
                      <h5 className="font-semibold text-teal-800 mb-2">Age 70</h5>
                      <p className="text-sm text-gray-700">Max HR: 150 bpm</p>
                      <p className="text-xs text-gray-600">Moderate: 75-105 bpm</p>
                      <p className="text-xs text-gray-600">Vigorous: 105-128 bpm</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-yellow-800">Monitor Your Heart Rate:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Use fitness tracker, smartwatch, or chest strap</li>
                      <li>• Or take pulse manually: Count beats for 15 sec × 4</li>
                      <li>• Stay in moderate zone (50-70%) for heart health</li>
                      <li>• "Talk test": Should be able to hold conversation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Exercises */}
      <section id="exercises" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Best Exercises for Heart Health</h2>

            <div className="space-y-8">
              {/* Walking */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Activity className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">Walking - #1 Heart-Healthy Exercise</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Walking is the safest, most accessible, and most effective exercise for heart health. It's low-impact,
                    requires no equipment, and delivers excellent cardiovascular benefits when done regularly.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Daily Walking Program:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Beginner:</strong> 15-20 min, 3-4x/week</li>
                        <li>• <strong>Intermediate:</strong> 30 min, 5x/week</li>
                        <li>• <strong>Advanced:</strong> 45-60 min, 5-6x/week</li>
                        <li>• Pace: Brisk (3-4 mph) - can talk but slightly breathless</li>
                        <li>• Aim for 7,000-10,000 steps daily</li>
                        <li>• Walk after meals to lower blood sugar</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Walking Tips:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Wear comfortable, supportive shoes</li>
                        <li>• Walk at consistent pace</li>
                        <li>• Swing arms naturally</li>
                        <li>• Add hills for extra challenge</li>
                        <li>• Walk with friend for motivation</li>
                        <li>• Track progress with pedometer/app</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Swimming */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Activity className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Swimming & Water Aerobics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Swimming is excellent for heart health - full-body aerobic workout with zero impact on joints. Perfect
                    for people with arthritis or mobility issues.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Swimming Program (3-4x/week):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Beginner:</strong> 20-30 min continuous swimming (any stroke)</li>
                      <li>• <strong>Intermediate:</strong> 30-45 min laps with 1-2 min rest every 10 min</li>
                      <li>• <strong>Water aerobics:</strong> 45 min class (excellent low-impact option)</li>
                      <li>• <strong>Aqua jogging:</strong> 20-30 min in deep end with flotation belt</li>
                      <li>• Maintain moderate pace - should elevate heart rate but not be gasping</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Cycling */}
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Activity className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">Cycling (Outdoor or Stationary)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Cycling strengthens heart and legs while being gentle on joints. Stationary bikes are ideal for those
                    with balance concerns or during bad weather.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Cycling Program (3-5x/week):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Stationary bike:</strong> 20-45 min at moderate resistance</li>
                      <li>• <strong>Outdoor cycling:</strong> 30-60 min on flat terrain</li>
                      <li>• Keep RPM (pedal speed) at 60-80 for steady cardio</li>
                      <li>• Maintain conversational pace</li>
                      <li>• Gradually increase duration before increasing intensity</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Strength Training */}
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Target className="w-6 h-6 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-700">Light Strength Training (2x/week)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    While cardio is priority, strength training 2x/week helps maintain muscle mass, supports metabolism,
                    and improves overall heart health.
                  </p>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Circuit Workout (30 min, 2x/week):</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Bodyweight squats:</strong> 2 sets x 10-12 reps</li>
                      <li>• <strong>Wall push-ups:</strong> 2 sets x 10 reps</li>
                      <li>• <strong>Seated rows (resistance band):</strong> 2 sets x 12 reps</li>
                      <li>• <strong>Step-ups:</strong> 2 sets x 10 each leg</li>
                      <li>• <strong>Plank hold:</strong> 2 sets x 20-30 seconds</li>
                      <li>• Use light weights (5-10 lbs), focus on control not intensity</li>
                      <li>• Rest 1-2 minutes between exercises</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Week */}
      <section id="weekly-plan" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Heart-Healthy Exercise Week</h2>

            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-800">Weekly Cardiovascular Training Schedule</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-gray-800">Monday:</h5>
                    <p className="text-sm text-gray-700">Brisk walk (30 min) at moderate pace</p>
                    <p className="text-xs text-gray-500">Target HR: 50-70% max</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Tuesday:</h5>
                    <p className="text-sm text-gray-700">Stationary bike (30 min) + Light strength training circuit (20 min)</p>
                    <p className="text-xs text-gray-500">Total: 50 min</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Wednesday:</h5>
                    <p className="text-sm text-gray-700">Swimming or water aerobics (30-40 min)</p>
                    <p className="text-xs text-gray-500">Low-impact cardio day</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Thursday:</h5>
                    <p className="text-sm text-gray-700">Brisk walk (35 min) - can break into two 15-20 min sessions</p>
                    <p className="text-xs text-gray-500">Target HR: 50-70% max</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Friday:</h5>
                    <p className="text-sm text-gray-700">Cycling (outdoor or stationary, 30 min) + Light strength training (20 min)</p>
                    <p className="text-xs text-gray-500">Total: 50 min</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Saturday:</h5>
                    <p className="text-sm text-gray-700">Longer walk or hike (45-60 min) at comfortable pace</p>
                    <p className="text-xs text-gray-500">Enjoy outdoor activity</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Sunday:</h5>
                    <p className="text-sm text-gray-700">Active recovery - Gentle yoga or easy 20 min walk</p>
                    <p className="text-xs text-gray-500">Rest and recovery</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-red-200">
                  <p className="text-sm font-semibold text-red-700">Weekly Total: ~200 min moderate cardio + 2 strength sessions = Excellent heart health!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Success Tips */}
      <section id="safety" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Heart Health Exercise Safety & Success</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Get doctor clearance:</strong> Especially if over 50 or have heart disease</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Start slowly:</strong> Gradually increase duration before intensity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Monitor heart rate:</strong> Stay in 50-70% zone</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Warm up & cool down:</strong> 5 min each to ease heart rate transitions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay consistent:</strong> Daily moderate beats occasional intense</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">⚠️ Warning Signs - STOP & Call Doctor:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Chest pain or pressure:</strong> STOP immediately, call 911</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Unusual shortness of breath:</strong> Beyond normal exertion</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Dizziness or lightheadedness:</strong> Stop and rest</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Irregular heartbeat:</strong> Heart racing or skipping beats</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Pain in jaw, arm, or back:</strong> Can indicate heart issue</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-rose-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Heart Health Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise is crucial, but combine with the DASH diet - low sodium, high potassium, rich in fruits and vegetables -
              for maximum heart health and blood pressure control.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="/blog/heart-health">
                  View DASH Diet Guide
                </Link>
              </Button>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/ai-coach">
                  Get Personal Plan
                </Link>
              </Button>
            </div>
            <p className="text-white text-sm mt-6">
              ❤️ Always consult your doctor before starting any exercise program, especially with heart conditions
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
            <RelatedContent />
          </div>
        </div>
      </section>
    </div>
  )
}
