import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Flame, Target, Zap, TrendingUp, Activity, Clock } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Metabolic Weight Loss Plan 2025 | Boost Metabolism for Fast Fat Loss USA, UK, Australia",
  description: "Complete metabolic weight loss plan to fix slow metabolism, boost metabolic rate, and achieve fast sustainable fat loss. Expert-designed for USA, UK, Canada, Australia.",
  keywords: "metabolic weight loss, boost metabolism, slow metabolism weight loss, metabolic diet plan, increase metabolism, metabolic rate, metabolism boosting foods",
  openGraph: {
    title: "Metabolic Weight Loss Plan 2025 | Complete Guide",
    description: "Expert-designed metabolic weight loss plan with proven strategies to boost metabolism and achieve sustainable fat loss.",
    url: "https://fitplanindia.com/plans/metabolic-weight-loss",
  },
}

export default function MetabolicWeightLossPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 to-pink-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-rose-600 font-semibold">
              🔥 Rev Up Your Metabolism
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Metabolic Weight Loss Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete metabolic weight loss plan designed to fix slow metabolism, boost metabolic rate, and achieve sustainable fat loss 
              without extreme dieting. Science-based strategies including metabolism-boosting foods, meal timing, strategic exercise, and 
              proven methods to overcome metabolic adaptation. Designed for adults in USA, UK, Canada, Australia struggling with stubborn 
              weight despite eating less.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View Metabolism Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/metabolic">Metabolic Workouts</Link>
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
                <div className="text-3xl font-bold text-rose-600 mb-2">10-15%</div>
                <div className="text-gray-600">Metabolism Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">200-400</div>
                <div className="text-gray-600">Extra Calories Burned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-fuchsia-600 mb-2">0.5-1 kg/week</div>
                <div className="text-gray-600">Sustainable Loss</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">4-8 weeks</div>
                <div className="text-gray-600">See Results</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Metabolism and Why It Slows Down</h2>
              <p className="text-lg text-gray-700 mb-6">
                Your metabolism (also called basal metabolic rate or BMR) is the number of calories your body burns at rest just to keep you 
                alive - breathing, circulating blood, producing hormones, growing and repairing cells. BMR accounts for 60-70% of your total 
                daily calorie burn, with physical activity adding another 20-30%, and the thermic effect of food (calories burned digesting) 
                adding 10%. Average BMR is approximately 1,200-1,800 calories daily for women and 1,600-2,400 for men depending on age, weight, 
                height, and muscle mass. Many people experience "slow metabolism" where they burn significantly fewer calories than expected 
                for their body size, making weight loss extremely difficult despite eating very little. Common symptoms of slow metabolism 
                include inability to lose weight despite strict dieting (eating 1,200-1,400 calories but no weight loss), constant fatigue and 
                low energy, always feeling cold (especially hands and feet), constipation and digestive issues, dry skin and hair loss, difficulty 
                building muscle, and rapid weight regain after any diet.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The hard truth is that <strong>years of yo-yo dieting, extreme calorie restriction, and crash diets DAMAGE your metabolism</strong> 
                through a process called "metabolic adaptation" or "adaptive thermogenesis." When you drastically cut calories (eating 1,000-1,200 
                calories for extended periods), your body perceives starvation and responds by lowering metabolic rate by 15-30% to conserve energy. 
                This happens through: decreased thyroid hormone production (T3 converts to inactive reverse T3 instead), reduced NEAT (non-exercise 
                activity thermogenesis - you unconsciously move less, fidget less, burn 200-400 fewer calories daily), muscle loss (muscle burns 
                50-100 calories per pound daily at rest - losing muscle crashes metabolism), decreased leptin (satiety hormone) making you constantly 
                hungry, increased cortisol (stress hormone) promoting fat storage especially belly fat, and mitochondrial dysfunction (cellular energy 
                factories become less efficient). The metabolic weight loss plan focuses on REVERSING metabolic damage through strategic eating that 
                BOOSTS metabolism rather than suppressing it, including eating adequate calories (no starvation diets), prioritizing protein to build 
                calorie-burning muscle mass, incorporating metabolism-boosting foods and spices, strategic meal timing and frequency, combining strength 
                training with HIIT to maximize calorie burn, managing stress and sleep (critical for hormones), and using diet breaks and refeeds to 
                prevent metabolic adaptation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-rose-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-rose-800">Benefits of Metabolic Weight Loss</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Higher calorie burn:</strong> Burn 200-400 more calories daily at rest</li>
                    <li>• <strong>Sustainable fat loss:</strong> Lose weight eating MORE food, not less</li>
                    <li>• <strong>No weight regain:</strong> Higher metabolism prevents rebound weight gain</li>
                    <li>• <strong>More energy:</strong> Feel vibrant, not exhausted from dieting</li>
                    <li>• <strong>Better hormones:</strong> Thyroid, leptin, cortisol normalize</li>
                    <li>• <strong>Muscle preservation:</strong> Lose fat, keep/build muscle</li>
                    <li>• <strong>Improved mood:</strong> Stable energy, no "hangry" feelings</li>
                    <li>• <strong>Long-term success:</strong> Fix metabolism permanently, not temporary loss</li>
                  </ul>
                </div>
                
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-pink-800">Metabolic Weight Loss Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Eat MORE, not less:</strong> Moderate deficit (300-500 cal), never starvation</li>
                    <li>• <strong>High protein priority:</strong> 1-1.2g per pound body weight (builds muscle)</li>
                    <li>• <strong>Strength training:</strong> 3-4x weekly builds calorie-burning muscle</li>
                    <li>• <strong>HIIT cardio:</strong> Boosts metabolism 24-48 hours post-workout</li>
                    <li>• <strong>Metabolism-boosting foods:</strong> Protein, spicy foods, green tea, coffee</li>
                    <li>• <strong>Frequent meals:</strong> 4-5 smaller meals keeps metabolism active</li>
                    <li>• <strong>Strategic refeeds:</strong> 1-2 high-calorie days weekly prevent adaptation</li>
                    <li>• <strong>Adequate sleep:</strong> 7-9 hours nightly (crucial for hormones)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Metabolism Slows */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">5 Major Causes of Slow Metabolism and How to Fix Them</h2>
            
            <div className="space-y-6">
              <Card className="border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-800 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-3" />
                    1. Years of Crash Dieting and Extreme Calorie Restriction
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-3">
                    <strong>The Problem:</strong> Every time you drastically cut calories (eating 1,000-1,200 daily for weeks/months), your 
                    body adapts by lowering metabolic rate 15-30%. After years of yo-yo dieting, your metabolism is permanently suppressed - 
                    you now burn 300-500 fewer calories daily than someone your size who never dieted. This is why you can't lose weight 
                    eating 1,200 calories (normal for your current damaged metabolism).
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 mb-2">✅ The Fix - Reverse Dieting:</p>
                    <p className="text-sm text-gray-700 mb-2">
                      Slowly increase calories by 100-200 weekly over 8-12 weeks until eating at maintenance (1,800-2,200 for most women, 
                      2,200-2,800 for men). Yes, you may gain 2-5 pounds initially, but you're REPAIRING metabolism. Once metabolism is 
                      restored to normal, THEN create moderate 300-500 calorie deficit for sustainable fat loss.
                    </p>
                    <p className="text-xs text-gray-600">
                      Example: Week 1: 1,400 cal → Week 2: 1,500 cal → Week 3: 1,600 cal → Continue until 2,000 cal maintenance. Maintain 
                      2-4 weeks, then cut to 1,700 for fat loss (still MORE food than before!).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-800 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3" />
                    2. Lack of Muscle Mass (Muscle = Metabolic Engine)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-3">
                    <strong>The Problem:</strong> Muscle tissue burns 5-10x more calories at rest than fat tissue. Each pound of muscle burns 
                    approximately 50-100 calories daily doing nothing. When you lose weight through cardio-only and low-calorie diets, you lose 
                    MUSCLE along with fat. Losing 10 pounds of muscle means burning 500-1,000 fewer calories daily! This is the primary reason 
                    metabolism crashes during weight loss.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 mb-2">✅ The Fix - Build Muscle with Strength Training:</p>
                    <p className="text-sm text-gray-700 mb-2">
                      Prioritize heavy strength training 3-4x weekly (not just cardio). Compound exercises: squats, deadlifts, bench press, 
                      rows, overhead press. Progressive overload - lift heavier each week. Eat adequate protein (1-1.2g per pound body weight) 
                      to build muscle while losing fat. Even gaining 5 pounds of muscle increases metabolism by 250-500 calories daily!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="text-yellow-800 flex items-center">
                    <Zap className="w-6 h-6 mr-3" />
                    3. Thyroid Dysfunction (Hypothyroidism)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-3">
                    <strong>The Problem:</strong> Thyroid hormones (T3, T4) directly regulate metabolic rate. Hypothyroidism (underactive thyroid) 
                    affects 5-10% of adults, causing metabolism to slow 20-40%. Symptoms: unexplained weight gain, constant fatigue, always cold, 
                    dry skin, constipation, brain fog. Chronic dieting can also suppress thyroid function (adaptive response).
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 mb-2">✅ The Fix:</p>
                    <p className="text-sm text-gray-700">
                      Get thyroid blood test (TSH, Free T3, Free T4) from doctor. If diagnosed with hypothyroidism, thyroid medication 
                      (levothyroxine) is life-changing. Support thyroid naturally: adequate iodine (seaweed, iodized salt), selenium (Brazil 
                      nuts - 2-3 daily), zinc (oysters, pumpkin seeds), avoid excessive soy, and don't under-eat (suppresses thyroid further).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800 flex items-center">
                    <Activity className="w-6 h-6 mr-3" />
                    4. Sedentary Lifestyle and Low NEAT
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-3">
                    <strong>The Problem:</strong> NEAT (Non-Exercise Activity Thermogenesis) - calories burned through daily movement outside 
                    formal exercise - accounts for 15-30% of daily calorie burn (300-800 calories). When metabolism slows or you're in calorie 
                    deficit, NEAT unconsciously decreases dramatically (less fidgeting, moving less, taking elevator instead of stairs) - you 
                    burn 200-400 fewer calories daily without realizing.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 mb-2">✅ The Fix - Increase Daily Movement:</p>
                    <p className="text-sm text-gray-700">
                      Target 8,000-10,000 steps daily (track with phone/watch). Take walking breaks every hour if desk job. Stand more, sit less. 
                      Take stairs. Park farther away. Do household chores actively. Even small movements add up to 200-400 extra calories daily!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800 flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    5. Poor Sleep and Chronic Stress
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-3">
                    <strong>The Problem:</strong> Sleep deprivation (less than 7 hours nightly) decreases metabolism 5-20% through hormonal 
                    disruption: increased cortisol (stress hormone promoting belly fat storage), decreased leptin (satiety hormone - makes you 
                    hungrier), increased ghrelin (hunger hormone), reduced growth hormone (impairs fat burning and muscle building), and insulin 
                    resistance worsening. Chronic stress has identical effects through elevated cortisol 24/7.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-800 mb-2">✅ The Fix:</p>
                    <p className="text-sm text-gray-700">
                      Prioritize 7-9 hours quality sleep nightly (non-negotiable for weight loss). Sleep hygiene: dark room, cool temperature, 
                      no screens 1 hour before bed, consistent schedule. Manage stress: meditation, yoga, walking, therapy, reduce caffeine. 
                      High cortisol makes fat loss impossible regardless of diet/exercise.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Metabolism-Boosting Foods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Top Metabolism-Boosting Foods and Strategies</h2>
            
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">🔥 Foods That Rev Up Your Metabolism</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">High-Protein Foods (30% TEF!):</h4>
                    <p className="text-xs text-gray-600 mb-2">Protein has highest Thermic Effect of Food - burns 20-30% of calories just digesting it!</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Lean meats: Chicken, turkey, fish</li>
                      <li>• Eggs (complete protein)</li>
                      <li>• Greek yogurt (high protein)</li>
                      <li>• Cottage cheese</li>
                      <li>• Legumes (protein + fiber)</li>
                      <li>• Protein powder supplements</li>
                      <li>• Aim: 25-30g protein per meal</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Thermogenic Foods (Increase Heat Production):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Green tea:</strong> EGCG catechins boost metabolism 4-5%</li>
                      <li>• <strong>Coffee:</strong> Caffeine increases metabolic rate 3-11%</li>
                      <li>• <strong>Chili peppers:</strong> Capsaicin burns extra 50-100 cal/day</li>
                      <li>• <strong>Ginger:</strong> Thermogenic effect, improves digestion</li>
                      <li>• <strong>Cinnamon:</strong> Improves insulin sensitivity</li>
                      <li>• <strong>Apple cider vinegar:</strong> May boost fat burning</li>
                      <li>• <strong>Coconut oil:</strong> MCTs increase energy expenditure</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Fiber-Rich Foods (Increase Satiety):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Non-starchy vegetables (unlimited)</li>
                      <li>• Whole grains: Oats, quinoa, brown rice</li>
                      <li>• Legumes: Lentils, beans (protein + fiber)</li>
                      <li>• Berries (low sugar, high fiber)</li>
                      <li>• Chia seeds, flaxseeds (10-12g fiber/oz)</li>
                      <li>• Target: 25-35g fiber daily</li>
                      <li>• Fiber slows digestion, increases fullness</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Metabolism-Boosting Meal Example:</h4>
                  <p className="text-sm text-gray-700">
                    Breakfast: Omelet (3 eggs) with spinach, tomatoes, topped with hot sauce + green tea = High protein (21g), thermogenic 
                    from hot sauce and green tea, keeps you full 4-5 hours, burns 60-90 calories just digesting (TEF)!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
      <section id="meal-plan" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Metabolic Weight Loss Meal Plan (1,800 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              High-protein, metabolism-boosting meal plan with strategic timing. Moderate deficit supporting muscle growth and metabolic rate. 
              Macros: 150g protein (33%), 180g carbs (40%), 60g fat (30%).
            </p>

            <Card className="border-rose-200">
              <CardHeader className="bg-rose-50">
                <CardTitle className="text-rose-800">Sample Day - Metabolism-Boosting Strategy</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meal 1 - Breakfast (7:30 AM) - 450 calories:</h4>
                    <p className="text-gray-700">Veggie omelet (3 whole eggs + 2 egg whites, spinach, mushrooms, peppers) + 1 slice whole wheat toast + green tea with lemon</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 35g | High TEF, thermogenic from green tea | Boosts morning metabolism</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meal 2 - Mid-Morning (10:30 AM) - 250 calories:</h4>
                    <p className="text-gray-700">Greek yogurt (1 cup) + berries (½ cup) + cinnamon + 10 almonds + black coffee</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 20g | Caffeine boost | Cinnamon improves insulin sensitivity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meal 3 - Lunch (1:30 PM) - 500 calories:</h4>
                    <p className="text-gray-700">Grilled chicken breast (150g) + quinoa (¾ cup) + large mixed salad (2 cups) with olive oil + chili flakes + apple</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 45g | Chili flakes thermogenic | High fiber keeps you full</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meal 4 - Afternoon Snack (4:00 PM) - 200 calories:</h4>
                    <p className="text-gray-700">Protein shake (1 scoop) + banana + dash of cinnamon + green tea</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 25g | Quick, convenient | Pre-workout fuel if training</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meal 5 - Dinner (7:30 PM) - 500 calories:</h4>
                    <p className="text-gray-700">Grilled salmon (150g) + roasted vegetables (2 cups: broccoli, cauliflower, peppers) cooked in coconut oil (1 tbsp) + small sweet potato</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 40g | Omega-3 anti-inflammatory | Coconut oil MCTs boost metabolism</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-rose-200">
                  <p className="text-sm font-semibold text-rose-700">Daily Total: 1,900 calories | Protein: 165g (35%) | Carbs: 180g (38%) | Fat: 57g (27%) | Fiber: 35g</p>
                  <p className="text-xs text-gray-500 mt-1">Water: 3-4L daily | Green tea: 2-3 cups | Supports metabolism naturally</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Metabolic Weight Loss Plan?</h2>
            <p className="text-xl mb-8">
              Get customized strategies to boost your metabolism, reverse metabolic damage, and achieve sustainable fat loss.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Metabolism Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - $100</p>
                <Button size="lg" className="w-full bg-white text-rose-600" asChild>
                  <Link href="/contact">Book Now - $100</Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Flame className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Metabolic Workouts</h4>
                <p className="text-yellow-100 text-sm mb-4">Metabolism-boosting exercises</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/metabolic">View Workouts</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
