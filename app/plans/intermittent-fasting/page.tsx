import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Clock, Target, Zap, Droplets, Activity, Moon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Intermittent Fasting Plan 2025 | 16:8 Fasting Guide for Weight Loss USA, UK, India",
  description: "Complete intermittent fasting plan with 16:8, 18:6 fasting schedules, meal timing, and proven weight loss strategies. Expert-designed for USA, UK, Canada, Australia, India.",
  keywords: "intermittent fasting plan, 16:8 fasting, intermittent fasting for weight loss, IF diet plan, fasting schedule, time restricted eating, intermittent fasting India",
  openGraph: {
    title: "Intermittent Fasting Plan 2025 | Complete Guide",
    description: "Expert-designed intermittent fasting plan with proven strategies for fat loss, autophagy, and metabolic health.",
    url: "https://fitplanindia.com/plans/intermittent-fasting",
  },
}

export default function IntermittentFastingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-indigo-600 font-semibold">
              ⏰ Time-Restricted Eating
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Intermittent Fasting Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete intermittent fasting (IF) guide with 16:8, 18:6, and 20:4 fasting schedules, meal timing strategies, and proven 
              methods for weight loss, fat burning, autophagy, and metabolic health. Designed for beginners and experienced fasters in 
              USA, UK, Canada, Australia, and India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#fasting-schedules">View Fasting Schedules</Link>
              </Button>
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/intermittent-fasting">Fasting Exercise Guide</Link>
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
                <div className="text-3xl font-bold text-indigo-600 mb-2">16:8</div>
                <div className="text-gray-600">Most Popular</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-2">0.5-1 kg/week</div>
                <div className="text-gray-600">Fat Loss Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">12-16 hours</div>
                <div className="text-gray-600">Fat Burning Starts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">Flexible</div>
                <div className="text-gray-600">Lifestyle Friendly</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Intermittent Fasting: Complete Guide 2025</h2>
              <p className="text-lg text-gray-700 mb-6">
                Intermittent fasting (IF) is an eating pattern that cycles between periods of fasting (not eating) and eating windows, 
                focusing on WHEN you eat rather than WHAT you eat. Unlike traditional diets that restrict certain foods or calories, 
                intermittent fasting simply restricts the TIME during which you consume food. During fasting periods (typically 12-20 hours), 
                you consume zero calories - only water, black coffee, tea, and other non-caloric beverages are allowed. During eating windows 
                (4-12 hours), you eat normally without specific restrictions, though healthy whole foods are recommended for best results. 
                The most popular IF method is 16:8 (fast 16 hours, eat within 8-hour window), followed by 18:6 (fast 18 hours, eat within 
                6 hours), 20:4 or OMAD "One Meal A Day" (fast 20 hours, eat within 4 hours), 5:2 diet (eat normally 5 days, restrict to 
                500-600 calories 2 non-consecutive days), and alternate day fasting (fast every other day). Approximately 15-20% of adults 
                in USA, UK, and worldwide practice some form of intermittent fasting for weight loss, health benefits, or religious reasons.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The power of intermittent fasting lies in its metabolic effects on the body. After 12-16 hours without food, your body 
                depletes glycogen (stored carbohydrates) and switches from burning glucose to burning stored body fat for energy through a 
                process called "metabolic switching" or entering "fat-burning mode." This metabolic shift triggers numerous beneficial processes: 
                <strong> enhanced fat oxidation</strong> (burning 0.5-1 kg fat weekly without calorie counting), increased human growth hormone 
                (HGH) secretion by 300-1,200% which preserves muscle while burning fat, improved insulin sensitivity and lower insulin levels 
                (reducing diabetes risk), activation of autophagy (cellular "cleanup" process removing damaged proteins and organelles - anti-aging 
                effect), increased production of brain-derived neurotrophic factor (BDNF) improving cognitive function and mood, reduction in 
                inflammation markers and oxidative stress, and improved cardiovascular health markers (blood pressure, cholesterol, triglycerides). 
                This comprehensive intermittent fasting plan provides step-by-step guidance for choosing the right fasting schedule, optimizing 
                meal timing, maximizing fat loss, managing hunger during fasting, and combining IF with exercise for best results.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-indigo-800">Benefits of Intermittent Fasting</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Effortless weight loss:</strong> 0.5-1 kg weekly without counting calories</li>
                    <li>• <strong>Fat burning mode:</strong> Body burns stored fat after 12-16 hours fasting</li>
                    <li>• <strong>Preserved muscle mass:</strong> High HGH prevents muscle loss during fat loss</li>
                    <li>• <strong>Better insulin sensitivity:</strong> Reduces diabetes risk by 20-30%</li>
                    <li>• <strong>Autophagy activation:</strong> Cellular cleanup and anti-aging benefits</li>
                    <li>• <strong>Mental clarity:</strong> Stable energy, no blood sugar crashes, improved focus</li>
                    <li>• <strong>Simplified eating:</strong> Fewer meals to plan, prep, and think about</li>
                    <li>• <strong>Longevity benefits:</strong> May increase lifespan through cellular repair</li>
                  </ul>
                </div>
                
                <div className="bg-violet-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-violet-800">Intermittent Fasting Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Zero calories during fast:</strong> Only water, black coffee, tea allowed</li>
                    <li>• <strong>Consistent timing:</strong> Same fasting/eating windows daily for routine</li>
                    <li>• <strong>Quality matters:</strong> Eat whole, nutrient-dense foods during eating window</li>
                    <li>• <strong>Don't overeat:</strong> Eat normally, not "make up" for fasting hours</li>
                    <li>• <strong>Stay hydrated:</strong> 2-3L water daily, especially during fasting</li>
                    <li>• <strong>Electrolytes important:</strong> Salt, magnesium, potassium during longer fasts</li>
                    <li>• <strong>Start gradually:</strong> Begin with 12:12 or 14:10, progress to 16:8</li>
                    <li>• <strong>Listen to body:</strong> Adjust schedule if experiencing negative effects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasting Schedules */}
      <section id="fasting-schedules" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Intermittent Fasting Schedules: Choose Your Method</h2>
            
            <div className="space-y-6">
              <Card className="border-indigo-200">
                <CardHeader className="bg-indigo-50">
                  <CardTitle className="text-indigo-800 flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    16:8 Method - Most Popular & Beginner-Friendly
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">How It Works:</h4>
                      <p className="text-gray-700">Fast for 16 consecutive hours, eat within 8-hour window daily. Most people skip breakfast 
                      and eat from 12 PM - 8 PM (lunch and dinner) or 1 PM - 9 PM.</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Sample Schedule:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>8 PM (previous day):</strong> Finish dinner, fasting begins</li>
                        <li>• <strong>8 PM - 12 PM (next day):</strong> FASTING (16 hours) - water, black coffee, tea only</li>
                        <li>• <strong>12 PM - 1 PM:</strong> First meal (lunch) - break fast with balanced meal</li>
                        <li>• <strong>3-4 PM:</strong> Optional snack if hungry</li>
                        <li>• <strong>7-8 PM:</strong> Final meal (dinner) - eating window closes at 8 PM</li>
                        <li>• <strong>Repeat daily:</strong> Consistent timing helps body adapt</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Best For:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Beginners to intermittent fasting</li>
                          <li>• People who don't like breakfast</li>
                          <li>• Office workers (skip breakfast, eat lunch onwards)</li>
                          <li>• Social eaters (can have dinner with family)</li>
                          <li>• Sustainable long-term lifestyle</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Expected Results:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Weight loss: 0.5-1 kg per week</li>
                          <li>• Fat burning after 12-14 hours fasting</li>
                          <li>• Improved insulin sensitivity within 2-3 weeks</li>
                          <li>• Increased energy and mental clarity</li>
                          <li>• Easy to maintain long-term</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-violet-200">
                <CardHeader className="bg-violet-50">
                  <CardTitle className="text-violet-800 flex items-center">
                    <Target className="w-6 h-6 mr-3" />
                    18:6 Method - Advanced Fat Burning
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">How It Works:</h4>
                      <p className="text-gray-700">Fast for 18 hours, eat within 6-hour window. Typically 1 PM - 7 PM or 2 PM - 8 PM. 
                      More aggressive than 16:8, deeper fat burning and autophagy.</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Sample Schedule:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>7 PM (previous day) - 1 PM (next day):</strong> FASTING (18 hours)</li>
                        <li>• <strong>1 PM:</strong> First meal (lunch) - larger meal with protein, healthy fats</li>
                        <li>• <strong>4-5 PM:</strong> Optional small snack if needed</li>
                        <li>• <strong>6-7 PM:</strong> Final meal (dinner) - eating window closes at 7 PM</li>
                        <li>• <strong>Only 2 meals daily:</strong> Makes calorie control easier</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Best For:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Experienced fasters (after mastering 16:8)</li>
                          <li>• Those with significant weight to lose (20+ kg)</li>
                          <li>• People seeking deeper autophagy benefits</li>
                          <li>• Those comfortable with 2 meals daily</li>
                          <li>• Maximum fat burning goals</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Expected Results:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Weight loss: 0.7-1.2 kg per week</li>
                          <li>• Enhanced fat oxidation (18+ hours fasted)</li>
                          <li>• Stronger autophagy activation</li>
                          <li>• Greater insulin sensitivity improvement</li>
                          <li>• Significant mental clarity boost</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800 flex items-center">
                    <Moon className="w-6 h-6 mr-3" />
                    20:4 / OMAD (One Meal A Day) - Maximum Fasting
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">How It Works:</h4>
                      <p className="text-gray-700">Fast for 20-23 hours, eat within 1-4 hour window (typically one large meal). 
                      Most extreme IF method, requires significant adaptation, not for beginners.</p>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-2">Sample Schedule:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>6 PM (previous day) - 5 PM (next day):</strong> FASTING (23 hours)</li>
                        <li>• <strong>5 PM - 7 PM:</strong> One large meal (2-hour eating window)</li>
                        <li>• <strong>Meal must be large:</strong> 1,500-2,000 calories in one sitting</li>
                        <li>• <strong>Nutrient-dense focus:</strong> Protein, vegetables, healthy fats essential</li>
                        <li>• <strong>Not daily for most:</strong> 2-3x weekly mixed with 16:8 or 18:6</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Best For:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Very experienced fasters only</li>
                          <li>• Stubborn fat loss plateaus</li>
                          <li>• Those who prefer one large meal</li>
                          <li>• Maximum simplicity (no meal planning)</li>
                          <li>• Periodic deep fasting benefits</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">⚠️ Cautions:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• NOT for beginners - start with 16:8</li>
                          <li>• Risk of undereating (hard to eat enough in 1 meal)</li>
                          <li>• May cause digestive discomfort</li>
                          <li>• Social challenges (one meal timing)</li>
                          <li>• Not sustainable long-term for most</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">5:2 Diet - Flexible Weekly Approach</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>How It Works:</strong> Eat normally 5 days weekly, restrict to 500-600 calories 
                    on 2 non-consecutive days (e.g., Monday and Thursday).</p>
                    <p className="text-sm text-gray-600"><strong>Best For:</strong> People who prefer weekly pattern over daily fasting. 
                    Good for those who struggle with daily restriction. <strong>Results:</strong> 0.5-0.8 kg weekly weight loss.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Eat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What to Eat During Eating Windows</h2>
            
            <div className="space-y-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700">✅ Best Foods for Intermittent Fasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">While IF focuses on WHEN to eat, WHAT you eat matters for results. Prioritize 
                  nutrient-dense whole foods that keep you satisfied.</p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">High-Protein Foods:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Lean meats: Chicken, turkey, fish</li>
                        <li>• Eggs (great to break fast)</li>
                        <li>• Greek yogurt, cottage cheese</li>
                        <li>• Legumes: Lentils, chickpeas, beans</li>
                        <li>• Tofu, tempeh (vegetarian)</li>
                        <li>• Protein powder (convenient)</li>
                        <li>• Aim: 25-30g protein per meal</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Healthy Fats (Satiety!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Avocado (half per meal)</li>
                        <li>• Nuts: Almonds, walnuts (1 oz)</li>
                        <li>• Seeds: Chia, flax, pumpkin</li>
                        <li>• Olive oil, coconut oil</li>
                        <li>• Fatty fish: Salmon, sardines</li>
                        <li>• Nut butters (natural, 2 tbsp)</li>
                        <li>• Keeps you full longer!</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Complex Carbs & Fiber:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Vegetables: Unlimited! (non-starchy)</li>
                        <li>• Whole grains: Brown rice, quinoa, oats</li>
                        <li>• Sweet potato (moderate portions)</li>
                        <li>• Legumes (protein + carbs)</li>
                        <li>• Fruits: Berries, apples, oranges</li>
                        <li>• Whole wheat bread/pasta (moderate)</li>
                        <li>• Fiber keeps digestive system healthy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">Sample First Meal (Breaking Fast):</h4>
                    <p className="text-sm text-gray-700">Start with easy-to-digest foods: scrambled eggs + avocado + whole wheat toast, 
                    OR Greek yogurt bowl + berries + nuts + honey, OR grilled chicken salad with olive oil dressing. Avoid heavy, 
                    greasy foods that may cause discomfort after fasting.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-yellow-700">⚠️ What to Avoid During Eating Windows</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">Limit These:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Processed junk food (empty calories)</li>
                        <li>• Sugary drinks, soda (insulin spike)</li>
                        <li>• Excessive sweets, desserts</li>
                        <li>• Fried foods (hard to digest)</li>
                        <li>• Alcohol (empty calories, dehydration)</li>
                        <li>• Ultra-processed snacks</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">During Fasting (ZERO Calories!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• ✅ Water (unlimited)</li>
                        <li>• ✅ Black coffee (no cream/sugar)</li>
                        <li>• ✅ Plain tea (green, black, herbal)</li>
                        <li>• ✅ Sparkling water, club soda</li>
                        <li>• ❌ NO milk, cream, sugar</li>
                        <li>• ❌ NO juice, smoothies, protein shakes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Challenges & Solutions</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-800">😫 "I'm SO hungry during fasting!"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700"><strong>Solutions:</strong> Drink black coffee or green tea (appetite suppressants), drink 
                  2-3L water daily (hunger often = thirst), add pinch of salt to water (electrolytes reduce cravings), start gradually 
                  with 12:12 or 14:10, stay busy during fasting hours (boredom = hunger), and hunger comes in waves - wait 20-30 minutes 
                  and it passes! After 1-2 weeks, hunger dramatically reduces as body adapts.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-800">☕ "Can I have coffee with cream/milk during fasting?"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700"><strong>Answer:</strong> NO - any calories break the fast and stop fat burning. Cream/milk 
                  contains calories and triggers insulin response. Black coffee only, or wait until eating window. Some people do "dirty 
                  fasting" with small amounts (1 tbsp cream), but results are diminished. For maximum benefits, strict ZERO calorie fasting.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-800">💪 "Can I exercise while fasting?"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700"><strong>Answer:</strong> YES! Fasted cardio (light-moderate) is excellent for fat burning. 
                  Many people work out before breaking fast. For intense workouts or heavy lifting, eating shortly after is beneficial. 
                  Listen to your body - if dizzy or weak, eat before exercising. BCAA supplements during fasted training can help preserve 
                  muscle (though technically breaks fast minimally).</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-800">🚫 "Who should NOT do intermittent fasting?"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700"><strong>Avoid IF if you:</strong> Are pregnant or breastfeeding (need consistent nutrition), 
                  have history of eating disorders (fasting can trigger), are underweight or malnourished, have diabetes on insulin (risk of 
                  hypoglycemia - consult doctor), are under 18 years old (still growing), have chronic stress/cortisol issues (fasting adds 
                  stress), or have certain medical conditions. Always consult doctor before starting IF if you have health concerns.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-violet-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Intermittent Fasting Plan?</h2>
            <p className="text-xl mb-8">
              Get customized fasting schedules, meal plans, and strategies tailored to your lifestyle and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">IF Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - $100</p>
                <Button size="lg" className="w-full bg-white text-indigo-600" asChild>
                  <Link href="/contact">Book Now - $100</Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Fasting Workouts</h4>
                <p className="text-yellow-100 text-sm mb-4">Exercise guide for IF</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/intermittent-fasting">View Workouts</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
