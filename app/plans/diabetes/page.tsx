import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, TrendingDown, Target, Clock, Droplets, Activity, Info } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import DynamicRelatedContent from "@/components/DynamicRelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "Diabetes Diet Plan 2025 | Best Diet for Type 2 Diabetes Weight Loss USA, UK, Australia",
  description: "Complete diabetes diet plan with low-GI foods, blood sugar control, weight loss strategies, and proven diabetic meal plans. Expert-designed for USA, UK, Canada, Australia.",
  keywords: "diabetes diet plan, diabetic diet, type 2 diabetes diet, diabetes weight loss, diabetic meal plan, low glycemic diet, blood sugar control diet, best foods for diabetes, diabetes food list",
  alternates: {
    canonical: "https://www.fitplanindia.com/plans/diabetes",
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
    title: "Diabetes Diet Plan 2025 | Complete Guide for Blood Sugar Control",
    description: "Expert-designed diabetes diet with proven strategies for blood sugar control, weight loss, and diabetes management.",
    url: "https://www.fitplanindia.com/plans/diabetes",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function DiabetesDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Diabetes Diet Plan", href: "/plans/diabetes" },
  ]

  const tocItems = [
    { id: "can-it-be-reversed", label: "Can I Reverse Diabetes?" },
    { id: "rice-vs-roti", label: "Rice vs Roti Debate" },
    { id: "best-breakfast", label: "Best Indian Breakfasts" },
    { id: "safe-fruits", label: "Mangoes & Bananas?" },
    { id: "plate-method", label: "The diabetic Plate Method" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Can I eat white rice if I have diabetes?",
      answer: "White rice has a very high Glycemic Index (GI), meaning it spikes your blood sugar rapidly. If you must eat rice, switch to single-polished or brown rice. Always eat it WITH a large bowl of dal (protein) and sabzi (fiber) to slow down the sugar absorption."
    },
    {
      question: "Are sugar-free sweeteners safe in India?",
      answer: "Artificial sweeteners like Stevia are generally safe in moderation, but many 'Sugar-Free' products in India (like biscuits or sweets) are packed with Maida (refined flour) and unhealthy trans fats. These will still spike your blood sugar."
    },
    {
      question: "How much weight do I need to lose to reverse Type 2 Diabetes?",
      answer: "Research strongly shows that losing just 10% to 15% of your total body weight (especially belly fat) can drastically reduce insulin resistance and push Type 2 diabetes into remission."
    },
    {
      question: "Can I drink tea/chai with regular sugar?",
      answer: "No. Liquid sugar is the fastest way to spike your blood sugar. Even ½ a teaspoon of sugar in your morning cup of chai goes directly into your bloodstream. Train your tastebuds to drink tea without sugar, or use a natural Stevia drop."
    },
    {
      question: "Are millets (jowar, bajra, ragi) better than wheat?",
      answer: "Yes! Millets are complex carbohydrates. They are high in fiber, which means they digest slowly and do not cause sudden blood sugar spikes. Ragi is excellent for calcium, while Jowar and Bajra are great replacements for regular wheat rotis."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ArticleSchema
        headline="What is the Best Indian Diet for Type 2 Diabetes?"
        description="Cut through the confusion. Learn exactly what to eat to manage and potentially reverse Type 2 diabetes with an Indian diet. Rice vs Roti, safe fruits, and more."
        keywords={["Indian diet chart for diabetic patient", "rice vs roti for diabetes", "can diabetic eat mango", "sugar free indian diet", "reverse type 2 diabetes india"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      <StickyTOC items={tocItems} />
      {/* Hero Answer Section */}
      <section className="bg-gradient-to-br from-red-600 to-rose-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🩸 Diabetes Answer Engine
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What is the Best Indian Diet for Type 2 Diabetes?
            </h1>
            <p className="text-xl text-white mb-8 border-l-4 border-red-300 pl-4 text-left bg-white/10 p-4 rounded-r-lg">
              <strong>The Short Answer:</strong> The best diet for Type 2 diabetes completely eliminates liquid sugar (chai with sugar, juices) and refined carbs (maida/white pasta). Instead, it focuses on <strong>complex carbs (millets, bajra, jowar)</strong>, high protein at every single meal (paneer, eggs, dals), and strictly uses the "Plate Method" to naturally reduce portion sizes and stabilize blood sugar spikes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#can-it-be-reversed">Can I Reverse It?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Q1: Can I Reverse It? */}
      <section id="can-it-be-reversed" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              Is it possible to permanently reverse Type 2 Diabetes?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Yes. Technically, doctors call it "Remission," not a cure. Remission means your HbA1c stays below 6.5% for at least 3 months <em>without</em> taking glucose-lowering medications.
            </p>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100 mb-8">
              <h3 className="font-bold text-lg mb-3 text-red-800">The 3 Pillars of Reversal:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div><strong>Losing Belly Fat:</strong> Visceral fat (the fat around your organs) is the #1 cause of insulin resistance. Losing just 10% of your body weight can strip fat from your liver and pancreas, allowing them to function normally again.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div><strong>Building Muscle:</strong> Muscle is a sponge for blood sugar. The more muscle you have (built through resistance training), the easier your body clears sugar from your blood.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div><strong>Strict Low-GI Diet:</strong> Stop bombarding your pancreas with high-sugar foods. Give it a break by eating foods that digest slowly.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Q2: Rice vs Roti */}
      <section id="rice-vs-roti" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              The Ultimate Debate: Rice or Roti?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Neither white rice nor regular wheat (gehun) roti is "ideal" for diabetes, but one is slightly better.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-t-4 border-t-yellow-500 shadow-sm">
                <CardHeader className="bg-white pb-2">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <TrendingDown className="w-6 h-6 text-yellow-500 mr-2" />
                    White Rice
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700 mb-4">White rice is a refined carbohydrate. It is stripped of its fiber, meaning it digests extremely quickly and hits your bloodstream almost like pure sugar.</p>
                  <p className="font-semibold text-red-600">Verdict: Limit severely.</p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-blue-500 shadow-sm">
                <CardHeader className="bg-white pb-2">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Activity className="w-6 h-6 text-blue-500 mr-2" />
                    Wheat Roti
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700 mb-4">Whole wheat roti is slightly better because it retains some fiber, giving it a moderate Glycemic Index. However, many people overeat rotis (eating 3-4 at a time).</p>
                  <p className="font-semibold text-green-600">Verdict: Better, but portion control is critical (max 2).</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-2">The Real Winner: Millets</h3>
              <p className="text-gray-800">Instead of arguing over Rice vs Wheat, switch to <strong>Jowar, Bajra, Ragi, or Multigrain atta</strong>. They are naturally lower in GI and much higher in fiber, keeping your blood sugar completely stable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Q3: Best Breakfasts */}
      <section id="best-breakfast" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              What is the Best Indian Breakfast for Blood Sugar?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The typical Indian breakfast—poha, upma, idli, cornflakes, or paratha with chai—is a blood sugar disaster. It is 90% carbohydrates and 0% protein, setting you up for cravings and crashes all day long.
            </p>
            <div className="space-y-4">
              <div className="bg-rose-50 p-5 rounded-lg border border-rose-100">
                <h4 className="font-bold text-rose-800">❌ Worst Options:</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Idli with sambar (Rice batter)</li>
                  <li>Poha/Upma (Pure carbs, no protein)</li>
                  <li>Cornflakes or "Diet" Muesli</li>
                  <li>Chai and Biscuits/Rusk/Khari</li>
                </ul>
              </div>
              <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100">
                <h4 className="font-bold text-emerald-800">✅ Best Options:</h4>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li><strong>Moong Dal Chilla:</strong> Stuffed with paneer for high protein.</li>
                  <li><strong>Eggs:</strong> 2 whole boiled eggs or a large masala omelette.</li>
                  <li><strong>Sprouts Salad:</strong> With cucumber, tomato, and peanuts.</li>
                  <li><strong>Oats:</strong> Steel-cut oats cooked with seeds and nuts (no sugar).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q4: Safe Fruits */}
      <section id="safe-fruits" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              Can I Eat Mangoes, Bananas, and Grapes?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Yes, you can eat fruits, but you have to be smart about <strong>which ones</strong> and <strong>how you eat them</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <Card className="border-t-4 border-t-green-500 shadow-sm bg-white">
                <CardHeader className="bg-transparent pb-2">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Safe Fruits (Low GI)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-gray-600">Apples, Papaya, Guava (Amrood), Pears, Oranges, and Berries. You can safely eat 1 portion of these every day.</p>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-red-500 shadow-sm bg-white">
                <CardHeader className="bg-transparent pb-2">
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    Caution Fruits (High Sugar)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-gray-600">Mangoes, Bananas, Grapes, Chikoo, and Custard Apple (Sitaphal). They are high in sugar.</p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-blue-900 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3">The "Clothing" Trick for Fruits:</h3>
              <p className="text-blue-100">Never eat a fruit "naked" (by itself). Always "clothe" your fruit by eating it alongside a handful of nuts (almonds/walnuts) or a protein source. The fat and fiber from the nuts significantly slows down the sugar spike from the fruit in your bloodstream.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Plate Method */}
      <section id="plate-method" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              Stop Counting Calories. Use "The Diabetic Plate"
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Instead of meticulously tracking every calorie, simply visually divide your lunch and dinner plate like this:
            </p>

            <div className="bg-red-50 p-8 rounded-full w-64 h-64 mx-auto flex items-center justify-center border-4 border-red-200 shadow-xl relative mb-8">
              <div className="absolute top-4 left-4 right-4 h-1/2 border-b-2 border-dashed border-red-300 flex items-center justify-center">
                <span className="font-bold text-green-700">50% Vegetables & Salad<br /><span className="text-sm font-normal">(Fiber)</span></span>
              </div>
              <div className="absolute bottom-4 left-4 w-1/2 h-1/2 border-r-2 border-dashed border-red-300 flex items-center justify-center">
                <span className="font-bold text-red-700">25% Protein<br /><span className="text-sm font-normal">(Dal, Paneer, Chicken)</span></span>
              </div>
              <div className="absolute bottom-4 right-4 w-1/2 h-1/2 flex items-center justify-center">
                <span className="font-bold text-yellow-700">25% Carbs<br /><span className="text-sm font-normal">(1 Roti OR a little Rice)</span></span>
              </div>
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto">
              <strong>Eat in this specific order:</strong> 1st: The salad/veggies. 2nd: The protein. 3rd: The carbs. Science proves that eating fiber first lines your stomach and reduces the blood sugar spike of the meal by up to 30%.
            </p>
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

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-rose-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Take Control of Your Blood Sugar Today
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Diet alone isn't enough. Build muscle to clear sugar from your blood, or get a personalized diet plan tailored to your exact HbA1c levels.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm border border-red-500/30">
                <Target className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Diabetes Workout Guide</h4>
                <p className="text-red-100 text-sm mb-4">
                  Learn how resistance training acts as a sponge, soaking up excess sugar from your bloodstream without needing insulin.
                </p>
                <Button size="lg" className="w-full bg-white text-red-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/diabetes">
                    View Workout Guide
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4">
                  Use our AI Coach to generate a customized, step-by-step diet plan designed to lower your HbA1c naturally.
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
            <DynamicRelatedContent topic="diabetes" />
          </div>
        </div>
      </section>
    </div>
  )
}
