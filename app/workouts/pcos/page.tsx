import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Zap, Clock, Target, TrendingUp, Apple, Sparkles } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import DynamicRelatedContent from "@/components/DynamicRelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "PCOS Workout Plan 2025 | Best Home & Gym Exercises for Weight Loss",
  description: "Complete PCOS workout guide with proven home and gym exercises to improve insulin sensitivity, balance hormones, and achieve sustainable weight loss naturally.",
  keywords: "PCOS workout, PCOS exercise plan, PCOS weight loss workout, best exercises for PCOS, PCOS gym routine, home workout for PCOS, insulin resistance exercises",
  alternates: {
    canonical: "https://www.fitplanindia.com/workouts/pcos",
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
    title: "PCOS Workout Plan 2025 | Home & Gym Exercise Guide",
    description: "Evidence-based PCOS workout routines for home and gym to manage symptoms and boost weight loss.",
    url: "https://www.fitplanindia.com/workouts/pcos",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function PCOSWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "PCOS Plan", href: "/workouts/pcos" },
  ]

  const tocItems = [
    { id: "best-exercise", label: "Best Exercise for PCOS?" },
    { id: "belly-fat", label: "How to Lose PCOS Belly Fat" },
    { id: "home-workouts", label: "Home Workout Plan" },
    { id: "gym-workouts", label: "Gym Workout Plan" },
    { id: "yoga", label: "Yoga vs Cardio?" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Which exercise is best for PCOS belly fat?",
      answer: "Strength training is the absolute best. Muscle is metabolically active tissue. When you build muscle, it acts like a sponge, soaking up excess blood sugar and directly combating the insulin resistance that causes PCOS belly fat."
    },
    {
      question: "Can I do HIIT or running with PCOS?",
      answer: "Use extreme caution. While HIIT burns calories, for many women with PCOS it significantly raises cortisol (the stress hormone). High cortisol triggers your body to hold onto fat. If you feel 'wired but tired' after a workout, switch to strength training and slow walking."
    },
    {
      question: "How many days should I workout with PCOS?",
      answer: "Consistency beats intensity. Aim for 3-4 days of strength training (30-45 minutes) and 2 days of LISS (Low-Intensity Steady State cardio, like brisk walking or cycling). Rest days are mandatory for hormone balancing."
    },
    {
      question: "Is Yoga enough for weight loss with PCOS?",
      answer: "Yoga is incredible for lowering cortisol and stress, making it a critical component of PCOS management. However, for significant weight loss, you must pair it with strength training to build the muscle needed to reverse insulin resistance."
    },
    {
      question: "Will lifting weights make me bulky?",
      answer: "No. Women simply do not have enough testosterone to get 'bulky' by accident. Lifting weights will just make you look 'toned', leaner, and give you a faster metabolism."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ArticleSchema
        headline="What is the Best Workout for PCOS Weight Loss? (2025 Guide)"
        description="Discover the exact workouts to reverse PCOS insulin resistance, lose belly fat, and balance hormones. Featuring Yoga, Home, and Gym plans."
        keywords={["PCOS workout", "insulin resistance exercises", "how to lose PCOS belly fat", "PCOS yoga", "home workout pcos weight loss"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      <StickyTOC items={tocItems} />

      {/* Hero Answer Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              💪 PCOS Answer Engine
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What is the Best Workout for PCOS Weight Loss?
            </h1>
            <p className="text-xl text-purple-100 mb-8 border-l-4 border-purple-300 pl-4 text-left bg-white/10 p-4 rounded-r-lg">
              <strong>The Short Answer:</strong> The best workout for PCOS combines <strong>progressive strength training</strong> (to build muscle and reverse insulin resistance) with <strong>LISS (Low-Intensity Steady State cardio like walking)</strong> and <strong>Yoga</strong> (to lower cortisol and stress). Avoid excessive high-intensity cardio (HIIT) which can worsen hormonal imbalances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#home-workouts">Skip to Home Workout</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Q1: Deep Dive on Best Exercise */}
      <section id="best-exercise" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              Why is Strength Training the "Holy Grail" for PCOS?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Most women with PCOS are told to "just do more cardio to burn calories." This is outdated advice that often fails. PCOS is primarily an issue of <strong>Insulin Resistance</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="font-bold text-lg mb-3 text-purple-800">The Problem with Only Cardio</h3>
                <p className="text-gray-700">Endless hours on the treadmill spike your Cortisol (stress hormone). High cortisol tells your body, "We are in danger, store fat immediately!"—specifically around your abdomen.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                <h3 className="font-bold text-lg mb-3 text-indigo-800">The Strength Training Solution</h3>
                <p className="text-gray-700">Muscle tissue uses glucose (sugar) for energy. The more muscle you have, the more sensitive your body becomes to insulin. You are literally building an engine that burns up the sugar causing your PCOS symptoms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q2: PCOS Belly Fat */}
      <section id="belly-fat" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              How Do I Specifically Target the "PCOS Belly"?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              You cannot "spot reduce" fat from your stomach with crunches. PCOS belly fat is hormonally driven. To lose it, you must follow the <strong>PCOS Workout Hierarchy:</strong>
            </p>

            <div className="space-y-4">
              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="p-6 flex items-start">
                  <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-purple-700 mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Step 1: Lift Heavy Things (3x/Week)</h4>
                    <p className="text-gray-600 mt-1">Focus on compound movements (Squats, Deadlifts, Push-ups) that use multiple large muscle groups at once for maximum metabolic impact.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-indigo-600">
                <CardContent className="p-6 flex items-start">
                  <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-indigo-700 mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Step 2: Get 8,000+ Steps Daily</h4>
                    <p className="text-gray-600 mt-1">Walking is the ultimate PCOS cheat code. It burns fat without raising cortisol. Walk outside in the morning to also help regulate your circadian rhythm and sleep.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600">
                <CardContent className="p-6 flex items-start">
                  <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center font-bold text-green-700 mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Step 3: Stress Management Yoga (2x/Week)</h4>
                    <p className="text-gray-600 mt-1">Include restorative yoga or pilates to stretch, recover, and actively bring down systemic inflammation.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Home Workouts Section */}
      <section id="home-workouts" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex justify-center items-center">
              <Home className="w-8 h-8 mr-3 text-purple-600" />
              The 30-Minute PCOS Home Routine
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Perform this circuit 3 times a week. No equipment required. Do 3 rounds total, resting 60 seconds between rounds.
            </p>

            <Card className="border-purple-200 shadow-sm">
              <CardContent className="p-0">
                <div className="divide-y divide-purple-100">
                  <div className="p-6 flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/3 mb-2 md:mb-0">
                      <Badge className="bg-purple-100 text-purple-800 mb-2 hover:bg-purple-200">Lower Body</Badge>
                      <h4 className="font-bold text-lg">Bodyweight Squats</h4>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-700 font-semibold mb-1">15-20 Reps</p>
                      <p className="text-sm text-gray-500">Keep chest up, push through heels. Targets the largest muscles (quads/glutes) to burn maximum glucose.</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col md:flex-row md:items-center bg-gray-50">
                    <div className="md:w-1/3 mb-2 md:mb-0">
                      <Badge className="bg-blue-100 text-blue-800 mb-2 hover:bg-blue-200">Upper Body</Badge>
                      <h4 className="font-bold text-lg">Push-Ups</h4>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-700 font-semibold mb-1">10-15 Reps (Knees if needed)</p>
                      <p className="text-sm text-gray-500">Keep elbows tucked. Essential for building upper body strength and core stability.</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/3 mb-2 md:mb-0">
                      <Badge className="bg-purple-100 text-purple-800 mb-2 hover:bg-purple-200">Lower Body</Badge>
                      <h4 className="font-bold text-lg">Reverse Lunges</h4>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-700 font-semibold mb-1">10-12 Reps per leg</p>
                      <p className="text-sm text-gray-500">Step backward instead of forward to protect the knees while targeting the glutes.</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col md:flex-row md:items-center bg-gray-50">
                    <div className="md:w-1/3 mb-2 md:mb-0">
                      <Badge className="bg-green-100 text-green-800 mb-2 hover:bg-green-200">Core/PCOS Belly</Badge>
                      <h4 className="font-bold text-lg">Plank Hold</h4>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-700 font-semibold mb-1">30-60 Seconds</p>
                      <p className="text-sm text-gray-500">Do not let hips sag. Builds deep transverse abdominis strength better than crunches.</p>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/3 mb-2 md:mb-0">
                      <Badge className="bg-purple-100 text-purple-800 mb-2 hover:bg-purple-200">Lower Body</Badge>
                      <h4 className="font-bold text-lg">Glute Bridges</h4>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-700 font-semibold mb-1">15-20 Reps (Squeeze at top)</p>
                      <p className="text-sm text-gray-500">Lifts and tightens the glutes while stretching out tight hip flexors from sitting.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gym Workouts Section */}
      <section id="gym-workouts" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex justify-center items-center">
              <Dumbbell className="w-8 h-8 mr-3 text-indigo-600" />
              The PCOS Gym Protocol (Adding Weight)
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Once bodyweight is too easy, add resistance. Split your days into Lower Body and Upper Body to allow for recovery.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-indigo-200 shadow-sm">
                <CardHeader className="bg-indigo-50 border-b border-indigo-100">
                  <CardTitle className="text-indigo-800 flex items-center">
                    Day A: Lower Body Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="border-b border-gray-100 pb-2">
                      <div className="font-bold text-gray-900">Goblet Squat (Dumbbell)</div>
                      <div className="text-sm text-gray-600">3 Sets x 10-12 Reps • 90s Rest</div>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <div className="font-bold text-gray-900">Romanian Deadlift (RDL)</div>
                      <div className="text-sm text-gray-600">3 Sets x 10-12 Reps • 90s Rest</div>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <div className="font-bold text-gray-900">Leg Press Machine</div>
                      <div className="text-sm text-gray-600">3 Sets x 12-15 Reps • 60s Rest</div>
                    </li>
                    <li>
                      <div className="font-bold text-gray-900">Hamstring Curl Machine</div>
                      <div className="text-sm text-gray-600">3 Sets x 15 Reps • 45s Rest</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-pink-200 shadow-sm">
                <CardHeader className="bg-pink-50 border-b border-pink-100">
                  <CardTitle className="text-pink-800 flex items-center">
                    Day B: Upper Body Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="border-b border-gray-100 pb-2">
                      <div className="font-bold text-gray-900">Dumbbell Bench Press</div>
                      <div className="text-sm text-gray-600">3 Sets x 10-12 Reps • 90s Rest</div>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <div className="font-bold text-gray-900">Lat Pulldown Machine</div>
                      <div className="text-sm text-gray-600">3 Sets x 12 Reps • 60s Rest</div>
                    </li>
                    <li className="border-b border-gray-100 pb-2">
                      <div className="font-bold text-gray-900">Seated Cable Row</div>
                      <div className="text-sm text-gray-600">3 Sets x 12-15 Reps • 60s Rest</div>
                    </li>
                    <li>
                      <div className="font-bold text-gray-900">Dumbbell Shoulder Press</div>
                      <div className="text-sm text-gray-600">3 Sets x 10-12 Reps • 60s Rest</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga & Stretching */}
      <section id="yoga" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 text-green-200 opacity-50">
                <Heart className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't Forget Yoga for PCOS</h2>
                <p className="text-lg text-gray-700 mb-6">
                  While strength training fixes insulin resistance, Yoga fixes the mind-body connection and lowers Cortisol. Incorporate 2 days of gentle yoga on your rest days.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-800"><CheckCircle className="w-5 h-5 text-green-600 mr-2" /> Baddha Konasana (Butterfly Pose)</li>
                    <li className="flex items-center text-gray-800"><CheckCircle className="w-5 h-5 text-green-600 mr-2" /> Supta Baddha Konasana</li>
                    <li className="flex items-center text-gray-800"><CheckCircle className="w-5 h-5 text-green-600 mr-2" /> Bhujangasana (Cobra Pose)</li>
                  </ul>
                  <p className="text-gray-600 text-sm border-l-2 border-green-300 pl-4">
                    These specific poses increase blood flow to the pelvic region, help stimulate the ovaries, and dramatically assist in stress reduction that triggers adrenal PCOS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your PCOS Management Plan
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Exercise works best when combined with proper nutrition. Get your personalized PCOS diet plan
              to maximize your results and manage symptoms effectively.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">PCOS Diet Guide</h4>
                <p className="text-purple-100 text-sm mb-4">
                  Learn what to eat, foods to avoid, meal plans, and supplements to complement your workout routine.
                </p>
                <Button size="lg" className="w-full bg-white text-purple-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/pcos">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4">
                  Use our AI Coach to create a complete PCOS management plan tailored to your needs and goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-purple-200 text-sm mt-6">
              ✨ Join women managing PCOS naturally through diet and exercise
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
            <DynamicRelatedContent topic="pcos" />
          </div>
        </div>
      </section>
    </div>
  )
}
