import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, BookOpen, TrendingUp, Sparkles, Brain, Zap } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nutrition Science Guide | Understanding Macros, Calories & Metabolism",
  description: "Complete nutrition science guide explaining macronutrients, micronutrients, calories, metabolism, energy balance, and evidence-based nutrition principles for health and fitness.",
  keywords: "nutrition science, macronutrients, micronutrients, calorie deficit, metabolism, TDEE, protein intake, carbohydrates, fats, nutrition basics",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/nutrition-science",
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
    title: "Nutrition Science Guide | Complete Nutrition Fundamentals",
    description: "Evidence-based nutrition science explaining macros, calories, metabolism, and dietary principles.",
    url: "https://www.fitplanindia.com/blog/nutrition-science",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function NutritionSciencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-emerald-700 font-semibold">
              🧬 Complete Nutrition Science Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Nutrition Science: Understanding Macros, Calories & Metabolism
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Master the fundamentals of nutrition science including macronutrients, micronutrients, energy balance,
              metabolism, and evidence-based dietary principles for optimal health and fitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#macronutrients">
                  Learn Macros
                </Link>
              </Button>
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="#calories">
                  Energy Balance
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
                <div className="text-3xl font-bold text-emerald-600 mb-2">3</div>
                <div className="text-gray-600">Macronutrients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">13</div>
                <div className="text-gray-600">Essential Vitamins</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">16</div>
                <div className="text-gray-600">Essential Minerals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">3,500</div>
                <div className="text-gray-600">Calories = 1 lb Fat</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Nutrition Science Fundamentals</h2>
              <p className="text-lg text-gray-700 mb-6">
                Nutrition science is the study of how food affects the human body - from cellular function to athletic
                performance to disease prevention. At its core, nutrition involves understanding macronutrients (protein,
                carbohydrates, fats), micronutrients (vitamins, minerals), and energy balance (calories in vs. calories out).
                Your body requires specific nutrients to function optimally - protein for muscle repair and building,
                carbohydrates for energy, fats for hormone production and cell membranes, plus vitamins and minerals for
                countless biochemical reactions. Understanding these fundamentals empowers you to make informed dietary
                choices for your health, fitness, and performance goals.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-emerald-800">Why Nutrition Science Matters</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Separates evidence from fad diet myths</li>
                    <li>• Optimizes health, performance, and body composition</li>
                    <li>• Prevents chronic diseases (diabetes, heart disease)</li>
                    <li>• Supports athletic performance and recovery</li>
                    <li>• Promotes longevity and quality of life</li>
                    <li>• Enables personalized nutrition strategies</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-teal-800">Key Nutrition Principles</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Energy Balance:</strong> Calories in vs. calories out</li>
                    <li>• <strong>Macros:</strong> Protein, carbs, fats in right ratios</li>
                    <li>• <strong>Micros:</strong> Vitamins and minerals for health</li>
                    <li>• <strong>Timing:</strong> When you eat affects results</li>
                    <li>• <strong>Quality:</strong> Whole foods beat processed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Macronutrients Section */}
      <section id="macronutrients" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Macronutrients: The Big Three</h2>

            <div className="space-y-8">
              {/* Protein */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Heart className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">Protein: Building Blocks of Life</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-red-800">Functions of Protein:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Builds and repairs muscle tissue</li>
                        <li>• Creates enzymes and hormones</li>
                        <li>• Supports immune function</li>
                        <li>• Maintains skin, hair, nails</li>
                        <li>• Provides satiety (keeps you full)</li>
                        <li>• Can be used for energy if needed</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-red-800">Protein Requirements:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Sedentary:</strong> 0.8g per kg body weight</li>
                        <li>• <strong>Active:</strong> 1.2-1.6g per kg</li>
                        <li>• <strong>Athletes:</strong> 1.6-2.2g per kg</li>
                        <li>• <strong>Muscle Building:</strong> 2.2-2.6g per kg</li>
                        <li>• <strong>Weight Loss:</strong> Higher protein preserves muscle</li>
                        <li>• <strong>4 calories per gram</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-red-800">Best Protein Sources:</h5>
                    <p className="text-sm text-gray-700">
                      <strong>Animal:</strong> Chicken, turkey, lean beef, fish, eggs, Greek yogurt, cottage cheese.
                      <strong>Plant:</strong> Lentils, chickpeas, tofu, tempeh, quinoa, beans, nuts, seeds.
                      <strong>Complete proteins</strong> contain all 9 essential amino acids (animal sources, soy, quinoa).
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Carbohydrates */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Zap className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Carbohydrates: Primary Energy Source</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Functions of Carbohydrates:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Primary fuel for brain and muscles</li>
                        <li>• Stored as glycogen for quick energy</li>
                        <li>• Spares protein from being used as energy</li>
                        <li>• Provides fiber for digestive health</li>
                        <li>• Enhances athletic performance</li>
                        <li>• Supports mood and cognitive function</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Carb Types & Timing:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Simple Carbs:</strong> Quick energy (fruit, honey)</li>
                        <li>• <strong>Complex Carbs:</strong> Sustained energy (whole grains)</li>
                        <li>• <strong>Fiber:</strong> Indigestible carbs (25-35g daily)</li>
                        <li>• <strong>Pre-Workout:</strong> Carbs for energy</li>
                        <li>• <strong>Post-Workout:</strong> Replenish glycogen</li>
                        <li>• <strong>4 calories per gram</strong></li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-blue-800">Carb Sources Quality Matters:</h5>
                    <p className="text-sm text-gray-700">
                      <strong>✅ Choose:</strong> Whole grains (oats, brown rice, quinoa), fruits, vegetables, legumes, sweet potatoes.
                      <strong>❌ Limit:</strong> Refined sugars, white bread, pastries, sugary drinks, processed snacks.
                      The <strong>glycemic index</strong> measures how quickly carbs raise blood sugar - lower GI is generally better.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Fats */}
              <Card className="border-yellow-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Sparkles className="w-6 h-6 text-yellow-600 mr-3" />
                    <CardTitle className="text-yellow-700">Fats: Essential for Hormones & Health</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-yellow-800">Functions of Dietary Fat:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Hormone production (testosterone, estrogen)</li>
                        <li>• Cell membrane structure</li>
                        <li>• Absorbs fat-soluble vitamins (A, D, E, K)</li>
                        <li>• Insulates organs and nerves</li>
                        <li>• Provides long-lasting energy</li>
                        <li>• Brain health (60% of brain is fat)</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-yellow-800">Types of Fats:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Saturated:</strong> Moderate OK (butter, meat)</li>
                        <li>• <strong>Monounsaturated:</strong> Healthy (olive oil, avocados)</li>
                        <li>• <strong>Polyunsaturated:</strong> Essential (fish oil, nuts)</li>
                        <li>• <strong>Omega-3:</strong> Anti-inflammatory (fatty fish)</li>
                        <li>• <strong>Trans Fats:</strong> Avoid completely (processed foods)</li>
                        <li>• <strong>9 calories per gram</strong> (most energy-dense)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-yellow-800">Optimal Fat Intake:</h5>
                    <p className="text-sm text-gray-700">
                      <strong>20-35% of daily calories</strong> should come from fat. Don't fear fat - it's essential for health!
                      <strong>Sources:</strong> Avocados, nuts (almonds, walnuts), seeds (chia, flax), fatty fish (salmon), olive oil,
                      coconut oil, nut butters. Balance omega-6 to omega-3 ratio (aim for 4:1 or lower).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Calories & Energy Balance */}
      <section id="calories" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Calories & Energy Balance: The Foundation</h2>

            <Card className="border-emerald-200 mb-8">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Target className="w-6 h-6 text-emerald-600 mr-3" />
                  <CardTitle className="text-emerald-700">Understanding Calories and TDEE</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A <strong>calorie</strong> is a unit of energy. Your body burns calories continuously for basic functions
                  (breathing, heartbeat, digestion) plus physical activity. <strong>TDEE (Total Daily Energy Expenditure)</strong>
                  is the total calories you burn per day.
                </p>

                <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-4 mb-6">
                  <h5 className="font-semibold mb-3 text-emerald-800">TDEE Components:</h5>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>BMR (Basal Metabolic Rate):</strong> 60-70% - Calories burned at rest</li>
                    <li>• <strong>TEA (Thermic Effect of Activity):</strong> 15-30% - Exercise calories</li>
                    <li>• <strong>TEF (Thermic Effect of Food):</strong> 10% - Digestion burns calories</li>
                    <li>• <strong>NEAT (Non-Exercise Activity):</strong> 5-15% - Daily movement (walking, fidgeting)</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-green-800">Calorie Deficit</h5>
                    <p className="text-2xl font-bold text-green-700 mb-2">TDEE - 300-500</p>
                    <p className="text-sm text-gray-700">Eat less than you burn = Weight Loss (1-2 lbs per week)</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-blue-800">Maintenance</h5>
                    <p className="text-2xl font-bold text-blue-700 mb-2">TDEE = Intake</p>
                    <p className="text-sm text-gray-700">Eat what you burn = Maintain current weight</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <h5 className="font-semibold mb-2 text-orange-800">Calorie Surplus</h5>
                    <p className="text-2xl font-bold text-orange-700 mb-2">TDEE + 200-400</p>
                    <p className="text-sm text-gray-700">Eat more than you burn = Muscle Gain (with training)</p>
                  </div>
                </div>

                <div className="mt-6 bg-blue-100 border border-blue-300 rounded-lg p-4">
                  <h5 className="font-semibold mb-2 text-blue-800">📊 The 3,500 Calorie Rule:</h5>
                  <p className="text-sm text-gray-700">
                    1 pound of body fat = approximately 3,500 calories. To lose 1 lb per week, create a 500-calorie daily
                    deficit (500 cal × 7 days = 3,500 cal). This is a simplified model - metabolism adapts over time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Micronutrients */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Micronutrients: Vitamins & Minerals</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-700">Essential Vitamins</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-3 rounded">
                      <h5 className="font-semibold text-sm mb-1">Fat-Soluble (A, D, E, K):</h5>
                      <p className="text-xs text-gray-700">Stored in body fat, need dietary fat to absorb. A: Vision. D: Bones, immune. E: Antioxidant. K: Blood clotting.</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded">
                      <h5 className="font-semibold text-sm mb-1">Water-Soluble (B-Complex, C):</h5>
                      <p className="text-xs text-gray-700">Not stored, need daily. B vitamins: Energy metabolism. B12: Nerves, blood. C: Immune, collagen, antioxidant.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="text-teal-700">Essential Minerals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-teal-50 p-3 rounded">
                      <h5 className="font-semibold text-sm mb-1">Macrominerals:</h5>
                      <p className="text-xs text-gray-700">Calcium: Bones. Magnesium: 300+ reactions. Potassium: Heart, muscles. Sodium: Fluid balance. Phosphorus: Bones, energy.</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded">
                      <h5 className="font-semibold text-sm mb-1">Trace Minerals:</h5>
                      <p className="text-xs text-gray-700">Iron: Oxygen transport. Zinc: Immune, healing. Selenium: Antioxidant. Iodine: Thyroid. Needed in small amounts but critical.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-300 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-3 text-yellow-800">💊 Should You Supplement?</h4>
              <p className="text-gray-700 mb-3">
                <strong>Best approach:</strong> Get nutrients from whole foods first. Supplements fill gaps, not replace food.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Consider supplementing:</strong> Vitamin D (if limited sun), B12 (vegetarians), Omega-3, Magnesium</li>
                <li>• <strong>May need:</strong> Iron (women with heavy periods), Calcium (limited dairy), Vitamin B12 (over 50)</li>
                <li>• <strong>Get blood work:</strong> Test for deficiencies before mega-dosing</li>
                <li>• <strong>More isn't better:</strong> Some vitamins toxic in excess (A, D, iron)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Application */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Applying Nutrition Science to Your Life</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Evidence-Based Principles:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Calories matter most:</strong> For weight, it's calories in vs. out</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Protein is priority:</strong> Especially when dieting or building muscle</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Whole foods beat processed:</strong> More nutrients, more filling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Balance all macros:</strong> Don't eliminate entire food groups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Sustainability wins:</strong> Best diet is one you can follow long-term</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Nutrition Myths:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>"Carbs make you fat":</strong> False - excess calories do, not carbs alone</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>"Fat makes you fat":</strong> False - dietary fat ≠ body fat. Calories matter.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>"Meal timing is crucial":</strong> Mostly false - total daily intake matters more</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>"Detox diets work":</strong> Your liver and kidneys detox naturally</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>"One food is magic":</strong> No single food causes weight loss/gain alone</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Apply Nutrition Science to Your Goals
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Now that you understand nutrition fundamentals, explore specific diet plans optimized for your goals -
              weight loss, muscle building, athletic performance, or health management.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="/blog/weight-loss">
                  Weight Loss Diet
                </Link>
              </Button>
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="/blog/muscle-gain">
                  Muscle Building Diet
                </Link>
              </Button>
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="/ai-coach">
                  Get Personalized Plan
                </Link>
              </Button>
            </div>

            <p className="text-white text-sm">
              ✨ Master nutrition science to make informed decisions for lifelong health
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
