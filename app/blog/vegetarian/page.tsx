import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Leaf, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vegetarian Diet Plan | Complete Plant-Based Nutrition Guide",
  description: "Complete vegetarian diet guide with balanced meal plans, protein sources, nutrient optimization, weight loss strategies, and muscle building for vegetarians and plant-based eaters.",
  keywords: "vegetarian diet plan, vegetarian meal plan, vegetarian protein sources, plant-based diet, vegetarian weight loss, vegetarian nutrition, high protein vegetarian diet",
  openGraph: {
    title: "Vegetarian Diet Plan | Complete Plant-Based Nutrition Guide",
    description: "Science-backed vegetarian diet with meal plans, protein optimization, and complete nutrition strategies.",
    url: "https://fitplanindia.com/blog/vegetarian",
  },
  alternates: {
    canonical: "/plans/vegetarian",
  },
}

export default function VegetarianDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-green-700 font-semibold">
              🌱 Complete Vegetarian Nutrition Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Vegetarian Diet Plan: Complete Plant-Based Nutrition
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover balanced vegetarian nutrition strategies for optimal health, muscle building, weight management,
              athletic performance, and ensuring complete nutrition without meat or fish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/vegetarian">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Vegetarian Workouts
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
                <div className="text-3xl font-bold text-green-600 mb-2">0.8-1g/lb</div>
                <div className="text-gray-600">Protein Per Pound Body Weight</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">9 Essential</div>
                <div className="text-gray-600">Amino Acids from Plants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">B12</div>
                <div className="text-gray-600">Must Supplement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">25-35g</div>
                <div className="text-gray-600">Daily Fiber Intake</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Vegetarian Nutrition</h2>
              <p className="text-lg text-gray-700 mb-6">
                A well-planned vegetarian diet can provide all essential nutrients for optimal health, fitness, and
                performance. Vegetarians exclude meat, poultry, and fish but include dairy and eggs (lacto-ovo vegetarian).
                The key to success is understanding complete protein sources, ensuring adequate iron and B12, getting enough
                calcium and omega-3s, and meeting calorie needs for your goals. Research shows vegetarians have lower risk
                of heart disease, certain cancers, type 2 diabetes, and obesity when following a balanced whole-foods approach.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-green-800">Benefits of Vegetarian Diet</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Lower risk of heart disease and high cholesterol</li>
                    <li>• Reduced cancer risk (colorectal, prostate)</li>
                    <li>• Better weight management and lower BMI</li>
                    <li>• Improved gut health and digestion</li>
                    <li>• Lower environmental impact</li>
                    <li>• Cost-effective compared to meat-based diets</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-emerald-800">Key Nutritional Focus Areas</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Protein:</strong> Combine plant sources for complete amino acids</li>
                    <li>• <strong>Vitamin B12:</strong> Supplement required (not in plants)</li>
                    <li>• <strong>Iron:</strong> Plant iron + vitamin C for absorption</li>
                    <li>• <strong>Omega-3:</strong> Flax, chia, walnuts, algae supplements</li>
                    <li>• <strong>Calcium:</strong> Dairy or fortified plant milks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vegetarian Diet Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Vegetarian Diet Principles for Complete Nutrition</h2>

            <div className="space-y-8">
              {/* Complete Protein */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Leaf className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">Complete Protein from Plant Sources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-green-600 mr-2" />
                      <span><strong>0.8-1g per lb body weight</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-emerald-600 mr-2" />
                      <span><strong>Combine sources daily</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Sparkles className="w-5 h-5 text-teal-600 mr-2" />
                      <span><strong>9 essential amino acids</strong></span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Protein is made of amino acids - 9 are "essential" (must come from food). Animal proteins are "complete"
                    (contain all 9), but most plant proteins are "incomplete" (missing 1-2). Solution: Eat variety of plant
                    proteins daily - they complement each other. Legumes + grains = complete protein!
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Complete Plant Proteins:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Quinoa</strong> (8g per cup cooked)</li>
                        <li>• <strong>Soy</strong> (tofu, tempeh, edamame)</li>
                        <li>• <strong>Buckwheat</strong> (complete grain)</li>
                        <li>• <strong>Hemp seeds</strong> (10g per 3 tbsp)</li>
                        <li>• <strong>Spirulina</strong> (superfood)</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Protein-Rich Vegetarian Foods:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Greek yogurt</strong> (20g per cup)</li>
                        <li>• <strong>Cottage cheese</strong> (25g per cup)</li>
                        <li>• <strong>Eggs</strong> (6g per egg)</li>
                        <li>• <strong>Lentils</strong> (18g per cup cooked)</li>
                        <li>• <strong>Chickpeas</strong> (15g per cup)</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Complete Protein Combos:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Rice + beans/lentils</li>
                        <li>• Hummus + whole wheat pita</li>
                        <li>• Peanut butter + whole grain bread</li>
                        <li>• Oats + nut butter + seeds</li>
                        <li>• Pasta + beans in sauce</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Critical Nutrients */}
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-700">Critical Nutrients Requiring Attention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Certain nutrients are harder to get from vegetarian diets. Pay special attention to these to avoid
                    deficiencies that can affect energy, mood, and long-term health.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-red-700">⚠️ Must Supplement:</h5>
                      <div className="space-y-3">
                        <div className="bg-red-50 p-3 rounded">
                          <p className="text-sm font-semibold text-gray-800">Vitamin B12 (Critical!)</p>
                          <p className="text-xs text-gray-600">NOT found in plants. Take 250-500mcg daily or eat fortified foods. Deficiency causes fatigue, nerve damage.</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-yellow-700">⚡ Optimize Absorption:</h5>
                      <div className="space-y-3">
                        <div className="bg-yellow-50 p-3 rounded">
                          <p className="text-sm font-semibold text-gray-800">Iron (Non-Heme)</p>
                          <p className="text-xs text-gray-600">Plant iron absorbed less efficiently. Eat with vitamin C (citrus, tomatoes). Avoid tea/coffee with meals. Sources: lentils, spinach, fortified cereals.</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded">
                          <p className="text-sm font-semibold text-gray-800">Omega-3 (ALA to EPA/DHA)</p>
                          <p className="text-xs text-gray-600">Body converts plant omega-3 (ALA) to EPA/DHA inefficiently. Eat flax, chia, walnuts daily. Consider algae-based DHA supplement.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid md:grid-cols-3 gap-3">
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-semibold text-gray-800">Zinc</p>
                      <p className="text-xs text-gray-600">Pumpkin seeds, cashews, chickpeas, oats</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-semibold text-gray-800">Calcium</p>
                      <p className="text-xs text-gray-600">Dairy, fortified plant milks, tofu, leafy greens</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-semibold text-gray-800">Vitamin D</p>
                      <p className="text-xs text-gray-600">Sunlight, fortified foods, supplement if needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Balanced Macros */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Utensils className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Balanced Macronutrient Distribution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Vegetarian diets naturally tend toward higher carbs due to grains, legumes, and fruits. Balance with
                    adequate protein and healthy fats for satiety, muscle maintenance, and hormone health.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Protein: 20-30%</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Eggs, dairy, Greek yogurt</li>
                        <li>• Tofu, tempeh, seitan</li>
                        <li>• Legumes (lentils, beans, chickpeas)</li>
                        <li>• Protein powder (pea, soy, hemp)</li>
                        <li>• Nuts, seeds, nut butters</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Carbs: 45-55%</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Whole grains (quinoa, brown rice, oats)</li>
                        <li>• Legumes (dual protein/carb source)</li>
                        <li>• Fruits (berries, bananas, apples)</li>
                        <li>• Starchy vegetables (sweet potato)</li>
                        <li>• Non-starchy vegetables (unlimited)</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-orange-800">Fats: 25-35%</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Avocados, olive oil, coconut oil</li>
                        <li>• Nuts (almonds, walnuts, cashews)</li>
                        <li>• Seeds (chia, flax, hemp, pumpkin)</li>
                        <li>• Nut butters (natural, no added sugar)</li>
                        <li>• Full-fat dairy if included</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day High-Protein Vegetarian Meal Plan (2,000-2,200 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              This meal plan provides 100-120g protein daily from plant and dairy sources for muscle building and satiety.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800">Day 1 - Monday</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Breakfast (8:00 AM):</h5>
                      <p className="text-gray-700">Greek yogurt (1.5 cups) with granola, mixed berries, chia seeds (1 tbsp), walnuts (6 halves)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~480 | Protein: 30g | Complete protein + omega-3s</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (11:00 AM):</h5>
                      <p className="text-gray-700">Protein smoothie (banana, spinach, pea protein powder, almond milk, peanut butter)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~320 | Protein: 25g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:30 PM):</h5>
                      <p className="text-gray-700">Buddha bowl: Quinoa (1 cup), chickpeas (1 cup), roasted vegetables, avocado (1/4), tahini dressing, mixed greens</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~580 | Protein: 24g | Complete protein from quinoa + chickpeas</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:30 PM):</h5>
                      <p className="text-gray-700">Hummus (1/3 cup) with whole grain crackers and cucumber slices</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~220 | Protein: 8g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:30 PM):</h5>
                      <p className="text-gray-700">Tofu stir-fry (200g firm tofu), mixed vegetables, brown rice (3/4 cup), sesame oil, soy sauce, ginger-garlic</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~520 | Protein: 28g | Complete soy protein</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <p className="text-sm font-semibold text-green-700">Daily Total: ~2,120 calories | Protein: 115g | Complete amino acids ✓ | B12: Fortified foods + supplement</p>
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
                      <h5 className="font-semibold mb-3">Breakfast Variations:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Scrambled eggs with spinach, whole grain toast</li>
                        <li>• Oatmeal with protein powder, nuts, berries</li>
                        <li>• Cottage cheese pancakes with fruit</li>
                        <li>• Tofu scramble with vegetables</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Lunch Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Lentil dal with brown rice and vegetables</li>
                        <li>• Black bean burrito bowl with cheese</li>
                        <li>• Paneer tikka with quinoa and salad</li>
                        <li>• Veggie burger with sweet potato fries</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Dinner Ideas:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Tempeh tacos with black beans and guacamole</li>
                        <li>• Vegetable lasagna with ricotta</li>
                        <li>• Chickpea curry with brown rice</li>
                        <li>• Grilled paneer with roasted vegetables</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">High-Protein Snacks:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Hard-boiled eggs with everything bagel seasoning</li>
                        <li>• Edamame with sea salt</li>
                        <li>• Trail mix (nuts, seeds, dried fruit)</li>
                        <li>• Greek yogurt with honey</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Foods to Eat vs Avoid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Vegetarian Diet: Foods to Prioritize vs Limit</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Nutrient-Dense Vegetarian Foods:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">High-Protein Plant Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Legumes: lentils, chickpeas, black beans, kidney beans</li>
                      <li>• Soy: tofu, tempeh, edamame, soy milk</li>
                      <li>• Seitan (wheat protein - 25g per 100g)</li>
                      <li>• Greek yogurt, cottage cheese, paneer</li>
                      <li>• Eggs (whole and whites)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Whole Grains & Seeds:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Quinoa (complete protein grain)</li>
                      <li>• Brown rice, oats, barley, buckwheat</li>
                      <li>• Chia seeds, flax seeds, hemp seeds</li>
                      <li>• Pumpkin seeds, sunflower seeds</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Healthy Fats & Vegetables:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Avocados, nuts (almonds, walnuts), nut butters</li>
                      <li>• Olive oil, coconut oil for cooking</li>
                      <li>• All vegetables (especially dark leafy greens)</li>
                      <li>• Fruits (berries, citrus, bananas)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Limit These Vegetarian Foods:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Processed Vegetarian Junk:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Heavily processed meat substitutes (high sodium)</li>
                      <li>• Sugary breakfast cereals</li>
                      <li>• Chips, crackers, packaged snacks</li>
                      <li>• Candy, cookies, pastries</li>
                      <li>• Fried foods (pakoras, samosas - deep-fried)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Refined Carbs & Sugars:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• White bread, white rice, white pasta</li>
                      <li>• Sugary drinks (soda, sweetened tea)</li>
                      <li>• Excessive sweets and desserts</li>
                      <li>• Sweetened yogurts (high sugar)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Low-Nutrient Vegetarian Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cheese-heavy dishes (high calories, low nutrients)</li>
                      <li>• Cream-based sauces and gravies</li>
                      <li>• Excessive fried snacks</li>
                      <li>• "Junk food vegetarian" patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Supplements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Vegetarian Supplements</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-red-200">
                <CardContent className="pt-6">
                  <AlertCircle className="w-8 h-8 text-red-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Vitamin B12 (Must Have)</h4>
                  <p className="text-sm text-gray-700 mb-2">NOT found in plants. Critical for nerves, blood, energy</p>
                  <p className="text-xs text-red-600 font-semibold">Dose: 250-500mcg daily or weekly 2,500mcg</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Omega-3 DHA/EPA</h4>
                  <p className="text-sm text-gray-700 mb-2">Algae-based supplement if not eating fish</p>
                  <p className="text-xs text-blue-600 font-semibold">Dose: 250-500mg DHA+EPA daily</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Vitamin D</h4>
                  <p className="text-sm text-gray-700 mb-2">If limited sun exposure or blood test shows deficiency</p>
                  <p className="text-xs text-purple-600 font-semibold">Dose: 1,000-2,000 IU daily</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Iron and zinc from plants are absorbed less efficiently. If blood tests show deficiency,
                supplement under doctor's guidance. Most vegetarians get enough from food with proper planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vegetarian Diet Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat protein at every meal:</strong> Ensures adequate intake throughout day</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Combine plant proteins:</strong> Grains + legumes = complete protein</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Take B12 supplement:</strong> Non-negotiable for vegetarians</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Pair iron with vitamin C:</strong> Improves absorption significantly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Focus on whole foods:</strong> Not just "junk food vegetarian"</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not supplementing B12:</strong> Leads to serious deficiency over time</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much processed food:</strong> Vegetarian doesn't automatically mean healthy</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring protein variety:</strong> Need different sources for complete nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Relying on cheese:</strong> High in calories and saturated fat</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Forgetting omega-3s:</strong> Plant sources alone may not be enough</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Vegetarian Fitness Journey
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Proper nutrition is essential, but combining it with effective exercise maximizes muscle growth,
              athletic performance, and overall health. Get your complete vegetarian fitness plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Vegetarian Workout Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover effective workouts for building muscle, improving performance, and staying fit on a vegetarian diet.
                </p>
                <Button size="lg" className="w-full bg-white text-green-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/vegetarian">
                    View Vegetarian Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Leaf className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized vegetarian nutrition plan tailored to your goals and preferences.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Meal Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands thriving on plant-based nutrition with complete, balanced diets
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
