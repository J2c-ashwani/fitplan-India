import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, TrendingDown, Target, Clock, Droplets, Activity, Info } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diabetes Diet Plan 2025 | Best Diet for Type 2 Diabetes Weight Loss USA, UK, Australia",
  description: "Complete diabetes diet plan with low-GI foods, blood sugar control, weight loss strategies, and proven diabetic meal plans. Expert-designed for USA, UK, Canada, Australia.",
  keywords: "diabetes diet plan, diabetic diet, type 2 diabetes diet, diabetes weight loss, diabetic meal plan, low glycemic diet, blood sugar control diet, best foods for diabetes, diabetes food list",
  openGraph: {
    title: "Diabetes Diet Plan 2025 | Complete Guide for Blood Sugar Control",
    description: "Expert-designed diabetes diet with proven strategies for blood sugar control, weight loss, and diabetes management.",
    url: "https://fitplanindia.com/plans/diabetes",
  },
}

export default function DiabetesDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Diabetes Diet Plan", href: "/plans/diabetes" },
  ]

  const tocItems = [
    { id: "understanding", label: "Understanding Diabetes" },
    { id: "why-weight-gain", label: "Why Weight Gain" },
    { id: "foods", label: "Foods Guide" },
    { id: "meal-plan", label: "7-Day Meal Plan" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Can Type 2 diabetes be reversed permanently with diet alone?",
      answer: "YES, for many people - especially if caught early! Type 2 diabetes REMISSION (A1C below 6.5% without medications for 3+ months) is achievable for 40-60% of people through: Sustained weight loss (10-15% of body weight or more), strict low-GI diet eliminating all refined carbs and added sugars, regular exercise (30+ min daily), lifestyle changes maintained long-term (not temporary diet). REALITY: Prediabetes and newly diagnosed (less than 5 years) have highest reversal success rate (60-70%). Long-standing diabetes (10+ years) is HARDER but still possible with aggressive intervention. CRITICAL: Reversal requires PERMANENT lifestyle change. Going back to old habits WILL cause diabetes to return. Work with doctor to reduce medications safely as blood sugar improves. Reversal is possible but requires lifelong commitment!"
    },
    {
      question: "How much can I lower my A1C with diet changes in 3 months?",
      answer: "Realistic A1C reduction with STRICT diet adherence: EXCELLENT compliance (95%+): Expect A1C reduction of 1-2% in 3 months. Example: 8.5% → 6.5-7.5%. GOOD compliance (80-90%): Expect 0.5-1% reduction. Example: 8.0% → 7.0-7.5%. Fair compliance (60-80%): Expect 0.3-0.5% reduction. FACTORS affecting results: Starting A1C (higher = more room to improve), weight loss amount (more loss = bigger drop), exercise consistency (critical for insulin sensitivity), medication adherence, stress management. TIMELINE: First improvements visible in 2-4 weeks (daily blood sugars), but A1C reflects 3-month average so full results take 90 days. Keep strict diet for at least 6 months before deciding if it's working. Many people see 2-3% total reduction in 6-12 months with perfect adherence!"
    },
    {
      question: "Should I test blood sugar after every meal or just fasting?",
      answer: "For OPTIMAL diabetes control, test BOTH fasting AND post-meal: MINIMUM testing schedule: Fasting (morning upon waking) - DAILY, 2 hours after largest meal (usually lunch or dinner) - DAILY, Before bed - 2-3x weekly. IDEAL testing schedule (tight control): Fasting every morning, 1-2 hours after EACH main meal (breakfast, lunch, dinner), Before bed daily, Occasionally 3 AM (check for nighttime lows). WHY post-meal testing matters: Shows which foods spike YOUR blood sugar (everyone different), helps adjust portions and food combinations, reveals hidden problems fasting misses, most important for preventing complications. TARGETS: Fasting 80-130 mg/dL, 1-2 hour post-meal below 180 mg/dL (ideally below 140). Test more frequently when starting new diet, changing medications, or blood sugars unstable. Reduce frequency once well-controlled for 3+ months."
    },
    {
      question: "Can I ever eat carbs again or must I avoid them completely forever?",
      answer: "You CAN eat carbs - just the RIGHT carbs in RIGHT portions! ELIMINATE forever: Refined carbs (white bread, white rice, sugar, soda, candy, pastries), added sugars in any form, fruit juices, high-GI foods (GI above 70). EAT strategically: LOW-GI complex carbs (GI below 55): Steel-cut oats, quinoa, brown rice, sweet potato, whole wheat bread, legumes, barley. PORTION CONTROL is key: ¼ of your plate = carbs (½ cup cooked grain OR 1 slice bread OR ½ medium sweet potato), always pair with protein + healthy fat, never eat carbs alone (causes spike). CARB amount per meal: 30-45g for women, 45-60g for men (adjust based on blood sugar response). REALITY: You're not eliminating carbs, you're choosing SMART carbs and controlling portions. Focus on non-starchy vegetables (unlimited), then add measured low-GI carbs. This is sustainable for life!"
    },
    {
      question: "What's the single most important thing I can do for my diabetes TODAY?",
      answer: "ELIMINATE ALL ADDED SUGARS AND REFINED CARBS - starting THIS meal! This ONE change has biggest immediate impact: Stops dangerous blood sugar spikes within hours, reduces insulin requirement by 30-50% within days, often lowers fasting blood sugar 20-40 mg/dL within 1 week, starts weight loss immediately. SPECIFICALLY avoid: All soda and sweet beverages (biggest culprit), white bread/rice/pasta, candy/cookies/cakes, fruit juice, added sugar in coffee/tea, sweetened yogurt/cereals. REPLACE with: Water, unsweetened tea/coffee, whole grains (brown rice, whole wheat), whole fruits (not juice), plain Greek yogurt. COMBINED with: Test blood sugar 2 hours after meals to see impact, walk 15-20 minutes after dinner (lowers post-meal spike), drink 8+ glasses water daily. This simple change can reduce A1C by 0.5-1% alone! Don't try to be perfect with everything - start here, master this, then add more improvements. Small changes sustained = big results!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-rose-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-red-600 font-semibold">
              🩸 Evidence-Based Diabetes Management
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Diabetes Diet Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete evidence-based diet plan for Type 2 diabetes with low-GI foods, blood sugar control strategies,
              weight loss guidance, and proven meal plans. Designed for diabetic patients in USA, UK, Canada, Australia
              to manage A1C, lose weight, and reverse prediabetes naturally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View 7-Day Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/diabetes">Diabetes Exercise Guide</Link>
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
                <div className="text-3xl font-bold text-red-600 mb-2">3-6 months</div>
                <div className="text-gray-600">Expected Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600 mb-2">1-2 lbs/week</div>
                <div className="text-gray-600">Weight Loss Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">Low GI</div>
                <div className="text-gray-600">Blood Sugar Control</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">A1C -1 to -2%</div>
                <div className="text-gray-600">Expected Reduction</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Type 2 Diabetes and Diet: Complete Guide 2025</h2>
              <p className="text-lg text-gray-700 mb-6">
                Type 2 diabetes affects over 37 million Americans (11% of US population) and over 500 million people worldwide,
                with numbers increasing dramatically in USA, UK, Canada, Australia, and India. It occurs when your body becomes
                resistant to insulin (insulin resistance) and/or your pancreas doesn't produce enough insulin to maintain normal
                blood glucose levels. This leads to chronically elevated blood sugar (hyperglycemia) causing damage to blood vessels,
                nerves, kidneys, eyes, and heart over time. Common symptoms include increased thirst and urination, extreme hunger
                despite eating, unexplained weight loss or weight gain (especially belly fat), fatigue and weakness, blurred vision,
                slow-healing wounds and infections, numbness or tingling in hands/feet, and darkened skin patches (acanthosis nigricans).
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The revolutionary truth about Type 2 diabetes is that it's largely REVERSIBLE through diet and lifestyle changes,
                especially if caught early (prediabetes or newly diagnosed). Research shows that losing just 5-10% of body weight
                can significantly improve blood sugar control, reduce A1C by 1-2%, and in many cases allow reduction or elimination
                of diabetes medications under doctor supervision. The foundation of successful diabetes management and reversal lies
                in <strong>eating low glycemic index (GI) foods</strong> that don't spike blood sugar (choose foods with GI below 55),
                prioritizing fiber intake (25-35g daily) which slows sugar absorption and improves insulin sensitivity, eating adequate
                protein (0.8-1g per pound body weight) to control appetite and preserve muscle during weight loss, timing carbohydrates
                properly (smaller portions, paired with protein/fat), eliminating added sugars and refined carbohydrates completely,
                losing weight gradually (1-2 pounds weekly) through sustainable calorie deficit, and combining diet with regular exercise
                (critical for insulin sensitivity). This comprehensive diabetes diet plan focuses on whole foods, complex carbs with
                GI below 55, lean proteins, healthy fats, and balanced macros (40% carbs, 30% protein, 30% fat) proven to control blood
                sugar, promote fat loss, and potentially reverse Type 2 diabetes naturally.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-red-800">Benefits of Diabetes Diet</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Better blood sugar control:</strong> Fasting glucose 80-130 mg/dL, post-meal under 180 mg/dL</li>
                    <li>• <strong>Lower A1C:</strong> Reduce by 1-2% (e.g., 8.5% to 6.5-7.5%) in 3-6 months</li>
                    <li>• <strong>Weight loss:</strong> 10-20 pounds in 3-6 months through calorie control</li>
                    <li>• <strong>Reduced medication:</strong> Many patients reduce or eliminate meds (under doctor guidance)</li>
                    <li>• <strong>More energy:</strong> Stable blood sugar = consistent energy all day</li>
                    <li>• <strong>Lower heart disease risk:</strong> Improved cholesterol, blood pressure</li>
                    <li>• <strong>Better kidney function:</strong> Reduced protein in urine</li>
                    <li>• <strong>Possible remission:</strong> Prediabetes and early Type 2 can be reversed</li>
                  </ul>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-rose-800">Diabetes Diet Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Low Glycemic Index:</strong> Choose foods with GI below 55 consistently</li>
                    <li>• <strong>High Fiber Priority:</strong> 25-35g daily slows sugar absorption dramatically</li>
                    <li>• <strong>Portion Control:</strong> Use plate method (½ veggies, ¼ protein, ¼ carbs)</li>
                    <li>• <strong>Protein with every meal:</strong> Slows digestion, controls blood sugar spikes</li>
                    <li>• <strong>Healthy fats:</strong> Improves satiety, protects heart health</li>
                    <li>• <strong>Consistent meal timing:</strong> Eat at same times daily for stable blood sugar</li>
                    <li>• <strong>Eliminate added sugars:</strong> No soda, candy, desserts, sugary drinks</li>
                    <li>• <strong>Limit refined carbs:</strong> No white bread, white rice, regular pasta</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Diabetes Causes Weight Gain */}
      <section id="why-weight-gain" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Type 2 Diabetes Causes Weight Gain and Makes Losing Weight Difficult</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                Type 2 diabetes and obesity are deeply interconnected in a vicious cycle. Understanding why diabetes makes weight loss
                challenging is essential for developing effective strategies that actually work despite insulin resistance and metabolic dysfunction.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-red-800 mb-3 flex items-center">
                    <Droplets className="w-6 h-6 mr-2" />
                    1. Insulin Resistance: The Root Cause of Diabetic Weight Gain
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Insulin resistance means your cells don't respond properly to insulin signals. To compensate, your pancreas produces
                    EXCESSIVE amounts of insulin (hyperinsulinemia), sometimes 2-3x normal levels. High insulin is a powerful fat-storage
                    hormone that signals your body to aggressively store calories as fat (especially belly fat/visceral fat) while
                    simultaneously blocking fat breakdown (lipolysis). This makes weight loss extremely difficult despite eating less.
                  </p>
                  <p className="text-sm text-gray-600">
                    High insulin levels also increase hunger signals, trigger intense carbohydrate and sugar cravings, cause hypoglycemia
                    (low blood sugar crashes) leading to overeating, and prevent your body from accessing stored fat for energy. Breaking
                    this cycle requires a low-GI diet that doesn't spike blood sugar/insulin, allowing insulin levels to drop naturally
                    and fat-burning to resume.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-orange-800 mb-3 flex items-center">
                    <TrendingDown className="w-6 h-6 mr-2" />
                    2. Blood Sugar Roller Coaster Causing Constant Hunger
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When you eat high-GI foods (white bread, sugary foods, refined carbs), blood sugar spikes rapidly. Your pancreas
                    releases massive insulin surge to bring sugar down. But this often overshoots, causing blood sugar to crash below
                    normal 2-3 hours later (reactive hypoglycemia). Low blood sugar triggers extreme hunger, shakiness, irritability,
                    and intense cravings for more carbs/sugar, perpetuating the cycle.
                  </p>
                  <p className="text-sm text-gray-600">
                    This blood sugar roller coaster makes consistent calorie control virtually impossible. You feel constantly hungry
                    despite eating adequate calories. The solution is eating ONLY low-GI foods (GI below 55) that cause gentle, gradual
                    blood sugar rises and falls, maintaining stable energy and hunger levels for 3-4 hours between meals without crashes.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-yellow-800 mb-3 flex items-center">
                    <Activity className="w-6 h-6 mr-2" />
                    3. Metabolic Dysfunction and Slower Fat Burning
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Type 2 diabetes causes metabolic dysfunction where your body preferentially burns carbohydrates for energy instead
                    of fat, even when plenty of body fat is available. High insulin levels keep you in "sugar-burning mode" 24/7,
                    preventing the metabolic switch to "fat-burning mode" that's necessary for weight loss. Your metabolism also tends
                    to be 10-20% slower than non-diabetics of the same weight.
                  </p>
                  <p className="text-sm text-gray-600">
                    Additionally, diabetes often damages mitochondria (cellular powerhouses), reducing your cells' ability to efficiently
                    burn calories for energy. This manifests as fatigue, reduced exercise capacity, and lower non-exercise activity
                    (NEAT - fidgeting, movement throughout day), further reducing daily calorie burn by 200-400 calories.
                  </p>
                </div>

                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-pink-800 mb-3 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    4. Certain Diabetes Medications Cause Weight Gain
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Several common diabetes medications actually CAUSE weight gain as a side effect, making weight loss even more
                    challenging. Insulin injections, sulfonylureas (glipizide, glyburide), and TZDs (pioglitazone) all promote weight
                    gain of 5-15 pounds by increasing insulin levels, promoting fat storage, and increasing appetite. This creates a
                    frustrating situation where medication helps blood sugar but worsens weight.
                  </p>
                  <p className="text-sm text-gray-600">
                    If weight gain from medications is significant, discuss alternatives with your doctor. Newer medications like
                    metformin (neutral or slight weight loss), SGLT2 inhibitors (causes weight loss), and GLP-1 agonists like Ozempic/Wegovy
                    (significant weight loss) may be better options. Never change medications without doctor guidance.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Diabetes Food Guide: Best Foods & Foods to Strictly Avoid</h2>

            <div className="space-y-8">
              {/* Foods to Eat */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Best Foods for Diabetes (Low-GI & Blood Sugar Friendly)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Focus on low-GI whole foods (GI below 55) that cause minimal blood sugar spikes. Prioritize fiber, protein, and
                    healthy fats at every meal to slow digestion and improve insulin sensitivity.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Non-Starchy Vegetables (Unlimited!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Leafy greens: spinach, kale, lettuce, arugula (GI: 15)</li>
                        <li>• Broccoli, cauliflower, Brussels sprouts (GI: 10-15)</li>
                        <li>• Bell peppers, tomatoes, cucumbers (GI: 15-25)</li>
                        <li>• Zucchini, eggplant, green beans (GI: 15)</li>
                        <li>• Mushrooms, asparagus, celery (GI: 10-15)</li>
                        <li>• Cabbage, bok choy, onions, garlic (GI: 10-15)</li>
                        <li>• Fill HALF your plate with these!</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Lean Protein (Every Meal!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Skinless chicken breast, turkey (0 GI)</li>
                        <li>• Fish: salmon, tuna, cod, sardines (0 GI, omega-3)</li>
                        <li>• Eggs (0 GI, 6g protein each)</li>
                        <li>• Greek yogurt plain (GI: 11, probiotics)</li>
                        <li>• Cottage cheese low-fat (GI: 10)</li>
                        <li>• Lean beef, pork tenderloin (0 GI, moderate)</li>
                        <li>• Tofu, tempeh (GI: 15, plant protein)</li>
                        <li>• Legumes: lentils (GI: 32), chickpeas (GI: 28)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Healthy Fats (Moderate Portions):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Extra virgin olive oil (0 GI, heart healthy)</li>
                        <li>• Avocado (GI: 15, fiber + healthy fats)</li>
                        <li>• Nuts: almonds, walnuts, pecans (GI: 15-25, 1 oz serving)</li>
                        <li>• Seeds: chia, flax, pumpkin (GI: 1-35, high fiber)</li>
                        <li>• Fatty fish: salmon, mackerel (omega-3)</li>
                        <li>• Natural nut butters (2 tbsp max, no added sugar)</li>
                        <li>• Olives, coconut (unsweetened)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Low-GI Carbs (¼ of Plate, Measured!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Steel-cut oats (GI: 42):</strong> ½ cup dry, cook with water</li>
                        <li>• <strong>Quinoa (GI: 53):</strong> ½ cup cooked portion</li>
                        <li>• <strong>Brown rice (GI: 50):</strong> ½ cup cooked max</li>
                        <li>• <strong>Sweet potato (GI: 54):</strong> ½ medium with skin</li>
                        <li>• <strong>Whole wheat bread (GI: 50):</strong> 1 slice max</li>
                        <li>• <strong>Whole wheat pasta (GI: 48):</strong> ½ cup cooked</li>
                        <li>• <strong>Barley (GI: 28):</strong> Excellent low-GI choice</li>
                        <li>• <strong>Legumes:</strong> Lentils, chickpeas, black beans</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Low-Sugar Fruits (1-2 servings):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Berries (GI: 25-40):</strong> Best choice! ½-1 cup</li>
                        <li>• <strong>Apple with skin (GI: 36):</strong> 1 small</li>
                        <li>• <strong>Pear (GI: 38):</strong> 1 small with skin</li>
                        <li>• <strong>Orange (GI: 43):</strong> 1 medium (eat whole, don't juice)</li>
                        <li>• <strong>Grapefruit (GI: 25):</strong> ½ large</li>
                        <li>• <strong>Peach, plum (GI: 35-40):</strong> 1 medium</li>
                        <li>• Pair with protein/fat to slow absorption</li>
                        <li>• AVOID: Bananas, grapes, mangoes (high GI)</li>
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
                    <CardTitle className="text-red-700">❌ Foods to STRICTLY AVOID with Diabetes (High-GI & Blood Sugar Spikes)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    These foods cause dangerous blood sugar spikes, worsen insulin resistance, and make diabetes control impossible.
                    Complete elimination is necessary for successful blood sugar management and weight loss.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Sugary Foods & Drinks (Highest Priority to Eliminate!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Soda, sweet tea, energy drinks:</strong> Liquid sugar causes rapid spike</li>
                        <li>• <strong>Fruit juices (even 100% juice):</strong> High sugar, no fiber</li>
                        <li>• <strong>Candy, chocolate bars, sweets:</strong> Pure sugar</li>
                        <li>• <strong>Cakes, pastries, donuts, muffins:</strong> Sugar + refined flour</li>
                        <li>• <strong>Ice cream, frozen yogurt:</strong> High sugar content</li>
                        <li>• <strong>Cookies, crackers (sweet):</strong> Hidden sugars</li>
                        <li>• <strong>Sweetened yogurt, flavored drinks:</strong> Check labels!</li>
                        <li>• <strong>Honey, maple syrup, agave:</strong> Still spike blood sugar</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Refined Carbohydrates (High-GI 70+):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>White bread, bagels, rolls (GI: 75):</strong> Rapid spike</li>
                        <li>• <strong>White rice, jasmine rice (GI: 73-89):</strong> Very high GI</li>
                        <li>• <strong>Regular pasta (GI: 65):</strong> Choose whole wheat</li>
                        <li>• <strong>Instant oatmeal (GI: 79):</strong> Use steel-cut instead</li>
                        <li>• <strong>Corn flakes, most cereals (GI: 80+):</strong> Avoid</li>
                        <li>• <strong>White potatoes (GI: 85):</strong> Choose sweet potato</li>
                        <li>• <strong>Pretzels, crackers (GI: 80):</strong> Refined flour</li>
                        <li>• <strong>Pizza, fast food buns:</strong> White flour base</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-800">Other Diabetes-Unfriendly Foods:</h4>
                    <ul className="text-sm text-gray-700 space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• Fried foods: French fries, fried chicken, chips (trans fats, high calorie)</li>
                      <li>• Processed meats: Bacon, sausages, hot dogs (increase diabetes risk)</li>
                      <li>• Full-fat dairy (excess): Whole milk, regular cheese (saturated fat)</li>
                      <li>• Packaged snack foods: Chips, crackers (refined carbs, sodium)</li>
                      <li>• Fast food: Burgers, tacos, pizza (high GI, calories, unhealthy fats)</li>
                      <li>• Alcohol (moderate): Can cause hypo/hyperglycemia, interferes with meds</li>
                      <li>• Dried fruits: Raisins, dates (concentrated sugar, high GI)</li>
                      <li>• Tropical fruits: Pineapple, watermelon, mango (high GI 70+)</li>
                    </ul>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete 7-Day Diabetes Meal Plan (1,500-1,600 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Low-GI, high-fiber meal plan with balanced macros (40% carbs, 30% protein, 30% fat) designed to control blood sugar,
              promote weight loss of 1-2 lbs weekly, and reduce A1C by 1-2% in 3-6 months. Pair with blood sugar monitoring.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-800">Day 1 - Sample Low-GI Daily Plan</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Breakfast (7:30 AM) - 350 calories:</h4>
                      <p className="text-gray-700">Steel-cut oats (½ cup dry) cooked with water + ground flaxseeds (1 tbsp) + berries (½ cup) + 2 boiled eggs + unsweetened almond milk</p>
                      <p className="text-sm text-gray-500 mt-1">Carbs: 40g | Protein: 20g | Fat: 12g | Fiber: 10g | GI: 42 | Post-meal target: Below 140 mg/dL</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM) - 150 calories:</h4>
                      <p className="text-gray-700">Greek yogurt plain (¾ cup) + 10 almonds + cinnamon (helps insulin sensitivity)</p>
                      <p className="text-sm text-gray-500 mt-1">Carbs: 12g | Protein: 18g | Fat: 7g | GI: 11</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM) - 450 calories:</h4>
                      <p className="text-gray-700">Grilled chicken breast (4 oz) + quinoa (½ cup cooked) + large mixed salad (2 cups) with olive oil dressing + steamed broccoli (1 cup)</p>
                      <p className="text-sm text-gray-500 mt-1">Carbs: 35g | Protein: 35g | Fat: 18g | Fiber: 12g | GI: 50 | Check blood sugar 2 hours post-meal</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM) - 120 calories:</h4>
                      <p className="text-gray-700">Apple slices (1 small) + almond butter (1 tbsp) + green tea</p>
                      <p className="text-sm text-gray-500 mt-1">Carbs: 18g | Protein: 3g | Fat: 8g | GI: 36 (apple with fat slows absorption)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM) - 480 calories:</h4>
                      <p className="text-gray-700">Baked salmon (5 oz) + roasted sweet potato (½ medium) + sautéed spinach with garlic (2 cups) + side salad with lemon</p>
                      <p className="text-sm text-gray-500 mt-1">Carbs: 30g | Protein: 38g | Fat: 20g | Fiber: 8g | Omega-3 from salmon improves insulin sensitivity</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-red-200">
                    <p className="text-sm font-semibold text-red-700">Day 1 Total: 1,550 calories | Carbs: 135g (35%) | Protein: 114g (29%) | Fat: 65g (38%) | Fiber: 30g</p>
                    <p className="text-xs text-gray-500 mt-1">Blood Sugar Targets: Fasting 80-130 mg/dL | 2-hour post-meal below 180 mg/dL</p>
                  </div>
                </CardContent>
              </Card>

              {/* Days 2-7 Summary - continuing in next response due to length */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Days 2-7: Diabetes-Friendly Meal Rotation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Breakfast Options (330-370 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Veggie omelet (3 eggs) + whole wheat toast (1 slice) + avocado</li>
                        <li>• Greek yogurt parfait + berries + chia seeds + walnuts</li>
                        <li>• Whole wheat toast + smashed avocado + poached eggs (2)</li>
                        <li>• Protein smoothie: berries, spinach, protein powder, almond milk</li>
                        <li>• Overnight oats + chia + berries + protein powder</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Lunch Ideas (420-470 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Turkey and vegetable wrap (whole wheat tortilla) + side salad</li>
                        <li>• Lentil soup (2 cups) + mixed salad + whole grain crackers</li>
                        <li>• Grilled chicken salad (large) + chickpeas + olive oil</li>
                        <li>• Tuna salad on mixed greens + sweet potato (½ medium)</li>
                        <li>• Chicken and vegetable stir-fry + brown rice (½ cup)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Dinner Options (450-500 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Baked cod + roasted vegetables + quinoa (½ cup)</li>
                        <li>• Turkey meatballs + zucchini noodles + marinara</li>
                        <li>• Grilled chicken + cauliflower rice + green beans</li>
                        <li>• Lean beef + broccoli stir-fry + small brown rice portion</li>
                        <li>• Baked tofu + mixed vegetables + lentils</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Diabetes-Friendly Snacks (100-150 cal each):</h4>
                    <ul className="text-sm text-gray-700 space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• Raw vegetables + hummus (3 tbsp)</li>
                      <li>• Hard-boiled eggs (2) + cherry tomatoes</li>
                      <li>• String cheese + handful of berries</li>
                      <li>• Apple slices + peanut butter (1 tbsp)</li>
                      <li>• Greek yogurt (plain) + cinnamon</li>
                      <li>• Handful of mixed nuts (1 oz)</li>
                      <li>• Edamame (1 cup, lightly salted)</li>
                      <li>• Celery sticks + almond butter</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-rose-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Diabetes Diet Plan?</h2>
            <p className="text-xl mb-8">
              Get a customized meal plan tailored to your A1C, medications, and weight loss goals from certified diabetes nutritionists.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Diabetes Consultation</h4>
                <p className="text-white text-sm mb-4">
                  Personalized plan - <PriceDisplay amountIn={500} amountUs={50} />
                </p>
                <Button size="lg" className="w-full bg-white text-red-600" asChild>
                  <Link href="/contact">
                    Book Now - <PriceDisplay amountIn={500} amountUs={50} />
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Activity className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Diabetes Exercise Guide</h4>
                <p className="text-yellow-100 text-sm mb-4">Free workout program</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/diabetes">View Workouts</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
            <RelatedContent />
          </div>
        </div>
      </section>
    </div>
  )
}
