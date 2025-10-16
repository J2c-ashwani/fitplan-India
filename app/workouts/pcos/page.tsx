import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Zap, Clock, Target, TrendingUp, Apple, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PCOS Workout Plan 2025 | Best Home & Gym Exercises for Weight Loss",
  description: "Complete PCOS workout guide with proven home and gym exercises to improve insulin sensitivity, balance hormones, and achieve sustainable weight loss naturally.",
  keywords: "PCOS workout, PCOS exercise plan, PCOS weight loss workout, best exercises for PCOS, PCOS gym routine, home workout for PCOS, insulin resistance exercises",
  openGraph: {
    title: "PCOS Workout Plan 2025 | Home & Gym Exercise Guide",
    description: "Evidence-based PCOS workout routines for home and gym to manage symptoms and boost weight loss.",
    url: "https://fitplanindia.com/workouts/pcos",
  },
}

export default function PCOSWorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              💪 Complete PCOS Workout Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PCOS Workout Plan: Best Home & Gym Exercises for Weight Loss
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Discover evidence-based workout routines specifically designed for women with PCOS to improve insulin 
              sensitivity, reduce inflammation, balance hormones, and achieve sustainable weight loss.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100" asChild>
                <Link href="#home-workouts">
                  Home Workouts
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10" asChild>
                <Link href="#gym-workouts">
                  Gym Workouts
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
                <div className="text-3xl font-bold text-purple-600 mb-2">30-50%</div>
                <div className="text-gray-600">Improved Insulin Sensitivity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">4-5x/Week</div>
                <div className="text-gray-600">Recommended Frequency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">30-45min</div>
                <div className="text-gray-600">Per Session</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">8-12 Weeks</div>
                <div className="text-gray-600">To See Results</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exercise is Crucial for PCOS Management</h2>
              <p className="text-lg text-gray-700 mb-6">
                Exercise is one of the most effective non-pharmaceutical interventions for managing PCOS symptoms. 
                Regular physical activity improves insulin sensitivity, reduces testosterone levels, promotes weight loss, 
                decreases inflammation, and helps regulate menstrual cycles. Research shows that combining strength training 
                with moderate cardio produces the best results for women with PCOS.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-purple-800">Exercise Benefits for PCOS</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Improves insulin sensitivity by 30-50%</li>
                    <li>• Reduces androgen (testosterone) levels</li>
                    <li>• Promotes healthy weight loss and fat reduction</li>
                    <li>• Regulates menstrual cycles naturally</li>
                    <li>• Reduces inflammation and oxidative stress</li>
                    <li>• Improves mood and reduces anxiety/depression</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Best Exercise Types for PCOS</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Resistance Training:</strong> 3x per week for muscle building</li>
                    <li>• <strong>Moderate Cardio:</strong> 2-3x per week for heart health</li>
                    <li>• <strong>HIIT:</strong> 1-2x per week (if tolerated)</li>
                    <li>• <strong>Yoga/Pilates:</strong> 2-3x per week for stress reduction</li>
                    <li>• <strong>Walking:</strong> Daily 30+ minutes for recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Workouts Section */}
      <section id="home-workouts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Home className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">PCOS Home Workout Plan</h2>
              <p className="text-lg text-gray-600">
                No equipment needed! These bodyweight exercises can be done in the comfort of your home to improve 
                insulin sensitivity and promote weight loss.
              </p>
            </div>

            {/* Home Workout Routine 1: Full Body Strength */}
            <Card className="border-purple-200 mb-8">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">Full Body Strength Workout (Monday/Thursday)</CardTitle>
                  <Badge className="bg-purple-600 text-white">30-40 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      Warm-Up (5 minutes)
                    </h5>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Jumping jacks or marching in place: 2 minutes</li>
                      <li>• Arm circles and leg swings: 2 minutes</li>
                      <li>• Light stretching: 1 minute</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-purple-600" />
                      Main Workout (3 Rounds)
                    </h5>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Bodyweight Squats</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Stand with feet shoulder-width apart, lower down as if sitting in a chair, keep chest up, 
                          push through heels to stand. Targets: quads, glutes, core.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Push-Ups (Modified if needed)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Start in plank position, lower chest to ground, push back up. Modify on knees if needed. 
                          Targets: chest, shoulders, triceps, core.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Walking Lunges</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 10-12 each leg | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Step forward, lower back knee toward ground, push up and step forward with other leg. 
                          Targets: quads, glutes, hamstrings, balance.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Plank Hold</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30-60 seconds | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Hold plank position on forearms or hands, keep body in straight line, engage core. 
                          Targets: entire core, shoulders, stability.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Glute Bridges</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Lie on back, feet flat on ground, lift hips up, squeeze glutes at top, lower down. 
                          Targets: glutes, hamstrings, lower back.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">6. Mountain Climbers</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30-45 seconds | <strong>Rest:</strong> 60 seconds between rounds
                        </p>
                        <p className="text-sm text-gray-600">
                          Start in plank, alternate bringing knees toward chest quickly. Targets: core, shoulders, 
                          cardio conditioning.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool Down (5 minutes)</h5>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Light walking or marching: 2 minutes</li>
                      <li>• Full body stretching focusing on worked muscles: 3 minutes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout Routine 2: Cardio & Core */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Cardio & Core Workout (Tuesday/Friday)</CardTitle>
                  <Badge className="bg-blue-600 text-white">30-35 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Light cardio (marching, dancing, jumping jacks)</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Cardio Intervals (20 minutes)</h5>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Format:</strong> 2 minutes moderate intensity, 1 minute high intensity (repeat 6-7 times)
                      </p>
                      <p className="text-sm text-gray-600 mb-2"><strong>Exercise Options:</strong></p>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>• Brisk walking or jogging in place</li>
                        <li>• High knees</li>
                        <li>• Butt kicks</li>
                        <li>• Step-ups on stairs</li>
                        <li>• Dancing to music</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Core Circuit (2 Rounds)</h5>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="text-sm font-semibold">Bicycle Crunches - 20 reps</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="text-sm font-semibold">Leg Raises - 12-15 reps</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="text-sm font-semibold">Russian Twists - 20 reps (10 each side)</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="text-sm font-semibold">Plank to Downward Dog - 10 reps</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool Down (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Stretching and deep breathing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout Routine 3: Active Recovery */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">Yoga & Stretching (Wednesday/Saturday)</CardTitle>
                  <Badge className="bg-green-600 text-white">30-40 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Gentle yoga and stretching help reduce cortisol, improve flexibility, and support recovery. 
                  Focus on poses that support reproductive health and stress reduction.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Recommended Poses:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Child's Pose (Balasana)</li>
                      <li>• Cat-Cow Stretch</li>
                      <li>• Butterfly Pose (Baddha Konasana)</li>
                      <li>• Bridge Pose (Setu Bandhasana)</li>
                      <li>• Reclining Twist</li>
                      <li>• Cobra Pose (Bhujangasana)</li>
                      <li>• Legs Up the Wall</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Benefits for PCOS:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Reduces stress and cortisol</li>
                      <li>• Improves pelvic circulation</li>
                      <li>• Enhances mind-body connection</li>
                      <li>• Supports hormone balance</li>
                      <li>• Aids in recovery and flexibility</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gym Workouts Section */}
      <section id="gym-workouts" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Dumbbell className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">PCOS Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Progressive resistance training with gym equipment to maximize muscle building, insulin sensitivity, 
                and metabolic rate for optimal PCOS management.
              </p>
            </div>

            {/* Gym Workout Routine 1: Lower Body */}
            <Card className="border-indigo-200 mb-8">
              <CardHeader className="bg-indigo-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-indigo-800">Lower Body Strength (Monday/Thursday)</CardTitle>
                  <Badge className="bg-indigo-600 text-white">45-50 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Barbell Back Squats</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3-4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Primary compound movement for legs and glutes</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Romanian Deadlifts</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Targets hamstrings, glutes, and lower back</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Leg Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Additional quad and glute development</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Walking Dumbbell Lunges</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10 each leg | <strong>Rest:</strong> 60 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Unilateral leg strength and balance</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Leg Curls (Machine)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 45 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Isolation for hamstrings</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">6. Calf Raises</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 45 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Complete lower body development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout Routine 2: Upper Body */}
            <Card className="border-pink-200 mb-8">
              <CardHeader className="bg-pink-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-pink-800">Upper Body Strength (Tuesday/Friday)</CardTitle>
                  <Badge className="bg-pink-600 text-white">40-45 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Bench Press (Barbell or Dumbbell)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3-4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Primary chest and upper body compound movement</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Lat Pulldowns or Assisted Pull-Ups</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Back width and strength development</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Seated Shoulder Press (Dumbbell)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 60 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Shoulder strength and stability</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Cable Rows</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Back thickness and posture</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Tricep Dips or Pushdowns</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 45 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Tricep isolation and arm definition</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">6. Bicep Curls (Barbell or Dumbbell)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 45 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Bicep development and arm strength</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout Routine 3: HIIT Cardio */}
            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-orange-800">HIIT Cardio (Wednesday) - Optional</CardTitle>
                  <Badge className="bg-orange-600 text-white">20-25 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>⚠️ Important:</strong> HIIT should be done sparingly if you have PCOS, as too much high-intensity 
                    exercise can increase cortisol. Only include if you're managing stress well.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Treadmill Intervals</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Format:</strong> 30 seconds sprint, 90 seconds walk/jog (repeat 8-10 times)
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Rowing Machine Intervals</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Format:</strong> 45 seconds hard rowing, 90 seconds easy pace (repeat 8 times)
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Bike Sprints</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Format:</strong> 30 seconds max effort, 2 minutes easy pedaling (repeat 6-8 times)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exercise Guidelines & Safety */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">PCOS Exercise Guidelines & Safety</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Exercise Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Start gradually:</strong> Begin with 2-3 sessions per week and build up</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize strength training:</strong> Builds muscle and improves insulin sensitivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Include rest days:</strong> Recovery is essential for hormone balance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay consistent:</strong> Regular exercise is more important than intensity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track progress:</strong> Monitor energy, mood, cycles, and weight</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Exercise Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much cardio:</strong> Excessive cardio can increase cortisol</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Overtraining:</strong> Not allowing adequate recovery time</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring nutrition:</strong> Exercise alone won't manage PCOS</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping warm-up/cool-down:</strong> Increases injury risk</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Comparing to others:</strong> Your PCOS journey is unique</span>
                  </li>
                </ul>
              </div>
            </div>
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
              ✨ Join 10,000+ women managing PCOS naturally through diet and exercise
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
