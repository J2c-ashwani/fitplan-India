import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Baby, Heart, Activity, Shield, Clock, Target, Smile } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Prenatal Exercise Program | Safe Pregnancy Workouts for Expecting Mothers",
  description: "Complete prenatal exercise guide with safe pregnancy workouts, trimester-specific exercises, pelvic floor strengthening, and fitness routines for healthy pregnancy and easier delivery.",
  keywords: "prenatal exercise, pregnancy workouts, pregnancy fitness, prenatal yoga, safe exercises pregnancy, pregnancy exercise by trimester, pelvic floor exercises",
  openGraph: {
    title: "Prenatal Exercise Program | Safe Pregnancy Workouts",
    description: "Safe, effective exercises for healthy pregnancy and easier delivery.",
    url: "https://fitplanindia.com/workouts/pregnancy-nutrition",
  },
}

export default function PrenatalWorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-rose-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-pink-600 font-semibold">
              👶 Safe Prenatal Exercise
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Prenatal Exercise: Safe Workouts for Healthy Pregnancy
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete prenatal exercise guide with safe, doctor-approved workouts for each trimester including 
              gentle cardio, strength training, pelvic floor work, and stretches for comfortable pregnancy and easier delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#exercises">
                  View Safe Exercises
                </Link>
              </Button>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/blog/pregnancy-nutrition">
                  Pregnancy Nutrition Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">20-30 min</div>
                <div className="text-gray-600">Daily Exercise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">Low Impact</div>
                <div className="text-gray-600">Gentle & Safe</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">All Trimesters</div>
                <div className="text-gray-600">Modified Progressions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Doctor Approved</div>
                <div className="text-gray-600">Evidence-Based</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Prenatal Exercise</h2>
              <p className="text-lg text-gray-700 mb-6">
                Regular, moderate exercise during pregnancy offers numerous benefits for both mother and baby. Exercise 
                reduces back pain and discomfort, improves mood and energy, helps manage weight gain, strengthens muscles 
                for labor, improves sleep quality, reduces risk of gestational diabetes and pre-eclampsia, aids postpartum 
                recovery, and promotes healthy baby development. The key is choosing safe, low-impact activities and 
                listening to your body.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-pink-800">For Mother:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Reduces back pain and discomfort</li>
                    <li>• Improves mood and reduces stress</li>
                    <li>• Better sleep quality</li>
                    <li>• Easier labor and delivery</li>
                    <li>• Faster postpartum recovery</li>
                    <li>• Prevents excessive weight gain</li>
                  </ul>
                </div>
                
                <div className="bg-rose-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-rose-800">For Baby:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Healthy birth weight</li>
                    <li>• Better brain development</li>
                    <li>• Improved cardiovascular health</li>
                    <li>• Reduced risk of complications</li>
                    <li>• Better stress tolerance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pregnancy Exercise Safety Guidelines</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Safe Exercises During Pregnancy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Walking:</strong> Best low-impact cardio</li>
                    <li>• <strong>Swimming:</strong> Easy on joints, full body</li>
                    <li>• <strong>Prenatal yoga:</strong> Flexibility & relaxation</li>
                    <li>• <strong>Stationary cycling:</strong> Safe cardio option</li>
                    <li>• <strong>Low-impact aerobics:</strong> Prenatal classes</li>
                    <li>• <strong>Light strength training:</strong> Bodyweight or light weights</li>
                    <li>• <strong>Pelvic floor exercises:</strong> Kegels (essential!)</li>
                    <li>• <strong>Stretching:</strong> Gentle, no overstretching</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">❌ Exercises to AVOID</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Contact sports:</strong> Risk of abdominal trauma</li>
                    <li>• <strong>High-impact activities:</strong> Running (if not done before)</li>
                    <li>• <strong>Hot yoga:</strong> Overheating dangerous</li>
                    <li>• <strong>Lying flat on back:</strong> After 1st trimester</li>
                    <li>• <strong>Heavy lifting:</strong> Straining increases pressure</li>
                    <li>• <strong>High-altitude activities:</strong> Above 6,000 feet</li>
                    <li>• <strong>Scuba diving:</strong> Gas embolism risk</li>
                    <li>• <strong>Exercises with fall risk:</strong> Skiing, horseback riding</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-yellow-200">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Shield className="w-6 h-6 text-yellow-600 mr-3" />
                  <CardTitle className="text-yellow-700">⚠️ Stop Exercise & Call Doctor If You Experience:</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Vaginal bleeding or fluid leakage</li>
                    <li>• Contractions or abdominal pain</li>
                    <li>• Chest pain or shortness of breath</li>
                    <li>• Dizziness or feeling faint</li>
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Severe headache</li>
                    <li>• Calf pain or swelling</li>
                    <li>• Decreased fetal movement</li>
                    <li>• Muscle weakness</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trimester-Specific Exercises */}
      <section id="exercises" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Safe Exercises by Trimester</h2>
            
            <div className="space-y-8">
              {/* First Trimester */}
              <Card className="border-pink-200">
                <CardHeader className="bg-pink-50">
                  <CardTitle className="text-pink-800">First Trimester (Weeks 1-12)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    If you exercised regularly before pregnancy, you can usually continue at similar intensity. If new to 
                    exercise, start slowly with low-impact activities. Listen to your body - fatigue is common.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Daily Walking Routine (20-30 minutes):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Warm-up: 5 min easy pace</li>
                        <li>• Main walk: 15-20 min moderate pace</li>
                        <li>• Cool-down: 5 min easy pace + stretches</li>
                        <li>• Stay hydrated, avoid overheating</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Gentle Strength Training (2-3x/week):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Bodyweight squats:</strong> 2 sets x 12 reps</li>
                        <li>• <strong>Wall push-ups:</strong> 2 sets x 10 reps</li>
                        <li>• <strong>Side leg lifts:</strong> 2 sets x 10 each side</li>
                        <li>• <strong>Bird dogs:</strong> 2 sets x 8 each side</li>
                        <li>• <strong>Pelvic tilts:</strong> 2 sets x 10 reps</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Pelvic Floor Exercises (Daily - CRITICAL):</h5>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Kegel exercises:</strong> Contract pelvic floor muscles (like stopping urine flow), hold 5-10 
                        seconds, release. Do 10 reps, 3 times daily. Prevents incontinence and aids delivery.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Second Trimester */}
              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800">Second Trimester (Weeks 13-26)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    Energy usually returns! This is often the best time to exercise. Avoid exercises lying flat on back 
                    (reduces blood flow to baby). Modify as belly grows.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Swimming/Water Aerobics (3-4x/week, 30 min):</h5>
                      <p className="text-sm text-gray-700">
                        Excellent low-impact option. Water supports belly, reduces swelling, easy on joints. Swim laps at 
                        comfortable pace or join prenatal water aerobics class.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Prenatal Yoga (2-3x/week, 30-45 min):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Cat-Cow stretch:</strong> Relieves back pain</li>
                        <li>• <strong>Modified plank:</strong> On knees, hold 20-30 sec</li>
                        <li>• <strong>Warrior II pose:</strong> Strengthens legs</li>
                        <li>• <strong>Pelvic circles:</strong> On hands and knees</li>
                        <li>• <strong>Savasana (side-lying):</strong> Relaxation</li>
                        <li>• Avoid deep twists, hot yoga, inversions</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Modified Strength Training (2x/week):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Supported squats:</strong> 3 sets x 10 (hold wall/chair)</li>
                        <li>• <strong>Side-lying leg lifts:</strong> 3 sets x 12 each side</li>
                        <li>• <strong>Incline push-ups:</strong> 3 sets x 8 (against wall)</li>
                        <li>• <strong>Seated rows:</strong> 3 sets x 10 (resistance band)</li>
                        <li>• <strong>Standing calf raises:</strong> 3 sets x 15</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Third Trimester */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Third Trimester (Weeks 27-40)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    Balance becomes more difficult as belly grows. Focus on gentle movement, pelvic floor work, and 
                    preparing body for labor. Listen to your body and reduce intensity as needed.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Gentle Walking (Daily, 15-20 min):</h5>
                      <p className="text-sm text-gray-700">
                        Short, frequent walks are better than long sessions. Helps with swelling, positioning baby, and 
                        prepares body for labor. Walk at comfortable pace, stop if tired.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Birth Preparation Exercises (Daily):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Squats:</strong> Helps baby descend, opens pelvis (hold support)</li>
                        <li>• <strong>Pelvic tilts:</strong> Relieves back pain, strengthens core</li>
                        <li>• <strong>Hip circles:</strong> On exercise ball or standing</li>
                        <li>• <strong>Butterfly stretch:</strong> Opens hips, relieves tension</li>
                        <li>• <strong>Kegels:</strong> Continue daily for delivery strength</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Stretching & Relaxation (Daily, 10-15 min):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Cat-Cow:</strong> Back pain relief</li>
                        <li>• <strong>Child's pose (modified):</strong> Knees wide apart</li>
                        <li>• <strong>Seated forward fold:</strong> Legs wide, gentle stretch</li>
                        <li>• <strong>Side stretches:</strong> Standing or seated</li>
                        <li>• <strong>Deep breathing:</strong> Practice for labor</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Daily Routine */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Daily Prenatal Exercise Routine (20 minutes)</h2>
            
            <Card className="border-pink-200">
              <CardHeader className="bg-pink-50">
                <CardTitle className="text-pink-800">Morning Routine (Suitable for All Trimesters - Modify as Needed)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (3 minutes):</h5>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Gentle marching in place (1 min)</li>
                      <li>• Shoulder rolls and arm circles (1 min)</li>
                      <li>• Gentle neck stretches (1 min)</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-pink-800 mb-2">Main Exercises (15 minutes):</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm">1. Supported Squats - 10 reps</p>
                        <p className="text-xs text-gray-600">Hold chair/wall for support, squat to comfortable depth</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">2. Wall Push-Ups - 8 reps</p>
                        <p className="text-xs text-gray-600">Hands on wall, lean in and push back</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">3. Side Leg Lifts - 10 each side</p>
                        <p className="text-xs text-gray-600">Lying on side, lift top leg slowly</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">4. Cat-Cow Stretch - 10 reps</p>
                        <p className="text-xs text-gray-600">On hands and knees, alternate arching and rounding back</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">5. Pelvic Tilts - 10 reps</p>
                        <p className="text-xs text-gray-600">Lying on back (1st trimester) or standing</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">6. Kegel Exercises - 10 reps</p>
                        <p className="text-xs text-gray-600">Hold 5-10 seconds each</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool-Down (2 minutes):</h5>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Gentle stretching (hamstrings, shoulders, sides)</li>
                      <li>• Deep breathing exercises</li>
                    </ul>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Prenatal Exercise Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Get doctor clearance:</strong> Always consult before starting program</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Listen to your body:</strong> Stop if uncomfortable or in pain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated:</strong> Drink before, during, after exercise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Avoid overheating:</strong> Exercise in cool environment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Do pelvic floor daily:</strong> Critical for labor and recovery</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercising too intensely:</strong> Now is not time to push limits</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Lying flat on back:</strong> After 1st trimester reduces blood flow</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Holding breath:</strong> Always breathe during exercise</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring warning signs:</strong> Stop if dizzy, bleeding, pain</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping pelvic floor:</strong> Regret this during/after birth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Healthy Pregnancy Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise is essential, but proper prenatal nutrition is equally critical for healthy baby development 
              and maternal well-being. Get your complete pregnancy nutrition guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="/blog/pregnancy-nutrition">
                  View Pregnancy Nutrition Guide
                </Link>
              </Button>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/ai-coach">
                  Get Personal Plan
                </Link>
              </Button>
            </div>
            <p className="text-white text-sm mt-6">
              ✨ Always consult your healthcare provider before starting any exercise program during pregnancy
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
