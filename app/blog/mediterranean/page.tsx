import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Sparkles, Leaf } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "Mediterranean Diet Plan | Complete Guide to Heart-Healthy Eating",
  description: "Complete Mediterranean diet guide with meal plans, health benefits, heart disease prevention, weight loss strategies, and authentic Mediterranean cuisine for longevity.",
  keywords: "mediterranean diet, mediterranean meal plan, heart healthy diet, mediterranean diet benefits, mediterranean diet recipes, longevity diet, olive oil diet",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/mediterranean",
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
    title: "Mediterranean Diet Plan | Complete Heart-Healthy Guide",
    description: "Evidence-based Mediterranean diet with meal plans and longevity benefits.",
    url: "https://www.fitplanindia.com/blog/mediterranean",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function MediterraneanDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ArticleSchema
        headline="Mediterranean Diet Plan | Complete Guide to Heart-Healthy Eating"
        description="Complete Mediterranean diet guide with meal plans, health benefits, heart disease prevention, weight loss strategies, and authentic Mediterranean cuisine for longevity."
        keywords={["mediterranean diet", "mediterranean meal plan", "heart healthy diet", "mediterranean diet benefits", "mediterranean diet recipes", "longevity diet", "olive oil diet"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🌿 Mediterranean Diet Answer Engine
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm font-serif">
              Why is the Mediterranean Diet Consistently Ranked the #1 Healthiest Diet in the World?
            </h1>
            <p className="text-xl text-white mb-8 border-l-4 border-emerald-300 pl-4 text-left bg-white/10 p-4 rounded-r-lg shadow-md leading-relaxed">
              <strong>The Short Answer:</strong> The Mediterranean Diet is ranked #1 because decades of clinical research prove it dramatically reduces the risk of heart disease (by 30%), type 2 diabetes, and cognitive decline, all without restrictive calorie counting. Its potent health benefits come from its high concentration of anti-inflammatory antioxidants, fiber, and heart-healthy monounsaturated fats found in its foundation of extra virgin olive oil, fresh vegetables, whole grains, and fatty fish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="#benefits">
                  Health Benefits
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
                <div className="text-3xl font-bold text-emerald-600 mb-2">#1</div>
                <div className="text-gray-600">Best Diet by US News</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">30%</div>
                <div className="text-gray-600">Lower Heart Disease Risk</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
                <div className="text-gray-600">Lower Type 2 Diabetes Risk</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">Longevity</div>
                <div className="text-gray-600">Increases Lifespan</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">How Do Olive Oil and Omega-3s Actually Protect Your Heart?</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Mediterranean diet is inspired by traditional eating patterns of countries bordering the Mediterranean
                Sea (Greece, Italy, Spain, southern France). It's not a "diet" in the restrictive sense - it's a lifestyle
                emphasizing whole, plant-based foods, healthy fats (especially olive oil), seafood, moderate wine consumption,
                and minimal processed foods. Decades of research prove it reduces heart disease by 30%, lowers diabetes risk
                by 25%, supports healthy weight loss, prevents cognitive decline, reduces inflammation, and promotes longevity.
                Unlike fad diets, the Mediterranean diet is sustainable, delicious, and supported by the world's leading health
                organizations including the American Heart Association and World Health Organization.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-emerald-800">Core Mediterranean Diet Principles</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Olive oil:</strong> Primary fat source (extra virgin)</li>
                    <li>• <strong>Vegetables:</strong> 7-10 servings daily, all colors</li>
                    <li>• <strong>Whole grains:</strong> Brown rice, whole wheat, farro</li>
                    <li>• <strong>Fish/seafood:</strong> 2-3 times per week</li>
                    <li>• <strong>Legumes:</strong> Beans, lentils, chickpeas frequently</li>
                    <li>• <strong>Moderate wine:</strong> 1 glass daily (optional)</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-teal-800">What Makes It So Healthy</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• High in antioxidants (prevents cell damage)</li>
                    <li>• Heart-healthy monounsaturated fats (olive oil)</li>
                    <li>• Omega-3 fatty acids (fish, reduces inflammation)</li>
                    <li>• High fiber (gut health, blood sugar control)</li>
                    <li>• Low processed foods (reduces disease risk)</li>
                    <li>• Anti-inflammatory properties throughout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Proven Health Benefits of Mediterranean Diet</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Heart className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">Heart Disease Prevention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 30% lower risk of heart disease and stroke</li>
                    <li>• Reduces LDL (bad) cholesterol</li>
                    <li>• Increases HDL (good) cholesterol</li>
                    <li>• Lowers blood pressure naturally</li>
                    <li>• Reduces arterial plaque buildup</li>
                    <li>• Olive oil and fish = heart protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Target className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Type 2 Diabetes Prevention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 25% lower risk of developing diabetes</li>
                    <li>• Improves insulin sensitivity</li>
                    <li>• Stabilizes blood sugar levels</li>
                    <li>• High fiber slows glucose absorption</li>
                    <li>• Healthy fats improve metabolism</li>
                    <li>• Weight loss supports diabetes prevention</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">Brain Health & Longevity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Reduces Alzheimer's risk by 40%</li>
                    <li>• Slows cognitive decline with aging</li>
                    <li>• Omega-3s support brain function</li>
                    <li>• Antioxidants protect brain cells</li>
                    <li>• Associated with increased lifespan</li>
                    <li>• Improves memory and focus</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">Weight Loss & Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Sustainable weight loss (no deprivation)</li>
                    <li>• High satiety from healthy fats and fiber</li>
                    <li>• Prevents weight regain long-term</li>
                    <li>• Reduces belly fat specifically</li>
                    <li>• No calorie counting required</li>
                    <li>• Enjoyable, not restrictive</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Food Pyramid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Mediterranean Diet Food Guide</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Eat Daily or Most Meals:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Vegetables (Unlimited):</h5>
                    <p className="text-sm text-gray-700">
                      Tomatoes, leafy greens, broccoli, peppers, eggplant, zucchini, cucumbers, onions, garlic.
                      Aim for 7-10 servings daily, all colors.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Fruits (2-3 servings daily):</h5>
                    <p className="text-sm text-gray-700">
                      Apples, oranges, berries, grapes, figs, dates, melons. Preferably whole, not juice.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Whole Grains (3-4 servings):</h5>
                    <p className="text-sm text-gray-700">
                      Whole wheat bread, brown rice, farro, barley, whole grain pasta, oats, quinoa.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Olive Oil (Primary Fat):</h5>
                    <p className="text-sm text-gray-700">
                      Extra virgin olive oil for cooking, dressing, dipping. 3-5 tablespoons daily. Rich in monounsaturated fats.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Legumes (Several times weekly):</h5>
                    <p className="text-sm text-gray-700">
                      Chickpeas, lentils, white beans, black beans, split peas. Protein and fiber powerhouses.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-700">📊 Eat Regularly (Weekly):</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Fish & Seafood (2-3x weekly):</h5>
                    <p className="text-sm text-gray-700">
                      Salmon, sardines, mackerel, tuna, sea bass, shrimp, mussels. Omega-3 fatty acids for heart and brain.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Poultry (2-3x weekly):</h5>
                    <p className="text-sm text-gray-700">
                      Chicken, turkey. Moderate portions, not daily.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Eggs (2-4x weekly):</h5>
                    <p className="text-sm text-gray-700">
                      Whole eggs, any preparation. Good protein source.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Dairy (Moderate):</h5>
                    <p className="text-sm text-gray-700">
                      Greek yogurt, feta cheese, parmesan. Fermented dairy preferred.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Nuts & Seeds (Daily handful):</h5>
                    <p className="text-sm text-gray-700">
                      Almonds, walnuts, pistachios, pine nuts, sesame seeds. Healthy fats and protein.
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-lg mb-4 text-red-700">❌ Limit or Avoid:</h4>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Red meat:</strong> Only few times per month</li>
                      <li>• <strong>Processed meats:</strong> Bacon, sausage, deli meats</li>
                      <li>• <strong>Refined grains:</strong> White bread, white pasta</li>
                      <li>• <strong>Added sugars:</strong> Candy, sodas, desserts</li>
                      <li>• <strong>Processed foods:</strong> Chips, fast food</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Meal Plan */}
      <section id="meal-plans" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Mediterranean Diet Meal Plan (2,000 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Authentic Mediterranean eating with delicious, heart-healthy meals.
            </p>

            <Card className="border-emerald-200 mb-8">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="text-emerald-800">Sample Day - Mediterranean Diet</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:30 AM):</h5>
                    <p className="text-gray-700">Greek yogurt (1 cup) with honey, walnuts, fresh berries, whole grain toast with olive oil and tomatoes</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~420 | Protein: 22g | Mediterranean classic</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM):</h5>
                    <p className="text-gray-700">Apple with 1 oz almonds, herbal tea</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~220 | Healthy fats and fiber</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                    <p className="text-gray-700">Mediterranean salad (mixed greens, cucumber, tomatoes, olives, feta), grilled chicken, chickpeas, olive oil and lemon dressing, whole grain pita</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~580 | Protein: 38g | Colorful and filling</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h5>
                    <p className="text-gray-700">Hummus (1/4 cup) with carrot and cucumber sticks, whole grain crackers</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~180 | Plant-based protein</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                    <p className="text-gray-700">Baked salmon with herbs and lemon, roasted vegetables (zucchini, peppers, eggplant) with olive oil, farro or brown rice, side salad</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~620 | Protein: 42g | Omega-3 rich</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Optional Evening (9:00 PM):</h5>
                    <p className="text-gray-700">Small glass of red wine (5 oz) or herbal tea with 2 dates</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~120 | Mediterranean tradition (optional)</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-200">
                  <p className="text-sm font-semibold text-emerald-700">Daily Total: ~2,140 calories | Protein: 102g | Heart-healthy fats | Rich in antioxidants</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Weekly Mediterranean Variety</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Mediterranean Breakfast Ideas:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Greek yogurt parfait with fruit and nuts</li>
                      <li>• Whole grain toast with avocado and egg</li>
                      <li>• Oatmeal with dried figs and almonds</li>
                      <li>• Vegetable omelet with feta cheese</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Lunch Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Lentil soup with whole grain bread</li>
                      <li>• Chickpea and vegetable stew</li>
                      <li>• Tuna salad with white beans</li>
                      <li>• Grilled fish with quinoa tabbouleh</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Dinner Ideas:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Baked white fish with vegetables</li>
                      <li>• Chicken souvlaki with Greek salad</li>
                      <li>• Eggplant parmesan (light version)</li>
                      <li>• Shrimp with whole grain pasta and tomatoes</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Mediterranean Snacks:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Fresh fruit with nuts</li>
                      <li>• Olives and whole grain crackers</li>
                      <li>• Tzatziki with vegetables</li>
                      <li>• Dried figs or dates</li>
                    </ul>
                  </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mediterranean Diet Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Use extra virgin olive oil:</strong> Primary cooking fat and dressing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat fish 2-3x weekly:</strong> Omega-3s are key to heart benefits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Fill half plate with vegetables:</strong> Foundation of every meal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Enjoy meals socially:</strong> Mediterranean lifestyle, not just food</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Choose whole grains:</strong> Brown rice, whole wheat, farro over refined</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Using regular olive oil:</strong> Extra virgin has most health benefits</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much pasta:</strong> Portion control matters, even whole grain</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eating red meat often:</strong> Should be few times monthly, not weekly</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping vegetables:</strong> They're the foundation, not optional</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Adding processed foods:</strong> Defeats the whole-food philosophy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Start Your Mediterranean Lifestyle Today
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              The Mediterranean diet is a complete lifestyle. Pair your heart-healthy nutrition with regular
              physical activity for maximum health benefits and longevity.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Exercise Guidance</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover workout plans that complement the Mediterranean lifestyle for complete health.
                </p>
                <Button size="lg" className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/mediterranean">
                    View Workouts
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Leaf className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized Mediterranean diet plan tailored to your preferences.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join millions worldwide enjoying the world's healthiest diet for longevity and vitality
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
