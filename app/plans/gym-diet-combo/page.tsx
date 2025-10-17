import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Dumbbell, Target, Zap, Apple, TrendingUp, Activity } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gym Diet Plan 2025 | Complete Workout + Nutrition for Muscle Gain & Fat Loss USA, UK, India",
  description: "Complete gym diet plan combining workout routines with nutrition for muscle building, fat loss, and body transformation. Expert-designed for USA, UK, Canada, Australia, India.",
  keywords: "gym diet plan, workout nutrition, muscle building diet, bodybuilding meal plan, gym food plan, pre workout nutrition, post workout meal, fitness diet India",
  openGraph: {
    title: "Gym Diet Plan 2025 | Complete Workout + Nutrition Guide",
    description: "Expert-designed gym diet combining optimal workout nutrition, meal timing, and proven strategies for maximum gains.",
    url: "https://fitplanindia.com/plans/gym-diet-combo",
  },
}

export default function GymDietComboPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-orange-600 font-semibold">
              💪 Workout + Nutrition Combined
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Gym + Diet Combo Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete gym diet plan combining strategic workout routines with optimized nutrition for maximum muscle gain, fat loss, 
              and body transformation. Includes pre-workout nutrition, post-workout meals, protein timing, and meal plans designed 
              for gym-goers in USA, UK, Canada, Australia, and India seeking serious results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View Gym Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/gym">Complete Gym Workouts</Link>
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
                <div className="text-3xl font-bold text-orange-600 mb-2">2,500-3,000</div>
                <div className="text-gray-600">Calories (Muscle Gain)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">2g/kg</div>
                <div className="text-gray-600">Protein Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">5-6 meals</div>
                <div className="text-gray-600">Per Day</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Timing</div>
                <div className="text-gray-600">Critical Factor</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Gym Nutrition: The Missing Piece for Results</h2>
              <p className="text-lg text-gray-700 mb-6">
                The hard truth about gym results: training is only 30% of the equation - diet accounts for 70% of your body transformation 
                success. You can train perfectly with the best workout program, but without proper nutrition to support muscle growth and 
                recovery, your gains will be minimal or non-existent. Your muscles grow and fat burns OUTSIDE the gym during recovery, 
                fueled by the nutrients you provide. This is why professional bodybuilders and athletes obsess over nutrition timing, macro 
                ratios, and meal frequency - they understand that optimal nutrition is the FOUNDATION of all gym progress. Common mistakes 
                gym-goers make include: inadequate protein intake (need 1.6-2.2g per kg body weight daily, or 120-180g for a 75kg person), 
                not eating enough calories to support muscle growth (need 300-500 calorie surplus for bulking), skipping pre-workout nutrition 
                (depleted glycogen = poor performance and muscle loss), ignoring post-workout nutrition window (missing 30-60 minute anabolic 
                window), poor meal timing (eating 2-3 large meals instead of 5-6 smaller meals every 3 hours), and insufficient carbohydrates 
                (fuel for intense workouts - need 3-5g per kg body weight for gym training).
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The foundation of effective gym nutrition lies in understanding your specific goal and eating accordingly. For <strong>muscle 
                gain/bulking</strong>: eat in calorie surplus (300-500 calories above maintenance), consume 2-2.2g protein per kg body weight 
                (prioritize muscle protein synthesis), eat 4-6g carbs per kg body weight (fuel intense training), include healthy fats at 
                20-30% of calories (hormone production), eat every 3-4 hours (5-6 meals daily keeps muscles in anabolic state), and emphasize 
                pre-workout and post-workout nutrition for maximum gains. For <strong>fat loss while maintaining muscle</strong>: eat in moderate 
                calorie deficit (300-500 calories below maintenance), consume HIGH protein at 2-2.5g per kg body weight (prevents muscle loss 
                during deficit), moderate carbs at 2-3g per kg body weight (enough for training performance), include healthy fats at 20-25% 
                calories, prioritize protein timing around workouts (pre and post), and consider intermittent fasting or carb cycling for 
                advanced fat loss. This comprehensive gym diet plan provides strategic meal timing, optimal macro ratios, pre/post-workout 
                nutrition protocols, and complete meal plans for both muscle gain and fat loss goals combined with gym training.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-orange-800">Why Gym Diet Combo Works</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Maximum muscle growth:</strong> Proper nutrition + training = optimal gains</li>
                    <li>• <strong>Better performance:</strong> Pre-workout nutrition fuels intense training</li>
                    <li>• <strong>Faster recovery:</strong> Post-workout nutrition rebuilds muscle faster</li>
                    <li>• <strong>Prevents overtraining:</strong> Adequate calories and protein prevent breakdown</li>
                    <li>• <strong>Fat loss with muscle:</strong> High protein preserves muscle during cutting</li>
                    <li>• <strong>Consistent progress:</strong> Meal timing optimizes hormone response</li>
                    <li>• <strong>Energy for workouts:</strong> Never train on empty - proper fuel essential</li>
                    <li>• <strong>Body recomposition:</strong> Build muscle AND lose fat simultaneously</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-red-800">Gym Nutrition Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Protein priority:</strong> 2g per kg body weight minimum daily</li>
                    <li>• <strong>Pre-workout fuel:</strong> Carbs + protein 1-2 hours before training</li>
                    <li>• <strong>Post-workout window:</strong> Protein + carbs within 30-60 minutes</li>
                    <li>• <strong>Meal frequency:</strong> 5-6 meals every 3-4 hours (keeps metabolism high)</li>
                    <li>• <strong>Carb timing:</strong> Most carbs around workout (breakfast, pre, post)</li>
                    <li>• <strong>Calorie surplus (bulk):</strong> 300-500 above maintenance for muscle gain</li>
                    <li>• <strong>Calorie deficit (cut):</strong> 300-500 below maintenance, high protein</li>
                    <li>• <strong>Hydration critical:</strong> 4-5L water daily, more during training</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Nutrition Timing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Critical Workout Nutrition Timing: Pre, Intra, Post</h2>
            
            <div className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800 flex items-center">
                    <Zap className="w-6 h-6 mr-3" />
                    Pre-Workout Nutrition (1-2 Hours Before)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Purpose:</h4>
                      <p className="text-gray-700">Fuel your workout with readily available energy (glycogen), prevent muscle breakdown 
                      during training, maximize strength and performance, and start muscle protein synthesis before training even begins.</p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Ideal Pre-Workout Meal (1-2 hours before):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Carbohydrates (30-50g):</strong> Oats, brown rice, sweet potato, banana, whole wheat toast</li>
                        <li>• <strong>Protein (20-30g):</strong> Chicken breast, eggs, protein shake, Greek yogurt</li>
                        <li>• <strong>Low fat:</strong> Fat slows digestion - keep minimal pre-workout</li>
                        <li>• <strong>Hydration:</strong> 400-600ml water 30-60 minutes before</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm text-green-800 mb-2">Pre-Workout Meal Examples:</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Oatmeal (½ cup) + banana + protein scoop</li>
                          <li>• 2 whole eggs + 2 egg whites + 2 toast slices</li>
                          <li>• Grilled chicken (100g) + brown rice (1 cup)</li>
                          <li>• Greek yogurt (200g) + berries + granola</li>
                          <li>• Protein shake + banana + peanut butter (1 tbsp)</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm text-yellow-800 mb-2">Quick Pre-Workout (30 min before):</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Banana + coffee (caffeine boost)</li>
                          <li>• Protein shake (fast-digesting whey)</li>
                          <li>• Rice cakes + honey</li>
                          <li>• Apple + 10 almonds</li>
                          <li>• Energy bar (20g+ carbs, 10g+ protein)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800 flex items-center">
                    <Activity className="w-6 h-6 mr-3" />
                    Intra-Workout Nutrition (During Training)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>For workouts under 60 minutes:</strong> Water is sufficient. Sip 150-250ml 
                    every 15-20 minutes.</p>
                    <p className="text-gray-700"><strong>For intense workouts over 90 minutes:</strong> Consider intra-workout carbs 
                    (30-60g per hour) from sports drinks, dextrose, or BCAA + carb supplements. This prevents muscle breakdown and 
                    maintains performance during very long training sessions.</p>
                    <p className="text-sm text-gray-600"><strong>Most gym-goers:</strong> Just water is fine. Intra-workout nutrition 
                    is mainly for elite athletes or marathon gym sessions (2+ hours).</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-800 flex items-center">
                    <Target className="w-6 h-6 mr-3" />
                    Post-Workout Nutrition (Within 30-60 Minutes) - MOST CRITICAL!
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Purpose (The "Anabolic Window"):</h4>
                      <p className="text-gray-700">After intense training, your muscles are PRIMED to absorb nutrients for maximum growth 
                      and recovery. Muscle protein synthesis rates are elevated 2-3x normal for 24-48 hours post-workout, with the HIGHEST 
                      rates in the first 1-2 hours. Glycogen stores are depleted and need rapid replenishment. This is THE most important 
                      meal of the day for gym results!</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Ideal Post-Workout Meal (within 30-60 min):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Fast-digesting protein (30-40g):</strong> Whey protein shake, egg whites, chicken breast</li>
                        <li>• <strong>Fast-digesting carbs (40-80g):</strong> White rice, white bread, rice cakes, dextrose, banana</li>
                        <li>• <strong>Ratio:</strong> 2:1 or 3:1 carbs to protein for muscle gain</li>
                        <li>• <strong>Low fat:</strong> Fat slows absorption - avoid post-workout</li>
                        <li>• <strong>Hydration:</strong> 500-700ml water to rehydrate</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm text-blue-800 mb-2">Post-Workout Examples (Muscle Gain):</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Whey protein (2 scoops) + banana + white rice (1 cup)</li>
                          <li>• Grilled chicken (150g) + white rice (1.5 cups) + vegetables</li>
                          <li>• 4 egg whites + 2 whole eggs + 3 slices white toast + honey</li>
                          <li>• Protein shake + rice cakes (3) + peanut butter (2 tbsp)</li>
                          <li>• Tuna (1 can) + white pasta (1.5 cups) + tomato sauce</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm text-orange-800 mb-2">Post-Workout (Fat Loss):</h4>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Whey protein (2 scoops) + banana (smaller carbs)</li>
                          <li>• Grilled chicken (150g) + sweet potato (½ medium)</li>
                          <li>• Protein shake + apple + 10 almonds</li>
                          <li>• 6 egg whites + 1 whole wheat toast</li>
                          <li>• Still prioritize protein, reduce carbs slightly</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">⚠️ DON'T Skip Post-Workout Nutrition!</h4>
                      <p className="text-sm text-gray-700">This is the MOST important meal for gym results. Skipping it means wasted 
                      workout, slower muscle growth, prolonged soreness, and potential muscle loss. Even if not hungry, force down a 
                      protein shake at minimum. Your future gains depend on it!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Diet Meal Plan */}
      <section id="meal-plan" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Gym Diet Meal Plan (Muscle Gain - 2,800 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              High-protein, high-carb meal plan for muscle building. Training days schedule. Macros: 180g protein (26%), 360g carbs (51%), 
              72g fat (23%). Adjust portions for your body weight and goals.
            </p>

            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-orange-800">Training Day - 6 Meals for Maximum Gains</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meal 1 - Breakfast (7:00 AM) - 550 calories:</h4>
                    <p className="text-gray-700">6 whole eggs (scrambled or boiled) + 2 slices whole wheat toast + avocado (¼) + glass of orange juice (200ml)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 36g | Carbs: 48g | Fat: 26g | Kickstart metabolism, fuel for day</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meal 2 - Mid-Morning Snack (10:00 AM) - 400 calories:</h4>
                    <p className="text-gray-700">Greek yogurt (300g) + granola (½ cup) + banana + 10 almonds</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 30g | Carbs: 48g | Fat: 10g | Keeps muscles fed</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
                    <h4 className="font-semibold text-blue-800 mb-1">Meal 3 - Pre-Workout (12:30 PM) - 500 calories:</h4>
                    <p className="text-gray-700">Grilled chicken breast (150g) + brown rice (1.5 cups cooked) + steamed broccoli (1 cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 45g | Carbs: 60g | Fat: 8g | Fuel for 2:00 PM workout!</p>
                    <p className="text-xs text-blue-700 mt-1">⏰ 1.5 hours before gym session</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-semibold text-green-800 mb-1">🏋️ GYM TRAINING SESSION (2:00-3:30 PM)</h4>
                    <p className="text-sm text-gray-600">During: Sip 500ml water throughout workout</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                    <h4 className="font-semibold text-green-800 mb-1">Meal 4 - Post-Workout (3:45 PM) - 600 calories:</h4>
                    <p className="text-gray-700">Whey protein shake (2 scoops) + banana + white rice (2 cups cooked) + grilled chicken breast (100g)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 65g | Carbs: 85g | Fat: 6g | ANABOLIC WINDOW!</p>
                    <p className="text-xs text-green-700 mt-1">⏰ Within 30 minutes post-workout - CRITICAL MEAL!</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meal 5 - Afternoon Snack (6:00 PM) - 350 calories:</h4>
                    <p className="text-gray-700">Tuna sandwich (2 whole wheat bread slices + 1 can tuna + light mayo) + apple</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 35g | Carbs: 40g | Fat: 8g | Sustains recovery</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meal 6 - Dinner (9:00 PM) - 550 calories:</h4>
                    <p className="text-gray-700">Grilled salmon (200g) + quinoa (1 cup cooked) + mixed vegetables (2 cups) + olive oil (1 tbsp)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 50g | Carbs: 42g | Fat: 22g | Omega-3 for recovery, slow-digesting protein for overnight muscle repair</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-orange-200">
                  <p className="text-sm font-semibold text-orange-700">Daily Total: 2,950 calories | Protein: 261g (35%) | Carbs: 323g (44%) | Fat: 80g (24%)</p>
                  <p className="text-xs text-gray-500 mt-1">Hydration: 4-5L water daily | Electrolytes: Pinch of salt in water bottles</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 mt-6">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-800">Fat Loss Variation (2,200 Calories)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">For fat loss while maintaining muscle, reduce carbs and total calories while keeping 
                protein HIGH:</p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Reduce carb portions:</strong> 1 cup rice instead of 1.5-2 cups, 1 toast instead of 2</li>
                  <li>• <strong>Increase protein slightly:</strong> 2-2.5g per kg body weight (prevents muscle loss in deficit)</li>
                  <li>• <strong>Keep post-workout carbs:</strong> Still prioritize post-workout nutrition (but slightly smaller)</li>
                  <li>• <strong>Add more vegetables:</strong> Volume eating - fill up on low-calorie veggies</li>
                  <li>• <strong>Target macros:</strong> 200g protein (36%) | 200g carbs (36%) | 60g fat (24%) = 2,200 calories</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supplements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Gym Supplements (Optional but Helpful)</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">✅ Worth Taking</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Whey protein:</strong> Convenient protein source, fast-absorbing post-workout</li>
                    <li>• <strong>Creatine monohydrate:</strong> 5g daily, increases strength, muscle mass, well-researched</li>
                    <li>• <strong>Multivitamin:</strong> Fills nutrient gaps from diet</li>
                    <li>• <strong>Fish oil (omega-3):</strong> Reduces inflammation, joint health</li>
                    <li>• <strong>Vitamin D3:</strong> Most people deficient, supports testosterone, bone health</li>
                    <li>• <strong>Caffeine (pre-workout):</strong> Improves performance, focus (200-400mg)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-yellow-700">⚠️ Not Essential</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>BCAAs:</strong> Unnecessary if eating enough protein (save your money)</li>
                    <li>• <strong>Fat burners:</strong> Mostly caffeine + marketing, diet is key</li>
                    <li>• <strong>Testosterone boosters:</strong> Most don't work, save money</li>
                    <li>• <strong>Mass gainers:</strong> Just expensive calories, make your own shakes</li>
                    <li>• <strong>Expensive pre-workouts:</strong> Coffee + banana = same effect cheaper</li>
                    <li>• Focus on FOOD first, supplements are extras!</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Gym Diet + Workout Plan?</h2>
            <p className="text-xl mb-8">
              Get customized meal plans, workout routines, and supplement guidance tailored to your body type and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Gym + Diet Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - $100</p>
                <Button size="lg" className="w-full bg-white text-orange-600" asChild>
                  <Link href="/contact">Book Now - $100</Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Complete Gym Workouts</h4>
                <p className="text-yellow-100 text-sm mb-4">Full training program</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/general">View Workouts</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
