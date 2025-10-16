import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Zap, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Muscle Gain Diet Plan | Complete Bulking Guide to Build Muscle Mass",
  description: "Complete muscle gain diet guide with bulking meal plans, calorie surplus strategies, high-protein nutrition, muscle building foods, and mass gain for bodybuilding.",
  keywords: "muscle gain diet, bulking diet plan, build muscle mass, bodybuilding nutrition, high protein diet, calorie surplus, mass gainer meal plan, muscle building foods",
  openGraph: {
    title: "Muscle Gain Diet Plan | Complete Guide to Bulking",
    description: "Evidence-based muscle gain diet with meal plans, calorie surplus, and mass building strategies.",
    url: "https://fitplanindia.com/blog/muscle-gain",
  },
}

export default function MuscleGainDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-blue-700 font-semibold">
              💪 Complete Muscle Building Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Muscle Gain Diet Plan: Build Mass & Strength Effectively
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover evidence-based muscle building nutrition including calorie surplus strategies, high-protein 
              meal plans, optimal nutrient timing, mass gain foods, and complete bulking guide for maximum muscle growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/muscle-gain">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Muscle Building Workouts
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
                <div className="text-3xl font-bold text-blue-600 mb-2">300-500</div>
                <div className="text-gray-600">Daily Calorie Surplus</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">2.0-2.6g</div>
                <div className="text-gray-600">Protein per kg Body Weight</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">0.5-1 lb</div>
                <div className="text-gray-600">Muscle Gain Per Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">12-24</div>
                <div className="text-gray-600">Weeks Bulking Phase</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Muscle Gain Nutrition</h2>
              <p className="text-lg text-gray-700 mb-6">
                Building muscle requires eating in a calorie surplus - consuming more calories than you burn - to provide 
                energy for intense training and raw materials for muscle growth. Natural muscle gain is slow: beginners can 
                build 1-2 lbs of muscle monthly, intermediates 0.5-1 lb monthly, and advanced lifters even less. A moderate 
                300-500 calorie surplus maximizes muscle gain while minimizing fat accumulation. Protein is critical (2.0-2.6g 
                per kg body weight) for muscle protein synthesis - the process of building new muscle tissue. Carbohydrates 
                fuel intense workouts and replenish glycogen stores, while healthy fats support hormone production (testosterone, 
                growth hormone) essential for muscle growth. Strategic nutrient timing around workouts enhances results.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Benefits of Lean Bulking</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Increased muscle mass and strength</li>
                    <li>• Enhanced athletic performance</li>
                    <li>• Improved body composition (muscle:fat ratio)</li>
                    <li>• Boosted metabolism (muscle burns calories)</li>
                    <li>• Better insulin sensitivity</li>
                    <li>• Increased confidence and physique goals</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-indigo-800">Realistic Muscle Gain Expectations</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Beginner (0-1 year):</strong> 1-2 lbs muscle per month</li>
                    <li>• <strong>Intermediate (1-3 years):</strong> 0.5-1 lb per month</li>
                    <li>• <strong>Advanced (3+ years):</strong> 0.25-0.5 lb per month</li>
                    <li>• <strong>Natural limit:</strong> 40-50 lbs total muscle gain</li>
                    <li>• <strong>Be patient:</strong> Building muscle takes years, not months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calorie Surplus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Creating Your Muscle Building Calorie Surplus</h2>
            
            <Card className="border-blue-200 mb-8">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Target className="w-6 h-6 text-blue-600 mr-3" />
                  <CardTitle className="text-blue-700">Calculate Your Bulking Calories</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-800 font-semibold">
                    💪 Formula: TDEE (maintenance calories) + 300 to 500 = Muscle Gain Calories
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold mb-2">Step 1: Calculate TDEE</h5>
                    <p className="text-sm text-gray-700 mb-2">Total Daily Energy Expenditure (maintenance):</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Active man:</strong> Body weight (lbs) × 16-18</li>
                      <li>• <strong>Active woman:</strong> Body weight × 14-16</li>
                      <li>• Or use online TDEE calculator for precision</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h5 className="font-semibold mb-2">Step 2: Add Surplus</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Lean bulk (recommended):</strong> TDEE + 300-500 calories</li>
                      <li>• <strong>Aggressive bulk:</strong> TDEE + 500-700 (more fat gain)</li>
                      <li>• <strong>Goal:</strong> 0.5-1 lb weight gain per week</li>
                      <li>• <strong>Monitor:</strong> If gaining too fast (2+ lbs/week), it's mostly fat</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-300">
                    <h5 className="font-semibold mb-2 text-green-800">Example Calculation:</h5>
                    <p className="text-sm text-gray-700">
                      Man, 170 lbs, lifts 4-5x weekly: <br/>
                      TDEE = 170 × 17 = 2,890 calories <br/>
                      Muscle Gain = 2,890 + 400 = <strong>3,290 calories per day</strong> <br/>
                      Expected gain: 0.5-1 lb per week = 2-4 lbs per month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200">
              <CardHeader>
                <CardTitle className="text-indigo-700">Macro Distribution for Muscle Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Macronutrient balance is crucial for muscle building. High protein is mandatory, carbs fuel intense 
                  training and glycogen replenishment, and fats support hormone production for growth.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-red-800">Protein: 25-35%</h5>
                    <p className="text-2xl font-bold text-red-700 mb-2">2.0-2.6g/kg</p>
                    <p className="text-sm text-gray-700">Or 0.9-1.2g per lb body weight. Essential for muscle repair and growth.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-blue-800">Carbs: 45-60%</h5>
                    <p className="text-2xl font-bold text-blue-700 mb-2">High</p>
                    <p className="text-sm text-gray-700">Fuel intense workouts, replenish glycogen, support recovery and growth.</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-orange-800">Fats: 20-30%</h5>
                    <p className="text-2xl font-bold text-orange-700 mb-2">Moderate</p>
                    <p className="text-sm text-gray-700">Hormone production (testosterone), overall health, calorie density.</p>
                  </div>
                </div>

                <div className="mt-4 bg-blue-100 border border-blue-300 rounded-lg p-4">
                  <h5 className="font-semibold mb-2 text-blue-800">Example Macros (3,290 calories):</h5>
                  <p className="text-sm text-gray-700">
                    Protein: 205g (25% = 820 cal) | Carbs: 452g (55% = 1,810 cal) | Fats: 73g (20% = 660 cal)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Foods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Best Foods for Muscle Gain</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Muscle Building Power Foods:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">High-Quality Proteins:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Lean meats:</strong> Chicken breast, turkey, lean beef</li>
                      <li>• <strong>Fish:</strong> Salmon, tuna, tilapia (omega-3s)</li>
                      <li>• <strong>Eggs:</strong> Whole eggs (yolk has nutrients + hormones)</li>
                      <li>• <strong>Dairy:</strong> Greek yogurt, cottage cheese, milk</li>
                      <li>• <strong>Plant protein:</strong> Tofu, tempeh, legumes</li>
                      <li>• <strong>Whey protein:</strong> Post-workout shakes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Complex Carbohydrates:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Whole grains:</strong> Oats, brown rice, quinoa, whole wheat</li>
                      <li>• <strong>Starchy vegetables:</strong> Sweet potatoes, white potatoes</li>
                      <li>• <strong>Pasta:</strong> Whole grain pasta (pre-workout)</li>
                      <li>• <strong>Fruits:</strong> Bananas, berries, apples</li>
                      <li>• Provides sustained energy for intense training</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Healthy Fats:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Nuts & seeds:</strong> Almonds, walnuts, chia, flax</li>
                      <li>• <strong>Nut butters:</strong> Peanut, almond butter (calorie-dense)</li>
                      <li>• <strong>Avocados:</strong> Healthy fats, potassium</li>
                      <li>• <strong>Olive oil:</strong> Cooking and dressing</li>
                      <li>• <strong>Fatty fish:</strong> Salmon, mackerel (omega-3s)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-700">📊 Mass Gainer Foods (Calorie-Dense):</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">When Struggling to Eat Enough:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Smoothies:</strong> Oats, protein powder, banana, PB, milk (800+ cal)</li>
                      <li>• <strong>Dried fruits:</strong> Dates, raisins (calorie-dense)</li>
                      <li>• <strong>Granola:</strong> With yogurt or milk</li>
                      <li>• <strong>Whole milk:</strong> Instead of water (150 cal/cup)</li>
                      <li>• <strong>Rice:</strong> Easy to eat large portions</li>
                      <li>• <strong>Mass gainer shakes:</strong> 500-1000 calories</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
                    <h5 className="font-semibold mb-2 text-yellow-800">⚠️ Foods to Minimize:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Junk food:</strong> Empty calories, poor nutrition</li>
                      <li>• <strong>Excessive sugar:</strong> Causes fat gain, not muscle</li>
                      <li>• <strong>Alcohol:</strong> Impairs protein synthesis, recovery</li>
                      <li>• <strong>Trans fats:</strong> Inflammatory, unhealthy</li>
                      <li>• <strong>Goal:</strong> 80-90% whole foods, 10-20% flexible</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-purple-800">💊 Helpful Supplements:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Whey protein:</strong> Convenient protein source</li>
                      <li>• <strong>Creatine monohydrate:</strong> 5g daily (proven)</li>
                      <li>• <strong>Mass gainer:</strong> If can't eat enough whole food</li>
                      <li>• <strong>Optional:</strong> BCAAs, pre-workout, vitamin D</li>
                      <li>• Food first, supplements fill gaps only</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Muscle Gain Meal Plan (3,200-3,500 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              High-protein, high-carb bulking plan for a 170 lb individual training 4-5x per week.
            </p>
            
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Sample Day - Muscle Building Diet</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:30 AM):</h5>
                    <p className="text-gray-700">4 whole eggs scrambled, oatmeal (1 cup dry) with berries and honey, whole grain toast (2 slices) with peanut butter, orange juice</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~820 | Protein: 42g | Carbs: 95g | Kickstart metabolism</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM):</h5>
                    <p className="text-gray-700">Greek yogurt (full-fat, 2 cups), granola (1/2 cup), banana, almonds (1 oz)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~620 | Protein: 38g | Sustained energy</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                    <p className="text-gray-700">Grilled chicken breast (250g), brown rice (1.5 cups cooked), mixed vegetables, avocado, olive oil drizzle</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~780 | Protein: 62g | Carbs: 78g | Main meal</p>
                  </div>

                  <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-1">Pre-Workout (3:30 PM - 1 hour before gym):</h5>
                    <p className="text-gray-700">Banana, rice cakes (2) with honey, coffee (optional)</p>
                    <p className="text-sm text-green-600 mt-1">Calories: ~280 | Quick-digesting carbs for energy</p>
                  </div>

                  <div className="bg-purple-50 border border-purple-300 rounded-lg p-4">
                    <h5 className="font-semibold text-purple-800 mb-1">Post-Workout Shake (5:30 PM - immediately after):</h5>
                    <p className="text-gray-700">Whey protein (2 scoops), banana, oats (1/2 cup), peanut butter (2 tbsp), whole milk (16 oz)</p>
                    <p className="text-sm text-purple-600 mt-1">Calories: ~820 | Protein: 60g | Anabolic window!</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:30 PM):</h5>
                    <p className="text-gray-700">Salmon (200g), sweet potato (large), roasted vegetables with olive oil, quinoa (1/2 cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~720 | Protein: 56g | Omega-3s for recovery</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Before Bed (10:00 PM):</h5>
                    <p className="text-gray-700">Cottage cheese (1 cup), mixed berries, walnuts (1 oz)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~360 | Protein: 30g | Slow-digesting protein for overnight recovery</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-sm font-semibold text-blue-700">Daily Total: ~4,400 calories | Protein: 288g | Carbs: 480g | Fats: 132g | Muscle-building surplus!</p>
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
                    <h5 className="font-semibold mb-3">Breakfast Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Protein pancakes with syrup and eggs</li>
                      <li>• Breakfast burrito (eggs, cheese, beans, tortilla)</li>
                      <li>• Smoothie bowl with protein powder and toppings</li>
                      <li>• French toast with eggs and bacon</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Lunch Ideas:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Beef and rice bowl with vegetables</li>
                      <li>• Pasta with ground turkey and marinara</li>
                      <li>• Chicken teriyaki with noodles</li>
                      <li>• Burrito bowl (rice, beans, meat, cheese)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Dinner Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Steak with baked potato and vegetables</li>
                      <li>• Chicken curry with rice</li>
                      <li>• Turkey chili with cornbread</li>
                      <li>• Grilled fish with quinoa and asparagus</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">High-Calorie Snacks:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Trail mix (nuts, dried fruit, chocolate)</li>
                      <li>• Protein bars (400+ calories)</li>
                      <li>• PB&J sandwich on whole grain bread</li>
                      <li>• Cheese and crackers with deli meat</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Muscle Gain Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat at consistent times:</strong> 5-6 meals daily, never skip</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track your weight weekly:</strong> Aim for 0.5-1 lb gain per week</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Protein at every meal:</strong> 30-50g per meal, 5-6x daily</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Post-workout nutrition:</strong> Within 1 hour, high protein + carbs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Sleep 7-9 hours:</strong> Muscle grows during sleep, not gym</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Dirty bulking:</strong> Eating too much junk = excess fat gain</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not eating enough:</strong> Can't build muscle in calorie deficit</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Low protein intake:</strong> Need 2.0-2.6g/kg for muscle growth</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Expecting fast results:</strong> Muscle building takes months/years</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Neglecting training:</strong> Diet alone won't build muscle - must lift heavy!</span>
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
              Complete Your Muscle Building Journey
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Nutrition provides the raw materials, but intense training triggers muscle growth. Get your complete 
              muscle building workout plan to maximize hypertrophy and strength gains.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Muscle Building Workouts</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover effective hypertrophy training programs to maximize muscle growth and strength gains.
                </p>
                <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/muscle-gain">
                    View Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized muscle gain diet and workout plan for your body type.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join thousands building lean muscle through smart nutrition and progressive training
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
