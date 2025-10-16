import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Zap, Apple, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Intermittent Fasting Workout Plan | Exercise Timing for IF",
  description: "Complete IF workout guide with optimal exercise timing, fasted training strategies, fed state workouts, and performance optimization during intermittent fasting.",
  keywords: "intermittent fasting workout, fasted cardio, IF exercise timing, workout during fasting, fed state training, 16:8 workout schedule",
  openGraph: {
    title: "Intermittent Fasting Workout Plan | Exercise Guide for IF",
    description: "Evidence-based IF workouts with optimal timing strategies for fat loss and muscle preservation.",
    url: "https://fitplanindia.com/workouts/intermittent-fasting",
  },
}

export default function IntermittentFastingWorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-blue-700 font-semibold">
              ⏰ Complete IF Workout Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Intermittent Fasting Workout Plan: Optimize Exercise Timing
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover the best workout strategies for intermittent fasting including optimal exercise timing, 
              fasted training benefits, fed state workouts, and maximizing fat loss while preserving muscle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#fasted-workouts">
                  Fasted Training
                </Link>
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="#fed-workouts">
                  Fed State Training
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
                <div className="text-gray-600">More Fat Burned (Fasted)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">2-3hr</div>
                <div className="text-gray-600">Post-Meal Ideal Timing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">30-60min</div>
                <div className="text-gray-600">Fasted Cardio Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">Fed State</div>
                <div className="text-gray-600">Best for Strength</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exercise Timing with Intermittent Fasting</h2>
              <p className="text-lg text-gray-700 mb-6">
                When you work out during intermittent fasting significantly impacts results. Fasted training (during 
                fasting window) maximizes fat burning and promotes autophagy, while fed state training (during eating 
                window) optimizes performance and muscle building. Both approaches have benefits - the key is understanding 
                when to use each. Fasted cardio can burn up to 20% more fat, while fed state strength training allows 
                for better performance and recovery. Most people do best combining both: light cardio fasted in morning, 
                strength training in eating window.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Fasted Training Benefits</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Enhanced fat oxidation (20%+ more fat burned)</li>
                    <li>• Increased growth hormone (up to 5x)</li>
                    <li>• Improved insulin sensitivity</li>
                    <li>• Promotes autophagy (cellular cleanup)</li>
                    <li>• Mental clarity and focus during workout</li>
                    <li>• Best for: Low-moderate intensity cardio</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-indigo-800">Fed State Training Benefits</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Better strength and power output</li>
                    <li>• Improved muscle protein synthesis</li>
                    <li>• Higher energy for intense workouts</li>
                    <li>• Reduced muscle breakdown</li>
                    <li>• Faster recovery with nutrients available</li>
                    <li>• Best for: Strength training, HIIT, sports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule Guide */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start">
                <Clock className="w-8 h-8 text-yellow-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-900 text-xl mb-3">⏰ Optimal IF Workout Timing (16:8 Example):</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Morning Fasted Cardio (7-9 AM):</strong> Light cardio during fast (walk, jog, cycle)</li>
                    <li>• <strong>Pre-Lunch Training (11 AM):</strong> Workout then break fast at 12 PM with protein</li>
                    <li>• <strong>Afternoon Training (2-4 PM):</strong> 2-3 hours after first meal - ideal energy</li>
                    <li>• <strong>Evening Training (6-7 PM):</strong> Before last meal, fed state for strength</li>
                    <li>• <strong>Key Rule:</strong> Strength training works best in eating window. Cardio flexible anytime.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasted Workouts Section */}
      <section id="fasted-workouts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Zap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fasted Training Workouts</h2>
              <p className="text-lg text-gray-600">
                Workouts performed during fasting window for maximum fat burning.
              </p>
            </div>

            {/* Fasted Workout 1: Morning Cardio */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Fasted Morning Cardio (During Fasting Window)</CardTitle>
                  <Badge className="bg-blue-600 text-white">30-45 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>🔥 Maximum Fat Burning:</strong> Fasted cardio burns stored fat directly since glycogen 
                    (glucose stores) are depleted. Studies show 20%+ more fat oxidation compared to fed state cardio.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Best Fasted Cardio Activities:</h5>
                    
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Brisk Walking</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30-60 minutes | <strong>Intensity:</strong> Moderate (60-70% max HR)
                        </p>
                        <p className="text-sm text-gray-600">
                          Most accessible fasted cardio. Walk at pace where you can talk but slightly breathless. 
                          Burns fat without overtaxing fasted body.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Light Jogging/Treadmill</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 20-40 minutes | <strong>Intensity:</strong> Low-moderate
                        </p>
                        <p className="text-sm text-gray-600">
                          Easy pace - don't push hard when fasted. Zone 2 cardio is perfect for fat burning 
                          without muscle breakdown.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Stationary Bike</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30-45 minutes | <strong>Intensity:</strong> Low-moderate
                        </p>
                        <p className="text-sm text-gray-600">
                          Less impact than running. Steady pace, low-moderate resistance. Read or watch content 
                          while burning fat.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Swimming (Gentle Laps)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 20-30 minutes | <strong>Intensity:</strong> Easy pace
                        </p>
                        <p className="text-sm text-gray-600">
                          Full body, zero impact. Don't sprint - gentle laps only when fasted. 
                          Excellent for joint-friendly fat burning.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-300 rounded-lg p-4 mt-6">
                    <h5 className="font-semibold mb-2 text-red-800">⚠️ Fasted Cardio Guidelines:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Stay low-moderate intensity:</strong> 60-70% max heart rate</li>
                      <li>• <strong>Hydrate well:</strong> Drink water before, during, after</li>
                      <li>• <strong>Don't overdo duration:</strong> 30-45 min is sweet spot</li>
                      <li>• <strong>Listen to body:</strong> If dizzy/weak, stop and eat</li>
                      <li>• <strong>AVOID:</strong> HIIT, sprints, or heavy training when fasted</li>
                      <li>• <strong>Break fast soon after:</strong> Within 1-2 hours with protein</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fasted Workout 2: Light Bodyweight */}
            <Card className="border-indigo-200">
              <CardHeader className="bg-indigo-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-indigo-800">Fasted Bodyweight Circuit (Optional)</CardTitle>
                  <Badge className="bg-indigo-600 text-white">15-20 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Light bodyweight exercises can be done fasted, but keep intensity moderate. Best done right before 
                  breaking fast so you can eat protein immediately after.
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Light Circuit (3 Rounds, minimal rest):</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Bodyweight Squats:</strong> 15-20 reps</li>
                      <li>• <strong>Push-Ups (Modified OK):</strong> 10-15 reps</li>
                      <li>• <strong>Walking Lunges:</strong> 10 each leg</li>
                      <li>• <strong>Plank Hold:</strong> 30-45 seconds</li>
                      <li>• <strong>Rest:</strong> 60 seconds between rounds</li>
                      <li>• <strong>Then:</strong> Break fast within 30 minutes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fed State Workouts Section */}
      <section id="fed-workouts" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Dumbbell className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fed State Training (During Eating Window)</h2>
              <p className="text-lg text-gray-600">
                Strength training and high-intensity workouts performed after eating for optimal performance.
              </p>
            </div>

            {/* Fed Workout 1: Strength Training */}
            <Card className="border-indigo-200 mb-8">
              <CardHeader className="bg-indigo-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-indigo-800">Strength Training (2-3 hours after first meal)</CardTitle>
                  <Badge className="bg-indigo-600 text-white">45-60 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-indigo-100 border border-indigo-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>💪 Best Time for Weights:</strong> 2-3 hours after eating provides optimal energy for 
                    lifting heavy. Nutrients available for performance and muscle protein synthesis.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Full Body Strength Routine (3-4x per week)</h5>
                    
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Barbell Squats or Goblet Squats</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 2 min
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Compound movement, builds legs and core. Fed state allows proper form and heavy weight.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Bench Press or Push-Ups</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3-4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Upper body push. Energy from food = better performance.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Bent-Over Rows or Pull-Ups</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3-4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Back development. Balanced physique with nutrients available.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Romanian Deadlifts</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 sec
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Hamstrings and glutes. Compound movement benefits from fed state.</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Core Work (Planks, Crunches)</h6>
                        <p className="text-sm text-gray-700">
                          <strong>Sets:</strong> 3 | <strong>Duration/Reps:</strong> 45-60 sec or 15-20 reps
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Finish with core. Can be intense with food energy.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-300 rounded-lg p-4 mt-6">
                    <h5 className="font-semibold mb-2 text-green-800">✅ Post-Workout Nutrition:</h5>
                    <p className="text-sm text-gray-700">Within 1-2 hours: Protein shake or meal with 20-30g protein + carbs for recovery. 
                    IF makes this easy - just eat your next scheduled meal!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fed Workout 2: HIIT */}
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">HIIT Training (During Eating Window Only)</CardTitle>
                  <Badge className="bg-purple-600 text-white">20-25 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>⚡ High-Intensity = Fed State Only:</strong> HIIT requires glycogen (glucose stores). 
                    NEVER do HIIT during fasting window - you'll feel terrible and risk muscle loss.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">HIIT Protocol (After Eating):</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Warm-up:</strong> 5 minutes easy</li>
                      <li>• <strong>Work:</strong> 30 seconds max effort (sprint, burpees, bike sprint)</li>
                      <li>• <strong>Rest:</strong> 90 seconds low intensity</li>
                      <li>• <strong>Repeat:</strong> 6-8 rounds</li>
                      <li>• <strong>Cool-down:</strong> 5 minutes easy</li>
                      <li>• <strong>Timing:</strong> At least 2 hours after eating</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IF Workout Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Weekly IF Workout Schedule (16:8)</h2>
            
            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Monday:</h5>
                      <p className="text-sm text-gray-700">Morning: Fasted walk (30 min, 8 AM)</p>
                      <p className="text-sm text-gray-700">Afternoon: Strength training (3 PM, fed state)</p>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-indigo-800">Tuesday:</h5>
                      <p className="text-sm text-gray-700">Morning: Fasted cycling (40 min, 8 AM)</p>
                      <p className="text-sm text-gray-700">No evening workout - active recovery</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Wednesday:</h5>
                      <p className="text-sm text-gray-700">Morning: Fasted walk (30 min, 8 AM)</p>
                      <p className="text-sm text-gray-700">Evening: Strength training (6 PM, fed state)</p>
                    </div>

                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-cyan-800">Thursday:</h5>
                      <p className="text-sm text-gray-700">Afternoon: HIIT (3 PM, fed state only)</p>
                      <p className="text-sm text-gray-700">20-25 minutes high-intensity</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Friday:</h5>
                      <p className="text-sm text-gray-700">Morning: Fasted walk (30 min, 8 AM)</p>
                      <p className="text-sm text-gray-700">Afternoon: Strength training (3 PM, fed state)</p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-orange-800">Saturday:</h5>
                      <p className="text-sm text-gray-700">Morning: Long fasted walk or hike (60 min)</p>
                      <p className="text-sm text-gray-700">Optional afternoon: Light activity</p>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-gray-800">Sunday:</h5>
                      <p className="text-sm text-gray-700">Rest day or light yoga/stretching</p>
                      <p className="text-sm text-gray-700">Recovery for next week</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IF Workout Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Fasted cardio low-moderate only:</strong> Don't push hard when fasted</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Strength train in eating window:</strong> 2-3 hours after eating ideal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated:</strong> Drink water before, during, after workouts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Break fast with protein:</strong> After fasted workout, eat within 1-2 hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Listen to body:</strong> If weak/dizzy, stop and eat</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>HIIT when fasted:</strong> Recipe for feeling terrible and losing muscle</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Heavy lifting fasted:</strong> Performance suffers, injury risk higher</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not eating after fasted workout:</strong> Need protein within 1-2 hours</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Overtraining when fasted:</strong> Body needs more recovery on IF</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Dehydration:</strong> Easy to forget water when fasting - drink constantly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your IF Transformation
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise timing is crucial, but proper intermittent fasting nutrition is the foundation. Get your 
              complete IF diet plan to maximize results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">IF Diet Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn complete intermittent fasting nutrition with schedules, meal plans, and fasting strategies.
                </p>
                <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/intermittent-fasting">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a complete IF workout and nutrition plan tailored to your schedule.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join thousands optimizing workouts with intermittent fasting for maximum fat loss
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
