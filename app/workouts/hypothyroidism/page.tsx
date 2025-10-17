import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Zap, Dumbbell, Heart, Clock, Target, TrendingUp, Flame } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hypothyroidism Exercise Plan 2025 | Best Workouts for Underactive Thyroid Weight Loss",
  description: "Complete hypothyroidism workout plan with strength training, cardio, and metabolism-boosting exercises for underactive thyroid. Expert-designed for USA, UK, Canada, Australia.",
  keywords: "hypothyroidism exercise, underactive thyroid workout, thyroid weight loss exercise, best exercise for hypothyroidism, Hashimoto's workout plan",
}

export default function HypothyroidismWorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-blue-600 font-semibold">
              💪 Thyroid-Friendly Exercise
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hypothyroidism Exercise Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete workout program designed specifically for underactive thyroid (hypothyroidism) with metabolism-boosting 
              strength training, gentle cardio, and energy-building exercises that work WITH your thyroid condition, not against it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#workout-plan">View Workout Plan</Link>
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/plans/hypothyroidism">Hypothyroidism Diet Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Exercise is Critical */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exercise is CRITICAL for Hypothyroidism Weight Loss</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Exercise is absolutely essential for hypothyroidism weight loss because it directly combats the metabolic slowdown 
                caused by low thyroid hormones. While diet alone can help, combining proper nutrition with the RIGHT type of exercise 
                accelerates fat loss by 40-60% and dramatically improves energy, mood, and quality of life for thyroid patients.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-blue-800 flex items-center">
                    <Flame className="w-6 h-6 mr-2" />
                    Benefits of Exercise for Hypothyroidism
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• <strong>Boosts metabolism:</strong> Increases resting metabolic rate by 5-15%</li>
                    <li>• <strong>Builds muscle mass:</strong> Muscle burns 3-5x more calories than fat</li>
                    <li>• <strong>Improves thyroid function:</strong> Exercise may improve T3 conversion</li>
                    <li>• <strong>Increases energy:</strong> Reduces fatigue significantly within 2-4 weeks</li>
                    <li>• <strong>Better mood:</strong> Reduces depression, anxiety, brain fog</li>
                    <li>• <strong>Improves insulin sensitivity:</strong> Better blood sugar control</li>
                    <li>• <strong>Better sleep:</strong> Improved sleep quality helps thyroid function</li>
                    <li>• <strong>Reduces inflammation:</strong> Important for Hashimoto's patients</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-cyan-800 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    Hypothyroidism Exercise Principles
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• <strong>Strength training priority:</strong> 2-3x weekly to build metabolism</li>
                    <li>• <strong>Moderate intensity:</strong> Avoid excessive high-intensity (raises cortisol)</li>
                    <li>• <strong>Adequate rest:</strong> Recovery is critical with hypothyroidism</li>
                    <li>• <strong>Consistency over intensity:</strong> Regular moderate exercise beats sporadic hard workouts</li>
                    <li>• <strong>Listen to your body:</strong> Respect fatigue days, don't push through exhaustion</li>
                    <li>• <strong>Progressive overload:</strong> Gradually increase weights/reps over time</li>
                    <li>• <strong>Combine with proper nutrition:</strong> High protein diet essential</li>
                    <li>• <strong>Optimize medication first:</strong> Exercise works best when TSH is 1-2 mIU/L</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Plan */}
      <section id="workout-plan" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete 4-Week Hypothyroidism Workout Plan</h2>
            <p className="text-center text-gray-600 mb-12">
              Beginner to intermediate program focusing on strength training, gentle cardio, and metabolism-boosting exercises. 
              5 workouts per week with 2 rest days.
            </p>

            <div className="space-y-6">
              {/* Weekly Schedule */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Weekly Workout Schedule</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white rounded-lg border border-blue-100">
                      <div className="font-semibold text-blue-700 w-32">Monday:</div>
                      <div className="text-gray-700">Full Body Strength Training (45 min)</div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-blue-100">
                      <div className="font-semibold text-blue-700 w-32">Tuesday:</div>
                      <div className="text-gray-700">Low-Impact Cardio + Walking (30 min)</div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-blue-100">
                      <div className="font-semibold text-blue-700 w-32">Wednesday:</div>
                      <div className="text-gray-700">Upper Body Strength Training (40 min)</div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-700 w-32">Thursday:</div>
                      <div className="text-gray-700">REST DAY or Gentle Yoga/Stretching</div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-blue-100">
                      <div className="font-semibold text-blue-700 w-32">Friday:</div>
                      <div className="text-gray-700">Lower Body Strength Training (40 min)</div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-blue-100">
                      <div className="font-semibold text-blue-700 w-32">Saturday:</div>
                      <div className="text-gray-700">Moderate Cardio + Core Work (35 min)</div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-700 w-32">Sunday:</div>
                      <div className="text-gray-700">REST DAY - Recovery & Meal Prep</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Day 1 - Full Body Strength */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800 flex items-center">
                    <Dumbbell className="w-6 h-6 mr-2 text-blue-600" />
                    Monday: Full Body Strength Training (45 minutes)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Focus on compound movements that work multiple muscle groups simultaneously. Start with lighter weights, 
                    perfect form first, then gradually increase weight over 4 weeks.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Warm-up (5 minutes):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Light cardio: Marching in place, arm circles (2 min)</li>
                        <li>• Dynamic stretches: Leg swings, arm swings (3 min)</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">Main Workout (35 minutes) - 3 sets each:</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-gray-800">1. Goblet Squats</p>
                          <p className="text-sm text-gray-600">3 sets × 10-12 reps | Rest: 90 sec</p>
                          <p className="text-xs text-gray-500">Targets: Legs, glutes, core. Hold dumbbell at chest, squat down keeping chest up.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">2. Dumbbell Chest Press (on bench or floor)</p>
                          <p className="text-sm text-gray-600">3 sets × 10-12 reps | Rest: 90 sec</p>
                          <p className="text-xs text-gray-500">Targets: Chest, shoulders, triceps. Press dumbbells up, control down slowly.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">3. Bent-Over Dumbbell Rows</p>
                          <p className="text-sm text-gray-600">3 sets × 10-12 reps each arm | Rest: 60 sec</p>
                          <p className="text-xs text-gray-500">Targets: Back, biceps. Hinge at hips, pull dumbbell to ribcage, squeeze shoulder blade.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">4. Walking Lunges</p>
                          <p className="text-sm text-gray-600">3 sets × 10 reps each leg | Rest: 60 sec</p>
                          <p className="text-xs text-gray-500">Targets: Legs, glutes, balance. Step forward, lower back knee toward ground.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">5. Plank Hold</p>
                          <p className="text-sm text-gray-600">3 sets × 30-60 seconds | Rest: 60 sec</p>
                          <p className="text-xs text-gray-500">Targets: Core, shoulders. Hold straight line from head to heels, don't sag hips.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Cool-down (5 minutes):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Gentle walking to lower heart rate (2 min)</li>
                        <li>• Static stretching: Hold each stretch 30 seconds (3 min)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Remaining Days Summary */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Tuesday-Saturday: Additional Workouts Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Tuesday: Low-Impact Cardio (30 min)</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Brisk walking (outdoor or treadmill at incline)</li>
                        <li>• Cycling (stationary bike, moderate pace)</li>
                        <li>• Swimming or water aerobics (gentle on joints)</li>
                        <li>• Elliptical machine (low resistance)</li>
                        <li>• Target: Keep heart rate at 60-70% max (conversational pace)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Wednesday: Upper Body Strength (40 min)</h4>
                      <p className="text-sm text-gray-600 mb-2">3 sets × 10-12 reps each exercise:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Dumbbell shoulder press, lateral raises</li>
                        <li>• Push-ups (modified on knees if needed)</li>
                        <li>• Bicep curls, tricep dips or overhead extensions</li>
                        <li>• Dumbbell chest flyes</li>
                        <li>• Face pulls with resistance band</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Friday: Lower Body Strength (40 min)</h4>
                      <p className="text-sm text-gray-600 mb-2">3 sets × 10-15 reps each exercise:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Romanian deadlifts (hamstrings, glutes)</li>
                        <li>• Bulgarian split squats (single leg)</li>
                        <li>• Leg press or glute bridges</li>
                        <li>• Calf raises (standing or seated)</li>
                        <li>• Side leg raises for hip abductors</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Saturday: Moderate Cardio + Core (35 min)</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 20 min moderate cardio: Walking, cycling, or swimming</li>
                        <li>• 15 min core circuit: Planks, bird dogs, dead bugs, bicycle crunches</li>
                        <li>• Focus on controlled movements, quality over quantity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important Exercise Guidelines for Hypothyroidism</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-green-700 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  DO These Things
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Start slowly:</strong> Begin with 2-3 days/week if new to exercise, gradually increase</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize sleep:</strong> Get 7-9 hours nightly - poor sleep sabotages results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat enough protein:</strong> 0.8-1g per lb body weight to build/maintain muscle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Take rest days seriously:</strong> Recovery is when muscle builds and metabolism improves</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track progress:</strong> Take measurements, photos - scale isn't the only measure</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-700 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2" />
                  DON'T Do These Things
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't do excessive HIIT:</strong> Too much high-intensity raises cortisol, worsens thyroid</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't overtrain:</strong> More isn't better with hypothyroidism - quality over quantity</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't exercise on empty stomach:</strong> Eat small snack 30-60 min before workout</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't push through exhaustion:</strong> If extremely fatigued, take extra rest day</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't compare to others:</strong> Your pace is perfect for YOUR thyroid condition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Combine Exercise with Hypothyroidism Diet for Best Results</h2>
            <p className="text-xl mb-8">
              Exercise alone isn't enough - you need the right nutrition too. Get our complete hypothyroidism diet plan.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold" asChild>
              <Link href="/plans/hypothyroidism">View Hypothyroidism Diet Plan</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
