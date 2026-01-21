import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Zap, Flame } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exercise & Fitness Diet Plan | Complete Nutrition for Active Lifestyle",
  description: "Complete exercise and fitness diet guide with meal plans for workouts, pre/post-workout nutrition, muscle recovery, performance optimization, and fueling active lifestyles.",
  keywords: "fitness diet, exercise nutrition, workout meal plan, pre workout nutrition, post workout meal, sports nutrition, active lifestyle diet, performance nutrition",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/exercise-fitness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Exercise & Fitness Diet Plan | Nutrition for Active People",
    description: "Science-backed fitness nutrition with workout meal plans and performance optimization strategies.",
    url: "https://www.fitplanindia.com/blog/exercise-fitness",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function ExerciseFitnessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-orange-600 font-semibold">
              💪 Complete Exercise & Fitness Nutrition
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Exercise & Fitness Diet: Fuel Your Active Lifestyle
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover optimal nutrition strategies for exercise and fitness including pre/post-workout meals,
              performance optimization, muscle recovery, energy management, and complete meal plans for active people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/general">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Workout Plans
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
                <div className="text-3xl font-bold text-orange-600 mb-2">1.6-2.2g</div>
                <div className="text-gray-600">Protein per kg Body Weight</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">3-5g</div>
                <div className="text-gray-600">Carbs per kg (Active)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">20-30g</div>
                <div className="text-gray-600">Protein Post-Workout</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">30-60min</div>
                <div className="text-gray-600">Post-Workout Timing</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nutrition for Exercise & Fitness</h2>
              <p className="text-lg text-gray-700 mb-6">
                Active individuals have different nutritional needs than sedentary people. Regular exercise increases
                calorie expenditure, depletes glycogen stores, breaks down muscle tissue, and stresses the body's systems.
                Proper fitness nutrition supports workout performance, enhances recovery, builds lean muscle, reduces injury
                risk, improves body composition, and maximizes training adaptations. Whether you're a gym enthusiast, runner,
                athlete, or simply exercise regularly, understanding pre-workout fueling, post-workout recovery nutrition,
                hydration strategies, and overall dietary balance is crucial for achieving your fitness goals.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Fitness Nutrition Goals</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Fuel workouts with adequate energy (carbs)</li>
                    <li>• Support muscle protein synthesis (protein)</li>
                    <li>• Promote recovery and reduce soreness</li>
                    <li>• Maintain hydration and electrolyte balance</li>
                    <li>• Optimize body composition (muscle gain, fat loss)</li>
                    <li>• Enhance performance and endurance</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-red-800">Active Person Calorie Needs</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Light Activity (1-3x/week):</strong> TDEE + 0-200 cal</li>
                    <li>• <strong>Moderate (3-5x/week):</strong> TDEE + 200-400 cal</li>
                    <li>• <strong>High Activity (6-7x/week):</strong> TDEE + 400-600 cal</li>
                    <li>• <strong>Athletes/Heavy Training:</strong> TDEE + 600-1000 cal</li>
                    <li>• Need more than sedentary for recovery and performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Nutrition Timing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Workout Nutrition Timing Strategy</h2>

            <div className="space-y-8">
              {/* Pre-Workout */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Zap className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Pre-Workout Nutrition: Fuel for Performance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">2-3 Hours Before:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Full balanced meal:</strong> Carbs + protein + moderate fat</li>
                        <li>• <strong>Example:</strong> Chicken, brown rice, vegetables</li>
                        <li>• <strong>Carbs:</strong> 40-60g for glycogen stores</li>
                        <li>• <strong>Protein:</strong> 20-30g for muscle support</li>
                        <li>• <strong>Purpose:</strong> Sustained energy throughout workout</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">30-60 Minutes Before:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Light snack:</strong> Quick carbs + small protein</li>
                        <li>• <strong>Examples:</strong> Banana + peanut butter, toast + honey</li>
                        <li>• <strong>Carbs:</strong> 20-30g fast-digesting</li>
                        <li>• <strong>Keep protein light:</strong> 5-10g</li>
                        <li>• <strong>Purpose:</strong> Quick energy boost, avoid stomach upset</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-blue-800">✅ Best Pre-Workout Foods:</h5>
                    <p className="text-sm text-gray-700">
                      <strong>Carb Focus:</strong> Oatmeal, bananas, whole grain toast, rice cakes, sweet potato, pasta.
                      <strong>Protein:</strong> Greek yogurt, protein shake, eggs, chicken breast.
                      <strong>Avoid:</strong> High fat/fiber foods (slow digestion, cause cramping). Stay hydrated - drink 16-20 oz water.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* During Workout */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Heart className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">During Workout: Hydration & Energy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Workouts Under 60 Minutes:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Water only:</strong> 7-10 oz every 15-20 min</li>
                        <li>• No need for sports drinks or carbs</li>
                        <li>• Glycogen stores sufficient</li>
                        <li>• Stay hydrated throughout</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Workouts Over 60 Minutes:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Sports drink or carbs:</strong> 30-60g per hour</li>
                        <li>• Replenishes glycogen during exercise</li>
                        <li>• Options: Gatorade, bananas, energy gels</li>
                        <li>• Electrolytes (sodium, potassium) important</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Post-Workout */}
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">Post-Workout Nutrition: Recovery Window</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-800 font-semibold">
                      🎯 The "Anabolic Window": Within 30-60 minutes post-workout is optimal for nutrient absorption.
                      Muscles are primed to uptake protein and carbs for recovery and growth.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Immediately After (0-30 min):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Protein:</strong> 20-30g (whey protein ideal)</li>
                        <li>• <strong>Carbs:</strong> 30-60g (fast-digesting)</li>
                        <li>• <strong>Ratio:</strong> 2:1 or 3:1 carbs to protein</li>
                        <li>• <strong>Examples:</strong> Protein shake + banana, chocolate milk</li>
                        <li>• <strong>Purpose:</strong> Stop muscle breakdown, start recovery</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Recovery Meal (1-2 hours later):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Full balanced meal:</strong> Protein + carbs + fats</li>
                        <li>• <strong>Protein:</strong> 30-40g for muscle repair</li>
                        <li>• <strong>Carbs:</strong> 50-80g to replenish glycogen</li>
                        <li>• <strong>Examples:</strong> Chicken, rice, vegetables</li>
                        <li>• <strong>Purpose:</strong> Complete recovery process</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-100 border border-purple-300 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-purple-800">✅ Best Post-Workout Options:</h5>
                    <p className="text-sm text-gray-700">
                      <strong>Quick (liquid):</strong> Whey protein shake, chocolate milk, smoothie with protein powder.
                      <strong>Solid meals:</strong> Grilled chicken + sweet potato, salmon + quinoa, eggs + whole grain toast,
                      Greek yogurt + granola + fruit. <strong>Always rehydrate:</strong> 16-24 oz water per pound lost during exercise.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Meal Plan */}
      <section id="meal-plans" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Exercise & Fitness Meal Plan (2,400-2,600 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              This plan supports 4-5 workouts per week with 120-140g protein daily for muscle recovery and performance.
            </p>

            <Card className="border-orange-200 mb-8">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-orange-800">Sample Day - Training Day</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:00 AM):</h5>
                    <p className="text-gray-700">Scrambled eggs (3) with spinach, whole grain toast (2 slices) with avocado, Greek yogurt (1 cup) with berries</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~580 | Protein: 38g | Start day with protein</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:00 AM):</h5>
                    <p className="text-gray-700">Apple with almond butter (2 tbsp), handful of mixed nuts</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~320 | Sustained energy</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 mb-1">Pre-Workout Snack (12:30 PM - 1 hour before gym):</h5>
                    <p className="text-gray-700">Banana with peanut butter (1 tbsp), rice cakes (2)</p>
                    <p className="text-sm text-blue-600 mt-1">Calories: ~280 | Quick carbs for energy</p>
                  </div>

                  <div className="bg-purple-50 border border-purple-300 rounded-lg p-4">
                    <h5 className="font-semibold text-purple-800 mb-1">Post-Workout Shake (3:00 PM - immediately after):</h5>
                    <p className="text-gray-700">Whey protein shake (1 scoop) with banana and milk</p>
                    <p className="text-sm text-purple-600 mt-1">Calories: ~320 | Protein: 30g | Recovery window</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch/Post-Workout Meal (4:30 PM):</h5>
                    <p className="text-gray-700">Grilled chicken breast (200g), brown rice (1 cup), roasted vegetables (broccoli, peppers), side salad with olive oil</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~620 | Protein: 50g | Replenish glycogen</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:30 PM):</h5>
                    <p className="text-gray-700">Baked salmon (180g), quinoa (3/4 cup), asparagus with butter, mixed green salad</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~580 | Protein: 45g | Omega-3s for recovery</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Evening Snack (Optional - 9:00 PM):</h5>
                    <p className="text-gray-700">Cottage cheese (1 cup) with berries or casein protein shake</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~180 | Slow-digesting protein for overnight recovery</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-orange-200">
                  <p className="text-sm font-semibold text-orange-700">Daily Total: ~2,880 calories | Protein: 163g | Carbs: 310g | Fats: 85g | Supports heavy training</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Rest Day Adjustments</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  On rest days, reduce carbs slightly (50-100g less) and total calories by 200-300. Keep protein high for recovery.
                  Skip pre/post-workout nutrition timing - just eat regular balanced meals.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Rest Day Example:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Same breakfast and protein amounts</li>
                    <li>• Reduce rice/grains portions at meals</li>
                    <li>• Add more vegetables and healthy fats</li>
                    <li>• Total: ~2,200-2,400 calories</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hydration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hydration for Active People</h2>

            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-blue-800">Before Exercise</h5>
                    <p className="text-2xl font-bold text-blue-700 mb-2">16-20 oz</p>
                    <p className="text-sm text-gray-700">2-3 hours before. Then 8-10 oz 15 min before.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-green-800">During Exercise</h5>
                    <p className="text-2xl font-bold text-green-700 mb-2">7-10 oz</p>
                    <p className="text-sm text-gray-700">Every 15-20 minutes during workout.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-purple-800">After Exercise</h5>
                    <p className="text-2xl font-bold text-purple-700 mb-2">16-24 oz</p>
                    <p className="text-sm text-gray-700">Per pound of body weight lost. Weigh before/after.</p>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                  <h5 className="font-semibold mb-2 text-yellow-800">💧 Hydration Tips:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Monitor urine color: Pale yellow = well hydrated</li>
                    <li>• Add electrolytes for workouts over 60 minutes or heavy sweating</li>
                    <li>• Don't wait until thirsty - drink consistently throughout day</li>
                    <li>• Baseline: 8-12 glasses daily + exercise hydration on top</li>
                  </ul>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fitness Nutrition Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize protein:</strong> 1.6-2.2g per kg body weight for recovery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Time carbs around workouts:</strong> Pre/post for best performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Never skip post-workout meal:</strong> Critical for recovery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated:</strong> Performance drops 2% with 2% dehydration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat enough calories:</strong> Undereating hurts performance and recovery</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Training fasted too often:</strong> Reduces performance and muscle gain</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring post-workout nutrition:</strong> Wasted workout gains</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too little protein:</strong> Can't build/maintain muscle properly</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Chronic undereating:</strong> Leads to fatigue, injury, poor results</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Dehydration:</strong> Kills performance - drink consistently</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Fitness Journey
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Proper nutrition fuels your workouts, but you need an effective training plan to maximize results.
              Get your complete workout program today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Complete Workout Plans</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover effective training programs for all fitness levels and goals - from beginners to advanced athletes.
                </p>
                <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts">
                    View All Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Flame className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized fitness nutrition and workout plan tailored to your goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands optimizing fitness through proper nutrition and training
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
