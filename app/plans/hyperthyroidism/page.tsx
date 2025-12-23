import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, TrendingUp, Target, Clock, Flame, Sparkles, Pill, Info, Zap } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hyperthyroidism Weight Gain Diet Plan 2025 | Best Diet for Overactive Thyroid USA, UK, Australia",
  description: "Complete hyperthyroidism diet plan with high-calorie nutrient-dense foods, metabolism-slowing strategies, and healthy weight gain guide for overactive thyroid in USA, UK, Canada, Australia.",
  keywords: "hyperthyroidism diet plan, overactive thyroid weight gain, hyperthyroidism meal plan, how to gain weight with hyperthyroidism, Graves disease diet, thyroid weight gain tips",
  openGraph: {
    title: "Hyperthyroidism Weight Gain Diet Plan 2025 | Complete Guide",
    description: "Expert-designed hyperthyroidism diet with calorie-dense foods and proven strategies for healthy weight gain with overactive thyroid.",
    url: "https://fitplanindia.com/plans/hyperthyroidism",
  },
}

export default function HyperthyroidismDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Hyperthyroidism Diet", href: "/plans/hyperthyroidism" },
  ]

  const tocItems = [
    { id: "understanding", label: "Understanding Hyperthyroidism" },
    { id: "why-weight-loss", label: "Why Weight Loss" },
    { id: "foods", label: "Foods Guide" },
    { id: "meal-plan", label: "7-Day Meal Plan" },
    { id: "supplements", label: "Supplements" },
    { id: "tips", label: "Success Tips" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Why can't I gain weight even though I'm eating constantly?",
      answer: "Hyperthyroidism increases your metabolism by 30-60%, meaning you burn 400-900 EXTRA calories daily just at rest! If your normal needs are 1,800 cal, hyperthyroid may raise this to 2,200-2,700 daily. PLUS: rapid heart rate burns 100-300 extra calories, nervous energy/fidgeting burns 200-400 more, faster digestion means less calorie absorption. TOTAL: You might be burning 1,000+ extra calories vs normal! SOLUTION: Track calories meticulously - you likely need 2,500-3,500 daily to gain weight (sometimes more). Focus on calorie-dense foods: nuts (160 cal/oz), nut butters (190 cal/2 tbsp), avocados, oils, full-fat dairy, dried fruits, smoothies. Eat every 2-3 hours (5-7 times daily). Liquid calories are easier - make high-calorie smoothies. REALITY: You CAN'T out-eat untreated hyperthyroidism - medication to normalize thyroid levels is ESSENTIAL first!"
    },
    {
      question: "How long after starting medication will I start gaining weight?",
      answer: "Timeline for hyperthyroid weight gain: WEEK 1-4: Minimal weight gain while medication starts working. Symptoms begin improving (less heart palpitations, anxiety), appetite may increase. Don't expect weight gain yet. MONTH 2-3: Weight gain begins as thyroid levels normalize. Expect 4-10 lbs if eating adequate calories (2,500-3,000+). Energy improves, heart rate slows, anxiety reduces. MONTH 4-6: Healthy weight gain continues at 0.5-1 lb weekly. Total 10-20 lb gain achievable. Thyroid labs normalized, muscle mass restored. KEY FACTORS affecting timeline: How quickly medication normalizes thyroid (varies person to person), calorie intake sufficient for surplus, protein intake adequate (1-1.2g/lb target weight), stress management and sleep quality. PATIENCE REQUIRED: Unlike hypothyroid (struggles to LOSE), your challenge is GAINING which requires aggressive eating even when not hungry. Track everything!"
    },
    {
      question: "Can I drink coffee or do I need to completely avoid caffeine?",
      answer: "For hyperthyroidism: STRONGLY RECOMMEND eliminating or severely limiting caffeine! Here's why it's especially problematic: Worsens heart palpitations (you already have rapid heart rate 90-120+ bpm), increases anxiety and nervousness (already elevated from hyperthyroid), interferes with sleep (you likely have insomnia), increases tremors (common hyperthyroid symptom), further speeds metabolism (burns MORE calories you're trying to gain). RECOMMENDATION: Eliminate caffeine COMPLETELY during active hyperthyroidism treatment phase (first 3-6 months). If you must have some: Max 50-100mg daily (½ cup coffee), only in morning (before 10 AM), never on empty stomach, monitor symptoms (if worsens anxiety/palpitations, stop immediately). BETTER alternatives: Decaf coffee, herbal teas (chamomile for calming), rooibos tea, warm milk with cinnamon. Once thyroid normalized AND symptoms controlled for 3+ months, can cautiously reintroduce small amounts and monitor response. Your health is more important than caffeine!"
    },
    {
      question: "Why is calcium so important with hyperthyroidism?",
      answer: "CRITICAL FACT: Hyperthyroidism DRAMATICALLY increases bone calcium loss, raising osteoporosis risk by 300-400%! Why this happens: Excess thyroid hormone accelerates bone remodeling, your body breaks down bone faster than it can rebuild it (resorption > formation), calcium leaches from bones into bloodstream then out through urine, months/years of hyperthyroid can cause PERMANENT bone density loss. WHO'S AT HIGHEST RISK: Women (especially postmenopausal), people with untreated/poorly controlled hyperthyroid for 6+ months, Graves' disease patients, those on long-term anti-thyroid medications. PROTECT YOUR BONES: 1) Get thyroid controlled ASAP (medication compliance critical!), 2) Calcium: 1,200-1,500mg daily from food + supplements, 3) Vitamin D3: 2,000-4,000 IU daily (needed for calcium absorption), 4) Vitamin K2: 100-200mcg (directs calcium to bones, not arteries), 5) Strength training 2-3x weekly (stimulates bone building), 6) Get DEXA scan to check bone density. FOOD SOURCES: Dairy (milk, yogurt, cheese), sardines/salmon with bones, fortified plant milks, leafy greens. DON'T IGNORE THIS - bone loss can be irreversible!"
    },
    {
      question: "Should I do cardio or strength training with hyperthyroidism?",
      answer: "For hyperthyroidism: FOCUS ON STRENGTH TRAINING, LIMIT CARDIO! Complete opposite of hypothyroid approach. Here's why: AVOID excessive cardio: You're already burning excessive calories, cardio burns even more (making weight gain impossible), elevated heart rate is dangerous with hyperthyroid (risk of atrial fibrillation), exhausting when already fatigued. PRIORITIZE strength training: Builds muscle mass (you've lost muscle to catabolism), muscle burns calories but LESS than cardio, preserves bone density (critical with hyperthyroid), improves strength and function, weight gain will be healthy muscle, not just fat. IDEAL PROGRAM: Strength training 2-3x weekly (full body, 30-45 min, moderate intensity), minimal cardio (maybe 10-15 min walking for warm-up), prioritize compound movements (squats, deadlifts, bench, rows), adequate rest between workouts (recovery crucial), listen to your body (skip if heart palpitations/excessive fatigue). WAIT until thyroid controlled: If heart rate still 100+ at rest or severe symptoms, focus ONLY on diet and medication. Add exercise once stabilized. NEVER push through dangerous symptoms - work with doctor on exercise clearance!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-orange-600 font-semibold">
              🔥 Evidence-Based Thyroid Management
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Hyperthyroidism Weight Gain Diet Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete evidence-based diet plan for overactive thyroid (hyperthyroidism) with high-calorie nutrient-dense foods,
              metabolism-slowing strategies, supplements, and proven healthy weight gain methods. Designed for thyroid patients in
              USA, UK, Canada, Australia including Graves' disease and thyrotoxicosis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View 7-Day Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/hyperthyroidism">Hyperthyroidism Exercise Guide</Link>
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
                <div className="text-3xl font-bold text-orange-600 mb-2">2-4 months</div>
                <div className="text-gray-600">Expected Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">0.5-1 lb/week</div>
                <div className="text-gray-600">Weight Gain Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">10-20 lbs</div>
                <div className="text-gray-600">Total Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Moderate</div>
                <div className="text-gray-600">Difficulty Level</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Hyperthyroidism and Unintentional Weight Loss</h2>
              <p className="text-lg text-gray-700 mb-6">
                Hyperthyroidism (overactive thyroid) affects approximately 1-3% of the population in USA, UK, Canada, Australia,
                and Europe, with women being 5-10 times more likely to develop it than men. It occurs when the thyroid gland produces
                excessive thyroid hormones (T3 and T4), causing metabolism to speed up dramatically. This leads to rapid unintentional
                weight loss (5-20 pounds in weeks/months despite eating normally or more), extreme hunger but inability to gain weight,
                rapid heartbeat and heart palpitations, excessive sweating and heat intolerance, anxiety, nervousness, and irritability,
                hand tremors and muscle weakness, difficulty sleeping (insomnia), frequent bowel movements or diarrhea, and fatigue
                despite feeling "wired". Graves' disease is the most common cause (autoimmune condition stimulating thyroid overproduction),
                accounting for 60-80% of hyperthyroidism cases.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The primary challenge with hyperthyroidism weight gain is that an overactive thyroid dramatically increases your basal
                metabolic rate (BMR) by 30-60%, meaning you burn 400-900 MORE calories per day at rest compared to someone with normal
                thyroid function. Your body is essentially running in "overdrive mode" 24/7, burning through calories, fat stores, and
                even muscle tissue at an accelerated rate. The foundation of successful hyperthyroidism weight gain lies in
                <strong> optimizing thyroid medication to normalize hormone levels</strong> (work with endocrinologist to bring T3/T4
                levels into normal range and suppress TSH appropriately), consuming significantly MORE calories than you burn (calorie
                surplus of 500-750 daily), eating frequent high-calorie nutrient-dense meals and snacks (5-7 times daily), prioritizing
                protein to rebuild lost muscle mass (1-1.2g per pound target body weight), choosing calorie-dense healthy foods that
                pack maximum calories in smaller volumes, managing stress and anxiety (high cortisol worsens symptoms), and combining
                diet with gentle strength training to build muscle, not just fat. This comprehensive hyperthyroidism diet plan focuses
                on calorie-dense whole foods, adequate protein, healthy fats, and balanced macros (30% protein, 40% carbs, 30% fats)
                designed to promote healthy weight gain while managing overactive thyroid symptoms.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-orange-800">Benefits of Proper Hyperthyroidism Diet</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Healthy weight gain:</strong> 0.5-1 pound weekly (8-16 pounds in 2-4 months)</li>
                    <li>• <strong>Restored energy:</strong> Reduced fatigue and weakness</li>
                    <li>• <strong>Rebuilt muscle mass:</strong> Regain strength and muscle lost to hyperthyroidism</li>
                    <li>• <strong>Better heart health:</strong> Reduced heart palpitations and irregular heartbeat</li>
                    <li>• <strong>Improved mood:</strong> Less anxiety, nervousness, irritability</li>
                    <li>• <strong>Better sleep:</strong> Improved sleep quality and duration</li>
                    <li>• <strong>Stable body temp:</strong> Less heat intolerance and sweating</li>
                    <li>• <strong>Normalized thyroid labs:</strong> T3, T4, and TSH return to healthy range</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-amber-800">Hyperthyroidism Diet Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>High Calorie Density:</strong> Pack maximum calories in smaller portions</li>
                    <li>• <strong>Frequent Eating:</strong> 5-7 small meals/snacks daily (every 2-3 hours)</li>
                    <li>• <strong>High Protein Priority:</strong> 1-1.2g per pound target weight for muscle</li>
                    <li>• <strong>Healthy Fats Focus:</strong> Nuts, seeds, avocado, oils add calories easily</li>
                    <li>• <strong>Complex Carbs:</strong> Whole grains, starchy vegetables for energy</li>
                    <li>• <strong>Calcium-Rich Foods:</strong> Critical (hyperthyroidism depletes bone calcium)</li>
                    <li>• <strong>Limit Caffeine:</strong> Worsens anxiety, palpitations, insomnia</li>
                    <li>• <strong>Avoid Excess Iodine:</strong> Can worsen hyperthyroidism symptoms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hyperthyroidism Causes Weight Loss */}
      <section id="why-weight-loss" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Hyperthyroidism Causes Rapid Weight Loss and Muscle Wasting</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                People with hyperthyroidism face unique metabolic challenges that cause rapid, uncontrollable weight loss even while
                eating large amounts of food. Understanding why your body is burning through calories and muscle tissue so rapidly is
                essential for developing an effective weight gain strategy.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-red-800 mb-3 flex items-center">
                    <Flame className="w-6 h-6 mr-2" />
                    1. Dramatically Increased Metabolism (BMR Surge)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Excessive thyroid hormone levels (T3 and T4) dramatically increase your basal metabolic rate (BMR) by 30-60% or more.
                    If your normal BMR should be 1,500 calories per day, hyperthyroidism can increase it to 1,950-2,400 calories daily.
                    You're burning 450-900 EXTRA calories per day just existing, which equals 1-2 pounds of weight loss per week if calorie
                    intake stays the same.
                  </p>
                  <p className="text-sm text-gray-600">
                    High thyroid hormones force every cell in your body to work in "overdrive mode." Mitochondria (cellular powerhouses)
                    produce excessive ATP (energy), cells burn fuel at accelerated rates, heart beats faster (increasing calorie burn),
                    body temperature rises (thermogenesis burns calories), and your body breaks down fat AND muscle tissue rapidly for
                    fuel. This metabolic acceleration makes weight gain extremely difficult without massive calorie increases.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-orange-800 mb-3 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    2. Increased Muscle Protein Breakdown (Muscle Wasting)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Hyperthyroidism accelerates muscle protein breakdown (catabolism) while simultaneously impairing muscle protein
                    synthesis (anabolism). High thyroid hormones cause your body to break down muscle tissue for energy, leading to
                    significant muscle mass loss, weakness, and fatigue. This is why many hyperthyroid patients appear very thin with
                    little muscle definition.
                  </p>
                  <p className="text-sm text-gray-600">
                    Muscle loss further compounds the problem because muscle tissue burns more calories than fat tissue even at rest.
                    As you lose muscle, your already elevated metabolism continues burning calories at unsustainable rates. Aggressive
                    high-protein intake (1-1.2g per pound target body weight) combined with strength training is absolutely critical to
                    preserve and rebuild lost muscle mass during treatment.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-yellow-800 mb-3 flex items-center">
                    <Zap className="w-6 h-6 mr-2" />
                    3. Increased Appetite That Can't Keep Up
                  </h3>
                  <p className="text-gray-700 mb-3">
                    While hyperthyroidism often increases appetite and hunger signals, most people cannot physically eat enough food to
                    match their dramatically elevated calorie burn. You might be eating 50-100% more food than normal and still losing
                    weight rapidly. Digestive transit time also speeds up, causing frequent bowel movements or diarrhea, which means
                    you're not fully absorbing all the calories you do eat.
                  </p>
                  <p className="text-sm text-gray-600">
                    This is why strategic eating of calorie-dense foods becomes crucial. You must pack maximum calories into smaller
                    food volumes because eating massive quantities of low-calorie foods becomes physically impossible and uncomfortable.
                    Focus on nuts, nut butters, avocados, oils, full-fat dairy, dried fruits, and smoothies that deliver high calories
                    in manageable portions.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-amber-800 mb-3 flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    4. Increased Heart Rate and Activity (Non-Stop Calorie Burn)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Hyperthyroidism causes your heart to beat faster 24/7 (tachycardia), often 90-120+ beats per minute at rest compared
                    to normal 60-80 bpm. This elevated heart rate alone burns 100-300 extra calories daily. Combined with anxiety,
                    restlessness, and inability to sit still (common hyperthyroid symptoms), you burn significant additional calories
                    through non-exercise activity thermogenesis (NEAT).
                  </p>
                  <p className="text-sm text-gray-600">
                    Many hyperthyroid patients unconsciously fidget, pace, tap feet, and move constantly throughout the day, burning
                    200-400 extra calories through these unconscious movements. This "internal hyperactivity" makes achieving the necessary
                    calorie surplus for weight gain even more challenging. Conscious effort to rest, relax, and minimize unnecessary
                    movement can help conserve energy and calories.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Hyperthyroidism Food Guide: Calorie-Dense Foods & Foods to Limit</h2>

            <div className="space-y-8">
              {/* Foods to Eat */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Best Foods for Hyperthyroidism Weight Gain (Calorie-Dense & Nutrient-Rich)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Focus on calorie-dense whole foods that pack maximum nutrition and calories in smaller portions. Prioritize protein
                    to rebuild muscle, healthy fats for concentrated calories, and calcium-rich foods to protect bone health.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">High-Protein Foods (Priority!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Chicken breast, thighs (150-200 cal per 4 oz)</li>
                        <li>• Fatty fish: Salmon, mackerel (200-250 cal per 4 oz)</li>
                        <li>• Eggs (whole, with yolks - 70 cal each)</li>
                        <li>• Greek yogurt (full-fat - 150 cal per cup)</li>
                        <li>• Cottage cheese (full-fat - 220 cal per cup)</li>
                        <li>• Lean beef, lamb (200-250 cal per 4 oz)</li>
                        <li>• Protein powder (whey or plant - 120+ cal per scoop)</li>
                        <li>• Lentils, chickpeas, beans (cooked)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Calorie-Dense Healthy Fats:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Nuts (160-200 cal per oz):</strong> Almonds, walnuts, cashews, pecans</li>
                        <li>• <strong>Nut butters (190-200 cal per 2 tbsp):</strong> Peanut, almond, cashew butter</li>
                        <li>• <strong>Avocado (240 cal per medium):</strong> Add to everything</li>
                        <li>• <strong>Olive oil (120 cal per tbsp):</strong> Drizzle on foods</li>
                        <li>• <strong>Coconut oil (120 cal per tbsp):</strong> Cooking or smoothies</li>
                        <li>• <strong>Seeds (150-180 cal per oz):</strong> Pumpkin, sunflower, chia, flax</li>
                        <li>• <strong>Full-fat dairy:</strong> Whole milk, cheese, butter</li>
                        <li>• <strong>Dark chocolate (85%):</strong> 170 cal per oz (moderate amounts)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Complex Carbs & Starches:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Oats (150 cal per ½ cup dry):</strong> Make with whole milk</li>
                        <li>• <strong>Brown rice, quinoa:</strong> 200-220 cal per cup cooked</li>
                        <li>• <strong>Sweet potato, white potato:</strong> 150-180 cal per medium</li>
                        <li>• <strong>Whole wheat pasta:</strong> 180-200 cal per cup cooked</li>
                        <li>• <strong>Whole grain bread:</strong> 100-120 cal per slice</li>
                        <li>• <strong>Granola (low-sugar):</strong> 140-150 cal per ¼ cup</li>
                        <li>• <strong>Dried fruits:</strong> Dates, raisins, apricots (high calorie)</li>
                        <li>• <strong>Banana:</strong> 105-120 cal each (great for smoothies)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Calcium-Rich Foods (CRITICAL!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Dairy products:</strong> Full-fat milk, yogurt, cheese (high calcium, high calorie)</li>
                        <li>• <strong>Fortified plant milks:</strong> Soy, almond, oat (choose full-fat versions)</li>
                        <li>• <strong>Canned fish with bones:</strong> Sardines, salmon (excellent calcium source)</li>
                        <li>• <strong>Leafy greens:</strong> Kale, collards, bok choy (cooked to increase absorption)</li>
                        <li>• <strong>Tofu (calcium-set):</strong> Check label for calcium content</li>
                        <li>• ⚠️ Hyperthyroidism depletes bone calcium - prioritize these foods daily!</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Calorie-Dense Snacks & Additions:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Trail mix (nuts, seeds, dried fruit)</li>
                        <li>• Protein smoothies with nut butter, banana, protein powder</li>
                        <li>• Cheese and whole grain crackers</li>
                        <li>• Hummus with pita bread or vegetables</li>
                        <li>• Energy balls (dates, nuts, oats)</li>
                        <li>• Whole milk lattes or shakes</li>
                        <li>• Add olive oil, butter, or cheese to vegetables</li>
                        <li>• Top everything with nuts, seeds, avocado</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Foods to Avoid/Limit */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">❌ Foods to LIMIT or AVOID with Hyperthyroidism</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    These foods can worsen hyperthyroidism symptoms, increase anxiety/heart palpitations, or interfere with thyroid
                    medication effectiveness. Limit or avoid for optimal symptom management and weight gain success.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Limit or Avoid (Worsens Symptoms):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Caffeine (coffee, tea, energy drinks):</strong> Worsens anxiety, palpitations, insomnia, tremors.
                          Limit to 1 cup daily or eliminate completely.</li>
                        <li>• <strong>High-iodine foods:</strong> Seaweed, kelp, iodized salt in excess (can worsen hyperthyroidism).
                          Use regular salt, avoid seaweed supplements.</li>
                        <li>• <strong>Sugary foods and refined carbs:</strong> Cause energy spikes and crashes, worsen anxiety. Stick to
                          complex carbs for stable energy.</li>
                        <li>• <strong>Alcohol:</strong> Interferes with thyroid medication, disrupts sleep, provides empty calories without
                          nutrition. Limit or avoid.</li>
                        <li>• <strong>Processed foods:</strong> High sodium worsens swelling, lack nutrients. Choose whole foods.</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Foods That Interfere with Medication:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Soy products (within 4 hours of meds):</strong> Tofu, soy milk, edamame can reduce medication
                          absorption. Space 4+ hours apart.</li>
                        <li>• <strong>Calcium supplements (within 4 hours):</strong> Blocks anti-thyroid medication absorption. Take
                          separately.</li>
                        <li>• <strong>Iron supplements (within 4 hours):</strong> Interferes with medication. Take at different times.</li>
                        <li>• <strong>High-fiber foods at medication time:</strong> Can reduce absorption. Take meds on empty stomach if
                          prescribed that way.</li>
                        <li>• Always follow your endocrinologist's specific medication timing instructions.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold mb-2 text-yellow-800 flex items-center">
                      <Info className="w-5 h-5 mr-2" />
                      Goitrogenic Foods May Actually HELP Hyperthyroidism
                    </h4>
                    <p className="text-sm text-gray-700">
                      Unlike hypothyroidism where goitrogenic foods should be limited, with hyperthyroidism certain goitrogenic foods
                      (cruciferous vegetables like broccoli, cauliflower, cabbage, kale when consumed raw) may actually help by slightly
                      reducing thyroid hormone production. However, cook them if consuming large amounts, and always follow your doctor's
                      specific dietary recommendations as individual responses vary.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete 7-Day Hyperthyroidism Weight Gain Plan (2,500-3,000 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              High-calorie, nutrient-dense meal plan with 5-7 eating occasions daily. Designed to create 500-750 calorie surplus
              for healthy weight gain of 0.5-1 pound weekly. Adjust portions based on your metabolism and weight goals.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-orange-200">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-800">Day 1 - Sample High-Calorie Daily Plan</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Breakfast (8:00 AM) - 600 calories:</h4>
                      <p className="text-gray-700">3 scrambled eggs cooked in butter + 2 slices whole wheat toast with 2 tbsp peanut butter + 1 banana + full-fat Greek yogurt (½ cup)</p>
                      <p className="text-sm text-gray-500 mt-1">Protein: 35g | Carbs: 70g | Fat: 30g | High protein and calories to start day</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM) - 350 calories:</h4>
                      <p className="text-gray-700">Protein smoothie: 1 scoop protein powder + 1 cup whole milk + 2 tbsp almond butter + ½ banana + 1 tbsp honey</p>
                      <p className="text-sm text-gray-500 mt-1">Protein: 35g | Carbs: 40g | Fat: 20g | Easy to consume liquid calories</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM) - 700 calories:</h4>
                      <p className="text-gray-700">Grilled salmon (6 oz) + quinoa (1 cup cooked) + roasted vegetables with olive oil (2 tbsp) + avocado (½ medium) + side salad</p>
                      <p className="text-sm text-gray-500 mt-1">Protein: 45g | Carbs: 60g | Fat: 35g | Omega-3 rich, calorie-dense</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Afternoon Snack (3:30 PM) - 400 calories:</h4>
                      <p className="text-gray-700">Trail mix (½ cup mixed nuts, dried fruits, dark chocolate chips) + full-fat string cheese (2 pieces)</p>
                      <p className="text-sm text-gray-500 mt-1">Protein: 18g | Carbs: 35g | Fat: 28g | Portable, calorie-dense snack</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Dinner (6:30 PM) - 750 calories:</h4>
                      <p className="text-gray-700">Grilled chicken breast (6 oz) + brown rice (1.5 cups cooked) + sweet potato (1 medium) with butter + broccoli with cheese sauce</p>
                      <p className="text-sm text-gray-500 mt-1">Protein: 50g | Carbs: 85g | Fat: 25g | Substantial dinner for recovery</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Evening Snack (9:00 PM) - 300 calories:</h4>
                      <p className="text-gray-700">Full-fat cottage cheese (1 cup) + granola (¼ cup) + handful of berries + drizzle of honey</p>
                      <p className="text-sm text-gray-500 mt-1">Protein: 28g | Carbs: 35g | Fat: 12g | Slow-digesting protein before bed</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <p className="text-sm font-semibold text-orange-700">Day 1 Total: 3,100 calories | Protein: 211g (27%) | Carbs: 325g (42%) | Fat: 150g (31%)</p>
                    <p className="text-xs text-gray-500 mt-1">Adjust portions up or down based on your current weight, metabolism, and weight gain progress</p>
                  </div>
                </CardContent>
              </Card>

              {/* Days 2-7 Summary */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Days 2-7: High-Calorie Meal Rotation Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Breakfast Ideas (550-650 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Oatmeal made with whole milk + protein powder + nuts + banana</li>
                        <li>• Whole wheat pancakes (3) + butter + maple syrup + eggs (2)</li>
                        <li>• Breakfast burrito: eggs, cheese, avocado, beans, sour cream</li>
                        <li>• Bagel with cream cheese + smoked salmon + avocado</li>
                        <li>• French toast (3 slices) + yogurt + nuts</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Lunch Options (650-750 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Chicken pasta: whole wheat pasta + grilled chicken + olive oil + parmesan</li>
                        <li>• Large burrito bowl: rice, beans, meat, cheese, guac, sour cream</li>
                        <li>• Beef stir-fry with lots of rice + vegetables in sauce</li>
                        <li>• Salmon rice bowl with avocado and sesame dressing</li>
                        <li>• Turkey and cheese sandwich (2 slices) + chips + apple + peanut butter</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Dinner Ideas (700-800 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Steak (6 oz) + baked potato with butter/sour cream + vegetables</li>
                        <li>• Chicken thighs + sweet potato + green beans with almonds</li>
                        <li>• Salmon + quinoa + roasted Brussels sprouts with olive oil</li>
                        <li>• Turkey meatballs + pasta + marinara + parmesan cheese</li>
                        <li>• Pork chops + rice + vegetables cooked in oil</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-gray-800">High-Calorie Snacks (300-400 cal each) - Eat 2-3 daily:</h4>
                    <ul className="text-sm text-gray-700 space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• Protein shake: protein powder + whole milk + banana + nut butter</li>
                      <li>• Full-fat Greek yogurt (1 cup) + granola + honey + nuts</li>
                      <li>• Trail mix (¾ cup) - nuts, seeds, dried fruit</li>
                      <li>• Peanut butter (3 tbsp) + banana + whole grain crackers</li>
                      <li>• Hummus (½ cup) + pita bread + vegetables</li>
                      <li>• Cheese (3 oz) + whole grain crackers + apple</li>
                      <li>• Smoothie bowl with toppings</li>
                      <li>• Energy balls (4-5 pieces): dates, nuts, oats, chocolate</li>
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
              <Pill className="w-8 h-8 mr-3 text-amber-600" />
              Essential Supplements for Hyperthyroidism Weight Gain
            </h2>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-700 mb-6">
                Work with your endocrinologist to optimize anti-thyroid medication first (goal: normalize T3/T4, suppress TSH).
                These supplements support bone health, muscle building, and nutrient replacement for deficiencies common in hyperthyroidism.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-orange-800">Critical Supplements (Highly Recommended):</h3>
                  <ul className="text-sm text-gray-700 space-y-3">
                    <li>• <strong>Calcium + Vitamin D3:</strong> 1,000-1,500mg calcium + 2,000-4,000 IU D3 daily. CRITICAL -
                      hyperthyroidism depletes bone calcium dramatically, increasing osteoporosis risk. Take with food.</li>
                    <li>• <strong>Magnesium:</strong> 300-500mg daily (glycinate form). Supports muscle function, bone health,
                      reduces anxiety and heart palpitations. Take in evening.</li>
                    <li>• <strong>Vitamin K2:</strong> 100-200mcg daily. Works with calcium and D3 to direct calcium to bones,
                      not arteries. Important for bone health.</li>
                    <li>• <strong>Whey Protein Powder:</strong> 1-2 scoops daily. Makes hitting high protein goals much easier.
                      Choose quality brand with 20-25g protein per scoop.</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-amber-800">Supporting Supplements (Optional):</h3>
                  <ul className="text-sm text-gray-700 space-y-3">
                    <li>• <strong>B-Complex Vitamins:</strong> Once daily. Supports energy production, metabolism regulation,
                      stress management. Choose high-quality brand.</li>
                    <li>• <strong>L-Carnitine:</strong> 1,000-2,000mg daily. May help with hyperthyroid symptoms (heart palpitations,
                      anxiety) and improve exercise tolerance.</li>
                    <li>• <strong>CoQ10:</strong> 100-200mg daily. Antioxidant that may help with fatigue and heart health. Take with
                      fat-containing meal for absorption.</li>
                    <li>• <strong>Ashwagandha:</strong> 300-600mg daily. Adaptogen that may help reduce anxiety and support thyroid
                      regulation. (Consult doctor first)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold mb-2 text-yellow-800 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Important Supplement Warnings for Hyperthyroidism
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>AVOID iodine supplements:</strong> Never take kelp, seaweed supplements, or high-dose iodine with
                    hyperthyroidism - can dangerously worsen the condition.</li>
                  <li>• <strong>Space supplements from medication:</strong> Take calcium, magnesium, and iron 4+ hours away from
                    anti-thyroid medications (methimazole/PTU) to avoid interactions.</li>
                  <li>• <strong>Consult endocrinologist:</strong> Always discuss supplements with your doctor, especially if taking
                    anti-thyroid medications or beta-blockers.</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hyperthyroidism Weight Gain Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-green-700 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Essential Guidelines
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Optimize medication first:</strong> Work with endocrinologist to normalize thyroid levels before expecting weight gain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat every 2-3 hours:</strong> 5-7 small meals/snacks maintains calorie intake despite faster metabolism</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track calories religiously:</strong> Use app to ensure hitting 2,500-3,000+ daily (adjust based on weight response)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize liquid calories:</strong> Smoothies, shakes, whole milk easier to consume than solid food</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Strength training:</strong> 2-3x weekly to ensure weight gain is muscle, not just fat</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-red-700 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2" />
                  Common Mistakes
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Trying to gain weight before medication optimization:</strong> Won't work if thyroid still overactive</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eating too much sugar/junk food:</strong> Causes energy crashes, worsens anxiety, poor nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not eating enough protein:</strong> Results in fat gain without muscle - aim 1-1.2g per lb target weight</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Doing too much cardio:</strong> Burns extra calories you're trying to gain - focus on strength training</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Getting impatient:</strong> Healthy weight gain is 0.5-1 lb weekly - consistency beats speed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-7 h-7 text-orange-600 mr-3" />
                Expected Results Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">Week 1-4</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Medication Adjustment Phase</h4>
                    <p className="text-sm text-gray-600">Minimal weight gain as medication starts working, symptoms begin improving, appetite may increase</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">Month 2-3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Weight Gain Begins</h4>
                    <p className="text-sm text-gray-600">4-8 lbs gained, thyroid levels normalizing, energy improving, anxiety reducing, better sleep</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 text-orange-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">Month 4-6</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Goal Achievement</h4>
                    <p className="text-sm text-gray-600">10-20 lbs total gain, thyroid labs normalized, muscle mass restored, healthy weight maintained</p>
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
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Hyperthyroidism Diet Plan?</h2>
            <p className="text-xl mb-8">
              Get a customized weight gain plan tailored to your thyroid levels, metabolism, and goals from certified nutritionists.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Thyroid Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - <PriceDisplay amountIn={500} amountUs={50} /></p>
                <Button size="lg" className="w-full bg-white text-orange-600" asChild>
                  <Link href="/contact">Book Now - <PriceDisplay amountIn={500} amountUs={50} /></Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Exercise Guide</h4>
                <p className="text-yellow-100 text-sm mb-4">Free workout program</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/hyperthyroidism">View Workouts</Link>
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
