import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Dumbbell, TrendingUp, Zap, Brain } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teen Diet Plan | Healthy Nutrition for Teenagers & Adolescents",
  description: "Complete teenager diet guide with balanced meal plans, sports nutrition, acne management foods, growth support, and healthy eating habits for teens aged 13-19.",
  keywords: "teen diet plan, teenager nutrition, healthy eating for teens, adolescent diet, teen meal plan, nutrition for teenagers, diet for teenage athletes, teen weight management",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/teenagers",
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
    title: "Teen Diet Plan | Complete Nutrition Guide for Teenagers",
    description: "Science-backed teen diet with meal plans, growth nutrition, and healthy eating strategies.",
    url: "https://www.fitplanindia.com/blog/teenagers",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function TeenagerDietPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-indigo-700 font-semibold">
              🎯 Complete Teen Nutrition Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Teen Diet Plan: Healthy Nutrition for Growth & Performance
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover balanced nutrition strategies for teenage years - supporting growth, athletic performance,
              academic success, healthy weight management, and establishing lifelong healthy eating habits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/teenagers">
                  <Dumbbell className="w-4 h-4 mr-2" />
                  Teen Workouts
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
                <div className="text-3xl font-bold text-indigo-600 mb-2">2,000-3,000</div>
                <div className="text-gray-600">Daily Calories (Active Teens)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">46-52g</div>
                <div className="text-gray-600">Protein Daily (Girls/Boys)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1,300mg</div>
                <div className="text-gray-600">Calcium for Bone Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">15mg</div>
                <div className="text-gray-600">Iron (Teen Girls)</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Teen Nutrition Needs</h2>
              <p className="text-lg text-gray-700 mb-6">
                Teenage years (ages 13-19) are a critical period of rapid growth, hormonal changes, and development.
                Teens need adequate nutrition to support growth spurts, bone development, brain function, athletic
                performance, and hormonal balance. Proper nutrition during adolescence establishes healthy habits for life,
                supports mental health and mood, enhances academic performance, maintains healthy skin, and provides energy
                for school, sports, and social activities. Teens have higher calorie and nutrient needs than adults relative
                to their body size.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-indigo-800">Unique Teen Nutrition Challenges</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Busy schedules with school, activities, sports</li>
                    <li>• Peer pressure and social eating influences</li>
                    <li>• Skipping meals (especially breakfast)</li>
                    <li>• Fast food and processed snack temptations</li>
                    <li>• Body image concerns and fad diets</li>
                    <li>• Irregular eating patterns and late-night snacking</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-purple-800">Benefits of Healthy Teen Nutrition</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Supports optimal growth and development</li>
                    <li>• Enhances athletic performance and recovery</li>
                    <li>• Improves focus, concentration, and grades</li>
                    <li>• Promotes clearer skin and acne management</li>
                    <li>• Maintains healthy weight and body composition</li>
                    <li>• Boosts energy, mood, and mental health</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teen Diet Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Teen Diet Principles for Healthy Growth</h2>

            <div className="space-y-8">
              {/* Balanced Macros */}
              <Card className="border-indigo-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Utensils className="w-6 h-6 text-indigo-600 mr-3" />
                    <CardTitle className="text-indigo-700">Balanced Macronutrients for Energy & Growth</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-indigo-600 mr-2" />
                      <span><strong>Carbs: 45-65% (Energy)</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-purple-600 mr-2" />
                      <span><strong>Protein: 10-30% (Growth)</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 text-pink-600 mr-2" />
                      <span><strong>Fats: 25-35% (Hormones)</strong></span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Teens need a balanced intake of all three macronutrients. Carbs provide energy for school and activities,
                    protein supports muscle growth and development, and healthy fats are crucial for hormone production and brain health.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Smart Carbs:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Whole grain bread, pasta</li>
                        <li>• Brown rice, quinoa, oats</li>
                        <li>• Sweet potatoes, whole fruits</li>
                        <li>• Beans, lentils</li>
                        <li>• Limit white bread, sugary snacks</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-green-800">Quality Proteins:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Chicken, turkey, lean beef</li>
                        <li>• Fish (salmon, tuna)</li>
                        <li>• Eggs, Greek yogurt</li>
                        <li>• Beans, tofu, lentils</li>
                        <li>• Protein shakes (post-workout)</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-orange-800">Healthy Fats:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Avocados, nuts, seeds</li>
                        <li>• Olive oil, coconut oil</li>
                        <li>• Fatty fish (omega-3s)</li>
                        <li>• Nut butters (natural)</li>
                        <li>• Avoid trans fats</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bone & Brain Health */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Brain className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Calcium, Iron & Brain-Boosting Nutrients</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Teen years are the last chance to maximize bone density (90% is built by age 18). Calcium and vitamin D
                    are critical. Teen girls need extra iron due to menstruation. Brain development continues through early
                    20s, requiring omega-3s and B vitamins for optimal cognitive function and mental health.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Bone Health (1,300mg Ca):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Milk, yogurt, cheese</li>
                        <li>• Fortified plant milks</li>
                        <li>• Leafy greens (kale, broccoli)</li>
                        <li>• Tofu, almonds</li>
                        <li>• Vitamin D from sun/supplements</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-pink-800">Iron (15mg Girls, 11mg Boys):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Red meat (lean, moderate)</li>
                        <li>• Chicken, turkey</li>
                        <li>• Beans, lentils, spinach</li>
                        <li>• Fortified cereals</li>
                        <li>• Pair with vitamin C for absorption</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-purple-800">Brain Health:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Fatty fish (omega-3s)</li>
                        <li>• Eggs (choline for memory)</li>
                        <li>• Berries (antioxidants)</li>
                        <li>• Dark chocolate (moderate)</li>
                        <li>• Nuts, seeds (vitamin E)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skin Health & Hydration */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Salad className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">Skin Health & Proper Hydration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Acne is a major concern for teens due to hormonal changes. Diet plays a significant role - high glycemic
                    foods and dairy can worsen acne. Hydration is crucial for skin health, athletic performance, and concentration.
                    Teens need 8-12 glasses of water daily, more if active or in hot weather.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-700">✅ Foods for Clear Skin:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fatty fish (omega-3s reduce inflammation)</li>
                        <li>• Colorful vegetables (antioxidants)</li>
                        <li>• Berries, citrus fruits (vitamin C)</li>
                        <li>• Nuts, seeds (zinc, selenium)</li>
                        <li>• Green tea (anti-inflammatory)</li>
                        <li>• Water (8+ glasses daily)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-red-700">❌ Foods That May Worsen Acne:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• High glycemic foods (white bread, sweets)</li>
                        <li>• Excessive dairy (especially skim milk)</li>
                        <li>• Fried and greasy foods</li>
                        <li>• Sugary drinks and energy drinks</li>
                        <li>• Processed snacks and junk food</li>
                        <li>• Whey protein supplements (for some)</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Teen Meal Plan (2,200-2,500 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              This balanced meal plan supports growth, energy, and athletic performance for active teenagers.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-indigo-200">
                <CardHeader className="bg-indigo-50">
                  <CardTitle className="text-indigo-800">Day 1 - Monday</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:00 AM):</h5>
                      <p className="text-gray-700">Scrambled eggs (2-3) with whole grain toast (2 slices), avocado (1/4), Greek yogurt (1 cup) with berries and granola</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~550 | Protein: 35g | Brain-healthy fats</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:00 AM):</h5>
                      <p className="text-gray-700">Banana with peanut butter (2 tbsp), handful of trail mix</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~320 | Quick energy for school</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                      <p className="text-gray-700">Chicken sandwich on whole grain bread with lettuce, tomato, cheese, side of baby carrots with hummus, apple, milk or water</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~600 | Protein: 45g | Balanced meal</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">After-School Snack (4:00 PM):</h5>
                      <p className="text-gray-700">Protein smoothie (banana, berries, protein powder, milk, spinach)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~280 | Pre-workout fuel</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM):</h5>
                      <p className="text-gray-700">Grilled salmon (150g), brown rice (1 cup), roasted broccoli and carrots, side salad with olive oil dressing</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~650 | Protein: 45g | Omega-3s for brain</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Evening Snack (Optional - 9:00 PM):</h5>
                      <p className="text-gray-700">Low-fat popcorn or Greek yogurt with honey</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~150 | Light if hungry</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-indigo-200">
                    <p className="text-sm font-semibold text-indigo-700">Daily Total: ~2,550 calories | Protein: 125g | Calcium: 1,300mg+ | Iron: Adequate</p>
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
                        <li>• Whole grain pancakes with fruit and syrup</li>
                        <li>• Oatmeal with nuts, banana, and honey</li>
                        <li>• Breakfast burrito (eggs, beans, cheese)</li>
                        <li>• Smoothie bowl with toppings</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Lunch Options:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Turkey wrap with vegetables and cheese</li>
                        <li>• Pasta with marinara and meatballs</li>
                        <li>• Burrito bowl with rice, beans, protein</li>
                        <li>• Homemade pizza on whole wheat crust</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Dinner Ideas:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Grilled chicken with sweet potato and veggies</li>
                        <li>• Lean beef stir-fry with brown rice</li>
                        <li>• Baked fish tacos with black beans</li>
                        <li>• Spaghetti with meat sauce and salad</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Healthy Snacks:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• String cheese with whole grain crackers</li>
                        <li>• Energy balls (oats, peanut butter, honey)</li>
                        <li>• Fresh fruit with yogurt dip</li>
                        <li>• Homemade trail mix</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Teen Diet: Foods to Eat vs Avoid</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Foods for Teens:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Power Foods for Energy:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Whole grains (bread, pasta, rice, oats)</li>
                      <li>• Lean proteins (chicken, fish, eggs, beans)</li>
                      <li>• Fruits and vegetables (all colors)</li>
                      <li>• Dairy or fortified alternatives</li>
                      <li>• Nuts, seeds, nut butters</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Athletic Performance Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Pre-workout: Banana with peanut butter</li>
                      <li>• During: Sports drinks for 60+ min activities</li>
                      <li>• Post-workout: Protein shake or chocolate milk</li>
                      <li>• Recovery: Chicken with sweet potato</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Brain-Boosting Foods:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fatty fish (salmon, tuna - 2x per week)</li>
                      <li>• Eggs (choline for memory)</li>
                      <li>• Blueberries (antioxidants)</li>
                      <li>• Dark chocolate (small amounts)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Foods to Limit or Avoid:</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Energy Zappers:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sugary energy drinks (crash after spike)</li>
                      <li>• Fast food (low nutrients, high calories)</li>
                      <li>• Candy and sweets (empty calories)</li>
                      <li>• Soda and sweetened beverages</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Unhealthy Habits:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Skipping breakfast (affects grades)</li>
                      <li>• Late-night junk food binges</li>
                      <li>• Excessive caffeine (sleep issues)</li>
                      <li>• Meal replacement with snacks only</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Diet Dangers:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Extreme calorie restriction</li>
                      <li>• Eliminating entire food groups</li>
                      <li>• Diet pills or supplements</li>
                      <li>• Fad diets from social media</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Nutrition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sports Nutrition for Teen Athletes</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-blue-200">
                <CardContent className="pt-6">
                  <Zap className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Pre-Workout</h4>
                  <p className="text-sm text-gray-700 mb-2">Eat 1-3 hours before: carbs + moderate protein</p>
                  <p className="text-xs text-blue-600 font-semibold">Examples: Oatmeal, banana + PB, pasta</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">During Exercise</h4>
                  <p className="text-sm text-gray-700 mb-2">60+ min activities: sports drink or fruit</p>
                  <p className="text-xs text-green-600 font-semibold">Hydrate: 7-10 oz every 10-20 min</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="pt-6">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-lg mb-2">Post-Workout</h4>
                  <p className="text-sm text-gray-700 mb-2">Within 30-60 min: protein + carbs (3:1 ratio)</p>
                  <p className="text-xs text-purple-600 font-semibold">Examples: Chocolate milk, protein shake</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Teen Nutrition Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Healthy Habits:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Never skip breakfast:</strong> Improves focus, grades, and energy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Pack healthy snacks:</strong> Avoid vending machine temptations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat colorful meals:</strong> More colors = more nutrients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Drink water first:</strong> Before reaching for other beverages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Plan ahead:</strong> Meal prep on weekends for busy school days</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Habits to Avoid:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Crash dieting:</strong> Damages metabolism and growth</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Comparing to others:</strong> Everyone's body is different</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eating while distracted:</strong> Leads to overeating</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Using food for emotions:</strong> Find other coping strategies</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Following social media diets:</strong> Most are unhealthy or unsafe</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Teen Wellness Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Proper nutrition works best when combined with regular exercise. Get your complete teen fitness plan
              to maximize athletic performance, build strength, and support healthy development.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Teen Workout Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover safe, effective workouts designed for teenagers to build strength, improve sports performance, and stay fit.
                </p>
                <Button size="lg" className="w-full bg-white text-indigo-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/teenagers">
                    View Teen Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Brain className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized teen nutrition plan tailored to your sport, goals, and schedule.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Meal Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands of teens building healthy habits for life through proper nutrition
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
