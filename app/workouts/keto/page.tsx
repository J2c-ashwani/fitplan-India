import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Zap, Apple, Flame } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "Keto Workout Plan | Best Exercises for Ketogenic Diet & Fat Loss",
  description: "Complete keto workout guide with fat-burning exercises, strength training for ketosis, energy management, and performance optimization on low-carb high-fat diet.",
  keywords: "keto workout, ketogenic exercise, low carb workout, keto fat burning exercises, keto gym routine, keto bodybuilding",
  alternates: {
    canonical: "https://www.fitplanindia.com/workouts/keto",
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
    title: "Keto Workout Plan | Exercise Guide for Ketogenic Diet",
    description: "Evidence-based keto workouts for maximum fat burning and muscle preservation.",
    url: "https://www.fitplanindia.com/workouts/keto",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function KetoWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Keto Plan", href: "/workouts/keto" },
  ]

  const tocItems = [
    { id: "stats", label: "Key Stats" },
    { id: "why-keto", label: "KetoExercise" },
    { id: "home-workouts", label: "Home Workouts" },
    { id: "gym-workouts", label: "Gym Workouts" },
    { id: "tips", label: "Tips" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Why do I feel weak during keto workouts initially?",
      answer: "During the first 2-4 weeks of keto, your body is transitioning from burning glucose to burning fat for fuel (fat adaptation). Performance drops 20-30% during this period - this is NORMAL. Once adapted (4-6 weeks), energy returns to normal or better. Be patient, reduce intensity initially, and don't quit keto due to temporary fatigue!"
    },
    {
      question: "What's the best exercise type for keto?",
      answer: "Strength training is #1 - preserves muscle mass perfectly on keto.  LISS cardio (walking, cycling) is #2 - burns pure fat at low intensities. Avoid excessive HIIT initially (depletes glycogen). Once fat-adapted (4+ weeks), you can add moderate HIIT 1-2x weekly."
    },
    {
      question: "Can I build muscle on ketodiet?",
      answer: "Yes! Keto is EXCELLENT for building muscle IF you eat enough protein (0.8-1g per lb bodyweight) and lift progressively heavier weights. Keto preserves muscle better than high-carb during calorie deficits. Many bodybuilders use keto for contest prep to maintain muscle while losing fat."
    },
    {
      question: "Should I do fasted cardio on keto?",
      answer: "Yes - fasted cardio on keto burns even MORE  fat since you're already in ketosis. Your body taps into fat stores immediately. Best done: morning, before breakfast, 30-45 min, low-moderate intensity (walking, cycling). Strength training should NOT be fasted - need energy for performance."
    },
    {
      question: "How do I avoid the 'keto flu' while exercising?",
      answer: "Keto flu is electrolyte depletion, not flu. Fix it: Drink 3-4 liters water daily, add 5g sodium (salt), 1g potassium (supplements/avocado), 400mg magnesium. Electrolytes are CRITICAL on keto - without them, you'll feel terrible and quit. This solves 90% of keto side effects."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ArticleSchema
        headline="Keto Workout Plan | Best Exercises for Ketogenic Diet & Fat Loss"
        description="Complete keto workout guide with fat-burning exercises, strength training for ketosis, energy management, and performance optimization."
        keywords={["keto workout", "ketogenic diet exercise", "fat burning workout", "low carb high fat", "ketosis performance"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-700 to-red-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-orange-700 font-semibold">
              🔥 Complete Keto Workout Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Keto Workout Plan: Maximize Fat Burning on Ketogenic Diet
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover effective workout strategies designed for keto dieters to accelerate fat loss, preserve muscle
              mass, optimize performance in ketosis, and achieve maximum results on low-carb nutrition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#home-workouts">
                  Home Workouts
                </Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
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
                <div className="text-3xl font-bold text-orange-600 mb-2">3-5x</div>
                <div className="text-gray-600">Per Week Training</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">45-60min</div>
                <div className="text-gray-600">Per Session Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2-4 Weeks</div>
                <div className="text-gray-600">Fat Adaptation Period</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Lower</div>
                <div className="text-gray-600">Intensity Initially</div>
              </div>
            </div>

            <div id="why-keto" className="bg-white rounded-lg shadow-sm p-8 mb-8 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exercise on Keto: What You Need to Know</h2>
              <p className="text-lg text-gray-700 mb-6">
                Working out on a ketogenic diet requires understanding how your body uses fuel. During the first 2-4 weeks
                (fat adaptation period), you may experience reduced performance, especially in high-intensity activities.
                This is normal - your body is learning to efficiently burn fat instead of glucose. Once fat-adapted, many
                keto athletes report excellent endurance, stable energy, and effective fat burning. The key is starting
                moderately, focusing on strength training and low-intensity cardio initially, then gradually increasing
                intensity as you adapt. Keto is excellent for fat loss combined with muscle preservation.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Benefits of Keto + Exercise</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Accelerated fat burning (body uses fat as fuel)</li>
                    <li>• Excellent muscle preservation with adequate protein</li>
                    <li>• Stable energy without blood sugar crashes</li>
                    <li>• Reduced inflammation and faster recovery</li>
                    <li>• Improved mental clarity during workouts</li>
                    <li>• Enhanced endurance once fat-adapted</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-red-800">Best Exercise Types for Keto</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Strength Training:</strong> Builds/preserves muscle, boosts metabolism</li>
                    <li>• <strong>LISS Cardio:</strong> Low-intensity fat burning (walking, cycling)</li>
                    <li>• <strong>HIIT (Once Adapted):</strong> Short bursts after 4+ weeks</li>
                    <li>• <strong>Yoga/Flexibility:</strong> Low stress, recovery-focused</li>
                    <li>• <strong>Avoid:</strong> Long endurance runs initially</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keto Adaptation Timeline */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start">
                <Zap className="w-8 h-8 text-yellow-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-900 text-xl mb-3">⚡ Keto Exercise Adaptation Timeline:</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Week 1-2:</strong> Reduced energy, lower performance (normal). Focus on walking and light weights.</li>
                    <li>• <strong>Week 3-4:</strong> Energy returning. Gradually increase workout intensity and volume.</li>
                    <li>• <strong>Week 5-8:</strong> Fat-adapted! Performance returning to normal or better. Can do HIIT now.</li>
                    <li>• <strong>Week 8+:</strong> Fully adapted. Excellent fat burning, stable energy, muscle preservation.</li>
                    <li>• <strong>Key:</strong> Be patient during adaptation - it's temporary. Don't quit keto because of initial fatigue!</li>
                  </ul>
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
              <Home className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Keto Home Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Fat-burning workouts you can do at home optimized for ketogenic metabolism.
              </p>
            </div>

            {/* Home Workout 1: Strength Circuit */}
            <Card className="border-orange-200 mb-8">
              <CardHeader className="bg-orange-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-orange-800">Keto Strength Circuit (3-4x per week)</CardTitle>
                  <Badge className="bg-orange-600 text-white">40-50 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>💪 Strength Training is BEST for Keto:</strong> Preserves muscle mass while body burns fat,
                    boosts metabolism, and doesn't require glycogen (glucose) like intense cardio does.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Light walking, arm circles, bodyweight squats, stretching</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Circuit (4 Rounds, 60 sec rest between rounds)</h5>

                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Push-Ups (Modified if Needed)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 10-20 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Chest, shoulders, triceps. Do on knees if regular is too hard. Build upper body strength
                          without needing carbs for fuel.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Goblet Squats (Dumbbell or Kettlebell)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Hold weight at chest, squat deep. Largest muscle group = most fat burning. Essential for keto.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Inverted Rows or Pull-Ups</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 8-15 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Under table or pull-up bar. Back strength critical for balanced physique and posture.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Walking Lunges</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 12-16 total (6-8 each leg) | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Unilateral leg work. Can hold dumbbells. Builds legs and core stability.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Plank Hold</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 45-60 seconds | <strong>Rest:</strong> 60 sec (end of round)
                        </p>
                        <p className="text-sm text-gray-600">
                          Core strength. Keep body straight, breathe steady. Core work is perfect for keto - low intensity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool Down (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Full body stretching, deep breathing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 2: LISS Cardio */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">LISS Cardio - Low Intensity Steady State (Daily)</CardTitle>
                  <Badge className="bg-blue-600 text-white">30-45 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  LISS is PERFECT for keto - your body burns fat efficiently at low intensities. This is the "fat burning zone"
                  that actually works on keto because you're already using fat as primary fuel.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Best LISS Activities:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Walking:</strong> 30-60 min at conversational pace</li>
                      <li>• <strong>Cycling:</strong> Easy pace, flat terrain</li>
                      <li>• <strong>Swimming:</strong> Gentle laps, no sprints</li>
                      <li>• <strong>Elliptical:</strong> Low resistance, steady pace</li>
                      <li>• <strong>Hiking:</strong> Moderate trails</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">LISS Guidelines:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Heart rate: 60-70% max (conversational)</li>
                      <li>• Can do daily or multiple times daily</li>
                      <li>• Burns pure fat on keto</li>
                      <li>• Doesn't interfere with muscle building</li>
                      <li>• Great for recovery days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 3: HIIT (After Adaptation) */}
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-red-800">HIIT - High Intensity (2x/week, ONLY after 4+ weeks)</CardTitle>
                  <Badge className="bg-red-600 text-white">20-25 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-800">
                    <strong>⚠️ Wait Until Fat-Adapted:</strong> HIIT requires more glycogen (glucose). Only do after 4-6 weeks
                    on keto when your body can efficiently use ketones for high-intensity work.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">HIIT Protocol (20 minutes):</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Warm-up:</strong> 5 minutes easy</li>
                      <li>• <strong>Work:</strong> 30 seconds max effort (sprint, burpees, etc.)</li>
                      <li>• <strong>Rest:</strong> 90 seconds low intensity</li>
                      <li>• <strong>Repeat:</strong> 6-8 rounds</li>
                      <li>• <strong>Cool-down:</strong> 5 minutes easy</li>
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
              <Dumbbell className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Keto Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Build muscle and burn fat with strategic weight training optimized for ketogenic diet.
              </p>
            </div>

            {/* Gym Workout 1: Upper Body */}
            <Card className="border-red-200 mb-8">
              <CardHeader className="bg-red-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-red-800">Upper Body Strength (Monday/Thursday)</CardTitle>
                  <Badge className="bg-red-600 text-white">50-60 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Bench Press (Barbell or Dumbbell)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 2 min
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Primary chest builder. Keto-friendly compound movement.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Lat Pulldowns or Pull-Ups</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Back width. Works well on keto metabolism.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Overhead Dumbbell Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Shoulder development.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Cable Rows</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Back thickness and posture.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Bicep Curls + Tricep Extensions (Superset)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 each | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Arm definition work.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 2: Lower Body */}
            <Card className="border-orange-200 mb-8">
              <CardHeader className="bg-orange-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-orange-800">Lower Body Strength (Tuesday/Friday)</CardTitle>
                  <Badge className="bg-orange-600 text-white">50-60 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Barbell Squats</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 2-3 min
                    </p>
                    <p className="text-sm text-gray-600 mt-1">King of exercises. Excellent on keto once adapted.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Romanian Deadlifts</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 2 min
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Hamstrings and glutes. Fat-fueled exercise.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Leg Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Additional leg volume without taxing recovery.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Leg Curls</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Hamstring isolation.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Calf Raises</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Complete lower body development.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Cardio */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Cardio Days (Wednesday/Saturday/Sunday)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Cardio Options:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Treadmill walking (incline 5-10%): 30-45 min</li>
                      <li>• Stationary bike: 40-50 min easy pace</li>
                      <li>• Elliptical: 30-40 min low resistance</li>
                      <li>• Swimming: Gentle laps 30 min</li>
                      <li>• Stair stepper: 20-30 min moderate</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Cardio Guidelines on Keto:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fasted cardio burns even more fat</li>
                      <li>• Stay low-moderate intensity</li>
                      <li>• Can do daily - doesn't interfere</li>
                      <li>• Perfect for active recovery</li>
                      <li>• Avoid long runs initially (glycogen)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keto Exercise Tips */}
      <section id="tips" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Keto Workout Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize strength training:</strong> Best for muscle preservation on keto</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Start easy first 2 weeks:</strong> Let body adapt before pushing hard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated + electrolytes:</strong> Sodium, potassium, magnesium daily</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Protein post-workout:</strong> 20-30g within 1-2 hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>LISS cardio is king:</strong> Burns pure fat without depleting glycogen</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Quitting during adaptation:</strong> First 2 weeks are hardest - stick with it</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much high-intensity too soon:</strong> Body needs time to adapt</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not eating enough fat:</strong> Need fat for energy on keto</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring electrolytes:</strong> Causes cramps, fatigue, poor performance</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Overtraining:</strong> Recovery is slower on keto initially</span>
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
      <section className="py-16 bg-gradient-to-r from-orange-700 to-red-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Keto Transformation
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise accelerates results, but proper keto nutrition is the foundation. Get your complete ketogenic
              diet plan to maximize fat loss and performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Keto Diet Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn complete keto nutrition with macros, meal plans, and strategies to enter and maintain ketosis.
                </p>
                <Button size="lg" className="w-full bg-white text-orange-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/keto">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Flame className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a complete keto workout and nutrition plan tailored to your goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands achieving rapid fat loss through keto diet and strategic exercise
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
