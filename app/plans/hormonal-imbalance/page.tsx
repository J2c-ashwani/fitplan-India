import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Moon, Target, Sparkles, Activity, TrendingUp, Info } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hormonal Imbalance Diet Plan 2025 | PCOS, Thyroid, Menopause Weight Loss USA, UK",
  description: "Complete hormonal imbalance diet plan for PCOS, thyroid, menopause, and hormone-related weight gain. Expert-designed for women in USA, UK, Canada, Australia.",
  keywords: "hormonal imbalance diet, PCOS diet plan, thyroid diet, menopause weight loss, hormone balance diet, PCOS weight loss, hypothyroidism diet, estrogen dominance",
  openGraph: {
    title: "Hormonal Imbalance Diet Plan 2025 | Complete Guide",
    description: "Expert-designed diet plan to balance hormones naturally and achieve sustainable weight loss for PCOS, thyroid, and menopause.",
    url: "https://fitplanindia.com/plans/hormonal-imbalance",
  },
}

export default function HormonalImbalancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-violet-600 font-semibold">
              ⚖️ Balance Your Hormones Naturally
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hormonal Imbalance Diet Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete hormone-balancing diet plan for women struggling with PCOS, thyroid disorders (hypothyroidism/hyperthyroidism), 
              menopause, estrogen dominance, insulin resistance, and hormone-related weight gain. Science-based nutrition strategies to 
              naturally regulate hormones, reduce symptoms, and achieve sustainable weight loss. Designed for women in USA, UK, Canada, 
              Australia dealing with stubborn weight despite healthy eating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View Hormone Diet Plan</Link>
              </Button>
              <Button size="lg" className="bg-violet-500 hover:bg-violet-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/hormonal">Hormone-Friendly Workouts</Link>
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
                <div className="text-3xl font-bold text-violet-600 mb-2">30-40%</div>
                <div className="text-gray-600">Women Affected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">PCOS #1</div>
                <div className="text-gray-600">Most Common Issue</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-fuchsia-600 mb-2">8-12 weeks</div>
                <div className="text-gray-600">See Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-2">Natural</div>
                <div className="text-gray-600">Food-Based Healing</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Hormonal Imbalance and Weight Gain</h2>
              <p className="text-lg text-gray-700 mb-6">
                Hormonal imbalance occurs when your body produces too much or too little of key hormones (insulin, estrogen, progesterone, 
                testosterone, thyroid hormones, cortisol, leptin) that regulate metabolism, appetite, fat storage, and body composition. 
                Approximately 30-40% of women experience hormonal imbalances at some point in their lives, with symptoms including unexplained 
                weight gain (especially belly fat), inability to lose weight despite diet and exercise, irregular or missing periods, severe 
                PMS, acne and skin issues, thinning hair or hair loss, constant fatigue and low energy, mood swings and depression, insomnia 
                and sleep disturbances, sugar cravings and increased appetite, and brain fog and difficulty concentrating. The most common 
                hormonal conditions affecting women are PCOS (Polycystic Ovary Syndrome - 8-13% of reproductive-age women), hypothyroidism 
                (underactive thyroid - 5-10% of women), estrogen dominance (excess estrogen relative to progesterone), menopause and 
                perimenopause (hormonal fluctuations ages 45-55), insulin resistance (prediabetes affecting 30-40% of overweight women), 
                and chronic stress elevating cortisol continuously.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The critical truth about hormonal weight gain is that <strong>traditional calorie restriction and excessive exercise often 
                WORSEN hormonal imbalances</strong> rather than fixing them. Extreme dieting and overtraining increase cortisol (stress hormone), 
                suppress thyroid function, disrupt menstrual cycles, and create further metabolic dysfunction. Instead, hormonal weight loss 
                requires a holistic approach addressing the ROOT CAUSE through strategic nutrition that balances blood sugar and insulin (low 
                glycemic, high fiber diet prevents insulin spikes), supports liver detoxification to eliminate excess hormones (cruciferous 
                vegetables, fiber, adequate water), reduces inflammation (omega-3 fats, antioxidants, eliminate processed foods), provides 
                hormone-building nutrients (healthy fats, cholesterol, vitamins/minerals), manages stress and cortisol (adequate sleep, stress 
                reduction, gentle exercise), and times carbohydrate intake strategically (carb cycling for PCOS/insulin resistance). This 
                comprehensive hormonal diet plan provides specific nutrition strategies for PCOS, thyroid disorders, menopause, and general 
                hormone balance, focusing on foods that naturally regulate hormones, reduce symptoms, and support sustainable weight loss 
                without extreme restriction.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-violet-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-violet-800">Benefits of Hormone-Balancing Diet</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Weight loss breakthrough:</strong> Lose stubborn weight when hormones balanced</li>
                    <li>• <strong>Regulated cycles:</strong> Regular, pain-free periods (PCOS improvement)</li>
                    <li>• <strong>Reduced symptoms:</strong> Less acne, hair loss, PMS, hot flashes</li>
                    <li>• <strong>Improved fertility:</strong> Balanced hormones increase pregnancy success</li>
                    <li>• <strong>Better energy:</strong> Stable energy without crashes</li>
                    <li>• <strong>Mood stability:</strong> Less anxiety, depression, mood swings</li>
                    <li>• <strong>Clearer skin:</strong> Hormonal acne dramatically improves</li>
                    <li>• <strong>Better sleep:</strong> Insomnia resolves, deeper sleep quality</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-purple-800">Hormonal Diet Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Blood sugar control:</strong> Low-glycemic carbs, never skip meals</li>
                    <li>• <strong>Anti-inflammatory focus:</strong> Omega-3, antioxidants, eliminate processed foods</li>
                    <li>• <strong>Liver detox support:</strong> Cruciferous veggies, fiber, lemon water</li>
                    <li>• <strong>Healthy fats priority:</strong> Essential for hormone production</li>
                    <li>• <strong>Adequate protein:</strong> 0.8-1g per pound body weight</li>
                    <li>• <strong>Fiber essential:</strong> 30-40g daily binds excess hormones</li>
                    <li>• <strong>Limit sugar/refined carbs:</strong> Spikes insulin, worsens PCOS</li>
                    <li>• <strong>Stress management:</strong> Cortisol control through lifestyle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Hormone Issues */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Hormonal Imbalances and Specific Diet Strategies</h2>
            
            <div className="space-y-6">
              <Card className="border-pink-200">
                <CardHeader className="bg-pink-50">
                  <CardTitle className="text-pink-800 flex items-center">
                    <Moon className="w-6 h-6 mr-3" />
                    PCOS (Polycystic Ovary Syndrome) - Most Common Hormonal Disorder
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">What is PCOS?</h4>
                      <p className="text-gray-700 mb-3">
                        PCOS affects 8-13% of reproductive-age women and is the #1 cause of female infertility. It's characterized by insulin 
                        resistance (70-80% of PCOS women), excess androgens (male hormones causing acne, facial hair, scalp hair loss), 
                        irregular or absent periods, ovarian cysts, and difficulty losing weight (especially belly fat). PCOS creates a vicious 
                        cycle: insulin resistance → high insulin → increased androgens → more insulin resistance.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">✅ PCOS Diet Strategy - Focus on Insulin Control:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Low-glycemic carbs only:</strong> Oats, quinoa, sweet potato, legumes (avoid white bread, rice, pasta)</li>
                        <li>• <strong>Moderate carb intake:</strong> 100-150g daily (not keto, not high-carb)</li>
                        <li>• <strong>High fiber (35-40g daily):</strong> Binds excess androgens, improves insulin sensitivity</li>
                        <li>• <strong>Anti-inflammatory fats:</strong> Omega-3 (fish, walnuts, flaxseeds) reduces inflammation</li>
                        <li>• <strong>Inositol supplement:</strong> 2,000-4,000mg daily (improves insulin sensitivity 50%)</li>
                        <li>• <strong>Spearmint tea:</strong> 2 cups daily reduces testosterone naturally</li>
                        <li>• <strong>Eliminate dairy (optional):</strong> Worsens acne and androgens in 60% of PCOS women</li>
                        <li>• <strong>Strength training:</strong> 3-4x weekly improves insulin sensitivity dramatically</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">❌ PCOS - Foods to AVOID:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• All refined carbs: White bread, pasta, rice (spike insulin)</li>
                        <li>• Sugar, sweets, desserts (worsen insulin resistance)</li>
                        <li>• Inflammatory oils: Vegetable oil, soybean oil, canola oil</li>
                        <li>• Dairy (especially milk, ice cream) - trial elimination for 4 weeks</li>
                        <li>• Soy products (may interfere with hormones)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800 flex items-center">
                    <Target className="w-6 h-6 mr-3" />
                    Hypothyroidism (Underactive Thyroid) - Slow Metabolism
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">What is Hypothyroidism?</h4>
                      <p className="text-gray-700 mb-3">
                        Underactive thyroid affects 5-10% of women, causing metabolism to slow 20-40%. Symptoms: unexplained weight gain, 
                        constant fatigue, always feeling cold, dry skin and hair, constipation, and brain fog. Thyroid hormones (T3, T4) 
                        directly regulate metabolic rate - low thyroid = slow metabolism = impossible weight loss.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">✅ Thyroid-Supporting Diet Strategy:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Adequate calories:</strong> 1,600-2,000+ (under-eating suppresses thyroid further!)</li>
                        <li>• <strong>Iodine-rich foods:</strong> Seaweed, iodized salt, seafood (thyroid needs iodine to function)</li>
                        <li>• <strong>Selenium (critical!):</strong> 2-3 Brazil nuts daily (improves T4→T3 conversion)</li>
                        <li>• <strong>Zinc:</strong> Oysters, pumpkin seeds, beef (supports thyroid function)</li>
                        <li>• <strong>Iron:</strong> Red meat, spinach, lentils (deficiency worsens hypothyroidism)</li>
                        <li>• <strong>Vitamin D:</strong> Sunshine + supplements 2,000 IU (70% of hypothyroid are deficient)</li>
                        <li>• <strong>Protein priority:</strong> Supports metabolism, prevents muscle loss</li>
                        <li>• <strong>Gluten-free trial:</strong> 30% of Hashimoto's (autoimmune thyroid) improve eliminating gluten</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">❌ Thyroid - Foods to LIMIT:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Raw cruciferous vegetables (broccoli, cauliflower, kale) - contain goitrogens that interfere with thyroid 
                        (cooking destroys goitrogens - cooked is fine!)</li>
                        <li>• Excessive soy (interferes with thyroid medication absorption)</li>
                        <li>• Highly processed foods (deplete nutrients needed for thyroid)</li>
                        <li>• Gluten (if Hashimoto's autoimmune thyroid) - 6-week elimination trial</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800 flex items-center">
                    <Sparkles className="w-6 h-6 mr-3" />
                    Menopause & Perimenopause - Estrogen Decline
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">What Happens During Menopause?</h4>
                      <p className="text-gray-700 mb-3">
                        Perimenopause (ages 45-55) and menopause (final period) cause dramatic estrogen decline. This shifts fat storage to 
                        belly (visceral fat), slows metabolism 5-10%, causes hot flashes, insomnia, mood swings, and makes weight loss extremely 
                        difficult. Average weight gain: 10-15 pounds during menopause transition.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">✅ Menopause Diet Strategy:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Phytoestrogens:</strong> Flaxseeds (2 tbsp daily), soy (edamame, tofu), lentils - plant estrogens 
                        reduce hot flashes</li>
                        <li>• <strong>High protein (1-1.2g per lb):</strong> Prevents muscle loss (critical as estrogen protects muscle)</li>
                        <li>• <strong>Calcium + Vitamin D:</strong> 1,200mg Ca + 2,000 IU D3 (bone loss accelerates without estrogen)</li>
                        <li>• <strong>Omega-3 fats:</strong> Reduces inflammation, joint pain, improves mood</li>
                        <li>• <strong>Fiber (30-40g):</strong> Binds excess estrogen metabolites, reduces hot flashes</li>
                        <li>• <strong>B-vitamins:</strong> Supports energy, mood, reduces hot flashes</li>
                        <li>• <strong>Limit alcohol/caffeine:</strong> Triggers hot flashes in 70% of women</li>
                        <li>• <strong>Strength training:</strong> Critical to prevent muscle loss and maintain metabolism</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-800 flex items-center">
                    <Activity className="w-6 h-6 mr-3" />
                    Estrogen Dominance - Too Much Estrogen
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">What is Estrogen Dominance?</h4>
                      <p className="text-gray-700 mb-3">
                        Excess estrogen relative to progesterone causes weight gain (especially hips, thighs, breasts), water retention, 
                        bloating, heavy/painful periods, PMS, fibrocystic breasts, and difficulty losing weight. Caused by poor liver 
                        detoxification, low fiber (doesn't eliminate excess estrogen), xenoestrogens (plastics, pesticides), and stress.
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">✅ Estrogen Detox Diet Strategy:</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• <strong>Cruciferous vegetables (cooked):</strong> Broccoli, cauliflower, Brussels sprouts, kale - DIM compound 
                        helps liver eliminate excess estrogen</li>
                        <li>• <strong>High fiber (35-40g):</strong> Binds excess estrogen in gut for elimination</li>
                        <li>• <strong>Flaxseeds (ground, 2 tbsp daily):</strong> Lignans block estrogen receptors</li>
                        <li>• <strong>Liver-supporting foods:</strong> Lemon water, beets, dandelion tea, turmeric</li>
                        <li>• <strong>Probiotics:</strong> Healthy gut bacteria metabolize estrogen properly</li>
                        <li>• <strong>Reduce xenoestrogens:</strong> Avoid plastic containers, conventional produce (pesticides), non-organic meat</li>
                        <li>• <strong>Limit alcohol:</strong> Impairs liver's ability to clear excess estrogen</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hormone-Balancing Foods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Top Hormone-Balancing Foods</h2>
            
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">🌿 Foods That Naturally Balance Hormones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Hormone-Building Healthy Fats:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Avocado (1/2 daily)</li>
                      <li>• Extra virgin olive oil (2 tbsp daily)</li>
                      <li>• Fatty fish: Salmon, mackerel, sardines (omega-3)</li>
                      <li>• Nuts: Walnuts, almonds (1 oz daily)</li>
                      <li>• Seeds: Flax, chia, pumpkin</li>
                      <li>• Egg yolks (cholesterol = hormone precursor)</li>
                      <li>• Coconut oil (supports thyroid)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Cruciferous Vegetables (Detox):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Broccoli (cooked)</li>
                      <li>• Cauliflower</li>
                      <li>• Brussels sprouts</li>
                      <li>• Kale, collards</li>
                      <li>• Cabbage</li>
                      <li>• Bok choy</li>
                      <li>• DIM compound helps liver clear excess estrogen</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Fiber-Rich Foods (Hormone Elimination):</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Flaxseeds (ground, 2 tbsp daily)</li>
                      <li>• Chia seeds (lignans block estrogen)</li>
                      <li>• Legumes: Lentils, chickpeas, beans</li>
                      <li>• Oats (steel-cut)</li>
                      <li>• Quinoa</li>
                      <li>• Vegetables (unlimited)</li>
                      <li>• Target: 35-40g fiber daily</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">Anti-Inflammatory Foods:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Berries (antioxidants)</li>
                      <li>• Turmeric + black pepper (curcumin)</li>
                      <li>• Ginger (anti-inflammatory)</li>
                      <li>• Green tea (EGCG)</li>
                      <li>• Dark leafy greens</li>
                      <li>• Reduces hormonal inflammation</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-800">Specific Mineral/Vitamin Foods:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Selenium:</strong> Brazil nuts (2-3 daily) - thyroid</li>
                      <li>• <strong>Zinc:</strong> Oysters, pumpkin seeds - hormones</li>
                      <li>• <strong>Magnesium:</strong> Dark chocolate, spinach - stress</li>
                      <li>• <strong>B-vitamins:</strong> Whole grains, meat - energy</li>
                      <li>• <strong>Vitamin D:</strong> Fatty fish, sunshine - all hormones</li>
                    </ul>
                  </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hormone-Balancing Meal Plan (1,800 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Anti-inflammatory, blood sugar stabilizing meal plan supporting hormone balance. Macros: 120g protein (27%), 180g carbs (40%), 
              65g fat (33%) - optimal for hormone health.
            </p>

            <Card className="border-violet-200">
              <CardHeader className="bg-violet-50">
                <CardTitle className="text-violet-800">Sample Day - Hormone-Friendly Eating</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Breakfast (8:00 AM) - 450 calories:</h4>
                    <p className="text-gray-700">Steel-cut oats (½ cup) + ground flaxseeds (2 tbsp) + walnuts (¼ cup) + berries (½ cup) + cinnamon + green tea</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 15g | Fiber: 12g | Omega-3, lignans for hormone balance | Low-glycemic</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM) - 250 calories:</h4>
                    <p className="text-gray-700">Greek yogurt (1 cup) + chia seeds (1 tbsp) + 2-3 Brazil nuts (selenium for thyroid)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 20g | Probiotics | Selenium supports thyroid conversion</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM) - 500 calories:</h4>
                    <p className="text-gray-700">Grilled salmon (150g) + quinoa (¾ cup) + roasted broccoli & cauliflower (2 cups) + avocado (¼) + olive oil + lemon water</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 40g | Omega-3 DHA | Cruciferous detox | Healthy fats | Anti-inflammatory</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM) - 200 calories:</h4>
                    <p className="text-gray-700">Apple slices + almond butter (2 tbsp) + spearmint tea (PCOS-friendly)</p>
                    <p className="text-sm text-gray-500 mt-1">Healthy fats | Fiber | Spearmint lowers testosterone naturally</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM) - 500 calories:</h4>
                    <p className="text-gray-700">Grilled chicken (150g) + roasted sweet potato (½ medium) + Brussels sprouts (2 cups) cooked in coconut oil + turmeric + side salad</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 45g | Fiber | Anti-inflammatory turmeric | Cruciferous vegetables | Low-glycemic carbs</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-violet-200">
                  <p className="text-sm font-semibold text-violet-700">Daily Total: 1,900 calories | Protein: 120g (25%) | Carbs: 185g (39%) | Fat: 76g (36%) | Fiber: 42g</p>
                  <p className="text-xs text-gray-500 mt-1">Hydration: 3L water + lemon | Herbal teas: Spearmint (PCOS), dandelion (liver detox)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Hormone-Balancing Plan?</h2>
            <p className="text-xl mb-8">
              Get customized diet and lifestyle strategies for your specific hormonal imbalance (PCOS, thyroid, menopause).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Hormone Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - $100</p>
                <Button size="lg" className="w-full bg-white text-violet-600" asChild>
                  <Link href="/contact">Book Now - $100</Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Moon className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Hormone-Friendly Workouts</h4>
                <p className="text-yellow-100 text-sm mb-4">Gentle, effective exercise</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/hormonal">View Workouts</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
