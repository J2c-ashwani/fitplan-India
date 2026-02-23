import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Zap, Flame } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "Keto Diet Plan | Low-Carb Indian Diet Guide for Weight Loss",
  description: "Complete keto diet guide adapted for Indian cuisine with low-carb meal plans, ketogenic recipes, and strategies for fat loss.",
  keywords: "keto diet, ketogenic diet, low carb diet India, keto meal plan, keto weight loss, Indian keto diet",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/keto",
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
    title: "Keto Diet Plan | Indian Low-Carb Guide",
    description: "Complete ketogenic diet adapted for Indian cuisine.",
    url: "https://www.fitplanindia.com/blog/keto",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function KetoDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ArticleSchema
        headline="Keto Diet Plan | Low-Carb Indian Diet Guide for Weight Loss"
        description="Complete keto diet guide adapted for Indian cuisine with low-carb meal plans, ketogenic recipes, and strategies for fat loss."
        keywords={["keto diet", "ketogenic diet", "low carb diet India", "keto meal plan", "keto weight loss", "Indian keto diet"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🔥 Keto Diet Answer Engine
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm font-serif">
              How Does the Keto Diet Actually Burn Stored Body Fat?
            </h1>
            <p className="text-xl text-white mb-8 border-l-4 border-orange-300 pl-4 text-left bg-white/10 p-4 rounded-r-lg shadow-md leading-relaxed">
              <strong>The Short Answer:</strong> By severely restricting carbohydrates (to under 20-50g daily) and replacing them with high fats, your body enters a metabolic state called ketosis. Without sufficient glucose for energy, your liver begins breaking down stored body fat into molecules called "ketones," which become your brain and body's primary fuel source, essentially turning you into a 24/7 fat-burning machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/keto">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Keto Workouts
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
                <div className="text-3xl font-bold text-orange-600 mb-2">20-50g</div>
                <div className="text-gray-600">Net Carbs Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">70-80%</div>
                <div className="text-gray-600">Calories from Fat</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">2-7 Days</div>
                <div className="text-gray-600">To Enter Ketosis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5-10 lbs</div>
                <div className="text-gray-600">First Week Loss (Water)</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">How Long Does It Take to Enter Ketosis and Start Burning Fat?</h2>
              <p className="text-lg text-gray-700 mb-6">
                The ketogenic (keto) diet is a very low-carb, high-fat eating plan that shifts your body into a metabolic
                state called ketosis. In ketosis, your body becomes incredibly efficient at burning fat for energy instead
                of glucose. By drastically reducing carbs (to 20-50g net carbs daily) and increasing fat intake (70-80% of
                calories), your liver produces ketones from fat, which become the primary fuel source. This metabolic switch
                leads to rapid fat loss, reduced appetite, stable blood sugar, increased energy, mental clarity, and numerous
                health benefits. Keto is highly effective for weight loss, type 2 diabetes management, and metabolic health.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Benefits of Keto Diet</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Rapid fat loss (1-3 lbs per week after initial water)</li>
                    <li>• Reduced hunger and cravings</li>
                    <li>• Stable energy without blood sugar crashes</li>
                    <li>• Mental clarity and focus</li>
                    <li>• Better blood sugar and insulin control</li>
                    <li>• Reduced inflammation and triglycerides</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-red-800">How Ketosis Works</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Normal State:</strong> Body burns glucose (carbs) for fuel</li>
                    <li>• <strong>Keto State:</strong> Body burns fat and ketones for fuel</li>
                    <li>• <strong>Fat Adaptation:</strong> Takes 2-4 weeks to fully adapt</li>
                    <li>• <strong>Ketone Levels:</strong> 0.5-3.0 mmol/L indicates ketosis</li>
                    <li>• <strong>Result:</strong> Efficient fat burning 24/7</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keto Macros */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Keto Diet Macros & Food Guidelines</h2>

            <div className="space-y-8">
              {/* Macro Breakdown */}
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Target className="w-6 h-6 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-700">Perfect Keto Macronutrient Ratio</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-red-700 mb-2">70-80%</div>
                      <div className="text-gray-800 font-semibold">Fat</div>
                      <div className="text-sm text-gray-600 mt-1">Primary fuel source</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-blue-700 mb-2">15-25%</div>
                      <div className="text-gray-800 font-semibold">Protein</div>
                      <div className="text-sm text-gray-600 mt-1">Moderate for muscle</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-green-700 mb-2">5-10%</div>
                      <div className="text-gray-800 font-semibold">Carbs</div>
                      <div className="text-sm text-gray-600 mt-1">20-50g net carbs</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Example for 1,800 Calories:</strong> Fat: 140g (1,260 cal) | Protein: 90g (360 cal) | Net Carbs: 25g (100 cal)
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-orange-800">Healthy Fats (Priority):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Avocados, coconut oil, olive oil</li>
                        <li>• Butter, ghee (grass-fed)</li>
                        <li>• Fatty fish (salmon, mackerel)</li>
                        <li>• Nuts (macadamia, pecans)</li>
                        <li>• Cheese, heavy cream</li>
                        <li>• MCT oil (optional boost)</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Quality Protein:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Beef, pork, lamb</li>
                        <li>• Chicken, turkey</li>
                        <li>• Fatty fish, seafood</li>
                        <li>• Eggs (whole with yolk)</li>
                        <li>• Full-fat dairy</li>
                        <li>• Moderate - don't overdo</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Low-Carb Vegetables:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Leafy greens (spinach, kale)</li>
                        <li>• Broccoli, cauliflower</li>
                        <li>• Zucchini, cucumber</li>
                        <li>• Asparagus, Brussels sprouts</li>
                        <li>• Mushrooms, peppers</li>
                        <li>• Avocado (technically fruit)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Foods to Avoid */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">Foods to AVOID on Keto (High Carb)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    These foods will kick you out of ketosis. Even small amounts can spike blood sugar and halt fat burning.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-red-700">❌ Absolutely Avoid:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Grains:</strong> Bread, rice, pasta, cereal, oats</li>
                        <li>• <strong>Sugar:</strong> Candy, soda, juice, desserts, honey</li>
                        <li>• <strong>Starchy Vegetables:</strong> Potatoes, corn, peas</li>
                        <li>• <strong>Most Fruits:</strong> Bananas, apples, oranges, grapes</li>
                        <li>• <strong>Legumes:</strong> Beans, lentils, chickpeas</li>
                        <li>• <strong>Low-fat Products:</strong> Skim milk, low-fat yogurt</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-orange-700">⚠️ Hidden Carbs Watch Out:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Sauces and condiments (ketchup, BBQ sauce)</li>
                        <li>• Processed "low-fat" foods</li>
                        <li>• Most restaurant meals (hidden sugar/starch)</li>
                        <li>• Alcoholic mixed drinks (beer, sweet cocktails)</li>
                        <li>• "Healthy" smoothies and protein bars</li>
                        <li>• Always read nutrition labels!</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Keto Flu */}
              <Card className="border-yellow-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Zap className="w-6 h-6 text-yellow-600 mr-3" />
                    <CardTitle className="text-yellow-700">Avoiding & Managing Keto Flu</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Days 2-7 of keto, many experience "keto flu" - fatigue, headaches, irritability, brain fog. This is your
                    body transitioning from glucose to fat burning. It's temporary and preventable with proper electrolytes.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-yellow-800">Key Electrolytes:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Sodium:</strong> 5,000mg+ daily (salt food)</li>
                        <li>• <strong>Potassium:</strong> 1,000-3,500mg (avocado, spinach)</li>
                        <li>• <strong>Magnesium:</strong> 300-500mg (supplement)</li>
                        <li>• Drink bone broth or pickle juice</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-yellow-800">Keto Flu Symptoms:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Fatigue and weakness</li>
                        <li>• Headaches</li>
                        <li>• Irritability, brain fog</li>
                        <li>• Muscle cramps</li>
                        <li>• Nausea</li>
                        <li>• Constipation</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-yellow-800">Prevention Tips:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Salt everything generously</li>
                        <li>• Drink 2-3 liters water daily</li>
                        <li>• Take magnesium supplement</li>
                        <li>• Ease into keto gradually</li>
                        <li>• Get adequate sleep</li>
                        <li>• Symptoms gone in 3-7 days</li>
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
      <section id="meal-plans" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Keto Meal Plan (1,800-2,000 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              This meal plan provides approximately 25g net carbs, 140g fat, and 100g protein daily for ketosis.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-orange-200">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-800">Day 1 - Monday</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Breakfast (9:00 AM):</h5>
                      <p className="text-gray-700">Scrambled eggs (3) cooked in butter, bacon (3 strips), avocado (1/2), coffee with heavy cream</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~550 | Fat: 48g | Protein: 28g | Net Carbs: 4g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                      <p className="text-gray-700">Grilled chicken thighs with skin (200g), Caesar salad with romaine, parmesan, full-fat dressing (no croutons), olive oil drizzle</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~620 | Fat: 48g | Protein: 42g | Net Carbs: 6g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Snack (4:00 PM - if needed):</h5>
                      <p className="text-gray-700">Macadamia nuts (1 oz), cheese cubes (1 oz)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~280 | Fat: 26g | Protein: 8g | Net Carbs: 2g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                      <p className="text-gray-700">Ribeye steak (6 oz), roasted broccoli with butter and garlic, side salad with olive oil and vinegar</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~580 | Fat: 42g | Protein: 44g | Net Carbs: 8g</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <p className="text-sm font-semibold text-orange-700">Daily Total: ~2,030 calories | Fat: 164g (73%) | Protein: 122g (24%) | Net Carbs: 20g (4%)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Day 2-7 Summary */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Days 2-7 Meal Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-3">Breakfast Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Keto omelet with cheese, mushrooms, spinach</li>
                        <li>• Bulletproof coffee (coffee + butter + MCT oil)</li>
                        <li>• Full-fat Greek yogurt with nuts and seeds</li>
                        <li>• Leftover dinner (skip breakfast/intermittent fast)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Lunch Ideas:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Bunless burger with cheese, avocado, bacon</li>
                        <li>• Salmon with asparagus and hollandaise sauce</li>
                        <li>• Chicken Caesar salad (no croutons)</li>
                        <li>• Tuna salad lettuce wraps with mayo</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Dinner Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Pork chops with cauliflower mash and butter</li>
                        <li>• Zucchini noodles with meatballs and alfredo</li>
                        <li>• Lamb curry with cauliflower rice</li>
                        <li>• Baked chicken thighs with Brussels sprouts</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Keto Snacks:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Hard-boiled eggs with mayo</li>
                        <li>• Cheese crisps or cheese sticks</li>
                        <li>• Pork rinds with guacamole</li>
                        <li>• Fat bombs (coconut oil, cocoa, nuts)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Keto Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Keto Diet Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Keys to Keto Success:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track macros initially:</strong> Use app like MyFitnessPal to stay under 25g carbs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Salt generously:</strong> Prevents keto flu and maintains electrolytes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Meal prep:</strong> Prepare keto meals to avoid carb temptations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Drink lots of water:</strong> 2-3 liters daily, more when active</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Be patient:</strong> Takes 2-4 weeks to become fully fat-adapted</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Keto Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much protein:</strong> Excess converts to glucose, kicks out of ketosis</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not enough fat:</strong> Need fat for energy and satiety on keto</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Hidden carbs:</strong> Sauces, dressings, and processed foods add up</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Cheat days:</strong> Kicks you out of ketosis, takes days to get back</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not supplementing electrolytes:</strong> Causes keto flu symptoms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-700 to-red-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Keto Transformation
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Diet is crucial, but proper exercise accelerates fat loss, preserves muscle, and enhances the benefits
              of ketosis. Get your complete keto workout plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Keto Workout Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover effective workouts optimized for keto dieters to maximize fat burning and maintain muscle mass.
                </p>
                <Button size="lg" className="w-full bg-white text-orange-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/keto">
                    View Keto Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Flame className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized keto meal plan tailored to your weight loss goals and preferences.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Meal Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands achieving rapid fat loss and metabolic transformation through keto
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
