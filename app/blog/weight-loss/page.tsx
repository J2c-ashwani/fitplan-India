import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingDown, Flame, Scale } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Weight Loss Diet Plan | Complete Guide to Lose Weight Safely & Fast",
  description: "Complete weight loss diet guide with meal plans, calorie deficit strategies, fat loss nutrition, metabolism boosting, and sustainable weight loss for long-term results.",
  keywords: "weight loss diet, fat loss diet plan, calorie deficit diet, how to lose weight, weight loss meal plan, lose belly fat, fast weight loss diet",
  openGraph: {
    title: "Weight Loss Diet Plan | Complete Guide to Fat Loss",
    description: "Evidence-based weight loss diet with meal plans, calorie strategies, and sustainable fat loss.",
    url: "https://fitplanindia.com/blog/weight-loss",
  },
}

export default function WeightLossDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-red-600 font-semibold">
              🔥 Complete Weight Loss Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Weight Loss Diet Plan: Lose Fat Safely & Sustainably
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover evidence-based weight loss nutrition strategies including calorie deficit, metabolism optimization, 
              meal plans for fat loss, hunger management, and sustainable approaches to lose weight and keep it off.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/weight-loss">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Weight Loss Workouts
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
                <div className="text-3xl font-bold text-red-600 mb-2">500-750</div>
                <div className="text-gray-600">Daily Calorie Deficit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">1-2 lbs</div>
                <div className="text-gray-600">Safe Weight Loss Per Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">3,500 cal</div>
                <div className="text-gray-600">Equals 1 Pound Fat</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">High</div>
                <div className="text-gray-600">Protein is Key</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Weight Loss Fundamentals</h2>
              <p className="text-lg text-gray-700 mb-6">
                Weight loss fundamentally comes down to energy balance - consuming fewer calories than you burn (calorie deficit). 
                When in a deficit, your body uses stored fat for energy, resulting in fat loss. One pound of body fat equals 
                approximately 3,500 calories, so a 500-calorie daily deficit leads to about 1 pound lost per week. However, 
                sustainable weight loss isn't just about eating less - it's about eating smarter: high-protein foods preserve 
                muscle and increase satiety, fiber-rich foods keep you full longer, whole foods provide better nutrition than 
                processed options, and balanced meals prevent extreme hunger and binges. The key is creating a moderate deficit 
                you can maintain long-term, not crash dieting that leads to rebound weight gain.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-red-800">Benefits of Healthy Weight Loss</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Reduced risk of heart disease and diabetes</li>
                    <li>• Lower blood pressure and cholesterol</li>
                    <li>• Improved energy levels and mobility</li>
                    <li>• Better sleep quality and breathing</li>
                    <li>• Enhanced mood and self-confidence</li>
                    <li>• Reduced joint pain and inflammation</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Weight Loss Reality Check</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Safe Rate:</strong> 1-2 lbs per week (0.5-1% body weight)</li>
                    <li>• <strong>Timeline:</strong> 12-24 weeks for significant results</li>
                    <li>• <strong>Not Linear:</strong> Some weeks slower due to water weight</li>
                    <li>• <strong>Sustainable:</strong> Slow and steady wins long-term</li>
                    <li>• <strong>Muscle Matters:</strong> Preserve lean mass while losing fat</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calorie Deficit Explained */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Creating Your Calorie Deficit for Weight Loss</h2>
            
            <Card className="border-red-200 mb-8">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Target className="w-6 h-6 text-red-600 mr-3" />
                  <CardTitle className="text-red-700">Calculate Your Weight Loss Calories</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-800 font-semibold">
                    🔥 Formula: TDEE (maintenance calories) - 500 to 750 = Weight Loss Calories
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold mb-2">Step 1: Calculate TDEE (Total Daily Energy Expenditure)</h5>
                    <p className="text-sm text-gray-700 mb-2">Use online calculator or rough estimate:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Sedentary woman:</strong> Body weight (lbs) × 12-14</li>
                      <li>• <strong>Active woman:</strong> Body weight × 14-16</li>
                      <li>• <strong>Sedentary man:</strong> Body weight × 14-16</li>
                      <li>• <strong>Active man:</strong> Body weight × 16-18</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold mb-2">Step 2: Subtract for Deficit</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Moderate deficit:</strong> TDEE - 500 calories (1 lb/week loss)</li>
                      <li>• <strong>Aggressive deficit:</strong> TDEE - 750 calories (1.5 lbs/week)</li>
                      <li>• <strong>Never go below:</strong> 1,200 cal (women) or 1,500 cal (men)</li>
                      <li>• <strong>Too large deficit:</strong> Lose muscle, slow metabolism, unsustainable</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-300">
                    <h5 className="font-semibold mb-2 text-green-800">Example Calculation:</h5>
                    <p className="text-sm text-gray-700">
                      Woman, 150 lbs, moderately active: <br/>
                      TDEE = 150 × 15 = 2,250 calories <br/>
                      Weight Loss = 2,250 - 500 = <strong>1,750 calories per day</strong> <br/>
                      Expected loss: 1 pound per week = 52 pounds per year
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-700">Macro Distribution for Fat Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  While calories matter most, macro balance affects hunger, muscle retention, and results quality. High protein 
                  is non-negotiable for weight loss - it preserves muscle, increases fullness, and has highest thermic effect (burns calories during digestion).
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-blue-800">Protein: 30-40%</h5>
                    <p className="text-2xl font-bold text-blue-700 mb-2">1.8-2.2g/kg</p>
                    <p className="text-sm text-gray-700">Or 0.8-1g per lb body weight. Preserves muscle, increases satiety.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-green-800">Carbs: 30-40%</h5>
                    <p className="text-2xl font-bold text-green-700 mb-2">Moderate</p>
                    <p className="text-sm text-gray-700">Energy for workouts. Choose complex carbs, high fiber.</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-orange-800">Fats: 20-30%</h5>
                    <p className="text-2xl font-bold text-orange-700 mb-2">Essential</p>
                    <p className="text-sm text-gray-700">Hormone production, satiety. Don't eliminate - focus on healthy fats.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Foods to Eat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Best Foods for Weight Loss</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ High-Volume, Low-Calorie Foods:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Lean Proteins (High Satiety):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Chicken breast, turkey breast</li>
                      <li>• White fish (cod, tilapia), salmon</li>
                      <li>• Egg whites + some whole eggs</li>
                      <li>• Greek yogurt (non-fat or low-fat)</li>
                      <li>• Cottage cheese, protein powder</li>
                      <li>• Tofu, tempeh, legumes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Non-Starchy Vegetables (Unlimited):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Leafy greens (spinach, kale, lettuce)</li>
                      <li>• Broccoli, cauliflower, Brussels sprouts</li>
                      <li>• Peppers, cucumber, zucchini</li>
                      <li>• Tomatoes, mushrooms, asparagus</li>
                      <li>• Very low calories, high fiber, filling</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Smart Carbs & Fats:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Oats, quinoa, brown rice (moderate portions)</li>
                      <li>• Sweet potatoes (not white)</li>
                      <li>• Berries (lower sugar than other fruits)</li>
                      <li>• Avocado (healthy fats, filling)</li>
                      <li>• Nuts (measured portions - calorie dense)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Foods to Limit or Avoid:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">High-Calorie, Low-Satiety:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sugary drinks (soda, juice, sweetened coffee)</li>
                      <li>• Alcohol (empty calories, lowers inhibitions)</li>
                      <li>• Fried foods (extremely calorie-dense)</li>
                      <li>• Fast food and processed snacks</li>
                      <li>• Pastries, cookies, cakes, candy</li>
                      <li>• Ice cream, full-sugar desserts</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Calorie Bombs to Watch:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Oils and butter (measure - 120 cal/tbsp)</li>
                      <li>• Nuts and nut butters (easy to overeat)</li>
                      <li>• Cheese (calorie-dense, measure portions)</li>
                      <li>• Granola (seems healthy but very high calorie)</li>
                      <li>• Dried fruit (concentrated sugar)</li>
                      <li>• Smoothies (can pack 500+ calories easily)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                    <h5 className="font-semibold mb-2 text-yellow-800">⚠️ Hidden Calories:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Coffee drinks (lattes, frappuccinos)</li>
                      <li>• Salad dressings (use sparingly)</li>
                      <li>• Sauces and condiments (ketchup, mayo)</li>
                      <li>• "Healthy" protein bars (often 200-300 cal)</li>
                      <li>• Restaurant meals (2-3x home-cooked calories)</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Weight Loss Meal Plan (1,500-1,700 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              High-protein meal plan designed for 1-2 lbs per week fat loss for a 150-180 lb person.
            </p>
            
            <Card className="border-red-200 mb-8">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-800">Sample Day - Weight Loss Diet</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:30 AM):</h5>
                    <p className="text-gray-700">Scrambled egg whites (3) + 1 whole egg, spinach, whole grain toast (1 slice), berries (1/2 cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~280 | Protein: 26g | High protein start</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM):</h5>
                    <p className="text-gray-700">Greek yogurt (non-fat, 1 cup) with cinnamon</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~120 | Protein: 20g | Keeps hunger at bay</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                    <p className="text-gray-700">Grilled chicken breast (150g), large salad (mixed greens, cucumber, tomatoes, peppers), balsamic vinegar, olive oil (1 tsp), apple</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~380 | Protein: 42g | High volume, very filling</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h5>
                    <p className="text-gray-700">Protein shake (whey protein + water + banana)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~180 | Protein: 25g | Pre-workout fuel if training</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                    <p className="text-gray-700">Baked white fish (180g), roasted broccoli and cauliflower, sweet potato (small, 100g), side salad</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~420 | Protein: 48g | Lean protein, filling vegetables</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Evening (Optional - 9:00 PM if hungry):</h5>
                    <p className="text-gray-700">Celery or cucumber sticks (unlimited), herbal tea</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~20 | Crunchy, satisfying, almost zero calories</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-red-200">
                  <p className="text-sm font-semibold text-red-700">Daily Total: ~1,400 calories | Protein: 161g (46% calories) | Carbs: 110g | Fats: 28g | High volume, very filling!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Weekly Meal Variety</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Breakfast Rotations:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Protein oatmeal (oats + protein powder + berries)</li>
                      <li>• Veggie omelet with toast</li>
                      <li>• Greek yogurt parfait with granola (measured)</li>
                      <li>• Cottage cheese with fruit</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Lunch Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Turkey breast with huge salad</li>
                      <li>• Tuna (in water) with vegetables</li>
                      <li>• Chicken stir-fry with loads of veggies</li>
                      <li>• Shrimp with zucchini noodles</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Dinner Ideas:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Lean beef with roasted vegetables</li>
                      <li>• Baked chicken with broccoli and quinoa</li>
                      <li>• Grilled fish with asparagus</li>
                      <li>• Turkey meatballs with zucchini noodles</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Low-Calorie Snacks:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Vegetables with hummus (measure)</li>
                      <li>• Hard-boiled eggs</li>
                      <li>• Rice cakes with PB2 (powdered peanut butter)</li>
                      <li>• Sugar-free jello or pickles (almost zero cal)</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Weight Loss Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Strategies That Work:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track calories initially:</strong> Use app for 2-4 weeks to learn portions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Protein at every meal:</strong> 20-40g keeps you full, preserves muscle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat vegetables first:</strong> Fill up on low-calorie volume before calorie-dense foods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Drink water before meals:</strong> Reduces hunger, helps with fullness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Meal prep on weekends:</strong> Removes decision fatigue, prevents bad choices</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too aggressive deficit:</strong> Lose muscle, slow metabolism, unsustainable</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eliminating entire food groups:</strong> Unnecessary, leads to cravings and binges</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not tracking liquid calories:</strong> Drinks can add 300-500 hidden calories</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Weekend binges:</strong> Undoing 5 days of deficit in 2 days</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Expecting linear progress:</strong> Weight fluctuates - track weekly average, not daily</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Accelerate Your Weight Loss Results
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Diet creates the calorie deficit, but exercise accelerates fat loss, preserves muscle, and boosts 
              metabolism. Get your complete weight loss workout plan to maximize results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Weight Loss Workouts</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover effective fat-burning workouts combining cardio and strength to maximize weight loss results.
                </p>
                <Button size="lg" className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/weight-loss">
                    View Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Flame className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized weight loss diet and workout plan tailored to your goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join thousands achieving sustainable weight loss through smart nutrition and exercise
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
