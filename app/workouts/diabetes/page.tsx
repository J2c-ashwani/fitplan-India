import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, TrendingUp, Apple, Droplet } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diabetes Workout Plan 2025 | Best Exercises for Blood Sugar Control",
  description: "Complete diabetes workout guide with proven home and gym exercises to lower blood sugar, improve insulin sensitivity, and achieve healthy weight loss safely.",
  keywords: "diabetes workout, diabetic exercise plan, diabetes weight loss workout, best exercises for diabetes, blood sugar control exercises, type 2 diabetes workout",
  openGraph: {
    title: "Diabetes Workout Plan 2025 | Safe & Effective Exercise Guide",
    description: "Evidence-based diabetes workout routines for home and gym to control blood sugar and support weight loss.",
    url: "https://fitplanindia.com/workouts/diabetes",
  },
}

export default function DiabetesWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Diabetes Plan", href: "/workouts/diabetes" },
  ]

  const tocItems = [
    { id: "stats", label: "Key Benefits" },
    { id: "why-exercise", label: "Why Exercise?" },
    { id: "home-workouts", label: "Home Routine" },
    { id: "gym-workouts", label: "Gym Routine" },
    { id: "guidelines", label: "Safety Guide" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "When is the best time to exercise for blood sugar control?",
      answer: "Generally, 1-3 hours after eating is optimal as blood sugar levels are higher, reducing hypoglycemia risk. Post-meal walking (even 10-15 mins) is highly effective at reducing glucose spikes. Always check blood sugar before starting if you take insulin."
    },
    {
      question: "Which is better for diabetes: Cardio or Weights?",
      answer: "You need both! IMPACT: Cardio (walking, cycling) lowers blood sugar immediately. Strength training builds muscle which improves insulin sensitivity long-term (24-48 hours). The 'Gold Standard' is combining them: warm up with cardio, do weights, finish with cool-down."
    },
    {
      question: "What should I do if my blood sugar drops during exercise?",
      answer: "Stop immediately. Follow the '15-15 Rule': Consome 15g fast-acting carbs (4oz juice, 3-4 glucose tabs, or 1 tbsp honey), wait 15 minutes, and check levels again. Do not return to exercise until blood sugar is stable above 100 mg/dL."
    },
    {
      question: "How often should I exercise to manage diabetes?",
      answer: "Consistency is more important than intensity. Aim for 30 minutes, 5 days a week. Avoid going more than 2 consecutive days without physical activity, as the insulin-sensitizing effect of exercise creates a 'window' that lasts about 24-48 hours."
    },
    {
      question: "Is it safe to exercise with foot neuropathy?",
      answer: "Yes, but use caution. Avoid high-impact activities like running or jumping which can cause unnoticed trauma. Choose low-impact options like cycling, swimming, or elliptical. Wear specialized, well-fitted athletic shoes and inspect your feet daily for any blisters or red spots."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-cyan-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-blue-700 font-semibold">
              🩺 Complete Diabetes Workout Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Diabetes Workout Plan: Best Exercises for Blood Sugar Control
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover safe and effective workout routines specifically designed for diabetics to lower blood sugar,
              improve insulin sensitivity, support weight loss, and reduce medication dependency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#home-workouts">
                  Home Workouts
                </Link>
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-white font-semibold" asChild>
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
                <div className="text-3xl font-bold text-blue-600 mb-2">30-50%</div>
                <div className="text-gray-600">Better Insulin Sensitivity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">15-30%</div>
                <div className="text-gray-600">Lower Blood Sugar</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">5x/Week</div>
                <div className="text-gray-600">Recommended Frequency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">30-60min</div>
                <div className="text-gray-600">Per Session</div>
              </div>
            </div>

            <div id="why-exercise" className="bg-white rounded-lg shadow-sm p-8 mb-8 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exercise is Essential for Diabetes</h2>
              <p className="text-lg text-gray-700 mb-6">
                Exercise is one of the most powerful tools for managing diabetes. Physical activity helps your muscles
                use glucose without insulin, improves insulin sensitivity, lowers blood sugar levels, reduces cardiovascular
                risk, and supports healthy weight management. Research shows that combining aerobic exercise with
                resistance training produces the best results for blood sugar control and overall diabetes management.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Exercise Benefits for Diabetes</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Lowers blood sugar immediately and long-term</li>
                    <li>• Improves insulin sensitivity by 30-50%</li>
                    <li>• Reduces HbA1c by 0.5-1% over 3 months</li>
                    <li>• Decreases cardiovascular disease risk</li>
                    <li>• Supports healthy weight loss and maintenance</li>
                    <li>• Improves mood and reduces stress</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-green-800">Best Exercise Types for Diabetes</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Aerobic Exercise:</strong> 150 min/week moderate intensity</li>
                    <li>• <strong>Resistance Training:</strong> 2-3x per week for muscle</li>
                    <li>• <strong>Walking:</strong> Most accessible, very effective</li>
                    <li>• <strong>Swimming:</strong> Low-impact, full-body cardio</li>
                    <li>• <strong>Cycling:</strong> Joint-friendly cardio option</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Engagement Hook: Calculator */}
            <div className="mb-12">
              <CalculatorWidget />
            </div>

          </div>
        </div>
      </section>

      {/* Home Workouts Section */}
      <section id="home-workouts" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Home className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Diabetes Home Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Safe, effective bodyweight exercises you can do at home to lower blood sugar and improve overall health.
              </p>
            </div>

            {/* Safety Alert */}
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">⚠️ Important Safety Guidelines:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Check blood sugar before and after exercise (avoid if below 70 mg/dL)</li>
                    <li>• Have fast-acting carbs nearby in case of hypoglycemia</li>
                    <li>• Stay hydrated throughout your workout</li>
                    <li>• Wear proper footwear and check feet after exercise</li>
                    <li>• Consult your doctor before starting a new exercise program</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Workout 1: Walking Program */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Walking Program (Monday/Wednesday/Friday)</CardTitle>
                  <Badge className="bg-blue-600 text-white">30-45 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Week 1-2: Building Foundation</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Duration:</strong> 20-30 minutes | <strong>Pace:</strong> Comfortable, conversational
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Start slow and gradually increase duration. Focus on consistency over intensity. Walk at a pace
                      where you can still hold a conversation.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Week 3-4: Increasing Duration</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Duration:</strong> 30-40 minutes | <strong>Pace:</strong> Moderate, slightly breathless
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Increase walking time by 5 minutes each week. Add gentle hills or stairs if available.
                      You should feel slightly breathless but still able to speak.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Week 5+: Interval Walking</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Format:</strong> 3 min normal pace, 2 min brisk pace (repeat 6-8 times)
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Alternate between normal and brisk walking. This interval approach is very effective for
                      blood sugar control and calorie burning.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 2: Strength Training */}
            <Card className="border-green-200 mb-8">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">Bodyweight Strength (Tuesday/Thursday/Saturday)</CardTitle>
                  <Badge className="bg-green-600 text-white">25-35 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Light marching, arm circles, gentle stretching</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Main Circuit (3 Rounds, 45 sec rest between rounds)</h5>

                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Chair Squats</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Stand in front of chair, lower down until you lightly touch the seat, stand back up.
                          Excellent for leg strength and blood sugar control.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Wall Push-Ups</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Place hands on wall at chest height, lean in and push back. Safer alternative to floor push-ups.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Seated Marching</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 60 seconds | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Sit tall in chair, march legs up and down, engaging core. Low-impact cardio that's very safe.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Standing Calf Raises</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Hold chair for balance, rise up on toes, lower down. Improves circulation in legs.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Seated Row (with resistance band)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 45 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Loop band around sturdy object, pull elbows back squeezing shoulder blades. Builds upper back strength.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool Down (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Full body stretching, deep breathing, check blood sugar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 3: Low-Impact Cardio */}
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">Low-Impact Cardio Options (Any Day)</CardTitle>
                  <Badge className="bg-purple-600 text-white">20-30 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Chair Exercises</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Seated arm raises and circles</li>
                      <li>• Seated leg extensions</li>
                      <li>• Seated torso twists</li>
                      <li>• Seated boxing movements</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Standing Options</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Marching in place</li>
                      <li>• Side steps with arm movements</li>
                      <li>• Gentle dance movements</li>
                      <li>• Tai chi or yoga flows</li>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Diabetes Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Progressive resistance and cardio training for optimal blood sugar control and weight management.
              </p>
            </div>

            {/* Gym Workout 1: Full Body Strength */}
            <Card className="border-cyan-200 mb-8">
              <CardHeader className="bg-cyan-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-cyan-800">Full Body Strength (Monday/Thursday)</CardTitle>
                  <Badge className="bg-cyan-600 text-white">40-50 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Leg Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 90 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Safer than squats, excellent for leg strength and glucose uptake</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Chest Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Builds upper body strength with stable, controlled movement</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Seated Row Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Strengthens back and improves posture</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Leg Curl Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Targets hamstrings, important for diabetics with neuropathy concerns</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Shoulder Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 60 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Builds shoulder strength with stable support</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">6. Core Exercise (Plank or Modified)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2-3 | <strong>Duration:</strong> 20-30 seconds | <strong>Rest:</strong> 45 seconds
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Strengthens core for better balance and stability</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 2: Cardio Sessions */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Cardio Training (Tuesday/Friday/Sunday)</CardTitle>
                  <Badge className="bg-blue-600 text-white">30-45 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Option 1: Treadmill Walking</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 30-45 minutes | <strong>Intensity:</strong> Moderate (able to talk)
                    </p>
                    <p className="text-sm text-gray-600">
                      Start at comfortable pace (2.5-3.5 mph). Gradually increase speed or add slight incline (1-3%).
                      Most effective for blood sugar control.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Option 2: Stationary Bike</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 30-40 minutes | <strong>Intensity:</strong> Moderate resistance
                    </p>
                    <p className="text-sm text-gray-600">
                      Excellent low-impact option. Set comfortable resistance where you can maintain steady pace.
                      Great for those with joint issues or neuropathy.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Option 3: Elliptical Machine</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 25-35 minutes | <strong>Intensity:</strong> Moderate
                    </p>
                    <p className="text-sm text-gray-600">
                      Low-impact full-body cardio. Use handles for upper body engagement. Good alternative to walking
                      for those with foot problems.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Option 4: Rowing Machine</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 20-30 minutes | <strong>Intensity:</strong> Moderate pace
                    </p>
                    <p className="text-sm text-gray-600">
                      Full-body low-impact cardio. Start slowly to learn proper form. Excellent for building endurance
                      and muscle simultaneously.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 3: Swimming */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">Swimming/Water Exercise (Wednesday/Saturday) - Optional</CardTitle>
                  <Badge className="bg-green-600 text-white">30-45 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Swimming and water exercises are ideal for diabetics, especially those with joint problems, neuropathy,
                  or excess weight. The water provides resistance while being gentle on joints.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Swimming Options:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Freestyle: 5-10 min intervals</li>
                      <li>• Backstroke: Easier on neck/shoulders</li>
                      <li>• Breaststroke: Gentle, sustainable pace</li>
                      <li>• Water walking: In shallow end</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Water Exercises:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Water aerobics classes</li>
                      <li>• Pool leg exercises</li>
                      <li>• Arm exercises with water weights</li>
                      <li>• Treading water intervals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exercise Guidelines & Safety */}
      <section id="guidelines" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Diabetes Exercise Safety Guidelines</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Exercise Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Monitor blood sugar:</strong> Check before, during (if &gt;60 min), and after exercise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Best timing:</strong> 1-3 hours after meals for better blood sugar response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated:</strong> Drink water before, during, and after exercise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Wear proper shoes:</strong> Well-fitted, supportive athletic shoes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Start slowly:</strong> Gradually increase intensity and duration</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes to Avoid:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercising with low blood sugar:</strong> Always check first (should be &gt;100 mg/dL)</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Going barefoot:</strong> Protect feet from injury, especially with neuropathy</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring warning signs:</strong> Stop if dizzy, confused, or chest pain</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Overtraining:</strong> More isn't always better, allow recovery days</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not carrying fast carbs:</strong> Always have glucose tablets or juice</span>
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
      <section className="py-16 bg-gradient-to-r from-blue-700 to-cyan-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Diabetes Management Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise works best when combined with proper nutrition. Get your personalized diabetes diet plan
              to maximize blood sugar control and achieve your health goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Diabetes Diet Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn what to eat for blood sugar control, meal planning strategies, and foods to help manage diabetes.
                </p>
                <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/diabetes">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Droplet className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a complete diabetes management plan tailored to your blood sugar goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands managing diabetes naturally through diet and exercise
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
