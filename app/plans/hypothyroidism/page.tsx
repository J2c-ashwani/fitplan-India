import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Apple, TrendingDown, Target, Clock, Flame, Sparkles, Pill, Info, Zap, Activity } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import DynamicRelatedContent from "@/components/DynamicRelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

import ArticleSchema from "@/components/Schema/ArticleSchema"
export const metadata: Metadata = {
  title: "Hypothyroidism Weight Loss Diet Plan 2025 | FitPlan India",
  description: "Complete hypothyroidism diet plan with metabolism-boosting foods, thyroid-supporting nutrients, supplements, and proven weight loss strategies for underactive thyroid in USA, UK, Canada, Australia.",
  keywords: "hypothyroidism diet plan, underactive thyroid weight loss, thyroid diet, how to lose weight with hypothyroidism, hypothyroidism meal plan, best foods for hypothyroidism, thyroid weight loss tips, Hashimoto's diet",
  alternates: {
    canonical: "https://www.fitplanindia.com/plans/hypothyroidism",
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
    title: "Hypothyroidism Weight Loss Diet Plan 2025 | Complete Guide",
    description: "Expert-designed hypothyroidism diet with metabolism-boosting foods, supplements, and proven strategies for weight loss with underactive thyroid.",
    url: "https://www.fitplanindia.com/plans/hypothyroidism",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function HypothyroidismDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Hypothyroidism Diet", href: "/plans/hypothyroidism" },
  ]

  const tocItems = [
    { id: "understanding", label: "Understanding Hypothyroidism" },
    { id: "why-weight-gain", label: "Why Weight Gain?" },
    { id: "foods", label: "Foods Guide" },
    { id: "meal-plan", label: "7-Day Meal Plan" },
    { id: "supplements", label: "Supplements" },
    { id: "tips", label: "Success Tips" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Why is it so hard to lose weight with hypothyroidism?",
      answer: "Hypothyroidism lowers your Basal Metabolic Rate (BMR) by 20-40% because your body lacks the thyroid hormones (T3/T4) that regulate metabolism. You burn 200-600 fewer calories daily at rest than a normal person. Additionally, fatigue reduces your physical activity, and fluid retention adds 'water weight.' To lose weight, you must optimize medication levels (TSH 1-2 mIU/L), consume a controlled calorie intake (but not too low!), and prioritize protein and strength training to boost metabolism."
    },
    {
      question: "Do I really need to avoid broccoli and kale (goitrogens)?",
      answer: "Not necessarily! While raw cruciferous vegetables contain goitrogens that can interfere with thyroid function, COOKING them (steaming, baking, roasting) deactivates about 90% of the goitrogentic compounds. You can enjoy cooked broccoli, cauliflower, and kale in moderation. Avoid juicing large amounts of raw greens. If you have severe iodine deficiency, be more cautious, but for most treated hypothyroid patients, cooked veggies are healthy."
    },
    {
      question: "Should I go gluten-free for hypothyroidism?",
      answer: "If you have Hashimoto's Thyroiditis (autoimmune hypothyroidism), going gluten-free is highly recommended. About 90% of hypothyroid cases are Hashimoto's. The molecular structure of gluten resembles thyroid tissue, leading to 'molecular mimicry' where your immune system attacks your thyroid when you eat gluten. Many patients report reduced antibodies, less bloating, and better energy after 3-6 months gluten-free."
    },
    {
      question: "How much should I eat to lose weight without slowing my metabolism?",
      answer: "Avoid extreme calorie restriction (below 1,200 calories), which signals your body to slow metabolism further ('starvation mode'). Aim for a moderate deficit (1,400-1,600 calories for most women). Focus on nutrient density: high protein (25-30g per meal) to stay full and burn more calories during digestion, fiber from vegetables, and healthy fats. Consistency is key, not starvation."
    },
    {
      question: "What is the best type of exercise for hypothyroidism?",
      answer: "Strength training is superior to endless cardio for hypothyroidism. Since you are prone to muscle loss and slow metabolism, building muscle is the best way to permanently increase your daily calorie burn. Aim for 2-3 full-body strength sessions per week. Low-intensity steady cardio (walking) is good for stress reduction, but avoid excessive high-intensity cardio (HIIT) if you are exhausted, as it can spike cortisol and worsen thyroid function."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ArticleSchema
        headline="Hypothyroidism Weight Loss Diet Plan 2025 | FitPlan India"
        description="Complete hypothyroidism diet plan with metabolism-boosting foods, thyroid-supporting nutrients, supplements, and proven weight loss strategies for underactive thyroid in USA, UK, Canada, Australia."
        keywords={["hypothyroidism diet plan", "underactive thyroid weight loss", "thyroid diet", "how to lose weight with hypothyroidism", "hypothyroidism meal plan", "best foods for hypothyroidism", "thyroid weight loss tips", "Hashimoto"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🦋 Thyroid Management Answer Engine
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm font-serif">
              What is the Best Diet to Lose Weight with Hypothyroidism?
            </h1>
            <p className="text-xl text-white mb-8 border-l-4 border-blue-300 pl-4 text-left bg-white/10 p-4 rounded-r-lg shadow-md leading-relaxed">
              <strong>The Short Answer:</strong> An underactive thyroid drops your metabolism by 20-40%, meaning you burn 200-600 fewer calories at rest. To lose weight, you must strictly optimize medication to hit a TSH of 1-2 mIU/L, and eat a high-protein diet (25-30g per meal) rich in Selenium and Zinc to support T4-to-T3 conversion, combined with strength training to rebuild your metabolic engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View 7-Day Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/hypothyroidism">Thyroid Workout Guide</Link>
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
                <div className="text-3xl font-bold text-blue-600 mb-2">3-6 months</div>
                <div className="text-gray-600">Expected Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-2">1-2 lbs/week</div>
                <div className="text-gray-600">Weight Loss Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">10-20 lbs</div>
                <div className="text-gray-600">Total Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Moderate</div>
                <div className="text-gray-600">Difficulty Level</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Why Can't I Lose Weight with an Underactive Thyroid?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Hypothyroidism (underactive thyroid) affects over 20 million Americans and millions more worldwide in the UK,
                Canada, Australia, and Europe. It occurs when the thyroid gland doesn't produce enough thyroid hormones (T3 and T4),
                causing metabolism to slow down significantly. This leads to unexplained weight gain (even with diet and exercise),
                extreme fatigue and low energy, feeling cold all the time especially hands and feet, dry skin and brittle hair,
                constipation and digestive issues, depression and brain fog, muscle weakness and joint pain, and difficulty losing
                weight despite eating less. Hashimoto's thyroiditis is the most common cause (autoimmune condition attacking the
                thyroid gland), affecting 90% of hypothyroid cases in developed countries.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The key challenge with hypothyroidism weight loss is that a sluggish thyroid slows your basal metabolic rate (BMR)
                by 20-40%, meaning you burn 200-600 fewer calories per day at rest compared to someone with normal thyroid function.
                The foundation of successful hypothyroidism weight loss lies in <strong>optimizing thyroid medication dosage</strong>
                (work closely with your endocrinologist to ensure TSH levels are in optimal range 1-2 mIU/L, not just "normal"),
                eating thyroid-supporting foods rich in selenium, zinc, iodine (if deficient), and tyrosine, avoiding goitrogenic
                foods that interfere with thyroid function when consumed raw and in excess, maintaining adequate protein intake
                (0.8-1g per pound of body weight) to preserve muscle mass and boost metabolism, managing stress and cortisol levels
                (high cortisol worsens thyroid function), getting 7-9 hours quality sleep nightly (poor sleep disrupts thyroid hormones),
                and combining diet with strength training exercise to rebuild metabolism. This comprehensive hypothyroidism diet plan
                focuses on nutrient-dense whole foods, metabolism-boosting nutrients, anti-inflammatory foods, and balanced macros
                (35% protein, 35% carbs, 30% healthy fats) designed specifically for optimal thyroid function and sustainable weight loss.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-blue-800">Benefits of Thyroid-Optimized Diet</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Sustainable weight loss:</strong> 1-2 pounds weekly (8-15 pounds in 3-6 months)</li>
                    <li>• <strong>Increased energy:</strong> Reduced fatigue within 2-4 weeks</li>
                    <li>• <strong>Better mood:</strong> Reduced depression and brain fog</li>
                    <li>• <strong>Improved metabolism:</strong> Higher resting metabolic rate</li>
                    <li>• <strong>Better digestion:</strong> Relief from constipation</li>
                    <li>• <strong>Warmer body temp:</strong> Less sensitivity to cold</li>
                    <li>• <strong>Healthier hair/skin:</strong> Reduced dryness and hair loss</li>
                    <li>• <strong>Better thyroid labs:</strong> Optimized TSH, T3, T4 levels</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-cyan-800">Hypothyroidism Diet Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>High Protein Priority:</strong> 25-30g per meal supports metabolism</li>
                    <li>• <strong>Selenium-Rich Foods:</strong> Brazil nuts, seafood essential for T3 conversion</li>
                    <li>• <strong>Zinc Sources:</strong> Oysters, pumpkin seeds, lean meat for thyroid function</li>
                    <li>• <strong>Iodine Balance:</strong> Moderate iodine from fish, seaweed (not too much)</li>
                    <li>• <strong>Limit Goitrogens:</strong> Cook cruciferous veggies, moderate soy intake</li>
                    <li>• <strong>Anti-Inflammatory Focus:</strong> Omega-3, turmeric for Hashimoto's</li>
                    <li>• <strong>Gluten-Free Option:</strong> 80% of Hashimoto's patients benefit</li>
                    <li>• <strong>Avoid Processed Foods:</strong> Eliminate refined carbs, trans fats</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hypothyroidism Causes Weight Gain */}
      <section id="why-weight-gain" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Hypothyroidism Causes Weight Gain and Makes Losing Weight So Difficult</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                People with hypothyroidism face unique metabolic challenges that make weight loss 40-60% more difficult than those
                with normal thyroid function. Understanding the science behind thyroid-related weight gain is essential for developing
                an effective strategy that actually works despite a sluggish metabolism.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-red-800 mb-3 flex items-center">
                    <TrendingDown className="w-6 h-6 mr-2" />
                    1. Dramatically Slower Metabolism (BMR Reduction)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Low thyroid hormone levels (T3 and T4) directly decrease your basal metabolic rate (BMR) by 20-40%. This means
                    if your normal BMR should be 1,500 calories per day, hypothyroidism can reduce it to 900-1,200 calories daily.
                    You're burning 300-600 fewer calories per day just existing, which equals 1-2 pounds of extra weight gain per
                    month if calorie intake stays the same.
                  </p>
                  <p className="text-sm text-gray-600">
                    Thyroid hormones regulate how every cell in your body uses energy. When levels are low, mitochondria (cellular
                    powerhouses) produce less ATP (energy), cells burn fuel more slowly, and your body switches to "energy conservation
                    mode" storing more calories as fat. This is why thyroid patients gain weight even while eating normally or dieting.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-orange-800 mb-3 flex items-center">
                    <Activity className="w-6 h-6 mr-2" />
                    2. Severe Fatigue Leading to Reduced Activity
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Hypothyroidism causes profound, debilitating fatigue that makes exercise feel impossible. Low thyroid hormones
                    reduce ATP production in muscles, causing weakness and early exhaustion. You burn far fewer calories through
                    daily activity (NEAT - non-exercise activity thermogenesis) and formal exercise, compounding the metabolic slowdown.
                  </p>
                  <p className="text-sm text-gray-600">
                    Even simple activities like walking, climbing stairs, or household chores become exhausting. This activity reduction
                    can decrease daily calorie burn by another 200-400 calories. Combined with lower BMR, you're burning 500-1,000 fewer
                    calories daily than someone with normal thyroid function, making weight gain inevitable without intervention.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-yellow-800 mb-3 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    3. Water Retention and Fluid Accumulation
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Hypothyroidism causes significant water retention and edema (swelling), particularly in the face (puffy appearance),
                    hands, feet, and abdomen. Low thyroid hormones impair kidney function and reduce ability to excrete excess fluid.
                    Mucopolysaccharides (sugar-protein compounds) accumulate in tissues causing myxedema (thick, doughy skin swelling).
                  </p>
                  <p className="text-sm text-gray-600">
                    This fluid retention can account for 5-15 pounds of "weight gain" that isn't actually fat. While frustrating,
                    this water weight typically resolves within 4-8 weeks once thyroid medication is optimized and metabolism improves.
                    Many patients lose 10+ pounds of water weight in the first month of proper treatment.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-blue-800 mb-3 flex items-center">
                    <Flame className="w-6 h-6 mr-2" />
                    4. Decreased Muscle Mass (Sarcopenia)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Hypothyroidism accelerates muscle loss (sarcopenia) because low thyroid hormones impair protein synthesis and muscle
                    tissue maintenance. Since muscle tissue burns 3-5 times more calories than fat tissue even at rest, losing muscle
                    further slows metabolism in a vicious downward spiral. Thyroid patients often have 10-20% lower muscle mass.
                  </p>
                  <p className="text-sm text-gray-600">
                    Preserving and rebuilding muscle through adequate protein intake (0.8-1g per pound body weight daily) and strength
                    training exercise 2-3 times weekly is absolutely critical for hypothyroidism weight loss. You must fight muscle loss
                    aggressively to restore metabolic rate and create sustainable fat loss.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Hypothyroidism Food Guide: Thyroid-Supporting Foods & Foods to Avoid</h2>

            <div className="space-y-8">
              {/* Foods to Eat */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Best Foods for Hypothyroidism (Metabolism-Boosting & Thyroid-Supporting)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Focus on nutrient-dense whole foods rich in selenium, zinc, iodine, tyrosine, and B vitamins that support thyroid
                    hormone production and conversion. High protein intake is critical to preserve muscle mass and boost metabolism.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">High-Protein Foods (Priority!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Wild-caught fish: salmon, cod, halibut (selenium, omega-3)</li>
                        <li>• Chicken breast, turkey (lean protein, B vitamins)</li>
                        <li>• Eggs (whole, with yolks - tyrosine, selenium)</li>
                        <li>• Greek yogurt (plain, probiotics for gut)</li>
                        <li>• Cottage cheese (high protein, low-fat)</li>
                        <li>• Lentils, chickpeas (plant protein, fiber)</li>
                        <li>• Lean beef (grass-fed - zinc, iron, B12)</li>
                        <li>• Protein powder (whey or plant-based)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Selenium-Rich Foods (Critical!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Brazil nuts (200mcg per nut!):</strong> 2-3 nuts daily maximum</li>
                        <li>• Tuna, sardines (high selenium)</li>
                        <li>• Sunflower seeds (selenium, vitamin E)</li>
                        <li>• Mushrooms (crimini, shiitake)</li>
                        <li>• Oysters (selenium + zinc combo)</li>
                        <li>• Chicken, turkey (moderate selenium)</li>
                        <li>• Brown rice (moderate source)</li>
                        <li>• Selenium converts T4 to active T3 hormone</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Zinc & Iodine Sources:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Oysters (highest zinc - 74mg per 3 oz)</li>
                        <li>• Pumpkin seeds (zinc, magnesium)</li>
                        <li>• Beef, lamb (zinc, iron)</li>
                        <li>• Seaweed/nori (iodine - moderate amounts)</li>
                        <li>• Fish: cod, tuna (iodine)</li>
                        <li>• Dairy products (iodine if fortified)</li>
                        <li>• Iodized salt (use moderately)</li>
                        <li>• ⚠️ Don't over-consume iodine if Hashimoto's</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Healthy Complex Carbs:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Quinoa (complete protein, gluten-free)</li>
                        <li>• Brown rice, wild rice</li>
                        <li>• Sweet potato (vitamin A for thyroid)</li>
                        <li>• Oats (gluten-free certified if sensitive)</li>
                        <li>• Buckwheat (gluten-free, selenium)</li>
                        <li>• Avoid: White bread, white rice (spike blood sugar)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Healthy Fats (Omega-3 Focus):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Fatty fish: salmon, mackerel, sardines</li>
                        <li>• Walnuts (omega-3, selenium)</li>
                        <li>• Ground flaxseeds (omega-3, fiber)</li>
                        <li>• Chia seeds (omega-3)</li>
                        <li>• Extra virgin olive oil (anti-inflammatory)</li>
                        <li>• Avocado (healthy monounsaturated fats)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Vegetables (Cooked Cruciferous OK in Moderation):</h4>
                    <ul className="text-sm text-gray-700 space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• Leafy greens: spinach, kale, Swiss chard</li>
                      <li>• Cooked broccoli, cauliflower (not raw excessive amounts)</li>
                      <li>• Bell peppers, tomatoes (antioxidants)</li>
                      <li>• Carrots, beets (beta-carotene)</li>
                      <li>• Zucchini, cucumbers, asparagus</li>
                      <li>• Mushrooms (vitamin D, selenium)</li>
                      <li>• Green beans, snap peas</li>
                      <li>• Sweet potatoes (vitamin A for thyroid conversion)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Foods to Avoid */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">❌ Foods to AVOID or LIMIT with Hypothyroidism (Thyroid-Disrupting)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    These foods interfere with thyroid function, block iodine absorption, impair thyroid medication effectiveness,
                    or slow metabolism further. Avoid or strictly limit for optimal thyroid health and weight loss success.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Goitrogenic Foods (Limit Raw Forms):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Raw cruciferous vegetables:</strong> Raw broccoli, cauliflower, cabbage, kale, Brussels sprouts
                          (cooking deactivates goitrogens, so cooked is fine in moderation)</li>
                        <li>• <strong>Soy products:</strong> Tofu, soy milk, edamame, soy protein isolate (interferes with thyroid
                          medication absorption - take 4 hours apart)</li>
                        <li>• <strong>Millet:</strong> Contains goitrogens, avoid if hypothyroid</li>
                        <li>• <strong>Pine nuts, peanuts:</strong> Moderate goitrogenic effect</li>
                        <li>• <strong>Cassava/tapioca:</strong> High goitrogen content</li>
                        <li>• ⚠️ Note: Cooking reduces goitrogens by 90%. Eat these cooked in reasonable amounts.</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Refined Carbs & Sugar (Worsen Metabolism):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• White bread, white rice, white pasta</li>
                        <li>• Sugary beverages: soda, sweet tea, energy drinks</li>
                        <li>• Pastries, cakes, cookies, donuts</li>
                        <li>• Ice cream, candy, chocolate bars</li>
                        <li>• Breakfast cereals (most are high sugar)</li>
                        <li>• Fruit juices (even 100% pure)</li>
                        <li>• Processed snack foods</li>
                        <li>• These spike blood sugar, worsen insulin resistance</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-800">Foods That Interfere with Thyroid Medication:</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Calcium supplements, dairy (within 4 hours):</strong> Blocks levothyroxine absorption. Take medication
                        on empty stomach, wait 4 hours before dairy/calcium.</li>
                      <li>• <strong>Iron supplements (within 4 hours):</strong> Binds to thyroid medication. Take separately.</li>
                      <li>• <strong>Soy products (within 4 hours):</strong> Interferes with medication effectiveness.</li>
                      <li>• <strong>High-fiber foods at medication time:</strong> Can reduce absorption. Take meds 1 hour before food.</li>
                      <li>• <strong>Coffee (within 1 hour):</strong> Can reduce absorption by 30%. Wait 1 hour after medication.</li>
                    </ul>
                  </div>

                  <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold mb-2 text-yellow-800 flex items-center">
                      <Info className="w-5 h-5 mr-2" />
                      Gluten Consideration for Hashimoto's Thyroiditis
                    </h4>
                    <p className="text-sm text-gray-700">
                      If you have Hashimoto's (autoimmune hypothyroidism), consider eliminating gluten for 3-6 months. Research shows
                      70-80% of Hashimoto's patients improve significantly on a gluten-free diet due to reduced autoimmune antibodies.
                      Gluten molecular structure resembles thyroid tissue, triggering autoimmune attacks (molecular mimicry).
                    </p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete 7-Day Hypothyroidism Diet Plan (1,400-1,500 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              High-protein (35%), moderate-carb (35%), moderate-fat (30%) meal plan designed to boost metabolism, support thyroid
              function, and promote fat loss while preserving muscle mass. Rich in selenium, zinc, and tyrosine.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-blue-200">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-blue-800">Day 1 - Sample Daily Meal Plan (High Protein Focus)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Upon Waking (6:30 AM):</h4>
                      <p className="text-gray-700">Levothyroxine medication on empty stomach + full glass water (wait 1 hour before food/coffee)</p>
                      <p className="text-sm text-gray-500 mt-1">Critical: Always take thyroid medication consistently same time daily, empty stomach</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Breakfast (8:00 AM - After 1+ hour wait):</h4>
                      <p className="text-gray-700">Scrambled eggs (3 whole eggs) with spinach and mushrooms + 2 Brazil nuts + whole grain toast (1 slice) + coffee or green tea</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~380 | Protein: 28g | Carbs: 25g | Fat: 18g | Selenium: 200mcg from Brazil nuts</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (11:00 AM):</h4>
                      <p className="text-gray-700">Greek yogurt (1 cup, plain) + mixed berries (½ cup) + ground flaxseeds (1 tbsp)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~200 | Protein: 20g | Carbs: 22g | Fat: 5g | Probiotics for gut health</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Lunch (1:30 PM - Highest Protein Meal):</h4>
                      <p className="text-gray-700">Grilled salmon (5 oz) + quinoa (¾ cup cooked) + roasted broccoli (1.5 cups) + large mixed salad with olive oil</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~480 | Protein: 38g | Carbs: 40g | Fat: 18g | Omega-3, selenium, zinc</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h4>
                      <p className="text-gray-700">Hard-boiled eggs (2) + cucumber slices + handful of pumpkin seeds (¼ cup)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~230 | Protein: 18g | Carbs: 8g | Fat: 15g | High zinc from pumpkin seeds</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM - Moderate Portion):</h4>
                      <p className="text-gray-700">Grilled chicken breast (4 oz) + steamed asparagus and green beans (2 cups) + small baked sweet potato (½ medium)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~350 | Protein: 32g | Carbs: 35g | Fat: 8g | Vitamin A from sweet potato</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-sm font-semibold text-blue-700">Day 1 Total: 1,640 calories | Protein: 136g (33%) | Carbs: 130g (32%) | Fat: 64g (35%) | Selenium: 250mcg+</p>
                  </div>
                </CardContent>
              </Card>

              {/* Days 2-7 Summary */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Days 2-7: Meal Rotation Options (Keep Protein High!)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Breakfast Ideas (350-400 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Protein smoothie: berries, protein powder, spinach, chia seeds</li>
                        <li>• Veggie omelet (3 eggs) + turkey sausage + Brazil nuts</li>
                        <li>• Greek yogurt parfait + granola + walnuts</li>
                        <li>• Smoked salmon + whole grain toast + avocado</li>
                        <li>• Oatmeal + protein powder + berries + almonds</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Lunch Options (450-500 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Tuna salad (can in water) on mixed greens + quinoa</li>
                        <li>• Chicken breast + lentil soup + side salad</li>
                        <li>• Turkey and vegetable stir-fry + brown rice</li>
                        <li>• Grilled cod + roasted vegetables + sweet potato</li>
                        <li>• Beef and vegetable bowl + quinoa + avocado</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Dinner Ideas (350-400 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Baked chicken + steamed broccoli + wild rice</li>
                        <li>• Turkey meatballs + zucchini noodles + sauce</li>
                        <li>• Grilled shrimp + cauliflower rice + vegetables</li>
                        <li>• Lean beef + roasted Brussels sprouts + small potato</li>
                        <li>• Baked fish + asparagus + quinoa (½ cup)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-gray-800">High-Protein Snacks (150-250 cal each):</h4>
                    <ul className="text-sm text-gray-700 space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• Protein shake (whey or plant-based, low sugar)</li>
                      <li>• Hard-boiled eggs (2-3) + vegetables</li>
                      <li>• Greek yogurt (1 cup) + berries</li>
                      <li>• Cottage cheese (1 cup) + cucumber slices</li>
                      <li>• Turkey roll-ups with lettuce and mustard</li>
                      <li>• Tuna (can) with crackers (whole grain)</li>
                      <li>• Edamame (1.5 cups, lightly salted)</li>
                      <li>• Protein bar (20g+ protein, low sugar)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Supplements */}
      <section id="supplements" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center">
              <Pill className="w-8 h-8 mr-3 text-cyan-600" />
              Essential Supplements for Hypothyroidism & Weight Loss
            </h2>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-700 mb-6">
                Work with your endocrinologist to optimize thyroid medication first (TSH goal: 1-2 mIU/L, not just "normal range").
                These supplements can support thyroid function, improve T4-to-T3 conversion, and accelerate weight loss when combined
                with proper diet and medication.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-800">Core Thyroid Support Supplements:</h3>
                  <ul className="text-sm text-gray-700 space-y-3">
                    <li>• <strong>Selenium:</strong> 200mcg daily (or 2 Brazil nuts). Essential for T4-to-T3 conversion. Don't exceed
                      400mcg daily. Most important supplement for hypothyroidism.</li>
                    <li>• <strong>Zinc:</strong> 30mg daily with food. Required for thyroid hormone production and T3 receptor function.
                      Deficiency common in hypothyroid patients.</li>
                    <li>• <strong>Vitamin D3:</strong> 2,000-5,000 IU daily (test blood levels first, aim 50-70 ng/mL). Deficiency
                      worsens hypothyroidism and weight gain.</li>
                    <li>• <strong>Magnesium:</strong> 300-400mg daily (glycinate form). Required for thyroid hormone production, muscle
                      function, and metabolism.</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-cyan-800">Supporting Supplements (Optional):</h3>
                  <ul className="text-sm text-gray-700 space-y-3">
                    <li>• <strong>Omega-3 Fish Oil:</strong> 1,000-2,000mg EPA+DHA daily. Reduces inflammation (especially for
                      Hashimoto's), supports metabolism.</li>
                    <li>• <strong>B-Complex Vitamins:</strong> Once daily. Support energy production, metabolism, and thyroid function.
                      Choose methylated forms (methylcobalamin B12).</li>
                    <li>• <strong>L-Tyrosine:</strong> 500-1,000mg daily on empty stomach. Amino acid building block for thyroid hormones.
                      May help with energy and focus.</li>
                    <li>• <strong>Ashwagandha:</strong> 600mg daily. Adaptogen that may support healthy thyroid function and reduce cortisol.
                      (Consult doctor if Hashimoto's)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold mb-2 text-yellow-800 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Important Supplement Warnings
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Iodine:</strong> Don't supplement iodine without testing levels first. Excess iodine can worsen
                    Hashimoto's and hypothyroidism. Get from food (fish, seaweed in moderation).</li>
                  <li>• <strong>Kelp/Seaweed supplements:</strong> Avoid - unpredictable iodine content can harm thyroid.</li>
                  <li>• <strong>Take separately from thyroid medication:</strong> Calcium, iron, and fiber supplements interfere with
                    levothyroxine. Space 4+ hours apart.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section id="tips" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hypothyroidism Weight Loss Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-green-700 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Essential Guidelines
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Optimize medication first:</strong> Work with endocrinologist to get TSH to 1-2 mIU/L range</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>High protein (0.8-1g per lb body weight):</strong> Prevents muscle loss and boosts metabolism</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Strength training 2-3x weekly:</strong> Rebuilds muscle to increase metabolic rate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Be patient:</strong> Expect 1-2 lbs loss weekly (slower than normal thyroid function)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Sleep 7-9 hours:</strong> Poor sleep disrupts thyroid hormones and increases cortisol</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-red-700 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2" />
                  Common Mistakes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Extreme calorie restriction:</strong> Slows metabolism further and causes muscle loss</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping thyroid medication:</strong> Makes weight loss impossible without optimized levels</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Only doing cardio:</strong> Burns muscle; must include strength training</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not testing nutrient levels:</strong> Check selenium, zinc, vitamin D, iron, B12</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Expecting fast results:</strong> Thyroid weight loss is slower - be consistent</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-7 h-7 text-blue-600 mr-3" />
                Expected Results Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">Week 1-4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Medication Optimization</h4>
                    <p className="text-sm text-gray-600">Initial water weight loss (5-10 lbs), better energy, less fatigue, improved mood</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">Month 2-3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Fat Loss Begins</h4>
                    <p className="text-sm text-gray-600">4-8 lbs fat loss, metabolism improving, warmer body temperature, better digestion</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">Month 4-6</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Significant Progress</h4>
                    <p className="text-sm text-gray-600">10-15 lbs total loss, thyroid labs improved, consistent energy, sustainable habits</p>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Hypothyroidism Diet Plan?</h2>
            <p className="text-xl mb-8">
              Get a customized plan tailored to your thyroid levels, symptoms, and weight loss goals from certified thyroid nutritionists.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Thyroid Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - <PriceDisplay amountIn={500} amountUs={50} /></p>
                <Button size="lg" className="w-full bg-white text-blue-600" asChild>
                  <Link href="/contact#contact-form">Book Now - <PriceDisplay amountIn={500} amountUs={50} /></Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <h4 className="font-semibold text-white mb-2">Thyroid Workouts</h4>
                <p className="text-yellow-100 text-sm mb-4">Free exercise program</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/hypothyroidism">View Workouts</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
            <DynamicRelatedContent topic="hypothyroidism" />
          </div>
        </div>
      </section>
    </div>
  )
}
