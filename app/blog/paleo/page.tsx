import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Flame, Leaf } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Paleo Diet Plan | Complete Guide to Caveman Diet & Primal Eating",
  description: "Complete Paleo diet guide with meal plans, whole foods eating, grain-free nutrition, weight loss strategies, CrossFit paleo, and ancestral health principles.",
  keywords: "paleo diet, paleo meal plan, caveman diet, primal eating, grain free diet, paleo weight loss, paleo foods, paleo crossfit diet",
  openGraph: {
    title: "Paleo Diet Plan | Complete Guide to Primal Eating",
    description: "Evidence-based Paleo diet with meal plans and ancestral health principles.",
    url: "https://fitplanindia.com/blog/paleo",
  },
}

export default function PaleoDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-amber-700 font-semibold">
              🥩 Ancestral Eating Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Paleo Diet Plan: Eat Like Our Ancestors for Modern Health
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover the Paleo diet - eating whole, unprocessed foods like our Paleolithic ancestors. Learn meat, 
              vegetables, fruits, nuts approach with complete meal plans for weight loss, inflammation reduction, and optimal health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white border-2 border-white font-semibold" asChild>
                <Link href="#foods">
                  Paleo Food List
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
                <div className="text-3xl font-bold text-amber-700 mb-2">2.5M</div>
                <div className="text-gray-600">Years Eating This Way</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">No</div>
                <div className="text-gray-600">Grains, Dairy, Legumes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">High</div>
                <div className="text-gray-600">Protein & Healthy Fats</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">CrossFit</div>
                <div className="text-gray-600">Community Favorite</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the Paleo Diet Philosophy</h2>
              <p className="text-lg text-gray-700 mb-6">
                The Paleo diet (Paleolithic diet, Caveman diet, Primal eating) is based on eating foods available to our 
                hunter-gatherer ancestors before agriculture developed 10,000 years ago. The premise: our bodies are genetically 
                adapted to pre-agricultural foods, and modern processed foods, grains, dairy, and legumes cause inflammation, 
                weight gain, and chronic disease. Paleo emphasizes meat, fish, eggs, vegetables, fruits, nuts, and seeds while 
                eliminating grains (wheat, rice, corn), legumes (beans, peanuts, soy), dairy, refined sugar, and processed foods. 
                Proponents report weight loss, reduced inflammation, improved digestion, clearer skin, more stable energy, better 
                blood sugar control, and enhanced athletic performance. Popular in CrossFit communities, Paleo focuses on food 
                quality - grass-fed meat, wild-caught fish, organic produce when possible.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-amber-800">Core Paleo Principles</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Eat whole foods:</strong> Nothing processed or refined</li>
                    <li>• <strong>High protein:</strong> Meat, fish, eggs as foundation</li>
                    <li>• <strong>Healthy fats:</strong> Nuts, avocados, coconut, olive oil</li>
                    <li>• <strong>Vegetables/fruits:</strong> Unlimited non-starchy vegetables</li>
                    <li>• <strong>No grains:</strong> Wheat, rice, oats, corn eliminated</li>
                    <li>• <strong>No dairy:</strong> Milk, cheese, yogurt excluded</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Why People Choose Paleo</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Sustainable weight loss without calorie counting</li>
                    <li>• Reduced inflammation and autoimmune symptoms</li>
                    <li>• Improved digestion (no grains/legumes)</li>
                    <li>• Better blood sugar control and energy</li>
                    <li>• Enhanced athletic performance (CrossFit)</li>
                    <li>• Clearer skin and better sleep</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paleo Food List */}
      <section id="foods" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Paleo Diet Food List: Eat vs Avoid</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Paleo-Approved Foods (Eat Freely):</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Meat & Poultry (Grass-Fed Best):</h5>
                    <p className="text-sm text-gray-700">
                      Beef, pork, lamb, chicken, turkey, bison, venison, duck. All cuts. Prioritize grass-fed and 
                      pasture-raised for better omega-3 ratio.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Fish & Seafood (Wild-Caught Best):</h5>
                    <p className="text-sm text-gray-700">
                      Salmon, tuna, mackerel, sardines, trout, shrimp, crab, lobster, mussels, oysters. Omega-3 rich.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Eggs (Pasture-Raised Best):</h5>
                    <p className="text-sm text-gray-700">
                      Chicken eggs, duck eggs, quail eggs. Whole eggs with yolk - complete protein and healthy fats.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Vegetables (All Non-Starchy):</h5>
                    <p className="text-sm text-gray-700">
                      Broccoli, spinach, kale, peppers, tomatoes, cucumber, zucchini, cauliflower, Brussels sprouts, 
                      asparagus, mushrooms, onions, garlic. Unlimited!
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Fruits (Moderate, Lower Sugar Best):</h5>
                    <p className="text-sm text-gray-700">
                      Berries (best choice), apples, oranges, melons, bananas, grapes. Limit high-sugar tropical fruits.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Nuts & Seeds (Unsalted):</h5>
                    <p className="text-sm text-gray-700">
                      Almonds, walnuts, cashews, pecans, macadamia, sunflower seeds, pumpkin seeds, chia, flax. 
                      Not peanuts (legume)!
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Healthy Fats & Oils:</h5>
                    <p className="text-sm text-gray-700">
                      Olive oil, coconut oil, avocado oil, ghee (clarified butter), animal fats (tallow, lard). 
                      Avocados excellent source.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Natural Sweeteners (Minimal):</h5>
                    <p className="text-sm text-gray-700">
                      Raw honey, pure maple syrup, coconut sugar. Use sparingly - still sugar!
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ NOT Paleo (Strictly Avoid):</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">All Grains & Cereals:</h5>
                    <p className="text-sm text-gray-700">
                      Wheat, rice (white/brown), oats, corn, quinoa, barley, rye, millet. Includes bread, pasta, 
                      cereals, tortillas, crackers. NO EXCEPTIONS.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">All Legumes (Beans, Lentils, Peanuts):</h5>
                    <p className="text-sm text-gray-700">
                      Black beans, kidney beans, chickpeas, lentils, soybeans, tofu, peanuts, peanut butter, soy sauce. 
                      Contain anti-nutrients and lectins.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">All Dairy Products:</h5>
                    <p className="text-sm text-gray-700">
                      Milk, cheese, yogurt, ice cream, butter (except ghee). Lactose and casein not Paleo. 
                      Some allow grass-fed butter.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Refined Sugar & Artificial Sweeteners:</h5>
                    <p className="text-sm text-gray-700">
                      White sugar, high-fructose corn syrup, aspartame, sucralose, saccharin. Use natural sweeteners sparingly.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Processed Foods & Vegetable Oils:</h5>
                    <p className="text-sm text-gray-700">
                      Anything in package with long ingredient list, fast food, chips, candy. Soybean oil, canola oil, 
                      corn oil (inflammatory).
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Potatoes (Debated):</h5>
                    <p className="text-sm text-gray-700">
                      White potatoes not strictly Paleo (high glycemic). Sweet potatoes generally allowed. Some strict 
                      Paleo excludes both.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Alcohol (Most):</h5>
                    <p className="text-sm text-gray-700">
                      Beer (grains), most mixed drinks (sugar). Some allow wine/spirits in moderation. Strict Paleo = no alcohol.
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-lg mb-4 text-yellow-700">⚠️ Gray Area (Some Allow):</h4>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Sweet potatoes:</strong> Most Paleo diets include</li>
                      <li>• <strong>Coffee:</strong> Black coffee usually OK</li>
                      <li>• <strong>Dark chocolate:</strong> 85%+ cacao in moderation</li>
                      <li>• <strong>Grass-fed butter/ghee:</strong> Some include</li>
                      <li>• <strong>White rice:</strong> Some "Primal" diets allow</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Meal Plan */}
      <section id="meal-plans" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Paleo Meal Plan (2,000-2,200 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Complete Paleo eating with whole foods, no grains, no dairy, no legumes.
            </p>
            
            <Card className="border-amber-200 mb-8">
              <CardHeader className="bg-amber-50">
                <CardTitle className="text-amber-800">Sample Day - Paleo Diet</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:30 AM):</h5>
                    <p className="text-gray-700">Scrambled eggs (3) with spinach and mushrooms cooked in coconut oil, avocado (1/2), berries (1 cup), black coffee</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~520 | Protein: 28g | High fat, grain-free start</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM):</h5>
                    <p className="text-gray-700">Apple with almond butter (2 tbsp), handful of walnuts</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~320 | Healthy fats and fiber</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                    <p className="text-gray-700">Grilled chicken breast (200g) over large mixed greens salad (spinach, tomatoes, cucumber, peppers), olive oil and lemon dressing, orange</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~480 | Protein: 48g | Nutrient-dense, filling</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h5>
                    <p className="text-gray-700">Carrot and celery sticks with guacamole (1/2 cup), beef jerky (grass-fed, 1 oz)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~240 | Protein: 14g | Satisfying, portable</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                    <p className="text-gray-700">Grilled salmon (180g) with herbs, roasted sweet potato (medium), roasted Brussels sprouts and broccoli with olive oil, side salad</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~680 | Protein: 46g | Omega-3 rich, complete meal</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Optional Evening Snack (9:00 PM):</h5>
                    <p className="text-gray-700">Dark chocolate (85% cacao, 1 oz) with handful of macadamia nuts</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~220 | Paleo-friendly treat</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-sm font-semibold text-amber-700">Daily Total: ~2,460 calories | Protein: 136g | Carbs: 140g | Fats: 148g | Zero grains, dairy, legumes!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Weekly Paleo Variety</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Paleo Breakfast Ideas:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Veggie omelet with avocado</li>
                      <li>• Smoothie (coconut milk, berries, protein powder)</li>
                      <li>• Sweet potato hash with eggs and bacon</li>
                      <li>• Leftover dinner proteins with vegetables</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Lunch Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Tuna salad (made with avocado mayo)</li>
                      <li>• Steak salad with mixed vegetables</li>
                      <li>• Chicken vegetable soup (no noodles)</li>
                      <li>• Lettuce wrap turkey burgers</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Dinner Ideas:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Grass-fed beef steak with roasted vegetables</li>
                      <li>• Pork chops with cauliflower mash</li>
                      <li>• Baked chicken with roasted root vegetables</li>
                      <li>• Shrimp stir-fry with coconut aminos</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Paleo Snacks:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Hard-boiled eggs</li>
                      <li>• Nuts and seeds (measured portions)</li>
                      <li>• Vegetables with guacamole</li>
                      <li>• Dried fruit and nut mix (no peanuts)</li>
                    </ul>
                  </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Paleo Diet Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Meal prep proteins:</strong> Cook chicken, beef in bulk for week</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stock Paleo pantry:</strong> Coconut oil, nuts, canned fish, herbs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Read all labels:</strong> Hidden grains/sugar in many products</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Quality matters:</strong> Grass-fed meat, wild fish when budget allows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated:</strong> Drink plenty of water, herbal teas</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much fruit:</strong> Still sugar - moderate intake, choose berries</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not eating enough vegetables:</strong> Foundation of Paleo, not just meat</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Relying on Paleo treats:</strong> Almond flour cookies still cookies</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not planning ahead:</strong> No convenience foods = must meal prep</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Expecting instant results:</strong> Body needs 2-4 weeks to adapt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-700 to-orange-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Paleo Lifestyle
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              The Paleo diet pairs perfectly with functional fitness training like CrossFit. Combine ancestral eating 
              with natural movement patterns for complete health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">CrossFit & Functional Fitness</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover workout programs that complement the Paleo lifestyle for optimal performance.
                </p>
                <Button size="lg" className="w-full bg-white text-amber-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/paleo">
                    View Workouts
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Flame className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized Paleo diet plan tailored to your preferences and goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join the Paleo community eating whole foods for modern health and performance
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
