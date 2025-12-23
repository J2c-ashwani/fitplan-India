import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, TrendingDown, TrendingUp, Target, ArrowRight, Info } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thyroid Diet Plan 2025 | Complete Guide for Hypothyroidism & Hyperthyroidism USA, UK, Australia",
  description: "Complete thyroid diet guide covering hypothyroidism, hyperthyroidism, Hashimoto's, and Graves' disease. Expert nutrition plans for thyroid health in USA, UK, Canada, Australia.",
  keywords: "thyroid diet plan, thyroid disease diet, hypothyroidism diet, hyperthyroidism diet, thyroid weight loss, thyroid weight gain, Hashimoto's diet, Graves disease diet, thyroid food list",
  openGraph: {
    title: "Thyroid Diet Plan 2025 | Complete Nutrition Guide",
    description: "Expert thyroid diet plans for all thyroid conditions with proven strategies for optimal thyroid health and weight management.",
    url: "https://fitplanindia.com/plans/thyroid",
  },
}

export default function ThyroidDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Thyroid Diet Plan", href: "/plans/thyroid" },
  ]

  const tocItems = [
    { id: "understanding", label: "Understanding Thyroid" },
    { id: "thyroid-types", label: "Hypo vs Hyper" },
    { id: "universal", label: "Universal Principles" },
    { id: "autoimmune", label: "Autoimmune Considerations" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "How do I know if I have hypothyroidism or hyperthyroidism?",
      answer: "ONLY way to know for sure: BLOOD TESTS ordered by doctor. TSH test (thyroid stimulating hormone) is primary screening test: HIGH TSH (above 4-5 mIU/L) = hypothyroidism, LOW TSH (below 0.4 mIU/L) = hyperthyroidism. Comprehensive panel includes: TSH, Free T4, Free T3, thyroid antibodies (TPO, TG for Hashimoto's; TSI for Graves'). SYMPTOMS can suggest but NEVER diagnose: Hypothyroidism = weight GAIN, fatigue, feeling COLD, constipation, depression, dry skin. Hyperthyroidism = weight LOSS, anxiety, feeling HOT, rapid heartbeat, diarrhea, insomnia. CRITICAL: Never self-diagnose! See doctor for proper testing. Many symptoms overlap with other conditions. Treatment differs dramatically between the two - wrong approach can be dangerous!"
    },
    {
      question: "Can thyroid problems be cured permanently or is it lifelong?",
      answer: "Depends on the CAUSE and TYPE: HYPOTHYROIDISM (underactive): Usually LIFELONG for most patients. Hashimoto's (autoimmune) and surgical/radiation-induced hypothyroidism require medication for life. Exception: Temporary hypothyroidism from pregnancy, viral infection (subacute thyroiditis), or certain medications may resolve. HYPERTHYROIDISM (overactive): CAN potentially be cured! Graves' disease: 30-50% achieve remission after 1-2 years antithyroid medication. Radioactive iodine or surgery provides permanent 'cure' but causes hypothyroidism requiring lifelong medication. Toxic nodule: Can be cured with ablation/surgery. REALITY: Most people need lifelong medication (hypothyroidism) or permanent management. BUT with proper treatment, thyroid patients live completely normal, healthy lives. Focus on optimal management, not cure!"
    },
    {
      question: "Why is selenium so important for thyroid health?",
      answer: "Selenium is CRITICAL for thyroid function - thyroid contains MORE selenium per gram than any other organ! Why it matters: 1) CONVERTS T4 to active T3: Selenium-dependent enzymes (deiodinases) activate thyroid hormone - without selenium, you can't use thyroid hormone effectively, 2) PROTECTS thyroid: Antioxidant properties prevent oxidative damage to thyroid tissue, 3) REDUCES antibodies: 200mcg daily selenium significantly lowers thyroid antibodies in Hashimoto's patients (proven in multiple studies), 4) PREVENTS thyroid disease: Selenium deficiency increases thyroid disease risk by 300%. BEST SOURCES: Brazil nuts (1-3 daily = 200mcg - DON'T exceed!), fish (tuna, sardines), sunflower seeds, eggs, chicken. DOSAGE: 200mcg daily optimal for thyroid (don't exceed 400mcg - toxic). Supplement if you can't get from food consistently. Effects visible in 3-6 months!"
    },
    {
      question: "Should I take my thyroid medication with food or on empty stomach?",
      answer: "EMPTY STOMACH - this is CRITICAL for proper absorption! Correct timing: 1) Take 30-60 minutes BEFORE breakfast (optimizes absorption), 2) Same time EVERY day (maintains stable hormone levels - set phone alarm!), 3) With full glass of WATER only (no coffee, juice, milk), 4) Wait 1 hour before COFFEE (caffeine reduces absorption by 30%), 5) Wait 4 hours before CALCIUM or IRON supplements (blocks absorption significantly), 6) Space 4 hours from SOY products (reduces effectiveness), 7) Take 1 hour before high-fiber meals (fiber interferes). ALTERNATIVE timing: Some people take at bedtime (3+ hours after dinner) if morning routine difficult. CONSISTENCY is more important than exact time - pick one schedule and stick to it! Inconsistent timing = fluctuating symptoms. Missing doses or improper timing reduces effectiveness by 40-50%!"
    },
    {
      question: "Can diet alone control my thyroid or do I definitely need medication?",
      answer: "For MOST thyroid conditions, medication is ESSENTIAL - diet alone is NOT enough! Reality check: HYPOTHYROIDISM: Medication (levothyroxine) is almost always required. Your thyroid doesn't produce enough hormone - no amount of food can replace missing hormones. Diet SUPPORTS medication but doesn't replace it. Trying to manage without medication = permanent damage to heart, kidneys, cognition. HYPERTHYROIDISM: Anti-thyroid medication or radioactive iodine/surgery required - condition is dangerous untreated (heart failure, stroke risk). Diet helps manage symptoms but doesn't cure. WHAT DIET CAN DO: Optimize medication effectiveness (proper timing, nutrient support), reduce symptoms (fatigue, weight issues, mood), lower antibodies in autoimmune cases, prevent nutrient deficiencies. BOTTOM LINE: Take your medication as prescribed! Diet is your ally, not replacement. Together = optimal thyroid health. Never stop medication without doctor approval!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-emerald-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-teal-600 font-semibold">
              🦋 Complete Thyroid Nutrition Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Thyroid Diet Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete evidence-based nutrition guide for all thyroid conditions including hypothyroidism (underactive),
              hyperthyroidism (overactive), Hashimoto's thyroiditis, and Graves' disease. Expert-designed diet plans
              for optimal thyroid health, hormone balance, and weight management in USA, UK, Canada, Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#thyroid-types">Find Your Thyroid Type</Link>
              </Button>
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/thyroid">Thyroid Exercise Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Thyroid Disorders */}
      <section id="understanding" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Thyroid Disorders: Complete Overview 2025</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                The thyroid is a small butterfly-shaped gland in your neck that produces hormones (T3 and T4) controlling metabolism,
                energy production, body temperature, heart rate, digestion, mood, and virtually every cell in your body. When the
                thyroid malfunctions, it can cause dramatic effects on weight, energy, mood, and overall health. Thyroid disorders
                affect over 20 million Americans and millions more worldwide, with women being 5-8 times more likely than men to
                develop thyroid problems. The two main categories are hypothyroidism (underactive thyroid - too little hormone
                production) and hyperthyroidism (overactive thyroid - excessive hormone production), each requiring completely
                different dietary and lifestyle approaches.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center mb-3">
                    <TrendingDown className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="font-bold text-xl text-blue-800">Hypothyroidism (Underactive)</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    <strong>Affects:</strong> 4-10% of population (20+ million Americans). Most common thyroid disorder.
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Main Symptoms:</strong> Unexplained weight gain, extreme fatigue, feeling cold, dry skin/hair,
                    constipation, depression, brain fog, muscle weakness, slow heart rate, heavy/irregular periods.
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Common Causes:</strong> Hashimoto's thyroiditis (autoimmune - 90% of cases), iodine deficiency,
                    thyroid surgery/radiation, certain medications, pituitary problems.
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Weight Impact:</strong> Slows metabolism by 20-40%, making weight LOSS very difficult. Need to eat
                    fewer calories than normal metabolism to lose weight.
                  </p>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                    <Link href="/plans/hypothyroidism">
                      Hypothyroidism Diet Plan <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
                    <h3 className="font-bold text-xl text-orange-800">Hyperthyroidism (Overactive)</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    <strong>Affects:</strong> 1-3% of population (fewer than hypothyroidism but more severe).
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Main Symptoms:</strong> Rapid unintentional weight loss, rapid heartbeat/palpitations, excessive
                    sweating/heat intolerance, anxiety/nervousness, tremors, difficulty sleeping, frequent bowel movements,
                    muscle weakness.
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Common Causes:</strong> Graves' disease (autoimmune - 60-80% of cases), toxic nodular goiter,
                    thyroiditis, excessive iodine intake, thyroid medication overdose.
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Weight Impact:</strong> Speeds metabolism by 30-60%, causing rapid weight loss and muscle wasting.
                    Need to eat significantly MORE calories than normal to gain/maintain weight.
                  </p>
                  <Button className="w-full bg-orange-600 text-white hover:bg-orange-700" asChild>
                    <Link href="/plans/hyperthyroidism">
                      Hyperthyroidism Diet Plan <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 text-teal-800 flex items-center">
                  <Info className="w-6 h-6 mr-2" />
                  Key Point: Opposite Conditions Require Opposite Approaches
                </h3>
                <p className="text-gray-700">
                  The most important thing to understand is that hypothyroidism and hyperthyroidism require COMPLETELY OPPOSITE
                  dietary and lifestyle approaches. What helps one condition can significantly harm the other. For example,
                  hypothyroidism patients need to eat LESS to lose weight while hyperthyroidism patients need to eat MUCH MORE
                  to gain weight. Exercise intensity, supplement recommendations, and specific foods also differ dramatically.
                  It's critical to know which type you have and follow the appropriate plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thyroid Types Comparison */}
      <section id="thyroid-types" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hypothyroidism vs Hyperthyroidism: Complete Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="p-4 text-left font-semibold">Aspect</th>
                    <th className="p-4 text-left font-semibold">Hypothyroidism (Underactive)</th>
                    <th className="p-4 text-left font-semibold">Hyperthyroidism (Overactive)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Thyroid Hormone Levels</td>
                    <td className="p-4">LOW T3 and T4, HIGH TSH</td>
                    <td className="p-4">HIGH T3 and T4, LOW or suppressed TSH</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Metabolism</td>
                    <td className="p-4">Slowed by 20-40% (burns 200-600 fewer calories/day)</td>
                    <td className="p-4">Accelerated by 30-60% (burns 400-900 extra calories/day)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Weight Impact</td>
                    <td className="p-4">Weight GAIN (5-20+ lbs) despite diet/exercise</td>
                    <td className="p-4">Weight LOSS (5-20+ lbs) despite eating normally/more</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Energy Levels</td>
                    <td className="p-4">Extreme fatigue, low energy, want to sleep constantly</td>
                    <td className="p-4">Nervous energy, restlessness, difficulty sleeping</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Body Temperature</td>
                    <td className="p-4">Always cold, especially hands/feet</td>
                    <td className="p-4">Always hot, excessive sweating, heat intolerance</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Heart Rate</td>
                    <td className="p-4">Slow heart rate (bradycardia - 50-60 bpm)</td>
                    <td className="p-4">Rapid heart rate (tachycardia - 90-120+ bpm)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Digestion</td>
                    <td className="p-4">Constipation, slow digestive system</td>
                    <td className="p-4">Frequent bowel movements or diarrhea</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Mood</td>
                    <td className="p-4">Depression, brain fog, difficulty concentrating</td>
                    <td className="p-4">Anxiety, irritability, nervousness, panic attacks</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Muscle Impact</td>
                    <td className="p-4">Muscle weakness, joint pain, stiffness</td>
                    <td className="p-4">Muscle wasting, tremors, weakness</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Diet Goal</td>
                    <td className="p-4">LOSE weight (calorie deficit needed)</td>
                    <td className="p-4">GAIN weight (calorie surplus needed)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Calorie Target</td>
                    <td className="p-4">1,400-1,600 calories (lower due to slow metabolism)</td>
                    <td className="p-4">2,500-3,000+ calories (higher due to fast metabolism)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Exercise Approach</td>
                    <td className="p-4">Moderate to high intensity, focus on building metabolism</td>
                    <td className="p-4">LOW intensity only, avoid excessive cardio</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Selenium</td>
                    <td className="p-4">CRITICAL (200mcg daily - improves T3 conversion)</td>
                    <td className="p-4">Beneficial but less critical</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold bg-gray-50">Iodine</td>
                    <td className="p-4">Moderate amounts needed (but avoid excess if Hashimoto's)</td>
                    <td className="p-4">LIMIT/AVOID (can worsen hyperthyroidism)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold bg-gray-50">Treatment</td>
                    <td className="p-4">Levothyroxine (synthetic T4) medication daily, lifelong</td>
                    <td className="p-4">Anti-thyroid drugs (methimazole/PTU), radioactive iodine, or surgery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Thyroid Nutrition Principles */}
      <section id="universal" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Universal Thyroid Nutrition Principles (Apply to All Types)</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                While hypothyroidism and hyperthyroidism require different approaches, certain nutrition principles benefit ALL
                thyroid conditions and support optimal thyroid function, hormone production, and overall health.
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-green-800 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    Foods That Support ALL Thyroid Types
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <h4 className="font-semibold mb-2">Selenium-Rich Foods (Essential!):</h4>
                      <ul className="space-y-1">
                        <li>• Brazil nuts (2-3 daily max - 200mcg selenium each)</li>
                        <li>• Fish: Tuna, sardines, salmon</li>
                        <li>• Sunflower seeds, mushrooms</li>
                        <li>• Chicken, turkey, eggs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Zinc-Rich Foods:</h4>
                      <ul className="space-y-1">
                        <li>• Oysters (highest zinc content)</li>
                        <li>• Pumpkin seeds, hemp seeds</li>
                        <li>• Lean beef, lamb</li>
                        <li>• Chickpeas, lentils</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Iron-Rich Foods:</h4>
                      <ul className="space-y-1">
                        <li>• Red meat (grass-fed beef)</li>
                        <li>• Organ meats (liver)</li>
                        <li>• Spinach, kale (with vitamin C)</li>
                        <li>• Lentils, beans</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">B Vitamin Sources:</h4>
                      <ul className="space-y-1">
                        <li>• Eggs, salmon, chicken</li>
                        <li>• Leafy greens, avocado</li>
                        <li>• Whole grains, legumes</li>
                        <li>• Nutritional yeast (B12 for vegetarians)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-red-800 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2" />
                    Foods ALL Thyroid Patients Should Limit/Avoid
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <h4 className="font-semibold mb-1">Processed Foods & Trans Fats:</h4>
                      <p>Fast food, fried foods, packaged snacks, margarine - increase inflammation, worsen thyroid function</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Excessive Sugar & Refined Carbs:</h4>
                      <p>Soda, candy, white bread, pastries - cause blood sugar spikes, inflammation, worsen symptoms</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Excessive Soy (especially unfermented):</h4>
                      <p>Can interfere with thyroid medication absorption. Space 4+ hours from medication. Moderate amounts okay.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Alcohol:</h4>
                      <p>Disrupts thyroid hormone production, interferes with medication, damages liver (converts T4 to T3)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-blue-800">Critical Medication Timing Rules (All Thyroid Medications)</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Take on empty stomach:</strong> 30-60 minutes before breakfast (optimizes absorption)</li>
                    <li>• <strong>Consistent timing:</strong> Same time every day (maintains stable hormone levels)</li>
                    <li>• <strong>Wait before coffee:</strong> Caffeine reduces absorption by 30% - wait 1 hour after medication</li>
                    <li>• <strong>Space calcium/iron:</strong> Wait 4 hours before taking calcium or iron supplements (blocks absorption)</li>
                    <li>• <strong>Avoid with soy:</strong> Soy products reduce medication effectiveness - space 4 hours apart</li>
                    <li>• <strong>High-fiber caution:</strong> Take medication 1 hour before high-fiber meals for best absorption</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autoimmune Considerations */}
      <section id="autoimmune" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Special Considerations for Autoimmune Thyroid Disease</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-purple-200">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-purple-800">Hashimoto's Thyroiditis (Autoimmune Hypothyroidism)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    90% of hypothyroidism cases in developed countries are caused by Hashimoto's - an autoimmune condition where
                    your immune system attacks your thyroid gland. This requires additional dietary considerations beyond standard
                    hypothyroidism management.
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <h4 className="font-semibold mb-1 text-purple-800">Consider Gluten-Free Diet:</h4>
                      <p>70-80% of Hashimoto's patients improve on gluten-free diet. Gluten molecular structure mimics thyroid
                        tissue (molecular mimicry), triggering autoimmune attacks. Try eliminating 3-6 months.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-purple-800">Anti-Inflammatory Focus:</h4>
                      <p>Omega-3 fatty acids (fish oil, fatty fish, walnuts, flaxseeds), turmeric, ginger, green tea reduce
                        inflammation and autoimmune antibodies.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-purple-800">Avoid Excess Iodine:</h4>
                      <p>High iodine intake can worsen Hashimoto's and increase thyroid antibodies. Moderate iodine from food is
                        okay, but avoid kelp/seaweed supplements and excessive iodized salt.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-purple-800">Selenium Critical:</h4>
                      <p>200mcg daily selenium significantly reduces thyroid antibodies (TPO and TG) in Hashimoto's patients within
                        3-6 months. Brazil nuts or supplement.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader className="bg-orange-50">
                  <CardTitle className="text-orange-800">Graves' Disease (Autoimmune Hyperthyroidism)</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    60-80% of hyperthyroidism cases are caused by Graves' disease - an autoimmune condition where antibodies
                    stimulate thyroid to overproduce hormones. Requires specific dietary considerations beyond standard
                    hyperthyroidism management.
                  </p>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <h4 className="font-semibold mb-1 text-orange-800">Strictly Avoid Iodine:</h4>
                      <p>Excess iodine can trigger or worsen Graves' disease flares. Avoid kelp, seaweed, iodine supplements,
                        excessive iodized salt. Get only moderate amounts from whole foods.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-orange-800">Anti-Inflammatory Diet:</h4>
                      <p>Reduce autoimmune antibody levels with omega-3 fatty acids, antioxidant-rich foods (berries, leafy greens),
                        turmeric, and eliminating processed foods.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-orange-800">Calcium Priority:</h4>
                      <p>Graves' disease significantly increases bone calcium loss and osteoporosis risk. Prioritize 1,200-1,500mg
                        calcium daily from food and supplements plus vitamin D3.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-orange-800">L-Carnitine May Help:</h4>
                      <p>Research shows L-carnitine (1,000-2,000mg daily) may reduce Graves' symptoms including heart palpitations
                        and anxiety. Discuss with endocrinologist.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Plan CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choose Your Specific Thyroid Diet Plan</h2>
            <p className="text-center text-gray-600 mb-12">
              Select the plan that matches your thyroid condition for personalized nutrition guidance, meal plans, and proven strategies.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center">
                    <TrendingDown className="w-8 h-8 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-800">Hypothyroidism (Underactive)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    Complete diet plan for weight LOSS with underactive thyroid including metabolism-boosting foods, supplements,
                    and proven strategies.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ 7-day meal plan (1,400-1,600 calories)</li>
                    <li>✓ Selenium & zinc-rich foods</li>
                    <li>✓ Essential supplements guide</li>
                    <li>✓ Exercise recommendations</li>
                  </ul>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                    <Link href="/plans/hypothyroidism">
                      View Hypothyroidism Plan <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-orange-50">
                  <div className="flex items-center">
                    <TrendingUp className="w-8 h-8 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-800">Hyperthyroidism (Overactive)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    Complete diet plan for weight GAIN with overactive thyroid including high-calorie foods, bone protection,
                    and symptom management.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ 7-day meal plan (2,500-3,000 calories)</li>
                    <li>✓ Calorie-dense healthy foods</li>
                    <li>✓ Calcium & bone health focus</li>
                    <li>✓ Gentle exercise guidelines</li>
                  </ul>
                  <Button className="w-full bg-orange-600 text-white hover:bg-orange-700" asChild>
                    <Link href="/plans/hyperthyroidism">
                      View Hyperthyroidism Plan <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Thyroid Diet Plan?</h2>
            <p className="text-xl mb-8">
              Get a fully customized diet plan tailored to your specific thyroid condition, symptoms, lab values, and health goals
              from our certified thyroid nutritionists.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Thyroid Specialist Consultation</h4>
                <p className="text-white text-sm mb-4">
                  Personalized thyroid diet plan + supplement recommendations + lifestyle guidance - <PriceDisplay amountIn={500} amountUs={50} />
                </p>
                <Button size="lg" className="w-full bg-white text-teal-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/contact">Book Consultation - <PriceDisplay amountIn={500} amountUs={50} /></Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Target className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Thyroid Exercise Guide</h4>
                <p className="text-yellow-100 text-sm mb-4">
                  Complete workout program designed for thyroid patients - completely free!
                </p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900 hover:bg-yellow-600 font-semibold" asChild>
                  <Link href="/workouts/thyroid">View Exercise Guide</Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              🦋 Join thousands of thyroid patients worldwide successfully managing their condition with FitPlan India's expert guidance
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
            <RelatedContent />
          </div>
        </div>
      </section>
    </div>
  )
}
