import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Dumbbell, Leaf, TrendingUp, Zap, Target, Activity } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vegan Bodybuilding Workout | Plant-Based Muscle Building Program",
  description: "Complete vegan bodybuilding workout guide with muscle building routines, strength training for plant-based athletes, and effective programs to build muscle on a vegan diet.",
  keywords: "vegan bodybuilding, plant based muscle building, vegan workout, vegan strength training, build muscle vegan, plant based fitness, vegan athlete training",
  openGraph: {
    title: "Vegan Bodybuilding Workout | Plant-Based Muscle Building",
    description: "Proven muscle building workouts for vegan and plant-based athletes.",
    url: "https://fitplanindia.com/workouts/vegan-bodybuilding",
  },
}

export default function VeganBodybuildingWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Vegan Bodybuilding", href: "/workouts/vegan-bodybuilding" },
  ]

  const tocItems = [
    { id: "stats", label: "Key Stats" },
    { id: "programs", label: "Training Programs" },
    { id: "timing", label: "Nutrition Timing" },
    { id: "tips", label: "Success Tips" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Can you really build muscle on a vegan diet? Won't I lose gains?",
      answer: "YES, you can 100% build muscle on a vegan diet! Many elite athletes and bodybuilders are vegan. Protein is protein - your body doesn't care if it's from chicken or lentils. Keys: Hit protein targets (0.8-1g per lb bodyweight), eat variety of plant proteins for complete amino acids, time protein around workouts, ensure adequate calories. Vegan sources: tofu, tempeh, seitan, lentils, beans, protein powder (pea/rice/soy). Numerous studies show plant protein builds muscle equally to animal protein when intake and training are matched."
    },
    {
      question: "How much protein do vegan bodybuilders need daily?",
      answer: "Same as non-vegan bodybuilders: 0.8-1g per lb bodyweight for muscle building. Example: 150 lb person needs 120-150g protein daily. Since plant proteins are less bioavailable, aim for higher end (1g per lb) to be safe. Distribute across 4-5 meals (25-30g per meal) for optimal muscle protein synthesis. EASY to hit with variety: Breakfast tofu scramble (20g), lunch lentil curry + rice (25g), dinner tempeh stir-fry (30g), snacks protein shake + nuts (40g) = 115g+ protein. Not difficult if you plan ahead!"
    },
    {
      question: "Best vegan protein sources for muscle building?",
      answer: "TOP TIER (high protein, complete amino acids): Tofu (10g/100g), Tempeh (19g/100g), Seitan (25g/100g), Edamame (11g/100g), Soy milk (7g/cup), Vegan protein powder (20-25g/scoop). GOOD TIER (incomplete but combine well): Lentils (18g/cup), Chickpeas (15g/cup), Black beans (15g/cup), Quinoa (8g/cup), Peanut butter (8g/2 tbsp), Almonds (6g/oz). STRATEGY: Combine incomplete sources (rice + beans = complete protein). Supplement with protein powder if needed. Variety = complete amino acid profile!"
    },
    {
      question: "Do I need supplements as a vegan bodybuilder or just protein powder?",
      answer: "Beyond protein powder (optional but convenient), consider: CRITICAL: Vitamin B12 (not in plants - supplement 1000mcg weekly), Vitamin D (if low sun exposure - 2000 IU daily). BENEFICIAL: Creatine monohydrate (5g daily - most effective supplement for muscle/strength, vegans typically have lower stores), Omega-3 (algae oil 250mg DHA/EPA daily), Iron (if levels low - eat with vitamin C for absorption). NOT needed: BCAAs (overrated, complete protein has all you need), most other supplements. Get bloodwork to identify actual deficiencies!"
    },
    {
      question: "Will I be weaker than meat-eating bodybuilders?",
      answer: "NO! Strength comes from progressive overload training + adequate protein/calories, NOT from meat consumption. Many world-record holders, elite athletes, and top bodybuilders are vegan: Patrik Baboumian (strongman), Kendrick Farris (Olympic weightlifter), Nimai Delgado (bodybuilder). Plant-based diets may offer advantages: Better recovery (anti-inflammatory), better cardiovascular health (more endurance), better digestion. The gym doesn't care what you eat - it cares if you train hard, eat enough protein/calories, and recover properly. Vegan or not, those principles = gains!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-green-700 font-semibold">
              🌱 Plant-Powered Muscle
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Vegan Bodybuilding: Build Muscle on Plants
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover proven muscle-building workouts specifically optimized for vegan athletes. Build serious size and
              strength with plant-based nutrition and strategic training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#programs">
                  View Programs
                </Link>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/blog/vegan-bodybuilding">
                  Vegan Nutrition Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section id="stats" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-3xl font-bold text-green-700 mb-2">4-5x</div>
                <div className="text-gray-600">Training Per Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-700 mb-2">60-90 min</div>
                <div className="text-gray-600">Session Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-700 mb-2">8-12 reps</div>
                <div className="text-gray-600">Hypertrophy Range</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-2">Progressive</div>
                <div className="text-gray-600">Overload Focus</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vegan Muscle Building Principles</h2>
              <p className="text-lg text-gray-700 mb-6">
                Building muscle on a vegan diet requires the **same training principles** as omnivorous bodybuilding:
                progressive overload, adequate volume, proper form, and sufficient recovery. The difference is in nutrition
                timing and protein distribution. Train with **heavy compound movements** for mass, 8-12 rep range for
                hypertrophy, 4-5 days per week targeting each muscle 2x weekly. Focus on getting stronger over time
                (progressive overload) and fuel workouts with quality plant-based calories and protein.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-green-800">Vegan Bodybuilding Keys</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Progressive overload (increase weight/reps)</li>
                    <li>• Compound movements (squats, deadlifts, presses)</li>
                    <li>• 8-12 rep range for hypertrophy</li>
                    <li>• Train each muscle 2x per week</li>
                    <li>• Adequate plant protein (1.6-2.2g per kg)</li>
                    <li>• Pre/post workout nutrition timing crucial</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-emerald-800">Why It Works for Vegans</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Training stimulates muscle growth signal</li>
                    <li>• Plant protein builds muscle equally well</li>
                    <li>• Carbs fuel intense training (abundant in plants)</li>
                    <li>• Anti-inflammatory plants aid recovery</li>
                    <li>• Many successful vegan bodybuilders prove it</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Vegan Bodybuilding Training Programs</h2>

            <div className="space-y-8">
              {/* 4-Day Split */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Dumbbell className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">4-Day Upper/Lower Split (Recommended for Vegans)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    This split allows you to train each muscle group twice per week with adequate recovery - ideal for
                    maximizing muscle protein synthesis with plant-based nutrition.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Day 1 - Upper Body (Push Focus):</h5>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>• <strong>Bench Press:</strong> 4 sets x 8-10 reps</p>
                        <p>• <strong>Overhead Press:</strong> 3 sets x 8-12 reps</p>
                        <p>• <strong>Incline Dumbbell Press:</strong> 3 sets x 10-12 reps</p>
                        <p>• <strong>Dips:</strong> 3 sets x 10-15 reps</p>
                        <p>• <strong>Lateral Raises:</strong> 3 sets x 12-15 reps</p>
                        <p>• <strong>Tricep Extensions:</strong> 3 sets x 12 reps</p>
                        <p className="text-xs text-gray-600 mt-2">Rest: 2-3 minutes between heavy sets</p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Day 2 - Lower Body (Quad Focus):</h5>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>• <strong>Back Squats:</strong> 4 sets x 6-10 reps (heavy)</p>
                        <p>• <strong>Leg Press:</strong> 3 sets x 10-12 reps</p>
                        <p>• <strong>Walking Lunges:</strong> 3 sets x 12 each leg</p>
                        <p>• <strong>Leg Extensions:</strong> 3 sets x 12-15 reps</p>
                        <p>• <strong>Standing Calf Raises:</strong> 4 sets x 15-20 reps</p>
                        <p>• <strong>Abs:</strong> 3 sets planks, leg raises, crunches</p>
                      </div>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Day 3 - Upper Body (Pull Focus):</h5>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>• <strong>Deadlifts:</strong> 4 sets x 6-8 reps (heavy)</p>
                        <p>• <strong>Pull-Ups/Lat Pulldowns:</strong> 4 sets x 8-12 reps</p>
                        <p>• <strong>Barbell Rows:</strong> 3 sets x 8-10 reps</p>
                        <p>• <strong>Dumbbell Rows:</strong> 3 sets x 10-12 reps each</p>
                        <p>• <strong>Face Pulls:</strong> 3 sets x 15 reps</p>
                        <p>• <strong>Bicep Curls:</strong> 3 sets x 12 reps</p>
                        <p>• <strong>Hammer Curls:</strong> 3 sets x 12 reps</p>
                      </div>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Day 4 - Lower Body (Posterior Chain):</h5>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>• <strong>Romanian Deadlifts:</strong> 4 sets x 8-10 reps</p>
                        <p>• <strong>Hip Thrusts:</strong> 4 sets x 10-12 reps</p>
                        <p>• <strong>Leg Curls:</strong> 3 sets x 12 reps</p>
                        <p>• <strong>Bulgarian Split Squats:</strong> 3 sets x 10 each leg</p>
                        <p>• <strong>Seated Calf Raises:</strong> 4 sets x 15-20 reps</p>
                        <p>• <strong>Abs/Core:</strong> 3 sets of varied exercises</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-yellow-800">Weekly Schedule:</h5>
                      <p className="text-sm text-gray-700">
                        <strong>Monday:</strong> Upper Push | <strong>Tuesday:</strong> Lower Quad | <strong>Wednesday:</strong> Rest/Cardio |
                        <strong>Thursday:</strong> Upper Pull | <strong>Friday:</strong> Lower Hamstring | <strong>Sat/Sun:</strong> Rest
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 5-Day PPL */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">5-Day Push/Pull/Legs (Advanced)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    For experienced lifters who want to maximize volume and frequency. Requires excellent recovery and
                    consistent high-protein vegan meals.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Weekly Structure:</h5>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Monday - Push:</strong> Chest, shoulders, triceps (8-10 exercises, 20+ sets)</p>
                      <p><strong>Tuesday - Pull:</strong> Back, biceps, rear delts (8-10 exercises, 20+ sets)</p>
                      <p><strong>Wednesday - Legs:</strong> Quads, hamstrings, glutes, calves (8-10 exercises, 20+ sets)</p>
                      <p><strong>Thursday - Rest or Cardio</strong></p>
                      <p><strong>Friday - Push</strong> (different exercises than Monday)</p>
                      <p><strong>Saturday - Pull</strong> (different exercises than Tuesday)</p>
                      <p><strong>Sunday - Rest</strong></p>
                      <p className="text-xs text-gray-600 mt-2">Each muscle hit 2x per week with high volume</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nutrition Timing */}
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Zap className="w-6 h-6 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-700">Pre/Post Workout Nutrition for Vegan Lifters</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Timing your plant-based protein and carbs around workouts maximizes muscle protein synthesis and
                    recovery - especially important for vegans.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Pre-Workout (1-2 hours before):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Goal:</strong> Energy for intense training</li>
                        <li>• <strong>Carbs:</strong> 30-50g (oats, banana, rice)</li>
                        <li>• <strong>Protein:</strong> 20-30g (protein shake, tofu)</li>
                        <li>• <strong>Example:</strong> Smoothie with protein powder, banana, oats, almond butter</li>
                        <li>• Avoid heavy fats (slow digestion)</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Post-Workout (Within 1-2 hours):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Goal:</strong> Muscle recovery and growth</li>
                        <li>• <strong>Protein:</strong> 30-40g (complete amino acids)</li>
                        <li>• <strong>Carbs:</strong> 50-80g (replenish glycogen)</li>
                        <li>• <strong>Example:</strong> Protein shake + rice bowl with beans and veggies</li>
                        <li>• Critical for plant-based muscle building!</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Timing */}
      <section id="timing" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Vegan Bodybuilding Workout (Upper Push Day)</h2>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Chest, Shoulders & Triceps (75 min)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-1">Pre-Workout (90 min before):</h5>
                    <p className="text-sm text-gray-700">Vegan protein shake (30g protein), banana, handful of oats</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (10 minutes):</h5>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• 5 min light cardio</li>
                      <li>• Dynamic stretching (arm circles, band pull-aparts)</li>
                      <li>• 2-3 warm-up sets of first exercise</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Main Workout (60 minutes):</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm">1. Barbell Bench Press - 4 sets x 8-10 reps</p>
                        <p className="text-xs text-gray-600">Heavy compound for mass | Rest: 3 min</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">2. Overhead Press - 3 sets x 8-12 reps</p>
                        <p className="text-xs text-gray-600">Shoulder mass builder | Rest: 2-3 min</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">3. Incline Dumbbell Press - 3 sets x 10-12 reps</p>
                        <p className="text-xs text-gray-600">Upper chest focus | Rest: 2 min</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">4. Cable Flyes - 3 sets x 12-15 reps</p>
                        <p className="text-xs text-gray-600">Chest isolation | Rest: 90 sec</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">5. Lateral Raises - 3 sets x 12-15 reps</p>
                        <p className="text-xs text-gray-600">Shoulder width | Rest: 90 sec</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">6. Tricep Rope Pushdowns - 3 sets x 12-15 reps</p>
                        <p className="text-xs text-gray-600">Tricep isolation | Rest: 90 sec</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">7. Overhead Tricep Extension - 3 sets x 12 reps</p>
                        <p className="text-xs text-gray-600">Tricep stretch focus | Rest: 90 sec</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool-Down (5 minutes):</h5>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Light stretching (chest, shoulders, triceps)</li>
                      <li>• Deep breathing</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-1">Post-Workout (Within 1 hour):</h5>
                    <p className="text-sm text-gray-700">Vegan protein shake (40g), large bowl of rice with black beans, tofu, and vegetables</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section id="tips" className="py-16 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vegan Bodybuilding Success Tips</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Keys to Plant-Based Gains:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Eat sufficient protein:</strong> 1.6-2.2g per kg from varied sources</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Time nutrition:</strong> Pre/post workout meals are critical</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Progressive overload:</strong> Always try to lift heavier or do more reps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track workouts:</strong> Log weights, sets, reps to ensure progress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Supplement smart:</strong> B12, creatine, vegan protein powder</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Vegan Lifting Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not eating enough protein:</strong> Aim for 1.6-2.2g per kg bodyweight</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping pre/post meals:</strong> Timing matters for plant protein</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not eating enough calories:</strong> Need surplus to build muscle</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Training without plan:</strong> Need progressive overload structure</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Neglecting B12/creatine:</strong> Key supplements for vegan lifters</span>
                  </li>
                </ul>
              </div>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Vegan Muscle-Building Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Training provides the stimulus, but nutrition delivers the building blocks. Get your complete vegan
              bodybuilding diet guide with meal plans, protein sources, and supplement recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="/blog/vegan-bodybuilding">
                  View Vegan Nutrition Guide
                </Link>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/ai-coach">
                  Get Personal Plan
                </Link>
              </Button>
            </div>
            <p className="text-white text-sm mt-6">
              🌱 Build muscle on plants - proven by thousands of vegan athletes worldwide
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
