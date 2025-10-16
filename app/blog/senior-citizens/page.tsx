import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Users, Pill } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Senior Citizen Diet Plan | Healthy Nutrition for Elderly & Aging",
  description: "Complete senior citizen diet guide with age-appropriate meal plans, bone health nutrition, heart-healthy foods, and strategies to maintain muscle mass and vitality after 60.",
  keywords: "senior citizen diet, elderly nutrition, diet for seniors, healthy eating for elderly, senior meal plan, nutrition for aging, diet for 60 plus, elderly weight management",
  openGraph: {
    title: "Senior Citizen Diet Plan | Nutrition Guide for Healthy Aging",
    description: "Science-backed senior diet with meal plans, bone health strategies, and nutrition for optimal aging.",
    url: "https://fitplanindia.com/blog/senior-citizens",
  },
}

export default function SeniorCitizenDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-blue-600 font-semibold">
              👴 Nutrition for Healthy Aging
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Senior Citizen Diet Plan: Nutrition for Vitality After 60
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover complete senior nutrition with age-appropriate meal plans, bone health strategies, heart-healthy 
              foods, muscle preservation, and dietary approaches for vibrant, independent living in golden years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="#nutrients">
                  Key Nutrients
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
                <div className="text-3xl font-bold text-blue-600 mb-2">1,200mg</div>
                <div className="text-gray-600">Daily Calcium (Bone Health)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">1.0-1.2g</div>
                <div className="text-gray-600">Protein per kg (Prevent Loss)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">8 cups</div>
                <div className="text-gray-600">Water Daily (Hydration)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">High</div>
                <div className="text-gray-600">Fiber (Digestion)</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Senior Nutrition Needs</h2>
              <p className="text-lg text-gray-700 mb-6">
                Nutritional needs change significantly after 60 due to decreased metabolism (need fewer calories), reduced 
                muscle mass (sarcopenia), changes in digestion and absorption, decreased appetite, medications affecting 
                nutrients, and chronic health conditions. However, nutrient density becomes MORE important - seniors need 
                same or higher amounts of protein, calcium, vitamin D, B12, and fiber but in fewer calories. Key challenges 
                include maintaining muscle mass (protein crucial), preventing bone loss (calcium and vitamin D), supporting 
                heart health (limit sodium, saturated fat), managing chronic diseases (diabetes, hypertension), preventing 
                malnutrition, and staying hydrated. Proper senior nutrition maintains independence, mobility, cognitive 
                function, immune health, and quality of life while reducing falls, fractures, hospitalization, and frailty.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Age-Related Nutrition Changes</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Metabolism slows 2-3% per decade after 30</li>
                    <li>• Muscle mass decreases (1-2% yearly after 50)</li>
                    <li>• Appetite and taste sensitivity decline</li>
                    <li>• Digestive absorption reduces (B12, calcium)</li>
                    <li>• Thirst sensation decreases (dehydration risk)</li>
                    <li>• Medications can interfere with nutrients</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-indigo-800">Why Senior Nutrition Matters</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Prevents muscle loss and frailty</li>
                    <li>• Maintains bone density (prevents fractures)</li>
                    <li>• Supports cognitive function and memory</li>
                    <li>• Boosts immune system (fewer infections)</li>
                    <li>• Manages chronic diseases effectively</li>
                    <li>• Maintains independence and quality of life</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Nutrients */}
      <section id="nutrients" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Critical Nutrients for Seniors (60+)</h2>
            
            <div className="space-y-6">
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Dumbbell className="w-6 h-6 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-700">Protein - Prevent Muscle Loss (Sarcopenia)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Why CRITICAL for Seniors:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Muscle mass decreases 1-2% yearly after 50</li>
                        <li>• Leads to weakness, falls, loss of independence</li>
                        <li>• Seniors need MORE protein per kg than young adults</li>
                        <li>• <strong>Need:</strong> 1.0-1.2g per kg body weight</li>
                        <li>• <strong>Example:</strong> 150 lb senior needs 70-80g daily</li>
                        <li>• Spread across all meals (20-30g each)</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Best Protein Sources:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Lean meats:</strong> Chicken, turkey, lean beef</li>
                        <li>• <strong>Fish:</strong> Salmon, tuna (omega-3 bonus)</li>
                        <li>• <strong>Eggs:</strong> Easy to chew, complete protein</li>
                        <li>• <strong>Dairy:</strong> Greek yogurt, cottage cheese, milk</li>
                        <li>• <strong>Legumes:</strong> Beans, lentils (fiber too)</li>
                        <li>• <strong>Protein shakes:</strong> If appetite is poor</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-700">Calcium & Vitamin D - Bone Health (Prevent Osteoporosis)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Calcium (1,200mg daily for 50+):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Bone density peaks at 30, then declines</li>
                        <li>• Women especially at risk (post-menopause)</li>
                        <li>• Prevents fractures (hip fractures deadly for seniors)</li>
                        <li>• <strong>Sources:</strong> Dairy (best absorbed), fortified foods, leafy greens, sardines with bones</li>
                        <li>• May need supplement if diet insufficient</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Vitamin D (800-1000 IU daily):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Essential for calcium absorption</li>
                        <li>• Skin production decreases with age</li>
                        <li>• <strong>Sources:</strong> Sunlight (15-20 min daily), fatty fish, fortified milk, eggs</li>
                        <li>• <strong>Most seniors need supplement</strong></li>
                        <li>• Get blood test to check levels</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700">Vitamin B12 - Brain & Nerve Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Why Seniors Often Deficient:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Reduced stomach acid</strong> with age (needed to absorb B12)</li>
                      <li>• <strong>Medications</strong> (metformin, PPIs) interfere with absorption</li>
                      <li>• <strong>Deficiency causes:</strong> Fatigue, weakness, memory problems, nerve damage, anemia</li>
                      <li>• <strong>Need:</strong> 2.4mcg daily (often need supplement or fortified foods)</li>
                      <li>• <strong>Sources:</strong> Meat, fish, eggs, dairy, fortified cereals</li>
                      <li>• <strong>Ask doctor</strong> about B12 blood test and supplement</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">Fiber & Hydration - Digestive Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Fiber (25-30g daily):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Prevents constipation (common in seniors)</li>
                        <li>• Lowers cholesterol</li>
                        <li>• Helps blood sugar control</li>
                        <li>• <strong>Sources:</strong> Whole grains, fruits, vegetables, legumes, oats</li>
                        <li>• Increase gradually (avoid gas/bloating)</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Water (8 cups daily):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Thirst sensation decreases</strong> with age</li>
                        <li>• Dehydration causes confusion, falls, UTIs</li>
                        <li>• Helps medication work properly</li>
                        <li>• Prevents constipation</li>
                        <li>• <strong>Set reminders</strong> to drink throughout day</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Foods for Common Senior Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Managing Common Senior Health Conditions with Diet</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700">High Blood Pressure (Hypertension)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1 text-green-800">✅ Eat:</h5>
                      <p className="text-xs text-gray-700">Fruits, vegetables, low-fat dairy, whole grains, lean proteins (DASH diet)</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1 text-red-800">❌ Limit:</h5>
                      <p className="text-xs text-gray-700">Sodium (under 1,500mg), processed foods, canned soups, deli meats</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-700">Type 2 Diabetes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1 text-green-800">✅ Eat:</h5>
                      <p className="text-xs text-gray-700">Non-starchy vegetables, lean proteins, whole grains (small portions), legumes</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1 text-red-800">❌ Limit:</h5>
                      <p className="text-xs text-gray-700">Sugary foods, white bread/rice, sugary drinks, large carb portions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700">High Cholesterol</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1 text-green-800">✅ Eat:</h5>
                      <p className="text-xs text-gray-700">Oats, fatty fish, nuts, olive oil, fruits, vegetables (soluble fiber)</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1 text-red-800">❌ Limit:</h5>
                      <p className="text-xs text-gray-700">Saturated fats (red meat, full-fat dairy), trans fats, fried foods</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-700">Osteoporosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1 text-green-800">✅ Eat:</h5>
                      <p className="text-xs text-gray-700">Dairy products, fortified foods, leafy greens, sardines, salmon with bones</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h5 className="font-semibold text-sm mb-1 text-red-800">❌ Limit:</h5>
                      <p className="text-xs text-gray-700">Excessive caffeine, alcohol, high sodium (leaches calcium from bones)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Meal Plan */}
      <section id="meal-plans" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Senior Citizen Meal Plan (1,600-1,800 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Balanced nutrition for healthy aging with adequate protein, calcium, fiber, and nutrients for a 150 lb senior.
            </p>
            
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Sample Day - Senior Nutrition</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (8:00 AM):</h5>
                    <p className="text-gray-700">Oatmeal (1 cup) with berries, walnuts (1 oz), skim milk, fortified orange juice (1 cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~420 | Protein: 16g | Calcium, vitamin D, fiber</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM):</h5>
                    <p className="text-gray-700">Greek yogurt (1 cup) with honey, apple slices</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~240 | Protein: 20g | Calcium, probiotics</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                    <p className="text-gray-700">Grilled salmon (4 oz), brown rice (1/2 cup), steamed broccoli, side salad with olive oil, whole grain roll</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~520 | Protein: 36g | Omega-3, vitamin D, fiber</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h5>
                    <p className="text-gray-700">Hummus (1/4 cup) with baby carrots and whole grain crackers</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~180 | Protein: 8g | Fiber, easy to eat</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (6:30 PM):</h5>
                    <p className="text-gray-700">Baked chicken breast (4 oz), sweet potato (medium), green beans, mixed salad, low-fat milk (1 cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~480 | Protein: 42g | Complete balanced meal</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Evening (Optional - 8:30 PM):</h5>
                    <p className="text-gray-700">Low-fat cottage cheese (1/2 cup) with peaches</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~120 | Protein: 14g | Slow-digesting protein</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-sm font-semibold text-blue-700">Daily Total: ~1,960 calories | Protein: 136g | Calcium: 1,300mg | Fiber: 32g | Age-appropriate nutrition!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Weekly Senior Meal Variety</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Easy-to-Eat Breakfast Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Scrambled eggs with whole wheat toast</li>
                      <li>• Smoothie with protein powder, fruit, milk</li>
                      <li>• Greek yogurt parfait with soft granola</li>
                      <li>• Fortified cereal with milk and banana</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Soft, Nutritious Lunch Ideas:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Chicken soup with vegetables and beans</li>
                      <li>• Tuna salad sandwich (whole wheat)</li>
                      <li>• Lentil soup with whole grain roll</li>
                      <li>• Baked fish with mashed sweet potato</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Balanced Dinner Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Turkey meatloaf with vegetables</li>
                      <li>• Baked chicken with quinoa and greens</li>
                      <li>• Salmon with brown rice and broccoli</li>
                      <li>• Lean beef stew with root vegetables</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Nutrient-Dense Snacks:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Cheese and whole grain crackers</li>
                      <li>• Trail mix (nuts, dried fruit)</li>
                      <li>• Banana with peanut butter</li>
                      <li>• Protein shake or milk</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Senior Nutrition Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat smaller frequent meals:</strong> 5-6 times daily if large meals difficult</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Protein at every meal:</strong> Prevents muscle loss (sarcopenia)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated:</strong> Set reminders, drink with meals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Take supplements if needed:</strong> B12, vitamin D, calcium (ask doctor)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Make meals social:</strong> Eat with family/friends to enjoy more</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping meals:</strong> Leads to malnutrition and weakness</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not eating enough protein:</strong> Accelerates muscle loss</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring hydration:</strong> Confusion, falls, UTIs from dehydration</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much processed food:</strong> High sodium, low nutrients</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not adjusting for medications:</strong> Some affect appetite/nutrients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Age Gracefully with Proper Nutrition & Gentle Exercise
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Good nutrition provides the foundation, but gentle regular movement maintains strength, balance, and 
              independence. Discover senior-appropriate exercises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Senior Fitness Programs</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Gentle, safe exercises for balance, strength, and mobility designed for 60+ adults.
                </p>
                <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/senior-citizens">
                    View Senior Workouts
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized senior nutrition plan for your health needs.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Always consult your healthcare provider before major dietary changes, especially with medications
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
