import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Zap, Apple, TrendingUp } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "General Workout Plan | Complete Exercise & Fitness Training Guide",
  description: "Complete general workout plan with beginner to advanced routines, strength training, cardio, flexibility, home and gym workouts for all fitness levels and goals.",
  keywords: "workout plan, fitness routine, general exercise program, strength training, cardio workout, beginner workout, gym routine, home workout",
  openGraph: {
    title: "General Workout Plan | Complete Exercise & Fitness Guide",
    description: "Evidence-based workout programs for all fitness levels - beginner to advanced.",
    url: "https://fitplanindia.com/workouts/general",
  },
}

export default function GeneralWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "General Workout Plan", href: "/workouts/general" },
  ]

  const tocItems = [
    { id: "stats", label: "Key Stats" },
    { id: "beginner", label: "Beginner Program" },
    { id: "intermediate", label: "Intermediate Program" },
    { id: "guidelines", label: "Training Guidelines" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "How often should I work out as a beginner?",
      answer: "Beginners: 3-4x weekly is perfect. Start with 3 full-body workouts (Mon/Wed/Fri) to learn exercises and build base fitness. Add a 4th day after 4-6 weeks. More is NOT better for beginners - muscles grow during rest. Consistency matters more than frequency. Don't skip rest days!"
    },
    {
      question: "What's better for results - home workouts or gym?",
      answer: "GYM is better for muscle building (progressive overload easier with barbells/machines), but HOME workouts absolutely work if consistent! Home pros: convenient, saves time, no gym anxiety. Gym pros: more equipment = more exercise variety, heavier weights = faster muscle growth. Bottom line: Best workout is the one you'll actually do consistently. Home = 80% gym results with bodyweight + dumbbells."
    },
    {
      question: "How long until I see workout results?",
      answer: "Timeline: Feel stronger in 2-3 weeks. See visual changes in 6-8 weeks. Significant transformation in 12+ weeks. Fat loss visible faster than muscle gain. Strength gains happen before size gains. CRITICAL: Progress is NOT linear - you'll have plateaus. Trust the process, track workouts, take progress photos monthly. Most people quit at week 4-6 right before visible results appear!"
    },
    {
      question: "Do I need supplements to build muscle?",
      answer: "No! Supplements are 5-10% of results. Prioritize: 1) Consistent training (80% of results), 2) Adequate protein (0.8-1g per lb bodyweight from food), 3) Calorie surplus for muscle gain, 4) Sleep 7-9 hours. ONLY supplement if diet is perfect: Protein powder (convenient, not necessary), Creatine (5g daily, proven, cheap), Multivitamin (fills nutrition gaps). Skip pre-workouts, fat burners, testosterone boosters - waste of money."
    },
    {
      question: "What's progressive overload and why is it important?",
      answer: "Progressive overload = gradually increasing difficulty over time. It's THE #1 muscle building principle. Methods: 1) Add weight (most common), 2) Add reps, 3) Add sets, 4) Increase frequency. Example: Squat 100 lbs × 8 reps → next week 100 × 10 → next week 100 × 12 → next week 110 × 8. Without progressive overload, your body adapts and stops growing. Track all workouts in a notebook/app!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-orange-600 font-semibold">
              💪 Complete Workout Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              General Workout Plan: Build Strength, Fitness & Health
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover comprehensive workout routines for all fitness levels including strength training, cardio,
              flexibility, and complete programs you can do at home or the gym to achieve your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#beginner">
                  Beginner Program
                </Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="#intermediate">
                  Intermediate Program
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
                <div className="text-3xl font-bold text-orange-600 mb-2">150min</div>
                <div className="text-gray-600">Weekly Exercise Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">3-5x</div>
                <div className="text-gray-600">Per Week Training</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">8-12</div>
                <div className="text-gray-600">Reps for Muscle Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">48 Hours</div>
                <div className="text-gray-600">Rest Between Same Muscle</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Your Fitness Foundation</h2>
              <p className="text-lg text-gray-700 mb-6">
                A well-rounded fitness program includes strength training (builds muscle, increases metabolism),
                cardiovascular exercise (improves heart health, burns calories), flexibility work (prevents injury,
                improves mobility), and adequate recovery (when muscles actually grow). Whether you're a complete beginner
                or looking to improve your current routine, consistency and progressive overload (gradually increasing
                difficulty) are key. This guide provides structured programs for home and gym settings, adaptable to all
                fitness levels. Remember: the best workout is one you'll actually do consistently.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Benefits of Regular Exercise</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Builds lean muscle and burns fat</li>
                    <li>• Improves cardiovascular health and endurance</li>
                    <li>• Increases bone density and joint health</li>
                    <li>• Boosts mood, energy, and mental clarity</li>
                    <li>• Reduces risk of chronic diseases</li>
                    <li>• Enhances quality of life and longevity</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-red-800">Key Training Principles</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Progressive Overload:</strong> Gradually increase weight/reps</li>
                    <li>• <strong>Consistency:</strong> 3-5 workouts per week minimum</li>
                    <li>• <strong>Recovery:</strong> Rest days essential for growth</li>
                    <li>• <strong>Proper Form:</strong> Quality over quantity always</li>
                    <li>• <strong>Balanced Routine:</strong> Train all muscle groups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beginner Program */}
      <section id="beginner" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Beginner Workout Program (Weeks 1-8)</h2>
              <p className="text-lg text-gray-600">
                Perfect for those new to exercise or returning after a break. Focus on learning proper form and building base fitness.
              </p>
            </div>

            {/* Beginner Week Schedule */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Beginner 3-Day Full Body Split</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>📋 Schedule:</strong> Monday, Wednesday, Friday (or any 3 non-consecutive days).
                    Full body each session allows learning exercises while providing adequate recovery.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Day 1 */}
                  <div>
                    <h5 className="font-semibold text-lg text-blue-800 mb-3">Workout A (Monday/Day 1)</h5>

                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Bodyweight Squats</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Feet shoulder-width, lower as if sitting in chair. Keep chest up, knees track over toes.
                          Master form before adding weight.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Push-Ups (Modified on Knees if Needed)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 60 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Hands slightly wider than shoulders. Lower chest to ground, push back up. Keep core tight.
                          Progress from knees to regular push-ups.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Assisted Pull-Ups or Inverted Rows</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 8-10 | <strong>Rest:</strong> 60 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Use resistance band for pull-ups or row under table. Pull shoulder blades together.
                          Essential back exercise.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Walking Lunges</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10 each leg | <strong>Rest:</strong> 60 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Step forward, lower back knee toward ground. Alternate legs. Builds balance and leg strength.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Plank Hold</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 3 | <strong>Duration:</strong> 30-45 seconds | <strong>Rest:</strong> 45 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Forearms or hands, body straight from head to heels. Core foundation exercise.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Days 2-3 Summary */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-blue-800">Workout B (Wednesday) & C (Friday):</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      Similar structure, slight exercise variations to target muscles differently:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Legs:</strong> Goblet squats, step-ups, glute bridges</li>
                      <li>• <strong>Push:</strong> Incline push-ups, dumbbell press, dips (assisted)</li>
                      <li>• <strong>Pull:</strong> Lat pulldowns, dumbbell rows, face pulls</li>
                      <li>• <strong>Core:</strong> Side planks, dead bugs, bicycle crunches</li>
                    </ul>
                  </div>

                  {/* Cardio */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-green-800">Cardio Days (Tuesday/Thursday/Saturday):</h5>
                    <p className="text-sm text-gray-700">
                      <strong>20-30 minutes moderate intensity:</strong> Brisk walking, cycling, swimming, or elliptical.
                      Heart rate conversational pace. Builds cardiovascular base.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Intermediate Program */}
      <section id="intermediate" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Dumbbell className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Intermediate Workout Program</h2>
              <p className="text-lg text-gray-600">
                For those with 6+ months training experience. Focus on muscle building and strength progression.
              </p>
            </div>

            {/* Intermediate Split */}
            <Card className="border-purple-200 mb-8">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">4-Day Upper/Lower Split</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>📋 Schedule:</strong> Mon/Tue/Thu/Fri (Upper/Lower/Upper/Lower).
                    Trains each muscle group 2x per week for optimal growth stimulus.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Upper Body Day */}
                  <div>
                    <h5 className="font-semibold text-lg text-purple-800 mb-3">Upper Body Day (Monday/Thursday)</h5>

                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Barbell Bench Press</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-10 | <strong>Rest:</strong> 2 min
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Primary chest builder. Progressive overload key.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Bent-Over Barbell Rows</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-10 | <strong>Rest:</strong> 2 min
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Back thickness. Hinge at hips, pull to lower chest.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Overhead Press (Barbell or Dumbbell)</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Shoulder development. Keep core tight.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Pull-Ups or Lat Pulldowns</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Back width. Add weight if bodyweight too easy.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Bicep Curls + Tricep Dips (Superset)</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3 each | <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 60 sec
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Arm development. Do back-to-back.</p>
                      </div>
                    </div>
                  </div>

                  {/* Lower Body Day */}
                  <div>
                    <h5 className="font-semibold text-lg text-purple-800 mb-3">Lower Body Day (Tuesday/Friday)</h5>

                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Barbell Back Squats</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-10 | <strong>Rest:</strong> 2-3 min
                        </p>
                        <p className="text-sm text-gray-600 mt-1">King of exercises. Go deep, chest up.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Romanian Deadlifts</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 2 min
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Hamstrings and glutes. Hinge at hips.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Bulgarian Split Squats</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 each leg | <strong>Rest:</strong> 90 sec
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Unilateral leg work. Back foot elevated.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Leg Press</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 90 sec
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Additional leg volume safely.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Leg Curls + Calf Raises (Superset)</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3 each | <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 60 sec
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Complete lower body. Back-to-back.</p>
                      </div>
                    </div>
                  </div>

                  {/* Cardio/Abs */}
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-purple-800">Wednesday - Active Recovery + Abs:</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Cardio:</strong> 30 min moderate (walk, bike, swim)
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Abs Circuit (3 rounds):</strong> Crunches 20, Leg raises 15, Plank 60 sec, Russian twists 30
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Guidelines */}
      <section id="guidelines" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Training Guidelines</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Training Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Master form first:</strong> Before adding weight or intensity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Progressive overload:</strong> Add weight or reps each week</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Warm up properly:</strong> 5-10 min before lifting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Rest between sets:</strong> 60-90 sec accessories, 2-3 min compounds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track your workouts:</strong> Log weights and reps to measure progress</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ego lifting:</strong> Using too much weight with bad form</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping legs:</strong> Don't neglect lower body</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>No progression:</strong> Using same weights forever</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Overtraining:</strong> Not taking rest days</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring nutrition:</strong> Can't out-train a bad diet</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Fitness Journey
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise is essential, but proper nutrition fuels your workouts and maximizes results. Get your
              complete fitness nutrition plan to support your training.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Fitness Nutrition Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn optimal pre/post-workout nutrition, meal timing, and complete meal plans for active people.
                </p>
                <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/exercise-fitness">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <TrendingUp className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized workout and nutrition plan tailored to your specific goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands achieving their fitness goals through structured training and nutrition
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
