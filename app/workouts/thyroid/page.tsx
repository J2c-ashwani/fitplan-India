import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Zap, Apple, Shield } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thyroid Workout Plan | Best Exercises for Hypothyroidism & Weight Loss",
  description: "Complete thyroid workout guide with metabolism-boosting exercises for hypothyroidism, safe routines for thyroid patients, energy management, and weight loss strategies.",
  keywords: "thyroid workout, hypothyroidism exercise, thyroid weight loss workout, exercises for underactive thyroid, metabolism boosting exercises, low energy workouts",
  openGraph: {
    title: "Thyroid Workout Plan | Exercise Guide for Hypothyroidism",
    description: "Evidence-based thyroid workouts to boost metabolism, manage weight, and improve energy levels.",
    url: "https://fitplanindia.com/workouts/thyroid",
  },
}

export default function ThyroidWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Thyroid Plan", href: "/workouts/thyroid" },
  ]

  const tocItems = [
    { id: "stats", label: "Key Stats" },
    { id: "why-exercise", label: "Why Exercise?" },
    { id: "home-workouts", label: "Home Workouts" },
    { id: "gym-workouts", label: "Gym Workouts" },
    { id: "guidelines", label: "Guidelines" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Can I exercise if I have hypothyroidism?",
      answer: "Yes! Exercise is crucial for thyroid health. Start slowly (10-15 min sessions), gradually build up, and avoid overtraining. Focus on strength training 3x weekly plus moderate cardio. Always check with your doctor before starting a new program."
    },
    {
      question: "Will exercise help me lose weight with thyroid problems?",
      answer: "Yes, but slower than normal. Exercise boosts your sluggish metabolism, builds muscle (burns more calories at rest), and supports weight loss. Combine with proper thyroid diet for best results. Be patient - weight loss is 30-50% slower with hypothyroidism."
    },
    {
      question: "Why am I so tired to exercise with thyroid issues?",
      answer: "Hypothyroidism causes severe fatigue. Start with just 10-15 minutes of walking after breakfast (when energy is highest). As your medication stabilizes and fitness improves, energy levels increase significantly. Don't push through exhaustion - rest when needed."
    },
    {
      question: "Is HIIT/intense exercise safe for thyroid patients?",
      answer: "Generally avoid excessive HIIT. High-intensity exercise can increase cortisol, which suppresses thyroid function further. Stick to moderate-intensity workouts. If doing HIIT, limit to 1x weekly maximum and only when energy is good."
    },
    {
      question: "How long until I see results from exercise with thyroid?",
      answer: "Expect 4-8 weeks for noticeable energy improvement, 8-12 weeks for weight loss results. Progress is slower than average due to metabolic slowdown, but consistency pays off. Focus on how you feel (energy, mood, sleep) not just the scale."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-cyan-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-teal-700 font-semibold">
              🦋 Complete Thyroid Exercise Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Thyroid Workout Plan: Boost Metabolism & Manage Weight
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover safe, effective workouts specifically designed for thyroid patients to boost metabolism,
              increase energy levels, support weight loss, and improve overall health despite hypothyroidism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#home-workouts">
                  Home Workouts
                </Link>
              </Button>
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white border-2 border-white font-semibold" asChild>
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
                <div className="text-3xl font-bold text-teal-600 mb-2">150min</div>
                <div className="text-gray-600">Weekly Exercise Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">20-30min</div>
                <div className="text-gray-600">Starting Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3-5x</div>
                <div className="text-gray-600">Per Week Frequency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4-8 Weeks</div>
                <div className="text-gray-600">To See Results</div>
              </div>
            </div>

            <div id="why-exercise" className="bg-white rounded-lg shadow-sm p-8 mb-8 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exercise is Crucial for Thyroid Health</h2>
              <p className="text-lg text-gray-700 mb-6">
                Hypothyroidism slows metabolism, causing fatigue, weight gain, and muscle weakness. Exercise is one of
                the most powerful tools to counteract these effects. Regular physical activity boosts metabolism even
                with low thyroid function, improves energy levels and reduces fatigue, supports weight loss despite slower
                metabolism, builds muscle mass which burns more calories, enhances mood and reduces depression, improves
                cardiovascular health, and increases overall quality of life. The key is starting slowly and building
                gradually - your body needs time to adapt when thyroid hormones are imbalanced.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-teal-800">Exercise Benefits for Thyroid Patients</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Boosts sluggish metabolism naturally</li>
                    <li>• Combats fatigue and increases energy</li>
                    <li>• Supports weight loss (burns 200-400 cal/session)</li>
                    <li>• Builds muscle mass for higher metabolic rate</li>
                    <li>• Improves mood, reduces depression and anxiety</li>
                    <li>• Strengthens heart health affected by thyroid</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-cyan-800">Best Exercise Types for Thyroid</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Walking:</strong> Most accessible, energy-friendly cardio</li>
                    <li>• <strong>Strength Training:</strong> Builds metabolism-boosting muscle</li>
                    <li>• <strong>Yoga:</strong> Reduces stress, improves flexibility</li>
                    <li>• <strong>Swimming:</strong> Low-impact, full-body workout</li>
                    <li>• <strong>Cycling:</strong> Cardio without joint stress</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-yellow-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-900 text-xl mb-3">⚠️ Essential Safety Guidelines for Thyroid Patients:</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Get doctor clearance:</strong> Especially if newly diagnosed or changing medication</li>
                    <li>• <strong>Start very slowly:</strong> Your metabolism is slower - don't push too hard initially</li>
                    <li>• <strong>Listen to fatigue:</strong> Rest when tired - overtraining worsens thyroid symptoms</li>
                    <li>• <strong>Stay hydrated:</strong> Thyroid issues affect hydration needs</li>
                    <li>• <strong>Monitor heart rate:</strong> Thyroid affects heart - stay in safe zones</li>
                    <li>• <strong>Be patient:</strong> Weight loss is slower with hypothyroidism - consistency is key</li>
                    <li>• <strong>Don't skip meals:</strong> Fuel your body properly for exercise recovery</li>
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
              <Home className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thyroid Home Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Metabolism-boosting workouts you can do at home to manage thyroid symptoms and support weight loss.
              </p>
            </div>

            {/* Home Workout 1: Walking Program */}
            <Card className="border-teal-200 mb-8">
              <CardHeader className="bg-teal-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-teal-800">Walking Program (Daily or 5-6x per week)</CardTitle>
                  <Badge className="bg-teal-600 text-white">Start: 15-20 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-teal-100 border border-teal-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>🚶 Walking is THE best exercise for thyroid patients:</strong> Low-impact, manageable with fatigue,
                    burns calories, boosts mood, and can be done daily without overtaxing your system.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Week 1-2: Building Tolerance</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 15-20 minutes | <strong>Pace:</strong> Comfortable, easy
                    </p>
                    <p className="text-sm text-gray-600">
                      Start with short walks at comfortable pace. If 15 min feels too long, start with 10 min twice daily.
                      Focus on consistency, not speed. Walk when your energy is highest (usually morning after breakfast).
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Week 3-4: Gradual Increase</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 25-30 minutes | <strong>Pace:</strong> Moderate, steady
                    </p>
                    <p className="text-sm text-gray-600">
                      Add 3-5 minutes each week as tolerance improves. You should be able to hold a conversation.
                      Burns ~100-150 calories per session, boosts metabolism for hours after.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Week 5+: Sustained Walking</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 30-45 minutes | <strong>Pace:</strong> Brisk when possible
                    </p>
                    <p className="text-sm text-gray-600">
                      Goal is 30-45 min most days. Some days do brisk intervals (2 min fast, 3 min normal).
                      This level supports consistent weight loss and energy improvement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 2: Strength Training */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Metabolism-Boosting Strength (3x per week)</CardTitle>
                  <Badge className="bg-blue-600 text-white">20-30 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Muscle burns more calories at rest than fat - crucial for thyroid patients with slower metabolism.
                  Strength training builds muscle, boosts metabolic rate, and helps with weight management.
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Gentle marching in place, arm circles, light stretching</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Main Circuit (2-3 Rounds, 60 sec rest between)</h5>

                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Chair Squats</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Stand from chair without using hands (if possible). Sit back down slowly. Best functional
                          exercise - builds legs and core.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Wall Push-Ups</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Stand arm's length from wall, lean in, push back. Builds upper body without floor work.
                          Good for those with low energy.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Glute Bridges</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Lie on back, feet flat, lift hips up, squeeze glutes. Strengthens glutes, helps with metabolism.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Seated Rows (Resistance Band)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Sit with legs extended, band around feet. Pull handles to body. Strengthens back, improves posture.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Standing Calf Raises</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 60 sec (end of round)
                        </p>
                        <p className="text-sm text-gray-600">
                          Hold chair for balance, rise on toes, lower. Small muscle but adds to total metabolic boost.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool Down (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Gentle stretching, deep breathing, hydrate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 3: Gentle Yoga */}
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">Restorative Yoga (2-3x per week)</CardTitle>
                  <Badge className="bg-purple-600 text-white">20-30 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Yoga reduces stress (which worsens thyroid function), improves flexibility, supports gentle strength
                  building, and helps with energy levels without exhausting you.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Thyroid-Supportive Poses:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Shoulder stand (with support) - stimulates thyroid</li>
                      <li>• Cat-cow stretches - neck and spine mobility</li>
                      <li>• Child's pose - restorative rest</li>
                      <li>• Warrior poses - strength and balance</li>
                      <li>• Bridge pose - similar to glute bridges</li>
                      <li>• Legs-up-wall - improves circulation</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Benefits for Thyroid:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Reduces cortisol (stress hormone)</li>
                      <li>• Improves circulation to thyroid gland</li>
                      <li>• Gentle enough for low-energy days</li>
                      <li>• Improves sleep quality</li>
                      <li>• Mindfulness helps with emotional eating</li>
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
              <Dumbbell className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thyroid Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Structured gym routines to maximize metabolism boost and support weight loss with thyroid issues.
              </p>
            </div>

            {/* Gym Workout 1: Cardio Machines */}
            <Card className="border-cyan-200 mb-8">
              <CardHeader className="bg-cyan-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-cyan-800">Low-Impact Cardio (4-5x per week)</CardTitle>
                  <Badge className="bg-cyan-600 text-white">25-40 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Recumbent Bike</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 20-30 minutes | <strong>Resistance:</strong> Low to moderate
                    </p>
                    <p className="text-sm text-gray-600">
                      Seated with back support, easy on joints. Start with 15 min and build up. Burns 150-250 calories,
                      doesn't exhaust you like running.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Elliptical (Low Setting)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 20-30 minutes | <strong>Resistance:</strong> Level 3-5
                    </p>
                    <p className="text-sm text-gray-600">
                      Low-impact, full-body movement. Don't go too hard - moderate steady pace is best for thyroid.
                      Burns 200-300 calories.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Treadmill Walking (Flat or Slight Incline)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 25-35 minutes | <strong>Speed:</strong> 2.5-3.5 mph
                    </p>
                    <p className="text-sm text-gray-600">
                      Walking is best - NO running until thyroid is well-controlled. Add slight incline (2-4%) for
                      extra calorie burn without exhaustion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 2: Strength Training */}
            <Card className="border-green-200 mb-8">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">Machine Strength Training (3x per week)</CardTitle>
                  <Badge className="bg-green-600 text-white">30-40 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Focus on compound movements with machines (safer than free weights when fatigued). Build muscle
                  to boost resting metabolic rate - critical for thyroid weight management.
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Leg Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Weight:</strong> Moderate
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Largest muscle group = biggest metabolic boost</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Chest Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Weight:</strong> Light to moderate
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Upper body strength without exhaustion</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Seated Row Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Weight:</strong> Moderate
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Back strength, posture improvement</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Leg Curl Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2-3 | <strong>Reps:</strong> 12-15 | <strong>Weight:</strong> Light to moderate
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Hamstring development for balanced legs</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Shoulder Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2-3 | <strong>Reps:</strong> 10-12 | <strong>Weight:</strong> Light to moderate
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Completes upper body strength</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 3: Swimming */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Swimming/Water Exercise (2-3x per week) - Highly Recommended</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-800">
                    <strong>💙 Excellent for Thyroid Patients:</strong> Zero impact on joints, full-body workout,
                    doesn't spike cortisol like intense cardio, perfect for managing fatigue while burning calories.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Swimming Options:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Easy laps: 15-30 minutes</li>
                      <li>• Water walking in pool</li>
                      <li>• Gentle freestyle or backstroke</li>
                      <li>• Pool noodle exercises</li>
                      <li>• Burns 200-350 calories</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Water Aerobics:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Group classes for motivation</li>
                      <li>• Low-impact on joints</li>
                      <li>• Social support aspect</li>
                      <li>• Modified for all fitness levels</li>
                      <li>• Fun and effective</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Thyroid Exercise Guidelines</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Start slow:</strong> 10-15 min sessions initially, build gradually</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercise after breakfast:</strong> When medication has kicked in and energy is higher</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize consistency:</strong> 4-5 shorter sessions better than 1-2 long ones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Mix cardio and strength:</strong> Both are important for metabolism</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Take rest days:</strong> Recovery is when muscle builds and metabolism increases</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Avoid These Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>High-intensity workouts:</strong> HIIT, CrossFit can worsen thyroid symptoms</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercising when exhausted:</strong> Listen to fatigue - rest when needed</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Doing too much too soon:</strong> Leads to burnout and worsens symptoms</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Comparing to pre-diagnosis:</strong> Accept your body works differently now</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercising fasted:</strong> You need fuel - eat something light first</span>
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
      <section className="py-16 bg-gradient-to-r from-teal-700 to-cyan-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Thyroid Management Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise works best when combined with proper nutrition. Get your personalized thyroid diet plan
              to maximize weight loss, energy, and overall thyroid health.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Thyroid Diet Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn thyroid-supportive nutrition, medication timing, foods to eat and avoid, and weight management strategies.
                </p>
                <Button size="lg" className="w-full bg-white text-teal-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/thyroid">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Shield className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a complete thyroid management plan tailored to your symptoms and goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands managing thyroid symptoms naturally through exercise and proper nutrition
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
