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
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "PCOD Weight Loss Diet Plan 2025 | Best Diet for PCOD Management USA, UK, Australia",
  description: "Complete PCOD diet plan with 7-day meal plan, hormone-balancing foods, supplements, and proven weight loss strategies. Expert-designed for PCOD women in USA, UK, Canada, Australia.",
  keywords: "PCOD diet plan, PCOD weight loss, best diet for PCOD, polycystic ovarian disease diet, PCOD meal plan, PCOD foods to eat, PCOD diet chart, PCOD treatment diet, how to lose weight with PCOD, PCOD weight loss tips",
  alternates: {
    canonical: "https://www.fitplanindia.com/plans/pcod",
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
    title: "PCOD Weight Loss Diet Plan 2025 | Complete Guide",
    description: "Expert-designed PCOD diet plan with meal plans, supplements, and proven strategies for hormone balance and weight loss.",
    url: "https://www.fitplanindia.com/plans/pcod",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function PCODDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "PCOD Diet Plan", href: "/plans/pcod" },
  ]

  const tocItems = [
    { id: "understanding", label: "PCOD vs PCOS" },
    { id: "foods", label: "Foods Guide" },
    { id: "meal-plan", label: "7-Day Meal Plan" },
    { id: "supplements", label: "Supplements" },
    { id: "tips", label: "Success Tips" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Can diet alone reverse PCOD symptoms or is medication always needed?",
      answer: "Diet and lifestyle changes CAN reverse PCOD symptoms for many women WITHOUT medication! PCOD (unlike PCOS) is primarily a lifestyle-driven condition that responds extremely well to dietary interventions. Studies show 60-70% of women with PCOD achieve complete symptom reversal (regular periods, weight loss, clear skin, improved fertility) within 3-6 months through: Low GI diet (blood sugar control), adequate protein (20-25g per meal), anti-inflammatory foods (reduce ovarian inflammation), stress management, and regular exercise. However, some women with severe insulin resistance may need temporary metformin support alongside diet. Work with your doctor to assess if you can try diet-first approach for 3 months before medication."
    },
    {
      question: "How long does it take to see weight loss results with PCOD diet?",
      answer: "Timeline for PCOD weight loss: WEEK 1-2: Water weight loss (2-4 lbs), reduced bloating, better energy. MONTH 1: 5-8 lbs total loss, clearer skin beginning, fewer cravings, improved mood. MONTH 2-3: 10-15 lbs loss, menstrual cycles starting to regulate, noticeable body composition changes. MONTH 4-6: 15-25 lbs loss (goal range), regular ovulation, normalized hormones, sustained energy. KEY: PCOD weight loss is SLOWER than regular dieting due to hormonal resistance - expect 1-2 lbs per week MAX. Faster loss often means muscle loss or water manipulation, which worsens hormones. Be patient and consistent - sustainable results take 4-6 months but LAST for life!"
    },
    {
      question: "Are supplements necessary for PCOD or can I just focus on diet?",
      answer: "Supplements are OPTIONAL but HIGHLY BENEFICIAL for faster results. Diet alone works, but supplements accelerate improvement: ESSENTIAL (strongly recommended): Inositol (2-4g daily) - clinically proven to improve egg quality and regulate cycles, Omega-3 fish oil - reduces inflammation and balances hormones, Vitamin D - most PCOD women are deficient, critical for fertility. SUPPORTING (helpful): Magnesium - reduces PMS and sugar cravings, NAC - improves fertility and reduces ovarian cysts, Cinnamon extract - enhances insulin sensitivity. If budget limited: Start with diet + inositol + vitamin D (biggest impact for lowest cost). Add others as budget allows. But food ALWAYS comes first - supplements enhance a good diet, they don't replace it!"
    },
    {
      question: "Can I eat out or have cheat meals while managing PCOD with diet?",
      answer: "YES, but strategically! PCOD management is about CONSISTENCY, not perfection. Guidelines: DURING WEEK (Mon-Fri): Follow plan 90% strictly - this is when hormones stabilize. WEEKENDS: One cheat MEAL (not entire day) is fine - choose wisely (quality restaurant meal vs. junk binge). EATING OUT TIPS: Order grilled protein + vegetables + small portion complex carbs, avoid fried foods and refined carbs, ask for dressings/saucesside, choose water or unsweetened beverages. CHEAT MEAL RULES: Plan it (don't make impulsive decisions), enjoy it fully without guilt, return to plan immediately next meal. REALITY: Life happens! Weddings, celebrations, travel - occasional indulgences WON'T ruin progress if you're consistent 80-90% of the time. Guilt and restriction often worsen hormones more than one planned treat!"
    },
    {
      question: "What's the difference between PCOD diet and general weight loss diet?",
      answer: "PCOD diet is specifically designed for HORMONAL weight loss, not just calorie deficit: KEY DIFFERENCES: 1) GLYCEMIC CONTROL: PCOD diet prioritizes low-GI carbs (quinoa, sweet potato) over calorie counting - blood sugar stability is MORE important than total calories. 2) PROTEIN TIMING: PCOD requires protein at EVERY meal (20-25g) to manage insulin, not just total daily protein. 3) HEALTHY FATS EMPHASIS: PCOD needs MORE healthy fats (omega-3, nuts) than typical low-fat weight loss diets - hormones are made from fats! 4) ANTI-INFLAMMATORY FOCUS: Turmeric, ginger, berries are ESSENTIAL for PCOD to reduce ovarian inflammation. 5) MEAL FREQUENCY: 3 balanced meals + 2 snacks prevents energy crashes that worsen hormones. Regular weight loss diet: Eat less, move more. PCOD diet: Balance hormones FIRST, weight loss follows naturally. That's why extreme calorie restriction (1200 cal) often FAILS for PCOD - it worsens hormone imbalance!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ArticleSchema
        headline="PCOD Weight Loss Diet Plan 2025 | Complete Guide for PCOD Management"
        description="Complete PCOD diet plan with 7-day meal plan, hormone-balancing foods, supplements, and proven weight loss strategies."
        keywords={["PCOD diet", "PCOD weight loss", "polycystic ovarian disease", "hormone balance diet", "PCOD meal plan"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-purple-600 font-semibold">
              💜 Evidence-Based PCOD Management
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              PCOD Weight Loss Diet Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete evidence-based diet plan for Polycystic Ovarian Disease (PCOD) with hormone-balancing foods,
              insulin-management nutrition, supplements guide, and proven weight loss strategies. Designed for women in USA,
              UK, Canada, Australia, and worldwide with PCOD symptoms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View 7-Day Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/pcod">PCOD Workout Guide</Link>
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
                <div className="text-3xl font-bold text-purple-600 mb-2">4-6 months</div>
                <div className="text-gray-600">Expected Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">Low GI</div>
                <div className="text-gray-600">Insulin Control</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-violet-600 mb-2">10-20 lbs</div>
                <div className="text-gray-600">Weight Loss Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Moderate</div>
                <div className="text-gray-600">Difficulty Level</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding PCOD vs PCOS: Complete Guide 2025</h2>
              <p className="text-lg text-gray-700 mb-6">
                Polycystic Ovarian Disease (PCOD) affects approximately 1 in 5 women worldwide and is one of the most common
                hormonal conditions affecting women of reproductive age in the USA, UK, Canada, Australia, and Europe. While
                PCOD and PCOS are often confused, PCOD is generally considered a milder condition where the ovaries release
                immature or partially mature eggs that develop into cysts. PCOD causes hormonal imbalance, irregular menstrual
                periods, weight gain (especially around the abdomen), acne and oily skin, hair thinning on the scalp, and
                difficulty losing weight despite diet efforts.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The key difference between PCOD and PCOS is that PCOD is primarily a ovarian disorder that can be managed
                effectively through lifestyle changes alone, while PCOS is a more complex metabolic and endocrine syndrome.
                The foundation of successful PCOD weight loss lies in managing insulin levels through a <strong>low glycemic
                  index (GI) diet</strong>, balancing hormones naturally with specific nutrients like inositol, vitamin D, and
                omega-3 fatty acids, maintaining steady blood sugar levels throughout the day with balanced meals, reducing
                inflammation with anti-inflammatory foods, and combining dietary changes with regular moderate exercise and
                stress management techniques. This comprehensive PCOD diet plan focuses on whole foods, complex carbohydrates
                with GI below 55, lean protein sources at every meal (20-25g), healthy fats with emphasis on omega-3, and
                high-fiber foods (25-30g daily) that support hormonal balance and sustainable weight loss of 1-2 pounds per week.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-purple-800">PCOD Symptoms Improved by Proper Diet</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Sustainable weight loss:</strong> 10-20 pounds in 4-6 months with focus on belly fat</li>
                    <li>• <strong>Regular menstrual cycles:</strong> Periods normalize within 2-4 months typically</li>
                    <li>• <strong>Clearer complexion:</strong> Reduced acne and oily skin within 2-3 months</li>
                    <li>• <strong>Enhanced fertility:</strong> Improved egg quality and ovulation patterns</li>
                    <li>• <strong>Better energy:</strong> Reduced fatigue and improved stamina throughout day</li>
                    <li>• <strong>Balanced hormones:</strong> Lower androgen levels and better estrogen-progesterone ratio</li>
                    <li>• <strong>Reduced inflammation:</strong> Lower inflammatory markers in blood tests</li>
                    <li>• <strong>Better mood:</strong> Reduced mood swings, anxiety, and depression symptoms</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-indigo-800">Evidence-Based PCOD Diet Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Low Glycemic Index:</strong> Choose foods with GI below 55 for stable blood sugar</li>
                    <li>• <strong>Adequate Fiber:</strong> Aim for 25-30g daily for hormone balance and satiety</li>
                    <li>• <strong>Lean Protein Focus:</strong> 20-25g protein per meal supports metabolism</li>
                    <li>• <strong>Healthy Fats Priority:</strong> Omega-3 from fish, nuts, seeds daily for hormones</li>
                    <li>• <strong>Anti-inflammatory Foods:</strong> Berries, leafy greens, turmeric reduce inflammation</li>
                    <li>• <strong>Balanced Meals:</strong> Combine protein, healthy fat, and complex carbs each meal</li>
                    <li>• <strong>Moderate Portions:</strong> Calorie control without extreme restriction</li>
                    <li>• <strong>Avoid Processed Foods:</strong> Eliminate refined carbs, added sugars, trans fats</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCOD vs PCOS Differences */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">PCOD vs PCOS: Key Differences You Need to Know</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                Many women confuse PCOD (Polycystic Ovarian Disease) with PCOS (Polycystic Ovary Syndrome), but understanding
                the differences is crucial for proper treatment. While both conditions involve ovarian cysts and hormonal imbalances,
                they differ significantly in severity, metabolic impact, and treatment approach. PCOD is generally more manageable
                through lifestyle changes alone, while PCOS often requires medical intervention alongside diet and exercise.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-purple-100">
                      <th className="border border-purple-200 p-3 text-left font-semibold">Aspect</th>
                      <th className="border border-purple-200 p-3 text-left font-semibold">PCOD (Polycystic Ovarian Disease)</th>
                      <th className="border border-purple-200 p-3 text-left font-semibold">PCOS (Polycystic Ovary Syndrome)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-gray-200 p-3 font-semibold">Severity</td>
                      <td className="border border-gray-200 p-3">Milder condition, primarily ovarian disorder</td>
                      <td className="border border-gray-200 p-3">More severe, complex metabolic syndrome</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-semibold">Prevalence</td>
                      <td className="border border-gray-200 p-3">Affects 1 in 5 women (20%)</td>
                      <td className="border border-gray-200 p-3">Affects 1 in 10 women (10%)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-semibold">Insulin Resistance</td>
                      <td className="border border-gray-200 p-3">May or may not have insulin resistance (30-40% cases)</td>
                      <td className="border border-gray-200 p-3">70-80% have significant insulin resistance</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-semibold">Hormonal Impact</td>
                      <td className="border border-gray-200 p-3">Moderate hormonal imbalance, primarily ovarian</td>
                      <td className="border border-gray-200 p-3">Severe hormonal imbalance affecting multiple systems</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-semibold">Weight Gain</td>
                      <td className="border border-gray-200 p-3">Gradual weight gain, easier to manage with diet</td>
                      <td className="border border-gray-200 p-3">Rapid weight gain, very difficult to lose</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-semibold">Fertility</td>
                      <td className="border border-gray-200 p-3">Fertility issues less common, can conceive with treatment</td>
                      <td className="border border-gray-200 p-3">Major fertility challenges, leading cause of infertility</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3 font-semibold">Treatment</td>
                      <td className="border border-gray-200 p-3">Often manageable with diet and lifestyle alone</td>
                      <td className="border border-gray-200 p-3">Usually requires medication + lifestyle changes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3 font-semibold">Long-term Risks</td>
                      <td className="border border-gray-200 p-3">Lower risk of diabetes, heart disease (with management)</td>
                      <td className="border border-gray-200 p-3">Higher risk of type 2 diabetes, cardiovascular disease</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <Info className="w-5 h-5 mr-2" />
                  Important Note for Women with PCOD
                </h4>
                <p className="text-sm text-gray-700">
                  If you have been diagnosed with PCOD, the good news is that it is highly manageable through consistent lifestyle
                  changes. Most women with PCOD can achieve complete symptom reversal and maintain healthy weight with proper diet,
                  regular exercise, and stress management - often without needing long-term medication. This diet plan is specifically
                  designed to help you achieve these goals naturally and sustainably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foods to Eat & Avoid */}
      <section id="foods" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete PCOD Food Guide: Best Foods to Eat & Foods to Strictly Avoid</h2>

            <div className="space-y-8">
              {/* Foods to Eat */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Best Foods for PCOD Weight Loss (Hormone-Balancing & Nutrient-Dense)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Focus on whole, unprocessed foods that support hormonal balance, reduce inflammation, and promote sustainable
                    weight loss. These foods help regulate menstrual cycles, improve egg quality, and support overall reproductive health.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Whole Grains & Complex Carbs:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Quinoa (complete protein, GI: 53)</li>
                        <li>• Brown rice (GI: 50)</li>
                        <li>• Whole wheat bread (GI: 50)</li>
                        <li>• Steel-cut oats (GI: 42)</li>
                        <li>• Sweet potato (GI: 54)</li>
                        <li>• Barley (GI: 28)</li>
                        <li>• Buckwheat (gluten-free, GI: 45)</li>
                        <li>• Millet, bulgur wheat</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Quality Protein Sources:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Wild-caught salmon (omega-3 rich)</li>
                        <li>• Chicken breast, turkey</li>
                        <li>• Eggs (pasture-raised preferred)</li>
                        <li>• Greek yogurt (plain, probiotic-rich)</li>
                        <li>• Lentils, chickpeas, beans</li>
                        <li>• Tofu, tempeh (non-GMO)</li>
                        <li>• Cottage cheese (low-fat)</li>
                        <li>• Lean grass-fed beef (moderate)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Healthy Fats & Nuts:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Walnuts (omega-3 for hormones)</li>
                        <li>• Almonds (vitamin E)</li>
                        <li>• Ground flaxseeds (lignans)</li>
                        <li>• Chia seeds (fiber and omega-3)</li>
                        <li>• Extra virgin olive oil</li>
                        <li>• Avocado (if available)</li>
                        <li>• Pumpkin seeds (zinc)</li>
                        <li>• Hemp seeds (complete protein)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Vegetables (Eat Abundantly!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Leafy greens: spinach, kale, collards, arugula</li>
                        <li>• Cruciferous: broccoli, cauliflower, cabbage, Brussels sprouts</li>
                        <li>• Colorful peppers (all varieties)</li>
                        <li>• Tomatoes, cucumbers, zucchini</li>
                        <li>• Carrots, beets (moderate portions)</li>
                        <li>• Asparagus, green beans, snap peas</li>
                        <li>• Mushrooms (vitamin D source)</li>
                        <li>• Onions, garlic (prebiotic fiber)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Low-Sugar Fruits (1-2 servings):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Berries: blueberries, strawberries, raspberries (antioxidant-rich)</li>
                        <li>• Apples with skin (pectin fiber)</li>
                        <li>• Pears (high fiber, GI: 38)</li>
                        <li>• Grapefruit (GI: 25)</li>
                        <li>• Oranges (vitamin C)</li>
                        <li>• Kiwi (vitamin C and E)</li>
                        <li>• Plums, cherries (moderate portions)</li>
                        <li>• Always eat whole, never juiced</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Herbs & Spices (Natural Medicine):</h4>
                    <ul className="text-sm text-gray-700 space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• Turmeric (powerful anti-inflammatory)</li>
                      <li>• Cinnamon (improves insulin sensitivity)</li>
                      <li>• Ginger (reduces inflammation)</li>
                      <li>• Fenugreek seeds (hormone balance)</li>
                      <li>• Spearmint (lowers androgens)</li>
                      <li>• Holy basil/Tulsi (adaptogenic)</li>
                      <li>• Garlic (cardiovascular support)</li>
                      <li>• Cumin, coriander (digestive health)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Foods to Avoid */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">❌ Foods to STRICTLY AVOID with PCOD (Hormone-Disrupting & Inflammatory)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    These foods worsen hormonal imbalance, trigger inflammation, cause blood sugar spikes, and make PCOD symptoms
                    significantly worse. Complete elimination or strict limitation is essential for symptom management and weight loss.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Refined Carbs & Added Sugars:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• White bread, white rice (GI: 75+)</li>
                        <li>• Sugary beverages: soda, energy drinks</li>
                        <li>• Fruit juices (even 100% pure)</li>
                        <li>• Pastries, cakes, muffins, donuts</li>
                        <li>• Cookies, crackers, pretzels</li>
                        <li>• Ice cream, frozen desserts</li>
                        <li>• Candy, chocolate bars, sweets</li>
                        <li>• Breakfast cereals (most varieties)</li>
                        <li>• White pasta, instant noodles</li>
                        <li>• Flavored yogurts (high sugar)</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Processed & Inflammatory Foods:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Fried foods: French fries, fried chicken</li>
                        <li>• Processed meats: bacon, sausages, hot dogs</li>
                        <li>• Trans fats: margarine, shortening</li>
                        <li>• Fast food and takeout meals</li>
                        <li>• Packaged snack foods (chips, etc.)</li>
                        <li>• High-sodium processed foods</li>
                        <li>• Alcohol (disrupts hormone balance)</li>
                        <li>• Excess caffeine (more than 2 cups/day)</li>
                        <li>• Artificial sweeteners (may affect hormones)</li>
                        <li>• Soy products in excess (phytoestrogens)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold mb-2 text-yellow-800 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Foods to Limit (Not Eliminate, But Moderate)
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Dairy products:</strong> Limit to 1 serving daily; may worsen acne in some women</li>
                      <li>• <strong>Red meat:</strong> Limit to 1-2 times per week; choose grass-fed when possible</li>
                      <li>• <strong>Coffee:</strong> Limit to 1-2 cups daily; avoid after 2 PM</li>
                      <li>• <strong>Salt:</strong> Limit sodium to 2,300mg daily; use herbs/spices for flavor</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete 7-Day PCOD Diet Meal Plan (1,400-1,500 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Hormone-balancing, nutrient-dense meal plan with balanced macros (40% carbs, 30% protein, 30% fat) specifically
              designed for PCOD management and sustainable weight loss. Follow consistently for 4-6 weeks to see significant results.
            </p>

            <div className="space-y-6">
              {/* Day 1 */}
              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800">Day 1 - Complete Daily Meal Plan with Nutrition Details</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Early Morning (7:00 AM - Upon Waking):</h4>
                      <p className="text-gray-700">Warm water with lemon (1 glass) + fenugreek water (1 tsp seeds soaked overnight) + 5-6 soaked almonds</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~75 | Benefits: Fenugreek supports hormone balance, almonds provide vitamin E</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Breakfast (8:30 AM):</h4>
                      <p className="text-gray-700">Scrambled eggs (2 whole eggs) with spinach and tomatoes + whole grain toast (1 slice) + avocado (¼ medium) + green tea with cinnamon</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~350 | Carbs: 30g | Protein: 18g | Fat: 16g | Fiber: 7g</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (11:00 AM):</h4>
                      <p className="text-gray-700">Greek yogurt (¾ cup, plain) + mixed berries (½ cup) + ground flaxseeds (1 tbsp)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~180 | Carbs: 22g | Protein: 15g | Fat: 5g | Probiotics for gut health</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Lunch (1:30 PM - Main Meal):</h4>
                      <p className="text-gray-700">Grilled chicken breast (4 oz) + quinoa (¾ cup cooked) + roasted vegetables (broccoli, bell peppers, zucchini) + large leafy salad with olive oil dressing</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~450 | Carbs: 42g | Protein: 35g | Fat: 15g | Fiber: 10g</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM):</h4>
                      <p className="text-gray-700">Apple slices (1 small) + almond butter (1 tbsp) + herbal tea (spearmint or chamomile)</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~150 | Carbs: 20g | Protein: 4g | Fat: 8g</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM - Light & Early):</h4>
                      <p className="text-gray-700">Baked salmon (4 oz) + steamed asparagus and green beans (2 cups) + small baked sweet potato (½ medium) + side salad</p>
                      <p className="text-sm text-gray-500 mt-1">Calories: ~380 | Carbs: 32g | Protein: 30g | Fat: 16g | Omega-3 from salmon</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <p className="text-sm font-semibold text-purple-700">Day 1 Total: 1,585 calories | Carbs: 146g (37%) | Protein: 102g (26%) | Fat: 60g (34%) | Fiber: 27g</p>
                  </div>
                </CardContent>
              </Card>

              {/* Days 2-7 Summary */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-800">Days 2-7: Meal Rotation & Variety Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Breakfast Choices (320-370 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Steel-cut oats with berries, walnuts, chia seeds</li>
                        <li>• Veggie omelet (3 eggs) + whole grain toast</li>
                        <li>• Greek yogurt parfait with granola and fruit</li>
                        <li>• Smoothie bowl: banana, berries, protein powder, flaxseeds</li>
                        <li>• Whole wheat toast + mashed avocado + poached eggs</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Lunch Ideas (420-470 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Turkey and vegetable wrap with hummus</li>
                        <li>• Lentil soup + side salad + whole grain crackers</li>
                        <li>• Chicken Caesar salad (light dressing) + quinoa</li>
                        <li>• Tuna salad on mixed greens + sweet potato</li>
                        <li>• Chickpea and vegetable curry with brown rice</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-gray-800">Dinner Options (350-400 cal):</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Baked cod + roasted Brussels sprouts + quinoa</li>
                        <li>• Turkey meatballs + zucchini noodles + sauce</li>
                        <li>• Grilled chicken + cauliflower rice + veggies</li>
                        <li>• Tofu stir-fry with mixed vegetables + brown rice</li>
                        <li>• Lean beef (4 oz) + roasted vegetables + small potato</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 text-gray-800">Smart Snacks Between Meals (120-180 cal each):</h4>
                    <ul className="text-sm text-gray-700 space-y-1 grid md:grid-cols-2 gap-2">
                      <li>• Handful of mixed nuts (almonds, walnuts)</li>
                      <li>• Carrot and cucumber sticks with hummus (3 tbsp)</li>
                      <li>• Hard-boiled eggs (2) with cherry tomatoes</li>
                      <li>• Apple or pear with nut butter (1 tbsp)</li>
                      <li>• Protein shake (low-sugar, plant or whey)</li>
                      <li>• Edamame (1 cup, lightly salted)</li>
                      <li>• String cheese + handful of berries</li>
                      <li>• Rice cakes (2) with avocado mash</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Supplements Section */}
      <section id="supplements" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center justify-center">
              <Pill className="w-8 h-8 mr-3 text-indigo-600" />
              Essential Supplements for PCOD Management & Weight Loss
            </h2>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-700 mb-6">
                While a healthy diet is the foundation, specific supplements can significantly accelerate PCOD symptom improvement,
                support hormone balance, and enhance weight loss results. Always consult your healthcare provider before starting
                supplements, especially if you're taking medications or planning pregnancy.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-blue-800">Core Supplements (Recommended):</h3>
                  <ul className="text-sm text-gray-700 space-y-3">
                    <li>• <strong>Inositol (Myo-inositol):</strong> 2,000-4,000mg daily. Improves egg quality, regulates cycles,
                      enhances fertility. Take with meals in divided doses (morning and evening).</li>
                    <li>• <strong>Omega-3 Fish Oil:</strong> 1,000-2,000mg EPA+DHA daily. Reduces inflammation, balances hormones,
                      improves skin health. Choose molecularly distilled for purity.</li>
                    <li>• <strong>Vitamin D3:</strong> 2,000-4,000 IU daily. Critical for hormone production, mood regulation,
                      and fertility. Get blood levels tested first (aim for 40-60 ng/mL).</li>
                    <li>• <strong>Magnesium (Glycinate or Citrate):</strong> 300-400mg daily. Reduces PMS symptoms, improves sleep,
                      helps with sugar cravings. Take in evening for better sleep.</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3 text-purple-800">Supporting Supplements (Optional):</h3>
                  <ul className="text-sm text-gray-700 space-y-3">
                    <li>• <strong>Vitex (Chasteberry):</strong> 400mg daily. Natural hormone balancer, regulates menstrual cycles,
                      reduces PMS. May take 3-6 months for full effects.</li>
                    <li>• <strong>NAC (N-Acetyl Cysteine):</strong> 600mg twice daily. Antioxidant that improves fertility,
                      reduces oxidative stress, supports liver detoxification.</li>
                    <li>• <strong>Cinnamon Extract:</strong> 500mg 2-3 times daily. Improves insulin sensitivity, helps regulate
                      blood sugar, may reduce menstrual irregularity.</li>
                    <li>• <strong>B-Complex Vitamins:</strong> One daily. Supports energy production, stress management, hormone
                      metabolism. Choose methylated forms for better absorption.</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">PCOD Success Tips & Lifestyle Changes</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-green-700 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Essential Guidelines
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat balanced meals every 3-4 hours:</strong> Prevents energy crashes and keeps hormones stable</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Drink 8-10 glasses water daily:</strong> Supports detoxification and hormone balance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Exercise 4-5 times weekly:</strong> 30 min moderate activity improves hormone sensitivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Sleep 7-9 hours nightly:</strong> Poor sleep disrupts hormones and increases cravings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Manage stress daily:</strong> Practice yoga, meditation, or deep breathing for 15 minutes</span>
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
                    <span><strong>Skipping meals:</strong> Disrupts blood sugar and worsens hormonal imbalance</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Extreme dieting:</strong> Can worsen PCOD symptoms and slow metabolism</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much cardio:</strong> Excessive exercise raises stress hormones</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring sleep:</strong> Sleep deprivation worsens all PCOD symptoms</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Expecting quick results:</strong> Sustainable change takes 3-6 months</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expected Timeline */}
            <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-7 h-7 text-purple-600 mr-3" />
                Expected Results Timeline for PCOD
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">Week 1-2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Initial Changes</h4>
                    <p className="text-sm text-gray-600">Reduced bloating, better energy, fewer cravings, 2-4 pounds water weight loss</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">Month 1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Visible Improvements</h4>
                    <p className="text-sm text-gray-600">5-8 pounds total loss, improved skin, more regular cycle beginning, better mood</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">Month 2-3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Significant Progress</h4>
                    <p className="text-sm text-gray-600">10-15 pounds loss, regular cycles, clear skin, improved fertility markers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-100 text-pink-700 rounded-full w-24 h-24 flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">Month 4-6</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Goal Achievement</h4>
                    <p className="text-sm text-gray-600">15-25 pounds loss, normalized hormones, regular ovulation, symptom-free living</p>
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized PCOD Diet Plan?</h2>
            <p className="text-xl mb-8">
              Get a fully customized diet plan tailored to your specific symptoms, lifestyle, and goals from our certified nutritionists.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">PCOD Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan + support - <PriceDisplay amountIn={500} amountUs={50} /> </p>
                <Button size="lg" className="w-full bg-white text-purple-600" asChild>
                  <Link href="/contact#contact-form">Book Now - <PriceDisplay amountIn={500} amountUs={50} /></Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">PCOD Workouts</h4>
                <p className="text-yellow-100 text-sm mb-4">Free exercise program</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/pcod">View Workouts</Link>
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
