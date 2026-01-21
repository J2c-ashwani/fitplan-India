import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Zap, Trophy, Activity } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Athlete Nutrition Plan | Complete Sports Performance Diet Guide",
  description: "Complete athlete nutrition guide with sports performance meal plans, pre/post-workout fueling, endurance nutrition, strength athlete diet, hydration strategies, and recovery nutrition.",
  keywords: "athlete nutrition, sports nutrition, performance diet, endurance athlete diet, strength athlete nutrition, sports performance nutrition, pre workout meal",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/athlete-nutrition",
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
    title: "Athlete Nutrition Plan | Complete Sports Performance Guide",
    description: "Evidence-based athlete nutrition with meal plans for peak performance.",
    url: "https://www.fitplanindia.com/blog/athlete-nutrition",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function AthleteNutritionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-indigo-700 font-semibold">
              🏆 Elite Performance Nutrition
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Athlete Nutrition: Fuel Peak Performance & Recovery
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover advanced sports nutrition strategies for athletes including performance fueling, recovery optimization,
              endurance vs strength nutrition, hydration protocols, and complete meal plans for competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-white font-semibold" asChild>
                <Link href="#performance">
                  Performance Tips
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
                <div className="text-3xl font-bold text-indigo-700 mb-2">3-6g</div>
                <div className="text-gray-600">Carbs per kg (Endurance)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2.0-2.4g</div>
                <div className="text-gray-600">Protein per kg (Athletes)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">30-60g</div>
                <div className="text-gray-600">Carbs Per Hour Exercise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">20-30g</div>
                <div className="text-gray-600">Protein Post-Workout</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Sports Nutrition for Athletes</h2>
              <p className="text-lg text-gray-700 mb-6">
                Athletic performance nutrition goes beyond basic healthy eating - it's about strategic fueling for training,
                competition, and recovery. Athletes have significantly higher energy and nutrient demands than the general
                population due to intense training volumes, muscle tissue breakdown, glycogen depletion, increased protein
                turnover, and elevated metabolic demands. Proper sports nutrition enhances endurance performance, maximizes
                strength and power output, accelerates recovery between sessions, reduces injury risk, maintains immune function,
                optimizes body composition, and provides competitive advantage. Key principles include periodized nutrition
                (matching intake to training load), precise nutrient timing around workouts, adequate carbohydrate for glycogen
                replenishment, high protein for muscle repair, strategic hydration with electrolytes, and recovery-focused meals
                post-training. Different sports require different approaches - endurance athletes need more carbohydrates,
                strength athletes prioritize protein, while mixed-sport athletes balance both.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-indigo-800">Why Athletes Need Special Nutrition</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 2-3x higher calorie needs than sedentary people</li>
                    <li>• Glycogen depletion requires carb repletion</li>
                    <li>• Muscle damage needs protein for repair</li>
                    <li>• Intense sweating requires electrolyte replacement</li>
                    <li>• Immune system stressed by heavy training</li>
                    <li>• Recovery determines next workout quality</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-purple-800">Performance Nutrition Goals</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Maximize energy availability for training</li>
                    <li>• Optimize recovery between sessions</li>
                    <li>• Support muscle growth and repair</li>
                    <li>• Maintain optimal body composition</li>
                    <li>• Enhance immune function and health</li>
                    <li>• Gain competitive advantage through nutrition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endurance vs Strength */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nutrition by Sport Type</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Activity className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Endurance Athletes (Runners, Cyclists, Swimmers)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Macronutrient Focus:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Carbs:</strong> 5-8g per kg body weight (60-65% calories)</li>
                        <li>• <strong>Protein:</strong> 1.2-1.6g per kg (15-20% calories)</li>
                        <li>• <strong>Fats:</strong> 1.0-1.5g per kg (20-25% calories)</li>
                        <li>• Carbs are PRIMARY fuel for endurance</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Key Strategies:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Carb-loading before long events (3-4 days prior)</li>
                        <li>• Intra-workout carbs for efforts 60+ minutes</li>
                        <li>• Immediate post-workout carb + protein (3:1 ratio)</li>
                        <li>• Hydration with electrolytes crucial</li>
                        <li>• Glycogen replenishment top priority</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Performance Foods:</h5>
                      <p className="text-sm text-gray-700">
                        Oats, rice, pasta, sweet potatoes, bananas, sports drinks, gels, lean proteins,
                        omega-3 fish for inflammation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Dumbbell className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">Strength Athletes (Powerlifters, Bodybuilders, CrossFit)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Macronutrient Focus:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Protein:</strong> 2.0-2.4g per kg body weight (30-35%)</li>
                        <li>• <strong>Carbs:</strong> 4-6g per kg (40-50% calories)</li>
                        <li>• <strong>Fats:</strong> 1.0-1.5g per kg (20-25% calories)</li>
                        <li>• Protein is PRIMARY focus for muscle growth</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Key Strategies:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Protein at every meal (5-6x daily)</li>
                        <li>• Post-workout protein within 1 hour (20-30g)</li>
                        <li>• Carbs timed around workouts for energy</li>
                        <li>• Calorie surplus for muscle building phase</li>
                        <li>• Creatine supplementation (5g daily proven)</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Performance Foods:</h5>
                      <p className="text-sm text-gray-700">
                        Chicken, fish, lean beef, eggs, Greek yogurt, cottage cheese, protein powder,
                        rice, oats, sweet potatoes for carb needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-green-200 mt-8">
              <CardHeader>
                <CardTitle className="text-green-700">Mixed Sport Athletes (Soccer, Basketball, MMA, Tennis)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Mixed sports require both endurance and power - balanced approach needed:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Macros:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Carbs: 5-7g per kg (50-55%)</li>
                      <li>• Protein: 1.6-2.0g per kg (20-25%)</li>
                      <li>• Fats: 1.0-1.5g per kg (20-25%)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Focus:</h5>
                    <p className="text-sm text-gray-700">
                      Balance carbs for repeated sprints/endurance with protein for recovery. Hydration critical
                      for stop-and-go sports.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workout Nutrition Timing */}
      <section id="performance" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Performance Nutrition Timing</h2>

            <div className="space-y-8">
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Zap className="w-6 h-6 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-700">Pre-Training/Competition Fueling</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-orange-800">3-4 Hours Before:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Full meal:</strong> High carb, moderate protein, low fat</li>
                        <li>• <strong>Carbs:</strong> 2-4g per kg body weight</li>
                        <li>• <strong>Example:</strong> Pasta with chicken and vegetables</li>
                        <li>• Fills glycogen stores fully</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-orange-800">1-2 Hours Before:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Light meal/snack:</strong> Mostly carbs</li>
                        <li>• <strong>Carbs:</strong> 1-2g per kg</li>
                        <li>• <strong>Example:</strong> Banana, toast with honey, oats</li>
                        <li>• Easy to digest, tops off energy</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-orange-800">15-30 Min Before:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Quick carbs:</strong> If needed</li>
                        <li>• <strong>Carbs:</strong> 15-30g fast-digesting</li>
                        <li>• <strong>Example:</strong> Sports drink, gel, banana</li>
                        <li>• Quick energy boost only</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Activity className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">During Training/Competition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Under 60 Minutes:</h5>
                      <p className="text-sm text-gray-700">
                        <strong>Water only</strong> - No need for carbs or electrolytes. Hydrate 150-250ml every 15-20 min.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">60-150 Minutes:</h5>
                      <p className="text-sm text-gray-700">
                        <strong>30-60g carbs per hour</strong> - Sports drinks, gels, bananas. Prevents glycogen depletion.
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Over 150 Minutes:</h5>
                      <p className="text-sm text-gray-700">
                        <strong>60-90g carbs per hour</strong> - Multiple carb types (glucose + fructose). Plus electrolytes critical.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">Post-Training/Competition Recovery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-800 font-semibold">
                      🎯 Golden Hour: First 30-60 minutes post-exercise is CRITICAL for glycogen replenishment and
                      muscle protein synthesis. Don't miss this window!
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Immediately After (0-30 min):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Carbs:</strong> 1.0-1.2g per kg body weight</li>
                        <li>• <strong>Protein:</strong> 20-30g high-quality</li>
                        <li>• <strong>Ratio:</strong> 3:1 carbs to protein ideal</li>
                        <li>• <strong>Example:</strong> Chocolate milk, protein shake with banana</li>
                        <li>• Liquid form best - faster absorption</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">1-2 Hours Later:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Full recovery meal:</strong> Balanced nutrition</li>
                        <li>• <strong>Carbs:</strong> Continue replenishing glycogen</li>
                        <li>• <strong>Protein:</strong> 30-40g for continued muscle repair</li>
                        <li>• <strong>Example:</strong> Chicken, rice, vegetables</li>
                        <li>• Include vegetables for micronutrients</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Meal Plan */}
      <section id="meal-plans" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Athlete Meal Plan (3,000-3,200 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              High-performance nutrition for a 170 lb athlete training 5-6x per week (mixed endurance/strength).
            </p>

            <Card className="border-indigo-200 mb-8">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-indigo-800">Training Day - Athlete Nutrition</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:00 AM):</h5>
                    <p className="text-gray-700">Oatmeal (1 cup) with banana, berries, honey, almonds, whole eggs (3), whole grain toast (2 slices), orange juice</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~780 | Protein: 32g | Carbs: 110g | Fuel for training</p>
                  </div>

                  <div className="bg-orange-50 border border-orange-300 rounded-lg p-4">
                    <h5 className="font-semibold text-orange-800 mb-1">Pre-Workout (10:30 AM - 1 hour before):</h5>
                    <p className="text-gray-700">Banana (2), rice cakes with honey (2), coffee</p>
                    <p className="text-sm text-orange-600 mt-1">Calories: ~320 | Carbs: 75g | Quick energy for performance</p>
                  </div>

                  <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-1">During Workout (11:30 AM - 60+ min session):</h5>
                    <p className="text-gray-700">Sports drink (500ml) with 30-40g carbs, sipped throughout</p>
                    <p className="text-sm text-green-600 mt-1">Maintains energy and hydration during intense training</p>
                  </div>

                  <div className="bg-purple-50 border border-purple-300 rounded-lg p-4">
                    <h5 className="font-semibold text-purple-800 mb-1">Post-Workout Shake (1:00 PM - immediately after):</h5>
                    <p className="text-gray-700">Whey protein (2 scoops), banana (2), oats (1/2 cup), honey, whole milk (16 oz)</p>
                    <p className="text-sm text-purple-600 mt-1">Calories: ~780 | Protein: 58g | Carbs: 110g | Recovery window!</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch (3:00 PM):</h5>
                    <p className="text-gray-700">Grilled chicken (250g), brown rice (1.5 cups), roasted vegetables, avocado, side salad with olive oil</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~780 | Protein: 62g | Continues recovery process</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (5:30 PM):</h5>
                    <p className="text-gray-700">Greek yogurt (2 cups), granola, berries, handful of mixed nuts</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~520 | Protein: 42g | Sustained energy</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (8:00 PM):</h5>
                    <p className="text-gray-700">Salmon (200g), quinoa (1 cup), roasted sweet potato, steamed broccoli with butter, mixed green salad</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~720 | Protein: 52g | Omega-3s for recovery</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Before Bed (10:00 PM):</h5>
                    <p className="text-gray-700">Cottage cheese (1 cup) with berries, casein protein shake</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~280 | Protein: 35g | Slow-release protein overnight</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-indigo-200">
                  <p className="text-sm font-semibold text-indigo-700">Daily Total: ~4,180 calories | Protein: 281g | Carbs: 520g | Fats: 112g | Elite athlete fueling!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Rest Day Adjustments</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  On rest/recovery days, reduce carbs by 30-40% (lower glycogen needs) and total calories by 400-500.
                  Keep protein high for muscle repair. Skip pre/post-workout nutrition.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Rest Day Example:</h5>
                  <p className="text-sm text-gray-700">
                    Same protein amounts, reduce rice/grain portions, add more vegetables and healthy fats.
                    Total: ~2,700-2,900 calories with continued recovery focus.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hydration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Athlete Hydration Protocol</h2>

            <Card className="border-blue-200">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-blue-800">Before Training</h5>
                    <p className="text-2xl font-bold text-blue-700 mb-2">16-20 oz</p>
                    <p className="text-sm text-gray-700">2-3 hours before + 8-10 oz 15 min before start.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-green-800">During Training</h5>
                    <p className="text-2xl font-bold text-green-700 mb-2">20-40 oz/hr</p>
                    <p className="text-sm text-gray-700">Higher end for hot conditions, heavy sweaters.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-purple-800">After Training</h5>
                    <p className="text-2xl font-bold text-purple-700 mb-2">150% Lost</p>
                    <p className="text-sm text-gray-700">Weigh before/after. 24 oz per pound lost.</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                  <h5 className="font-semibold mb-2 text-yellow-800">⚠️ Electrolyte Replacement:</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Sodium:</strong> 300-600mg per hour for intense/hot training</li>
                    <li>• <strong>Sports drinks:</strong> For sessions over 60 minutes</li>
                    <li>• <strong>Sweat test:</strong> Weigh before/after to calculate personal needs</li>
                    <li>• <strong>Signs of dehydration:</strong> Dark urine, fatigue, headache, cramping</li>
                    <li>• <strong>Performance drop:</strong> 2% dehydration = 10-20% performance loss</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Athlete Nutrition Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Never skip post-workout nutrition:</strong> Critical 30-60 min window</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Periodize nutrition:</strong> Match intake to training load</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Practice race-day nutrition:</strong> Test during training, never on event day</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize sleep:</strong> 8-10 hours for athletes - recovery happens here</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track performance markers:</strong> Energy levels, recovery, sleep quality</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Undereating for training load:</strong> Leads to fatigue, injury, poor performance</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not fueling during long sessions:</strong> Bonking from glycogen depletion</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Inadequate hydration:</strong> Massive performance killer</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Trying new foods on race day:</strong> GI disaster waiting to happen</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring recovery nutrition:</strong> Can't adapt to training without proper fuel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Maximize Your Athletic Performance
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Nutrition provides the fuel, but proper training creates the adaptations. Get sport-specific training
              programs designed for competitive athletes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Sport-Specific Training</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover training programs optimized for endurance, strength, and mixed-sport athletes.
                </p>
                <Button size="lg" className="w-full bg-white text-indigo-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/athlete-nutrition">
                    View Workouts
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Trophy className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized athlete nutrition plan for your sport and goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Used by competitive athletes worldwide for peak performance nutrition
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
