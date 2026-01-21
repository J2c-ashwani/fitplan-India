import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Users, Target, Shield, Bone, Brain, Info } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "Senior Citizens Diet Plan 2025 | Best Nutrition for Elderly 60+ USA, UK, Australia",
  description: "Complete senior citizens diet plan with nutrition for elderly, healthy aging strategies, and meal plans for adults 60+. Expert-designed for USA, UK, Canada, Australia.",
  keywords: "senior citizens diet, elderly nutrition, diet for seniors 60+, healthy aging diet, nutrition for older adults, senior meal plan, elderly weight management",
  alternates: {
    canonical: "https://www.fitplanindia.com/plans/senior-citizens",
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
    title: "Senior Citizens Diet Plan 2025 | Complete Guide for Healthy Aging",
    description: "Expert-designed nutrition plan for seniors focusing on healthy aging, disease prevention, and maintaining independence.",
    url: "https://www.fitplanindia.com/plans/senior-citizens",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function SeniorCitizensDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Senior Nutrition", href: "/plans/senior-citizens" },
  ]

  const tocItems = [
    { id: "understanding", label: "Healthy Aging" },
    { id: "challenges", label: "Common Challenges" },
    { id: "foods", label: "Best Foods" },
    { id: "meal-plan", label: "Meal Plan" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Why do I need more protein if I'm less active now?",
      answer: "As we age, our bodies become less efficient at processing protein (anabolic resistance). To maintain the same amount of muscle mass, seniors need significantly MORE protein per meal (25-30g) than younger adults. Muscle mass is critical for preventing falls, maintaining independence, and supporting metabolism."
    },
    {
      question: "Do I really need to take supplements?",
      answer: "It depends. Vitamin B12 and Vitamin D absorption decreases significantly with age, so many doctors recommend supplements for these two. Calcium is best from food but supplements may be needed for bone health. Always check with your doctor, as some supplements interact with medications."
    },
    {
      question: "I have no appetite. How can I eat enough?",
      answer: "This is common ('anorexia of aging'). Try eating 5-6 small meals instead of 3 large ones. Make every bite count with nutrient-dense foods (e.g., add olive oil to veggies, peanut butter to toast). Drink liquids BETWEEN meals, not with them, so you don't fill up on water. Social eating also helps improve appetite."
    },
    {
      question: "Is it too late for me to start exercising?",
      answer: "Never! Research shows people can build muscle and improve bone density even in their 80s and 90s. Start with gentle resistance training (bands, light weights) and walking. It is the single most effective intervention for maintaining independence and quality of life."
    },
    {
      question: "What if I have trouble chewing meat?",
      answer: "You still need protein! Opt for soft protein sources: scrambled eggs, Greek yogurt, cottage cheese, flaky fish, ground meats (meatballs/loaf), stewed meats, or add flavorless protein powder to oatmeal and smoothies."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <ArticleSchema
        headline="Senior Citizens Diet Plan 2025 | Healthy Aging Nutrition Guide (60+)"
        description="Complete senior citizens diet plan with nutrition for elderly, healthy aging strategies, and meal plans for adults 60+."
        keywords={["senior diet", "elderly nutrition", "healthy aging", "diet for 60+", "senior meal plan"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-emerald-600 font-semibold">
              🌿 Healthy Aging & Vitality
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Senior Citizens Nutrition Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete evidence-based nutrition plan for seniors (ages 60+) focusing on healthy aging, disease prevention, maintaining
              muscle mass, bone health, and cognitive function. Designed for older adults in USA, UK, Canada, Australia seeking to
              maintain independence, vitality, and quality of life through proper nutrition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/senior-citizens">Senior Exercise Guide</Link>
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
                <div className="text-3xl font-bold text-emerald-600 mb-2">Ages 60+</div>
                <div className="text-gray-600">Target Age Range</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">1,600-2,000</div>
                <div className="text-gray-600">Daily Calories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Higher Protein</div>
                <div className="text-gray-600">Prevent Sarcopenia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">Nutrient-Dense</div>
                <div className="text-gray-600">Quality Over Quantity</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Senior Nutrition and Healthy Aging</h2>
              <p className="text-lg text-gray-700 mb-6">
                Aging is a natural biological process that brings significant changes in nutritional needs, metabolism, body composition,
                and disease risk. After age 60, adults experience gradual decrease in metabolic rate (3-5% per decade), progressive loss
                of muscle mass (sarcopenia - 3-8% per decade after age 30, accelerating after 60), decreased bone density (especially in
                postmenopausal women), reduced appetite and sense of taste/smell, decreased stomach acid affecting nutrient absorption,
                increased risk of chronic diseases (heart disease, type 2 diabetes, osteoporosis, arthritis, dementia), and changes in
                medication affecting nutrient needs and interactions. Approximately 35% of adults over 65 in USA, UK, Canada, and Australia
                are considered obese, while simultaneously 10-20% suffer from malnutrition due to inadequate protein, vitamin, and mineral
                intake despite excess calories.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The crucial truth about senior nutrition is that quality becomes MORE important than quantity. While calorie needs decrease
                due to slower metabolism and reduced activity, nutrient needs actually INCREASE or stay the same for most vitamins, minerals,
                and especially protein. This creates a challenge of meeting higher nutrient requirements within fewer calories, requiring
                strategic focus on <strong>nutrient-dense foods</strong> that pack maximum nutrition per calorie. The foundation of healthy
                senior nutrition lies in eating adequate HIGH-QUALITY protein (1-1.2g per kg body weight daily, 25-30g per meal) to prevent
                muscle loss and frailty, prioritizing calcium (1,200-1,500mg daily) and vitamin D (800-1,000 IU daily) to maintain bone
                density and prevent osteoporosis/fractures, ensuring adequate fiber (25-30g daily) for digestive health and disease prevention,
                staying well-hydrated (8+ glasses water daily - thirst sensation decreases with age), choosing anti-inflammatory foods rich in
                omega-3 fatty acids and antioxidants to reduce chronic disease risk, eating smaller, more frequent meals (5-6 times daily) to
                maintain energy and prevent malnutrition, and monitoring vitamin B12, iron, magnesium, and potassium status through regular
                blood work. This comprehensive senior nutrition plan provides age-appropriate guidance for maintaining health, independence,
                cognitive function, and quality of life through optimal nutrition during the golden years.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-emerald-800">Benefits of Optimal Senior Nutrition</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Maintained muscle mass:</strong> Prevents frailty, falls, loss of independence</li>
                    <li>• <strong>Stronger bones:</strong> Reduces fracture risk (hip fractures can be fatal in elderly)</li>
                    <li>• <strong>Better cognitive function:</strong> Reduces dementia and Alzheimer's risk by 30-50%</li>
                    <li>• <strong>Heart health:</strong> Lowers blood pressure, cholesterol, heart disease risk</li>
                    <li>• <strong>Diabetes prevention/management:</strong> Better blood sugar control</li>
                    <li>• <strong>Immune system support:</strong> Fewer infections, faster recovery</li>
                    <li>• <strong>Energy and vitality:</strong> Stay active and independent longer</li>
                    <li>• <strong>Quality of life:</strong> Enjoy golden years with health and mobility</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-teal-800">Senior Nutrition Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Protein priority:</strong> 25-30g per meal to prevent muscle loss (sarcopenia)</li>
                    <li>• <strong>Nutrient density:</strong> Maximum nutrition per calorie (fewer empty calories)</li>
                    <li>• <strong>Calcium + Vitamin D:</strong> Critical for bone health (1,200mg Ca + 800-1,000 IU D3)</li>
                    <li>• <strong>Adequate hydration:</strong> 8+ glasses water (thirst sensation decreases)</li>
                    <li>• <strong>Fiber focus:</strong> 25-30g daily for digestive health, constipation prevention</li>
                    <li>• <strong>Anti-inflammatory foods:</strong> Omega-3, antioxidants reduce chronic disease</li>
                    <li>• <strong>Easy-to-chew foods:</strong> Soft textures if dental issues present</li>
                    <li>• <strong>Medication interactions:</strong> Monitor nutrients affected by medications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Senior Nutrition Challenges */}
      <section id="challenges" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Nutrition Challenges for Seniors and Solutions</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                Seniors face unique challenges that make maintaining optimal nutrition more difficult than in younger years. Understanding
                these challenges and implementing practical solutions is essential for healthy aging.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-red-800 mb-3 flex items-center">
                    <Bone className="w-6 h-6 mr-2" />
                    1. Sarcopenia (Muscle Loss) and Frailty
                  </h3>
                  <p className="text-gray-700 mb-3">
                    After age 60, muscle mass declines accelerate to 1-2% annually without intervention, causing progressive weakness,
                    increased fall risk, loss of independence, and increased mortality risk. Sarcopenia affects 10-30% of adults over 60,
                    increasing to 50%+ over age 80. Loss of muscle strength makes daily activities (walking, climbing stairs, carrying
                    groceries, getting up from chair) progressively harder, leading to sedentary lifestyle which accelerates further muscle
                    loss in a vicious cycle.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solution:</strong> Increase protein intake to 1-1.2g per kg body weight daily (75-90g daily for most seniors),
                    distributed evenly across meals (25-30g per meal is optimal for muscle protein synthesis). Combine with resistance training
                    2-3x weekly (even light weights or bodyweight exercises help). Protein-rich foods at every meal: eggs, Greek yogurt,
                    chicken, fish, lean meat, beans, protein powder supplements if appetite poor. Leucine-rich foods (dairy, meat, soy)
                    particularly effective at stimulating muscle protein synthesis in older adults.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-orange-800 mb-3 flex items-center">
                    <Shield className="w-6 h-6 mr-2" />
                    2. Decreased Appetite and Malnutrition Risk
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Many seniors experience "anorexia of aging" - decreased appetite and food intake due to: reduced sense of taste and smell
                    (50% decline by age 70), medications causing appetite loss or nausea (blood pressure meds, antibiotics, antidepressants),
                    dental problems making chewing difficult/painful, living alone reducing motivation to cook/eat, depression reducing interest
                    in food, and gastrointestinal issues (acid reflux, constipation). This leads to inadequate calorie and protein intake,
                    unintentional weight loss, and clinical malnutrition in 10-20% of community-dwelling seniors.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solutions:</strong> Eat smaller, more frequent meals (5-6 times daily) instead of 3 large meals. Choose
                    calorie-dense, nutrient-rich foods (nuts, avocado, full-fat dairy, olive oil) to meet needs in smaller volumes. Add
                    flavor enhancers (herbs, spices, lemon juice) to compensate for taste loss. Prepare easy, ready-to-eat meals in advance.
                    Eat socially when possible (with family, friends, at senior centers) to increase motivation. Address dental issues with
                    dentist - choose soft foods if chewing difficult (scrambled eggs, yogurt, smoothies, soups, ground meats). Consider
                    nutritional supplements (Ensure, Boost) between meals if struggling to meet needs through food alone.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-yellow-800 mb-3 flex items-center">
                    <Brain className="w-6 h-6 mr-2" />
                    3. Cognitive Decline and Dementia Risk
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Approximately 10% of adults over 65 have dementia (Alzheimer's or other types), increasing to 35% over age 85. Poor
                    nutrition accelerates cognitive decline through: vitamin B12 deficiency (affects 10-30% of seniors, causes memory loss
                    and confusion), vitamin D deficiency (70% of seniors deficient, linked to 30-50% higher dementia risk), inadequate
                    omega-3 fatty acids (critical for brain structure and function), high inflammation from poor diet, and vascular damage
                    from diabetes, high blood pressure, high cholesterol.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solutions:</strong> Follow Mediterranean diet pattern (proven to reduce Alzheimer's risk by 30-50%): emphasize
                    fatty fish 2-3x weekly (salmon, sardines, mackerel for omega-3 DHA/EPA), abundant vegetables and fruits (especially
                    berries - powerful antioxidants), olive oil as primary fat source, nuts and seeds daily, whole grains, and limited red
                    meat. Ensure adequate vitamin B12 (seniors absorb less from food - may need supplements or fortified foods), vitamin D
                    (sunlight exposure + supplements 800-1,000 IU daily), and antioxidants (vitamins C, E from colorful fruits/vegetables).
                    Stay mentally and socially active alongside healthy diet for maximum cognitive protection.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-blue-800 mb-3 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    4. Osteoporosis and Fracture Risk
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Bone density decreases significantly after age 50 (especially in postmenopausal women), with 1 in 2 women and 1 in 4 men
                    over 50 experiencing osteoporosis-related fractures. Hip fractures are particularly devastating - 20-30% mortality within
                    1 year, and 50% never regain full independence. Falls are the #1 cause of injury deaths in seniors, and weak bones make
                    even minor falls result in serious fractures.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solutions:</strong> Prioritize calcium-rich foods daily (1,200-1,500mg daily for seniors): dairy (milk, yogurt,
                    cheese provide 300-400mg per serving), fortified plant milks, leafy greens (kale, collards, bok choy), canned fish with
                    bones (sardines, salmon), and tofu (calcium-set). Ensure adequate vitamin D (800-1,000 IU daily minimum, many seniors need
                    1,000-2,000 IU) through sunlight (15-20 minutes daily), fortified foods, and supplements. Get adequate protein (supports
                    bone matrix), vitamin K (leafy greens), magnesium (nuts, seeds, whole grains), and limit sodium/caffeine (increase calcium
                    loss). Combine with weight-bearing exercise (walking, dancing, strength training) to maintain bone density.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foods Guide */}
      <section id="foods" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Best Foods for Seniors: Nutrient-Dense Choices</h2>

            <div className="space-y-8">
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">✅ Optimal Foods for Senior Health and Longevity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Focus on nutrient-dense whole foods that provide maximum vitamins, minerals, and protein per calorie. Every bite should
                    contribute to health, not just fill you up.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">High-Quality Protein (Priority!):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Eggs:</strong> Complete protein, easy to chew, affordable (180 cal, 12g protein per 2 eggs)</li>
                        <li>• <strong>Greek yogurt:</strong> Protein + calcium + probiotics (100-150 cal, 15-20g protein per cup)</li>
                        <li>• <strong>Fish:</strong> Salmon, tuna, cod (omega-3 for brain/heart) (120-180 cal, 20-25g protein per 4 oz)</li>
                        <li>• <strong>Chicken breast:</strong> Lean protein (140 cal, 26g protein per 4 oz)</li>
                        <li>• <strong>Cottage cheese:</strong> High protein, soft texture (120 cal, 14g protein per ½ cup)</li>
                        <li>• <strong>Beans, lentils:</strong> Protein + fiber (115 cal, 8g protein per ½ cup cooked)</li>
                        <li>• <strong>Protein powder:</strong> Easy supplement if appetite poor (120 cal, 20-25g protein per scoop)</li>
                        <li>• Aim: 25-30g protein per meal, 75-90g daily total</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Calcium & Vitamin D Foods:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Milk:</strong> Calcium + D + protein (150 cal, 300mg Ca per cup)</li>
                        <li>• <strong>Yogurt:</strong> 400mg calcium + probiotics per cup</li>
                        <li>• <strong>Cheese:</strong> 200-300mg calcium per oz (choose lower-fat versions)</li>
                        <li>• <strong>Fortified plant milks:</strong> 300mg calcium, 100 IU D3 per cup</li>
                        <li>• <strong>Sardines (with bones):</strong> 325mg calcium per 3 oz + omega-3</li>
                        <li>• <strong>Salmon (canned with bones):</strong> 180mg calcium per 3 oz</li>
                        <li>• <strong>Tofu (calcium-set):</strong> 250mg calcium per serving</li>
                        <li>• <strong>Leafy greens:</strong> Kale, collards, bok choy (cooked for best absorption)</li>
                        <li>• Need: 1,200-1,500mg calcium + 800-1,000 IU vitamin D daily</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Brain-Boosting Foods:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Fatty fish:</strong> Salmon, mackerel, sardines (omega-3 DHA/EPA for brain)</li>
                        <li>• <strong>Berries:</strong> Blueberries, strawberries (powerful antioxidants for memory)</li>
                        <li>• <strong>Leafy greens:</strong> Spinach, kale (folate, vitamins protect cognition)</li>
                        <li>• <strong>Walnuts:</strong> Omega-3, vitamin E (handful daily)</li>
                        <li>• <strong>Extra virgin olive oil:</strong> Anti-inflammatory, brain-protective</li>
                        <li>• <strong>Dark chocolate (70%+):</strong> Flavonoids improve memory (1 oz daily)</li>
                        <li>• <strong>Green tea:</strong> Antioxidants, caffeine boost alertness</li>
                        <li>• <strong>Whole grains:</strong> B vitamins for brain function</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Fiber-Rich Foods (Digestive Health):</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Oats:</strong> Soluble fiber lowers cholesterol (150 cal, 4g fiber per ½ cup dry)</li>
                        <li>• <strong>Beans, lentils:</strong> High fiber + protein (8g fiber per ½ cup)</li>
                        <li>• <strong>Whole grains:</strong> Brown rice, quinoa, whole wheat bread</li>
                        <li>• <strong>Fruits:</strong> Apples, pears, berries (with skin for max fiber)</li>
                        <li>• <strong>Vegetables:</strong> Broccoli, Brussels sprouts, carrots</li>
                        <li>• <strong>Chia seeds, flaxseeds:</strong> 5-10g fiber per tbsp</li>
                        <li>• Constipation common in seniors - aim 25-30g fiber daily</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-800">Soft, Easy-to-Chew Options:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Scrambled eggs, omelets:</strong> Soft, nutritious</li>
                        <li>• <strong>Yogurt, cottage cheese:</strong> No chewing needed</li>
                        <li>• <strong>Smoothies:</strong> Pack in protein powder, fruit, spinach, nut butter</li>
                        <li>• <strong>Soups, stews:</strong> Vegetables softened, easy to eat</li>
                        <li>• <strong>Mashed sweet potato:</strong> Vitamin A, fiber, soft</li>
                        <li>• <strong>Ground meat:</strong> Easier than tough steaks</li>
                        <li>• <strong>Cooked vegetables:</strong> Softer than raw</li>
                        <li>• <strong>Bananas, berries, canned fruit:</strong> Soft fruits</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
                    <CardTitle className="text-yellow-700">⚠️ Foods to Limit for Seniors</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">Limit These for Heart/Health:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Sodium (salt):</strong> Limit to 1,500-2,000mg daily (blood pressure concerns)</li>
                        <li>• <strong>Saturated fats:</strong> Fatty meats, butter, full-fat dairy (heart disease risk)</li>
                        <li>• <strong>Added sugars:</strong> Desserts, soda, candy (empty calories, blood sugar spikes)</li>
                        <li>• <strong>Processed meats:</strong> Bacon, sausage, deli meat (high sodium, cancer risk)</li>
                        <li>• <strong>Fried foods:</strong> High calories, unhealthy fats</li>
                        <li>• <strong>Alcohol:</strong> Limit to 1 drink daily max (interactions with medications)</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-yellow-800">Medication-Food Interactions:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Blood thinners (warfarin):</strong> Maintain consistent vitamin K intake (leafy greens)</li>
                        <li>• <strong>Blood pressure meds:</strong> Avoid excess potassium, grapefruit juice</li>
                        <li>• <strong>Statins:</strong> Avoid grapefruit juice (increases side effects)</li>
                        <li>• <strong>Antibiotics:</strong> Some interact with dairy, calcium supplements</li>
                        <li>• <strong>Thyroid medication:</strong> Take on empty stomach, avoid calcium/iron 4 hours</li>
                        <li>• Always discuss food interactions with doctor/pharmacist</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Meal Plan */}
      <section id="meal-plan" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Senior Citizen Meal Plan (1,800 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Nutrient-dense meal plan with adequate protein, calcium, and vitamins. Adjust portions based on activity level and appetite.
              Very active seniors may need 2,000-2,200 calories.
            </p>

            <Card className="border-emerald-200">
              <CardHeader className="bg-emerald-50">
                <CardTitle className="text-emerald-800">Sample Day - Easy, Nutritious Meals</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Breakfast (8:00 AM) - 450 calories:</h4>
                    <p className="text-gray-700">Scrambled eggs (2) + whole wheat toast (1 slice) + avocado (¼) + glass of fortified milk (8 oz) + berries (½ cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 25g | Calcium: 350mg | Easy to chew, nutrient-packed</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM) - 200 calories:</h4>
                    <p className="text-gray-700">Greek yogurt (¾ cup) + walnuts (¼ cup) + drizzle of honey</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 18g | Calcium: 300mg | Brain-healthy omega-3</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM) - 500 calories:</h4>
                    <p className="text-gray-700">Baked salmon (4 oz) + quinoa (¾ cup) + steamed broccoli (1 cup) + side salad with olive oil dressing + glass of milk</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 35g | Omega-3 | Calcium: 400mg | Complete balanced meal</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Afternoon Snack (3:30 PM) - 180 calories:</h4>
                    <p className="text-gray-700">Apple slices + almond butter (1 tbsp) + green tea</p>
                    <p className="text-sm text-gray-500 mt-1">Fiber | Healthy fats | Antioxidants</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Dinner (6:30 PM - Eat Early) - 470 calories:</h4>
                    <p className="text-gray-700">Grilled chicken breast (4 oz) + baked sweet potato (½ medium) + green beans (1 cup) + small whole wheat roll + yogurt (½ cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 40g | Vitamin A | Calcium: 200mg | Soft, easy to digest</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-200">
                  <p className="text-sm font-semibold text-emerald-700">Daily Total: 1,800 calories | Protein: 118g (26%) | Carbs: 180g (40%) | Fat: 68g (34%) | Calcium: 1,250mg | Fiber: 28g</p>
                  <p className="text-xs text-gray-500 mt-1">Hydration: 8-10 glasses water daily (set reminders if needed)</p>
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need Personalized Senior Nutrition Guidance?</h2>
            <p className="text-xl mb-8">
              Get customized meal plans addressing your specific health conditions, medications, and nutritional needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Senior Nutrition Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - <PriceDisplay amountIn={500} amountUs={50} /></p>
                <Button size="lg" className="w-full bg-white text-emerald-600" asChild>
                  <Link href="/contact#contact-form">Book Now - <PriceDisplay amountIn={500} amountUs={50} /></Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Senior Exercise Guide</h4>
                <p className="text-yellow-100 text-sm mb-4">Safe, gentle workouts</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/senior-citizens">View Workouts</Link>
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
    </div >
  )
}
