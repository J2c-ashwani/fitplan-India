import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Zap, Apple, TrendingUp, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Muscle Gain Workout Plan | Best Exercises to Build Mass & Strength",
  description: "Complete muscle building workout guide with hypertrophy training, strength programs, progressive overload, split routines, and exercises to maximize muscle growth.",
  keywords: "muscle gain workout, hypertrophy training, bodybuilding workout, mass building exercises, strength training program, muscle growth routine",
  openGraph: {
    title: "Muscle Gain Workout Plan | Complete Hypertrophy Training Guide",
    description: "Evidence-based muscle building workouts for maximum mass and strength gains.",
    url: "https://fitplanindia.com/workouts/muscle-gain",
  },
}

export default function MuscleGainWorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-blue-700 font-semibold">
              💪 Complete Muscle Building Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Muscle Gain Workout Plan: Build Mass & Strength Fast
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover effective hypertrophy training programs with progressive overload, optimal volume, compound 
              exercises, split routines, and complete strategies to maximize muscle growth and strength gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#beginner">
                  Beginner Program
                </Link>
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="#advanced">
                  Advanced Split
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
                <div className="text-3xl font-bold text-blue-600 mb-2">8-12</div>
                <div className="text-gray-600">Reps for Hypertrophy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">4-6x</div>
                <div className="text-gray-600">Per Week Training</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">10-20</div>
                <div className="text-gray-600">Sets Per Muscle Group</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">48-72hr</div>
                <div className="text-gray-600">Rest Between Muscles</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Muscle Building Training Principles</h2>
              <p className="text-lg text-gray-700 mb-6">
                Building muscle (hypertrophy) requires three key principles: progressive overload (gradually increasing 
                weight, reps, or volume over time), adequate training volume (10-20 sets per muscle group per week), and 
                proper recovery (48-72 hours between training same muscle). The 8-12 rep range with moderate weights triggers 
                maximum muscle growth through metabolic stress and mechanical tension. Compound exercises (squats, deadlifts, 
                bench press) are foundational - they work multiple muscle groups and allow heavy weights. Isolation exercises 
                (bicep curls, leg extensions) target specific muscles for complete development. Training each muscle group 
                2x per week provides optimal growth stimulus without overtraining. Rest is when muscles actually grow - 
                overtraining prevents progress.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Hypertrophy Training Fundamentals</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Rep range:</strong> 8-12 reps (muscle growth sweet spot)</li>
                    <li>• <strong>Sets:</strong> 3-5 per exercise, 10-20 per muscle weekly</li>
                    <li>• <strong>Rest:</strong> 60-90 seconds between sets</li>
                    <li>• <strong>Tempo:</strong> Controlled, 2-3 sec lowering (eccentric)</li>
                    <li>• <strong>Progressive overload:</strong> Increase weight 5-10% when hit reps</li>
                    <li>• <strong>Frequency:</strong> Each muscle 2x per week optimal</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-indigo-800">Why These Principles Work</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Mechanical tension:</strong> Heavy weights stretch muscle fibers</li>
                    <li>• <strong>Metabolic stress:</strong> "Pump" from 8-12 reps triggers growth</li>
                    <li>• <strong>Muscle damage:</strong> Micro-tears repair larger and stronger</li>
                    <li>• <strong>Volume drives growth:</strong> More work = more stimulus</li>
                    <li>• <strong>Recovery allows adaptation:</strong> Muscles grow during rest</li>
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
                  <h4 className="font-bold text-yellow-900 text-xl mb-3">⚠️ Critical Muscle Building Guidelines:</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Progressive overload is mandatory:</strong> Must increase difficulty over time or no growth</li>
                    <li>• <strong>Form before weight:</strong> Bad form = injury, not muscle growth</li>
                    <li>• <strong>Eat in calorie surplus:</strong> Cannot build significant muscle in deficit</li>
                    <li>• <strong>Sleep 7-9 hours:</strong> Muscle grows during sleep, not in gym</li>
                    <li>• <strong>Train hard, not long:</strong> 45-60 min per session, quality over quantity</li>
                    <li>• <strong>Patience required:</strong> Muscle building takes months and years, not weeks</li>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Beginner Muscle Building Program (3-Day Full Body)</h2>
              <p className="text-lg text-gray-600">
                Perfect for first 6-12 months of training. Build foundation with full body workouts 3x per week.
              </p>
            </div>

            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Monday/Wednesday/Friday - Full Body Workout</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>💪 Beginners respond to EVERYTHING:</strong> Full body 3x per week provides enough stimulus 
                    for growth while allowing recovery. Focus on learning exercises and progressive overload.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Full Body Routine</h5>
                    
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Barbell Squats</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 2 min
                        </p>
                        <p className="text-sm text-gray-600">
                          King of exercises. Builds entire lower body and core. Start with just bar, add 5-10 lbs weekly. 
                          Full depth if mobility allows.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Bench Press (Barbell or Dumbbell)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 2 min
                        </p>
                        <p className="text-sm text-gray-600">
                          Primary chest builder. Control down to chest, press explosively up. Add weight when hit 12 reps.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Bent-Over Rows (Barbell or Dumbbell)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                        </p>
                        <p className="text-sm text-gray-600">
                          Back thickness. Hinge at hips, pull weight to lower chest. Squeeze shoulder blades together.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Overhead Press (Barbell or Dumbbell)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                        </p>
                        <p className="text-sm text-gray-600">
                          Shoulder development. Press straight overhead, keep core tight. Standing is harder but better.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Romanian Deadlifts</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 sec
                        </p>
                        <p className="text-sm text-gray-600">
                          Hamstrings and glutes. Hinge at hips, lower weight to mid-shin keeping back straight.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">6. Bicep Curls + Tricep Extensions (Optional)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Sets:</strong> 2-3 each | <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 60 sec
                        </p>
                        <p className="text-sm text-gray-600">
                          Arm isolation if time allows. Not essential for beginners but nice to have.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-300 rounded-lg p-4 mt-6">
                    <h5 className="font-semibold mb-2 text-green-800">Beginner Progressive Overload:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Week 1-2:</strong> Learn form, find starting weights (can complete 8 reps)</li>
                      <li>• <strong>Each week:</strong> Try to add 1-2 reps OR add 5 lbs when hit 12 reps</li>
                      <li>• <strong>Track workouts:</strong> Write down weights and reps every session</li>
                      <li>• <strong>Example:</strong> Squat 95 lbs × 8 reps → next week 95 × 10 → 95 × 12 → 105 × 8</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Program */}
      <section id="advanced" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Dumbbell className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Muscle Building - 5-Day Split</h2>
              <p className="text-lg text-gray-600">
                For intermediate/advanced lifters (1+ years training). Maximum volume and frequency for growth.
              </p>
            </div>

            {/* Push Day */}
            <Card className="border-indigo-200 mb-8">
              <CardHeader className="bg-indigo-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-indigo-800">Monday - Push (Chest/Shoulders/Triceps)</CardTitle>
                  <Badge className="bg-indigo-600 text-white">60-75 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Flat Barbell Bench Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 6-8 (heavy) | <strong>Rest:</strong> 2-3 min
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Incline Dumbbell Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Cable Flyes</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 sec
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Overhead Dumbbell Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Lateral Raises + Tricep Pushdowns (Superset)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 each | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 sec
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pull Day */}
            <Card className="border-purple-200 mb-8">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">Tuesday - Pull (Back/Biceps)</CardTitle>
                  <Badge className="bg-purple-600 text-white">60-75 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Conventional Deadlifts</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 5-8 (heavy) | <strong>Rest:</strong> 3 min
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Pull-Ups or Weighted Pull-Ups</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 6-12 | <strong>Rest:</strong> 2 min
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Barbell Rows</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Cable Rows + Face Pulls (Superset)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 each | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 sec
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Barbell Curls + Hammer Curls</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 each | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 60 sec
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legs Day */}
            <Card className="border-orange-200 mb-8">
              <CardHeader className="bg-orange-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-orange-800">Wednesday - Legs (Quads/Hamstrings/Glutes/Calves)</CardTitle>
                  <Badge className="bg-orange-600 text-white">75-90 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Barbell Back Squats</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 5 | <strong>Reps:</strong> 6-10 | <strong>Rest:</strong> 3 min
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Romanian Deadlifts</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 2 min
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Leg Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 90 sec
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Leg Curls</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 sec
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Calf Raises + Abs Circuit</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 15-20 (calves), 3 rounds abs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Repeat */}
            <Card className="border-cyan-200">
              <CardHeader className="bg-cyan-50">
                <CardTitle className="text-cyan-800">Thursday/Saturday - Repeat Push/Pull</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  <strong>Thursday:</strong> Repeat Monday's Push workout (or slight variations) <br/>
                  <strong>Friday:</strong> Rest day <br/>
                  <strong>Saturday:</strong> Repeat Tuesday's Pull workout (or variations) <br/>
                  <strong>Sunday:</strong> Rest day
                </p>
                <div className="bg-cyan-50 border border-cyan-300 rounded-lg p-4">
                  <h5 className="font-semibold mb-2 text-cyan-800">Training Each Muscle 2x Per Week:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Chest: Monday + Thursday (2x weekly)</li>
                    <li>• Back: Tuesday + Saturday (2x weekly)</li>
                    <li>• Legs: Wednesday only (1x for quads, but enough volume)</li>
                    <li>• This frequency maximizes muscle protein synthesis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Muscle Building Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Progressive overload always:</strong> Add weight or reps every session</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track all workouts:</strong> Can't improve what you don't measure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Master form first:</strong> Injury = no training = no growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Compound exercises priority:</strong> 70% compounds, 30% isolation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat in surplus with protein:</strong> Cannot build muscle without fuel</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ego lifting:</strong> Using too much weight with terrible form</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>No progressive overload:</strong> Same weights forever = no growth</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Training in calorie deficit:</strong> Minimizes muscle gain potential</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping legs:</strong> Largest muscles, most growth hormone release</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Expecting fast results:</strong> Muscle building takes years, be patient</span>
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
              Complete Your Muscle Building Journey
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Training breaks down muscle, but proper nutrition provides the building blocks for growth. Get your 
              complete muscle gain diet plan to maximize results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Muscle Gain Diet Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn complete muscle building nutrition with calorie surplus, high-protein meal plans, and mass gain strategies.
                </p>
                <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/muscle-gain">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized muscle building workout and diet plan for your body type.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join thousands building lean muscle through progressive training and smart nutrition
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
