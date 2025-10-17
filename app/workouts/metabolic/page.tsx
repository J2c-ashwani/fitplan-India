import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Flame, Zap, Target, Activity, TrendingUp, Clock, Dumbbell } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Metabolic Workouts 2025 | HIIT & Strength Training to Boost Metabolism",
  description: "Complete metabolic workout program with HIIT, strength training, and exercises to boost metabolism and maximize fat burn. Designed for USA, UK, Canada, Australia.",
  keywords: "metabolic workouts, HIIT workouts, metabolism boosting exercises, fat burning workouts, metabolic conditioning, afterburn effect, EPOC training",
  openGraph: {
    title: "Metabolic Workouts 2025 | Boost Metabolism with HIIT",
    description: "Expert-designed metabolic workout program to maximize calorie burn and boost metabolic rate.",
    url: "https://fitplanindia.com/workouts/metabolic",
  },
}

export default function MetabolicWorkoutsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 to-pink-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-rose-600 font-semibold">
              🔥 Maximum Calorie Burn
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Metabolic Workouts 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete metabolic workout program combining HIIT (High-Intensity Interval Training), strength training, and metabolic 
              conditioning to boost metabolism, maximize calorie burn, and create the "afterburn effect" (EPOC) burning calories for 
              24-48 hours post-workout. Designed for all fitness levels seeking maximum fat loss results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#workout-plan">View Workout Program</Link>
              </Button>
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/plans/metabolic-weight-loss">Diet Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Metabolic Workouts Are Superior for Fat Loss</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-rose-200">
                <CardHeader className="bg-rose-50">
                  <CardTitle className="text-rose-800 flex items-center">
                    <Flame className="w-6 h-6 mr-3" />
                    The Afterburn Effect (EPOC)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-3">
                    EPOC (Excess Post-Exercise Oxygen Consumption) means your metabolism stays ELEVATED for 24-48 hours after intense 
                    exercise, burning 100-400 EXTRA calories while you sleep, work, and rest. Traditional steady cardio only burns 
                    calories DURING exercise. Metabolic workouts (HIIT + strength training) create massive afterburn effect.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Burns calories 24-48 hours post-workout</li>
                    <li>• Total calorie burn 2-3x higher than cardio</li>
                    <li>• Metabolism elevated even at rest</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-pink-200">
                <CardHeader className="bg-pink-50">
                  <CardTitle className="text-pink-800 flex items-center">
                    <Dumbbell className="w-6 h-6 mr-3" />
                    Builds Metabolic Muscle
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-3">
                    Strength training builds lean muscle mass - the most metabolically active tissue. Each pound of muscle burns 
                    50-100 calories daily at rest. Building just 5 pounds of muscle increases metabolism by 250-500 calories daily 
                    (equivalent to running 3-5 miles) without any extra work!
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Muscle = 24/7 calorie burning furnace</li>
                    <li>• Permanent metabolism boost</li>
                    <li>• Lose fat while keeping/building muscle</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Metabolic Workout Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-rose-800 mb-2">Fat Loss Benefits:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Burns 500-800 cal per session</li>
                    <li>• Afterburn effect: +100-400 cal</li>
                    <li>• Targets stubborn belly fat</li>
                    <li>• Preserves muscle during fat loss</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-800 mb-2">Metabolic Benefits:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Boosts metabolism 10-15%</li>
                    <li>• Improves insulin sensitivity</li>
                    <li>• Enhances mitochondrial function</li>
                    <li>• Increases HGH production</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-fuchsia-800 mb-2">Time-Efficient:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Only 30-45 min per session</li>
                    <li>• 3-4x weekly is sufficient</li>
                    <li>• More effective than 60 min cardio</li>
                    <li>• Can be done at home or gym</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Program */}
      <section id="workout-plan" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">4-Week Metabolic Workout Program</h2>
            <p className="text-center text-gray-600 mb-12">
              Progressive program combining HIIT, strength training, and active recovery. 4 workouts weekly, 30-45 minutes each.
            </p>

            {/* Week Structure */}
            <Card className="border-rose-200 mb-8">
              <CardHeader className="bg-rose-50">
                <CardTitle className="text-rose-800">Weekly Schedule (Repeat 4 Weeks)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Training Days:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Monday:</strong> Full Body Strength + HIIT (45 min)</li>
                      <li>• <strong>Tuesday:</strong> Active Recovery (30 min walk)</li>
                      <li>• <strong>Wednesday:</strong> Upper Body + HIIT (40 min)</li>
                      <li>• <strong>Thursday:</strong> Active Recovery or Rest</li>
                      <li>• <strong>Friday:</strong> Lower Body + HIIT (45 min)</li>
                      <li>• <strong>Saturday:</strong> Metabolic Conditioning Circuit (35 min)</li>
                      <li>• <strong>Sunday:</strong> Complete Rest</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Progressive Overload:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Week 1:</strong> Learn movements, moderate intensity</li>
                      <li>• <strong>Week 2:</strong> Increase weights 5-10%, full intensity</li>
                      <li>• <strong>Week 3:</strong> Add 1 extra set to each exercise</li>
                      <li>• <strong>Week 4:</strong> Maximum intensity, peak performance</li>
                      <li>• <strong>Progression:</strong> Always lift heavier than previous week</li>
                      <li>• <strong>Rest:</strong> 48 hours between same muscle groups</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monday - Full Body */}
            <Card className="border-indigo-200 mb-6">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-indigo-800">Monday - Full Body Strength + HIIT Finisher (45 min)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Part 1: Strength Training (30 minutes)</h4>
                    <p className="text-sm text-gray-600 mb-3">3 sets x 10-12 reps each. Rest 60-90 sec between sets.</p>
                    <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                      <p className="text-sm text-gray-700">• <strong>Squats (bodyweight or weighted):</strong> 3x12 reps - Targets quads, glutes, core</p>
                      <p className="text-sm text-gray-700">• <strong>Push-ups (or bench press):</strong> 3x12 reps - Chest, shoulders, triceps</p>
                      <p className="text-sm text-gray-700">• <strong>Dumbbell rows:</strong> 3x12 reps each arm - Back, biceps</p>
                      <p className="text-sm text-gray-700">• <strong>Walking lunges:</strong> 3x10 each leg - Legs, glutes, balance</p>
                      <p className="text-sm text-gray-700">• <strong>Plank hold:</strong> 3x45-60 seconds - Core stability</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Part 2: HIIT Finisher (15 minutes) - MAX EFFORT!</h4>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <p className="text-sm text-gray-700 mb-2"><strong>5 rounds - No rest between exercises, 90 sec rest between rounds:</strong></p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Burpees: 30 seconds (as many as possible)</li>
                        <li>• Mountain climbers: 30 seconds (fast pace)</li>
                        <li>• Jump squats: 30 seconds (explosive)</li>
                        <li>• High knees: 30 seconds (sprint in place)</li>
                        <li>• Rest: 90 seconds</li>
                      </ul>
                      <p className="text-xs text-red-700 mt-2">💡 This HIIT finisher creates massive afterburn effect!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wednesday - Upper Body */}
            <Card className="border-purple-200 mb-6">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">Wednesday - Upper Body + HIIT (40 min)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Strength Training (25 minutes)</h4>
                    <div className="bg-purple-50 p-4 rounded-lg space-y-2">
                      <p className="text-sm text-gray-700">• <strong>Dumbbell bench press:</strong> 3x10-12 reps</p>
                      <p className="text-sm text-gray-700">• <strong>Bent-over rows:</strong> 3x10-12 reps</p>
                      <p className="text-sm text-gray-700">• <strong>Shoulder press:</strong> 3x10-12 reps</p>
                      <p className="text-sm text-gray-700">• <strong>Dumbbell curls:</strong> 3x12 reps</p>
                      <p className="text-sm text-gray-700">• <strong>Tricep dips:</strong> 3x12 reps</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">HIIT Cardio (15 minutes) - Treadmill/Bike/Outdoors</h4>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700"><strong>8 rounds of:</strong></p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Sprint/Maximum effort: 30 seconds</li>
                        <li>• Active recovery walk/slow: 90 seconds</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Friday - Lower Body */}
            <Card className="border-green-200 mb-6">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Friday - Lower Body Power + HIIT (45 min)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Lower Body Strength (30 minutes)</h4>
                    <div className="bg-green-50 p-4 rounded-lg space-y-2">
                      <p className="text-sm text-gray-700">• <strong>Goblet squats:</strong> 4x12 reps (heavier weight)</p>
                      <p className="text-sm text-gray-700">• <strong>Romanian deadlifts:</strong> 4x12 reps (targets hamstrings)</p>
                      <p className="text-sm text-gray-700">• <strong>Bulgarian split squats:</strong> 3x10 each leg</p>
                      <p className="text-sm text-gray-700">• <strong>Leg press or step-ups:</strong> 3x15 reps</p>
                      <p className="text-sm text-gray-700">• <strong>Calf raises:</strong> 3x20 reps</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">HIIT Leg Burner (15 minutes)</h4>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <p className="text-sm text-gray-700"><strong>4 rounds - 45 sec work, 15 sec rest:</strong></p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Jump squats: 45 sec</li>
                        <li>• Alternating lunges: 45 sec</li>
                        <li>• Squat hold: 45 sec (static hold)</li>
                        <li>• High knees: 45 sec</li>
                        <li>• Rest: 60 seconds between rounds</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Saturday - Metabolic Circuit */}
            <Card className="border-amber-200 mb-6">
              <CardHeader className="bg-amber-50">
                <CardTitle className="text-amber-800">Saturday - Full Body Metabolic Circuit (35 min)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-3">Complete Circuit Style - 5 Rounds Total</h4>
                  <p className="text-sm text-gray-700 mb-3">Do each exercise back-to-back with NO rest. Rest 2 minutes between rounds.</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-gray-700">• <strong>Kettlebell swings:</strong> 20 reps (or dumbbell)</p>
                    <p className="text-sm text-gray-700">• <strong>Push-ups:</strong> 15 reps</p>
                    <p className="text-sm text-gray-700">• <strong>Jump lunges:</strong> 20 reps (10 each leg)</p>
                    <p className="text-sm text-gray-700">• <strong>Burpees:</strong> 10 reps</p>
                    <p className="text-sm text-gray-700">• <strong>Plank to downward dog:</strong> 15 reps</p>
                    <p className="text-sm text-gray-700">• <strong>Mountain climbers:</strong> 30 reps</p>
                    <p className="text-sm text-gray-700 font-semibold mt-2">Rest: 2 minutes, then repeat 4 more times!</p>
                  </div>

                  <div className="mt-4 bg-red-50 p-3 rounded border border-red-200">
                    <p className="text-xs text-red-700">🔥 <strong>This workout burns 600-800 calories + massive afterburn!</strong></p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Metabolic Workout Tips for Maximum Results</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700">✅ Do's</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Warm up 5-10 min:</strong> Light cardio + dynamic stretches</li>
                    <li>• <strong>Progressive overload:</strong> Increase weight/intensity weekly</li>
                    <li>• <strong>Full intensity HIIT:</strong> 80-90% max effort during work intervals</li>
                    <li>• <strong>Proper form first:</strong> Don't sacrifice form for speed</li>
                    <li>• <strong>Track workouts:</strong> Write down weights, reps, times</li>
                    <li>• <strong>Protein post-workout:</strong> Within 30-60 min (20-30g)</li>
                    <li>• <strong>Stay hydrated:</strong> Drink 500ml during workout</li>
                    <li>• <strong>Rest days important:</strong> Muscles grow during rest!</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-700">❌ Don'ts</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Don't skip warm-up:</strong> Increases injury risk</li>
                    <li>• <strong>Don't do HIIT daily:</strong> Overtraining kills progress</li>
                    <li>• <strong>Don't sacrifice form:</strong> Slow controlled movements better</li>
                    <li>• <strong>Don't do same workout:</strong> Body adapts - vary exercises</li>
                    <li>• <strong>Don't train fasted:</strong> Need energy for intensity</li>
                    <li>• <strong>Don't ignore rest days:</strong> Recovery = results</li>
                    <li>• <strong>Don't compare to others:</strong> Your pace, your journey</li>
                    <li>• <strong>Don't quit after 1-2 weeks:</strong> Results take 4-6 weeks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Metabolism?</h2>
            <p className="text-xl mb-8">
              Combine these workouts with our metabolic diet plan for maximum fat loss results!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Target className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Personalized Program</h4>
                <p className="text-white text-sm mb-4">Custom workout + diet - ₹500</p>
                <Button size="lg" className="w-full bg-white text-rose-600" asChild>
                  <Link href="/contact">Get Custom Plan</Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Flame className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Metabolic Diet Plan</h4>
                <p className="text-yellow-100 text-sm mb-4">Boost metabolism with food</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/plans/metabolic-weight-loss">View Diet Plan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
