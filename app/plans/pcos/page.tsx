import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Apple, Salad, Coffee, TrendingDown, Target, Clock, Flame, Sparkles, Pill, BookOpen, Info } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PCOS Weight Loss Diet Plan 2025 | Best Diet for PCOS Management USA, UK, Australia",
  description: "Complete PCOS diet plan with 7-day meal plan, insulin-resistant foods, supplements, and proven weight loss strategies. Expert-designed for PCOS women in USA, UK, Canada, Australia.",
  keywords: "PCOS diet plan, PCOS weight loss, best diet for PCOS, insulin resistance diet, PCOS meal plan, polycystic ovary syndrome diet, PCOS foods to eat, PCOS diet chart, low glycemic diet PCOS, PCOS treatment diet, PCOS weight loss tips, how to lose weight with PCOS",
  openGraph: {
    title: "PCOS Weight Loss Diet Plan 2025 | Complete Guide",
    description: "Expert-designed PCOS diet plan with meal plans, supplements, and proven strategies for hormone balance and weight loss.",
    url: "https://fitplanindia.com/plans/pcos",
  },
}

export default function PCOSDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "PCOS Diet Plan", href: "/plans/pcos" },
  ]

  const tocItems = [
    { id: "understanding", label: "Understanding PCOS" },
    { id: "why-weight-gain", label: "Why Weight Gain" },
    { id: "foods", label: "Foods Guide" },
    { id: "meal-plan", label: "7-Day Meal Plan" },
    { id: "supplements", label: "Supplements" },
    { id: "tips", label: "Success Tips" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Why is PCOS weight loss so much harder than normal weight loss?",
      answer: "PCOS weight loss is 50-75% HARDER due to multiple metabolic obstacles: 1) INSULIN RESISTANCE (70-80% of PCOS women) means your body produces 2-3x normal insulin levels, which BLOCKS fat burning and promotes fat storage, 2) SLOWER METABOLISM - PCOS women burn 200-500 fewer calories daily at rest compared to women without PCOS, 3) HORMONAL CHAOS - elevated androgens promote belly fat storage and make it nearly impossible to build muscle, 4) CHRONIC INFLAMMATION - keeps body in fat-storage mode. This means standard 'eat less, move more' advice FAILS for PCOS. You need a PCOS-SPECIFIC approach targeting insulin resistance with low-GI diet, anti-inflammatory foods, and strategic exercise. Success requires patience - expect 1-2 lbs per week MAX, but results SUSTAIN long-term unlike crash diets that fail!"
    },
    {
      question: "Do I need to take metformin for PCOS or can diet alone work?",
      answer: "Diet CAN work alone for many women, BUT metformin accelerates results: DIET ALONE can reverse PCOS for 50-60% of women within 6-12 months through: strict low-GI diet, regular exercise, stress management, adequate sleep, targeted supplements. DIET + METFORMIN works for 80-90% of women, achieving results in 3-6 months: Metformin improves insulin sensitivity by 30-40%, reduces androgen levels, helps weight loss even when diet plateaus. REALITY: Try diet-first approach for 3 months if you: have mild-moderate PCOS, can commit to lifestyle changes 90-95%, have doctor support for monitoring. Consider metformin if you: have severe insulin resistance, tried diet for 3+ months without success, have prediabetes/diabetes, need faster results for fertility. ALWAYS work with doctor - metformin has side effects and isn't magic. Best results = metformin + perfect diet, not metformin instead of diet!"
    },
    {
      question: "Should I follow a keto diet, intermittent fasting, or low-GI diet for PCOS?",
      answer: "BEST For most: LOW-GLYCEMIC INDEX DIET (what this plan focuses on). Reasons: 1) SUSTAINABLE long-term (no extreme restriction), 2) Clinically proven for PCOS hormone balance, 3) Provides balanced nutrition without deficiencies, 4) Preserves metabolism (doesn't slow down). KETO for PCOS: Works short-term (3-6 months) for rapid weight loss BUT very restrictive, hard to sustain, can worsen hormones long-term, causes muscle loss, triggers binge eating. Use only under doctor supervision. INTERMITTENT FASTING for PCOS: Can work IF done correctly (16:8 or 14:10 window) BUT risky for some women - can worsen hormonal imbalance, increase cortisol, trigger disordered eating, cause energy crashes. Not recommended for women with history of eating disorders. VERDICT: Start with LOW-GI balanced approach. Consider IF or keto only after mastering basics for 6+ months and WITH medical supervision. Extreme approaches often backfire for PCOS!"
    },
    {
      question: "Can I drink alcohol and coffee with PCOS diet?",
      answer: "ALCOHOL: Best to AVOID or severely limit. Here's why: Disrupts hormone balance and liver's ability to process estrogen, worsens insulin resistance, adds empty calories that slow weight loss, disrupts sleep quality (critical for PCOS), increases inflammation. IF you drink: limit to 1-2 drinks per WEEK (not daily), choose dry wine or spirits (avoid sugary cocktails), never on empty stomach, stay well-hydrated. Many women find completely eliminating alcohol for 3 months dramatically improves PCOS symptoms. COFFEE/CAFFEINE: Moderate amounts (1-2 cups daily) are FINE for most women. Tips: Drink before 2 PM (doesn't disrupt sleep), avoid added sugar (use stevia or drink black), pair with food (not empty stomach), switch to decaf or herbal tea if anxiety/jitters. EXCESSIVE caffeine (3+ cups) can increase cortisol, worsen anxiety, disrupt hormones. Listen to YOUR body - if coffee seems to worsen symptoms, switch to green tea (lower caffeine, high antioxidants)."
    },
    {
      question: "How many calories should I eat per day for PCOS weight loss?",
      answer: "Calor ie needs are INDIVIDUAL, but general guidelines for PCOS weight loss: SEDENTARY (desk job, minimal exercise): 1,400-1,600 calories daily. LIGHTLY ACTIVE (light exercise 2-3x weekly): 1,600-1,800 calories daily. MODERATELY ACTIVE (exercise 4-5x weekly): 1,800-2,000 calories daily. VERY ACTIVE (intense exercise 6-7x weekly): 2,000-2,200 calories daily. CRITICAL: DO NOT go below 1,200-1,400 calories - this WORSENS PCOS by: Slowing metabolism further, causing muscle loss, worsening hormonal imbalance, triggering binge eating, increasing cortisol. Better approach: Focus on FOOD QUALITY over calorie counting! Low-GI foods, high protein (20-30g per meal), high fiber (30g+ daily), balanced meals every 3-4 hours. Your body will naturally find healthy weight when insulin is controlled. Track progress by measurements, energy, cycle regularity, skin - NOT just scale weight. Slow sustainable loss (1-2 lbs/week) beats rapid crash that fails!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 to-rose-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-pink-600 font-semibold">
              💕 Evidence-Based PCOS Management
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              PCOS Weight Loss Diet Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete evidence-based diet plan for Polycystic Ovary Syndrome (PCOS) with insulin-resistant friendly foods,
              hormone-balancing nutrition, supplements guide, and proven weight loss strategies. Designed for women in USA,
              UK, Canada, Australia, and worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View 7-Day Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/pcos">PCOS Workout Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section id="understanding" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">4-8 months</div>
                <div className="text-gray-600">Expected Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">Low GI</div>
                <div className="text-gray-600">Insulin Control</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">10-20 lbs</div>
                <div className="text-gray-600">Weight Loss Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">Moderate</div>
                <div className="text-gray-600">Difficulty Level</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding PCOS and Weight Loss: Complete Guide 2025</h2>
              <p className="text-lg text-gray-700 mb-6">
                Polycystic Ovary Syndrome (PCOS) affects 1 in 10 women worldwide (over 200 million women globally) and is one
                of the most common hormonal disorders affecting women of reproductive age in the USA, UK, Canada, Australia,
                and Europe. PCOS causes insulin resistance (body doesn't respond properly to insulin hormone), hormonal imbalance
                (excess androgens/male hormones like testosterone), irregular or absent menstrual periods, weight gain especially
                around the abdomen (belly fat), acne and oily skin, excess body and facial hair (hirsutism), thinning hair on
                the scalp, and difficulty losing weight despite diet and exercise efforts.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The cornerstone of successful PCOS weight loss treatment lies in managing insulin resistance through a carefully
                designed <strong>low glycemic index (GI) diet</strong>, reducing chronic inflammation with anti-inflammatory foods
                rich in omega-3 fatty acids and antioxidants, balancing hormones naturally with specific nutrients like inositol,
                vitamin D, and magnesium, maintaining steady blood sugar levels throughout the day with small frequent meals, and
                combining dietary changes with regular exercise and stress management. This comprehensive PCOS diet plan focuses on
                complex carbohydrates with GI below 55, lean protein sources at every meal, healthy fats with omega-3 focus, and
                high-fiber foods (25-35g daily) that prevent dangerous insulin spikes while providing all essential nutrients for
                optimal hormone balance and sustainable weight loss of 1-2 pounds per week.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-pink-800">PCOS Symptoms Improved by Proper Diet</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Significant weight loss:</strong> 10-20 pounds in 4-8 months, especially belly fat reduction</li>
                    <li>• <strong>Regular menstrual cycles:</strong> Periods return to normal within 3-6 months</li>
                    <li>• <strong>Clearer skin:</strong> Reduced acne, less oily skin within 2-3 months</li>
                    <li>• <strong>Improved fertility:</strong> Better ovulation rates and higher conception chances</li>
                    <li>• <strong>Better blood sugar control:</strong> Lower fasting insulin and glucose levels</li>
                    <li>• <strong>Reduced inflammation:</strong> Lower CRP and inflammatory markers in blood tests</li>
                    <li>• <strong>Higher energy levels:</strong> Reduced fatigue and brain fog significantly</li>
                    <li>• <strong>Less excess hair:</strong> Reduced body and facial hair growth over time</li>
                  </ul>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-rose-800">Evidence-Based PCOS Diet Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Low Glycemic Index:</strong> Choose foods with GI below 55 to prevent insulin spikes</li>
                    <li>• <strong>High Fiber Intake:</strong> Aim for 25-35g daily for blood sugar control and satiety</li>
                    <li>• <strong>Lean Protein Priority:</strong> 20-30g protein per meal for muscle preservation</li>
                    <li>• <strong>Healthy Fats Focus:</strong> Omega-3 fatty acids from fish, nuts, seeds daily</li>
                    <li>• <strong>Anti-inflammatory Foods:</strong> Berries, fatty fish, turmeric, green tea reduce inflammation</li>
                    <li>• <strong>Small Frequent Meals:</strong> Eat every 3-4 hours for stable blood sugar levels</li>
                    <li>• <strong>Limit Dairy Products:</strong> Can worsen hormonal imbalance in 40% of PCOS women</li>
                    <li>• <strong>Eliminate Refined Carbs:</strong> White rice, white bread, sugar completely avoided</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PCOS Causes Weight Gain - NEW SECTION */}
      <section id="why-weight-gain" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why PCOS Causes Weight Gain and Makes Losing Weight So Difficult</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                Women with PCOS face unique metabolic challenges that make weight loss 50-75% harder compared to women without
                the condition. Research shows that women with PCOS have a slower resting metabolic rate (burn 200-500 fewer
                calories per day at rest) and are more prone to insulin resistance. Understanding these scientific mechanisms
                is crucial for developing an effective weight loss strategy that actually works for PCOS.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-red-800 mb-3 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    1. Insulin Resistance: The Primary Culprit
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Approximately 70-80% of women with PCOS have insulin resistance, meaning their body's cells don't respond
                    properly to insulin hormone signals. This causes the pancreas to compensate by producing excessive amounts
                    of insulin (hyperinsulinemia), sometimes 2-3 times higher than normal levels. High insulin levels signal
                    the body to aggressively store fat, especially in the abdominal area (visceral fat), while simultaneously
                    blocking fat breakdown (lipolysis).
                  </p>
                  <p className="text-sm text-gray-600">
                    High insulin also increases hunger signals, triggers intense cravings for carbohydrates and sugar, and
                    prevents the body from accessing stored fat for energy. This creates a vicious cycle: insulin resistance
                    leads to weight gain, which worsens insulin resistance further, making weight loss increasingly difficult
                    without proper intervention through low-GI diet and lifestyle changes.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-orange-800 mb-3 flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    2. Hormonal Imbalance and Androgen Excess
                  </h3>
                  <p className="text-gray-700 mb-3">
                    PCOS causes elevated levels of androgens (male hormones including testosterone, androstenedione, and DHEA),
                    which promote fat storage in the abdominal region creating an "apple-shaped" body (android fat distribution)
                    rather than "pear-shaped" (gynoid). This type of belly fat is metabolically active and releases inflammatory
                    substances that worsen insulin resistance.
                  </p>
                  <p className="text-sm text-gray-600">
                    Additionally, low progesterone levels and estrogen dominance patterns contribute to water retention, bloating,
                    difficulty building lean muscle mass, and mood swings that can trigger emotional eating. This hormonal chaos
                    effectively slows metabolism by 200-400 calories per day compared to women without PCOS, making standard
                    calorie-deficit diets less effective.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-yellow-800 mb-3 flex items-center">
                    <Flame className="w-6 h-6 mr-2" />
                    3. Chronic Low-Grade Inflammation
                  </h3>
                  <p className="text-gray-700 mb-3">
                    PCOS is strongly associated with chronic systemic inflammation, evidenced by elevated inflammatory markers
                    like C-reactive protein (CRP), interleukin-6 (IL-6), and tumor necrosis factor-alpha (TNF-α) in blood tests.
                    This persistent inflammation interferes with insulin signaling pathways, increases cortisol (stress hormone)
                    production, and actively promotes fat storage while preventing efficient fat breakdown.
                  </p>
                  <p className="text-sm text-gray-600">
                    Anti-inflammatory diet rich in omega-3 fatty acids, antioxidants from colorful vegetables and berries, and
                    anti-inflammatory spices like turmeric and ginger is essential to break this inflammatory cycle and restore
                    normal metabolic function for effective weight loss.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-purple-800 mb-3 flex items-center">
                    <TrendingDown className="w-6 h-6 mr-2" />
                    4. Slower Metabolism and Thyroid Issues
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Women with PCOS typically have a resting metabolic rate (RMR) that is 200-500 calories lower than women of
                    the same age, weight, and activity level without PCOS. This is due to a combination of hormonal imbalances,
                    insulin resistance effects, and often co-existing thyroid dysfunction (approximately 40% of PCOS women also
                    have hypothyroidism or subclinical thyroid problems).
                  </p>
                  <p className="text-sm text-gray-600">
                    This metabolic slowdown means you must either eat significantly fewer calories or exercise substantially more
                    to lose the same amount of weight as someone without PCOS. This is why standard one-size-fits-all diet plans
                    often fail for PCOS women, and a specialized PCOS-specific approach addressing insulin resistance and inflammation
                    is absolutely essential for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foods to Eat & Avoid */}
      <section id="foods" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete PCOS Food Guide: Best Foods to Eat & Foods to Strictly Avoid</h2>

            <div className="space-y-8">
              {/* Foods to Eat */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Best Foods for PCOS Weight Loss (Low GI & Anti-Inflammatory)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Focus on whole, minimally processed foods with glycemic index below 55. These foods help control insulin
                    spikes, reduce inflammation, balance hormones naturally, and promote sustainable fat loss without triggering
                    blood sugar crashes or intense cravings.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Complex Carbohydrates (Low GI):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Whole wheat bread (GI: 50)</li>
                        <li>• Steel-cut oats, rolled oats (GI: 42-55)</li>
                        <li>• Brown rice, wild rice (GI: 48-50)</li>
                        <li>• Quinoa (GI: 53)</li>
                        <li>• Sweet potato (GI: 54)</li>
                        <li>• Barley (GI: 28)</li>
                        <li>• Legumes: lentils, chickpeas, beans</li>
                        <li>• Whole grain pasta (GI: 48)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Lean Protein Sources:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Chicken breast, turkey (30g protein/100g)</li>
                        <li>• Salmon, mackerel, sardines (omega-3 rich)</li>
                        <li>• Eggs (6g protein each, vitamin D)</li>
                        <li>• Greek yogurt (10g protein/100g)</li>
                        <li>• Cottage cheese (11g protein/100g)</li>
                        <li>• Lentils, chickpeas (9g protein/100g cooked)</li>
                        <li>• Tofu, tempeh (8-15g protein/100g)</li>
                        <li>• Lean beef (grass-fed preferred)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Healthy Fats (Omega-3 Focus):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Walnuts (2.5g omega-3 per oz)</li>
                        <li>• Almonds (vitamin E, magnesium)</li>
                        <li>• Ground flaxseeds (2.3g omega-3 per tbsp)</li>
                        <li>• Chia seeds (5g omega-3 per oz)</li>
                        <li>• Extra virgin olive oil (polyphenols)</li>
                        <li>• Fatty fish (salmon, mackerel)</li>
                        <li>• Avocado (healthy monounsaturated fats)</li>
                        <li>• Pumpkin seeds (zinc for hormones)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Vegetables (Unlimited Amounts!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Leafy greens: spinach, kale, arugula, Swiss chard</li>
                        <li>• Cruciferous: broccoli, cauliflower, Brussels sprouts (detox excess estrogen)</li>
                        <li>• Bell peppers (all colors, rich in vitamin C)</li>
                        <li>• Tomatoes (lycopene for inflammation)</li>
                        <li>• Cucumber, zucchini, celery (hydrating, low calorie)</li>
                        <li>• Carrots, beets (in moderation, higher GI)</li>
                        <li>• Green beans, asparagus, mushrooms</li>
                        <li>• Onions, garlic (prebiotics for gut health)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Low-Sugar Fruits (1-2 servings daily):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Berries: strawberries, blueberries, raspberries (GI: 25-40, antioxidants)</li>
                        <li>• Apples with skin (GI: 36, fiber rich)</li>
                        <li>• Pears (GI: 38, high fiber)</li>
                        <li>• Plums (GI: 39)</li>
                        <li>• Grapefruit (GI: 25)</li>
                        <li>• Oranges, kiwi (moderate portions)</li>
                        <li>• Avoid: bananas, grapes, mangoes (higher GI)</li>
                        <li>• Never juice fruits - eat whole with fiber</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Foods to Avoid */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">❌ Foods to STRICTLY AVOID with PCOS (High GI & Pro-Inflammatory)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    These foods cause rapid insulin spikes, worsen hormonal imbalance, increase systemic inflammation, and make
                    PCOS weight loss virtually impossible. Complete elimination is necessary for optimal results.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Refined Carbs & Added Sugars:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• White rice, jasmine rice (GI: 73-89)</li>
                        <li>• White bread, bagels, rolls (GI: 75+)</li>
                        <li>• Sugary beverages: soda, energy drinks, sweet tea</li>
                        <li>• Fruit juices (even 100% juice causes spikes)</li>
                        <li>• Cakes, pastries, donuts, muffins</li>
                        <li>• Cookies, crackers, pretzels</li>
                        <li>• Ice cream, frozen yogurt</li>
                        <li>• Candy, chocolate bars</li>
                        <li>• Breakfast cereals (most are high GI)</li>
                        <li>• White pasta, instant noodles</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Inflammatory & Processed Foods:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Fried foods: French fries, fried chicken, chips</li>
                        <li>• Processed meats: bacon, sausage, hot dogs, deli meats</li>
                        <li>• Trans fats: margarine, shortening, fried fast food</li>
                        <li>• Excessive dairy (can worsen acne and hormones)</li>
                        <li>• High-sodium foods: canned soups, frozen dinners</li>
                        <li>• Alcohol (disrupts hormone balance and liver function)</li>
                        <li>• Excessive caffeine (more than 200mg daily)</li>
                        <li>• Vegetable oils high in omega-6 (corn, soybean oil)</li>
                        <li>• Fast food and restaurant meals (hidden sugars/trans fats)</li>
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
      <section id="meal-plan" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete 7-Day PCOS Diet Meal Plan (1,500-1,600 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Low GI foods, high fiber (30g+ daily), balanced macros (40% carbs, 30% protein, 30% fat) specifically designed
              for insulin control and sustainable PCOS weight loss. Follow this plan for 4 weeks minimum to see significant results.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-pink-200">
                <CardHeader className="bg-pink-50">
                  <CardTitle className="text-pink-800">Day 1 - Complete Daily Meal Plan with Detailed Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Early Morning (7:00 AM - Upon Waking):</h4>
                      <p className="text-gray-700">Warm lemon water (1 glass) with 1 tsp fenugreek seeds (soaked overnight) + 5-6 soaked almonds</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~80 | Benefits: Fenugreek improves insulin sensitivity by 25-30%, almonds provide vitamin E for hormone production</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Breakfast (8:30 AM):</h4>
                      <p className="text-gray-700">Steel-cut oats (½ cup dry) cooked with water, topped with mixed berries (½ cup), ground flaxseeds (1 tbsp), cinnamon + 2 boiled eggs (omega-3 enriched) + green tea (unsweetened)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~380 | Carbs: 42g | Protein: 20g | Fat: 14g | Fiber: 9g | GI: 42</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (11:00 AM):</h4>
                      <p className="text-gray-700">1 small apple with skin (80g) + 6 walnut halves + green tea</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~160 | Carbs: 22g | Protein: 3g | Fat: 9g | Omega-3 from walnuts reduces inflammation</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Lunch (1:30 PM - Main Meal):</h4>
                      <p className="text-gray-700">Grilled chicken breast (4 oz/113g) + quinoa (¾ cup cooked) + large mixed salad (spinach, cucumber, tomatoes, bell peppers) with olive oil dressing (1 tbsp) + steamed broccoli (1 cup)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~480 | Carbs: 48g | Protein: 36g | Fat: 16g | Fiber: 11g | GI: 50</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h4>
                      <p className="text-gray-700">Greek yogurt (plain, low-fat, ¾ cup) + chia seeds (1 tbsp) + handful of blueberries</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~150 | Carbs: 18g | Protein: 15g | Fat: 4g | Probiotics for gut health</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM - Light & Early):</h4>
                      <p className="text-gray-700">Baked salmon (4 oz/113g) + roasted sweet potato (½ medium) + sautéed spinach and mushrooms (2 cups) with garlic + side salad</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~420 | Carbs: 35g | Protein: 32g | Fat: 18g | Fiber: 8g | Omega-3 from salmon</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-pink-200">
                    <p className="text-sm font-semibold text-pink-700">Day 1 Total Nutrition Summary: 1,670 calories | Carbs: 165g (39%) | Protein: 106g (25%) | Fat: 61g (33%) | Fiber: 28g | Average GI: 46 (Low)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Day 2-7 Summary */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Days 2-7: Meal Rotation Ideas & Recipe Variations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Breakfast Options (350-400 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Vegetable omelet (3 eggs) with spinach, mushrooms + whole grain toast (1 slice)</li>
                        <li>• Greek yogurt parfait with berries, nuts, chia seeds</li>
                        <li>• Whole wheat toast (2 slices) + avocado mash + poached eggs (2)</li>
                        <li>• Protein smoothie: berries, spinach, protein powder, almond milk, flaxseeds</li>
                        <li>• Overnight oats with chia, berries, walnuts, cinnamon</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Lunch Ideas (450-500 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Grilled chicken salad: mixed greens, veggies, olive oil, quinoa (½ cup)</li>
                        <li>• Turkey and vegetable stir-fry with brown rice (¾ cup)</li>
                        <li>• Lentil soup (2 cups) + side salad + whole grain crackers</li>
                        <li>• Tuna salad on mixed greens + sweet potato (½ medium)</li>
                        <li>• Chickpea and vegetable curry with quinoa</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Dinner Options (400-450 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Baked cod + roasted Brussels sprouts + wild rice (½ cup)</li>
                        <li>• Turkey meatballs + zucchini noodles + marinara sauce</li>
                        <li>• Grilled chicken + cauliflower rice + sautéed vegetables</li>
                        <li>• Tofu stir-fry with broccoli, peppers + brown rice</li>
                        <li>• Lean beef (4 oz) + roasted vegetables + small baked potato</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Healthy Snacks Between Meals (100-150 cal each):</h4>
                    <ul className="text-sm text-gray-700 space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• Mixed nuts: 6 almonds + 4 walnut halves</li>
                      <li>• Celery sticks with 2 tbsp almond butter</li>
                      <li>• Hard-boiled eggs (2) with cherry tomatoes</li>
                      <li>• Apple slices with 1 tbsp peanut butter</li>
                      <li>• Cucumber slices with 3 tbsp hummus</li>
                      <li>• String cheese + handful of berries</li>
                      <li>• Protein shake (low-sugar)</li>
                      <li>• Edamame (1 cup)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Supplements Section - NEW */}
      <section id="supplements" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center">
              <Pill className="w-8 h-8 mr-3 text-purple-600" />
              Essential Supplements for PCOS Weight Loss Success
            </h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                While diet is the foundation, research-backed supplements can significantly accelerate PCOS symptom improvement,
                enhance insulin sensitivity, and support faster weight loss. Always consult your healthcare provider before
                starting any supplement regimen, especially if taking medications.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-800">Core Supplements (Highly Recommended):</h3>
                  <ul className="text-sm text-gray-700 space-y-3">
                    <li>• <strong>Inositol (Myo + D-chiro 40:1 ratio):</strong> 2,000-4,000mg daily. Clinical studies show 70% improvement
                      in insulin sensitivity, regular periods return in 3-6 months. Take with meals for best absorption.</li>
                    <li>• <strong>Omega-3 Fish Oil (EPA+DHA):</strong> 1,000-2,000mg daily of combined EPA and DHA. Reduces inflammation
                      markers by 30-40%, improves hormone balance. Choose third-party tested brands to avoid mercury.</li>
                    <li>• <strong>Vitamin D3:</strong> 2,000-4,000 IU daily (or as prescribed after blood test). 67-85% of PCOS women are
                      deficient. Critical for insulin function, fertility, mood, and immune system.</li>
                    <li>• <strong>Magnesium Glycinate:</strong> 300-500mg daily. Improves insulin sensitivity, reduces sugar cravings,
                      better sleep quality, and muscle relaxation. Glycinate form has best absorption.</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-purple-800">Supporting Supplements (Optional but Beneficial):</h3>
                  <ul className="text-sm text-gray-700 space-y-3">
                    <li>• <strong>Berberine:</strong> 500mg 3 times daily with meals. Natural compound that works similarly to metformin
                      for improving insulin sensitivity and blood sugar control. Effective in 70% of users.</li>
                    <li>• <strong>NAC (N-Acetyl Cysteine):</strong> 600mg twice daily. Powerful antioxidant that improves insulin resistance,
                      enhances fertility, reduces acne, and supports liver detoxification.</li>
                    <li>• <strong>Chromium Picolinate:</strong> 200-400mcg daily. Helps regulate blood sugar, reduces carbohydrate cravings,
                      and improves insulin receptor sensitivity at cellular level.</li>
                    <li>• <strong>Spearmint Tea:</strong> 2 cups daily. Natural anti-androgen that reduces excess testosterone levels,
                      helping with excess hair growth and acne over 3-6 months.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section id="tips" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">PCOS Diet Success Tips & Lifestyle Changes for Maximum Results</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-green-700 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Essential Success Guidelines
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat every 3-4 hours (5-6 small meals):</strong> Prevents blood sugar crashes, maintains stable insulin
                      levels, reduces cravings, and keeps metabolism active throughout the day.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Drink 8-10 glasses water daily (64-80 oz):</strong> Flushes toxins, reduces water retention and bloating,
                      aids digestion and weight loss, improves skin clarity.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Include 20-30g protein per meal:</strong> Stabilizes blood sugar, controls insulin response, reduces
                      hunger for 3-4 hours, preserves lean muscle mass during weight loss.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercise 5 days per week (minimum):</strong> 30 minutes moderate cardio (walking, cycling, swimming) plus
                      2 days strength training improves insulin sensitivity by 50% and accelerates fat loss.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Sleep 7-9 hours nightly:</strong> Poor sleep worsens insulin resistance by 30%, increases cortisol and
                      cravings, disrupts hunger hormones (ghrelin and leptin), slows weight loss significantly.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Manage stress daily (critical):</strong> High cortisol from chronic stress worsens all PCOS symptoms.
                      Practice yoga, meditation, deep breathing, or journaling for 10-15 minutes daily.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-red-700 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2" />
                  Common PCOS Diet Mistakes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping meals or extreme fasting:</strong> Worsens insulin resistance dramatically, slows metabolism,
                      triggers binge eating cycles, increases cortisol levels, and causes hormonal chaos.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eating only fruits for meals:</strong> Despite being "healthy," high natural sugar content causes
                      insulin spikes. Always pair fruit with protein or healthy fat to slow absorption.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much dairy consumption:</strong> Can worsen hormonal imbalance and acne in 40% of PCOS women due to
                      IGF-1 content. Limit to 1 serving daily or try plant-based alternatives.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Excessive cardio without strength training:</strong> Too much cardio raises cortisol (stress hormone)
                      which worsens PCOS. Balance with 2-3 days of resistance/strength training weekly.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring stress and sleep:</strong> High stress and poor sleep sabotage even perfect diet efforts.
                      Mental health and lifestyle factors are equally important as food choices for PCOS success.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Expecting immediate results:</strong> PCOS weight loss takes time - healthy rate is 1-2 pounds per week.
                      Focus on hormone balance and symptom improvement, not just scale weight. Be patient and consistent.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expected Results Timeline - NEW */}
            <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-7 h-7 text-blue-600 mr-3" />
                Expected Results Timeline: What to Expect and When
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                    Week 1-2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Initial Adaptation & Water Weight Loss</h4>
                    <p className="text-sm text-gray-600">
                      Expect 3-5 pounds water weight loss, significantly reduced bloating and puffiness, more stable energy levels
                      throughout the day, fewer sugar/carb cravings, and body beginning to adapt to low-GI foods and stable blood sugar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                    Month 1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Hormone Balance Begins & Visible Changes</h4>
                    <p className="text-sm text-gray-600">
                      Total 6-10 pounds weight loss (water + fat), noticeably improved skin with less acne and oiliness, periods may
                      start becoming more regular (for some women), blood sugar control significantly better (if testing), clothes
                      fitting looser around waist and abdomen, increased energy and reduced afternoon fatigue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                    Month 2-3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Significant Symptom Improvements</h4>
                    <p className="text-sm text-gray-600">
                      12-18 pounds total weight loss, regular menstrual cycles established for most women, significant reduction in
                      excess body/facial hair growth, clearer skin with minimal acne, improved fertility markers (if testing), blood
                      tests show improved insulin sensitivity and reduced inflammation markers (CRP, fasting insulin).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-100 text-pink-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                    Month 4-8
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Goal Achievement & Hormone Normalization</h4>
                    <p className="text-sm text-gray-600">
                      20-35 pounds total weight loss achieved, normalized hormone levels confirmed by blood tests, regular ovulation
                      occurring (if trying to conceive), clear glowing skin, stable mood and energy all day, significantly reduced
                      or eliminated PCOS symptoms, healthy lifestyle habits fully established and sustainable long-term.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Need a Personalized PCOS Diet Plan?
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Every woman's PCOS is unique with different symptoms, severity, and challenges. Get a fully customized diet plan
              tailored to your specific symptoms, lifestyle, food preferences, medical history, current medications, and weight
              loss goals from our certified PCOS nutritionists with 10+ years of specialized experience treating thousands of PCOS women successfully.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">PCOS Specialist Consultation</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Get personalized PCOS diet plan + supplement recommendations + lifestyle guidance + ongoing support - <PriceDisplay amountIn={500} amountUs={50} />
                </p>
                <Button size="lg" className="w-full bg-white text-pink-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/contact">
                    Book PCOS Consultation - <PriceDisplay amountIn={500} amountUs={50} />
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">PCOS Workout Program</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Combine diet with PCOS-specific exercise program for maximum hormone balance and faster results. Completely free!
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/workouts/pcos">
                    View Free PCOS Workouts
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              💕 Join 50,000+ women worldwide successfully managing PCOS and achieving their weight loss goals with FitPlan India's expert guidance
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
            <RelatedContent />
          </div>
        </div>
      </section>
    </div >
  )
}
