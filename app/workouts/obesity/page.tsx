import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, TrendingUp, Apple, Scale } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Obesity Workout Plan 2025 | Safe Low-Impact Exercises for Weight Loss",
  description: "Complete obesity workout guide with safe, effective home and gym exercises designed for individuals with obesity. Low-impact routines to support weight loss and improve fitness.",
  keywords: "obesity workout, obese exercise plan, weight loss exercises for obesity, low impact workout, safe exercises for obesity, morbidly obese workout",
  openGraph: {
    title: "Obesity Workout Plan 2025 | Safe Exercise Guide for Weight Loss",
    description: "Evidence-based obesity workout routines with low-impact exercises for safe, effective weight loss.",
    url: "https://fitplanindia.com/workouts/obesity",
  },
}

export default function ObesityWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Obesity Plan", href: "/workouts/obesity" },
  ]

  const tocItems = [
    { id: "stats", label: "Key Stats" },
    { id: "why-exercise", label: "Why Exercise?" },
    { id: "home-workouts", label: "Home Workouts" },
    { id: "gym-workouts", label: "Gym Workouts" },
    { id: "guidelines", label: "Guidelines" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Is it safe to exercise if I'm obese?",
      answer: "Yes! Exercise is crucial for weight loss and health improvement. Start with low-impact activities like walking, swimming,or seated exercises. Begin with just 5-10 minutes daily. Always consult your doctor before starting, especially if you have joint pain or other health conditions."
    },
    {
      question: "What's the best exercise for obesity weight loss?",
      answer: "Walking is #1 - accessible, free, low-impact, and sustainable. Swimming/ water exercises are excellent (zero joint stress). Recumbent bike at gym provides seated cardio support. Start with what you can do comfortably for 10 minutes, then gradually increase."
    },
    {
      question: "How much should I exercise to lose weight with obesity?",
      answer: "Start with 10-15 minutes, 3-5x weekly. Gradually build to 30 minutes most days over 4-8 weeks. Quality and consistency matter more than intensity. Even 10 minutes daily burns ~700 calories weekly (equivalent to losing 0.2 lbs). DIET is 70-80% of weight loss - exercise supports but can't overcome poor nutrition."
    },
    {
      question: "Why do my joints hurt when I exercise?",
      answer: "High-impact activities (running, jumping) stress joints when carrying extra weight. Switch to low/zero-impact: walking, swimming, recumbent bike, seated exercises. Strengthen muscles around joints with light resistance training. Proper supportive shoes are critical. If pain persists, consult doctor."
    },
    {
      question: "How long until I see weight loss results from exercise?",
      answer: "Expect 2-4 weeks for energy/mood improvement,4-8 weeks for noticeable weight loss (1-2 lbs weekly is healthy). Results are slower at first as body adapts. Track non-scale victories: sleeping better, more energy, clothes fitting better, less joint pain, improved mood."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-700 to-red-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-orange-700 font-semibold">
              💪 Complete Obesity Workout Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Obesity Workout Plan: Safe Low-Impact Exercises for Weight Loss
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover safe, effective workout routines specifically designed for individuals with obesity.
              Low-impact exercises that support weight loss, improve fitness, and protect your joints.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#home-workouts">
                  Home Workouts
                </Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
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
                <div className="text-3xl font-bold text-orange-600 mb-2">150-300</div>
                <div className="text-gray-600">Calories Burned Per Session</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">20-30min</div>
                <div className="text-gray-600">Starting Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">3-5x</div>
                <div className="text-gray-600">Per Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">4-8 Weeks</div>
                <div className="text-gray-600">To Build Habit</div>
              </div>
            </div>

            <div id="why-exercise" className="bg-white rounded-lg shadow-sm p-8 mb-8 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exercise is Crucial for Obesity</h2>
              <p className="text-lg text-gray-700 mb-6">
                Exercise is essential for successful weight loss with obesity. Physical activity burns calories, builds
                lean muscle mass, improves metabolism, enhances mood, and reduces health risks associated with obesity.
                The key is starting slowly with low-impact activities that don't stress joints, then gradually increasing
                intensity as fitness improves. Even 10-15 minutes of daily movement makes a significant difference.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Exercise Benefits for Obesity</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Burns 200-400+ calories per session</li>
                    <li>• Preserves muscle mass during weight loss</li>
                    <li>• Improves cardiovascular health and endurance</li>
                    <li>• Reduces joint pain through strengthening</li>
                    <li>• Boosts metabolism and energy levels</li>
                    <li>• Improves mood, confidence, and sleep quality</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Best Exercise Types for Obesity</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Walking:</strong> Most accessible, joint-friendly cardio</li>
                    <li>• <strong>Swimming/Water Exercise:</strong> Zero-impact full-body workout</li>
                    <li>• <strong>Chair Exercises:</strong> Safe strength building</li>
                    <li>• <strong>Recumbent Bike:</strong> Seated cardio support</li>
                    <li>• <strong>Light Resistance:</strong> Builds muscle, protects joints</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines Alert */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-yellow-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-900 text-xl mb-3">⚠️ Essential Safety Guidelines:</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Consult your doctor</strong> before starting any exercise program</li>
                    <li>• <strong>Start very slowly</strong> - begin with 5-10 minutes and gradually increase</li>
                    <li>• <strong>Listen to your body</strong> - stop if you feel pain, dizziness, or chest discomfort</li>
                    <li>• <strong>Wear supportive shoes</strong> - proper footwear prevents injury</li>
                    <li>• <strong>Stay hydrated</strong> - drink water before, during, and after exercise</li>
                    <li>• <strong>Choose low-impact</strong> - protect joints with gentle movements</li>
                    <li>• <strong>Use support</strong> - chairs, walls, or assistive devices as needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Workouts Section */}
      <section id="home-workouts" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Home className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Obesity Home Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Safe, effective exercises you can do at home with minimal equipment to start your weight loss journey.
              </p>
            </div>

            {/* Home Workout 1: Gentle Walking Program */}
            <Card className="border-orange-200 mb-8">
              <CardHeader className="bg-orange-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-orange-800">Walking Program (Daily)</CardTitle>
                  <Badge className="bg-orange-600 text-white">Start: 10-15 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Week 1-2: Foundation Building</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 10-15 minutes | <strong>Pace:</strong> Very comfortable, can talk easily
                    </p>
                    <p className="text-sm text-gray-600">
                      Walk at a comfortable pace around your home, yard, or neighborhood. If 10 minutes feels too long,
                      start with 5 minutes twice daily. Focus on consistency, not speed or distance.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Week 3-4: Gradual Increase</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 15-20 minutes | <strong>Pace:</strong> Comfortable, steady
                    </p>
                    <p className="text-sm text-gray-600">
                      Add 2-3 minutes each week. Break into multiple sessions if needed (e.g., 10 min morning + 10 min evening).
                      Walking is the #1 exercise for safe obesity weight loss.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Week 5-8: Building Endurance</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 25-30 minutes | <strong>Pace:</strong> Moderate, slightly breathless
                    </p>
                    <p className="text-sm text-gray-600">
                      Continue increasing by 2-3 minutes weekly. Goal is 30 minutes of continuous walking.
                      You can add gentle inclines or vary your route for challenge.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 2: Chair Exercises */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Seated Chair Exercises (3-4x per week)</CardTitle>
                  <Badge className="bg-blue-600 text-white">15-20 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Chair exercises are perfect for beginners with obesity - they're safe, supported, and highly effective
                  for building strength without stressing joints.
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Seated Marching</h6>
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Sets:</strong> 2-3 | <strong>Duration:</strong> 30-60 seconds | <strong>Rest:</strong> 30 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Sit tall in chair, lift knees alternating like marching in place. Excellent warm-up and low-impact cardio.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Seated Arm Raises</h6>
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 30 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Raise arms overhead slowly, lower down. Can hold light water bottles for added resistance. Builds shoulder strength.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Seated Leg Extensions</h6>
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 each leg | <strong>Rest:</strong> 30 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Extend one leg straight out, hold 2 seconds, lower. Strengthens quadriceps without impact.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Seated Torso Twists</h6>
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10 each side | <strong>Rest:</strong> 30 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Sit tall, twist torso side to side, engaging core. Improves spine mobility and core strength.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Chair Stand (Assisted)</h6>
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 5-8 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600">
                      Stand up from chair using arms for support, then sit back down slowly. Most important functional exercise.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 3: Gentle Stretching */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">Gentle Stretching (Daily, especially after workouts)</CardTitle>
                  <Badge className="bg-green-600 text-white">10-15 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Stretching improves flexibility, reduces muscle tension, and helps prevent injury. Hold each stretch for 20-30 seconds.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Seated Stretches:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Neck rolls (gentle circles)</li>
                      <li>• Shoulder rolls (forward & back)</li>
                      <li>• Seated spinal twist</li>
                      <li>• Ankle circles</li>
                      <li>• Wrist and arm stretches</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Standing Stretches (with support):</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Calf stretches (hold wall/chair)</li>
                      <li>• Quad stretch (hold chair for balance)</li>
                      <li>• Hip flexor stretch</li>
                      <li>• Side bends (arms overhead)</li>
                      <li>• Gentle forward fold</li>
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
              <Dumbbell className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Obesity Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Low-impact gym equipment exercises that provide support and safety while building strength and burning calories.
              </p>
            </div>

            {/* Gym Workout 1: Cardio Machines */}
            <Card className="border-red-200 mb-8">
              <CardHeader className="bg-red-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-red-800">Low-Impact Cardio (4-5x per week)</CardTitle>
                  <Badge className="bg-red-600 text-white">20-30 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Recumbent Bike (Best Option)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 15-30 minutes | <strong>Resistance:</strong> Low to moderate
                    </p>
                    <p className="text-sm text-gray-600">
                      Seated with back support, easiest on joints. Start with 10-15 min at comfortable resistance.
                      Excellent for building cardiovascular endurance safely. Burns 150-250 calories per session.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Treadmill Walking (Flat Surface)</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 15-25 minutes | <strong>Speed:</strong> 1.5-2.5 mph
                    </p>
                    <p className="text-sm text-gray-600">
                      Use handles for support. Keep treadmill flat (0% incline initially). Start slow - safety is priority.
                      Burns 100-200 calories per session depending on speed and weight.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Seated Elliptical</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 10-20 minutes | <strong>Resistance:</strong> Very low
                    </p>
                    <p className="text-sm text-gray-600">
                      Some gyms have seated ellipticals - perfect for obesity. Zero impact, full body movement.
                      Start with 5-10 minutes and gradually increase.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Nu-Step Machine</h6>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Duration:</strong> 15-25 minutes | <strong>Level:</strong> 3-5
                    </p>
                    <p className="text-sm text-gray-600">
                      Seated recumbent cross-trainer combines upper and lower body. Wide, stable seat perfect for obesity.
                      Excellent full-body low-impact workout.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 2: Machine Strength Training */}
            <Card className="border-purple-200 mb-8">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">Machine Strength Training (2-3x per week)</CardTitle>
                  <Badge className="bg-purple-600 text-white">25-35 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Machines provide stability and support, making them safer than free weights. Focus on learning proper form
                  with light weight before increasing resistance.
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Seated Leg Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Seated position provides support. Start light, focus on controlled movement. Best leg exercise for obesity.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Chest Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Seated with back support. Builds upper body strength safely. Adjust seat height for comfort.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Seated Row Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Strengthens back, improves posture. Pull handles toward torso, squeeze shoulder blades.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Leg Curl Machine (Seated or Lying)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Isolates hamstrings. Choose seated version if lying is uncomfortable. Start very light.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Shoulder Press Machine</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 2 | <strong>Reps:</strong> 8-10 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Seated with back support. Push handles overhead. Builds shoulder and upper body strength.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 3: Pool Exercises */}
            <Card className="border-cyan-200">
              <CardHeader className="bg-cyan-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-cyan-800">Water/Pool Exercises (2-3x per week) - Highly Recommended</CardTitle>
                  <Badge className="bg-cyan-600 text-white">30-45 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-800">
                    <strong>💙 Best Exercise for Obesity:</strong> Water exercises are the #1 recommended activity for individuals
                    with obesity. The water supports body weight, eliminates joint stress, and provides natural resistance for muscle building.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Water Walking/Jogging:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Walk across shallow end: 5-10 min</li>
                      <li>• Gradually increase depth for resistance</li>
                      <li>• Can progress to water jogging</li>
                      <li>• Burns 200-350 calories per session</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Water Aerobics:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Group classes provide structure</li>
                      <li>• Arm and leg exercises in water</li>
                      <li>• Social support and motivation</li>
                      <li>• Modified for all fitness levels</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Swimming (if comfortable):</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Start with 5-10 minute intervals</li>
                      <li>• Any stroke works (freestyle, backstroke)</li>
                      <li>• Rest between laps as needed</li>
                      <li>• Excellent full-body workout</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Water Exercises:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Leg kicks holding pool edge</li>
                      <li>• Arm exercises with water dumbbells</li>
                      <li>• Water treading intervals</li>
                      <li>• Pool noodle exercises</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exercise Guidelines */}
      <section id="guidelines" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Exercise Guidelines for Obesity</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Start extremely slowly:</strong> 5-10 minutes is enough at first</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Choose low-impact:</strong> Walking, swimming, cycling, machines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Focus on consistency:</strong> 3-5 days per week is better than 1 hard day</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Use proper support:</strong> Chairs, walls, machines with seats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Build gradually:</strong> Add 2-3 minutes per week maximum</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Avoid These Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>High-impact activities:</strong> Running, jumping, plyometrics stress joints</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Doing too much too soon:</strong> Leads to injury and burnout</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring pain signals:</strong> Pain is your body warning you</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercising without support:</strong> Use equipment designed for stability</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Comparing to others:</strong> Your journey is unique, progress at your pace</span>
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
      <section className="py-16 bg-gradient-to-r from-orange-700 to-red-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Weight Loss Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Exercise works best when combined with proper nutrition. Get your personalized obesity diet plan
              to maximize weight loss results and improve your health.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Obesity Diet Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn calorie management, meal planning, and nutrition strategies for safe, sustainable weight loss with obesity.
                </p>
                <Button size="lg" className="w-full bg-white text-orange-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/obesity">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Scale className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a complete weight loss plan tailored to your specific needs, limitations, and goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands achieving safe, sustainable weight loss through evidence-based methods
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
