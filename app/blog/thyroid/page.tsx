import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"
import ScientificRefs from "@/components/ScientificRefs"
import ExpertNote from "@/components/ExpertNote"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thyroid Diet Plan | Best Foods for Hypothyroidism & Hyperthyroidism",
  description: "Complete thyroid diet guide with meal plans for hypothyroidism and hyperthyroidism, foods to eat and avoid, iodine balance, and strategies to manage thyroid symptoms naturally.",
  keywords: "thyroid diet, hypothyroidism diet, hyperthyroidism diet, thyroid weight loss, foods for thyroid, thyroid meal plan, underactive thyroid diet, overactive thyroid diet",
  openGraph: {
    title: "Thyroid Diet Plan | Complete Nutrition Guide for Thyroid Health",
    description: "Science-backed thyroid diet with meal plans, symptom management, and thyroid-friendly foods.",
    url: "https://fitplanindia.com/blog/thyroid",
  },
  alternates: {
    canonical: "/plans/thyroid",
  },
}

export default function ThyroidDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-cyan-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-teal-700 font-semibold">
              🦋 Complete Thyroid Nutrition Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Thyroid Diet Plan: Nutrition for Optimal Thyroid Function
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover evidence-based nutrition strategies to support thyroid health, manage hypothyroidism and
              hyperthyroidism symptoms, optimize medication effectiveness, and achieve healthy weight management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/thyroid">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Thyroid Workouts
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
                <div className="text-3xl font-bold text-teal-600 mb-2">150mcg</div>
                <div className="text-gray-600">Daily Iodine Requirement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">55mcg</div>
                <div className="text-gray-600">Daily Selenium Needed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1-2 lbs</div>
                <div className="text-gray-600">Safe Weekly Weight Loss</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4-6 Weeks</div>
                <div className="text-gray-600">For Dietary Changes to Show</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Thyroid Disorders and Diet</h2>
              <p className="text-lg text-gray-700 mb-6">
                The thyroid gland is a small butterfly-shaped organ in your neck that produces hormones regulating
                metabolism, energy, body temperature, and weight. Thyroid disorders affect millions worldwide, with
                hypothyroidism (underactive thyroid) being most common, causing fatigue, weight gain, cold sensitivity,
                and sluggish metabolism. Hyperthyroidism (overactive thyroid) causes rapid metabolism, weight loss, anxiety,
                and heat intolerance. While diet cannot cure thyroid disease, proper nutrition significantly impacts thyroid
                function, medication effectiveness, symptom management, and overall quality of life.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-teal-800">Hypothyroidism (Underactive) Symptoms</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Unexplained weight gain despite healthy eating</li>
                    <li>• Chronic fatigue and low energy</li>
                    <li>• Feeling cold all the time</li>
                    <li>• Hair loss, dry skin, brittle nails</li>
                    <li>• Depression, brain fog, poor memory</li>
                    <li>• Constipation and digestive issues</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-cyan-800">How Diet Supports Thyroid Health</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Provides nutrients for hormone production</li>
                    <li>• Supports conversion of T4 to active T3</li>
                    <li>• Reduces inflammation affecting thyroid</li>
                    <li>• Optimizes medication absorption and effectiveness</li>
                    <li>• Manages weight despite slower metabolism</li>
                    <li>• Improves energy and reduces symptoms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thyroid Diet Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Thyroid Diet Principles for Optimal Function</h2>

            <div className="space-y-8">
              {/* Essential Nutrients */}
              <Card className="border-teal-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Shield className="w-6 h-6 text-teal-600 mr-3" />
                    <CardTitle className="text-teal-700">Essential Nutrients for Thyroid Function</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-teal-600 mr-2" />
                      <span><strong>Iodine: Building Block</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-cyan-600 mr-2" />
                      <span><strong>Selenium: Conversion</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-blue-600 mr-2" />
                      <span><strong>Zinc: Regulation</strong></span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Your thyroid needs specific nutrients to produce and convert hormones. Iodine is the raw material
                    for thyroid hormone production. Selenium helps convert inactive T4 to active T3. Zinc, iron, and
                    vitamins B and D support thyroid function and metabolism.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-teal-800">Iodine Sources (150mcg/day):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Iodized salt (use moderately)</li>
                        <li>• Seaweed, nori (small amounts)</li>
                        <li>• Fish (cod, tuna)</li>
                        <li>• Eggs, dairy products</li>
                        <li>• ⚠️ Don't overdo - excess harmful</li>
                      </ul>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-cyan-800">Selenium Sources (55mcg/day):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Brazil nuts (2-3 daily = enough)</li>
                        <li>• Tuna, sardines, salmon</li>
                        <li>• Eggs, chicken</li>
                        <li>• Sunflower seeds</li>
                        <li>• Whole grains</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Other Key Nutrients:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Zinc:</strong> Shellfish, meat, seeds</li>
                        <li>• <strong>Iron:</strong> Red meat, spinach, beans</li>
                        <li>• <strong>Vitamin D:</strong> Sunlight, fortified foods</li>
                        <li>• <strong>B Vitamins:</strong> Whole grains, meat</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Goitrogens */}
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-700">Understanding Goitrogens (Not as Bad as You Think)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Goitrogens are compounds that can interfere with thyroid function by blocking iodine uptake. However,
                    the truth is: <strong>cooking largely deactivates goitrogens</strong>, and these foods are extremely
                    nutritious. Most people with hypothyroidism can eat them in moderation, especially when cooked. Only
                    avoid if you have severe iodine deficiency or your doctor specifically advises against them.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">✅ Goitrogenic Foods (Safe When Cooked):</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cruciferous vegetables: broccoli, cauliflower, cabbage</li>
                        <li>• Brussels sprouts, kale, bok choy</li>
                        <li>• Soy products (tempeh, tofu - moderate amounts)</li>
                        <li>• Millet (grain)</li>
                        <li>• <strong>Key:</strong> Eat cooked, not raw in large amounts</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-blue-700">💡 Smart Guidelines:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Cook vegetables - deactivates most goitrogens</li>
                        <li>• Moderate portions - not huge raw kale salads daily</li>
                        <li>• Vary your vegetables - don't eat only cruciferous</li>
                        <li>• Ensure adequate iodine intake</li>
                        <li>• Don't fear these nutritious foods unnecessarily</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Anti-Inflammatory Diet */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Salad className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">Anti-Inflammatory Diet for Autoimmune Thyroid</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Hashimoto's thyroiditis (autoimmune hypothyroidism) involves inflammation. An anti-inflammatory diet
                    can reduce antibodies, improve symptoms, and potentially reduce medication needs. Focus on whole foods,
                    omega-3s, antioxidants, and gut health while eliminating processed foods and common triggers.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Anti-Inflammatory Foods:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fatty fish (salmon, sardines - omega-3s)</li>
                        <li>• Colorful vegetables and fruits (antioxidants)</li>
                        <li>• Berries (blueberries, strawberries)</li>
                        <li>• Olive oil, avocados, nuts</li>
                        <li>• Turmeric, ginger, green tea</li>
                        <li>• Probiotic foods (yogurt, kefir, sauerkraut)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Potential Triggers to Limit:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Gluten (trial elimination if symptoms persist)</li>
                        <li>• Dairy (some people react, not all)</li>
                        <li>• Processed foods and added sugars</li>
                        <li>• Excess alcohol</li>
                        <li>• Trans fats and fried foods</li>
                        <li>• <strong>Note:</strong> Work with doctor to identify your triggers</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Thyroid-Friendly Meal Plan (1,600-1,800 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              This meal plan supports thyroid health with nutrient-dense foods while managing weight with hypothyroidism.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-teal-200">
                <CardHeader className="bg-teal-50">
                  <CardTitle className="text-teal-800">Day 1 - Monday</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Breakfast (8:00 AM - 1 hour after medication):</h5>
                      <p className="text-gray-700">Scrambled eggs (2) with spinach and tomatoes, whole grain toast (1 slice), 2-3 Brazil nuts, herbal tea</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~380 | Protein: 22g | Selenium: Daily requirement met</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (11:00 AM):</h5>
                      <p className="text-gray-700">Greek yogurt (1 cup) with berries and chia seeds (1 tbsp)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~200 | Protein: 18g | Probiotics for gut health</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                      <p className="text-gray-700">Baked salmon (150g) with roasted vegetables (broccoli, carrots - cooked), quinoa (1/2 cup), side salad with olive oil</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~520 | Protein: 42g | Omega-3s, iodine from fish</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h5>
                      <p className="text-gray-700">Apple slices with almond butter (1 tbsp), green tea</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~150 | Antioxidants from tea</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                      <p className="text-gray-700">Grilled chicken breast (120g), sweet potato (medium), steamed green beans with garlic, mixed greens salad</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~450 | Protein: 38g | Zinc from chicken</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-teal-200">
                    <p className="text-sm font-semibold text-teal-700">Daily Total: ~1,700 calories | Protein: 120g | Iodine: Adequate | Selenium: ✓ | Anti-inflammatory</p>
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
                        <li>• Oatmeal with walnuts and berries</li>
                        <li>• Veggie omelet with whole grain toast</li>
                        <li>• Smoothie (protein powder, spinach, banana)</li>
                        <li>• Greek yogurt parfait with granola</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Lunch Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Tuna salad with mixed greens</li>
                        <li>• Chicken and vegetable stir-fry</li>
                        <li>• Lentil soup with side salad</li>
                        <li>• Turkey wrap with vegetables</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Dinner Ideas:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Lean beef with roasted vegetables</li>
                        <li>• Baked cod with Brussels sprouts</li>
                        <li>• Turkey meatballs with zucchini noodles</li>
                        <li>• Chicken curry with cauliflower rice</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Thyroid-Friendly Snacks:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Hard-boiled eggs with sea salt</li>
                        <li>• Handful of mixed nuts</li>
                        <li>• Cottage cheese with cucumber</li>
                        <li>• Berries with coconut yogurt</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Thyroid Diet: Foods to Eat vs Avoid</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Foods for Thyroid:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Thyroid-Supporting Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fish (salmon, tuna, cod - iodine, selenium)</li>
                      <li>• Eggs (complete protein, selenium, iodine)</li>
                      <li>• Brazil nuts (selenium powerhouse - 2-3 daily)</li>
                      <li>• Chicken, turkey (lean protein, zinc)</li>
                      <li>• Greek yogurt (protein, probiotics, iodine)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Nutrient-Dense Vegetables:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Leafy greens (cooked spinach, chard)</li>
                      <li>• Cooked cruciferous (broccoli, cauliflower)</li>
                      <li>• Colorful vegetables (peppers, carrots, beets)</li>
                      <li>• Seaweed (small amounts for iodine)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Healthy Fats & Grains:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Olive oil, avocados, nuts</li>
                      <li>• Gluten-free whole grains (quinoa, brown rice)</li>
                      <li>• Seeds (chia, flax, sunflower)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Foods to Avoid or Limit:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Interfere with Medication:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Soy products (within 4 hours of medication)</li>
                      <li>• High-fiber foods (immediately with medication)</li>
                      <li>• Calcium/iron supplements (4 hours apart)</li>
                      <li>• Coffee (wait 1 hour after medication)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Inflammatory Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Processed foods and junk food</li>
                      <li>• Excess sugar and sugary drinks</li>
                      <li>• Trans fats and fried foods</li>
                      <li>• Excessive alcohol</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Individual Triggers (Test):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Gluten (if sensitive - not everyone)</li>
                      <li>• Dairy (some people react)</li>
                      <li>• Nightshades (peppers, tomatoes - rare)</li>
                      <li>• Work with doctor to identify your triggers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medication & Diet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Thyroid Medication & Diet Timing</h2>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-xl text-blue-900 mb-4">⏰ Critical Timing Rules for Medication:</h4>
              <ul className="text-gray-800 space-y-2">
                <li>• <strong>Take on empty stomach:</strong> 30-60 minutes before breakfast</li>
                <li>• <strong>Wait 1 hour:</strong> Before coffee (interferes with absorption)</li>
                <li>• <strong>Wait 4 hours:</strong> Before calcium, iron, or antacid supplements</li>
                <li>• <strong>Avoid within 4 hours:</strong> Soy products, high-fiber supplements</li>
                <li>• <strong>Be consistent:</strong> Take at same time daily for stable levels</li>
                <li>• <strong>Don't stop:</strong> Even if symptoms improve - lifelong therapy needed</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-teal-200">
                <CardContent className="pt-6">
                  <Coffee className="w-8 h-8 text-teal-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Morning Routine</h4>
                  <p className="text-sm text-gray-700 mb-2">6:00 AM - Take medication with water, 7:00 AM - Coffee/breakfast</p>
                  <p className="text-xs text-teal-600 font-semibold">Optimal absorption</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="pt-6">
                  <Shield className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Supplement Timing</h4>
                  <p className="text-sm text-gray-700 mb-2">Take calcium/iron at lunch or dinner, 4+ hours after medication</p>
                  <p className="text-xs text-blue-600 font-semibold">Prevents interaction</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Regular Monitoring</h4>
                  <p className="text-sm text-gray-700 mb-2">Check TSH levels every 6-12 weeks initially, then annually</p>
                  <p className="text-xs text-purple-600 font-semibold">Adjust dose as needed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Thyroid Diet Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Take medication correctly:</strong> Timing is everything for effectiveness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat Brazil nuts daily:</strong> 2-3 provides all selenium needed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Focus on whole foods:</strong> Nutrient-dense, anti-inflammatory diet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Be patient with weight loss:</strong> Slower metabolism requires consistency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Regular exercise:</strong> Helps manage weight despite thyroid issues</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Taking medication with food:</strong> Reduces absorption significantly</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eliminating all goitrogens:</strong> Unnecessarily restrictive, cook them</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Extreme calorie restriction:</strong> Slows metabolism further</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stopping medication:</strong> Because you "feel better" - dangerous</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Following fad diets:</strong> May worsen symptoms, work with doctor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-cyan-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Thyroid Management Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Diet is essential, but exercise significantly improves thyroid symptoms, metabolism, and weight management.
              Get your complete thyroid fitness plan today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Thyroid Workout Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover safe, effective exercises to boost metabolism, manage weight, and improve energy with thyroid disorders.
                </p>
                <Button size="lg" className="w-full bg-white text-teal-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/thyroid">
                    View Thyroid Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Shield className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized thyroid nutrition plan tailored to your specific condition and goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Meal Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands managing thyroid health naturally through proper nutrition and exercise
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-4xl">
        <ScientificRefs
          references={[
            { text: "Impact of Selenium on Thyroid Function (NIH)", url: "https://pubmed.ncbi.nlm.nih.gov/26361258/" },
            { text: "Goitrogens and Thyroid Health (Mayo Clinic)", url: "https://www.mayoclinic.org/diseases-conditions/hypothyroidism/expert-answers/hypothyroidism-diet/faq-20058554" },
            { text: "Effect of Ashwagandha on TSH Levels", url: "https://pubmed.ncbi.nlm.nih.gov/28829155/" }
          ]}
        />
      </div>
    </div>
  )
}
