import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Heart, Clock, Target, TrendingUp, Activity, Zap } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hyperthyroidism Exercise Plan 2025 | Best Workouts for Overactive Thyroid Weight Gain",
  description: "Complete hyperthyroidism workout plan with gentle strength training, low-impact cardio, and muscle-building exercises for overactive thyroid. Expert-designed for USA, UK, Canada, Australia.",
  keywords: "hyperthyroidism exercise, overactive thyroid workout, Graves disease exercise, hyperthyroidism weight gain workout, best exercise for hyperthyroidism",
}

export default function HyperthyroidismWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Hyperthyroidism Plan", href: "/workouts/hyperthyroidism" },
  ]

  const tocItems = [
    { id: "why-exercise", label: "Why Exercise?" },
    { id: "workout-plan", label: "4-Week Plan" },
    { id: "guidelines", label: "Guidelines" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Why can't I do high-intensity exercise with hyperthyroidism?",
      answer: "Your body is ALREADY in overdrive mode - metabolism racing, heart rate elevated, burning excessive calories. High-intensity exercise (HIIT, running, CrossFit) adds MORE stress, spikes heart rate dangerously (can trigger arrhythmias), burns more calories (worsens weight loss), and depletes limited energy. Gentle strength training rebuilds muscle WITHOUT excessive metabolic stress. Wait until thyroid levels normalize before intense exercise."
    },
    {
      question: "How is hyperthyroidism exercise different from hypothyroidism?",
      answer: "OPPOSITE approaches! Hypothyroidism (underactive) = slow metabolism, weight GAIN, low energy → Can do MORE exercise inc HIIT. Hyperthyroidism (overactive) = fast metabolism, weight LOSS, high energy but unstable → Need LESS exercise, gentle only. Hyper focuses on muscle-building with minimal cardio; Hypo focuses on calorie-burning with more cardio. Never follow a hypothyroidism workout plan if you have hyperthyroidism!"
    },
    {
      question: "Will exercise help me gain weight with hyperthyroidism?",
      answer: "Indirectly, YES - but ONLY strength training, not cardio. Strength training builds MUSCLE mass (muscle weighs more than fat). Combined with high-calorie diet, you gain healthy weight. Cardio BURNS calories, making weight gain harder. Workout 3-4x weekly max, focus on compound movements (squats, rows), eat immediately after workout. Results in 8-12 weeks with consistent training + nutrition."
    },
    {
      question: "Why do I need so many rest days with hyperthyroidism?",
      answer: "Muscle grows during REST, not during workouts. Hyperthyroidism already breaks down muscle tissue excessively - your body needs maximum recovery time to reverse this. 3-4 rest days weekly allows: muscle repair, energy restoration, hormone stabilization, nervous system recovery. Overtraining worsens hyperthyroid symptoms (palpitations, anxiety, fatigue, muscle loss). More exercise ≠ better results with hyper."
    },
    {
      question: "When can I return to normal/intense exercise after hyperthyroidism treatment?",
      answer: "Wait until thyroid levels (TSH, T3, T4) are NORMAL for 2-3 months consistently, confirmed by blood tests. Then gradually increase intensity over 4-8 weeks: start moderate cardio (jogging), add interval training, eventually HIIT. Always monitor: If heart palpitations, excessive fatigue, or weight loss returns, scale back immediately. Get endocrinologist clearance before resuming intense training."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-orange-600 font-semibold">
              💪 Gentle, Restorative Exercise
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hyperthyroidism Exercise Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete workout program designed specifically for overactive thyroid (hyperthyroidism) with gentle strength
              training, low-impact cardio, and muscle-building exercises that support weight gain and manage symptoms without
              overexertion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#workout-plan">View Workout Plan</Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/plans/hyperthyroidism">Hyperthyroidism Diet Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Exercise Matters */}
      <section id="why-exercise" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exercise is Important for Hyperthyroidism (But Different Approach Needed)</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                Exercise is beneficial for hyperthyroidism BUT requires a completely different approach than for hypothyroidism or
                healthy individuals. With an overactive thyroid, your body is already in "overdrive mode" burning excessive calories
                and breaking down muscle tissue. The goal is gentle, restorative exercise that builds muscle and strength WITHOUT
                adding more metabolic stress or depleting limited energy reserves further.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-orange-800 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    Benefits of Proper Exercise for Hyperthyroidism
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• <strong>Rebuilds muscle mass:</strong> Strength training helps regain muscle lost to hyperthyroidism</li>
                    <li>• <strong>Improves bone density:</strong> Weight-bearing exercise protects bones from calcium loss</li>
                    <li>• <strong>Reduces anxiety:</strong> Gentle exercise lowers stress hormones and calms nervous system</li>
                    <li>• <strong>Better sleep quality:</strong> Moderate activity improves sleep disrupted by hyperthyroidism</li>
                    <li>• <strong>Heart health:</strong> Controlled exercise strengthens cardiovascular system safely</li>
                    <li>• <strong>Mood improvement:</strong> Exercise releases endorphins, reduces depression</li>
                    <li>• <strong>Functional strength:</strong> Daily activities become easier as strength returns</li>
                    <li>• <strong>Weight gain support:</strong> Muscle gain contributes to healthy weight restoration</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-amber-800 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    Hyperthyroidism Exercise Principles
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• <strong>Low to moderate intensity ONLY:</strong> Avoid high-intensity exercise (worsens symptoms)</li>
                    <li>• <strong>Shorter sessions:</strong> 20-40 minutes maximum to avoid excessive calorie burn</li>
                    <li>• <strong>Focus on strength training:</strong> Build muscle with resistance exercises 2-3x weekly</li>
                    <li>• <strong>Minimize cardio:</strong> Limit to gentle walking, swimming - avoid running, HIIT</li>
                    <li>• <strong>Adequate rest between sets:</strong> 2-3 minutes rest to avoid heart rate spikes</li>
                    <li>• <strong>Listen to your body:</strong> Stop immediately if experiencing palpitations, dizziness, extreme fatigue</li>
                    <li>• <strong>Eat before exercise:</strong> Never exercise fasted - consume snack 30-60 min before</li>
                    <li>• <strong>Rest days are critical:</strong> 3-4 rest days weekly for recovery and muscle building</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete 4-Week Hyperthyroidism Workout Plan</h2>
            <p className="text-center text-gray-600 mb-12">
              Gentle strength training and low-impact exercise program. Only 3-4 workouts per week with emphasis on rest and
              recovery. Start with lightest weights, focus on perfect form, gradually increase over 4-8 weeks.
            </p>

            <div className="space-y-6">
              {/* Weekly Schedule */}
              <Card className="border-orange-200">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-800">Weekly Workout Schedule (3-4 Days Maximum)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white rounded-lg border border-orange-100">
                      <div className="font-semibold text-orange-700 w-32">Monday:</div>
                      <div className="text-gray-700">Upper Body Strength Training (30 min)</div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-700 w-32">Tuesday:</div>
                      <div className="text-gray-700">REST DAY - Active Recovery (gentle stretching only)</div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-orange-100">
                      <div className="font-semibold text-orange-700 w-32">Wednesday:</div>
                      <div className="text-gray-700">Lower Body Strength Training (30 min)</div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-700 w-32">Thursday:</div>
                      <div className="text-gray-700">REST DAY - Complete rest or gentle yoga</div>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg border border-orange-100">
                      <div className="font-semibold text-orange-700 w-32">Friday:</div>
                      <div className="text-gray-700">Full Body Light Workout (25 min)</div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-700 w-32">Saturday:</div>
                      <div className="text-gray-700">REST DAY or Gentle Walk (15-20 min leisurely)</div>
                    </div>
                    <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-700 w-32">Sunday:</div>
                      <div className="text-gray-700">REST DAY - Focus on meal prep and recovery</div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold mb-2 text-yellow-800 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Important: More Rest Than Exercise!
                    </h4>
                    <p className="text-sm text-gray-700">
                      Notice this schedule has MORE rest days than workout days. This is intentional and critical for hyperthyroidism.
                      Your body needs maximum recovery time to rebuild muscle and conserve energy. Do not add extra workouts - more
                      is NOT better with an overactive thyroid.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Monday - Upper Body */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800 flex items-center">
                    <Activity className="w-6 h-6 mr-2 text-orange-600" />
                    Monday: Upper Body Strength Training (30 minutes)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Focus on building upper body strength with lighter weights and controlled movements. Take long rests between
                    sets (2-3 minutes). Stop immediately if experiencing heart palpitations or excessive fatigue.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Warm-up (5 minutes):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Very gentle arm circles and shoulder rolls (2 min)</li>
                        <li>• Gentle torso twists and side bends (3 min)</li>
                        <li>• NO jumping or high-intensity warm-up</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-3">Main Workout (20 minutes) - 2-3 sets each:</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-gray-800">1. Dumbbell Chest Press (Floor or Bench)</p>
                          <p className="text-sm text-gray-600">2-3 sets × 8-10 reps | Rest: 2-3 minutes</p>
                          <p className="text-xs text-gray-500">Use LIGHT weights (5-10 lbs to start). Lie on back, press dumbbells up slowly, lower with control.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">2. Seated Dumbbell Rows</p>
                          <p className="text-sm text-gray-600">2-3 sets × 8-10 reps each arm | Rest: 2 minutes</p>
                          <p className="text-xs text-gray-500">Sit on bench, lean forward slightly, pull dumbbell to ribcage squeezing shoulder blade.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">3. Dumbbell Shoulder Press (Seated)</p>
                          <p className="text-sm text-gray-600">2 sets × 8-10 reps | Rest: 2-3 minutes</p>
                          <p className="text-xs text-gray-500">Sit upright, press dumbbells overhead slowly. Use lighter weight than you think - form is critical.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">4. Bicep Curls</p>
                          <p className="text-sm text-gray-600">2 sets × 10-12 reps | Rest: 90 seconds</p>
                          <p className="text-xs text-gray-500">Stand or sit, curl dumbbells up with control, squeeze biceps at top, lower slowly.</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">5. Tricep Overhead Extension</p>
                          <p className="text-sm text-gray-600">2 sets × 10-12 reps | Rest: 90 seconds</p>
                          <p className="text-xs text-gray-500">Hold one dumbbell with both hands overhead, lower behind head, extend arms upward.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Cool-down (5 minutes):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Slow walking to gradually lower heart rate (2 min)</li>
                        <li>• Gentle upper body stretches, hold 30 seconds each (3 min)</li>
                        <li>• Consume post-workout snack with protein + carbs within 30 minutes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Wednesday - Lower Body */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Wednesday: Lower Body Strength Training (30 minutes)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Gentle lower body exercises to rebuild leg and glute strength. Use body weight or very light weights initially.
                  </p>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-3">Exercises (2-3 sets each):</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-gray-800">1. Bodyweight Squats (or Chair-Assisted Squats)</p>
                        <p className="text-gray-600">2-3 sets × 10-12 reps | Rest: 2 minutes</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">2. Walking Lunges (Bodyweight or Light Dumbbells)</p>
                        <p className="text-gray-600">2 sets × 8 reps each leg | Rest: 2 minutes</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">3. Glute Bridges</p>
                        <p className="text-gray-600">2-3 sets × 12-15 reps | Rest: 90 seconds</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">4. Standing Calf Raises</p>
                        <p className="text-gray-600">2 sets × 15-20 reps | Rest: 60 seconds</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">5. Wall Sit</p>
                        <p className="text-gray-600">2 sets × 20-30 seconds | Rest: 90 seconds</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Friday - Full Body Light */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Friday: Full Body Light Workout (25 minutes)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Very light full-body circuit. Focus on movement quality and mind-muscle connection rather than weight or intensity.
                  </p>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-3">Circuit (2 rounds, minimal rest):</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Push-ups (modified on knees if needed) - 8-10 reps</li>
                      <li>• Bodyweight squats - 10-12 reps</li>
                      <li>• Dumbbell rows - 8-10 reps each arm</li>
                      <li>• Glute bridges - 12-15 reps</li>
                      <li>• Plank hold - 20-30 seconds</li>
                      <li>• Standing march in place - 30 seconds</li>
                      <li>• Rest 2-3 minutes between rounds</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Optional Gentle Activities */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Optional Gentle Activities (Non-Workout Days)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    On rest days, you may do VERY gentle activities if you feel good. Listen to your body - if tired, skip these completely.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Gentle walking:</strong> 15-20 minutes leisurely pace (no power walking or hills)</li>
                    <li>• <strong>Restorative yoga:</strong> Yin yoga or gentle hatha (avoid hot yoga, power yoga)</li>
                    <li>• <strong>Swimming:</strong> Leisurely laps or water walking (not sprint swimming)</li>
                    <li>• <strong>Tai Chi or Qigong:</strong> Slow, meditative movement practices</li>
                    <li>• <strong>Gentle stretching:</strong> 10-15 minutes of static stretching</li>
                    <li>• <strong>Breathing exercises:</strong> 5-10 minutes deep breathing or meditation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Guidelines */}
      <section id="guidelines" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Critical Exercise Guidelines for Hyperthyroidism</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-green-700 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  DO These Things
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Monitor heart rate:</strong> Stop if exceeds 120-130 bpm or experiencing palpitations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat 30-60 min before:</strong> Never exercise fasted - have snack with carbs + protein</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated:</strong> Drink water before, during, after (hyperthyroidism increases sweating)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercise in cool environment:</strong> Avoid hot, humid conditions (worsens heat intolerance)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Take full rest days:</strong> Body needs 3-4 complete rest days weekly for recovery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Get medical clearance:</strong> Consult endocrinologist before starting exercise program</span>
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
                    <span><strong>NO high-intensity exercise:</strong> Avoid HIIT, CrossFit, intense cardio - dangerously raises heart rate</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>NO running or sprinting:</strong> Too intense for overactive thyroid - stick to walking</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't exercise when fatigued:</strong> If exhausted, skip workout - rest is more important</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't ignore warning signs:</strong> Stop immediately if dizzy, chest pain, severe palpitations, breathless</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't exercise in heat:</strong> Avoid hot yoga, outdoor exercise in summer heat</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't push through pain:</strong> Hyperthyroidism makes you vulnerable to injury</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Warning Signs */}
            <div className="mt-8 bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="font-bold text-lg mb-3 text-red-800 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2" />
                STOP Exercise Immediately If You Experience:
              </h3>
              <ul className="text-sm text-gray-700 space-y-2 grid md:grid-cols-2 gap-x-4">
                <li>• Chest pain or tightness</li>
                <li>• Severe heart palpitations or irregular heartbeat</li>
                <li>• Extreme shortness of breath</li>
                <li>• Dizziness, lightheadedness, or feeling faint</li>
                <li>• Nausea or vomiting</li>
                <li>• Excessive trembling or shaking</li>
                <li>• Severe anxiety or panic feeling</li>
                <li>• Vision changes or seeing spots</li>
              </ul>
              <p className="text-sm text-red-800 font-semibold mt-4">
                If experiencing any of these symptoms during exercise, stop immediately, sit or lie down, and seek medical attention
                if symptoms don't resolve quickly. Contact your endocrinologist before resuming exercise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Combine Exercise with Hyperthyroidism Diet for Best Results</h2>
            <p className="text-xl mb-8">
              Exercise alone isn't enough - you need proper high-calorie nutrition to support weight gain and muscle building.
            </p>
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold" asChild>
              <Link href="/plans/hyperthyroidism">View Hyperthyroidism Diet Plan</Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
            <RelatedContent />
          </div>
        </div>
      </section>
    </div>
  )
}
