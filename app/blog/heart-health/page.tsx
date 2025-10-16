import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Shield, Activity } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Heart Health Diet Plan | DASH Diet for Blood Pressure & Cholesterol",
  description: "Complete heart health diet guide with DASH diet principles, cholesterol-lowering foods, blood pressure control, cardiovascular disease prevention, and heart-healthy meal plans.",
  keywords: "heart health diet, DASH diet, lower blood pressure diet, cholesterol lowering diet, heart disease prevention, cardiovascular health, heart healthy foods",
  openGraph: {
    title: "Heart Health Diet Plan | DASH Diet Complete Guide",
    description: "Evidence-based heart health diet with DASH principles and cardiovascular disease prevention.",
    url: "https://fitplanindia.com/blog/heart-health",
  },
}

export default function HeartHealthDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-pink-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-red-600 font-semibold">
              ❤️ Complete Heart Health Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Heart Health Diet: DASH Plan for Blood Pressure & Cholesterol
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover the DASH diet (Dietary Approaches to Stop Hypertension) - proven to lower blood pressure, 
              reduce cholesterol, prevent heart disease, and protect cardiovascular health with delicious, practical meal plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="#benefits">
                  Heart Benefits
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
                <div className="text-3xl font-bold text-red-600 mb-2">10-14</div>
                <div className="text-gray-600">mmHg Blood Pressure Drop</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">10-15%</div>
                <div className="text-gray-600">LDL Cholesterol Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">20%</div>
                <div className="text-gray-600">Lower Heart Disease Risk</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Low</div>
                <div className="text-gray-600">Sodium (1,500-2,300mg)</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the DASH Diet for Heart Health</h2>
              <p className="text-lg text-gray-700 mb-6">
                The DASH diet (Dietary Approaches to Stop Hypertension) was specifically developed by the National Heart, 
                Lung, and Blood Institute to combat high blood pressure - the leading risk factor for heart disease and stroke. 
                Clinical studies prove DASH lowers blood pressure by 10-14 mmHg (as effective as some medications), reduces 
                LDL cholesterol by 10-15%, decreases heart disease risk by 20%, and prevents stroke. The DASH diet emphasizes 
                vegetables, fruits, whole grains, lean proteins, and low-fat dairy while limiting sodium (salt), saturated fats, 
                added sugars, and red meat. It's rich in potassium, calcium, magnesium, and fiber - nutrients that naturally 
                lower blood pressure and protect heart health. Unlike fad diets, DASH is endorsed by the American Heart 
                Association and ranked as one of the healthiest diets by medical professionals worldwide.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-red-800">DASH Diet Core Principles</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Low sodium:</strong> 1,500-2,300mg daily (vs. 3,400mg average)</li>
                    <li>• <strong>High potassium:</strong> 4,700mg from fruits/vegetables</li>
                    <li>• <strong>Calcium-rich:</strong> Low-fat dairy for blood pressure</li>
                    <li>• <strong>Whole grains:</strong> Fiber for cholesterol control</li>
                    <li>• <strong>Lean proteins:</strong> Fish, poultry, legumes</li>
                    <li>• <strong>Healthy fats:</strong> Nuts, seeds, olive oil (limited)</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-pink-800">How DASH Protects Your Heart</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Lowers blood pressure naturally (reduces strain)</li>
                    <li>• Reduces arterial stiffness (better circulation)</li>
                    <li>• Lowers LDL (bad) cholesterol levels</li>
                    <li>• Reduces inflammation throughout body</li>
                    <li>• Improves blood vessel function</li>
                    <li>• Prevents atherosclerosis (plaque buildup)</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Proven Heart Health Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Heart className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">Blood Pressure Reduction</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Lowers systolic BP by 10-14 mmHg</li>
                    <li>• Lowers diastolic BP by 5-6 mmHg</li>
                    <li>• Effects seen within 2 weeks</li>
                    <li>• As effective as some BP medications</li>
                    <li>• Works for hypertensive and pre-hypertensive</li>
                    <li>• Sustained long-term with adherence</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Target className="w-6 h-6 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-700">Cholesterol Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Reduces LDL (bad) cholesterol 10-15%</li>
                    <li>• Increases HDL (good) cholesterol</li>
                    <li>• Lowers triglycerides</li>
                    <li>• Fiber binds and removes cholesterol</li>
                    <li>• Reduces arterial plaque buildup</li>
                    <li>• Prevents atherosclerosis progression</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Shield className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">Cardiovascular Disease Prevention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 20% lower risk of heart disease</li>
                    <li>• 29% lower risk of stroke</li>
                    <li>• Reduces heart attack risk significantly</li>
                    <li>• Protects against heart failure</li>
                    <li>• Improves overall cardiovascular health</li>
                    <li>• Increases lifespan and quality of life</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Additional Health Benefits</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Supports healthy weight loss</li>
                    <li>• Reduces diabetes risk by 20%</li>
                    <li>• Improves kidney function</li>
                    <li>• Reduces inflammation markers</li>
                    <li>• Improves insulin sensitivity</li>
                    <li>• Enhances overall longevity</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* DASH Food Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">DASH Diet Food Servings Guide (2,000 Calorie Plan)</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Foods to Emphasize:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Vegetables (4-5 servings daily):</h5>
                    <p className="text-sm text-gray-700 mb-1">
                      Leafy greens, broccoli, carrots, sweet potatoes, tomatoes, peppers, squash.
                    </p>
                    <p className="text-xs text-gray-600">Rich in potassium, magnesium, fiber - all lower BP</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Fruits (4-5 servings daily):</h5>
                    <p className="text-sm text-gray-700 mb-1">
                      Berries, bananas, oranges, apples, melons, grapes. Fresh or frozen.
                    </p>
                    <p className="text-xs text-gray-600">Potassium powerhouses for blood pressure control</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Whole Grains (6-8 servings daily):</h5>
                    <p className="text-sm text-gray-700 mb-1">
                      Whole wheat bread, brown rice, oatmeal, whole grain pasta, quinoa, barley.
                    </p>
                    <p className="text-xs text-gray-600">Fiber reduces cholesterol and supports heart health</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Low-Fat Dairy (2-3 servings daily):</h5>
                    <p className="text-sm text-gray-700 mb-1">
                      Skim milk, low-fat yogurt, low-fat cheese. Important calcium source.
                    </p>
                    <p className="text-xs text-gray-600">Calcium helps regulate blood pressure</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Lean Proteins (6 oz or less daily):</h5>
                    <p className="text-sm text-gray-700 mb-1">
                      Skinless poultry, fish (especially fatty fish), legumes, eggs.
                    </p>
                    <p className="text-xs text-gray-600">Choose fish 2-3x weekly for omega-3s</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-700">📊 Moderate Amounts:</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Nuts, Seeds, Legumes (4-5 servings weekly):</h5>
                    <p className="text-sm text-gray-700">
                      Almonds, walnuts, sunflower seeds, lentils, kidney beans, chickpeas. Heart-healthy fats and protein.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Healthy Fats (2-3 servings daily):</h5>
                    <p className="text-sm text-gray-700">
                      Olive oil, avocado, nuts. Small amounts - these are calorie-dense.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Sweets (5 or fewer servings weekly):</h5>
                    <p className="text-sm text-gray-700">
                      Dark chocolate, sorbet, low-fat frozen yogurt. Occasional treats only.
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-lg mb-4 text-red-700">❌ Limit or Avoid:</h4>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">High-Sodium Foods:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Processed/cured meats (bacon, deli meat)</li>
                        <li>• Canned soups (unless low-sodium)</li>
                        <li>• Salty snacks (chips, crackers)</li>
                        <li>• Fast food and restaurant meals</li>
                        <li>• Pickled foods, olives (high salt)</li>
                        <li>• Soy sauce (use low-sodium version)</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Saturated Fats & Red Meat:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Red meat (beef, pork) - limit to few times monthly</li>
                        <li>• Full-fat dairy products</li>
                        <li>• Butter, lard, coconut oil</li>
                        <li>• Fried foods</li>
                        <li>• These raise LDL cholesterol</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Added Sugars:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Sugary drinks (soda, sweet tea)</li>
                        <li>• Candy, pastries, desserts</li>
                        <li>• Limit to 5 servings weekly or less</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sodium Reduction Tips */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-yellow-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-900 text-xl mb-3">⚠️ Sodium Reduction Strategies (Most Important!):</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Read labels:</strong> Choose foods with less than 140mg sodium per serving</li>
                    <li>• <strong>Cook at home:</strong> Restaurant meals have 2-3x more sodium</li>
                    <li>• <strong>Don't add salt:</strong> Use herbs and spices instead (garlic, lemon, pepper)</li>
                    <li>• <strong>Rinse canned foods:</strong> Removes 40% of sodium from beans, vegetables</li>
                    <li>• <strong>Buy "no salt added" versions:</strong> Canned tomatoes, beans, vegetables</li>
                    <li>• <strong>Gradual reduction:</strong> Taste buds adapt in 2-3 weeks</li>
                  </ul>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day DASH Diet Meal Plan (2,000 Calories, 1,500mg Sodium)</h2>
            <p className="text-center text-gray-600 mb-12">
              Heart-healthy, low-sodium meals designed to lower blood pressure and cholesterol.
            </p>
            
            <Card className="border-red-200 mb-8">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-800">Sample Day - DASH Diet</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:30 AM):</h5>
                    <p className="text-gray-700">Oatmeal (1 cup) with berries, walnuts, skim milk; banana on side; herbal tea</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~380 | Sodium: 150mg | Fiber: 8g | Potassium-rich</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM):</h5>
                    <p className="text-gray-700">Apple with 1 oz unsalted almonds</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~220 | Sodium: 0mg | Heart-healthy fats</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                    <p className="text-gray-700">Grilled chicken breast (4 oz) on whole wheat bread with lettuce, tomato, mustard (no salt); side salad with olive oil and vinegar; orange</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~520 | Sodium: 380mg | Protein: 38g</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h5>
                    <p className="text-gray-700">Low-fat yogurt (1 cup) with berries</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~180 | Sodium: 140mg | Calcium for BP</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                    <p className="text-gray-700">Baked salmon (5 oz) with lemon and herbs, quinoa (1 cup), steamed broccoli and carrots with no salt, mixed green salad</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~620 | Sodium: 280mg | Omega-3 rich | Protein: 48g</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Evening Snack (Optional - 9:00 PM):</h5>
                    <p className="text-gray-700">Air-popped popcorn (3 cups, no salt) or pear</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~100 | Sodium: 0mg | Satisfying crunch</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-red-200">
                  <p className="text-sm font-semibold text-red-700">Daily Total: ~2,020 calories | Sodium: 950mg (well under 1,500mg goal!) | Potassium: 4,800mg | Heart-protective!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Weekly DASH Meal Variety</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Breakfast Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Whole grain cereal with skim milk and banana</li>
                      <li>• Veggie omelet with whole wheat toast</li>
                      <li>• Greek yogurt with granola and berries</li>
                      <li>• Smoothie (banana, berries, spinach, yogurt)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Lunch Ideas:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Turkey and veggie wrap (low-sodium turkey)</li>
                      <li>• Lentil soup with whole grain roll</li>
                      <li>• Tuna salad (made with low-fat mayo)</li>
                      <li>• Chickpea salad with vegetables</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Dinner Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Grilled fish with sweet potato and greens</li>
                      <li>• Chicken stir-fry with brown rice (low sodium)</li>
                      <li>• Turkey chili with beans</li>
                      <li>• Baked cod with roasted vegetables</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">DASH-Friendly Snacks:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Fresh fruit (any kind)</li>
                      <li>• Raw vegetables with hummus</li>
                      <li>• Unsalted nuts (1 oz portion)</li>
                      <li>• Low-fat cheese with whole grain crackers</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">DASH Diet Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Gradually reduce sodium:</strong> Taste buds adapt in 2-3 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Read all food labels:</strong> Check sodium per serving always</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Cook meals at home:</strong> Only way to control sodium fully</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat potassium-rich foods:</strong> Counteracts sodium's BP effects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercise regularly:</strong> Enhances BP-lowering benefits</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eating out frequently:</strong> Restaurant food extremely high sodium</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not reading labels:</strong> "Healthy" foods can be high sodium</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Using salt substitutes without asking doctor:</strong> High potassium risky for some</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Expecting instant results:</strong> BP drops take 2+ weeks to see</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stopping BP medication without doctor:</strong> Diet complements, doesn't replace meds</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Protect Your Heart Health Today
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              The DASH diet is most effective when combined with regular physical activity. Exercise further 
              lowers blood pressure and strengthens your cardiovascular system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Heart-Healthy Workouts</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover cardiovascular exercises that complement the DASH diet for optimal heart health.
                </p>
                <Button size="lg" className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/heart-health">
                    View Workouts
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized DASH diet plan tailored to your health needs.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join thousands protecting their heart health through the proven DASH diet
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
