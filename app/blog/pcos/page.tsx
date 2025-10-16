import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PCOS Diet Plan for Weight Loss 2025 | Proven Meal Plans & Foods to Eat",
  description: "Complete PCOS diet guide with proven meal plans, foods to eat and avoid, insulin resistance management, and natural hormone-balancing strategies for sustainable weight loss.",
  keywords: "PCOS diet plan, PCOS weight loss, polycystic ovary syndrome diet, PCOS meal plan, insulin resistance diet, PCOS foods to avoid, hormone balancing diet, PCOS treatment",
  openGraph: {
    title: "PCOS Diet Plan for Weight Loss 2025 | Evidence-Based Guide",
    description: "Science-backed PCOS diet plan with meal examples, hormonal balance strategies, and proven weight loss methods.",
    url: "https://fitplanindia.com/blog/pcos",
  },
}

export default function PCOSDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-rose-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🌸 Complete PCOS Diet Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PCOS Diet Plan for Weight Loss: Complete Evidence-Based Guide
            </h1>
            <p className="text-xl text-pink-100 mb-8">
              Discover the proven PCOS diet strategies used by thousands of women worldwide to manage symptoms, 
              balance hormones, and achieve sustainable weight loss through nutrition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-700 hover:bg-gray-100" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-white/10" asChild>
                <Link href="/workouts/pcos">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  PCOS Workout Guide
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
                <div className="text-3xl font-bold text-pink-600 mb-2">5-10%</div>
                <div className="text-gray-600">Weight Loss Improves Symptoms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">30-50%</div>
                <div className="text-gray-600">Lower GI Carbs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
                <div className="text-gray-600">Have Insulin Resistance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">90 Days</div>
                <div className="text-gray-600">To See Results</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is PCOS and Why Diet Matters</h2>
              <p className="text-lg text-gray-700 mb-6">
                Polycystic Ovary Syndrome (PCOS) affects 1 in 10 women of reproductive age worldwide, making it one 
                of the most common hormonal disorders. Women with PCOS often experience insulin resistance, hormonal 
                imbalances, inflammation, and difficulty losing weight. The right PCOS diet plan can help manage these 
                symptoms, regulate hormones naturally, and support sustainable weight loss.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-pink-800">How PCOS Affects Weight</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Insulin resistance makes fat storage easier</li>
                    <li>• High androgen levels increase belly fat</li>
                    <li>• Slower metabolism due to hormonal imbalance</li>
                    <li>• Inflammation triggers weight gain</li>
                    <li>• Irregular periods affect weight regulation</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Diet Benefits for PCOS</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Improves insulin sensitivity by 30-50%</li>
                    <li>• Reduces testosterone and androgen levels</li>
                    <li>• Regulates menstrual cycles naturally</li>
                    <li>• Decreases inflammation markers</li>
                    <li>• Supports sustainable weight loss</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCOS Diet Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">PCOS Diet Principles for Weight Loss</h2>
            
            <div className="space-y-8">
              {/* Low Glycemic Index */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Apple className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">Low Glycemic Index (GI) Foods</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-green-600 mr-2" />
                      <span><strong>GI Below 55</strong></span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                      <span><strong>Stable Blood Sugar</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-purple-600 mr-2" />
                      <span><strong>Better Insulin Response</strong></span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Low GI foods release glucose slowly into the bloodstream, preventing insulin spikes that worsen PCOS symptoms.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">✅ Best Low GI Foods:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Quinoa, brown rice, oats (GI: 35-55)</li>
                        <li>• Sweet potatoes, legumes (GI: 40-50)</li>
                        <li>• Non-starchy vegetables (GI: 10-30)</li>
                        <li>• Berries, apples, pears (GI: 25-40)</li>
                        <li>• Nuts, seeds, healthy fats (GI: 0-15)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-red-700">❌ Avoid High GI Foods:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• White bread, white rice (GI: 70-90)</li>
                        <li>• Sugary cereals, pastries (GI: 65-85)</li>
                        <li>• Processed snacks, chips (GI: 60-75)</li>
                        <li>• Sugary drinks, sodas (GI: 60-90)</li>
                        <li>• Candy, sweets (GI: 70-100)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Anti-Inflammatory Foods */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Salad className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Anti-Inflammatory Foods</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Chronic inflammation worsens PCOS symptoms and insulin resistance. Anti-inflammatory foods help 
                    reduce inflammation, balance hormones, and support healthy weight loss.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Omega-3 Rich Foods:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fatty fish (salmon, mackerel)</li>
                        <li>• Chia seeds, flaxseeds</li>
                        <li>• Walnuts</li>
                        <li>• Algae oil supplements</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Antioxidant-Rich:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Berries (blueberries, strawberries)</li>
                        <li>• Dark leafy greens</li>
                        <li>• Green tea, matcha</li>
                        <li>• Turmeric, ginger</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Healthy Fats:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Extra virgin olive oil</li>
                        <li>• Avocados</li>
                        <li>• Raw nuts and seeds</li>
                        <li>• Coconut oil (moderate)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Protein & Fiber */}
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Utensils className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">High Protein & Fiber Balance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Adequate protein and fiber intake helps manage insulin levels, keeps you full longer, and supports 
                    healthy hormone production. Aim for 25-30g protein per meal and 25-35g fiber daily.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Best Protein Sources:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Lean poultry (chicken, turkey)</li>
                        <li>• Fish and seafood</li>
                        <li>• Eggs (whole or whites)</li>
                        <li>• Greek yogurt, cottage cheese</li>
                        <li>• Plant proteins (tofu, tempeh, legumes)</li>
                        <li>• Protein powders (whey, pea, hemp)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">High Fiber Foods:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Vegetables (broccoli, Brussels sprouts)</li>
                        <li>• Legumes (lentils, chickpeas, beans)</li>
                        <li>• Whole grains (oats, quinoa)</li>
                        <li>• Fruits (berries, apples with skin)</li>
                        <li>• Chia seeds, psyllium husk</li>
                        <li>• Nuts and seeds</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day PCOS Meal Plan for Weight Loss</h2>
            <p className="text-center text-gray-600 mb-12">
              This balanced meal plan focuses on low GI foods, anti-inflammatory ingredients, and optimal macronutrient ratios.
            </p>
            
            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-pink-200">
                <CardHeader className="bg-pink-50">
                  <CardTitle className="text-pink-800">Day 1 - Monday</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:00 AM):</h5>
                      <p className="text-gray-700">Steel-cut oats (1/2 cup) with cinnamon, berries (1/2 cup), chia seeds (1 tbsp), almonds (10), and unsweetened almond milk</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~380 | Protein: 12g | Carbs: 45g | Fiber: 10g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:00 AM):</h5>
                      <p className="text-gray-700">Green tea + 1 small apple with 1 tbsp almond butter</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~150 | Protein: 4g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                      <p className="text-gray-700">Grilled chicken breast (150g) with quinoa (1/2 cup), roasted vegetables (broccoli, bell peppers, zucchini), mixed green salad with olive oil dressing</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~450 | Protein: 40g | Carbs: 35g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Evening Snack (4:00 PM):</h5>
                      <p className="text-gray-700">Carrot sticks with hummus (3 tbsp) + herbal tea</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~120 | Protein: 5g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                      <p className="text-gray-700">Baked salmon (150g) with sweet potato (1 medium), steamed asparagus, and side salad</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~480 | Protein: 38g | Omega-3: High</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-pink-200">
                    <p className="text-sm font-semibold text-pink-700">Daily Total: ~1,580 calories | Protein: 99g | Carbs: 150g | Fiber: 35g</p>
                  </div>
                </CardContent>
              </Card>

              {/* Day 2-7 Summary Cards */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Days 2-7 Meal Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-3">Breakfast Variations:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Greek yogurt parfait with berries and nuts</li>
                        <li>• Vegetable omelet with whole grain toast</li>
                        <li>• Smoothie bowl with spinach, berries, protein</li>
                        <li>• Quinoa breakfast bowl with cinnamon</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Lunch Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Turkey and avocado wrap with vegetables</li>
                        <li>• Lentil soup with mixed green salad</li>
                        <li>• Grilled fish tacos with cabbage slaw</li>
                        <li>• Chickpea Buddha bowl with tahini</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Dinner Ideas:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Stir-fried tofu with brown rice and veggies</li>
                        <li>• Turkey meatballs with zucchini noodles</li>
                        <li>• Baked cod with roasted Brussels sprouts</li>
                        <li>• Chicken curry with cauliflower rice</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Snack Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Raw vegetables with guacamole</li>
                        <li>• Hard-boiled eggs with cucumber</li>
                        <li>• Mixed nuts (portion-controlled)</li>
                        <li>• Berries with cottage cheese</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">PCOS Diet: Foods to Eat vs Avoid</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Foods to Eat Regularly:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Complex Carbohydrates:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Quinoa, brown rice, wild rice</li>
                      <li>• Steel-cut oats, barley</li>
                      <li>• Sweet potatoes, butternut squash</li>
                      <li>• Legumes (lentils, chickpeas)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Lean Proteins:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Wild-caught fish (salmon, sardines)</li>
                      <li>• Organic chicken and turkey</li>
                      <li>• Grass-fed lean beef (moderate)</li>
                      <li>• Eggs, Greek yogurt, cottage cheese</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Healthy Fats:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Avocados, olive oil</li>
                      <li>• Nuts (almonds, walnuts)</li>
                      <li>• Seeds (chia, flax, pumpkin)</li>
                      <li>• Fatty fish for omega-3s</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Foods to Avoid or Limit:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Refined Carbohydrates:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• White bread, white rice, pasta</li>
                      <li>• Sugary cereals, pastries</li>
                      <li>• Crackers, pretzels, chips</li>
                      <li>• Processed baked goods</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Added Sugars:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sodas, fruit juices, energy drinks</li>
                      <li>• Candy, chocolate bars, desserts</li>
                      <li>• Sweetened yogurt and flavored milk</li>
                      <li>• Syrups, honey (excessive amounts)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Inflammatory Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fried and fast foods</li>
                      <li>• Processed meats (bacon, sausage)</li>
                      <li>• Trans fats, margarine</li>
                      <li>• Excessive dairy (if intolerant)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCOS Supplements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Evidence-Based PCOS Supplements</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200">
                <CardContent className="pt-6">
                  <Coffee className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Inositol</h4>
                  <p className="text-sm text-gray-700 mb-2">Improves insulin sensitivity and ovulation</p>
                  <p className="text-xs text-blue-600 font-semibold">Dose: 2-4g daily (Myo-inositol)</p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Omega-3</h4>
                  <p className="text-sm text-gray-700 mb-2">Reduces inflammation and insulin resistance</p>
                  <p className="text-xs text-green-600 font-semibold">Dose: 1-2g EPA+DHA daily</p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Vitamin D</h4>
                  <p className="text-sm text-gray-700 mb-2">Supports hormone balance and metabolism</p>
                  <p className="text-xs text-purple-600 font-semibold">Dose: 2000-4000 IU daily</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Always consult with your healthcare provider before starting any supplement regimen, 
                especially if you're taking medications or have other health conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">PCOS Diet Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Do This for Better Results:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat regular meals:</strong> Every 3-4 hours to stabilize blood sugar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Combine macros:</strong> Pair carbs with protein and healthy fats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated:</strong> Drink 8-10 glasses of water daily</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Meal prep:</strong> Plan and prepare meals in advance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track progress:</strong> Monitor weight, measurements, and symptoms</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Avoid These Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping meals:</strong> Causes blood sugar crashes and cravings</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Extreme calorie restriction:</strong> Slows metabolism and hormone production</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eliminating all carbs:</strong> Your body needs healthy carbs for energy</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring portions:</strong> Even healthy foods need portion control</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Giving up too soon:</strong> Results take 90+ days to show fully</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section - UPDATED */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your PCOS Weight Loss Journey
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Diet is just one piece of the puzzle. Combine proper nutrition with targeted exercise 
              for optimal PCOS symptom management and sustainable weight loss.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA - Links to /workouts/pcos */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">PCOS Workout Guide</h4>
                <p className="text-pink-100 text-sm mb-4">
                  Discover home and gym workouts designed specifically for PCOS to improve insulin sensitivity and boost weight loss.
                </p>
                <Button size="lg" className="w-full bg-white text-pink-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/pcos">
                    View PCOS Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA - Redirects to /ai-coach */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Your Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4">
                  Use our AI Coach to create a personalized PCOS meal plan tailored to your specific needs and preferences.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Meal Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-pink-200 text-sm mt-6">
              ✨ Join 10,000+ women managing PCOS naturally through diet and exercise
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
