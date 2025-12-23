import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Users, Apple } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Senior Citizen Exercise Plan 2025 | Safe Workouts for Elderly & Aging",
  description: "Complete senior exercise guide with safe, gentle workouts for balance, strength, flexibility, and fall prevention. Age-appropriate exercises for healthy aging after 60.",
  keywords: "senior exercise, elderly workout, exercises for seniors, balance exercises for elderly, strength training for seniors, chair exercises for elderly, fall prevention exercises",
  openGraph: {
    title: "Senior Citizen Exercise Plan 2025 | Safe Workouts for Healthy Aging",
    description: "Evidence-based senior workout routines focusing on balance, strength, and fall prevention.",
    url: "https://fitplanindia.com/workouts/senior-citizens",
  },
}

export default function SeniorCitizenWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Senior Exercise Plan", href: "/workouts/senior-citizens" },
  ]

  const tocItems = [
    { id: "stats", label: "Why Exercise Matters" },
    { id: "safety", label: "Safety Guidelines" },
    { id: "home-workouts", label: "Home Exercises" },
    { id: "cardio", label: "Gentle Cardio" },
    { id: "gym-workouts", label: "Gym Workouts" },
    { id: "safety-tips", label: "Best Practices" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Is it safe for seniors over 65 to exercise? Won't it cause injury?",
      answer: "Exercise is NOT only safe - it's ESSENTIAL for healthy aging! Studies show seniors who exercise regularly have 30-40% fewer falls, better bone density, less chronic pain, improved mood, and maintain independence longer. KEY: Start with doctor clearance, begin gently, use proper form, progress slowly. Most 'dangerous' thing is NOT exercising - leads to muscle loss, weakness, falls, loss of independence. With proper precautions, exercise is one of the safest, most beneficial things seniors can do!"
    },
    {
      question: "What type of exercise is most important for seniors - balance, strength, or cardio?",
      answer: "BALANCE is #1 priority! Falls are leading cause of injury/death in seniors. Balance exercises (single-leg stands, heel-to-toe walk, standing on one foot) should be done DAILY - even 10 minutes makes huge difference. Next: Strength training (2-3x weekly) prevents muscle loss and supports daily activities. Then: Cardio/walking (most days, 20-30 min) for heart health. Ideal senior program includes ALL THREE. If forced to choose one: balance exercises to prevent falls."
    },
    {
      question: "How do I start exercising if I haven't worked out in decades?",
      answer: "Start SMALL and build gradually: Week 1-2: Just 5-10 minute gentle walks daily + chair exercises. Week 3-4: Increase to 15 minutes + add balance exercises. Week 5-8: 20-30 minutes + light strength work. Start ridiculously easy - it's better to do too little than too much initially. Consistency >> intensity for seniors. Get doctor clearance first. Consider working with physical therapist or senior fitness specialist initially to learn proper form and build confidence."
    },
    {
      question: "Can I build muscle and get stronger in my 60s, 70s, or 80s?",
      answer: "YES! Research shows seniors in their 70s-90s CAN build significant muscle and strength with resistance training. It's NEVER too late! You may not build muscle as fast as 20-year-olds, but gains absolutely happen. Benefits: Easier daily tasks (stairs, carrying groceries), better balance, stronger bones, improved metabolism. Start with bodyweight/light weights (1-3 lbs), 2-3x weekly, 10-12 reps, focus on form. Progressive overload still applies - gradually increase over weeks/months. Protein intake important (0.6-0.8g per lb bodyweight)."
    },
    {
      question: "What exercises should seniors avoid?",
      answer: "AVOID (without medical clearance): 1) High-impact (running, jumping) - hard on joints, 2) Heavy overhead lifting if have shoulder issues, 3) Exercises causing pain (not soreness - sharp pain), 4) Twisting/jerking movements, 5) Exercises on unstable surfaces without support initially, 6) Holding breath during exercise (causes blood pressure spikes). Safe alternatives exist for everything! Example: Water aerobics instead of running, wall push-ups instead of floor, seated exercises instead of standing if balance poor. Modify, don't eliminate!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-emerald-700 font-semibold">
              👴👵 Complete Senior Exercise Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Senior Citizen Exercise Plan: Safe Workouts for Healthy Aging
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover safe, effective exercises designed specifically for seniors to improve balance, maintain
              strength, enhance flexibility, prevent falls, and support independent living after 60.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#home-workouts">
                  Home Exercises
                </Link>
              </Button>
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-2 border-white font-semibold" asChild>
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
                <div className="text-3xl font-bold text-emerald-600 mb-2">150min</div>
                <div className="text-gray-600">Weekly Exercise Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">2-3x</div>
                <div className="text-gray-600">Strength Training Per Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Daily</div>
                <div className="text-gray-600">Balance Exercises</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">20-30min</div>
                <div className="text-gray-600">Per Session</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exercise is Crucial for Seniors</h2>
              <p className="text-lg text-gray-700 mb-6">
                Regular exercise is one of the most important things seniors can do for health and independence. Physical
                activity prevents muscle loss (sarcopenia), maintains bone density, improves balance and coordination to
                prevent falls, enhances cardiovascular health, manages chronic conditions like diabetes and arthritis,
                boosts mood and cognitive function, and significantly improves quality of life. It's never too late to start -
                even 10-15 minutes daily makes a meaningful difference.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-emerald-800">Benefits of Senior Exercise</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Reduces fall risk by 30-40% with balance training</li>
                    <li>• Maintains muscle mass and bone density</li>
                    <li>• Improves cardiovascular health and endurance</li>
                    <li>• Manages chronic pain (arthritis, back pain)</li>
                    <li>• Enhances mood and reduces depression</li>
                    <li>• Supports independence in daily activities</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Exercise Priorities for Seniors</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Balance:</strong> Most important for fall prevention</li>
                    <li>• <strong>Strength:</strong> Maintains muscle, supports daily tasks</li>
                    <li>• <strong>Flexibility:</strong> Improves range of motion, reduces stiffness</li>
                    <li>• <strong>Cardio:</strong> Heart health, endurance for activities</li>
                    <li>• <strong>Posture:</strong> Prevents stooping, improves confidence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section id="safety" className="py-8 bg-yellow-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-yellow-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-900 text-xl mb-3">⚠️ Essential Safety Guidelines:</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Consult your doctor</strong> before starting any exercise program</li>
                    <li>• <strong>Start slowly</strong> - even 5-10 minutes is beneficial</li>
                    <li>• <strong>Use support</strong> - chairs, walls, or walkers as needed</li>
                    <li>• <strong>Wear proper shoes</strong> - supportive, non-slip footwear</li>
                    <li>• <strong>Stay hydrated</strong> - drink water before, during, after</li>
                    <li>• <strong>Stop if you feel pain</strong>, dizziness, chest discomfort, or shortness of breath</li>
                    <li>• <strong>Exercise with a partner</strong> when possible for safety</li>
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
              <Home className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Senior Home Exercise Plan</h2>
              <p className="text-lg text-gray-600">
                Safe, effective exercises you can do at home with minimal equipment to maintain strength and independence.
              </p>
            </div>

            {/* Balance Exercises - MOST IMPORTANT */}
            <Card className="border-emerald-200 mb-8">
              <CardHeader className="bg-emerald-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-emerald-800">Balance Exercises (DAILY - Most Important!)</CardTitle>
                  <Badge className="bg-emerald-600 text-white">10-15 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-emerald-100 border border-emerald-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>🎯 Fall Prevention Priority:</strong> Balance exercises are THE most important for seniors.
                    Falls are the leading cause of injury in people over 65. These exercises should be done DAILY.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Single-Leg Stand (Holding Chair)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 3 each leg | <strong>Duration:</strong> 10-30 seconds | <strong>Frequency:</strong> Daily
                    </p>
                    <p className="text-sm text-gray-600">
                      Stand behind sturdy chair, hold with both hands. Lift one foot off ground slightly, balance on other leg.
                      Hold 10-30 seconds. Switch legs. Progress to one-hand support, then fingertip touch only.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Heel-to-Toe Walk (Tightrope Walk)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Reps:</strong> 10-20 steps | <strong>Sets:</strong> 2-3 | <strong>Support:</strong> Near wall
                    </p>
                    <p className="text-sm text-gray-600">
                      Walk in straight line, placing heel of one foot directly in front of toes of other foot. Use wall for
                      balance support if needed. Excellent for improving walking stability.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Standing Marching (In Place)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 30-60 seconds | <strong>Sets:</strong> 3 | <strong>Rest:</strong> 30 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Stand tall, lift knees alternately as if marching. Hold chair for balance if needed.
                      Improves leg strength and dynamic balance.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Toe Raises</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Reps:</strong> 10-15 | <strong>Sets:</strong> 2-3 | <strong>Support:</strong> Hold chair
                    </p>
                    <p className="text-sm text-gray-600">
                      Hold chair for balance. Rise up on toes, hold 3-5 seconds, lower slowly. Strengthens calves and improves
                      ankle stability for better balance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strength Exercises */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Strength Exercises (2-3x per week)</CardTitle>
                  <Badge className="bg-blue-600 text-white">15-20 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Strength training prevents muscle loss, maintains bone density, and supports daily activities like
                  carrying groceries, climbing stairs, and getting up from chairs.
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Chair Squats (Sit-to-Stand)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2-3 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Sit in chair, stand up without using hands (if possible), sit back down slowly. Most functional
                      exercise for seniors - mimics daily activities. Use arms for support if needed.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Wall Push-Ups</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Stand arm's length from wall, hands on wall at shoulder height. Lean in, push back.
                      Builds upper body strength without floor exercises. Great for maintaining independence.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Seated Leg Extensions</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 each leg | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Sit in chair, extend one leg straight out, hold 3 seconds, lower. Strengthens quadriceps -
                      essential for walking, climbing stairs, and balance.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Bicep Curls (Light Weights or Cans)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-15 | <strong>Weight:</strong> 1-3 lbs
                    </p>
                    <p className="text-sm text-gray-600">
                      Sit or stand, hold light weights or canned goods. Curl arms up to shoulders, lower slowly.
                      Maintains arm strength for carrying items.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Seated Row (Resistance Band)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Sit with legs extended, loop band around feet. Pull band toward body, squeeze shoulder blades.
                      Improves posture and upper back strength.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flexibility & Stretching */}
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">Flexibility & Stretching (Daily)</CardTitle>
                  <Badge className="bg-purple-600 text-white">10-15 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Stretching maintains range of motion, reduces stiffness, prevents injury, and makes daily tasks easier.
                  Hold each stretch for 20-30 seconds, never bounce.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Seated Stretches:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Neck rolls (gentle circles both directions)</li>
                      <li>• Shoulder rolls (forward and backward)</li>
                      <li>• Seated spinal twist</li>
                      <li>• Ankle circles and pumps</li>
                      <li>• Seated forward fold (gentle)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Standing Stretches (Hold Support):</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Calf stretches (hold wall/chair)</li>
                      <li>• Quad stretch (hold chair for balance)</li>
                      <li>• Hip flexor stretch</li>
                      <li>• Side bends (arms overhead)</li>
                      <li>• Hamstring stretch (foot on low step)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gentle Cardio */}
      <section id="cardio" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gentle Cardio for Seniors</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-teal-200">
                <CardContent className="pt-6">
                  <Activity className="w-12 h-12 text-teal-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Walking</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Best cardio for seniors.</strong> Start with 10-15 minutes, gradually increase to 30 minutes daily.
                  </p>
                  <p className="text-xs text-teal-600 font-semibold">Goal: 150 minutes per week</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="pt-6">
                  <Heart className="w-12 h-12 text-blue-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Swimming/Water Aerobics</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Zero impact on joints.</strong> Water supports body weight, perfect for arthritis or joint pain.
                  </p>
                  <p className="text-xs text-blue-600 font-semibold">Frequency: 2-3x per week</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-green-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Tai Chi or Yoga</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Combines balance, strength, flexibility.</strong> Excellent for fall prevention and mindfulness.
                  </p>
                  <p className="text-xs text-green-600 font-semibold">Classes: 2-3x per week</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Workouts Section */}
      <section id="gym-workouts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Dumbbell className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Senior-Friendly Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Safe gym equipment and machines designed to support seniors in building strength and endurance.
              </p>
            </div>

            <Card className="border-teal-200 mb-8">
              <CardHeader className="bg-teal-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-teal-800">Gym Circuit for Seniors (2-3x per week)</CardTitle>
                  <Badge className="bg-teal-600 text-white">30-40 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Recumbent Bike Warm-Up</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Duration:</strong> 5-10 minutes | <strong>Resistance:</strong> Low | <strong>RPE:</strong> 3-4/10
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Seated with back support, safest cardio machine for seniors</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Leg Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Weight:</strong> Light
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Seated position protects back, builds leg strength safely</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Chest Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Weight:</strong> Light
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Back-supported upper body strengthening</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Seated Row Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Weight:</strong> Light
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Improves posture and upper back strength</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Leg Curl Machine (Seated)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Weight:</strong> Light
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Hamstring strength for walking and balance</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">6. Treadmill Cool-Down Walk</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Duration:</strong> 5-10 minutes | <strong>Speed:</strong> 1.5-2.5 mph | <strong>Incline:</strong> 0%
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Gentle walking to cool down, use handrails for safety</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Recommended Senior Fitness Classes</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">✅ Best Classes for Seniors:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Silver Sneakers (designed for 65+)</li>
                      <li>• Chair yoga or gentle yoga</li>
                      <li>• Water aerobics</li>
                      <li>• Tai Chi classes</li>
                      <li>• Senior strength training</li>
                      <li>• Balance and fall prevention classes</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">❌ Classes to Avoid:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• High-intensity interval training (HIIT)</li>
                      <li>• CrossFit or boot camps</li>
                      <li>• Spin/cycling classes (too intense)</li>
                      <li>• Jump training or plyometrics</li>
                      <li>• Advanced yoga (power, hot yoga)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exercise Guidelines */}
      <section id="safety-tips" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Senior Exercise Safety & Best Practices</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Warm up 5-10 minutes:</strong> Gentle movement before exercise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Progress gradually:</strong> Increase duration/intensity very slowly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize balance:</strong> Most important for fall prevention</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercise with others:</strong> Join classes or exercise with friends</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay consistent:</strong> Regular gentle exercise better than sporadic intense</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Warning Signs to Stop:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Chest pain or pressure:</strong> Stop immediately and seek medical help</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Severe shortness of breath:</strong> More than expected for activity</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Dizziness or lightheadedness:</strong> Sit down and rest</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Joint pain or swelling:</strong> Stop and modify exercise</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Extreme fatigue:</strong> Rest and reduce intensity next time</span>
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
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Healthy Aging Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise works best when combined with proper nutrition. Get your personalized senior diet plan
              to maximize strength, energy, and overall health.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Senior Nutrition Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn age-appropriate nutrition for bone health, muscle maintenance, and disease prevention.
                </p>
                <Button size="lg" className="w-full bg-white text-emerald-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/senior-citizens">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a complete senior wellness plan tailored to your health conditions.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands of seniors maintaining independence through safe, effective exercise
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
