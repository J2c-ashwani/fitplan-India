import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"
import { CheckCircle, AlertCircle, Flame, Clock, Apple, XCircle, Droplets, Zap, TrendingUp, Info, Heart } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "Keto Diet Plan for Indians 2025 | Indian Ketogenic Diet Weight Loss Guide",
  description: "Complete keto diet plan for Indians with vegetarian and non-vegetarian options, Indian keto foods, meal plans, and proven weight loss strategies. Expert-designed for India.",
  keywords: "keto diet plan India, Indian keto diet, ketogenic diet for Indians, keto Indian food, keto vegetarian Indian, low carb diet India, keto meal plan India, Indian keto recipes",
  alternates: {
    canonical: "https://www.fitplanindia.com/plans/keto-diet",
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
    title: "Keto Diet Plan for Indians 2025 | Complete Guide",
    description: "Expert-designed ketogenic diet for Indians with authentic Indian foods, vegetarian options, and proven fat loss strategies.",
    url: "https://www.fitplanindia.com/plans/keto-diet",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function KetoIndianDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Keto Diet", href: "/plans/keto" },
  ]

  const tocItems = [
    { id: "understanding", label: "Keto Guide" },
    { id: "challenges", label: "Keto Flu & Mistakes" },
    { id: "foods", label: "Indian Keto Foods" },
    { id: "meal-plan", label: "Meal Plan" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Can I eat dal on a keto diet?",
      answer: "Generally, no. A standard bowl of dal has 20-30g of net carbs, which can take up your entire daily allowance. If you must, restrict it to 1-2 tbsp as a 'gravy' or prioritize thicker dals like moong dal chilla in very limited quantities, but for strict keto, it's best to rely on paneer, eggs, and meats for protein."
    },
    {
      question: "How do I know if I'm in ketosis?",
      answer: "The surest signs are: loss of appetite (not hungry for hours), 'fruity' breath (acetone), increased thirst/urination, and rapid initial weight loss. You can also use urine strips (Ketostix) or a blood ketone meter (aim for 0.5-3.0 mmol/L). If you have sustained energy and no cravings, you are likely fat-adapted."
    },
    {
      question: "Can I have cheat meals on keto?",
      answer: "Unlike other diets, a 'cheat meal' on keto can kick you out of ketosis for 2-3 days, stopping fat burning and causing water retention bloat. It's not worth it. If you crave carbs, have a 'keto treat' like berries with cream or a keto-friendly dessert made with stevia and almond flour instead."
    },
    {
      question: "Is keto safe for long-term use?",
      answer: "For most healthy people, yes. However, it requires ensuring you get enough electrolytes and micronutrients. Many people cycle keto (e.g., 3-6 months keto, then low-carb maintenance). If you have kidney issues, gallbladder issues, or type 1 diabetes, consult a doctor before starting."
    },
    {
      question: "I'm vegetarian. Can I do keto without meat?",
      answer: "Absolutely! Indian vegetarian keto is very popular. Rely on Paneer (cottage cheese), Cheese, Ghee, Coconut Oil, Yogurt (full fat), Nuts (almonds/walnuts), and low-carb veggies (spinach, cauliflower, bottle gourd). Our vegetarian meal plan below is specifically designed for this."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ArticleSchema
        headline="Keto Diet Plan for Indians 2025 | Complete Ketogenic Guide"
        description="Complete keto diet plan for Indians with vegetarian and non-vegetarian options, Indian keto foods, and meal plans."
        keywords={["keto diet india", "indian keto plan", "ketogenic diet", "low carb indian food", "fat loss"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-fuchsia-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-purple-600 font-semibold">
              🔥 High Fat, Low Carb
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Keto Diet Plan for Indians 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete ketogenic diet plan specially designed for Indians with authentic desi foods, both vegetarian and non-vegetarian
              options. Proven weight loss strategy using low-carb, high-fat Indian meals including paneer, ghee, coconut, and Indian
              vegetables. Achieve ketosis naturally with traditional Indian ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View Indian Keto Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/keto">Keto Exercise Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl mt-12">
        <ExpertNote
          title="Ayurvedic Perspective on Keto"
          content="While Keto is effective for weight loss, it increases 'Pitta' (heat) in the body due to high fat intake. I recommend an 'Ayurvedic Keto' approach: focus on cooling fats like Ghee and Coconut oil, and avoid excessive red meat or spicy cheeses. Drink coriander water to balance the heat."
        />
      </div>

      {/* Key Stats */}
      <section id="understanding" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">70% Fat</div>
                <div className="text-gray-600">Daily Macros</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-fuchsia-600 mb-2">20-50g</div>
                <div className="text-gray-600">Max Net Carbs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">2-4 weeks</div>
                <div className="text-gray-600">Enter Ketosis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">0.5-1 kg/week</div>
                <div className="text-gray-600">Fat Loss Rate</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Keto Diet: Complete Guide for Indians</h2>
              <p className="text-lg text-gray-700 mb-6">
                The ketogenic (keto) diet is a very low-carbohydrate (5-10% of calories), high-fat (70-75% of calories), moderate-protein
                (20-25% of calories) eating pattern that forces the body to burn fat for fuel instead of carbohydrates. Normally, your body
                runs on glucose (sugar) from carbs as its primary energy source. When you drastically reduce carbs to 20-50g net carbs daily
                (total carbs minus fiber), your body depletes glycogen stores within 2-4 days and enters a metabolic state called "ketosis."
                In ketosis, the liver converts fat into ketone bodies (acetoacetate, beta-hydroxybutyrate, acetone) which become the brain and
                body's primary fuel source instead of glucose. This metabolic shift promotes rapid fat burning (0.5-1 kg weekly), dramatic
                appetite suppression (ketones are natural appetite suppressants), stable energy without blood sugar crashes, improved mental
                clarity and focus, and significant weight loss especially from stubborn belly fat.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The challenge for Indians is that traditional Indian cuisine is extremely carbohydrate-heavy - roti, rice, dal, potatoes,
                sweets form the foundation of most meals, making standard keto (under 50g carbs daily) seem impossible with desi foods. However,
                <strong> keto diet is absolutely achievable with Indian foods</strong> by making strategic substitutions: replace rice/roti with
                cauliflower rice or almond flour rotis, use paneer (cottage cheese) and full-fat dahi (yogurt) as protein/fat sources instead of
                dal, cook vegetables in generous amounts of ghee and coconut oil for healthy fats, include non-starchy vegetables (palak,
                bhindi, methi, lauki, tinda, karela), choose fatty meats (chicken thighs, mutton, fish) over lean cuts, use coconut-based
                gravies instead of tomato-onion bases (high carb), and flavor with Indian spices (haldi, jeera, dhania, garam masala - all
                keto-friendly). This comprehensive Indian keto diet plan provides authentic desi meal options, both vegetarian and non-vegetarian,
                that maintain traditional flavors while achieving ketosis and rapid fat loss.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-purple-800">Benefits of Keto Diet</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Rapid weight loss:</strong> 0.5-1 kg weekly, especially belly fat</li>
                    <li>• <strong>Appetite suppression:</strong> Feel full for 4-6 hours, no constant hunger</li>
                    <li>• <strong>Stable energy:</strong> No blood sugar crashes, consistent energy all day</li>
                    <li>• <strong>Mental clarity:</strong> Improved focus, concentration, no brain fog</li>
                    <li>• <strong>Diabetes control:</strong> Dramatically lower blood sugar and insulin</li>
                    <li>• <strong>PCOS improvement:</strong> Reduces insulin resistance, balances hormones</li>
                    <li>• <strong>Reduced inflammation:</strong> Less joint pain, clearer skin</li>
                    <li>• <strong>Heart health:</strong> Increases HDL (good cholesterol), lowers triglycerides</li>
                  </ul>
                </div>

                <div className="bg-fuchsia-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-fuchsia-800">Indian Keto Diet Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Under 50g net carbs:</strong> 20-50g daily to maintain ketosis</li>
                    <li>• <strong>High healthy fats:</strong> Ghee, coconut oil, nuts, avocado (70% calories)</li>
                    <li>• <strong>Moderate protein:</strong> 1.5-2g per kg body weight (not excess)</li>
                    <li>• <strong>Eliminate rice/roti/dal:</strong> Replace with low-carb Indian alternatives</li>
                    <li>• <strong>Paneer is king:</strong> Perfect Indian keto protein+fat source</li>
                    <li>• <strong>Generous ghee use:</strong> 3-4 tbsp daily for fat macros</li>
                    <li>• <strong>Non-starchy vegetables:</strong> Palak, bhindi, cauliflower, lauki</li>
                    <li>• <strong>Hydration + electrolytes:</strong> 3-4L water, salt, magnesium critical</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keto Challenges */}
      <section id="challenges" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Ketosis and Common Challenges</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                Successfully entering and maintaining ketosis requires understanding the metabolic process and managing common side effects,
                especially in the initial adaptation phase (first 2-4 weeks).
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-blue-800 mb-3 flex items-center">
                    <Flame className="w-6 h-6 mr-2" />
                    1. How to Enter Ketosis (Timeline & Process)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Ketosis doesn't happen immediately - it requires 2-4 days of carb restriction (under 50g net carbs) to deplete liver and
                    muscle glycogen stores. Day 1-2: Body still burning glucose, glycogen depleting. Day 3-4: Glycogen depleted, liver starts
                    producing ketones, entering early ketosis. Day 5-7: Deeper ketosis, blood ketones rising (0.5-3.0 mmol/L optimal). Week 2-4:
                    "Keto-adapted" - body efficiently burning fat, high energy returns. Can measure ketosis with: blood ketone meter (most
                    accurate, 0.5-3.0 mmol/L range), urine ketone strips (less accurate after adaptation), or breath ketone analyzer.
                  </p>
                  <p className="text-sm text-gray-600">
                    You'll KNOW you're in ketosis when: dramatic appetite reduction (not hungry for 4-6 hours), bad breath (acetone smell -
                    fruity/metallic), increased urination (glycogen stores release water), rapid initial weight loss (2-4 kg in first week -
                    mostly water), increased energy and mental clarity (after adaptation), and no cravings for carbs/sweets. Stay strict under
                    50g net carbs daily - even one high-carb meal kicks you out of ketosis, requiring 2-3 days to re-enter.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-yellow-800 mb-3 flex items-center">
                    <Zap className="w-6 h-6 mr-2" />
                    2. "Keto Flu" - Temporary Side Effects (Week 1-2)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Most people experience "keto flu" during the first 3-7 days as the body transitions from glucose to ketone burning. Symptoms
                    include: fatigue and weakness (low energy as body adapts), headaches (from dehydration and electrolyte loss), dizziness and
                    lightheadedness, nausea and stomach upset, irritability and mood swings ("carb withdrawal"), muscle cramps and soreness, brain
                    fog and difficulty concentrating, and insomnia (temporary sleep disruption). This is NOT dangerous - just uncomfortable as your
                    metabolism shifts.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solutions to minimize keto flu:</strong> Increase salt intake (5-7g daily - add to food liberally, drink bone broth,
                    salted lemon water), supplement magnesium (300-400mg daily - reduces cramps, headaches), supplement potassium (2,000-4,000mg
                    from supplements or low-sodium salt/lite salt), drink 3-4 liters water daily (dehydration worsens symptoms), don't cut calories
                    too low initially (eat to satiety while adapting), get adequate sleep (7-9 hours), and be patient - symptoms resolve within
                    7-10 days as you become "keto-adapted." After adaptation, energy skyrockets and you feel amazing!
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-red-800 mb-3 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2" />
                    3. Common Mistakes That Prevent Ketosis
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Many Indians struggle to achieve ketosis due to hidden carbs in desi foods and common mistakes: eating too many carbs from
                    "healthy" foods (dal has 20g carbs per bowl, carrots/beets are high-carb vegetables, onion-tomato gravies add up quickly),
                    eating excess protein (over 2g per kg converts to glucose via gluconeogenesis, blocking ketosis), not eating enough fat
                    (70% fat needed - use generous ghee, coconut oil, nuts), drinking milk (12g carbs per cup - switch to cream, coconut milk),
                    fruit consumption (even "healthy" fruits like banana, apple, mango are too high-carb), and "cheat days" or "carb cycling"
                    (kicks you out of ketosis, requires 2-3 days to re-enter - ruins progress).
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Indian-specific mistakes:</strong> Eating dal thinking it's protein (it's actually carb-heavy - 1 bowl = 20g net carbs),
                    using onion-tomato gravy bases (onions 5g carbs per medium, tomatoes 3g carbs per medium - adds up fast!), consuming paneer/dahi
                    in insufficient amounts (need 150-200g paneer daily for adequate fat/protein), not tracking carbs properly (eyeballing doesn't
                    work - must weigh and track everything initially), and giving up too soon (takes 2-3 weeks for body to adapt - most quit before
                    experiencing benefits). Use a carb tracking app (like MyFitnessPal) religiously for first month.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-orange-800 mb-3 flex items-center">
                    <Droplets className="w-6 h-6 mr-2" />
                    4. Is Keto Safe Long-Term? (Considerations)
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Keto diet is generally safe for most healthy adults when done properly with nutrient-dense foods. However, certain people should
                    avoid or modify keto: people with kidney disease (high protein can worsen), people with gallbladder problems or no gallbladder
                    (difficulty digesting high fat), pregnant/breastfeeding women (need carbs for fetal development, milk production), people with
                    eating disorder history (restrictive nature can trigger), and people on diabetes medications (risk of hypoglycemia - work with
                    doctor to adjust medications).
                  </p>
                  <p className="text-sm text-gray-600">
                    Most people do keto for 3-6 months for weight loss, then transition to moderate low-carb (75-100g carbs daily) for maintenance.
                    Some people thrive on keto long-term (years), while others feel better with more carbs. Listen to your body - if energy remains
                    low after 4-6 weeks adaptation, athletic performance suffers significantly, mood/sleep worsens, or you develop nutrient deficiencies
                    (hair loss, fatigue), consider adding back some healthy carbs. Keto is a tool, not a religion - use it when it serves your goals,
                    modify or transition when needed. Always consult doctor before starting, especially if you have medical conditions or take medications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Keto Foods */}
      <section id="foods" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Indian Keto Food List: What to Eat & Avoid</h2>

            <div className="space-y-8">
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Best Indian Foods for Keto Diet</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Protein + Fat Sources:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Paneer (cottage cheese):</strong> Perfect keto food! 20g protein, 20g fat per 100g, 3g net carbs</li>
                        <li>• <strong>Full-fat dahi (yogurt):</strong> Plain, unsweetened</li>
                        <li>• <strong>Eggs:</strong> Unlimited! Boiled, omelette, bhurji</li>
                        <li>• <strong>Chicken (thighs, legs):</strong> Skin-on for fat</li>
                        <li>• <strong>Mutton:</strong> Fatty cuts, excellent keto meat</li>
                        <li>• <strong>Fish:</strong> Salmon, rawas, surmai (fatty fish best)</li>
                        <li>• <strong>Prawns, crab:</strong> Low carb seafood</li>
                        <li>• <strong>Cheese (cheddar, mozzarella):</strong> High fat, low carb</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Healthy Fats (Use Liberally!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Ghee (clarified butter):</strong> 3-4 tbsp daily! Perfect Indian fat</li>
                        <li>• <strong>Coconut oil:</strong> MCT-rich, great for cooking</li>
                        <li>• <strong>Coconut cream (malai):</strong> Thick part of canned coconut milk</li>
                        <li>• <strong>Butter:</strong> Full-fat, unsalted</li>
                        <li>• <strong>Olive oil:</strong> For salads, low-heat cooking</li>
                        <li>• <strong>Nuts:</strong> Almonds, walnuts, macadamia (20-30g daily)</li>
                        <li>• <strong>Seeds:</strong> Chia, flax, pumpkin, sunflower</li>
                        <li>• <strong>Avocado:</strong> (if available) - half daily</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Low-Carb Vegetables:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Palak (spinach):</strong> 1g net carb per cup</li>
                        <li>• <strong>Methi (fenugreek leaves):</strong> Very low carb</li>
                        <li>• <strong>Bhindi (okra/ladyfinger):</strong> 4g net carbs per cup</li>
                        <li>• <strong>Cauliflower (phool gobi):</strong> Rice substitute! 3g per cup</li>
                        <li>• <strong>Lauki (bottle gourd):</strong> 3g net carbs per cup</li>
                        <li>• <strong>Tinda (Indian squash):</strong> Low carb</li>
                        <li>• <strong>Karela (bitter gourd):</strong> 2g net carbs per cup</li>
                        <li>• <strong>Cabbage (patta gobi):</strong> 2g net carbs per cup</li>
                        <li>• <strong>Bell peppers (shimla mirch):</strong> Moderate, 4g per cup</li>
                        <li>• <strong>Broccoli:</strong> 4g net carbs per cup</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Keto-Friendly Indian Condiments:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>All Indian spices:</strong> Haldi, jeera, dhania, garam masala (0 carbs!)</li>
                        <li>• <strong>Green chutney:</strong> Coriander-mint (no sugar added)</li>
                        <li>• <strong>Coconut chutney:</strong> Fresh coconut + green chillies</li>
                        <li>• <strong>Pickle (achar):</strong> Small amounts, check sugar content</li>
                        <li>• <strong>Lemon juice:</strong> Fresh, unlimited</li>
                        <li>• <strong>Ginger-garlic paste:</strong> Small amounts (has some carbs)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Keto Indian Beverages:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Water:</strong> 3-4L daily + electrolytes</li>
                        <li>• <strong>Chai (tea):</strong> Without sugar, with cream (not milk)</li>
                        <li>• <strong>Coffee:</strong> Black or with cream, MCT oil (bulletproof coffee)</li>
                        <li>• <strong>Coconut water:</strong> Small amounts only (has carbs)</li>
                        <li>• <strong>Lemon water:</strong> With salt, unlimited</li>
                        <li>• <strong>Green tea:</strong> Plain, unsweetened</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">❌ Indian Foods to COMPLETELY AVOID on Keto</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">High-Carb Indian Staples (NO!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Rice (chawal):</strong> 45g carbs per cup - ELIMINATE</li>
                        <li>• <strong>Roti/chapati:</strong> 15g carbs per roti - ELIMINATE</li>
                        <li>• <strong>Naan/paratha:</strong> 20-30g carbs each - ELIMINATE</li>
                        <li>• <strong>Dal (all types):</strong> 20g net carbs per bowl - ELIMINATE</li>
                        <li>• <strong>Rajma (kidney beans):</strong> 20g carbs per bowl</li>
                        <li>• <strong>Chole (chickpeas):</strong> 27g carbs per bowl</li>
                        <li>• <strong>Potatoes (aloo):</strong> 17g carbs per medium - AVOID</li>
                        <li>• <strong>Sweet potato (shakarkandi):</strong> 20g carbs per medium</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-red-800">Other High-Carb Foods:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>All fruits:</strong> Except berries in tiny amounts (10-15 berries max)</li>
                        <li>• <strong>Milk (doodh):</strong> 12g carbs per cup - use cream instead</li>
                        <li>• <strong>Sugar/honey/jaggery (gur):</strong> Pure carbs - ZERO tolerance</li>
                        <li>• <strong>All Indian sweets:</strong> Gulab jamun, jalebi, ladoo, barfi, kheer</li>
                        <li>• <strong>Bread/bakery items:</strong> Bread, biscuits, cakes, pastries</li>
                        <li>• <strong>Onions (excess):</strong> 1 medium = 9g carbs (use sparingly)</li>
                        <li>• <strong>Tomatoes (excess):</strong> 1 medium = 5g carbs (use sparingly)</li>
                        <li>• <strong>Carrots, beets:</strong> High-carb vegetables - AVOID</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Keto Meal Plan */}
      <section id="meal-plan" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Indian Keto Meal Plan (1,500-1,600 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Complete desi keto meal plan with authentic Indian flavors. Macros: 70% fat, 25% protein, 5% carbs (20-25g net carbs daily).
              Both vegetarian and non-vegetarian options included.
            </p>

            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">Sample Day - Indian Keto (Non-Vegetarian)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Breakfast (9:00 AM) - 450 calories:</h4>
                    <p className="text-gray-700">Egg bhurji (3 eggs cooked in 2 tbsp ghee) + 100g paneer cubes sautéed + green chutney + bulletproof coffee (coffee + 1 tbsp ghee + 1 tbsp coconut oil)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 35g | Fat: 38g | Net Carbs: 4g | Keeps you full 5-6 hours!</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Lunch (2:00 PM) - 550 calories:</h4>
                    <p className="text-gray-700">Mutton curry (150g with bones, cooked in coconut milk + spices) + palak cooked in ghee (2 cups) + cauliflower rice (1 cup) + 1 tbsp ghee for extra fat</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 40g | Fat: 42g | Net Carbs: 8g | Authentic desi flavors!</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Evening Snack (5:00 PM) - 250 calories:</h4>
                    <p className="text-gray-700">Full-fat paneer (75g) + walnuts (20g) + green tea</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 18g | Fat: 22g | Net Carbs: 3g</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Dinner (8:00 PM) - 500 calories:</h4>
                    <p className="text-gray-700">Tandoori chicken thighs (200g with skin) + bhindi fry in ghee (1.5 cups) + cucumber-tomato salad with olive oil + coconut chutney</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 45g | Fat: 38g | Net Carbs: 7g | Light, satisfying dinner</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-200">
                  <p className="text-sm font-semibold text-purple-700">Daily Total: 1,750 calories | Protein: 138g (32%) | Fat: 140g (72%) | Net Carbs: 22g (5%) | IN KETOSIS! ✓</p>
                  <p className="text-xs text-gray-500 mt-1">Electrolytes: Add 1 tsp salt to water throughout day + magnesium supplement 300mg</p>
                </div>
              </CardContent>
            </Card>


            <Card className="border-fuchsia-200 mt-6">
              <CardHeader className="bg-fuchsia-50">
                <CardTitle className="text-fuchsia-800">Sample Day - Indian Keto (Vegetarian)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Breakfast - 450 cal:</h4>
                    <p className="text-gray-700">Paneer bhurji (150g paneer cooked in 2 tbsp ghee + spices) + bulletproof coffee + 5 almonds</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 30g | Fat: 40g | Net Carbs: 5g</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Lunch - 550 cal:</h4>
                    <p className="text-gray-700">Palak paneer (200g paneer in coconut cream gravy) + cauliflower rice (1.5 cups) + lauki cooked in ghee</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 38g | Fat: 45g | Net Carbs: 9g</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Snack - 250 cal:</h4>
                    <p className="text-gray-700">Full-fat dahi (150g) + walnuts (25g) + chia seeds (1 tbsp)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 12g | Fat: 22g | Net Carbs: 4g</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Dinner - 500 cal:</h4>
                    <p className="text-gray-700">Paneer tikka (150g) + bhindi masala in ghee (2 cups) + cucumber raita (made with full-fat dahi)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 35g | Fat: 40g | Net Carbs: 8g</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-fuchsia-200">
                  <p className="text-sm font-semibold text-fuchsia-700">Daily Total: 1,750 calories | Protein: 115g (26%) | Fat: 147g (76%) | Net Carbs: 26g (6%) | Vegetarian Ketosis! ✓</p>
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-fuchsia-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Indian Keto Plan?</h2>
            <p className="text-xl mb-8">
              Get customized Indian keto meal plans with your favorite desi foods, macro tracking, and supplement guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Keto Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - <PriceDisplay amountIn={500} amountUs={50} /></p>
                <Button size="lg" className="w-full bg-white text-purple-600" asChild>
                  <Link href="/contact#contact-form">Book Now - <PriceDisplay amountIn={500} amountUs={50} /></Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Flame className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Keto Workouts</h4>
                <p className="text-yellow-100 text-sm mb-4">Fat-burning exercise plan</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/keto">View Workouts</Link>
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
      <div className="container mx-auto px-4 max-w-4xl">
        <ScientificRefs
          references={[
            { text: "Ketogenic Diet for Weight Loss (NIH)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3945587/" },
            { text: "Impact of Keto on Insulin Sensitivity", url: "https://pubmed.ncbi.nlm.nih.gov/15767618/" },
            { text: "Long-term Effects of Ketogenic Diet", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2716748/" }
          ]}
        />
      </div>
    </div >
  )
}
