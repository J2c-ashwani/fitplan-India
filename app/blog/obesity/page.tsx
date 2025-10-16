import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Scale, Flame } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Obesity Diet Plan for Weight Loss 2025 | Proven Meal Plans & Strategies",
  description: "Complete obesity weight loss guide with proven meal plans, calorie deficit strategies, foods to eat and avoid, and expert tips for sustainable fat loss and health improvement.",
  keywords: "obesity diet plan, obesity weight loss, weight loss meal plan, obesity diet chart, how to lose weight with obesity, extreme weight loss diet, morbid obesity diet",
  openGraph: {
    title: "Obesity Diet Plan for Weight Loss 2025 | Evidence-Based Guide",
    description: "Science-backed obesity diet plan with meal examples, calorie strategies, and proven weight loss methods.",
    url: "https://fitplanindia.com/blog/obesity",
  },
}

export default function ObesityDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-700 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-orange-700 font-semibold">
              🎯 Complete Obesity Diet Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Obesity Diet Plan for Weight Loss: Complete Evidence-Based Guide
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover proven diet strategies for sustainable weight loss with obesity, including meal plans, 
              calorie management, portion control, and lifestyle changes for long-term health improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/obesity">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Obesity Workouts
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
                <div className="text-3xl font-bold text-orange-600 mb-2">1-2 lbs</div>
                <div className="text-gray-600">Safe Weekly Weight Loss</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">500-1000</div>
                <div className="text-gray-600">Daily Calorie Deficit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">5-10%</div>
                <div className="text-gray-600">Initial Weight Loss Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12-16 Weeks</div>
                <div className="text-gray-600">To See Major Changes</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Obesity and Weight Loss</h2>
              <p className="text-lg text-gray-700 mb-6">
                Obesity is defined as having a BMI of 30 or higher and affects over 650 million adults worldwide. 
                It's a complex condition influenced by genetics, environment, lifestyle, and metabolic factors. 
                Successful weight loss with obesity requires a comprehensive approach including proper nutrition, 
                portion control, regular physical activity, behavioral changes, and often medical support. Even a 
                5-10% weight loss can significantly improve health outcomes and reduce disease risk.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Health Risks of Obesity</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Type 2 diabetes and insulin resistance</li>
                    <li>• Heart disease and high blood pressure</li>
                    <li>• Sleep apnea and breathing problems</li>
                    <li>• Joint pain and mobility issues</li>
                    <li>• Increased cancer risk</li>
                    <li>• Mental health challenges</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-green-800">Benefits of Weight Loss</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Improved blood sugar and insulin sensitivity</li>
                    <li>• Lower blood pressure and cholesterol</li>
                    <li>• Better sleep quality and energy levels</li>
                    <li>• Reduced joint pain and improved mobility</li>
                    <li>• Decreased medication needs</li>
                    <li>• Enhanced self-esteem and quality of life</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obesity Diet Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Obesity Diet Principles for Sustainable Weight Loss</h2>
            
            <div className="space-y-8">
              {/* Calorie Deficit */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Flame className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">Creating a Safe Calorie Deficit</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-red-600 mr-2" />
                      <span><strong>500-1000 Cal Deficit</strong></span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                      <span><strong>1-2 lbs Per Week</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-pink-600 mr-2" />
                      <span><strong>Sustainable Pace</strong></span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Weight loss requires consuming fewer calories than you burn. For obesity, a deficit of 500-1000 
                    calories per day is safe and sustainable, leading to 1-2 pounds of fat loss per week.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">✅ Calculate Your Needs:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Step 1:</strong> Calculate BMR (base metabolism)</li>
                        <li>• <strong>Step 2:</strong> Multiply by activity level (1.2-1.5)</li>
                        <li>• <strong>Step 3:</strong> Subtract 500-1000 calories</li>
                        <li>• <strong>Minimum:</strong> 1200 cal (women), 1500 cal (men)</li>
                        <li>• <strong>Result:</strong> Your target daily calories</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-blue-700">📊 Example Calculation:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 250 lb woman, sedentary lifestyle</li>
                        <li>• BMR: ~1,800 calories</li>
                        <li>• TDEE: 1,800 × 1.2 = 2,160 calories</li>
                        <li>• Target: 2,160 - 750 = 1,410 calories</li>
                        <li>• Expected loss: 1.5 lbs per week</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Macronutrient Balance */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Utensils className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Optimal Macronutrient Balance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The right balance of protein, carbs, and fats helps preserve muscle mass, control hunger, and 
                    maintain energy during weight loss. Higher protein intake is especially important with obesity.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Protein: 30-35%</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Preserves lean muscle mass</li>
                        <li>• Increases satiety and fullness</li>
                        <li>• Higher thermic effect (burns calories)</li>
                        <li>• <strong>Target:</strong> 1g per lb goal weight</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Carbs: 40-45%</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Provides energy for activity</li>
                        <li>• Focus on whole grains, veggies</li>
                        <li>• Low glycemic index preferred</li>
                        <li>• <strong>Target:</strong> 150-200g daily</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-orange-800">Fats: 20-30%</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Essential for hormone health</li>
                        <li>• Helps absorb vitamins A,D,E,K</li>
                        <li>• Choose healthy unsaturated fats</li>
                        <li>• <strong>Target:</strong> 40-60g daily</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Portion Control & Meal Frequency */}
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Scale className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">Portion Control & Meal Timing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Portion control is crucial for weight loss with obesity. Using the plate method and eating at 
                    regular intervals helps manage hunger, prevent overeating, and maintain steady energy levels.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">The Plate Method:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>½ plate:</strong> Non-starchy vegetables</li>
                        <li>• <strong>¼ plate:</strong> Lean protein (palm-sized)</li>
                        <li>• <strong>¼ plate:</strong> Complex carbs (fist-sized)</li>
                        <li>• <strong>Side:</strong> Healthy fat (thumb-sized)</li>
                        <li>• Use smaller plates (9 inches)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Meal Frequency Options:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>3 meals + 2 snacks:</strong> Most common</li>
                        <li>• <strong>4-5 smaller meals:</strong> Better hunger control</li>
                        <li>• <strong>3 larger meals:</strong> Simpler to track</li>
                        <li>• <strong>Key:</strong> Consistency matters most</li>
                        <li>• Avoid eating within 2-3 hours of sleep</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Obesity Weight Loss Meal Plan (1,500 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              This balanced meal plan focuses on high protein, nutrient density, and sustainable portion sizes for steady weight loss.
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
                      <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:00 AM):</h5>
                      <p className="text-gray-700">Greek yogurt (1 cup) with mixed berries (1/2 cup), chia seeds (1 tbsp), and 10 almonds</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~320 | Protein: 22g | Carbs: 35g | Fat: 10g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM):</h5>
                      <p className="text-gray-700">Small apple with 1 tbsp natural peanut butter</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~180 | Protein: 4g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                      <p className="text-gray-700">Grilled chicken breast (150g), large mixed salad with tomatoes, cucumbers, peppers, olive oil dressing (1 tbsp), small sweet potato</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~420 | Protein: 42g | Carbs: 32g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h5>
                      <p className="text-gray-700">Celery sticks with hummus (3 tbsp)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~110 | Protein: 4g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                      <p className="text-gray-700">Baked salmon (150g) with steamed broccoli, cauliflower, and green beans, quinoa (1/3 cup cooked)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~470 | Protein: 40g | Omega-3: High</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <p className="text-sm font-semibold text-orange-700">Daily Total: ~1,500 calories | Protein: 112g | Carbs: 145g | Fat: 48g | Fiber: 32g</p>
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
                        <li>• Vegetable omelet with whole grain toast</li>
                        <li>• Steel-cut oats with protein powder and berries</li>
                        <li>• Protein smoothie with spinach and flaxseed</li>
                        <li>• Cottage cheese with cucumber and tomatoes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Lunch Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Turkey breast with large vegetable salad</li>
                        <li>• Tuna salad with mixed greens and avocado</li>
                        <li>• Grilled fish with roasted vegetables</li>
                        <li>• Chicken vegetable soup with side salad</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Dinner Ideas:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Lean beef with Brussels sprouts and brown rice</li>
                        <li>• Baked cod with asparagus and cauliflower mash</li>
                        <li>• Turkey meatballs with zucchini noodles</li>
                        <li>• Tofu stir-fry with mixed vegetables</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Snack Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Hard-boiled eggs with cherry tomatoes</li>
                        <li>• Protein shake (low-calorie)</li>
                        <li>• Raw vegetables with guacamole</li>
                        <li>• Greek yogurt with cinnamon</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Obesity Diet: Foods to Eat vs Avoid</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Foods for Weight Loss:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Lean Proteins (Priority):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Chicken breast, turkey breast</li>
                      <li>• Fish (salmon, tuna, cod, tilapia)</li>
                      <li>• Egg whites and whole eggs</li>
                      <li>• Greek yogurt, cottage cheese (low-fat)</li>
                      <li>• Plant proteins (tofu, tempeh, legumes)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Vegetables (Unlimited):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• All leafy greens (spinach, kale, lettuce)</li>
                      <li>• Broccoli, cauliflower, Brussels sprouts</li>
                      <li>• Peppers, tomatoes, cucumbers, zucchini</li>
                      <li>• Mushrooms, asparagus, green beans</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Smart Carbs (Moderate):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Quinoa, brown rice, oats</li>
                      <li>• Sweet potatoes (small portions)</li>
                      <li>• Legumes (beans, lentils)</li>
                      <li>• Berries (strawberries, blueberries)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Foods to Completely Avoid:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">High-Calorie Dense Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fast food (burgers, fries, pizza)</li>
                      <li>• Fried foods and deep-fried snacks</li>
                      <li>• Ice cream, milkshakes, desserts</li>
                      <li>• Candy, chocolate bars, cookies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Liquid Calories:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Regular soda and energy drinks</li>
                      <li>• Fruit juices (even "natural" ones)</li>
                      <li>• Sweetened coffee drinks</li>
                      <li>• Alcohol (beer, wine, cocktails)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Refined Carbs:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• White bread, white rice, pasta</li>
                      <li>• Sugary cereals, pastries, donuts</li>
                      <li>• Crackers, chips, pretzels</li>
                      <li>• Processed snack foods</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplements for Obesity */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Supplements That May Support Weight Loss</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200">
                <CardContent className="pt-6">
                  <Coffee className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Protein Powder</h4>
                  <p className="text-sm text-gray-700 mb-2">Helps meet daily protein needs and control hunger</p>
                  <p className="text-xs text-blue-600 font-semibold">Dose: 20-30g per serving</p>
                </CardContent>
              </Card>
              
              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Fiber Supplement</h4>
                  <p className="text-sm text-gray-700 mb-2">Increases satiety and supports digestive health</p>
                  <p className="text-xs text-green-600 font-semibold">Dose: 10-15g daily</p>
                </CardContent>
              </Card>
              
              <Card className="border-purple-200">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Multivitamin</h4>
                  <p className="text-sm text-gray-700 mb-2">Ensures adequate micronutrient intake during calorie restriction</p>
                  <p className="text-xs text-purple-600 font-semibold">Dose: As directed</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> Supplements are not magic pills. They work best alongside proper diet and exercise. 
                Consult with your healthcare provider before starting any supplement regimen, especially if taking medications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Obesity Weight Loss Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Strategies for Success:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track everything:</strong> Use apps to log food and monitor calories accurately</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Meal prep weekly:</strong> Prepare healthy meals in advance to avoid poor choices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Drink water first:</strong> Have 16 oz before meals to reduce portion sizes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize protein:</strong> Eat protein first at every meal for better satiety</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Get support:</strong> Join groups, work with dietitian, find accountability</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Pitfalls to Avoid:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Crash dieting:</strong> Extreme restriction leads to muscle loss and rebound weight gain</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>All-or-nothing thinking:</strong> One bad meal doesn't ruin your progress</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring emotions:</strong> Address emotional eating with healthier coping strategies</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Unrealistic expectations:</strong> Sustainable weight loss takes time and patience</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Diet only approach:</strong> Exercise and lifestyle changes are equally important</span>
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
              Complete Your Weight Loss Journey
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Diet is essential, but adding safe, effective exercise accelerates weight loss and improves overall 
              health. Get your complete obesity management plan today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Obesity Workout Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover safe, low-impact exercises designed for individuals with obesity to support weight loss and improve fitness.
                </p>
                <Button size="lg" className="w-full bg-white text-orange-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/obesity">
                    View Obesity Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Scale className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized weight loss meal plan tailored to your specific needs and goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Meal Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join thousands achieving sustainable weight loss through evidence-based methods
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
