import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Zap, Apple, Flame, TrendingDown } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Weight Loss Workout Plan | Best Exercises to Burn Fat Fast",
  description: "Complete weight loss workout guide with fat-burning exercises, cardio routines, strength training, HIIT workouts, and complete programs to maximize calorie burn and fat loss.",
  keywords: "weight loss workout, fat burning exercises, cardio for weight loss, HIIT fat loss, best exercises to lose weight, gym workout for weight loss",
  openGraph: {
    title: "Weight Loss Workout Plan | Complete Fat Burning Exercise Guide",
    description: "Evidence-based weight loss workouts for maximum fat burning and sustainable results.",
    url: "https://fitplanindia.com/workouts/weight-loss",
  },
}

export default function WeightLossWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Weight Loss Plan", href: "/workouts/weight-loss" },
  ]

  const tocItems = [
    { id: "stats", label: "Key Stats" },
    { id: "why-exercise", label: "Why Exercise?" },
    { id: "home-workouts", label: "Home Workouts" },
    { id: "gym-workouts", label: "Gym Plan" },
    { id: "tips", label: "Success Tips" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "How much weight can I lose per week with exercise?",
      answer: "Healthy weight loss is 1-2 lbs per week. Exercise burns 300-600 calories per session, adding up to 2,000-3,500 calories per week (roughly 0.5-1 lb). Combined with proper diet, expect 1-2 lbs weekly loss sustainably."
    },
    {
      question: "Is cardio or strength training better for weight loss?",
      answer: "Both! Strength training preserves muscle mass during calorie deficit (preventing metabolic slowdown), while cardio burns immediate calories. The best approach combines 3-4 strength sessions with 2-3 cardio sessions weekly."
    },
    {
      question: "Can I lose weight by exercise alone without dieting?",
      answer: "Unlikely. Diet controls 70-80% of weight loss. You'd need to burn 500+ calories daily through exercise (1+ hour of hard work) to lose 1 lb/week, and it's easy to eat back those calories. Exercise + diet is the proven combination."
    },
    {
      question: "How often should I work out to lose weight?",
      answer: "Aim for 4-6 sessions per week: 3-4 strength training, 2-3 cardio. Include daily walking (8,000-10,000 steps). Rest 1-2 days for recovery. Consistency over months matters more than intensity over days."
    },
    {
      question: "Will I lose muscle while losing weight?",
      answer: "Not if you strength train 3-4x weekly and eat adequate protein (0.7-1g per lb bodyweight). Strength training signals your body to preserve muscle while burning fat. Cardio-only approaches often lose muscle along with fat."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-red-600 font-semibold">
              🔥 Complete Weight Loss Workout Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Weight Loss Workout Plan: Burn Fat & Build Lean Muscle
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover effective fat-burning workouts combining cardio, strength training, and HIIT to maximize
              calorie burn, preserve muscle mass, boost metabolism, and achieve sustainable weight loss results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#home-workouts">
                  Home Workouts
                </Link>
              </Button>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white border-2 border-white font-semibold" asChild>
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
                <div className="text-3xl font-bold text-red-600 mb-2">300-500</div>
                <div className="text-gray-600">Calories Burned Per Session</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">4-6x</div>
                <div className="text-gray-600">Per Week Training</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">150+min</div>
                <div className="text-gray-600">Weekly Exercise Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Cardio+</div>
                <div className="text-gray-600">Strength Combo Best</div>
              </div>
            </div>

            <div id="why-exercise" className="bg-white rounded-lg shadow-sm p-8 mb-8 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exercise for Weight Loss: What Actually Works</h2>
              <p className="text-lg text-gray-700 mb-6">
                While diet creates the calorie deficit needed for weight loss (you cannot out-exercise a bad diet),
                exercise accelerates fat loss, preserves precious muscle mass, boosts metabolism, improves body composition,
                and makes maintenance easier long-term. The best approach combines strength training (builds muscle which
                burns calories 24/7, prevents metabolic slowdown) with cardio (immediate calorie burn, cardiovascular health).
                HIIT workouts provide maximum calorie burn in minimal time through afterburn effect (EPOC - elevated oxygen
                consumption post-exercise). A balanced program of 3-4 strength sessions plus 2-3 cardio sessions per week,
                combined with proper nutrition, delivers optimal fat loss while maintaining lean muscle.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-red-800">Why Exercise for Weight Loss</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Burns additional calories (300-600 per session)</li>
                    <li>• Preserves muscle mass during calorie deficit</li>
                    <li>• Boosts metabolism for 24-48 hours post-workout</li>
                    <li>• Improves insulin sensitivity (easier fat loss)</li>
                    <li>• Enhances body composition (lose fat, not muscle)</li>
                    <li>• Makes weight maintenance easier long-term</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Best Exercise Types for Fat Loss</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Strength Training:</strong> Preserves muscle, boosts metabolism</li>
                    <li>• <strong>HIIT:</strong> Maximum calorie burn, afterburn effect</li>
                    <li>• <strong>Steady Cardio:</strong> Sustainable calorie burn</li>
                    <li>• <strong>Walking:</strong> Low-impact, daily fat burning</li>
                    <li>• <strong>Combination:</strong> Best results from mixing all types</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Guidelines */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-yellow-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-900 text-xl mb-3">⚠️ Critical Weight Loss Workout Guidelines:</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Diet is 70-80% of weight loss:</strong> Cannot out-exercise bad nutrition</li>
                    <li>• <strong>Strength training is NOT optional:</strong> Prevents muscle loss during calorie deficit</li>
                    <li>• <strong>More isn't always better:</strong> Overtraining can hinder fat loss (cortisol)</li>
                    <li>• <strong>Recovery matters:</strong> Muscle grows during rest, not during workout</li>
                    <li>• <strong>Progressive overload:</strong> Must challenge yourself more over time</li>
                    <li>• <strong>Consistency over intensity:</strong> 4 moderate workouts &gt; 1 intense session per week</li>
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
              <Home className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Weight Loss Home Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Effective fat-burning workouts you can do at home with minimal or no equipment.
              </p>
            </div>

            {/* Home Workout 1: HIIT Circuit */}
            <Card className="border-red-200 mb-8">
              <CardHeader className="bg-red-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-red-800">HIIT Fat Burning Circuit (3x per week)</CardTitle>
                  <Badge className="bg-red-600 text-white">25-30 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>🔥 HIIT = High-Intensity Interval Training:</strong> Short bursts of max effort followed by rest.
                    Burns 25-30% more calories than steady cardio PLUS afterburn effect for 24-48 hours!
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Jumping jacks, high knees, arm circles, dynamic stretching</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">HIIT Circuit (4 Rounds, 30 sec on / 30 sec rest)</h5>

                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Burpees</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30 seconds max effort | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Full body exercise. Drop to plank, push-up, jump up. Modify by stepping instead of jumping
                          if needed. Burns maximum calories.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Mountain Climbers</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30 seconds | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Plank position, drive knees to chest alternating. Core and cardio combo. Go as fast as possible.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Jump Squats</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30 seconds | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Squat down, explode up jumping. Land softly. Legs + cardio = massive calorie burn.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. High Knees</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30 seconds | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Run in place driving knees up high. Fast pace. Cardiovascular conditioning.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Push-Ups (Fast Pace)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30 seconds | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          As many as possible in 30 sec. On knees if needed. Upper body burn.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">6. Plank Jacks</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30 seconds | <strong>Rest:</strong> 90 sec (end of round)
                        </p>
                        <p className="text-sm text-gray-600">
                          Plank position, jump feet out and in like jumping jacks. Core + cardio finisher.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool Down (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Walk in place, deep breathing, stretching all major muscles</p>
                  </div>

                  <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                    <p className="text-sm text-gray-800">
                      <strong>💪 Estimated Burn:</strong> 250-350 calories during workout + 50-100 afterburn calories = 300-450 total!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 2: Strength Circuit */}
            <Card className="border-orange-200 mb-8">
              <CardHeader className="bg-orange-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-orange-800">Bodyweight Strength Circuit (3x per week)</CardTitle>
                  <Badge className="bg-orange-600 text-white">35-40 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>💪 Strength = Muscle Preservation:</strong> Critical during weight loss to maintain metabolism.
                    Muscle burns 3x more calories than fat at rest!
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Circuit (4 Rounds, minimal rest)</h5>

                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Squats (Add Weight if Available)</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 30 sec
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Push-Ups</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 30 sec
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Walking Lunges</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Reps:</strong> 12-16 total | <strong>Rest:</strong> 30 sec
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Plank to Downward Dog</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 30 sec
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Bicycle Crunches</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Reps:</strong> 20-30 | <strong>Rest:</strong> 60 sec (end of round)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Walking */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Daily Walking (Every Day)</CardTitle>
                  <Badge className="bg-blue-600 text-white">30-60 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Walking is the most underrated fat-loss tool. Burns 200-400 calories, doesn't interfere with recovery,
                  can do daily, sustainable forever. Aim for 8,000-10,000 steps daily.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Walking Tips:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Brisk pace (slightly breathless)</li>
                      <li>• After meals helps blood sugar</li>
                      <li>• Incline/hills burn 50% more calories</li>
                      <li>• Morning fasted walk burns more fat</li>
                      <li>• Track with phone pedometer</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Calorie Burn:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 30 min walk: ~150 calories</li>
                      <li>• 60 min walk: ~300 calories</li>
                      <li>• 10,000 steps: ~400-500 calories</li>
                      <li>• Daily = 2,800-3,500 cal/week extra!</li>
                      <li>• That's 1 extra pound lost per week</li>
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
              <Dumbbell className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Weight Loss Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Maximize fat loss with weights and cardio equipment for optimal results.
              </p>
            </div>

            {/* 4-Day Split */}
            <Card className="border-orange-200 mb-8">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-orange-800">4-Day Gym Split for Fat Loss</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold mb-3 text-orange-700">Monday/Thursday - Upper Body</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Bench Press: 4 sets × 10-12 reps</li>
                      <li>• Rows: 4 × 10-12</li>
                      <li>• Shoulder Press: 3 × 10-12</li>
                      <li>• Pull-Ups/Lat Pulldowns: 3 × 8-12</li>
                      <li>• Bicep Curls: 2 × 12-15</li>
                      <li>• Tricep Extensions: 2 × 12-15</li>
                      <li>• <strong>Time:</strong> 45-55 minutes</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold mb-3 text-orange-700">Tuesday/Friday - Lower Body</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Squats: 4 sets × 10-12 reps</li>
                      <li>• Romanian Deadlifts: 3 × 10-12</li>
                      <li>• Leg Press: 3 × 12-15</li>
                      <li>• Leg Curls: 3 × 12-15</li>
                      <li>• Calf Raises: 3 × 15-20</li>
                      <li>• Abs Circuit: 3 rounds</li>
                      <li>• <strong>Time:</strong> 45-55 minutes</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold mb-3 text-blue-700">Wednesday - HIIT Cardio</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Treadmill HIIT: 20-25 minutes</li>
                      <li>• 1 min sprint, 2 min walk (repeat 7-8x)</li>
                      <li>• OR Bike sprints, rowing intervals</li>
                      <li>• <strong>Burn:</strong> 300-400 calories</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold mb-3 text-blue-700">Saturday - Steady State Cardio</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• 45-60 min moderate intensity</li>
                      <li>• Treadmill, bike, elliptical, swimming</li>
                      <li>• Conversational pace</li>
                      <li>• <strong>Burn:</strong> 400-600 calories</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 border border-green-300 rounded-lg p-4">
                  <h5 className="font-semibold mb-2 text-green-800">Weekly Total:</h5>
                  <p className="text-sm text-gray-700">
                    4 strength sessions + 2 cardio = ~2,000-2,500 calories burned from exercise alone!
                    Combined with diet = fast, sustainable fat loss.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section id="tips" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Weight Loss Workout Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Strength training 3-4x weekly:</strong> Non-negotiable for muscle preservation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Walk daily:</strong> Most sustainable calorie burn, low stress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Progressive overload:</strong> Gradually increase weights or intensity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Mix cardio types:</strong> HIIT for calorie burn, steady for recovery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Pair with proper diet:</strong> Exercise alone won't overcome bad nutrition</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Only doing cardio:</strong> Lose muscle along with fat, slower metabolism</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Excessive training:</strong> Raises cortisol, hinders fat loss, burnout risk</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eating back all exercise calories:</strong> Negates the calorie deficit</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>No rest days:</strong> Recovery is when body burns fat and builds muscle</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring strength training:</strong> Will lose muscle, slow metabolism long-term</span>
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Weight Loss Journey
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise accelerates fat loss, but proper nutrition creates the calorie deficit. Get your complete
              weight loss diet plan to maximize results and make this sustainable.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Weight Loss Diet Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn complete weight loss nutrition with calorie deficit strategies and meal plans for fat loss.
                </p>
                <Button size="lg" className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/weight-loss">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Flame className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized weight loss workout and diet plan for your goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands losing weight sustainably through smart exercise and nutrition
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
