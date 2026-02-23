import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Target, AlertCircle, Apple, Salad, Coffee, Utensils, Leaf, TrendingUp, Sparkles, Dumbbell } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  title: "Vegan Bodybuilding Diet | Complete Plant-Based Muscle Building Guide",
  description: "Complete vegan bodybuilding guide with plant-based muscle building meal plans, protein strategies, supplements, vegan athlete nutrition, and mass gain on plants.",
  keywords: "vegan bodybuilding, plant based bodybuilding, vegan muscle building, vegan protein, plant based athlete, vegan diet for muscle gain, vegan bodybuilding meal plan",
  alternates: {
    canonical: "https://www.fitplanindia.com/blog/vegan-bodybuilding",
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
    title: "Vegan Bodybuilding Diet | Plant-Based Muscle Building Guide",
    description: "Evidence-based vegan bodybuilding with plant-based meal plans for muscle growth.",
    url: "https://www.fitplanindia.com/blog/vegan-bodybuilding",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "article",
  },
}

export default function VeganBodybuildingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ArticleSchema
        headline="Vegan Bodybuilding Diet | Complete Plant-Based Muscle Building Guide"
        description="Complete vegan bodybuilding guide with plant-based muscle building meal plans, protein strategies, supplements, vegan athlete nutrition, and mass gain on plants."
        keywords={["vegan bodybuilding", "plant based bodybuilding", "vegan muscle building", "vegan protein", "plant based athlete", "vegan diet for muscle gain", "vegan bodybuilding meal plan"]}
        datePublished="2024-01-01"
        dateModified={new Date().toISOString()}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              🌱 Vegan Bodybuilding Answer Engine
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm font-serif">
              What Is the Exact Blueprint for Building Elite Muscle on a 100% Plant-Based Diet?
            </h1>
            <p className="text-xl text-white mb-8 border-l-4 border-green-300 pl-4 text-left bg-white/10 p-4 rounded-r-lg shadow-md leading-relaxed">
              <strong>The Short Answer:</strong> Building serious muscle on a vegan diet requires a slightly higher, optimized protein intake of 2.2-2.6g per kilogram of body weight to compensate for the lower digestibility of plant sources. Success hinges on a 3,500+ calorie surplus, strategic combining of complete protein sources like legumes and grains (or soy products), and mandatory supplementation of B12, Creatine, and Omega-3s to bridge fundamental nutritional gaps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#meal-plans">
                  View Meal Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white border-2 border-white font-semibold" asChild>
                <Link href="#protein">
                  Vegan Protein Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-green-700 mb-2">2.2-2.6g</div>
                <div className="text-gray-600">Protein per kg (Higher for Vegan)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-gray-600">Plant-Based Nutrition</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">3,500+</div>
                <div className="text-gray-600">Calories for Bulking</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime-600 mb-2">Complete</div>
                <div className="text-gray-600">Amino Acids Possible</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Why Must Plant-Based Athletes Consume Slightly More Protein Than Omnivores?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Building muscle on a vegan diet is not only possible - elite vegan bodybuilders and athletes prove it works at
                the highest levels. The key is understanding plant-based protein sources, combining foods for complete amino acid
                profiles, consuming adequate calories (often challenging on high-fiber plants), strategic supplementation (B12,
                creatine, potentially protein powder), and timing nutrients around workouts. Vegan bodybuilding requires slightly
                higher protein intake (2.2-2.6g per kg vs 2.0-2.4g for omnivores) because plant proteins have lower digestibility
                and sometimes incomplete amino acid profiles. However, combining legumes with grains, using diverse protein sources,
                and proper meal planning easily overcomes these challenges. Benefits include faster recovery (anti-inflammatory
                plants), better cardiovascular health, ethical alignment, and proving that compassion and strength coexist.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-green-800">Vegan Bodybuilding Advantages</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Faster recovery from anti-inflammatory foods</li>
                    <li>• Better cardiovascular health (lower cholesterol)</li>
                    <li>• High fiber aids digestion and gut health</li>
                    <li>• Ethical and environmental alignment</li>
                    <li>• Lower disease risk long-term</li>
                    <li>• Proving plants build muscle inspires others</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-emerald-800">Vegan Bodybuilding Challenges</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Higher protein needs (2.2-2.6g/kg vs 2.0-2.4g)</li>
                    <li>• Must combine plant proteins for complete aminos</li>
                    <li>• Higher volume of food (fiber fills you up)</li>
                    <li>• B12 supplementation mandatory</li>
                    <li>• Creatine supplementation recommended</li>
                    <li>• More meal planning required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vegan Protein Sources */}
      <section id="protein" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Vegan Protein Sources for Muscle Building</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ High-Protein Vegan Foods:</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Legumes (Protein Powerhouses):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Lentils:</strong> 18g protein per cup cooked</li>
                      <li>• <strong>Chickpeas:</strong> 15g per cup</li>
                      <li>• <strong>Black beans:</strong> 15g per cup</li>
                      <li>• <strong>Edamame:</strong> 17g per cup (complete protein!)</li>
                      <li>• <strong>Split peas:</strong> 16g per cup</li>
                      <li>• Foundation of vegan muscle building</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Soy Products (Complete Proteins):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Tofu (firm):</strong> 20g per cup (versatile)</li>
                      <li>• <strong>Tempeh:</strong> 31g per cup (fermented, easier digest)</li>
                      <li>• <strong>Edamame:</strong> 17g per cup</li>
                      <li>• <strong>Soy milk:</strong> 7g per cup</li>
                      <li>• Complete amino acid profile - gold standard</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Seitan (Wheat Protein):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Protein:</strong> 25g per 3.5 oz serving</li>
                      <li>• Made from wheat gluten (avoid if celiac)</li>
                      <li>• Meat-like texture, versatile</li>
                      <li>• One of highest protein vegan sources</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Whole Grains (Protein + Carbs):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Quinoa:</strong> 8g per cup (complete protein)</li>
                      <li>• <strong>Amaranth:</strong> 9g per cup</li>
                      <li>• <strong>Oats:</strong> 6g per cup</li>
                      <li>• <strong>Whole wheat pasta:</strong> 8g per cup</li>
                      <li>• Combine with legumes for complete aminos</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Nuts, Seeds, Nut Butters:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Peanut butter:</strong> 8g per 2 tbsp</li>
                      <li>• <strong>Almonds:</strong> 6g per oz</li>
                      <li>• <strong>Pumpkin seeds:</strong> 9g per oz</li>
                      <li>• <strong>Hemp seeds:</strong> 10g per 3 tbsp (complete protein)</li>
                      <li>• <strong>Chia seeds:</strong> 5g per oz</li>
                      <li>• Calorie-dense - great for bulking</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Vegan Protein Powders (Convenient):</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Pea protein:</strong> ~24g per scoop</li>
                      <li>• <strong>Rice protein:</strong> ~24g per scoop</li>
                      <li>• <strong>Hemp protein:</strong> ~15g per scoop (complete)</li>
                      <li>• <strong>Blends:</strong> Multiple sources for complete profile</li>
                      <li>• Easy way to hit protein targets</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-blue-700">📊 Protein Combining Strategy:</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-blue-800">Complete vs Incomplete Proteins:</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Complete proteins</strong> have all 9 essential amino acids: soy products, quinoa, buckwheat,
                      hemp seeds, chia seeds.
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Incomplete proteins</strong> lack one or more amino acids: most legumes, grains, nuts need combining.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-blue-800">Classic Protein Combinations:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Rice + Beans:</strong> Complete amino profile together</li>
                      <li>• <strong>Peanut butter + Whole wheat bread:</strong> Classic combo</li>
                      <li>• <strong>Lentils + Rice:</strong> Middle Eastern staple</li>
                      <li>• <strong>Hummus + Pita:</strong> Chickpeas + wheat</li>
                      <li>• <strong>Beans + Corn:</strong> Traditional Mexican</li>
                      <li>• Don't need to combine in same meal - just same day works</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-blue-800">High-Protein Vegan Meals:</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Tofu scramble (40g protein)</li>
                      <li>• Lentil curry with rice (35g)</li>
                      <li>• Tempeh stir-fry (40g)</li>
                      <li>• Bean burrito bowl (30g)</li>
                      <li>• Protein shake with peanut butter (45g)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-yellow-800">⚠️ Meeting Protein Targets:</h5>
                    <p className="text-sm text-gray-700 mb-2">
                      For 170 lb vegan bodybuilder: 170g+ protein daily needed.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Breakfast:</strong> Tofu scramble (30g)</li>
                      <li>• <strong>Snack:</strong> Protein shake (25g)</li>
                      <li>• <strong>Lunch:</strong> Tempeh bowl (35g)</li>
                      <li>• <strong>Snack:</strong> PB sandwich (15g)</li>
                      <li>• <strong>Dinner:</strong> Lentil curry (30g)</li>
                      <li>• <strong>Evening:</strong> Protein shake (25g)</li>
                      <li>• <strong>Total:</strong> 160g (feasible with planning!)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-lg mb-4 text-purple-700">💊 Essential Supplements:</h4>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Mandatory for Vegans:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Vitamin B12:</strong> 1000mcg daily (NO plant sources)</li>
                        <li>• <strong>Vitamin D:</strong> 2000 IU (if limited sun)</li>
                        <li>• <strong>Omega-3 (EPA/DHA):</strong> Algae oil 250-500mg</li>
                        <li>• These are NON-NEGOTIABLE for vegan health</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Highly Recommended for Athletes:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Creatine monohydrate:</strong> 5g daily (huge performance boost)</li>
                        <li>• <strong>Vegan protein powder:</strong> Convenience for hitting targets</li>
                        <li>• <strong>Zinc:</strong> 15mg (plant absorption lower)</li>
                        <li>• <strong>Iron:</strong> If deficient (women especially)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Day Meal Plan */}
      <section id="meal-plans" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">7-Day Vegan Bodybuilding Meal Plan (3,200-3,500 Calories)</h2>
            <p className="text-center text-gray-600 mb-12">
              High-protein, plant-based bulking plan for a 170 lb vegan bodybuilder training 4-5x per week.
            </p>

            <Card className="border-green-200 mb-8">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Sample Day - Vegan Bodybuilding Diet</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Breakfast (7:30 AM):</h5>
                    <p className="text-gray-700">Tofu scramble (400g firm tofu) with spinach, tomatoes, nutritional yeast; oatmeal (1 cup) with banana, berries, peanut butter (2 tbsp), walnuts; soy milk</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~880 | Protein: 52g | Complete plant proteins</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Mid-Morning Snack (10:30 AM):</h5>
                    <p className="text-gray-700">Pea protein shake (2 scoops) with banana, oats (1/2 cup), almond butter (2 tbsp), soy milk</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~620 | Protein: 52g | Convenient protein boost</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Lunch (1:00 PM):</h5>
                    <p className="text-gray-700">Tempeh (200g) stir-fry with vegetables, brown rice (1.5 cups), chickpeas (1 cup), tahini sauce, side salad with hemp seeds</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~920 | Protein: 58g | Nutrient-dense, high protein</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Pre-Workout (3:30 PM):</h5>
                    <p className="text-gray-700">Banana (2), dates (4), rice cakes with almond butter</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~420 | Quick carbs for energy</p>
                  </div>

                  <div className="bg-purple-50 border border-purple-300 rounded-lg p-4">
                    <h5 className="font-semibold text-purple-800 mb-1">Post-Workout Shake (5:30 PM):</h5>
                    <p className="text-gray-700">Pea+rice protein blend (2 scoops), banana (2), oats (1/2 cup), peanut butter (2 tbsp), soy milk, spinach</p>
                    <p className="text-sm text-purple-600 mt-1">Calories: ~720 | Protein: 58g | Recovery window!</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Dinner (7:30 PM):</h5>
                    <p className="text-gray-700">Lentil curry (2 cups lentils), quinoa (1 cup), roasted vegetables with olive oil, naan bread (whole wheat), cashews</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~880 | Protein: 46g | Complete amino profile</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">Before Bed (10:00 PM):</h5>
                    <p className="text-gray-700">Soy milk (2 cups), mixed nuts (2 oz), dark chocolate (1 oz)</p>
                    <p className="text-sm text-gray-500 mt-1">Calories: ~480 | Protein: 22g | Slow-release overnight</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <p className="text-sm font-semibold text-green-700">Daily Total: ~4,920 calories | Protein: 288g | Carbs: 580g | Fats: 168g | 100% plant-powered muscle building!</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800">Weekly Vegan Bodybuilding Variety</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3">Breakfast Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Protein pancakes (chickpea flour, banana, protein powder)</li>
                      <li>• Smoothie bowl with protein powder and toppings</li>
                      <li>• Tempeh breakfast scramble with toast</li>
                      <li>• Overnight oats with protein powder and nut butter</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Lunch Ideas:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Seitan stir-fry with noodles</li>
                      <li>• Black bean burrito bowl with rice and guacamole</li>
                      <li>• Lentil shepherd's pie</li>
                      <li>• Chickpea curry with naan</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">Dinner Options:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Tofu steaks with quinoa and roasted vegetables</li>
                      <li>• Bean chili with cornbread</li>
                      <li>• Tempeh tacos with beans and rice</li>
                      <li>• Lentil bolognese with whole wheat pasta</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3">High-Protein Snacks:</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Protein shake (pea or rice protein)</li>
                      <li>• Roasted chickpeas (crunchy)</li>
                      <li>• Edamame (complete protein)</li>
                      <li>• Trail mix with nuts and seeds</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vegan Bodybuilding Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat frequently:</strong> 5-7 meals daily - hard to get calories/protein in 3</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Use protein powder:</strong> Makes hitting targets much easier</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Diversify protein sources:</strong> Tofu, tempeh, seitan, legumes, grains daily</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Take B12 and creatine:</strong> Non-negotiable for performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track protein intake:</strong> Until you know your portions well</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not eating enough calories:</strong> High fiber fills you up fast</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Relying on one protein source:</strong> Need variety for complete aminos</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping supplements:</strong> B12 deficiency = serious health problems</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not timing protein:</strong> Still need 20-30g post-workout</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Expecting same results as omnivores:</strong> May take slightly longer, but works!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Build Muscle on Plants
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Plant-based nutrition provides the fuel, but proper training triggers muscle growth. Get vegan-friendly
              workout programs designed for natural muscle building.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Dumbbell className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Muscle Building Workouts</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Discover hypertrophy training programs that work perfectly with vegan nutrition.
                </p>
                <Button size="lg" className="w-full bg-white text-green-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/workouts/vegan-bodybuilding">
                    View Workouts
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Leaf className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a personalized vegan bodybuilding plan for your goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join the growing vegan bodybuilding community proving plants build muscle
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
