import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, TrendingDown, Target, Clock, Scale, Activity, Zap } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Obesity Weight Loss Plan 2025 | Best Diet for Obesity & Extreme Weight Loss USA, UK, Australia",
  description: "Complete obesity weight loss plan with proven diet strategies, meal plans, exercise guidance for BMI 30+ and severe obesity. Expert-designed for USA, UK, Canada, Australia.",
  keywords: "obesity weight loss, obesity diet plan, extreme weight loss, weight loss for obese, obesity meal plan, lose 50 pounds, lose 100 pounds, BMI over 30, morbid obesity weight loss",
  openGraph: {
    title: "Obesity Weight Loss Plan 2025 | Complete Guide",
    description: "Expert-designed obesity weight loss plan with sustainable strategies for significant weight loss and improved health.",
    url: "https://fitplanindia.com/plans/obesity",
  },
}

export default function ObesityWeightLossPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Obesity Weight Loss", href: "/plans/obesity" },
  ]

  const tocItems = [
    { id: "understanding", label: "Understanding Obesity" },
    { id: "challenges", label: "Challenges & Barriers" },
    { id: "strategy", label: "Food Strategy" },
    { id: "meal-plan", label: "Meal Plan" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "I have to lose over 100 pounds. Where do I even start?",
      answer: "Start small. Don't look at the 100 pounds; focus on the first 5 pounds. Losing just 5-10% of your body weight (e.g., 10-20 lbs if you are 200 lbs) significantly improves health markers like blood pressure and blood sugar. Start by changing ONE meal a day (e.g., a healthy high-protein breakfast) and walking 10 minutes daily. Consistency beats intensity."
    },
    {
      question: "Is weight loss surgery (bariatric surgery) my only option?",
      answer: "No, surgery is a tool, not a magic cure, and it carries risks. Many people lose 100+ pounds through lifestyle changes alone using high-satiety, high-protein diets and movement. However, if your BMI is >40 (or >35 with health issues) and you've failed repeatedly, surgery might be considered. Even with surgery, you MUST change your eating habits permanently to succeed."
    },
    {
      question: "Why is it so much harder for me to lose weight than my friends?",
      answer: "Obesity changes your physiology. You may have insulin resistance, leptin resistance (your brain doesn't 'hear' satiety signals), and a possibly adapted metabolism from years of dieting. This means you might need to try harder (track more precisely, eat higher protein/fiber) to get the same results. It's unfair, but acknowledging it helps you create a realistic plan that works for YOUR body."
    },
    {
      question: "What if I can't exercise because of joint pain?",
      answer: "Weight loss is 80% nutrition, 20% exercise. You can lose weight without exercise by controlling calories. However, movement helps. Start with non-weight-bearing activities like swimming or water aerobics (takes pressure off joints), or a recumbent bike. As you lose the first 20-30 lbs through diet, your joint pain will likely decrease, allowing more movement."
    },
    {
      question: "How do I stop late-night binge eating?",
      answer: "Late-night binges are often caused by under-eating during the day. If you skip breakfast and eat a light lunch, your brain screams for calories at night. EAT MORE during the first half of the day—especially protein. Also, lack of sleep increases ghrelin (hunger hormone). Prioritize 7-8 hours of sleep to naturally reduce cravings."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-indigo-600 font-semibold">
              💪 Sustainable Transformation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Obesity Weight Loss Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete evidence-based weight loss plan for obesity (BMI 30+) with sustainable diet strategies, realistic meal plans,
              exercise guidance, and proven methods to lose 50-100+ pounds safely. Designed for individuals with obesity in USA, UK,
              Canada, Australia seeking permanent lifestyle transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/obesity">Obesity Exercise Guide</Link>
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
                <div className="text-3xl font-bold text-indigo-600 mb-2">6-12 months</div>
                <div className="text-gray-600">Phase 1 Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">1-2 lbs/week</div>
                <div className="text-gray-600">Safe Weight Loss</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-2">50-100+ lbs</div>
                <div className="text-gray-600">Total Goal Range</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">Sustainable</div>
                <div className="text-gray-600">Long-Term Focus</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Obesity and the Path to Sustainable Weight Loss</h2>
              <p className="text-lg text-gray-700 mb-6">
                Obesity is defined as having a Body Mass Index (BMI) of 30 or higher and affects over 42% of American adults,
                28% of UK adults, and similar rates in Canada and Australia. The condition occurs when energy intake consistently
                exceeds energy expenditure over extended periods, resulting in excessive fat accumulation that significantly increases
                health risks including type 2 diabetes (10x higher risk), heart disease, stroke, certain cancers, sleep apnea,
                osteoarthritis, fatty liver disease, and reduced life expectancy by 5-20 years depending on severity. Obesity is
                classified into three categories: Class I (BMI 30-34.9), Class II (BMI 35-39.9 "severe obesity"), and Class III
                (BMI 40+ "morbid obesity" or "extreme obesity").
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The crucial truth about obesity weight loss is that there are NO shortcuts, magic pills, or quick fixes that lead to
                permanent results. Rapid weight loss approaches (crash diets, extreme calorie restriction below 1,200 calories, meal
                replacement shakes only) have a 95% failure rate long-term because they don't address the behavioral, psychological,
                and lifestyle factors that caused obesity initially. The ONLY proven approach for sustainable obesity weight loss is
                <strong> gradual lifestyle transformation</strong> targeting 1-2 pounds weekly loss (which equals 50-100 pounds in
                6-12 months), creating a moderate calorie deficit of 500-750 calories daily below maintenance (NOT starvation diets),
                focusing on whole nutrient-dense foods with high satiety (protein, fiber, volume), incorporating regular physical
                activity starting at whatever level is manageable and progressively increasing, addressing emotional eating triggers
                and developing healthy coping mechanisms, building strong social support system (family, friends, support groups),
                tracking food intake and weight consistently for accountability, and most importantly developing sustainable habits
                that become permanent lifestyle changes. This comprehensive obesity weight loss plan provides a realistic, science-based
                roadmap for losing significant weight (50-150+ pounds) and keeping it off for life through permanent behavior change.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-indigo-800">Health Benefits of Losing Weight with Obesity</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Diabetes prevention/reversal:</strong> 10% weight loss reduces type 2 diabetes risk by 58%</li>
                    <li>• <strong>Heart health improvement:</strong> Lower blood pressure, cholesterol, reduced cardiovascular risk</li>
                    <li>• <strong>Joint pain relief:</strong> Each pound lost reduces knee joint load by 4 pounds</li>
                    <li>• <strong>Better sleep:</strong> Sleep apnea improvement or resolution with 10-15% weight loss</li>
                    <li>• <strong>Increased mobility:</strong> Daily activities become easier, improved quality of life</li>
                    <li>• <strong>Mental health:</strong> Reduced depression, anxiety, improved self-esteem</li>
                    <li>• <strong>Hormone balance:</strong> Improved fertility, testosterone, better energy</li>
                    <li>• <strong>Longevity:</strong> Significant weight loss can add 5-10+ years to life expectancy</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-purple-800">Obesity Weight Loss Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Sustainable pace:</strong> 1-2 pounds weekly (52-104 lbs per year)</li>
                    <li>• <strong>Moderate calorie deficit:</strong> 500-750 below maintenance, never below 1,200-1,500</li>
                    <li>• <strong>High protein priority:</strong> 0.8-1g per pound IDEAL body weight</li>
                    <li>• <strong>Volume eating:</strong> Fill up on low-calorie, high-volume foods</li>
                    <li>• <strong>Consistent tracking:</strong> Food diary, weight tracking, measurements</li>
                    <li>• <strong>Progressive exercise:</strong> Start where you can, gradually increase</li>
                    <li>• <strong>Behavioral therapy:</strong> Address emotional eating, stress eating</li>
                    <li>• <strong>Long-term mindset:</strong> Focus on permanent lifestyle change, not temporary diet</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Obesity Makes Weight Loss Difficult */}
      <section id="challenges" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Obesity Makes Weight Loss More Challenging Than Regular Weight Loss</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                While weight loss fundamentally comes down to consuming fewer calories than you burn, obesity creates unique metabolic,
                psychological, and physiological challenges that make losing weight significantly more difficult than for someone with
                mild overweight. Understanding these challenges is essential for realistic expectations and effective strategies.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-red-800 mb-3 flex items-center">
                    <TrendingDown className="w-6 h-6 mr-2" />
                    1. Metabolic Adaptations Fighting Against Weight Loss
                  </h3>
                  <p className="text-gray-700 mb-3">
                    As you lose weight, your body fights back through metabolic adaptation (adaptive thermogenesis). Your resting
                    metabolic rate decreases MORE than expected based on weight loss alone - sometimes 15-20% below predicted levels.
                    This means after losing 50 pounds, you might burn 300-500 fewer calories daily than someone who naturally weighs
                    that amount, making further weight loss progressively harder and weight regain easier.
                  </p>
                  <p className="text-sm text-gray-600">
                    Your body also increases hunger hormones (ghrelin by 20-30%), decreases satiety hormones (leptin, peptide YY),
                    increases efficiency of food absorption, decreases non-exercise activity (unconsciously moving less), and lowers
                    thyroid hormones slightly. These adaptations persist for YEARS after weight loss, which is why maintenance requires
                    continued vigilance and why regain is so common. Building and preserving muscle through strength training and adequate
                    protein helps combat these metabolic declines.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-orange-800 mb-3 flex items-center">
                    <Activity className="w-6 h-6 mr-2" />
                    2. Physical Limitations and Mobility Challenges
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Obesity significantly limits physical activity capacity. Joint pain (especially knees, hips, back) makes exercise
                    painful or impossible. Carrying 50-150+ extra pounds is like hiking with a heavy backpack 24/7, causing severe
                    fatigue with minimal activity. Breathing difficulties (dyspnea) limit cardio capacity. Many obese individuals can't
                    perform basic exercises like jumping, running, or even brisk walking initially.
                  </p>
                  <p className="text-sm text-gray-600">
                    This creates a vicious cycle: Limited mobility means fewer calories burned daily (both in exercise and NEAT -
                    non-exercise activity thermogenesis), making weight loss slower and more dependent on diet alone. However, good
                    news is that even modest weight loss of 5-10% (25-50 pounds for someone 250+ pounds) dramatically improves mobility,
                    reduces pain, and makes exercise much more manageable, accelerating further progress.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-yellow-800 mb-3 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    3. Psychological and Emotional Eating Patterns
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Obesity is rarely just about food - it's deeply intertwined with emotions, trauma, stress, and learned behaviors.
                    Many obese individuals use food for comfort, stress relief, boredom, loneliness, or to cope with past trauma.
                    Breaking these deeply ingrained patterns requires addressing the underlying emotional issues, not just changing what
                    you eat. Simply "eating less" without addressing why you overeat leads to inevitable relapse.
                  </p>
                  <p className="text-sm text-gray-600">
                    Common psychological challenges include: Emotional eating triggered by stress, sadness, or boredom; binge eating
                    disorder (30-40% of obese individuals seeking treatment); food addiction and cravings (especially for sugar/processed
                    foods); low self-esteem and body image issues; all-or-nothing thinking ("I already ruined my diet, might as well
                    keep eating"); social eating pressures and food-centered celebrations. Professional help from therapist, psychologist,
                    or counselor specializing in eating disorders is often crucial for long-term success, not optional.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-blue-800 mb-3 flex items-center">
                    <Zap className="w-6 h-6 mr-2" />
                    4. Hormonal Imbalances and Medical Complications
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Obesity causes significant hormonal disruptions that make weight loss harder. Insulin resistance (prediabetes/diabetes)
                    is present in 50-70% of obese individuals, causing high insulin levels that promote fat storage and block fat burning.
                    Low testosterone in men (due to excess estrogen from fat tissue) reduces muscle mass and metabolism. PCOS in women
                    (worsened by obesity) causes hormonal chaos and weight gain resistance.
                  </p>
                  <p className="text-sm text-gray-600">
                    Additionally, obesity often coexists with thyroid problems (hypothyroidism), sleep apnea (disrupting hormones and
                    increasing cortisol), chronic inflammation (elevating cytokines that interfere with metabolism), and vitamin D
                    deficiency (stored in fat tissue, less bioavailable). These medical issues must be diagnosed and treated alongside
                    weight loss efforts. Working with healthcare provider (endocrinologist, physician) to optimize these conditions
                    significantly improves weight loss success rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foods Strategy */}
      <section id="strategy" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Obesity Weight Loss Food Strategy: Volume Eating & High Satiety</h2>

            <div className="space-y-8">
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Best Foods for Obesity Weight Loss (High Volume, Low Calorie, High Satiety)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The key to successful obesity weight loss is eating LARGE quantities of LOW-calorie, HIGH-satiety foods so you feel
                    full and satisfied while maintaining a calorie deficit. Focus on foods with high water and fiber content.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Non-Starchy Vegetables (Unlimited!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Leafy greens:</strong> Spinach, lettuce, kale (10-25 cal/cup)</li>
                        <li>• <strong>Cruciferous:</strong> Broccoli, cauliflower, cabbage (25-30 cal/cup)</li>
                        <li>• <strong>Peppers, tomatoes, cucumbers:</strong> (20-30 cal/cup)</li>
                        <li>• <strong>Zucchini, eggplant, green beans:</strong> (20-35 cal/cup)</li>
                        <li>• <strong>Mushrooms, asparagus, celery:</strong> (15-25 cal/cup)</li>
                        <li>• Fill HALF or MORE of every plate with these</li>
                        <li>• You can eat 5-10 cups daily for only 100-250 calories!</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Lean Protein (Every Meal - Critical!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Chicken breast:</strong> 165 cal per 4 oz, 35g protein</li>
                        <li>• <strong>Turkey breast:</strong> 150 cal per 4 oz, 34g protein</li>
                        <li>• <strong>White fish:</strong> Cod, tilapia (110-140 cal per 4 oz)</li>
                        <li>• <strong>Shrimp:</strong> 120 cal per 4 oz, 26g protein</li>
                        <li>• <strong>Egg whites:</strong> 17 cal each, 4g protein (whole eggs: 70 cal)</li>
                        <li>• <strong>Greek yogurt (non-fat):</strong> 100 cal per cup, 17g protein</li>
                        <li>• <strong>Cottage cheese (low-fat):</strong> 160 cal per cup, 28g protein</li>
                        <li>• Protein is MOST satiating macronutrient - reduces hunger 60%</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Complex Carbs (Measured Portions):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Oats (steel-cut):</strong> 150 cal per ½ cup dry</li>
                        <li>• <strong>Brown rice:</strong> 110 cal per ½ cup cooked</li>
                        <li>• <strong>Quinoa:</strong> 110 cal per ½ cup cooked</li>
                        <li>• <strong>Sweet potato:</strong> 100 cal per ½ medium</li>
                        <li>• <strong>Whole wheat bread:</strong> 80-100 cal per slice</li>
                        <li>• <strong>Legumes:</strong> Lentils, beans (110-120 cal per ½ cup cooked)</li>
                        <li>• Keep portions to ¼ of plate or less</li>
                        <li>• Pair with protein and veggies for satiety</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Volume Eating Examples (Huge Portions, Low Calories):</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Giant salad:</strong> 6 cups mixed greens, vegetables, grilled chicken (4 oz), balsamic vinegar =
                        250-300 calories but HUGE volume</li>
                      <li>• <strong>Massive veggie stir-fry:</strong> 4-5 cups vegetables, 4 oz protein, minimal oil = 300-350 calories</li>
                      <li>• <strong>Big soup bowl:</strong> 3 cups vegetable soup with chicken, beans = 200-250 calories, very filling</li>
                      <li>• <strong>Cauliflower rice bowl:</strong> 3 cups cauliflower rice, vegetables, protein = 250-300 calories vs
                        1 cup regular rice alone = 200 calories</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">❌ Foods to ELIMINATE for Obesity Weight Loss (Calorie Bombs, Zero Satiety)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    These foods pack massive calories in small volumes with minimal satiety, making them impossible to fit into a calorie
                    deficit while feeling satisfied. Complete elimination (at least initially) is necessary for success.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Highest Priority to Eliminate:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Sugary drinks:</strong> Soda, sweet tea, juice (150-300 cal per 16 oz, ZERO satiety)</li>
                        <li>• <strong>Fast food:</strong> Burger, fries, soda = 1,200-1,500 calories in one meal</li>
                        <li>• <strong>Fried foods:</strong> 2-3x calories of baked/grilled versions</li>
                        <li>• <strong>Pizza:</strong> 2 slices = 500-700 calories, not filling</li>
                        <li>• <strong>Desserts:</strong> Cake, cookies, ice cream (300-500 cal per serving)</li>
                        <li>• <strong>Chips/crackers:</strong> 150 cal per tiny 1 oz serving</li>
                        <li>• <strong>Candy, chocolate:</strong> 200-300 cal per small bar</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Calorie-Dense Foods to Limit Severely:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Oils, butter:</strong> 120 cal per tablespoon (easy to over-consume)</li>
                        <li>• <strong>Nuts, nut butters:</strong> 160-200 cal per oz/2 tbsp (weigh portions!)</li>
                        <li>• <strong>Cheese:</strong> 100-120 cal per oz (easy to overeat)</li>
                        <li>• <strong>Dried fruits:</strong> 4x calories of fresh fruit, concentrated sugar</li>
                        <li>• <strong>Granola:</strong> 150 cal per ¼ cup (seems healthy but calorie-dense)</li>
                        <li>• <strong>Alcohol:</strong> 100-150 cal per drink, lowers inhibitions, triggers overeating</li>
                        <li>• <strong>Bread, pasta (white):</strong> High calorie, low satiety</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Plan */}
      <section id="meal-plan" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Obesity Weight Loss Meal Plan (1,500-1,800 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              High-volume, high-protein, high-fiber meal plan designed for maximum satiety while maintaining calorie deficit.
              Adjust portions based on your height, starting weight, and activity level.
            </p>

            <Card className="border-indigo-200">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-indigo-800">Sample Day - High Volume, Low Calorie Strategy</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Breakfast (7:30 AM) - 400 calories:</h4>
                    <p className="text-gray-700">Veggie egg white omelet (5 egg whites + 2 whole eggs, 2 cups spinach, mushrooms, tomatoes) + 1 slice whole wheat toast + ½ grapefruit</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 35g | Carbs: 35g | Fat: 12g | HUGE plate, very filling</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM) - 150 calories:</h4>
                    <p className="text-gray-700">Greek yogurt (non-fat, 1 cup) + berries (½ cup) + cinnamon</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 17g | High protein keeps you full until lunch</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM) - 450 calories:</h4>
                    <p className="text-gray-700">GIANT salad (6 cups mixed greens + unlimited vegetables) + grilled chicken breast (5 oz) + 2 tbsp balsamic vinaigrette + apple</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 40g | Fiber: 12g | Massive portion size, highly satisfying</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM) - 100 calories:</h4>
                    <p className="text-gray-700">Raw vegetables (2 cups: carrots, celery, peppers) + hummus (2 tbsp)</p>
                    <p className="text-sm text-gray-500 mt-1">High volume, crunchy, satisfying snack</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM) - 500 calories:</h4>
                    <p className="text-gray-700">Grilled salmon (5 oz) + cauliflower rice (3 cups) + roasted vegetables (3 cups: broccoli, Brussels sprouts, peppers) with 1 tsp olive oil</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 40g | Omega-3 | HUGE dinner plate, completely satisfying</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Evening Snack (Optional, 9:00 PM) - 100 calories:</h4>
                    <p className="text-gray-700">Sugar-free Jello + berries OR air-popped popcorn (3 cups)</p>
                    <p className="text-sm text-gray-500 mt-1">Low-calorie option if hungry before bed</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-indigo-200">
                  <p className="text-sm font-semibold text-indigo-700">Daily Total: 1,700 calories | Protein: 132g (31%) | Carbs: 160g (38%) | Fat: 52g (28%) | Fiber: 40g+</p>
                  <p className="text-xs text-gray-500 mt-1">Note: Portions are LARGE and filling due to high-volume, low-calorie approach</p>
                </div>
              </CardContent>
            </Card>
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
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Obesity Weight Loss Plan?</h2>
            <p className="text-xl mb-8">
              Get a customized plan with ongoing support, accountability, and professional guidance for your weight loss journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Obesity Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - <PriceDisplay amountIn={500} amountUs={50} /></p>
                <Button size="lg" className="w-full bg-white text-indigo-600" asChild>
                  <Link href="/contact">Book Now - <PriceDisplay amountIn={500} amountUs={50} /></Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Activity className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Exercise Guide</h4>
                <p className="text-yellow-100 text-sm mb-4">Free workout program</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/obesity">View Workouts</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
          <RelatedContent />
        </div>
      </div>
    </div>
  )
}
