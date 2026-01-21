import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Activity, Droplet } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diabetes Diet Plan for Weight Loss 2025 | Best Foods & Meal Plans",
  description: "Complete diabetes diet guide with proven meal plans, blood sugar control strategies, foods to eat and avoid, and expert tips for sustainable weight loss with diabetes.",
  keywords: "diabetes diet plan, diabetic weight loss, type 2 diabetes diet, blood sugar diet, diabetic meal plan, diabetes foods to avoid, diabetic diet chart, diabetes management",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/diabetes",
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
    title: "Diabetes Diet Plan for Weight Loss 2025 | Evidence-Based Guide",
    description: "Science-backed diabetes diet plan with meal examples, blood sugar management, and proven weight loss methods.",
    url: "https://www.fitplanindia.com/blog/diabetes",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function DiabetesDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-cyan-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-blue-700 font-semibold">
              🩺 Complete Diabetes Diet Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Diabetes Diet Plan for Weight Loss: Complete Blood Sugar Control Guide
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover proven diabetes diet strategies to control blood sugar levels, achieve healthy weight loss,
              and reduce medication dependency through evidence-based nutrition and lifestyle changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/diabetes">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Diabetes Workouts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl mt-12">
        <ExpertNote
          title="Ayurvedic View on Diabetes (Madhumeha)"
          content="We often call Diabetes 'the disease of abundance.' In my clinic, I see patients who over-consume sweet, heavy foods. The cure starts with 'Tikta' (bitter) tastes like Methi (fenugreek) and Karela (bitter gourd), which naturally curb sugar cravings and improve insulin sensitivity."
        />
      </div>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5-10%</div>
                <div className="text-gray-600">Weight Loss Improves Control</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">45-55g</div>
                <div className="text-gray-600">Carbs Per Meal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">1-2%</div>
                <div className="text-gray-600">HbA1c Reduction Possible</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">90 Days</div>
                <div className="text-gray-600">To See Results</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Diabetes and Diet</h2>
              <p className="text-lg text-gray-700 mb-6">
                Diabetes affects over 463 million adults worldwide, with type 2 diabetes accounting for 90-95% of cases.
                Diet plays a crucial role in managing blood sugar levels, preventing complications, and achieving healthy
                weight loss. The right diabetes diet plan can help stabilize glucose levels, improve insulin sensitivity,
                reduce medication needs, and significantly improve quality of life.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">How Diabetes Affects Weight</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Insulin resistance promotes fat storage</li>
                    <li>• High blood sugar increases hunger and cravings</li>
                    <li>• Medications can cause weight gain</li>
                    <li>• Inflammation affects metabolism</li>
                    <li>• Energy fluctuations reduce activity levels</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-green-800">Diet Benefits for Diabetes</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Stabilizes blood sugar levels naturally</li>
                    <li>• Reduces HbA1c by 1-2% in 3 months</li>
                    <li>• Decreases medication dependency</li>
                    <li>• Prevents diabetes complications</li>
                    <li>• Supports healthy, sustainable weight loss</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diabetes Diet Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Diabetes Diet Principles for Blood Sugar Control</h2>

            <div className="space-y-8">
              {/* Carbohydrate Management */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Apple className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Carbohydrate Counting & Glycemic Control</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-blue-600 mr-2" />
                      <span><strong>45-60g Per Meal</strong></span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                      <span><strong>Low Glycemic Index</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Activity className="w-5 h-5 text-purple-600 mr-2" />
                      <span><strong>Consistent Timing</strong></span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Controlling carbohydrate intake is the most important dietary strategy for managing blood sugar.
                    Choose complex carbs with low glycemic index to prevent spikes and maintain stable glucose levels.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">✅ Best Carbohydrate Choices:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Whole grains (brown rice, quinoa, oats)</li>
                        <li>• Legumes (lentils, chickpeas, beans)</li>
                        <li>• Non-starchy vegetables (unlimited)</li>
                        <li>• Berries and low-sugar fruits</li>
                        <li>• Sweet potatoes (moderate portions)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-red-700">❌ Avoid High-Glycemic Carbs:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• White bread, white rice, pasta</li>
                        <li>• Sugary cereals and pastries</li>
                        <li>• Candy, cookies, cakes</li>
                        <li>• Sugary drinks and fruit juices</li>
                        <li>• Potatoes (especially fried)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Protein & Healthy Fats */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Utensils className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">Protein & Healthy Fats for Satiety</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Adequate protein and healthy fats help slow glucose absorption, keep you full longer, and support
                    stable blood sugar levels. Aim for 25-30g protein per meal and include healthy fats at each meal.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Lean Proteins:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Skinless chicken breast</li>
                        <li>• Fish (salmon, tuna, cod)</li>
                        <li>• Eggs and egg whites</li>
                        <li>• Greek yogurt (unsweetened)</li>
                        <li>• Tofu, tempeh, legumes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Healthy Fats:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Avocados</li>
                        <li>• Nuts (almonds, walnuts)</li>
                        <li>• Seeds (chia, flax, hemp)</li>
                        <li>• Olive oil (extra virgin)</li>
                        <li>• Fatty fish (omega-3s)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Fiber-Rich Foods:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Vegetables (all types)</li>
                        <li>• Legumes and lentils</li>
                        <li>• Whole grains</li>
                        <li>• Berries and apples</li>
                        <li>• Nuts and seeds</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Meal Timing & Portion Control */}
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Droplet className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">Meal Timing & Blood Sugar Stability</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Eating at consistent times helps regulate blood sugar and improves insulin response. The plate
                    method is an excellent tool for portion control: fill half your plate with non-starchy vegetables,
                    one quarter with lean protein, and one quarter with complex carbohydrates.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Ideal Meal Schedule:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Breakfast:</strong> Within 1 hour of waking</li>
                        <li>• <strong>Mid-Morning Snack:</strong> 2-3 hours after breakfast</li>
                        <li>• <strong>Lunch:</strong> 4-5 hours after breakfast</li>
                        <li>• <strong>Afternoon Snack:</strong> 2-3 hours after lunch</li>
                        <li>• <strong>Dinner:</strong> 4-5 hours after lunch</li>
                        <li>• <strong>Evening Snack:</strong> Optional, if needed</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Portion Control Tips:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Use smaller plates (9 inches)</li>
                        <li>• Measure portions initially</li>
                        <li>• Follow the plate method</li>
                        <li>• Eat slowly and mindfully</li>
                        <li>• Stop when 80% full</li>
                        <li>• Avoid second servings</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Diabetes Meal Plan for Weight Loss</h2>
            <p className="text-center text-gray-600 mb-12">
              This balanced meal plan focuses on blood sugar control, consistent carbohydrate intake, and optimal nutrient timing.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Day 1 - Monday</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:00 AM):</h5>
                      <p className="text-gray-700">Vegetable omelet (2 eggs) with spinach and mushrooms, whole grain toast (1 slice), avocado (1/4), Greek yogurt (1/2 cup)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~400 | Protein: 28g | Carbs: 32g | Fiber: 8g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:00 AM):</h5>
                      <p className="text-gray-700">Small apple with 1 tbsp almond butter</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~160 | Carbs: 20g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                      <p className="text-gray-700">Grilled chicken breast (150g), quinoa (1/2 cup cooked), roasted vegetables (broccoli, bell peppers), large green salad with olive oil dressing</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~480 | Protein: 42g | Carbs: 38g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h5>
                      <p className="text-gray-700">Carrot and cucumber sticks with hummus (3 tbsp)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~130 | Carbs: 15g</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                      <p className="text-gray-700">Baked salmon (150g) with lemon and herbs, brown rice (1/3 cup cooked), steamed asparagus and green beans</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~450 | Protein: 38g | Carbs: 32g | Omega-3: High</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-sm font-semibold text-blue-700">Daily Total: ~1,620 calories | Protein: 108g | Carbs: 137g | Fiber: 35g</p>
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
                        <li>• Steel-cut oats with berries and nuts</li>
                        <li>• Greek yogurt parfait with seeds and cinnamon</li>
                        <li>• Vegetable frittata with whole grain toast</li>
                        <li>• Protein smoothie with spinach and flaxseed</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Lunch Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Turkey lettuce wraps with vegetables</li>
                        <li>• Lentil soup with mixed green salad</li>
                        <li>• Tuna salad on whole grain bread</li>
                        <li>• Chicken and vegetable stir-fry with cauliflower rice</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Dinner Ideas:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Lean beef with roasted Brussels sprouts</li>
                        <li>• Baked cod with Mediterranean vegetables</li>
                        <li>• Turkey chili with beans and vegetables</li>
                        <li>• Tofu vegetable curry with brown rice</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Snack Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Hard-boiled eggs with cherry tomatoes</li>
                        <li>• Celery with natural peanut butter</li>
                        <li>• Mixed nuts (1/4 cup)</li>
                        <li>• Cottage cheese with cucumber slices</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Diabetes Diet: Foods to Eat vs Avoid</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Foods for Diabetics:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Vegetables (Unlimited):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Leafy greens (spinach, kale, lettuce)</li>
                      <li>• Cruciferous (broccoli, cauliflower)</li>
                      <li>• Peppers, tomatoes, cucumbers</li>
                      <li>• Zucchini, eggplant, mushrooms</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Lean Proteins:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fish (salmon, tuna, sardines)</li>
                      <li>• Skinless poultry</li>
                      <li>• Eggs (whole or whites)</li>
                      <li>• Low-fat Greek yogurt, cottage cheese</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Healthy Carbs:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Steel-cut oats, quinoa</li>
                      <li>• Brown rice, whole wheat</li>
                      <li>• Legumes (beans, lentils)</li>
                      <li>• Berries (in moderation)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Foods to Avoid or Limit:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">High-Sugar Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Candy, cookies, cakes, pastries</li>
                      <li>• Ice cream, sweetened yogurt</li>
                      <li>• Regular soda, fruit juices</li>
                      <li>• Sweetened coffee drinks</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Refined Carbohydrates:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• White bread, white rice</li>
                      <li>• Regular pasta, crackers</li>
                      <li>• Breakfast cereals (sugary)</li>
                      <li>• Chips, pretzels</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Unhealthy Fats:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fried foods</li>
                      <li>• Processed meats (bacon, sausage)</li>
                      <li>• Full-fat dairy (excessive amounts)</li>
                      <li>• Trans fats, hydrogenated oils</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diabetes Supplements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Evidence-Based Diabetes Supplements</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200">
                <CardContent className="pt-6">
                  <Coffee className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Chromium</h4>
                  <p className="text-sm text-gray-700 mb-2">Improves insulin sensitivity and glucose metabolism</p>
                  <p className="text-xs text-blue-600 font-semibold">Dose: 200-1000 mcg daily</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Magnesium</h4>
                  <p className="text-sm text-gray-700 mb-2">Supports blood sugar control and insulin function</p>
                  <p className="text-xs text-green-600 font-semibold">Dose: 300-400mg daily</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Alpha-Lipoic Acid</h4>
                  <p className="text-sm text-gray-700 mb-2">Reduces oxidative stress and improves nerve function</p>
                  <p className="text-xs text-purple-600 font-semibold">Dose: 300-600mg daily</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> Always consult your healthcare provider before starting supplements,
                especially if you're taking diabetes medications. Some supplements may interact with medications or
                affect blood sugar levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Diabetes Diet Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Do This for Better Control:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Monitor blood sugar regularly:</strong> Track patterns and adjust diet accordingly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat at consistent times:</strong> Maintains stable blood glucose levels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Count carbohydrates:</strong> Know how many carbs you're eating per meal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated:</strong> Drink 8-10 glasses of water daily</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Work with your doctor:</strong> Regular check-ups and medication adjustments</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes to Avoid:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping meals:</strong> Causes dangerous blood sugar fluctuations</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eating too many carbs:</strong> Even healthy carbs need portion control</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring labels:</strong> Hidden sugars are everywhere in processed foods</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not exercising:</strong> Physical activity is crucial for blood sugar control</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stopping medication:</strong> Never stop without doctor approval</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-cyan-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Diabetes Management Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Diet is essential, but combining it with regular exercise can dramatically improve blood sugar control
              and reduce medication needs. Get your complete diabetes management strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Diabetes Workout Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover safe and effective exercises to improve insulin sensitivity, lower blood sugar, and support healthy weight loss.
                </p>
                <Button size="lg" className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/diabetes">
                    View Diabetes Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Activity className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized diabetes meal plan tailored to your blood sugar goals and preferences.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Meal Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands managing diabetes naturally through diet and exercise
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-4xl">
        <ScientificRefs
          references={[
            { text: "Low-Carb Diet for Type 2 Diabetes Management (ADA)", url: "https://diabetesjournals.org/care/article/42/5/731/40480/Nutrition-Therapy-for-Adults-With-Diabetes-or" },
            { text: "Intermittent Fasting and Insulin Sensitivity (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/30308988/" },
            { text: "Benefits of Walking for Blood Sugar Control", url: "https://pubmed.ncbi.nlm.nih.gov/27293521/" }
          ]}
        />
      </div>
    </div>
  )
}
