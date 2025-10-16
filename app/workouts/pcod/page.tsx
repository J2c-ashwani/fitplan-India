import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Zap, Apple, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PCOD Workout Plan | Exercise for Polycystic Ovary Syndrome",
  description: "Complete PCOD workout guide with exercises to improve insulin sensitivity, balance hormones, manage weight, and reduce PCOS symptoms naturally through fitness.",
  keywords: "PCOD workout, PCOS exercise, insulin resistance workout, hormonal balance exercises, PCOD weight loss workout, polycystic ovary exercise",
  openGraph: {
    title: "PCOD Workout Plan | Exercise Guide for PCOS",
    description: "Evidence-based PCOD workouts for hormonal balance and symptom management.",
    url: "https://fitplanindia.com/workouts/pcod",
  },
}

export default function PCODWorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-pink-600 font-semibold">
              💪 Complete PCOD Exercise Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              PCOD Workout Plan: Balance Hormones Through Exercise
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover effective workout strategies for PCOD/PCOS to improve insulin sensitivity, reduce inflammation, 
              support weight loss, balance hormones, and naturally manage symptoms through targeted exercise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">150min</div>
                <div className="text-gray-600">Weekly Exercise Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4-5x</div>
                <div className="text-gray-600">Per Week Training</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">30-50%</div>
                <div className="text-gray-600">Insulin Sensitivity Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">Strength</div>
                <div className="text-gray-600">Best for PCOD</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exercise and PCOD: The Powerful Connection</h2>
              <p className="text-lg text-gray-700 mb-6">
                Exercise is one of the most effective natural treatments for PCOD/PCOS. Regular physical activity improves 
                insulin sensitivity by up to 50%, helps balance hormones (reduces androgens), supports healthy weight loss, 
                reduces inflammation, regulates menstrual cycles, and significantly improves symptoms - often without medication. 
                The key is choosing the RIGHT type of exercise. Strength training is superior to cardio alone for PCOD because 
                it builds muscle (which improves insulin sensitivity long-term), doesn't spike cortisol like excessive cardio, 
                and provides lasting metabolic benefits. Combine strength training with moderate cardio for optimal results.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-pink-800">How Exercise Helps PCOD</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Improves insulin sensitivity dramatically (30-50%)</li>
                    <li>• Reduces insulin resistance at cellular level</li>
                    <li>• Lowers testosterone and androgen levels</li>
                    <li>• Promotes healthy weight loss (especially belly fat)</li>
                    <li>• Reduces chronic inflammation</li>
                    <li>• Regulates menstrual cycles naturally</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-purple-800">Best Exercise Types for PCOD</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Strength Training:</strong> #1 for insulin sensitivity</li>
                    <li>• <strong>Moderate Cardio:</strong> Walking, cycling (not excessive)</li>
                    <li>• <strong>Yoga:</strong> Reduces stress, balances hormones</li>
                    <li>• <strong>HIIT (Limited):</strong> Short bursts only, not daily</li>
                    <li>• <strong>Avoid:</strong> Excessive cardio (raises cortisol)</li>
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
                  <h4 className="font-bold text-yellow-900 text-xl mb-3">⚠️ Critical PCOD Exercise Guidelines:</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Don't overdo cardio:</strong> Excessive cardio raises cortisol, worsens insulin resistance</li>
                    <li>• <strong>Prioritize strength training:</strong> Builds muscle = better insulin sensitivity long-term</li>
                    <li>• <strong>Moderate intensity is best:</strong> You don't need to exhaust yourself daily</li>
                    <li>• <strong>Rest is essential:</strong> Overtraining increases cortisol and worsens PCOD symptoms</li>
                    <li>• <strong>Consistency over intensity:</strong> 4-5 moderate sessions better than 1-2 intense ones</li>
                    <li>• <strong>Pair with proper diet:</strong> Exercise alone won't fix PCOD - nutrition is equally important</li>
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
              <Home className="w-16 h-16 text-pink-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">PCOD Home Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Effective home workouts to improve insulin sensitivity and balance hormones without equipment.
              </p>
            </div>

            {/* Home Workout 1: Strength Circuit */}
            <Card className="border-pink-200 mb-8">
              <CardHeader className="bg-pink-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-pink-800">PCOD Strength Circuit (4x per week)</CardTitle>
                  <Badge className="bg-pink-600 text-white">35-45 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-pink-100 border border-pink-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>💪 Strength training is KEY for PCOD:</strong> Builds muscle which acts like a "glucose sink" - 
                    absorbs sugar from blood without needing insulin. This directly improves insulin resistance!
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Light marching in place, arm circles, leg swings, gentle stretching</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Main Circuit (4 Rounds, 60 sec rest between)</h5>
                    
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Bodyweight Squats</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Largest muscle group = biggest impact on insulin sensitivity. Go as deep as comfortable. 
                          Progress to goblet squats with weight.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Push-Ups (Modified on Knees OK)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Upper body strength. Start on knees if needed, progress to regular. Builds chest, shoulders, arms.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Walking Lunges</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 12-16 total (6-8 each leg) | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Unilateral leg work, core stability. Step forward, lower back knee. Alternating legs.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Glute Bridges</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Lie on back, feet flat, lift hips. Glutes are huge muscle group - excellent for metabolism.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Plank Hold</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30-60 seconds | <strong>Rest:</strong> 60 sec (end of round)
                        </p>
                        <p className="text-sm text-gray-600">
                          Core strength. Keep body straight, breathe steadily. Core stability important for all movement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool Down (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Gentle stretching all major muscle groups, deep breathing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 2: Walking */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Daily Walking (5-7x per week)</CardTitle>
                  <Badge className="bg-blue-600 text-white">30-45 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Walking is PERFECT for PCOD - improves insulin sensitivity without raising cortisol like intense cardio does. 
                  Aim for 8,000-10,000 steps daily if possible.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Walking Guidelines:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Duration:</strong> 30-60 minutes daily</li>
                      <li>• <strong>Pace:</strong> Brisk (can talk but slightly breathless)</li>
                      <li>• <strong>Best time:</strong> After meals (improves glucose control)</li>
                      <li>• <strong>Frequency:</strong> Daily or 5-7x per week</li>
                      <li>• <strong>Benefits:</strong> Low cortisol, sustainable, effective</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Post-Meal Walking (Highly Recommended):</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Walk 10-20 min after meals</li>
                      <li>• Dramatically improves blood sugar control</li>
                      <li>• Reduces post-meal insulin spikes</li>
                      <li>• Especially effective for PCOD</li>
                      <li>• Can break up into 3x daily (after each meal)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 3: Yoga */}
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">Restorative Yoga (3x per week)</CardTitle>
                  <Badge className="bg-purple-600 text-white">30-40 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Yoga reduces stress (cortisol), which is critical for PCOD management. High stress worsens insulin resistance 
                  and hormonal imbalances. Gentle yoga also improves flexibility and mindfulness.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">PCOD-Beneficial Poses:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Butterfly pose (hip opening)</li>
                      <li>• Child's pose (restorative)</li>
                      <li>• Cat-cow stretches (spine mobility)</li>
                      <li>• Cobra pose (stimulates ovaries)</li>
                      <li>• Legs-up-wall (circulation, relaxation)</li>
                      <li>• Corpse pose (deep relaxation)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Yoga Benefits for PCOD:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Reduces cortisol (stress hormone)</li>
                      <li>• Improves circulation to ovaries</li>
                      <li>• Balances autonomic nervous system</li>
                      <li>• Reduces anxiety and depression</li>
                      <li>• Improves sleep quality</li>
                      <li>• Supports emotional well-being</li>
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
              <Dumbbell className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">PCOD Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Structured weight training to maximize insulin sensitivity and hormonal balance.
              </p>
            </div>

            {/* Gym Workout 1: Lower Body */}
            <Card className="border-purple-200 mb-8">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">Lower Body Strength (2x per week)</CardTitle>
                  <Badge className="bg-purple-600 text-white">45-55 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Leg Press or Squats</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Largest muscles = biggest insulin sensitivity improvement</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Romanian Deadlifts</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Hamstrings and glutes, posterior chain development</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Leg Curls</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Hamstring isolation, balanced leg development</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Calf Raises</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Complete lower body work</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 2: Upper Body */}
            <Card className="border-teal-200 mb-8">
              <CardHeader className="bg-teal-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-teal-800">Upper Body Strength (2x per week)</CardTitle>
                  <Badge className="bg-teal-600 text-white">40-50 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Chest Press (Machine or Dumbbell)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Upper body push, builds chest and triceps</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Seated Row</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Back strength, posture improvement</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Shoulder Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Shoulder development, overhead strength</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Bicep Curls + Tricep Extensions</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2-3 each | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Arm definition work</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cardio Guidelines */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Moderate Cardio (3-4x per week)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-800">
                    <strong>⚠️ Important:</strong> Moderate cardio only - excessive cardio raises cortisol and can worsen PCOD. 
                    Keep intensity conversational, 30-40 minutes maximum.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Best Cardio Options:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Brisk walking (treadmill or outdoor)</li>
                      <li>• Stationary bike (moderate resistance)</li>
                      <li>• Elliptical (low-moderate intensity)</li>
                      <li>• Swimming (gentle laps)</li>
                      <li>• Duration: 30-40 minutes</li>
                      <li>• Intensity: Can hold conversation</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">⚠️ Avoid for PCOD:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Long-distance running daily</li>
                      <li>• Excessive HIIT (more than 1-2x week)</li>
                      <li>• Marathon training</li>
                      <li>• Back-to-back intense classes</li>
                      <li>• Any exercise that leaves you exhausted</li>
                      <li>• These raise cortisol, worsen PCOD</li>
                    </ul>
                  </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">PCOD Exercise Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Strength training 3-4x weekly:</strong> Most important for insulin sensitivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Walk daily or 5-7x week:</strong> After meals especially effective</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Moderate intensity:</strong> Don't exhaust yourself - sustainable is key</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Rest 1-2 days weekly:</strong> Recovery allows hormones to balance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Combine with PCOD diet:</strong> Exercise + nutrition = best results</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much cardio:</strong> Raises cortisol, can worsen insulin resistance</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Daily HIIT:</strong> Too stressful for PCOD - limit to 1-2x weekly max</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Overtraining:</strong> More isn't better - worsens hormonal imbalance</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping strength training:</strong> Cardio alone won't improve insulin sensitivity as much</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercising without diet changes:</strong> Need both for PCOD management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your PCOD Management
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise improves symptoms, but proper PCOD nutrition is equally critical. Get your complete low GI 
              diet plan to maximize hormonal balance and insulin sensitivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">PCOD Diet Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn complete PCOD nutrition with low GI meal plans, anti-inflammatory foods, and hormonal balance strategies.
                </p>
                <Button size="lg" className="w-full bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/pcod">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Shield className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a complete PCOD workout and nutrition plan tailored to your symptoms.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join thousands managing PCOD naturally through exercise and nutrition
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
