import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Leaf, Target, Sparkles, Apple, Activity, Info } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vegetarian Diet Plan 2025 | Complete Vegetarian Weight Loss & Nutrition Guide USA, UK, India",
  description: "Complete vegetarian diet plan with plant-based protein sources, vegetarian meal plans, weight loss strategies, and nutrition guide. Expert-designed for USA, UK, Canada, Australia, India.",
  keywords: "vegetarian diet plan, vegetarian weight loss, vegetarian meal plan, plant based diet, vegetarian protein sources, vegetarian nutrition, Indian vegetarian diet, lacto-ovo vegetarian",
  openGraph: {
    title: "Vegetarian Diet Plan 2025 | Complete Plant-Based Guide",
    description: "Expert-designed vegetarian diet with proven strategies for weight loss, muscle building, and optimal health on a plant-based diet.",
    url: "https://fitplanindia.com/plans/vegetarian",
  },
}

export default function VegetarianDietPage() {
  const breadcrumbItems = [
    { label: "Diet Plans", href: "/plans" },
    { label: "Vegetarian Diet", href: "/plans/vegetarian" },
  ]

  const tocItems = [
    { id: "understanding", label: "Vegetarian Guide" },
    { id: "concerns", label: "Key Nutrients" },
    { id: "foods", label: "Best Foods" },
    { id: "meal-plan", label: "Meal Plan" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "How can I get enough protein without meat?",
      answer: "It's easier than you think! Combine variety. Excellent sources include lentils, chickpeas, beans, tofu, tempeh, edamame, quinoa, Greek yogurt, cottage cheese, nuts, and seeds. Aim for 1.2-1.5g of protein per kg of body weight if you are active. Protein powders (whey or plant-based) can also help hit targets."
    },
    {
      question: "Do I really need to take Vitamin B12?",
      answer: "Yes, absolutely. Vitamin B12 is NOT found in adequate amounts in plant foods (except fortified ones). Deficiency can cause permanent nerve damage. All vegetarians should take a B12 supplement or eat fortified foods (cereals, nutritional yeast, plant milk) daily to be safe. It is cheap insurance for your health."
    },
    {
      question: "Will I lose muscle if I switch to a vegetarian diet?",
      answer: "No, as long as you eat enough total calories and protein. Many elite athletes (like Venus Williams, Lewis Hamilton) are plant-based. The key is ensuring you get complete proteins (combining grains + legumes, or eating soy/dairy/eggs) and consuming enough volume of food, as plant foods are less calorie-dense."
    },
    {
      question: "Can I follow this diet if I don't eat eggs?",
      answer: "Yes. This plan is 'lacto-ovo' (dairy + eggs), but you can easily swap eggs for tofu scrambles, chickpea flour omelets (besan chilla), or just more dairy/legumes. If you avoid dairy too (vegan), you'll need to be more vigilant about Calcium, Vitamin D, and B12 supplementation."
    },
    {
      question: "Is soy safe to eat every day?",
      answer: "Yes, for most people. Research shows whole soy foods (tofu, tempeh, edamame) are safe and may even reduce breast cancer risk. They are excellent complete plant proteins. However, avoid highly processed soy isolates if possible and stick to whole food sources."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-lime-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-green-600 font-semibold">
              🌱 Plant-Based Nutrition
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Vegetarian Diet Plan 2025
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete evidence-based vegetarian diet plan with plant-based protein sources, balanced nutrition, weight loss strategies,
              and meal plans for lacto-ovo vegetarians. Designed for vegetarians in USA, UK, Canada, Australia, and India seeking
              optimal health, weight management, and athletic performance without meat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plan">View 7-Day Meal Plan</Link>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/workouts/vegetarian">Vegetarian Fitness Guide</Link>
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
                <div className="text-3xl font-bold text-green-600 mb-2">Plant-Based</div>
                <div className="text-gray-600">Complete Nutrition</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-600 mb-2">50-75g</div>
                <div className="text-gray-600">Daily Protein Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">1,500-1,800</div>
                <div className="text-gray-600">Calories (Weight Loss)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Balanced</div>
                <div className="text-gray-600">All Nutrients</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Vegetarian Nutrition: Complete Guide 2025</h2>
              <p className="text-lg text-gray-700 mb-6">
                A vegetarian diet excludes meat, poultry, and fish/seafood but includes plant-based foods and may include dairy and eggs
                depending on the type. The main vegetarian categories are: <strong>lacto-ovo vegetarian</strong> (includes dairy and eggs -
                most common, easiest to meet nutritional needs), lacto-vegetarian (dairy yes, eggs no), ovo-vegetarian (eggs yes, dairy no),
                and vegan (no animal products whatsoever - requires more careful planning). Approximately 5-8% of Americans, 12-14% of UK
                residents, and over 35% of Indians follow vegetarian diets for ethical, environmental, religious, or health reasons. Research
                shows vegetarians typically have 20-30% lower risk of heart disease, 15-20% lower cancer risk, lower BMI, better blood sugar
                control, and lower blood pressure compared to meat-eaters when following balanced, nutrient-dense vegetarian diets.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                The crucial truth about vegetarian nutrition is that it requires more intentional planning than omnivorous diets to ensure
                adequate intake of certain nutrients that are abundant in animal products but less bioavailable or absent in plant foods.
                Well-planned vegetarian diets can meet ALL nutritional needs at every life stage (infancy through elderly), but poorly planned
                vegetarian diets heavy in processed carbs and low in protein/nutrients can lead to deficiencies in protein, iron, vitamin B12,
                vitamin D, calcium, zinc, and omega-3 fatty acids. The foundation of healthy vegetarian nutrition lies in eating diverse
                <strong> complete protein sources</strong> at every meal combining complementary proteins (beans + rice, hummus + pita, peanut
                butter + whole wheat bread) or including eggs/dairy for complete protein, prioritizing iron-rich plant foods (lentils, spinach,
                fortified cereals) paired with vitamin C for absorption, ensuring adequate vitamin B12 through fortified foods or supplements
                (critical - only found in animal products), getting sufficient calcium from dairy (if lacto-vegetarian) or fortified plant milks,
                tofu, and leafy greens, including omega-3 sources (walnuts, flaxseeds, chia seeds, algae-based supplements), eating abundant
                colorful fruits and vegetables for vitamins/minerals/antioxidants, and choosing whole grains over refined carbs for sustained
                energy and fiber. This comprehensive vegetarian diet plan provides practical guidance for meeting all nutritional needs, building
                muscle, losing weight, and thriving on a balanced plant-based diet.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-green-800">Health Benefits of Vegetarian Diet</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Heart health:</strong> 20-30% lower heart disease risk, lower cholesterol, blood pressure</li>
                    <li>• <strong>Weight management:</strong> Vegetarians typically 5-10 lbs lighter, easier weight control</li>
                    <li>• <strong>Diabetes prevention:</strong> 50% lower type 2 diabetes risk with plant-based diet</li>
                    <li>• <strong>Cancer protection:</strong> 15-20% lower overall cancer risk, especially colorectal</li>
                    <li>• <strong>Digestive health:</strong> Higher fiber (2-3x more) improves gut health, regularity</li>
                    <li>• <strong>Longevity:</strong> Vegetarians live 3-6 years longer on average</li>
                    <li>• <strong>Athletic performance:</strong> Many elite athletes thrive on plant-based diets</li>
                    <li>• <strong>Environmental impact:</strong> Lower carbon footprint, sustainable eating</li>
                  </ul>
                </div>

                <div className="bg-lime-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3 text-lime-800">Vegetarian Diet Principles</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Protein at every meal:</strong> 15-25g per meal from varied sources</li>
                    <li>• <strong>Complete proteins:</strong> Combine legumes + grains or include eggs/dairy</li>
                    <li>• <strong>Iron + Vitamin C:</strong> Pair iron-rich foods with vitamin C for absorption</li>
                    <li>• <strong>B12 supplementation:</strong> Essential! Fortified foods or supplements</li>
                    <li>• <strong>Calcium sources:</strong> Dairy, fortified plant milks, tofu, leafy greens</li>
                    <li>• <strong>Omega-3 focus:</strong> Walnuts, flaxseeds, chia seeds, algae supplements</li>
                    <li>• <strong>Whole foods priority:</strong> Not just pasta and bread - vegetables, legumes, nuts</li>
                    <li>• <strong>Variety essential:</strong> Different foods = different nutrients</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrient Concerns */}
      <section id="concerns" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Nutrients to Focus On: Vegetarian Nutrition Guide</h2>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <p className="text-gray-700 mb-6">
                While vegetarian diets can meet all nutritional needs, certain nutrients require extra attention because they're either
                absent from plant foods or less bioavailable (harder to absorb) compared to animal sources.
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-blue-800 mb-3 flex items-center">
                    <Sparkles className="w-6 h-6 mr-2" />
                    1. Protein: Meeting Needs on Plant-Based Diet
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Vegetarians need to be intentional about protein to meet daily requirements of 0.8-1g per kg body weight (50-75g daily
                    for most adults). Plant proteins are "incomplete" (missing one or more essential amino acids) except for soy, quinoa, and
                    buckwheat. Solution: combine complementary proteins (beans + rice, hummus + pita, lentil soup + whole grain bread) OR
                    include eggs/dairy which are complete proteins.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best vegetarian protein sources:</strong> Greek yogurt (17g per cup), cottage cheese (14g per ½ cup), eggs (12g
                    per 2 eggs), lentils (18g per cup cooked), chickpeas (15g per cup), black beans (15g per cup), tofu (20g per cup), tempeh
                    (31g per cup), edamame (17g per cup), quinoa (8g per cup), Greek yogurt parfait, protein powder (20-25g per scoop), nuts
                    and nut butters (6-8g per oz/2 tbsp), cheese (7g per oz). Aim for 15-25g protein per meal, spread throughout the day.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-orange-800 mb-3 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    2. Vitamin B12: Critical Supplement for Vegetarians
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Vitamin B12 is ONLY found naturally in animal products (meat, fish, eggs, dairy). It's essential for nerve function, DNA
                    synthesis, and red blood cell production. B12 deficiency causes anemia, fatigue, nerve damage, memory problems, and
                    depression. Even lacto-ovo vegetarians are at risk (50% are deficient) because absorption decreases with age and plant-heavy
                    diets provide minimal B12.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solutions:</strong> Take B12 supplement (500-1,000 mcg daily or 2,000 mcg weekly) OR eat fortified foods daily
                    (fortified cereals, fortified plant milks, fortified nutritional yeast, some fortified meat substitutes). If lacto-ovo,
                    include eggs and dairy but supplementation still recommended for insurance. This is NON-NEGOTIABLE for long-term vegetarians -
                    B12 deficiency can cause permanent nerve damage if untreated. Get blood levels checked annually (serum B12 and methylmalonic
                    acid).
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-red-800 mb-3 flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    3. Iron: Preventing Anemia on Vegetarian Diet
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Plant iron (non-heme) is absorbed at only 2-20% efficiency versus meat iron (heme) at 15-35%. Vegetarians need 1.8x more
                    iron than meat-eaters (men: 14mg daily, women: 33mg daily pre-menopause, 14mg post-menopause). Iron deficiency causes
                    fatigue, weakness, pale skin, shortness of breath, cold hands/feet, and impaired cognitive function. Vegetarians, especially
                    menstruating women, are at higher risk.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solutions:</strong> Eat iron-rich plant foods with vitamin C at same meal (triples absorption): lentils (6.6mg per
                    cup), chickpeas (4.7mg per cup), spinach cooked (6.4mg per cup), kidney beans (5.2mg per cup), tofu (6.6mg per cup), quinoa
                    (2.8mg per cup), fortified cereals (up to 18mg per serving), pumpkin seeds (4.2mg per oz), dark chocolate (3.4mg per oz).
                    Pair with: citrus fruits, tomatoes, bell peppers, strawberries, broccoli. Avoid tea/coffee with meals (inhibits iron absorption).
                    Consider iron supplement if blood tests show deficiency.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-yellow-800 mb-3 flex items-center">
                    <Activity className="w-6 h-6 mr-2" />
                    4. Omega-3 Fatty Acids: Plant-Based Sources
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Omega-3s (EPA and DHA) are critical for brain health, heart health, and reducing inflammation. While fish is the best source,
                    vegetarians can get ALA (alpha-linolenic acid) from plants which converts to EPA/DHA at low efficiency (5-10%). Vegetarians
                    often have lower blood levels of EPA/DHA, potentially affecting brain and heart health long-term.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solutions:</strong> Include daily: ground flaxseeds (2.4g ALA per tbsp), chia seeds (2.5g ALA per tbsp), walnuts
                    (2.5g ALA per oz), hemp seeds (1g ALA per tbsp), flaxseed oil (7.3g ALA per tbsp), canola oil (1.3g ALA per tbsp). Consider
                    algae-based omega-3 supplements (200-300mg DHA daily) for direct EPA/DHA without fish - particularly important for pregnancy,
                    children, and brain health. Avoid excess omega-6 (vegetable oils, processed foods) which competes with omega-3 conversion.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-xl text-purple-800 mb-3">5. Additional Nutrients: Calcium, Zinc, Vitamin D</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Calcium (1,000-1,200mg daily):</strong> If lacto-vegetarian, dairy provides ample calcium (300mg per cup milk/yogurt).
                    If avoiding dairy: fortified plant milks (300mg per cup), calcium-set tofu (250mg per ½ cup), fortified orange juice (300mg
                    per cup), leafy greens cooked (100-200mg per cup), almonds (75mg per oz), tahini (64mg per tbsp).
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Zinc (8-11mg daily):</strong> Lower absorption from plants. Sources: pumpkin seeds (2.2mg per oz), chickpeas (2.5mg
                    per cup), lentils (2.5mg per cup), cashews (1.6mg per oz), oats (2.3mg per cup cooked), tofu (2mg per cup), fortified cereals.
                    Soaking and sprouting legumes increases zinc absorption.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Vitamin D (600-800 IU daily, 1,000-2,000 IU if deficient):</strong> Few food sources: fortified dairy, fortified
                    plant milks, fortified cereals, mushrooms exposed to UV light, egg yolks. Most vegetarians need supplement (vitamin D2 or
                    D3) plus 15-20 minutes daily sunlight exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Foods */}
      <section id="foods" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Best Vegetarian Foods: Complete Protein & Nutrient Guide</h2>

            <Card className="border-green-200">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <CardTitle className="text-green-700">✅ Top Vegetarian Foods for Complete Nutrition</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">High-Protein Foods:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Lentils:</strong> 18g protein, 16g fiber per cup cooked</li>
                      <li>• <strong>Chickpeas:</strong> 15g protein per cup</li>
                      <li>• <strong>Black beans:</strong> 15g protein per cup</li>
                      <li>• <strong>Tofu:</strong> 20g protein per cup (complete protein)</li>
                      <li>• <strong>Tempeh:</strong> 31g protein per cup</li>
                      <li>• <strong>Edamame:</strong> 17g protein per cup</li>
                      <li>• <strong>Greek yogurt:</strong> 17-20g protein per cup</li>
                      <li>• <strong>Cottage cheese:</strong> 28g protein per cup</li>
                      <li>• <strong>Eggs:</strong> 12g protein per 2 large eggs</li>
                      <li>• <strong>Quinoa:</strong> 8g protein per cup (complete protein)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Iron-Rich Foods:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Lentils: 6.6mg per cup</li>
                      <li>• Spinach (cooked): 6.4mg per cup</li>
                      <li>• Tofu: 6.6mg per cup</li>
                      <li>• Kidney beans: 5.2mg per cup</li>
                      <li>• Chickpeas: 4.7mg per cup</li>
                      <li>• Fortified cereals: up to 18mg</li>
                      <li>• Pumpkin seeds: 4.2mg per oz</li>
                      <li>• Quinoa: 2.8mg per cup</li>
                      <li>• Dark chocolate (70%+): 3.4mg per oz</li>
                      <li>• Always pair with vitamin C!</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Calcium Sources:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Milk: 300mg per cup</li>
                      <li>• Yogurt: 400mg per cup</li>
                      <li>• Cheese: 200-300mg per oz</li>
                      <li>• Fortified plant milks: 300mg per cup</li>
                      <li>• Calcium-set tofu: 250mg per ½ cup</li>
                      <li>• Fortified orange juice: 300mg per cup</li>
                      <li>• Kale (cooked): 180mg per cup</li>
                      <li>• Collard greens: 270mg per cup</li>
                      <li>• Bok choy: 160mg per cup</li>
                      <li>• Almonds: 75mg per oz</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">Omega-3 Sources:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Ground flaxseeds: 2.4g ALA per tbsp</li>
                      <li>• Chia seeds: 2.5g ALA per tbsp</li>
                      <li>• Walnuts: 2.5g ALA per oz (handful)</li>
                      <li>• Hemp seeds: 1g ALA per tbsp</li>
                      <li>• Flaxseed oil: 7.3g ALA per tbsp</li>
                      <li>• Algae supplements: Direct DHA/EPA</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-800">B12 Fortified Foods:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fortified cereals: 100% DV per serving</li>
                      <li>• Fortified plant milks: 50% DV per cup</li>
                      <li>• Nutritional yeast: 5-20 mcg per tbsp</li>
                      <li>• Fortified meat substitutes: varies</li>
                      <li>• Eggs: 0.6 mcg per egg (inadequate alone)</li>
                      <li>• Supplement still recommended!</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7-Day Meal Plan */}
      <section id="meal-plan" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Vegetarian Meal Plan (1,600-1,800 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              Balanced lacto-ovo vegetarian meal plan with complete proteins, adequate iron, calcium, and all essential nutrients.
              Adjust portions for weight maintenance (add 200-400 calories) or higher activity levels.
            </p>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Sample Day - Complete Vegetarian Nutrition</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Breakfast (8:00 AM) - 400 calories:</h4>
                    <p className="text-gray-700">Scrambled eggs (2) with spinach + whole wheat toast (1 slice) + avocado (¼) + glass of fortified plant milk (or dairy milk) + berries (½ cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 20g | Iron: 4mg | Calcium: 350mg | B12 (from fortified milk)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM) - 200 calories:</h4>
                    <p className="text-gray-700">Greek yogurt (¾ cup) + walnuts (¼ cup) + drizzle of honey</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 18g | Calcium: 300mg | Omega-3 from walnuts</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM) - 500 calories:</h4>
                    <p className="text-gray-700">Lentil curry (1.5 cups) + brown rice (¾ cup) + side salad with olive oil + orange (vitamin C for iron absorption)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 25g | Iron: 10mg | Fiber: 18g | Complete protein combo</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Afternoon Snack (4:00 PM) - 180 calories:</h4>
                    <p className="text-gray-700">Hummus (¼ cup) + baby carrots and bell peppers + whole wheat pita (½)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 8g | Iron: 2mg | Vitamin C enhances iron</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Dinner (7:00 PM) - 520 calories:</h4>
                    <p className="text-gray-700">Tofu stir-fry (1 cup firm tofu + 2 cups mixed vegetables) + quinoa (¾ cup) + side of edamame (½ cup)</p>
                    <p className="text-sm text-gray-500 mt-1">Protein: 35g | Iron: 8mg | Calcium: 400mg | Complete proteins</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <p className="text-sm font-semibold text-green-700">Daily Total: 1,800 calories | Protein: 106g (24%) | Carbs: 215g (48%) | Fat: 56g (28%) | Iron: 24mg | Calcium: 1,350mg | Fiber: 38g</p>
                  <p className="text-xs text-gray-500 mt-1">Don't forget: B12 supplement (500 mcg) + Vitamin D (1,000 IU) daily!</p>
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-lime-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Need a Personalized Vegetarian Plan?</h2>
            <p className="text-xl mb-8">
              Get customized vegetarian meal plans with complete nutrition, protein optimization, and supplement guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Vegetarian Consultation</h4>
                <p className="text-white text-sm mb-4">Personalized plan - <PriceDisplay amountIn={500} amountUs={50} /></p>
                <Button size="lg" className="w-full bg-white text-green-600" asChild>
                  <Link href="/contact#contact-form">Book Now - <PriceDisplay amountIn={500} amountUs={50} /></Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Leaf className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Vegetarian Fitness</h4>
                <p className="text-yellow-100 text-sm mb-4">Plant-based workouts</p>
                <Button size="lg" className="w-full bg-yellow-500 text-gray-900" asChild>
                  <Link href="/workouts/vegetarian">View Workouts</Link>
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
