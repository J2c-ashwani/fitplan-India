import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Baby, Apple } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "Post-Pregnancy Workout Plan 2025 | Safe Postpartum Exercises & Recovery",
  description: "Complete post-pregnancy workout guide with safe exercises for postpartum recovery, core healing, pelvic floor strengthening, and gradual fitness restoration after childbirth.",
  keywords: "post-pregnancy workout, postpartum exercise, after pregnancy workout, postnatal fitness, diastasis recti exercises, pelvic floor exercises, c-section recovery workout",
  alternates: {
    canonical: "https://www.fitplanindia.com/workouts/post-pregnancy",
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
    title: "Post-Pregnancy Workout Plan 2025 | Safe Postpartum Exercise Guide",
    description: "Evidence-based post-pregnancy workout routines for safe recovery and gradual fitness restoration.",
    url: "https://www.fitplanindia.com/workouts/post-pregnancy",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function PostPregnancyWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Post-Pregnancy Recovery", href: "/workouts/post-pregnancy" },
  ]

  const tocItems = [
    { id: "stats", label: "Key Stats" },
    { id: "why-exercise", label: "Why Exercise?" },
    { id: "home-workouts", label: "Home Workouts" },
    { id: "gym-workouts", label: "Gym Workouts" },
    { id: "guidelines", label: "Safety Guidelines" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "When can I start exercising after giving birth?",
      answer: "Wait for doctor clearance at 6-week checkup (vaginal delivery) or 8-12 week checkup (C-section). Earlier activity is limited to GENTLE walking and pelvic floor exercises only. Your body needs TIME to heal - uterus shrinking, bleeding stopping, tissues repairing. Exercising too soon increases risk of prolapse, bleeding, and complications."
    },
    {
      question: "What is diastasis recti and how do I know if I have it?",
      answer: "Diastasis recti is abdominal muscle separation that happens during pregnancy. To check: lie on back, knees bent, lift head slightly. Feel along midline of belly - if there's a gap wider than 2 finger-widths, you likely have it. Avoid crunches, sit-ups, planks until healed. Do deep core breathing, pelvic tilts, modified exercises. See physical therapist if severe (3+ fingers)."
    },
    {
      question: "Why am I leaking urine when I exercise postpartum?",
      answer: "Pelvic floor muscles are weakened from pregnancy/delivery causing stress incontinence. This is COMMON but NOT normal. Fix it: Do Kegels 3x daily (10 reps, 10-sec holds), avoid jumping/running/HIIT until strengthened, see pelvic floor physical therapist, empty bladder before exercise. Typically improves in 2-3 months with consistent pelvic floor work."
    },
    {
      question: "Can I do ab exercises if I'm breastfeeding?",
      answer: "Yes, but choose SAFE exercises: pelvic tilts, dead bugs, bird dogs, modified planks (on knees), diaphragmatic breathing. AVOID: crunches, sit-ups, v-ups, full planks (until diastasis closes). Breastfeeding doesn't affect core healing - focus on gentle core reconnection first. Wear supportive nursing bra during exercise."
    },
    {
      question: "How long does it take to get my body back after pregnancy?",
      answer: "Realistic timeline: 9-12 months to feel 'normal' again, 12-18 months to fully recover strength/fitness. It took 9 months to grow baby - give at least that long to recover. Focus on healing FIRST (months 1-3), gradual strengthening SECOND (months 4-6), then return to regular fitness (month 7+). Patience is critical - rushing causes injuries."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ArticleSchema
        headline="Post-Pregnancy Workout Plan 2025 | Safe Postpartum Exercises"
        description="Complete post-pregnancy workout guide with safe exercises for postpartum recovery, core healing, and pelvic floor strengthening."
        keywords={["postpartum workout", "post natal exercises", "pelvic floor", "diastasis recti", "core recovery"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-700 to-rose-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-pink-700 font-semibold">
              👶 Complete Post-Pregnancy Workout Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Post-Pregnancy Workout Plan: Safe Postpartum Exercise & Recovery
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover safe, effective postpartum exercises to heal your core, strengthen your pelvic floor,
              restore fitness, and regain strength after childbirth with doctor-approved routines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#home-workouts">
                  Home Workouts
                </Link>
              </Button>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="#gym-workouts">
                  Gym Workouts
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
                <div className="text-3xl font-bold text-pink-600 mb-2">6-8 Weeks</div>
                <div className="text-gray-600">Wait Before Exercise (Vaginal)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">8-12 Weeks</div>
                <div className="text-gray-600">Wait After C-Section</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">10-15min</div>
                <div className="text-gray-600">Starting Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3-4 Months</div>
                <div className="text-gray-600">Core Recovery Timeline</div>
              </div>
            </div>

            <div id="why-exercise" className="bg-white rounded-lg shadow-sm p-8 mb-8 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Postpartum Exercise is Important</h2>
              <p className="text-lg text-gray-700 mb-6">
                Exercise after pregnancy is crucial for physical recovery, mental health, and overall wellbeing. However,
                your body has undergone significant changes and needs time to heal before resuming activity. Starting with
                gentle movements, progressing to core rehabilitation, and eventually returning to regular exercise helps
                restore strength, heal diastasis recti, strengthen pelvic floor muscles, improve mood, boost energy, and
                support healthy weight loss. Always get medical clearance before starting any postpartum exercise program.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-pink-800">Benefits of Postpartum Exercise</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Accelerates postpartum recovery and healing</li>
                    <li>• Reduces risk of postpartum depression</li>
                    <li>• Strengthens core and pelvic floor muscles</li>
                    <li>• Improves energy levels and sleep quality</li>
                    <li>• Supports healthy weight loss and body composition</li>
                    <li>• Enhances cardiovascular fitness and endurance</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Exercise Priorities Postpartum</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>First Priority:</strong> Pelvic floor exercises (Kegels)</li>
                    <li>• <strong>Second Priority:</strong> Core reconnection and breathing</li>
                    <li>• <strong>Third Priority:</strong> Gentle walking and movement</li>
                    <li>• <strong>Fourth Priority:</strong> Posture and alignment exercises</li>
                    <li>• <strong>Fifth Priority:</strong> Gradual strength rebuilding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Safety Guidelines */}
      <section className="py-8 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-red-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-900 text-xl mb-3">🚨 CRITICAL: When NOT to Exercise</h4>
                  <ul className="text-gray-800 space-y-2 mb-4">
                    <li>• <strong>Before doctor clearance</strong> (typically 6-8 weeks vaginal, 8-12 weeks C-section)</li>
                    <li>• <strong>Heavy bleeding or discharge</strong> - continue resting</li>
                    <li>• <strong>Severe pain</strong> in pelvis, abdomen, or incision site</li>
                    <li>• <strong>Dizziness, chest pain,</strong> or shortness of breath</li>
                    <li>• <strong>Active infection</strong> or fever</li>
                    <li>• <strong>Unhealed C-section incision</strong> or perineal tears</li>
                  </ul>
                  <p className="text-sm text-red-900 font-semibold">
                    ⚠️ ALWAYS get medical clearance from your doctor before starting any postpartum exercise program!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Workouts Section */}
      <section id="home-workouts" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Home className="w-16 h-16 text-pink-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Post-Pregnancy Home Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Safe, gentle exercises you can do at home to begin your postpartum recovery journey.
              </p>
            </div>

            {/* Phase 1: Week 1-6 (After Clearance) */}
            <Card className="border-pink-200 mb-8">
              <CardHeader className="bg-pink-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-pink-800">Phase 1: Early Recovery (Weeks 6-10)</CardTitle>
                  <Badge className="bg-pink-600 text-white">10-15 min daily</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>🩺 Medical Clearance Required:</strong> Do not begin this phase until your doctor has cleared you
                    for exercise (typically 6-8 weeks for vaginal birth, 8-12 weeks for C-section).
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Pelvic Floor Exercises (Kegels)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10 holds | <strong>Duration:</strong> 5-10 seconds each
                    </p>
                    <p className="text-sm text-gray-600">
                      Tighten pelvic floor muscles as if stopping urine flow. Hold, then release. Most important postpartum exercise.
                      Can be done lying, sitting, or standing. Do 3x daily.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Diaphragmatic Breathing</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 5 minutes | <strong>Frequency:</strong> 2-3x daily
                    </p>
                    <p className="text-sm text-gray-600">
                      Lie on back, knees bent. Place hand on belly. Breathe deeply into belly, feeling it rise. Exhale slowly.
                      Reconnects brain to core muscles. Essential for diastasis recti healing.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Gentle Walking</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 10-15 minutes | <strong>Pace:</strong> Very slow and comfortable
                    </p>
                    <p className="text-sm text-gray-600">
                      Start with short walks around the house or yard. Gradually increase to neighborhood walks.
                      Don't push pace - focus on gentle movement. Can push stroller if comfortable.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Pelvic Tilts (Lying Down)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 30 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Lie on back, knees bent, feet flat. Gently tilt pelvis up, flattening lower back against floor.
                      Hold 3 seconds, release. Gentle core activation without crunches.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Ankle Pumps & Circles</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 15 each direction
                    </p>
                    <p className="text-sm text-gray-600">
                      Lie or sit comfortably. Pump ankles up and down, then circle both directions.
                      Improves circulation, reduces swelling, prevents blood clots.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 2: Week 10-16 */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Phase 2: Building Strength (Weeks 10-16)</CardTitle>
                  <Badge className="bg-blue-600 text-white">20-25 min, 3-4x/week</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Progress to this phase only if: bleeding has completely stopped, no pain during Phase 1 exercises,
                  doctor approval, and diastasis recti gap is closing (check with physical therapist if unsure).
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Modified Plank (on knees)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2-3 | <strong>Duration:</strong> 10-20 seconds | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Start on hands and knees, keep body in straight line from head to knees. Engage core, don't sag hips.
                      Progress slowly - stop if you see doming in abdomen.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Glute Bridges</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2-3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Lie on back, knees bent, feet flat. Lift hips up, squeezing glutes at top. Lower slowly.
                      Excellent for glute strength without stressing core.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Wall Push-Ups</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Stand arm's length from wall, hands on wall at shoulder height. Lean in, push back.
                      Rebuilds upper body strength without floor exercises.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Squats (Bodyweight or Chair-Assisted)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2-3 | <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Stand with feet shoulder-width, lower down as if sitting in chair, keep chest up.
                      Use chair for support if needed. Great functional strength exercise.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Bird Dog (Modified)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 8-10 each side | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Start on hands and knees. Extend opposite arm and leg, hold 3 seconds, return. Alternate sides.
                      Excellent for core stability and balance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phase 3: Month 4+ */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">Phase 3: Return to Fitness (Month 4+)</CardTitle>
                  <Badge className="bg-green-600 text-white">30-40 min, 4-5x/week</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Progress to this phase when: core is fully healed (no diastasis or gap closed), pelvic floor is strong,
                  no pain or heaviness, clearance from doctor or physical therapist for regular exercise.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Cardio Options:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Brisk walking (30-40 minutes)</li>
                      <li>• Swimming (gentle laps)</li>
                      <li>• Stationary cycling</li>
                      <li>• Low-impact aerobics classes</li>
                      <li>• Elliptical machine</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Strength Training:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Bodyweight exercises (progressive)</li>
                      <li>• Light dumbbells (start 3-5 lbs)</li>
                      <li>• Resistance bands</li>
                      <li>• Postnatal strength classes</li>
                      <li>• Full planks, lunges, squats</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gym Workouts Section */}
      <section id="gym-workouts" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Dumbbell className="w-16 h-16 text-rose-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Post-Pregnancy Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Safe gym exercises for when you're ready to return to fitness facilities (typically 4+ months postpartum).
              </p>
            </div>

            {/* Gym Workout 1: Beginner Return */}
            <Card className="border-rose-200 mb-8">
              <CardHeader className="bg-rose-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-rose-800">Beginner Gym Routine (Months 4-6)</CardTitle>
                  <Badge className="bg-rose-600 text-white">30-40 min, 3x/week</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Recumbent Bike Warm-Up</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Duration:</strong> 5-10 minutes | <strong>Resistance:</strong> Low
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Seated cardio with back support, gentle on pelvic floor</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Leg Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2-3 | <strong>Reps:</strong> 12-15 | <strong>Weight:</strong> Light
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Seated position protects back and core during leg strengthening</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Chest Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Weight:</strong> Light
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Back-supported upper body strengthening</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Seated Row Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 12-15 | <strong>Weight:</strong> Light
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Improves posture (important for breastfeeding moms)</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Assisted Pull-Up Machine (or Lat Pulldown)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Assistance:</strong> High
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Builds back strength with support</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">6. Cable Glute Kickbacks</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 12-15 each leg | <strong>Weight:</strong> Light
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Targets glutes without loading spine</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 2: Postnatal Classes */}
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">Recommended Postnatal Fitness Classes</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">✅ Safe Postnatal Classes:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Postnatal yoga (with modifications)</li>
                      <li>• Postnatal Pilates (core-safe)</li>
                      <li>• Mom & baby fitness classes</li>
                      <li>• Aqua aerobics (low-impact)</li>
                      <li>• Postnatal strength training</li>
                      <li>• Barre classes (modified)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">❌ Avoid Until Fully Healed:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• High-intensity interval training (HIIT)</li>
                      <li>• CrossFit or intense boot camps</li>
                      <li>• Running (wait 4-6 months minimum)</li>
                      <li>• Jump training or plyometrics</li>
                      <li>• Heavy weightlifting (initially)</li>
                      <li>• Traditional ab exercises (crunches, sit-ups)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exercise Guidelines */}
      <section id="guidelines" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Postpartum Exercise Safety Guidelines</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Safe Exercise Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Get doctor clearance:</strong> Wait for 6-week (or longer) checkup approval</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Start very slowly:</strong> Your body needs months to fully heal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Wear supportive bra:</strong> Essential if breastfeeding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Empty bladder first:</strong> Reduces pelvic floor stress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Listen to your body:</strong> Pain is a signal to stop and rest</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Warning Signs to Stop:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Increased bleeding:</strong> Or return of bright red bleeding</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Pelvic heaviness/bulging:</strong> Signs of pelvic organ prolapse</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Abdominal doming:</strong> Core separation (diastasis recti)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Leaking urine:</strong> Pelvic floor needs more strengthening first</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Pain in pelvis/back:</strong> Stop and consult doctor or PT</span>
                  </li>
                </ul>
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
      <section className="py-16 bg-gradient-to-r from-pink-700 to-rose-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Postpartum Recovery
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise alone isn't enough - proper nutrition is crucial for postpartum recovery, milk production,
              and healthy weight loss. Get your complete postpartum plan today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Post-Pregnancy Diet</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn proper nutrition for recovery, breastfeeding support, and safe postpartum weight loss strategies.
                </p>
                <Button size="lg" className="w-full bg-white text-pink-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/post-pregnancy">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Baby className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a complete postpartum recovery plan tailored to your specific needs.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands of new moms recovering safely and regaining strength postpartum
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
