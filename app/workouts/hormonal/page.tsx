import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Moon, Heart, Activity, Clock, TrendingDown, AlertCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hormone-Balancing Workouts 2025 | PCOS, Thyroid, Menopause Exercise Plan",
  description: "Complete hormone-friendly workout program for PCOS, thyroid, menopause. Gentle, effective exercises that balance hormones without increasing cortisol.",
  keywords: "PCOS workouts, thyroid exercise, menopause exercise, hormone balancing workouts, cortisol lowering exercise, gentle strength training",
  openGraph: {
    title: "Hormone-Balancing Workouts 2025 | Gentle Effective Exercise",
    description: "Expert-designed workout program that balances hormones naturally without overtraining stress.",
    url: "https://fitplanindia.com/workouts/hormonal",
  },
}

export default function HormonalWorkoutsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-violet-600 font-semibold">
              ⚖️ Gentle & Effective
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hormone-Balancing Workouts 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete hormone-friendly workout program designed specifically for women with PCOS, thyroid disorders, menopause, and
              hormonal imbalances. Strategic exercises that improve insulin sensitivity, reduce cortisol, support thyroid function,
              and balance hormones naturally WITHOUT excessive stress or overtraining. Gentle yet effective approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#workout-plan">View Workout Program</Link>
              </Button>
              <Button size="lg" className="bg-violet-500 hover:bg-violet-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/plans/hormonal-imbalance">Hormone Diet Plan</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hormone-Friendly Exercise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Hormone-Friendly Exercise is Different</h2>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">⚠️ Why Excessive Exercise WORSENS Hormonal Imbalances</h3>
                  <p className="text-gray-700 mb-3">
                    Traditional intense exercise advice (daily HIIT, excessive cardio, overtraining) is TERRIBLE for hormonal imbalances.
                    Excessive exercise increases cortisol (stress hormone), suppresses thyroid function, worsens insulin resistance, disrupts
                    menstrual cycles, and increases inflammation - exactly what you DON'T want when hormones are already imbalanced.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>High cortisol from overtraining:</strong> Promotes belly fat storage, disrupts all hormones</li>
                    <li>• <strong>Thyroid suppression:</strong> Excessive exercise lowers T3 (active thyroid hormone)</li>
                    <li>• <strong>Menstrual disruption:</strong> Too much exercise = irregular/missing periods</li>
                    <li>• <strong>Worsened insulin resistance:</strong> Chronic high-intensity exercise without recovery</li>
                    <li>• <strong>Increased inflammation:</strong> Overtraining creates systemic inflammation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Benefits of Hormone-Friendly Exercise
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Improved insulin sensitivity:</strong> Strength training dramatically reduces insulin resistance (PCOS)</li>
                    <li>• <strong>Reduced cortisol:</strong> Gentle exercise LOWERS stress hormones</li>
                    <li>• <strong>Thyroid support:</strong> Moderate exercise supports healthy thyroid function</li>
                    <li>• <strong>Regular cycles:</strong> Balanced exercise normalizes menstrual cycles</li>
                    <li>• <strong>Reduced inflammation:</strong> Strategic movement reduces systemic inflammation</li>
                    <li>• <strong>Better sleep:</strong> Improves sleep quality (critical for hormones)</li>
                    <li>• <strong>Weight loss without stress:</strong> Lose weight without hormone disruption</li>
                    <li>• <strong>Mood improvement:</strong> Endorphins without cortisol spike</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-violet-200">
                <CardHeader className="bg-violet-50">
                  <CardTitle className="text-violet-800 flex items-center">
                    <Moon className="w-6 h-6 mr-3" />
                    Hormone-Friendly Exercise Principles
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Moderate intensity:</strong> 60-75% max effort, not all-out</li>
                    <li>• <strong>Strength training priority:</strong> 3-4x weekly builds muscle, improves insulin</li>
                    <li>• <strong>Limited HIIT:</strong> Maximum 1-2x weekly, NOT daily</li>
                    <li>• <strong>Walking emphasized:</strong> Daily walks reduce cortisol, support hormones</li>
                    <li>• <strong>Adequate rest:</strong> 2-3 complete rest days weekly (recovery = results)</li>
                    <li>• <strong>Yoga/stretching:</strong> Reduces cortisol, improves flexibility</li>
                    <li>• <strong>Listen to body:</strong> Rest when exhausted, don't push through</li>
                    <li>• <strong>Cycle-syncing (optional):</strong> Adjust intensity to menstrual phase</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-4 text-center">Specific Hormone Benefits</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">For PCOS:</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Strength training improves insulin sensitivity 30-50%</li>
                    <li>• Reduces testosterone and androgens</li>
                    <li>• Helps regulate menstrual cycles</li>
                    <li>• Promotes weight loss (especially belly fat)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">For Thyroid:</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Moderate exercise supports healthy thyroid</li>
                    <li>• Boosts sluggish metabolism naturally</li>
                    <li>• Increases energy levels</li>
                    <li>• Prevents muscle loss (common in hypothyroid)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">For Menopause:</h4>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Strength training prevents muscle loss</li>
                    <li>• Reduces hot flashes and night sweats</li>
                    <li>• Maintains bone density (prevents osteoporosis)</li>
                    <li>• Improves mood and reduces anxiety</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">4-Week Hormone-Balancing Workout Program</h2>
            <p className="text-center text-gray-600 mb-12">
              Gentle, progressive program focusing on strength training, walking, and stress reduction. 4-5 sessions weekly, 30-45 minutes each.
            </p>

            {/* Weekly Schedule */}
            <Card className="border-violet-200 mb-8">
              <CardHeader className="bg-violet-50">
                <CardTitle className="text-violet-800">Weekly Schedule (Repeat 4 Weeks)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Training Days:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Monday:</strong> Lower Body Strength (40 min)</li>
                      <li>• <strong>Tuesday:</strong> Gentle Walk + Yoga/Stretching (30 min)</li>
                      <li>• <strong>Wednesday:</strong> Upper Body Strength (35 min)</li>
                      <li>• <strong>Thursday:</strong> Complete Rest or Gentle Walk (20 min)</li>
                      <li>• <strong>Friday:</strong> Full Body Strength (40 min)</li>
                      <li>• <strong>Saturday:</strong> Optional: Moderate HIIT or Walk (25 min)</li>
                      <li>• <strong>Sunday:</strong> Complete Rest + Recovery</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Guidelines:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Intensity:</strong> Moderate 60-75% effort, NOT all-out</li>
                      <li>• <strong>Rest between sets:</strong> 90-120 seconds (full recovery)</li>
                      <li>• <strong>Progressive overload:</strong> Increase weight 5-10% weekly</li>
                      <li>• <strong>Form priority:</strong> Slow, controlled movements</li>
                      <li>• <strong>Listen to body:</strong> Skip workout if exhausted</li>
                      <li>• <strong>Adequate rest:</strong> 2-3 full rest days weekly</li>
                      <li>• <strong>Sleep priority:</strong> 7-9 hours nightly (critical!)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Monday - Lower Body */}
            <Card className="border-pink-200 mb-6">
              <CardHeader className="bg-pink-50">
                <CardTitle className="text-pink-800">Monday - Lower Body Strength (40 minutes)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 mb-2"><strong>Warm-Up (5 minutes):</strong></p>
                    <p className="text-sm text-gray-700">Light walking + leg swings + hip circles</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Strength Training (30 minutes) - 3 sets x 10-12 reps</h4>
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">1. Goblet Squats (or Bodyweight Squats)</p>
                        <p className="text-xs text-gray-600">3x12 reps | Rest 90 sec | Targets: Quads, glutes, core | Improves insulin sensitivity</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">2. Romanian Deadlifts (Light-Moderate Weight)</p>
                        <p className="text-xs text-gray-600">3x12 reps | Rest 90 sec | Targets: Hamstrings, glutes, lower back</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">3. Walking Lunges</p>
                        <p className="text-xs text-gray-600">3x10 each leg | Rest 90 sec | Targets: Legs, balance, functional strength</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">4. Glute Bridges</p>
                        <p className="text-xs text-gray-600">3x15 reps | Rest 60 sec | Targets: Glutes, hamstrings (hormone-friendly!)</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">5. Calf Raises</p>
                        <p className="text-xs text-gray-600">3x20 reps | Rest 45 sec | Targets: Calves, ankle stability</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800 mb-2"><strong>Cool Down (5 minutes):</strong></p>
                    <p className="text-sm text-gray-700">Gentle stretching: Hamstrings, quads, hip flexors, glutes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tuesday - Active Recovery */}
            <Card className="border-teal-200 mb-6">
              <CardHeader className="bg-teal-50">
                <CardTitle className="text-teal-800">Tuesday - Gentle Walk + Yoga (30 minutes)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Part 1: Gentle Walk (20 minutes)</h4>
                    <p className="text-sm text-gray-700">Easy-paced outdoor walk. NOT intense - just moving body gently. Reduces cortisol, improves insulin sensitivity without stress.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Part 2: Yoga/Stretching (10 minutes)</h4>
                    <p className="text-sm text-gray-700 mb-2">Focus on relaxation and stress reduction:</p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>• Child's pose (1 min)</li>
                      <li>• Cat-cow stretches (2 min)</li>
                      <li>• Downward dog (1 min)</li>
                      <li>• Pigeon pose each side (2 min total)</li>
                      <li>• Seated forward fold (2 min)</li>
                      <li>• Savasana relaxation (2 min)</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">🧘 Reduces cortisol, improves flexibility, calms nervous system</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wednesday - Upper Body */}
            <Card className="border-indigo-200 mb-6">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-indigo-800">Wednesday - Upper Body Strength (35 minutes)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 mb-2"><strong>Warm-Up (5 minutes):</strong></p>
                    <p className="text-sm text-gray-700">Arm circles + shoulder rolls + light cardio</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Strength Training (25 minutes) - 3 sets x 10-12 reps</h4>
                    <div className="space-y-3">
                      <div className="bg-indigo-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">1. Dumbbell Chest Press (or Push-Ups)</p>
                        <p className="text-xs text-gray-600">3x12 reps | Rest 90 sec | Targets: Chest, shoulders, triceps</p>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">2. Seated Dumbbell Rows</p>
                        <p className="text-xs text-gray-600">3x12 reps | Rest 90 sec | Targets: Back, biceps, posture</p>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">3. Shoulder Press (Dumbbells)</p>
                        <p className="text-xs text-gray-600">3x12 reps | Rest 90 sec | Targets: Shoulders, upper back</p>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">4. Bicep Curls + Tricep Extensions (Superset)</p>
                        <p className="text-xs text-gray-600">3x12 each | Rest 60 sec | Targets: Arms</p>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">5. Plank Hold</p>
                        <p className="text-xs text-gray-600">3x30-45 sec | Rest 60 sec | Targets: Core stability</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800 mb-2"><strong>Cool Down (5 minutes):</strong></p>
                    <p className="text-sm text-gray-700">Upper body stretches: Chest, shoulders, triceps, back</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Friday - Full Body */}
            <Card className="border-purple-200 mb-6">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">Friday - Full Body Strength (40 minutes)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 mb-2"><strong>Warm-Up (5 minutes):</strong></p>
                    <p className="text-sm text-gray-700">Full body dynamic stretches + light cardio</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Full Body Circuit (30 minutes) - 3 sets x 12 reps each</h4>
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">1. Dumbbell Squats</p>
                        <p className="text-xs text-gray-600">3x12 reps | Targets: Full lower body</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">2. Push-Ups (or Dumbbell Press)</p>
                        <p className="text-xs text-gray-600">3x12 reps | Targets: Chest, arms, core</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">3. Dumbbell Deadlifts</p>
                        <p className="text-xs text-gray-600">3x12 reps | Targets: Posterior chain (back, glutes, hamstrings)</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">4. Overhead Press</p>
                        <p className="text-xs text-gray-600">3x12 reps | Targets: Shoulders, core</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded">
                        <p className="text-sm font-semibold text-gray-800">5. Plank to Downward Dog</p>
                        <p className="text-xs text-gray-600">3x10 reps | Targets: Core, shoulders, flexibility</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-3">⏱️ Rest 90-120 sec between sets. Focus on form, not speed.</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800 mb-2"><strong>Cool Down (5 minutes):</strong></p>
                    <p className="text-sm text-gray-700">Full body stretching + deep breathing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Saturday - Optional HIIT */}
            <Card className="border-amber-200 mb-6">
              <CardHeader className="bg-amber-50">
                <CardTitle className="text-amber-800">Saturday - Optional Moderate HIIT or Long Walk (25 min)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">⚠️ Important for Hormonal Imbalances:</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      HIIT is OPTIONAL and should NEVER be done more than 1-2x weekly maximum. If you're exhausted, stressed, or not
                      sleeping well, SKIP HIIT and do gentle walk instead. Listen to your body!
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Option A: Moderate HIIT (25 min)</h4>
                      <p className="text-xs text-gray-700 mb-2"><strong>8 rounds - NOT maximum effort, 70-75% intensity:</strong></p>
                      <ul className="text-xs text-gray-700 space-y-1">
                        <li>• Work interval: 30 seconds (moderate intensity)</li>
                        <li>• Rest interval: 90 seconds (active recovery)</li>
                        <li>• Exercises: Fast walk/jog, bike, jumping jacks, step-ups</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Option B: Long Walk (45 min)</h4>
                      <p className="text-xs text-gray-700">Easy-paced outdoor walk. Better for hormones if you're stressed or tired. Reduces cortisol without adding stress.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important Tips for Hormone-Friendly Exercise</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-700">✅ Do's</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Prioritize sleep:</strong> 7-9 hours nightly (more important than exercise!)</li>
                    <li>• <strong>Take rest days:</strong> 2-3 complete rest days weekly minimum</li>
                    <li>• <strong>Eat adequate calories:</strong> Don't under-eat while exercising</li>
                    <li>• <strong>Progress gradually:</strong> Increase weights slowly over weeks</li>
                    <li>• <strong>Walk daily:</strong> 20-30 min walks reduce cortisol naturally</li>
                    <li>• <strong>Practice stress management:</strong> Yoga, meditation, deep breathing</li>
                    <li>• <strong>Listen to body:</strong> Skip workout if exhausted or sick</li>
                    <li>• <strong>Focus on strength:</strong> Builds muscle, improves insulin sensitivity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-700">❌ Don'ts</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Don't do HIIT daily:</strong> Increases cortisol, worsens hormones</li>
                    <li>• <strong>Don't overtrain:</strong> More is NOT better with hormonal issues</li>
                    <li>• <strong>Don't exercise fasted:</strong> Eat small meal 1-2 hours before</li>
                    <li>• <strong>Don't skip rest days:</strong> Recovery is when hormones heal</li>
                    <li>• <strong>Don't push through exhaustion:</strong> Rest when body asks for it</li>
                    <li>• <strong>Don't do excessive cardio:</strong> Long cardio sessions increase cortisol</li>
                    <li>• <strong>Don't compare to others:</strong> Your hormones need YOUR pace</li>
                    <li>• <strong>Don't sacrifice sleep for workouts:</strong> Sleep &gt; exercise always</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Balance Your Hormones Naturally?</h2>
            <p className="text-xl mb-8">
              Combine these hormone-friendly workouts with our hormone-balancing diet for optimal results!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Personalized Program</h4>
                <p className="text-white text-sm mb-4">Custom plan - $100</p>
                <Button size="lg" className="w-full bg-white text-violet-600" asChild>
                  <Link href="/contact">Get Custom Plan</Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Moon className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Hormone Diet Plan</h4>
                <p className="text-yellow-100 text-sm mb-4">Balance hormones with food</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/plans/hormonal-imbalance">View Diet Plan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
