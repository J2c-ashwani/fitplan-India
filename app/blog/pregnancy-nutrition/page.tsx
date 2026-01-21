import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Baby, TrendingUp, Shield, Sparkles, Activity } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pregnancy Nutrition Plan | Complete Diet Guide for Healthy Baby",
  description: "Complete pregnancy nutrition guide with trimester-specific meal plans, prenatal vitamins, foods to avoid, weight gain, morning sickness remedies, and healthy pregnancy diet.",
  keywords: "pregnancy nutrition, pregnancy diet, prenatal nutrition, pregnancy meal plan, foods to avoid pregnancy, pregnancy weight gain, morning sickness diet, healthy pregnancy",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/pregnancy-nutrition",
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
    title: "Pregnancy Nutrition Plan | Complete Guide for Expecting Mothers",
    description: "Evidence-based pregnancy nutrition with meal plans for healthy baby development.",
    url: "https://www.fitplanindia.com/blog/pregnancy-nutrition",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function PregnancyNutritionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-rose-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-pink-600 font-semibold">
              👶 Nutrition for Two
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Pregnancy Nutrition: Complete Guide for Healthy Baby
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover complete pregnancy nutrition with trimester-specific guidance, essential nutrients for baby
              development, safe foods vs foods to avoid, weight gain recommendations, and meal plans for a healthy pregnancy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="#nutrients">
                  Essential Nutrients
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
                <div className="text-3xl font-bold text-pink-600 mb-2">300-450</div>
                <div className="text-gray-600">Extra Calories (2nd/3rd Tri)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">71g</div>
                <div className="text-gray-600">Protein Daily (Pregnant)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">600mcg</div>
                <div className="text-gray-600">Folate/Folic Acid</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">27mg</div>
                <div className="text-gray-600">Iron Daily Need</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Pregnancy Nutrition Needs</h2>
              <p className="text-lg text-gray-700 mb-6">
                Pregnancy nutrition is critical for baby's healthy development and mother's well-being. During pregnancy,
                nutrient needs dramatically increase - your body is building an entire human being! Key nutrients include
                folic acid (prevents neural tube defects), iron (supports increased blood volume and prevents anemia), calcium
                (builds baby's bones and teeth), protein (tissue growth), DHA omega-3 (brain and eye development), and vitamin D
                (bone health and immune function). Contrary to myth, you're not "eating for two" in terms of doubling calories -
                you need only 300-450 extra calories in 2nd and 3rd trimesters (equivalent to a yogurt and fruit). Quality matters
                far more than quantity. Proper pregnancy nutrition reduces risks of birth defects, preterm birth, low birth weight,
                gestational diabetes, and pre-eclampsia while supporting healthy weight gain, energy levels, and postpartum recovery.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-pink-800">Why Pregnancy Nutrition Matters</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Prevents neural tube defects (folic acid)</li>
                    <li>• Supports baby's brain and organ development</li>
                    <li>• Reduces risk of preterm birth</li>
                    <li>• Prevents maternal anemia and fatigue</li>
                    <li>• Supports healthy birth weight</li>
                    <li>• Aids postpartum recovery and breastfeeding</li>
                  </ul>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-rose-800">Healthy Pregnancy Weight Gain</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Underweight (BMI &lt;18.5):</strong> 28-40 lbs</li>
                    <li>• <strong>Normal weight (BMI 18.5-24.9):</strong> 25-35 lbs</li>
                    <li>• <strong>Overweight (BMI 25-29.9):</strong> 15-25 lbs</li>
                    <li>• <strong>Obese (BMI ≥30):</strong> 11-20 lbs</li>
                    <li>• <strong>Twins:</strong> Add 10-15 lbs to normal range</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Essential Nutrients During Pregnancy</h2>

            <div className="space-y-6">
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Heart className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">Folic Acid (Folate) - MOST CRITICAL</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Why Essential:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Prevents neural tube defects (spina bifida)</li>
                        <li>• Critical in first 28 days of pregnancy</li>
                        <li>• <strong>START BEFORE conception!</strong></li>
                        <li>• <strong>Need:</strong> 600mcg daily (pregnant)</li>
                        <li>• <strong>Supplement:</strong> Prenatal vitamin mandatory</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Food Sources:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Leafy greens (spinach, kale)</li>
                        <li>• Legumes (lentils, chickpeas, beans)</li>
                        <li>• Fortified cereals</li>
                        <li>• Oranges and orange juice</li>
                        <li>• Asparagus, broccoli</li>
                        <li>• <strong>Supplement still needed!</strong></li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-700">Iron - Prevents Anemia</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Why Essential:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Blood volume increases 50% during pregnancy</li>
                        <li>• Delivers oxygen to baby</li>
                        <li>• Prevents maternal anemia (fatigue)</li>
                        <li>• <strong>Need:</strong> 27mg daily (double pre-pregnancy)</li>
                        <li>• Most women need supplement</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Food Sources:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Red meat, poultry (heme iron - best absorbed)</li>
                        <li>• Fortified cereals</li>
                        <li>• Spinach, legumes (non-heme iron)</li>
                        <li>• Pair with vitamin C for absorption</li>
                        <li>• Avoid tea/coffee with iron-rich meals</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-700">Calcium & Vitamin D - Bone Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Calcium (1,000mg daily):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Builds baby's bones and teeth</li>
                        <li>• If inadequate, baby takes from your bones</li>
                        <li>• <strong>Sources:</strong> Dairy (milk, yogurt, cheese), fortified plant milks, leafy greens, tofu</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Vitamin D (600 IU daily):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Helps calcium absorption</li>
                        <li>• Supports immune system</li>
                        <li>• <strong>Sources:</strong> Sunlight, fortified milk, fatty fish, egg yolks</li>
                        <li>• Many need supplement (blood test)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-700">Protein & DHA Omega-3</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Protein (71g daily):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Builds baby's tissues and organs</li>
                        <li>• Supports maternal tissue growth</li>
                        <li>• <strong>Sources:</strong> Lean meat, poultry, fish, eggs, dairy, legumes, nuts</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">DHA Omega-3 (200-300mg daily):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Critical for baby's brain and eye development</li>
                        <li>• <strong>Sources:</strong> Fatty fish (salmon, sardines), DHA-fortified eggs, algae supplements</li>
                        <li>• <strong>Limit:</strong> Low-mercury fish only</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Foods to Avoid */}
      <section className="py-8 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-red-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-900 text-xl mb-3">⚠️ Foods to STRICTLY AVOID During Pregnancy:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-red-800">High-Mercury Fish:</h5>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• Shark, swordfish, king mackerel, tilefish</li>
                        <li>• Limit tuna to 6 oz per week</li>
                        <li>• <strong>Safe:</strong> Salmon, sardines, tilapia</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-red-800">Raw/Undercooked Foods:</h5>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• Raw seafood (sushi, oysters)</li>
                        <li>• Undercooked meat, poultry, eggs</li>
                        <li>• Raw cookie dough, cake batter</li>
                        <li>• Risk: Listeria, salmonella, toxoplasmosis</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-red-800">Unpasteurized Products:</h5>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• Unpasteurized milk, cheese</li>
                        <li>• Soft cheeses (feta, brie, blue cheese)</li>
                        <li>• Risk: Listeria (can cause miscarriage)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-red-800">Other Avoid:</h5>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>Alcohol:</strong> NO amount safe</li>
                        <li>• <strong>Caffeine:</strong> Limit to 200mg (1-2 cups coffee)</li>
                        <li>• <strong>Deli meats:</strong> Unless heated steaming hot</li>
                        <li>• <strong>Unwashed produce:</strong> Can carry toxoplasmosis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trimester Guidance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Trimester-by-Trimester Nutrition Guide</h2>

            <div className="space-y-8">
              <Card className="border-pink-200">
                <CardHeader className="bg-pink-50">
                  <CardTitle className="text-pink-800">First Trimester (Weeks 1-12)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Nutritional Focus:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Folic acid:</strong> CRITICAL - 600mcg daily</li>
                        <li>• <strong>Calories:</strong> No increase needed yet</li>
                        <li>• <strong>Small frequent meals:</strong> Helps nausea</li>
                        <li>• <strong>Hydration:</strong> 8-10 glasses water</li>
                        <li>• <strong>Prenatal vitamin:</strong> Start immediately</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Morning Sickness Tips:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Eat before getting out of bed (crackers)</li>
                        <li>• Ginger tea, lemon water</li>
                        <li>• Avoid greasy, spicy foods</li>
                        <li>• Small meals every 2-3 hours</li>
                        <li>• Stay hydrated (sip throughout day)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800">Second Trimester (Weeks 13-26)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Nutritional Focus:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Extra calories:</strong> Add 300 per day</li>
                        <li>• <strong>Protein increase:</strong> 71g daily</li>
                        <li>• <strong>Iron-rich foods:</strong> Prevent anemia</li>
                        <li>• <strong>Calcium:</strong> 1,000mg for baby's bones</li>
                        <li>• <strong>DHA omega-3:</strong> Brain development</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">What to Expect:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Appetite returns (nausea improves)</li>
                        <li>• Energy levels improve</li>
                        <li>• Steady weight gain begins</li>
                        <li>• May experience heartburn (small meals)</li>
                        <li>• Gestational diabetes screening (24-28 weeks)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Third Trimester (Weeks 27-40)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Nutritional Focus:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Extra calories:</strong> Add 450 per day</li>
                        <li>• <strong>Protein:</strong> Maintain 71g+ daily</li>
                        <li>• <strong>Iron:</strong> Very important now (blood volume peaks)</li>
                        <li>• <strong>Fiber:</strong> Prevent constipation</li>
                        <li>• <strong>Small frequent meals:</strong> Baby taking up space</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Common Discomforts:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Heartburn (avoid lying down after eating)</li>
                        <li>• Constipation (fiber, water, prunes)</li>
                        <li>• Frequent urination (reduce evening fluids)</li>
                        <li>• Swelling (limit sodium, elevate feet)</li>
                        <li>• Difficulty sleeping (small snack before bed)</li>
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
      <section id="meal-plans" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Pregnancy Meal Plan (2nd Trimester, 2,300 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Nutrient-dense meals covering all essential pregnancy needs with folic acid, iron, calcium, and protein.
            </p>

            <Card className="border-pink-200 mb-8">
              <CardHeader className="bg-pink-50">
                <CardTitle className="text-pink-800">Sample Day - Pregnancy Nutrition</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:30 AM):</h5>
                    <p className="text-gray-700">Fortified cereal (1.5 cups) with skim milk, banana, berries, whole grain toast with almond butter, prenatal vitamin</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~520 | Protein: 18g | Folic acid, iron from fortified cereal</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM):</h5>
                    <p className="text-gray-700">Greek yogurt (1 cup) with granola and strawberries, orange juice</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~320 | Protein: 20g | Calcium, vitamin C</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                    <p className="text-gray-700">Grilled chicken breast sandwich (whole wheat) with avocado, tomato, spinach; lentil soup; apple; milk</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~620 | Protein: 42g | Iron (lentils), folate, calcium</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h5>
                    <p className="text-gray-700">Hummus with carrot and bell pepper sticks, whole grain crackers, cheese stick</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~280 | Protein: 14g | Fiber, calcium</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                    <p className="text-gray-700">Baked salmon (5 oz) with lemon, quinoa (1 cup), steamed broccoli with olive oil, spinach salad with walnuts</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~680 | Protein: 48g | DHA omega-3, folate, iron</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Evening Snack (9:00 PM):</h5>
                    <p className="text-gray-700">Small bowl of fortified cereal with milk, handful of almonds</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~260 | Prevents nighttime hunger, calcium for baby</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-pink-200">
                  <p className="text-sm font-semibold text-pink-700">Daily Total: ~2,680 calories | Protein: 142g | All pregnancy essentials covered! + Prenatal vitamin</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Healthy Pregnancy Snack Ideas</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Protein-Rich Snacks:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Hard-boiled eggs</li>
                      <li>• Greek yogurt with berries</li>
                      <li>• Cheese and whole grain crackers</li>
                      <li>• Nut butter on apple slices</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Iron-Rich Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Fortified cereal with milk</li>
                      <li>• Dried apricots with almonds</li>
                      <li>• Spinach smoothie</li>
                      <li>• Edamame (also protein)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Calcium-Rich:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Cheese stick with fruit</li>
                      <li>• Yogurt parfait</li>
                      <li>• Cottage cheese with pineapple</li>
                      <li>• Smoothie with milk/yogurt</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Morning Sickness-Friendly:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Saltine crackers</li>
                      <li>• Ginger tea with lemon</li>
                      <li>• Dry toast</li>
                      <li>• Frozen fruit popsicles</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pregnancy Nutrition Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Take prenatal vitamin daily:</strong> Even with healthy diet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat small frequent meals:</strong> 5-6 times daily prevents nausea</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Stay hydrated:</strong> 8-10 glasses water daily</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Listen to cravings:</strong> (Within reason) body knows what it needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Gentle exercise:</strong> Walking, prenatal yoga approved</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>"Eating for two" myth:</strong> Only need 300-450 extra calories</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping prenatal vitamin:</strong> Diet alone can't provide all needs</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring food safety:</strong> Listeria, mercury risks are real</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not gaining enough weight:</strong> Can harm baby's development</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Excessive caffeine/alcohol:</strong> Both harmful to baby</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Healthy Pregnancy, Healthy Baby
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Proper nutrition is foundation of healthy pregnancy. Combine with gentle, doctor-approved exercise
              for optimal maternal health and baby development.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Activity className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Prenatal Exercises</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover safe, gentle exercises for each trimester to support healthy pregnancy.
                </p>
                <Button size="lg" className="w-full bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/pregnancy-nutrition">
                    View Prenatal Workouts
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Baby className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create personalized pregnancy nutrition plan for your trimester.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Consult your healthcare provider before making any dietary changes during pregnancy
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
