import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, TrendingUp, Flame, Utensils, Activity, Apple, Scale, Droplet, Dumbbell } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Weight Loss Diet Plan | Complete Guide to Lose Weight Safely & Fast",
  description: "Complete weight loss diet guide with meal plans, calorie deficit strategies, fat loss nutrition, metabolism boosting, and sustainable weight loss for long-term results.",
  keywords: "weight loss diet, fat loss diet plan, calorie deficit diet, how to lose weight, weight loss meal plan, lose belly fat, fast weight loss diet",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/weight-loss",
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
    title: "Weight Loss Diet Plan | Complete Guide to Fat Loss",
    description: "Science-backed weight loss diet plan with meal examples, calorie deficit strategies, and proven fat loss methods.",
    url: "https://www.fitplanindia.com/blog/weight-loss",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
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
              🔥 Ultimate Fat Loss Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Science of Weight Loss: Eat Smart, Not Less
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Stop starving yourself. Discover the proven calorie deficit strategy, metabolism-boosting foods,
              and sustainable meal plans to lose fat and keep it off forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  Get Meal Plan
                </Link>
              </Button>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/tools/calorie-calculator">
                  <Activity className="w-4 h-4 mr-2" />
                  Calculate Calories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl mt-12">
        <ExpertNote
          title="Ayurvedic View on Weight Loss (Sthauyla)"
          content="Ayurveda views obesity as an excess of Meda Dhatu (Fat Tissue) and Kapha dosha. Starving increases Vata and makes the body hold onto fat. The key is to increase 'Agni' (Digestive Fire) with spices like Trikatu (Ginger, Pepper, Long Pepper) and eat warm, light foods."
        />
      </div>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">500</div>
                <div className="text-gray-600">Health Calorie Deficit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">1.5g</div>
                <div className="text-gray-600">Protein Per kg Bodyweight</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">3-4L</div>
                <div className="text-gray-600">Water Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">7-8h</div>
                <div className="text-gray-600">Sleep for Recovery</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Fundamentals of Fat Loss</h2>
              <p className="text-lg text-gray-700 mb-6">
                Weight loss is fundamentally about energy balance, but hormone regulation, sleep, and stress play huge roles.
                A sustainable diet allows you to eat the foods you love while staying within a calorie deficit foundation.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-red-800">Why Most Diets Fail</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Too restrictive (cutting entire food groups)</li>
                    <li>• unsustainable calorie levels (starvation)</li>
                    <li>• Lack of protein (muscle loss)</li>
                    <li>• Ignoring lifestyle factors (sleep/stress)</li>
                    <li>• "All or Nothing" mindset</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-green-800">The Winning Strategy</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Moderate calorie deficit (300-500 kcal)</li>
                    <li>• High protein intake for satiety</li>
                    <li>• Volume eating (low cal, high bulk foods)</li>
                    <li>• 80/20 Rule (80% whole foods, 20% fun)</li>
                    <li>• Consistency over perfection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diet Principles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Pillars of Weight Loss Nutrition</h2>

            <div className="space-y-8">
              {/* Calorie Deficit */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Scale className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">1. Calculate Your Calorie Deficit</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-700 mb-4">
                        You must burn more energy than you consume. Use our calculator to find your TDEE (Total Daily Energy Expenditure)
                        and subtract 500 calories for a sustainable 0.5kg (1lb) loss per week.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li><strong>TDEE:</strong> Calories burned at rest + activity</li>
                        <li><strong>Deficit:</strong> TDEE - 500 calories</li>
                        <li><strong>Minimum:</strong> Never go below 1200 (women) / 1500 (men)</li>
                      </ul>
                      <div className="mt-6">
                        <Button variant="outline" className="border-red-500 text-red-600 hover:bg-red-50" asChild>
                          <Link href="/tools/calorie-calculator">Use Calorie Calculator</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <h5 className="font-semibold text-gray-900 mb-2 text-center">Example Calculation</h5>
                      <p className="text-sm text-gray-700 font-mono bg-gray-50 p-3 rounded">
                        Woman, 150 lbs, moderately active: <br />
                        TDEE = 150 × 15 = 2,250 calories <br />
                        Weight Loss = 2,250 - 500 = <strong>1,750 calories per day</strong> <br />
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
        </div>
      </section>

      {/* Foods to Eat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Best Foods for Weight Loss</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Eat More (Volume Foods):</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Leafy Greens & Veggies</h5>
                    <p className="text-sm text-gray-700">Spinach, kale, broccoli, zucchini, cucumber. Fill half your plate.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Lean Protein Sources</h5>
                    <p className="text-sm text-gray-700">Chicken breast, white fish, egg whites, Greek yogurt, tofu, lentils.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">High Fiber Carbs</h5>
                    <p className="text-sm text-gray-700">Oats, quinoa, berries, apples, beans. Keep you full for hours.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Limit / Avoid (Calorie Bombs):</h4>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Liquid Calories</h5>
                    <p className="text-sm text-gray-700">Soda, fruit juice, sugary coffees, alcohol. Zero satiety, high calories.</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Processed Snacks</h5>
                    <p className="text-sm text-gray-700">Chips, cookies, pastries. Designed to make you overeat.</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Fried Foods</h5>
                    <p className="text-sm text-gray-700">Deep fried items are extremely calorie dense due to oil absorption.</p>
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
              A sample plan demonstrating high protein, high volume eating. Adjust portion sizes to fit your specific calorie needs.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-800">Day 1 Sample</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Breakfast (High Protein):</h5>
                      <p className="text-gray-700">3 Egg omelet with spinach, mushrooms, onions. 1 slice whole grain toast.</p>
                      <p className="text-sm text-gray-500 mt-1">~400 cals | 25g protein</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Lunch (Complex Carbs):</h5>
                      <p className="text-gray-700">Grilled chicken breast salad with chickpeas, cucumber, tomato, light vinaigrette.</p>
                      <p className="text-sm text-gray-500 mt-1">~450 cals | 40g protein</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Snack (Pre-Workout):</h5>
                      <p className="text-gray-700">Greek yogurt (1 cup) with few berries and 10 almonds.</p>
                      <p className="text-sm text-gray-500 mt-1">~200 cals | 20g protein</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Dinner (Light & Filling):</h5>
                      <p className="text-gray-700">Baked Salmon (or Tofu) with steamed broccoli and small portion of quinoa.</p>
                      <p className="text-sm text-gray-500 mt-1">~500 cals | 35g protein</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* General Plan Elements */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Meal Prep Staples (Mix & Match)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-3">Proteins (Pre-cook these):</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Boiled Eggs (keep in fridge)</li>
                        <li>• Grilled Chicken Breast strips</li>
                        <li>• Canned Tuna (in water)</li>
                        <li>• Low fat Cottage Cheese (Paneer)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3">Carb Sources:</h5>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Boiled Potatoes (cooled = resistant starch)</li>
                        <li>• Cooked Quinoa or Brown Rice</li>
                        <li>• Oats (Overnight oats)</li>
                        <li>• Whole fruits (Apples, Bananas)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <ExpertNote
          title="The NEAT Factor"
          content="Exercise is great, but NEAT (Non-Exercise Activity Thermogenesis) burns more calories. Stand while working, take the stairs, walk while talking on the phone. These small movements add up to 300-500 extra calories burned daily without 'working out'."
        />
      </div>

      {/* Calorie Deficit Explained */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding the Math</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-red-700">The 3500 Calorie Rule</h3>
                <p className="text-gray-700 mb-4">
                  1 pound of fat equals approximately 3,500 calories. To lose 1 pound per week, you need a deficit of 3,500 calories per week, which is:
                </p>
                <div className="text-center font-bold text-2xl text-gray-800 py-4 bg-gray-100 rounded">
                  500 calorie deficit / day
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-4 text-green-700">How to Create the Deficit</h3>
                <p className="text-gray-700 mb-4">
                  The best way is a combination of diet and movement.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Eat 250 less:</strong> Cut one snack or reduce portion slightly.</li>
                  <li>• <strong>Burn 250 more:</strong> 45 min brisk walk.</li>
                  <li>• <strong>Total:</strong> 500 deficit (Pain-free!)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <SuccessStory
          name="Rahul M."
          age={28}
          condition="Overweight"
          result="Lost 15kg in 6 Months"
          quote="I stopped looking for 'magic fat burner pills' and just focused on hitting my protein goal and walking 10k steps. The weight fell off consistently."
          duration="6 Months"
        />
      </div>

      {/* Success Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Psychological Hacks for Fat Loss</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Eat on Smaller Plates</h4>
                <p className="text-sm text-gray-600">Visual trickery works. The same amount of food looks huge on a 9-inch plate vs tiny on a 12-inch plate.</p>
              </div>
              <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Drink Water Before Meals</h4>
                <p className="text-sm text-gray-600">Drink 500ml water 30 mins before eating. Studies show this leads to eating 13% fewer calories automatically.</p>
              </div>
              <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Prioritize Sleep</h4>
                <p className="text-sm text-gray-600">Poor sleep increases Ghrelin (hunger hormone). 8 hours of sleep is the best fat burner.</p>
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
              Start Your Transformation Today
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              You have the knowledge. Now you need the plan and the tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Workout Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Fat Loss Workouts</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Combine your diet with the most effective fat burning exercise routines.
                </p>
                <Button size="lg" className="w-full bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/weight-loss">
                    View Workouts
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-orange-500/20 border-2 border-orange-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Activity className="w-12 h-12 text-orange-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-orange-100 text-sm mb-4 leading-relaxed">
                  Use our AI to generate a meal plan that fits your exact foods likes, dislikes, and schedule.
                </p>
                <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Meal Plan
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-4xl">
        <ScientificRefs
          references={[
            { text: "Optimal Diet Strategies for Weight Loss (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/2557605/" },
            { text: "Protein Intake for Weight Loss and Muscle Preservation", url: "https://pubmed.ncbi.nlm.nih.gov/25926512/" },
            { text: "Sleep and Obesity Connection", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3632337/" }
          ]}
        />
      </div>
    </div>
  )
}
