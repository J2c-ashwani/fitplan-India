import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PCOD Diet Plan | Complete Nutrition for Polycystic Ovarian Disease",
  description: "Complete PCOD diet guide with meal plans, insulin resistance management, hormonal balance strategies, weight loss tips, and foods to manage PCOS/PCOD symptoms naturally.",
  keywords: "PCOD diet, PCOS diet plan, polycystic ovary diet, PCOD weight loss, insulin resistance diet, hormonal balance nutrition, PCOS meal plan, PCOD foods",
  openGraph: {
    title: "PCOD Diet Plan | Complete Nutrition Guide for PCOS",
    description: "Evidence-based PCOD diet with meal plans, hormonal balance, and symptom management strategies.",
    url: "https://fitplanindia.com/blog/pcod",
  },
}

export default function PCODDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-pink-600 font-semibold">
              💖 Complete PCOD/PCOS Nutrition Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              PCOD Diet Plan: Manage Hormones & Symptoms Naturally
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover evidence-based nutrition strategies for PCOD/PCOS including insulin resistance management, 
              hormonal balance, weight loss, symptom reduction, and complete meal plans for women's health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/pcod">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  PCOD Workouts
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
                <div className="text-3xl font-bold text-pink-600 mb-2">1 in 10</div>
                <div className="text-gray-600">Women Affected by PCOD</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
                <div className="text-gray-600">With Insulin Resistance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5-10%</div>
                <div className="text-gray-600">Weight Loss Improves Symptoms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">Low GI</div>
                <div className="text-gray-600">Diet is Key</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding PCOD/PCOS and Diet</h2>
              <p className="text-lg text-gray-700 mb-6">
                PCOD (Polycystic Ovarian Disease) or PCOS (Polycystic Ovary Syndrome) affects millions of women worldwide, 
                causing hormonal imbalances, irregular periods, weight gain, acne, excess hair growth, and fertility challenges. 
                The root cause often involves insulin resistance - when cells don't respond properly to insulin, causing high 
                blood sugar and triggering excess androgen (male hormone) production. Diet is the most powerful tool to manage 
                PCOD naturally. A low glycemic index (GI) diet improves insulin sensitivity, reduces inflammation, promotes 
                hormonal balance, supports weight loss, and significantly reduces symptoms - all without medication side effects.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-pink-800">Common PCOD Symptoms</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Irregular or absent menstrual periods</li>
                    <li>• Weight gain, especially around abdomen</li>
                    <li>• Difficulty losing weight despite efforts</li>
                    <li>• Acne, oily skin, excess facial/body hair</li>
                    <li>• Hair thinning or male-pattern baldness</li>
                    <li>• Darkening skin patches (acanthosis nigricans)</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-purple-800">How Diet Helps PCOD</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Improves insulin sensitivity (reduces resistance)</li>
                    <li>• Balances hormones (lowers androgens)</li>
                    <li>• Reduces inflammation throughout body</li>
                    <li>• Supports healthy weight loss</li>
                    <li>• Regulates menstrual cycles naturally</li>
                    <li>• Improves fertility outcomes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCOD Diet Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">PCOD Diet Principles for Hormonal Balance</h2>
            
            <div className="space-y-8">
              {/* Low GI Carbs */}
              <Card className="border-pink-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Target className="w-6 h-6 text-pink-600 mr-3" />
                    <CardTitle className="text-pink-700">Low Glycemic Index (GI) Carbohydrates</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-4 mb-4">
                    <p className="text-sm text-gray-800 font-semibold">
                      🎯 The glycemic index measures how quickly foods raise blood sugar. Low GI foods (under 55) are 
                      CRUCIAL for PCOD as they prevent insulin spikes and improve insulin sensitivity.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">✅ Best Low GI Carbs:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Oats (steel-cut or rolled)</li>
                        <li>• Quinoa, brown rice</li>
                        <li>• Sweet potatoes (not white)</li>
                        <li>• Legumes (lentils, chickpeas, beans)</li>
                        <li>• Non-starchy vegetables (unlimited)</li>
                        <li>• Berries, apples, pears</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-red-800">❌ Avoid High GI Foods:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• White bread, white rice</li>
                        <li>• Refined pasta</li>
                        <li>• Sugary cereals</li>
                        <li>• Potatoes (especially fried)</li>
                        <li>• Sugary drinks, sodas</li>
                        <li>• Pastries, cakes, cookies</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">💡 Pro Tips:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Pair carbs with protein/fat</li>
                        <li>• Eat fiber-rich foods first</li>
                        <li>• Smaller, frequent meals better</li>
                        <li>• Never eat carbs alone</li>
                        <li>• Choose whole grains always</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Anti-Inflammatory Foods */}
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Heart className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">Anti-Inflammatory Diet for Hormonal Balance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    PCOD involves chronic low-grade inflammation that worsens insulin resistance and hormonal imbalances. 
                    Anti-inflammatory foods reduce inflammation, improve ovarian function, and support overall health.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Anti-Inflammatory Foods:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Omega-3 Rich:</strong> Fatty fish (salmon, sardines)</li>
                        <li>• <strong>Colorful Vegetables:</strong> Leafy greens, peppers, tomatoes</li>
                        <li>• <strong>Berries:</strong> Blueberries, strawberries (antioxidants)</li>
                        <li>• <strong>Healthy Fats:</strong> Olive oil, avocados, nuts</li>
                        <li>• <strong>Spices:</strong> Turmeric, ginger, cinnamon</li>
                        <li>• <strong>Green Tea:</strong> Powerful antioxidant</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Foods That Increase Inflammation:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Processed foods and junk food</li>
                        <li>• Trans fats (fried foods, margarine)</li>
                        <li>• Refined sugars and sweetened drinks</li>
                        <li>• Excessive red meat</li>
                        <li>• Alcohol (disrupts hormones)</li>
                        <li>• <strong>Limit these strictly!</strong></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Protein & Healthy Fats */}
              <Card className="border-teal-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Sparkles className="w-6 h-6 text-teal-600 mr-3" />
                    <CardTitle className="text-teal-700">Adequate Protein & Healthy Fats</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-teal-800">Protein (20-30g per meal):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Stabilizes blood sugar levels</li>
                        <li>• Increases satiety (reduces cravings)</li>
                        <li>• Supports lean muscle mass</li>
                        <li>• <strong>Sources:</strong> Eggs, fish, chicken, Greek yogurt, legumes, tofu</li>
                        <li>• Aim for 1.2-1.6g per kg body weight</li>
                      </ul>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-teal-800">Healthy Fats (Essential!):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Needed for hormone production</li>
                        <li>• Improves insulin sensitivity</li>
                        <li>• Reduces inflammation</li>
                        <li>• <strong>Sources:</strong> Avocados, nuts, seeds, olive oil, fatty fish</li>
                        <li>• <strong>Avoid:</strong> Trans fats, excessive saturated fats</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day PCOD-Friendly Meal Plan (1,600-1,800 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              This plan focuses on low GI foods, balanced macros, and anti-inflammatory nutrition for hormonal balance.
            </p>
            
            <Card className="border-pink-200 mb-8">
              <CardHeader className="bg-pink-50">
                <CardTitle className="text-pink-800">Sample Day - PCOD Diet</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (8:00 AM):</h5>
                    <p className="text-gray-700">Steel-cut oats (1/2 cup) with cinnamon, chia seeds (1 tbsp), berries, almonds (10), Greek yogurt (1/2 cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~420 | Protein: 18g | Low GI, high fiber, anti-inflammatory</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (11:00 AM):</h5>
                    <p className="text-gray-700">Apple slices with almond butter (1 tbsp), green tea</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~180 | Fiber + protein combo, antioxidants from tea</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:30 PM):</h5>
                    <p className="text-gray-700">Grilled chicken breast (150g), quinoa (3/4 cup), mixed vegetables (broccoli, peppers, spinach), olive oil dressing, side salad</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~550 | Protein: 42g | Complete meal, low GI carbs, anti-inflammatory</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:30 PM):</h5>
                    <p className="text-gray-700">Hummus (1/4 cup) with carrot and cucumber sticks, handful of walnuts</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~220 | Omega-3s from walnuts, fiber from veggies</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                    <p className="text-gray-700">Baked salmon (150g) with turmeric, brown rice (1/2 cup), roasted Brussels sprouts with garlic, mixed greens salad</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~520 | Protein: 38g | Omega-3s, anti-inflammatory spices</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Evening (Optional - 9:00 PM):</h5>
                    <p className="text-gray-700">Chamomile tea (helps sleep and hormone regulation)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: 0 | Calming, supports sleep quality</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-pink-200">
                  <p className="text-sm font-semibold text-pink-700">Daily Total: ~1,890 calories | Protein: 98g | Low GI throughout | Anti-inflammatory | Hormone-friendly</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Week Meal Variety</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Breakfast Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Veggie omelet with whole grain toast</li>
                      <li>• Smoothie (berries, spinach, protein powder)</li>
                      <li>• Greek yogurt parfait with nuts and seeds</li>
                      <li>• Quinoa porridge with cinnamon</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Lunch Ideas:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Lentil dal with brown rice and vegetables</li>
                      <li>• Chickpea salad with avocado and olive oil</li>
                      <li>• Grilled fish with sweet potato and greens</li>
                      <li>• Turkey wrap with hummus (whole grain)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Dinner Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Baked chicken with cauliflower rice</li>
                      <li>• Tofu stir-fry with vegetables and quinoa</li>
                      <li>• Salmon with asparagus and wild rice</li>
                      <li>• Lentil soup with side salad</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">PCOD-Friendly Snacks:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Hard-boiled eggs</li>
                      <li>• Raw nuts (almonds, walnuts)</li>
                      <li>• Vegetable sticks with hummus</li>
                      <li>• Berries with Greek yogurt</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Foods to Eat vs Avoid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">PCOD Diet: Foods to Eat vs Avoid</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Foods for PCOD:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Low GI Carbohydrates:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Oats, quinoa, brown rice</li>
                      <li>• Sweet potatoes (not white)</li>
                      <li>• All legumes (lentils, chickpeas, beans)</li>
                      <li>• Non-starchy vegetables (unlimited)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Quality Proteins:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fatty fish (salmon, sardines - omega-3)</li>
                      <li>• Eggs, chicken, turkey</li>
                      <li>• Greek yogurt, cottage cheese</li>
                      <li>• Tofu, tempeh, legumes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Healthy Fats & Superfoods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Avocados, olive oil, nuts</li>
                      <li>• Seeds (chia, flax, pumpkin)</li>
                      <li>• Berries (antioxidants)</li>
                      <li>• Turmeric, cinnamon, ginger</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Foods to Strictly Avoid:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">High GI/Refined Carbs:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• White bread, white rice, refined pasta</li>
                      <li>• Sugary cereals and granola bars</li>
                      <li>• Pastries, cakes, cookies, donuts</li>
                      <li>• White potatoes (especially fried)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Inflammatory Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sugary drinks (soda, juice, energy drinks)</li>
                      <li>• Processed/junk food</li>
                      <li>• Trans fats (fried foods, margarine)</li>
                      <li>• Excessive dairy (some women react)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Hormone Disruptors:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Alcohol (disrupts hormones)</li>
                      <li>• Excessive caffeine (limit to 1-2 cups)</li>
                      <li>• Artificial sweeteners (insulin response)</li>
                      <li>• Soy in large amounts (phytoestrogens)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">PCOD Management Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Lose 5-10% body weight:</strong> Significantly improves symptoms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercise regularly:</strong> 150 min per week improves insulin sensitivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat smaller, frequent meals:</strong> 5-6 per day stabilizes blood sugar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Manage stress:</strong> Cortisol worsens insulin resistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Sleep 7-9 hours:</strong> Poor sleep disrupts hormones</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Crash dieting:</strong> Worsens hormones, slows metabolism</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping meals:</strong> Causes blood sugar spikes and drops</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much cardio:</strong> Can increase cortisol, worsen PCOD</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring mental health:</strong> PCOD affects mood - seek support</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not being consistent:</strong> Takes 3-6 months to see full benefits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your PCOD Management Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Diet is crucial, but exercise significantly improves insulin sensitivity, hormone balance, and weight 
              management. Get your complete PCOD workout plan today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">PCOD Workout Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover effective exercises to improve insulin sensitivity, balance hormones, and manage PCOD symptoms naturally.
                </p>
                <Button size="lg" className="w-full bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/pcod">
                    View PCOD Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Shield className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized PCOD diet and workout plan tailored to your symptoms and goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join thousands managing PCOD naturally through nutrition and lifestyle changes
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
