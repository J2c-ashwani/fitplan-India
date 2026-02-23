import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, TrendingDown, TrendingUp, Target, ArrowRight, Info } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import DynamicRelatedContent from "@/components/DynamicRelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "Thyroid Diet Plan 2025 | Complete Guide for Hypothyroidism & Hyperthyroidism USA, UK, Australia",
  description: "Complete thyroid diet guide covering hypothyroidism, hyperthyroidism, Hashimoto's, and Graves' disease. Expert nutrition plans for thyroid health in USA, UK, Canada, Australia.",
  keywords: "thyroid diet plan, thyroid disease diet, hypothyroidism diet, hyperthyroidism diet, thyroid weight loss, thyroid weight gain, Hashimoto's diet, Graves disease diet, thyroid food list",
  alternates: {
    canonical: "https://www.fitplanindia.com/plans/thyroid",
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
    title: "Thyroid Diet Plan 2025 | Complete Nutrition Guide",
    description: "Expert thyroid diet plans for all thyroid conditions with proven strategies for optimal thyroid health and weight management.",
    url: "https://www.fitplanindia.com/plans/thyroid",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function ThyroidDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Thyroid Diet Plan", href: "/plans/thyroid" },
  ]

  const tocItems = [
    { id: "testing", label: "Right Thyroid Blood Tests" },
    { id: "hypo-diet", label: "Hypothyroidism (Underactive) Diet" },
    { id: "hyper-diet", label: "Hyperthyroidism (Overactive) Diet" },
    { id: "medication-rules", label: "Medication Timing Rules" },
    { id: "supplements", label: "Crucial Supplements" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Which Indian foods are bad for Thyroid (Goitrogens)?",
      answer: "Cruciferous vegetables like cabbage (patta gobhi), cauliflower (phool gobhi), and broccoli contain goitrogens, which can interfere with thyroid function. However, you do NOT need to avoid them entirely. Cooking, boiling, or steaming these vegetables destroys the goitrogens, making them safe to eat in moderation."
    },
    {
      question: "Is Soya safe for Thyroid patients in India?",
      answer: "Soy products (like soya chunks, tofu, soy milk) contain isoflavones that can interfere with your body's ability to absorb thyroid medication (Levothyroxine/Thyronorm). If you eat soy, you must wait at least 4 hours after taking your morning thyroid pill."
    },
    {
      question: "Why is it so hard to lose weight with Hypothyroidism?",
      answer: "Hypothyroidism slows down your basal metabolic rate (BMR) by 15-30%. This means your body burns fewer calories at rest. To lose weight, you have to eat a slight calorie deficit, prioritize high-protein Indian meals (like paneer, dal, eggs), and build muscle through strength training to naturally raise your BMR."
    },
    {
      question: "Should I take Thyronorm medicine with tea or coffee?",
      answer: "Absolutely NOT. Thyroid medication must be taken on a completely empty stomach with plain water only. Wait at least 60 minutes before drinking tea, coffee, or eating breakfast. Caffeine and food drastically reduce the absorption of the medicine."
    },
    {
      question: "Can Yoga cure Thyroid?",
      answer: "Yoga cannot 'cure' an autoimmune thyroid condition (like Hashimoto's) or restart a dead thyroid gland, but it is highly effective at managing stress and lowering cortisol. Poses like Ujjayi breathing, Sarvangasana (Shoulder Stand), and Halasana (Plough Pose) improve blood circulation to the neck area."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ArticleSchema
        headline="What is the Best Indian Diet for Thyroid? (Hypo & Hyper)"
        description="Clear confusion on thyroid diets. Learn exactly what to eat for Hypothyroidism vs Hyperthyroidism, Indian goitrogens, medication rules, and supplements."
        keywords={["Indian thyroid diet chart", "hypothyroidism diet for weight loss indian", "hyperthyroidism diet indian", "thyroid foods to avoid in india", "thyronorm empty stomach"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      <StickyTOC items={tocItems} />
      {/* Hero Answer Section */}
      <section className="bg-gradient-to-br from-teal-600 to-emerald-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🦋 Thyroid Answer Engine
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What is the Best Indian Diet for Thyroid Constraints?
            </h1>
            <p className="text-xl text-white mb-8 border-l-4 border-teal-300 pl-4 text-left bg-white/10 p-4 rounded-r-lg">
              <strong>The Short Answer:</strong> First, you must know your type. If you have <strong>Hypothyroidism (weight gain, low energy)</strong>, the best diet focuses on Selenium (Brazil nuts), Iodine (iodized salt), protein, and strict medication timing. If you have <strong>Hyperthyroidism (weight loss, anxiety)</strong>, you need a high-calorie diet and must avoid excess iodine (no seaweed/kelp). In both cases, Indian goitrogens (cabbage, cauliflower) are safe <em>only</em> if fully cooked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#testing">Skip to Testing Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Q1: Deep Dive on Testing */}
      <section id="testing" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              How Do I Know Which Thyroid Diet to Follow?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              You cannot guess your diet based on symptoms alone. You must get a comprehensive thyroid panel blood test. Most doctors in India only check TSH, which is incomplete.
            </p>
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 mb-8">
              <h3 className="font-bold text-lg mb-3 text-teal-800">The 4 Tests You Actually Need:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div><strong>TSH (Thyroid Stimulating Hormone):</strong> The brain's signal to the thyroid. High TSH means Hypo (underactive). Low TSH means Hyper (overactive).</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div><strong>Free T4:</strong> The inactive hormone your thyroid produces.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div><strong>Free T3:</strong> The active hormone your cells actually use for energy and metabolism.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div><strong>Anti-TPO & Anti-TG Antibodies:</strong> Crucial to check for Hashimoto's or Graves' disease (Autoimmune conditions).</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Q2: Hypothyroidism */}
      <section id="hypo-diet" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              What is the Best Diet for Hypothyroidism (Weight Gain)?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If your thyroid is underactive, your metabolism is slow. Your goal is to provide raw nutrients so your body can convert inactive T4 into active T3 hormone, while maintaining a calorie deficit to lose weight.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-t-4 border-t-blue-600 shadow-sm">
                <CardHeader className="bg-white pb-2">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <TrendingDown className="w-6 h-6 text-blue-600 mr-2" />
                    Foods to Add
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" /> <strong>Selenium sources:</strong> 2 Brazil nuts a day, eggs, chicken, sunflower seeds.</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" /> <strong>Zinc sources:</strong> Pumpkin seeds, lentils (masoor dal), chickpeas (chole).</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" /> <strong>Tyrosine sources:</strong> Paneer, milk, almonds, sesame seeds (til).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-red-600 shadow-sm">
                <CardHeader className="bg-white pb-2">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
                    Foods to Limit/Avoid
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start"><AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" /> <strong>Raw Goitrogens:</strong> Raw cabbage, cauliflower, broccoli (always cook them).</li>
                    <li className="flex items-start"><AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" /> <strong>Processed Soy:</strong> Soya chunks, soy milk (interferes with meds).</li>
                    <li className="flex items-start"><AlertCircle className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" /> <strong>Sugar & Maida:</strong> Worsens inflammation and weight gain.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Q3: Hyperthyroidism */}
      <section id="hyper-diet" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              What is the Best Diet for Hyperthyroidism (Weight Loss)?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If your thyroid is overactive, your metabolism is dangerously fast. You are burning calories rapidly and likely losing muscle. Your goal is to slow down hormone production, eat a calorie surplus to regain weight, and protect your bones (which are at risk).
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-t-4 border-t-orange-600 shadow-sm bg-orange-50/50">
                <CardHeader className="bg-transparent pb-2">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <TrendingUp className="w-6 h-6 text-orange-600 mr-2" />
                    Crucial Approach
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" /> <strong>Avoid Iodine:</strong> Strictly avoid iodized salt, seaweed, kelp, and seafood. Excess iodine fuels an overactive thyroid. Use non-iodized rock salt (sendha namak).</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" /> <strong>High Calcium:</strong> Hyperthyroidism leaches calcium from bones. Eat lots of curd (dahi), paneer, ragi, and almonds.</li>
                    <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" /> <strong>Goitrogens are Good:</strong> Unlike Hypothyroidism, eating raw cabbage or cauliflower can actually help slow down an overactive thyroid.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Medication Rules */}
      <section id="medication-rules" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                The Iron-Clad Rules of Thyroid Medication
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                (For Levothyroxine / Thyronorm / Eltroxin) - Breaking these rules is the #1 reason patients feel terrible despite taking their medicine.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-800/50 p-4 rounded-lg flex items-start">
                  <div className="bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg">Empty Stomach Rule</h4>
                    <p className="text-blue-200">Take it first thing in the morning with plain water. Wait exactly 60 minutes before putting anything else in your mouth (especially tea/chai).</p>
                  </div>
                </div>
                <div className="bg-blue-800/50 p-4 rounded-lg flex items-start">
                  <div className="bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg">The 4-Hour Rule</h4>
                    <p className="text-blue-200">You must wait 4 hours after taking your thyroid pill before taking Iron supplements, Calcium supplements, Antacids (like Gelusil/Pan-D), or eating heavy Soya products.</p>
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

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Thyroid Management Plan
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Diet is only half the battle. Get your personalized plan or start the right exercise protocol for your thyroid type.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm border border-teal-500/30">
                <Target className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Thyroid Exercise Protocol</h4>
                <p className="text-teal-100 text-sm mb-4">
                  Learn exactly how to train to fix a slow metabolism (Hypo) or safely exercise without burning muscle (Hyper).
                </p>
                <Button size="lg" className="w-full bg-white text-teal-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/thyroid">
                    View Workout Guide
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4">
                  Use our AI Coach to create a complete Thyroid diet and workout plan tailored specifically to your lab results.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
            <DynamicRelatedContent topic="thyroid" />
          </div>
        </div>
      </section>
    </div>
  )
}
