import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Baby, Droplet } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Post-Pregnancy Diet Plan 2025 | Safe Postpartum Weight Loss & Nutrition",
  description: "Complete post-pregnancy diet guide with safe meal plans for breastfeeding mothers, nutrient-rich foods, postpartum recovery nutrition, and healthy weight loss strategies after childbirth.",
  keywords: "post-pregnancy diet, postpartum weight loss, breastfeeding diet plan, after pregnancy diet, postnatal nutrition, lactation diet, post delivery weight loss, new mom diet",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/post-pregnancy",
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
    title: "Post-Pregnancy Diet Plan 2025 | Safe Postpartum Nutrition Guide",
    description: "Science-backed post-pregnancy diet with breastfeeding support, recovery nutrition, and safe weight loss methods.",
    url: "https://www.fitplanindia.com/blog/post-pregnancy",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function PostPregnancyDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-700 to-rose-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-pink-700 font-semibold">
              👶 Complete Post-Pregnancy Diet Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Post-Pregnancy Diet Plan: Safe Nutrition for Recovery & Weight Loss
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover safe, effective postpartum nutrition strategies to support recovery, boost breastfeeding,
              regain energy, and achieve healthy weight loss after childbirth without compromising your health or milk supply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/post-pregnancy">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Postpartum Workouts
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
                <div className="text-3xl font-bold text-pink-600 mb-2">1-2 lbs</div>
                <div className="text-gray-600">Safe Weekly Loss (After 6 weeks)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">+500</div>
                <div className="text-gray-600">Extra Calories If Breastfeeding</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">6-12 Months</div>
                <div className="text-gray-600">Healthy Recovery Timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">72g</div>
                <div className="text-gray-600">Daily Protein (Breastfeeding)</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Post-Pregnancy Nutrition</h2>
              <p className="text-lg text-gray-700 mb-6">
                The postpartum period is a critical time for recovery and adjustment. Your body has undergone tremendous
                changes during pregnancy and delivery, and proper nutrition is essential for healing, energy restoration,
                hormone balance, and milk production if breastfeeding. Post-pregnancy weight loss should be gradual and safe -
                typically starting 6-8 weeks after delivery for vaginal birth or 8-12 weeks after C-section. Focus first on
                recovery and nourishment, then gentle weight loss through balanced nutrition and gradual activity.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-pink-800">Postpartum Nutritional Needs</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Higher protein for tissue repair and healing</li>
                    <li>• Extra calories (500) if exclusively breastfeeding</li>
                    <li>• Iron to replenish blood loss during delivery</li>
                    <li>• Calcium and vitamin D for bone health</li>
                    <li>• Omega-3s for brain health and mood</li>
                    <li>• Adequate hydration for milk production</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-blue-800">Benefits of Proper Nutrition</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Faster postpartum recovery and healing</li>
                    <li>• Sustained energy for baby care</li>
                    <li>• Better quality and quantity of breast milk</li>
                    <li>• Improved mood and reduced baby blues</li>
                    <li>• Gradual, healthy weight loss</li>
                    <li>• Stronger immune system for mom and baby</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Pregnancy Diet Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Post-Pregnancy Diet Principles for Safe Recovery</h2>

            <div className="space-y-8">
              {/* Calorie Needs */}
              <Card className="border-pink-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Baby className="w-6 h-6 text-pink-600 mr-3" />
                    <CardTitle className="text-pink-700">Calorie Needs: Recovery First, Weight Loss Second</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-pink-600 mr-2" />
                      <span><strong>Not Breastfeeding: 1,800-2,000 cal</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-rose-600 mr-2" />
                      <span><strong>Breastfeeding: 2,300-2,500 cal</strong></span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                      <span><strong>Gradual Deficit After 6 Weeks</strong></span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Your body needs adequate calories for recovery and milk production. Never go below 1,800 calories if breastfeeding.
                    Weight loss will happen naturally through breastfeeding (burns 300-500 calories daily) and gentle activity.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">✅ Safe Approach:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Wait 6-8 weeks before restricting calories</li>
                        <li>• Focus on nutrient density, not restriction</li>
                        <li>• Aim for 1-2 lbs per month (breastfeeding)</li>
                        <li>• Monitor milk supply if reducing calories</li>
                        <li>• Listen to hunger cues - your body knows</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-red-700">❌ Dangerous Approach:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Crash diets or extreme restriction</li>
                        <li>• Starting weight loss too soon (under 6 weeks)</li>
                        <li>• Going below 1,800 cal while breastfeeding</li>
                        <li>• Skipping meals due to baby care</li>
                        <li>• Diet pills or weight loss supplements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Protein Priority */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Utensils className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">High Protein for Recovery & Milk Production</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Protein is crucial for postpartum recovery - it repairs tissues, produces breast milk, maintains muscle
                    mass, and keeps you satisfied. Breastfeeding mothers need 65-75g daily, while non-breastfeeding moms need 55-65g.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Best Protein Sources:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Eggs (whole and whites)</li>
                        <li>• Greek yogurt, cottage cheese</li>
                        <li>• Chicken breast, turkey</li>
                        <li>• Fish (salmon, tuna - 2x/week)</li>
                        <li>• Lean beef, lamb</li>
                        <li>• Legumes, lentils, beans</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Meal Timing:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Protein at every meal</li>
                        <li>• 20-30g per meal ideal</li>
                        <li>• Include protein in snacks</li>
                        <li>• Post-workout protein</li>
                        <li>• Evening protein for recovery</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Easy Quick Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Hard-boiled eggs (prep ahead)</li>
                        <li>• Protein shakes (safe brands)</li>
                        <li>• String cheese + nuts</li>
                        <li>• Greek yogurt parfait</li>
                        <li>• Rotisserie chicken</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hydration & Lactation */}
              <Card className="border-cyan-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Droplet className="w-6 h-6 text-cyan-600 mr-3" />
                    <CardTitle className="text-cyan-700">Hydration: Critical for Milk Production</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Breastfeeding mothers need significantly more water - at least 12-16 cups (3-4 liters) daily.
                    Dehydration directly reduces milk supply and causes fatigue, constipation, and poor recovery.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Hydration Tips:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Drink water every time you breastfeed</li>
                        <li>• Keep water bottle within reach always</li>
                        <li>• Drink before you feel thirsty</li>
                        <li>• Add electrolytes if needed</li>
                        <li>• Monitor urine color (should be light yellow)</li>
                        <li>• Increase in hot weather or if exercising</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Lactation-Boosting Drinks:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Water (primary source)</li>
                        <li>• Coconut water (natural electrolytes)</li>
                        <li>• Fenugreek tea (milk booster)</li>
                        <li>• Oat milk (contains beta-glucan)</li>
                        <li>• Herbal teas (fennel, anise, safe varieties)</li>
                        <li>• Fresh vegetable juices</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Post-Pregnancy Meal Plan (Breastfeeding: 2,200-2,400 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              This nutrient-dense meal plan supports recovery, milk production, and gradual weight loss while maintaining energy levels.
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
                      <p className="text-gray-700">Scrambled eggs (3 eggs) with spinach and tomatoes, whole grain toast (2 slices) with avocado, Greek yogurt (1/2 cup) with berries</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~520 | Protein: 32g | Healthy fats for hormone health</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:00 AM):</h5>
                      <p className="text-gray-700">Lactation smoothie: oats, banana, almond butter, flaxseed, dates, almond milk</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~320 | Milk-boosting ingredients</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                      <p className="text-gray-700">Grilled salmon (150g) with quinoa (1 cup cooked), roasted vegetables (broccoli, carrots, zucchini), large mixed salad with olive oil dressing</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~580 | Protein: 45g | Omega-3s for baby's brain development</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h5>
                      <p className="text-gray-700">Apple slices with almond butter (2 tbsp), handful of walnuts (10-12)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~280 | Healthy fats and fiber</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                      <p className="text-gray-700">Chicken curry with vegetables, brown rice (3/4 cup cooked), cucumber raita, side salad</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~520 | Protein: 42g | Iron-rich meal</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Evening Snack (9:30 PM - if needed):</h5>
                      <p className="text-gray-700">Warm milk with turmeric, 2 dates, 4-5 almonds</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~180 | Promotes sleep and recovery</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-pink-200">
                    <p className="text-sm font-semibold text-pink-700">Daily Total: ~2,400 calories | Protein: 119g | Calcium: High | Iron: Adequate</p>
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
                        <li>• Oatmeal with nuts, seeds, and banana</li>
                        <li>• Whole grain pancakes with nut butter</li>
                        <li>• Vegetable omelet with cheese and toast</li>
                        <li>• Protein smoothie bowl with toppings</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Lunch Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Grilled chicken with sweet potato and veggies</li>
                        <li>• Lentil soup with whole grain bread</li>
                        <li>• Tuna salad wrap with avocado</li>
                        <li>• Turkey and vegetable stir-fry with rice</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Dinner Ideas:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Baked fish with roasted vegetables</li>
                        <li>• Lean beef with quinoa and greens</li>
                        <li>• Vegetable dal with brown rice</li>
                        <li>• Grilled chicken with Mediterranean salad</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Lactation-Boosting Snacks:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Lactation cookies (oats, flaxseed)</li>
                        <li>• Dates with almond butter</li>
                        <li>• Trail mix with dried fruits and seeds</li>
                        <li>• Hummus with vegetable sticks</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Post-Pregnancy Diet: Foods to Eat vs Avoid</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Foods for Postpartum:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Protein-Rich Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Eggs, chicken, turkey, fish (2x week)</li>
                      <li>• Greek yogurt, cottage cheese, paneer</li>
                      <li>• Legumes, lentils, chickpeas, beans</li>
                      <li>• Nuts, seeds (almonds, walnuts, chia)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Iron-Rich Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Lean red meat (moderate amounts)</li>
                      <li>• Dark leafy greens (spinach, kale)</li>
                      <li>• Lentils, beans, fortified cereals</li>
                      <li>• Dried fruits (dates, apricots, raisins)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Lactation-Boosting Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Oats, barley, whole grains</li>
                      <li>• Fenugreek seeds, fennel seeds</li>
                      <li>• Garlic, ginger, turmeric</li>
                      <li>• Dates, papaya, coconut</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Foods to Avoid or Limit:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Limit or Avoid (Breastfeeding):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Caffeine (max 200-300mg/day)</li>
                      <li>• Alcohol (wait 2-3 hours per drink)</li>
                      <li>• High-mercury fish (swordfish, shark)</li>
                      <li>• Gassy foods if baby is colicky</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Unhealthy Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Processed junk food and fast food</li>
                      <li>• Sugary drinks and excessive sweets</li>
                      <li>• Trans fats and fried foods</li>
                      <li>• Artificial sweeteners (check labels)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Potentially Problematic:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Spicy foods (if baby reacts)</li>
                      <li>• Dairy (if baby has intolerance)</li>
                      <li>• Citrus (may cause diaper rash)</li>
                      <li>• Cabbage, broccoli (if baby is gassy)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postpartum Supplements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Postpartum Supplements</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-pink-200">
                <CardContent className="pt-6">
                  <Coffee className="w-8 h-8 text-pink-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Prenatal Vitamin</h4>
                  <p className="text-sm text-gray-700 mb-2">Continue through breastfeeding for comprehensive nutrition</p>
                  <p className="text-xs text-pink-600 font-semibold">Continue prenatal formula</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Iron</h4>
                  <p className="text-sm text-gray-700 mb-2">Replenishes blood loss, prevents postpartum anemia</p>
                  <p className="text-xs text-blue-600 font-semibold">Dose: As prescribed by doctor</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Omega-3 DHA</h4>
                  <p className="text-sm text-gray-700 mb-2">Supports baby's brain development through breast milk</p>
                  <p className="text-xs text-purple-600 font-semibold">Dose: 200-300mg DHA daily</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Important:</strong> Always consult your healthcare provider before taking supplements postpartum,
                especially if breastfeeding. Some herbs and supplements can affect milk supply or pass through breast milk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Post-Pregnancy Diet Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Meal prep when baby sleeps:</strong> Prepare easy, nutritious meals in advance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Keep snacks accessible:</strong> Have healthy snacks near nursing stations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat before baby does:</strong> Prioritize your meals to maintain energy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Accept help:</strong> Let others cook or bring nutritious meals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Be patient:</strong> It took 9 months to gain, allow time to lose safely</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Crash dieting:</strong> Severe restriction reduces milk supply and energy</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping meals:</strong> Leads to blood sugar crashes and poor milk production</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Comparing to others:</strong> Every body recovers at its own pace</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Neglecting hydration:</strong> Directly impacts milk supply and recovery</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Starting too soon:</strong> Body needs 6-8 weeks minimum to heal</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-700 to-rose-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Postpartum Recovery Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Proper nutrition is essential, but adding safe postpartum exercises can accelerate recovery, improve
              mood, and support healthy weight loss. Get your complete plan today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Postpartum Workout Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover safe, gentle exercises for postpartum recovery, core healing, and gradual fitness restoration.
                </p>
                <Button size="lg" className="w-full bg-white text-pink-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/post-pregnancy">
                    View Postpartum Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Baby className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized postpartum nutrition plan tailored to your recovery needs.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Meal Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands of new moms recovering safely and regaining strength through proper nutrition
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
