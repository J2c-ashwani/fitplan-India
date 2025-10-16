import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Clock, Zap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Intermittent Fasting Diet Plan | Complete IF Guide for Weight Loss",
  description: "Complete intermittent fasting guide with meal plans, fasting schedules (16:8, 18:6, OMAD), what to eat, breaking fast strategies, and maximizing fat loss with IF.",
  keywords: "intermittent fasting diet, IF meal plan, 16:8 fasting, intermittent fasting weight loss, fasting schedule, what to eat during intermittent fasting, breaking fast",
  openGraph: {
    title: "Intermittent Fasting Diet Plan | Complete IF Guide",
    description: "Science-backed intermittent fasting with meal plans, schedules, and strategies for fat loss.",
    url: "https://fitplanindia.com/blog/intermittent-fasting",
  },
}

export default function IntermittentFastingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-blue-700 font-semibold">
              ⏰ Complete Intermittent Fasting Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Intermittent Fasting Diet Plan: Complete Guide to IF Weight Loss
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover the complete intermittent fasting strategy for rapid fat loss, improved metabolism, cellular 
              health, mental clarity, and sustainable weight management through time-restricted eating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/intermittent-fasting">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  IF Workouts
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
                <div className="text-3xl font-bold text-blue-600 mb-2">16:8</div>
                <div className="text-gray-600">Most Popular Method</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">3-8%</div>
                <div className="text-gray-600">Weight Loss in 3-24 Weeks</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">12-16hr</div>
                <div className="text-gray-600">Fat Burning Starts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">0 Cal</div>
                <div className="text-gray-600">During Fasting Window</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Intermittent Fasting</h2>
              <p className="text-lg text-gray-700 mb-6">
                Intermittent Fasting (IF) is not a diet - it's an eating pattern that cycles between periods of fasting 
                and eating. Instead of focusing on WHAT you eat, IF focuses on WHEN you eat. During fasting periods, you 
                consume zero or minimal calories, allowing your body to shift from burning glucose (food energy) to burning 
                stored fat. This metabolic switch triggers numerous health benefits including fat loss, improved insulin 
                sensitivity, cellular repair (autophagy), reduced inflammation, enhanced brain function, and potential 
                longevity benefits. IF is simple, flexible, and doesn't require special foods or calorie counting.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Benefits of Intermittent Fasting</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Effective fat loss (3-8% weight loss in studies)</li>
                    <li>• Improved insulin sensitivity and blood sugar</li>
                    <li>• Enhanced autophagy (cellular cleanup)</li>
                    <li>• Reduced inflammation throughout body</li>
                    <li>• Increased growth hormone production</li>
                    <li>• Mental clarity and focus during fasting</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-indigo-800">How Intermittent Fasting Works</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Fed State (0-4hr):</strong> Body digests food, insulin high</li>
                    <li>• <strong>Post-Absorptive (4-12hr):</strong> Insulin drops, fat burning begins</li>
                    <li>• <strong>Fasted State (12-16hr):</strong> Active fat burning, ketones rise</li>
                    <li>• <strong>Deep Fast (16+hr):</strong> Autophagy, growth hormone peaks</li>
                    <li>• <strong>Result:</strong> Natural calorie restriction + metabolic benefits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IF Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Popular Intermittent Fasting Methods</h2>
            
            <div className="space-y-8">
              {/* 16:8 Method */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Clock className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">16:8 Method (Most Popular for Beginners)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Schedule Example:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Fasting Window:</strong> 8 PM - 12 PM next day (16 hours)</li>
                        <li>• <strong>Eating Window:</strong> 12 PM - 8 PM (8 hours)</li>
                        <li>• <strong>Meals:</strong> Lunch at 12 PM, Snack at 4 PM, Dinner at 7 PM</li>
                        <li>• <strong>What You Can Have:</strong> Water, black coffee, tea (no calories)</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Why It's Popular:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Simply skip breakfast (most people do anyway)</li>
                        <li>• Still eat 2-3 full meals daily</li>
                        <li>• Social life not affected (dinner with family)</li>
                        <li>• Easier to stick to long-term</li>
                        <li>• Effective fat loss with minimal disruption</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Beginners, busy professionals, anyone wanting sustainable fat loss without drastic changes.
                  </p>
                </CardContent>
              </Card>

              {/* 18:6 Method */}
              <Card className="border-indigo-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Target className="w-6 h-6 text-indigo-600 mr-3" />
                    <CardTitle className="text-indigo-700">18:6 Method (Intermediate)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-indigo-800">Schedule Example:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Fasting Window:</strong> 8 PM - 2 PM next day (18 hours)</li>
                        <li>• <strong>Eating Window:</strong> 2 PM - 8 PM (6 hours)</li>
                        <li>• <strong>Meals:</strong> Lunch at 2 PM, Dinner at 7 PM</li>
                        <li>• <strong>Benefits:</strong> Deeper autophagy, more fat burning</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Progression Strategy:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Start with 16:8 for 2-4 weeks</li>
                        <li>• Gradually push first meal to 1 PM, then 2 PM</li>
                        <li>• Body adapts after first week</li>
                        <li>• Accelerated results compared to 16:8</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Those comfortable with 16:8 wanting faster results, people with 2-meal preference.
                  </p>
                </CardContent>
              </Card>

              {/* OMAD */}
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Zap className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">OMAD - One Meal A Day (Advanced)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Schedule:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Fasting:</strong> 23 hours</li>
                        <li>• <strong>Eating:</strong> 1 hour (one large meal)</li>
                        <li>• <strong>Example:</strong> Eat dinner at 6-7 PM only</li>
                        <li>• <strong>Calories:</strong> All daily intake in one sitting</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-red-800">⚠️ Considerations:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Very restrictive - hard to maintain long-term</li>
                        <li>• Difficult to meet all nutrient needs in one meal</li>
                        <li>• Can cause digestive discomfort</li>
                        <li>• Not for beginners or those with eating disorders</li>
                        <li>• Maximum fat loss but least sustainable</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Best For:</strong> Experienced fasters, extreme fat loss goals (short-term), those who prefer simplicity over frequency.
                  </p>
                </CardContent>
              </Card>

              {/* 5:2 Diet */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Heart className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">5:2 Diet (Flexible Alternative)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Eat normally 5 days per week, restrict to 500-600 calories on 2 non-consecutive days (e.g., Monday and Thursday).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Normal Days (5x):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Eat maintenance calories</li>
                        <li>• No restrictions on timing</li>
                        <li>• Focus on balanced nutrition</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Fasting Days (2x):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 500 cal (women) or 600 cal (men)</li>
                        <li>• High-protein, low-carb meals</li>
                        <li>• Plenty of water and black coffee/tea</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4">
                    <strong>Best For:</strong> Those who struggle with daily fasting, people with social eating commitments, flexible approach.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Eat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What to Eat During Eating Window</h2>
            
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-xl text-blue-900 mb-4">💡 Key Principle: Quality Over Quantity</h4>
              <p className="text-gray-800">
                Intermittent fasting is NOT a license to eat junk food during your eating window. For best results, 
                focus on whole, nutrient-dense foods. IF naturally reduces appetite, making it easier to eat less overall.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Foods for Intermittent Fasting:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">High-Protein Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Lean meats (chicken, turkey, lean beef)</li>
                      <li>• Fish and seafood</li>
                      <li>• Eggs (whole eggs)</li>
                      <li>• Greek yogurt, cottage cheese</li>
                      <li>• Legumes (beans, lentils)</li>
                      <li>• Protein keeps you full longer</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Healthy Fats:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Avocados, olive oil</li>
                      <li>• Nuts and seeds</li>
                      <li>• Fatty fish (salmon, mackerel)</li>
                      <li>• Nut butters (natural)</li>
                      <li>• Fats provide satiety and energy</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Complex Carbs & Fiber:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Whole grains (quinoa, brown rice, oats)</li>
                      <li>• Sweet potatoes</li>
                      <li>• Vegetables (all types, especially leafy greens)</li>
                      <li>• Fruits (berries, apples, citrus)</li>
                      <li>• High fiber keeps digestion healthy</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Foods to Limit or Avoid:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Avoid Breaking Fast With:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sugary foods (spikes insulin, increases hunger)</li>
                      <li>• Refined carbs (white bread, pastries)</li>
                      <li>• Heavy, greasy meals (hard to digest)</li>
                      <li>• Large portions immediately</li>
                      <li>• Start with something light and protein-rich</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Minimize During Eating Window:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Processed foods and junk food</li>
                      <li>• Sugary drinks and sodas</li>
                      <li>• Excessive alcohol (empty calories)</li>
                      <li>• Fried and fast foods</li>
                      <li>• These undermine IF benefits</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                    <h5 className="font-semibold mb-2 text-yellow-800">⚠️ During Fasting Window (ZERO Calories):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• ✅ Water (unlimited)</li>
                      <li>• ✅ Black coffee (no cream/sugar)</li>
                      <li>• ✅ Plain tea (green, herbal, black)</li>
                      <li>• ✅ Sparkling water</li>
                      <li>• ❌ NO milk, cream, sugar, artificial sweeteners (debated)</li>
                      <li>• ❌ Absolutely no food or caloric drinks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
      <section id="meal-plans" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">16:8 Sample Meal Plan (12 PM - 8 PM Eating Window)</h2>
            <p className="text-center text-gray-600 mb-12">
              This plan provides ~2,000 calories during the 8-hour eating window for sustainable fat loss.
            </p>
            
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Typical Day on 16:8 Intermittent Fasting</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-800 mb-1">Morning (6 AM - 12 PM): Fasting Period</h5>
                    <p className="text-gray-700">Water, black coffee, green tea only. Stay hydrated. Coffee suppresses appetite.</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: 0 | Body in fat-burning mode</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">First Meal - Breaking the Fast (12:00 PM):</h5>
                    <p className="text-gray-700">Grilled chicken breast (200g), quinoa (1 cup cooked), mixed vegetables (broccoli, carrots), olive oil drizzle, side salad</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~600 | Protein: 50g | Start with protein + vegetables</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Snack (3:00 PM):</h5>
                    <p className="text-gray-700">Greek yogurt (1 cup) with berries, almonds (1 oz), honey drizzle</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~350 | Protein: 22g | Satisfying between meals</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Second Meal - Dinner (6:30 PM):</h5>
                    <p className="text-gray-700">Baked salmon (180g), sweet potato (medium), asparagus with butter, avocado salad</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~650 | Protein: 45g | Omega-3s, healthy fats</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Optional Light Snack (7:30 PM - before window closes):</h5>
                    <p className="text-gray-700">Apple with almond butter (1 tbsp), herbal tea</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~180 | If still hungry before fast begins</p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg mt-4">
                    <h5 className="font-semibold text-gray-800 mb-1">Evening (8 PM - 6 AM next day): Fasting Resumes</h5>
                    <p className="text-gray-700">Only water, herbal tea. No food until 12 PM tomorrow. Sleep through most of it!</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: 0 | Fat burning continues overnight</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-sm font-semibold text-blue-700">Daily Total: ~1,780 calories | Protein: 117g | Natural calorie deficit through time restriction</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Intermittent Fasting Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Keys to IF Success:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay busy in morning:</strong> Distraction makes fasting easier</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Drink lots of water:</strong> Helps suppress appetite and stay hydrated</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Black coffee is your friend:</strong> Appetite suppressant during fasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Start gradually:</strong> Begin with 12:12, progress to 16:8 over weeks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Be consistent:</strong> Same schedule daily makes it habit</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common IF Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Overeating in window:</strong> IF isn't excuse to binge - still watch portions</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Breaking fast with sugar:</strong> Spikes insulin, increases hunger</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not drinking enough water:</strong> Dehydration feels like hunger</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Inconsistent schedule:</strong> Different times daily disrupts adaptation</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Expecting instant results:</strong> Takes 2-4 weeks to see significant changes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your IF Transformation
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Intermittent fasting works best when combined with proper exercise. Get your complete IF workout plan 
              to maximize fat loss and maintain muscle during fasting periods.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">IF Workout Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover effective workouts optimized for intermittent fasting schedules and energy management.
                </p>
                <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/intermittent-fasting">
                    View IF Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized IF meal plan tailored to your schedule and goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Meal Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join thousands achieving sustainable weight loss through intermittent fasting
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
