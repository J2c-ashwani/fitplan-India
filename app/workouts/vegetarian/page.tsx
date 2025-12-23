import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Zap, Apple, Leaf } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vegetarian Workout Plan | Build Muscle on Plant-Based Diet",
  description: "Complete vegetarian workout guide with muscle-building exercises, strength training for plant-based athletes, recovery strategies, and performance optimization without meat.",
  keywords: "vegetarian workout, plant-based fitness, vegetarian muscle building, vegetarian bodybuilding, vegan workout, plant-based athlete training",
  openGraph: {
    title: "Vegetarian Workout Plan | Build Muscle on Plant-Based Diet",
    description: "Evidence-based vegetarian workouts for muscle growth, strength, and athletic performance.",
    url: "https://fitplanindia.com/workouts/vegetarian",
  },
}

export default function VegetarianWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Vegetarian Workout", href: "/workouts/vegetarian" },
  ]

  const tocItems = [
    { id: "stats", label: "Why Exercise" },
    { id: "home-workouts", label: "Home Workouts" },
    { id: "gym-workouts", label: "Gym Workouts" },
    { id: "guidelines", label: "Training Guidelines" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "Do vegetarians build muscle slower than non-vegetarians?",
      answer: "NO! With proper nutrition, vegetarians build muscle at the SAME RATE as non-vegetarians. Muscle building depends on: 1) Adequate protein intake (0.8-1g per lb bodyweight - easily achievable with dairy, eggs, lentils, tofu), 2) Progressive overload training, 3) Sufficient calories. Vegetarian diet includes complete proteins from dairy and eggs, PLUS plant proteins. Many elite bodybuilders and athletes are vegetarian. The key is intentional protein planning, not animal vs. plant debate. Hit your macros, train hard, muscle will grow!"
    },
    {
      question: "How much protein do vegetarians need for muscle building?",
      answer: "Same as anyone else: 0.8-1g per lb bodyweight for muscle building. Example: 150 lb person needs 120-150g protein daily. EASY vegetarian protein sources: Greek yogurt (20g/cup), paneer (18g/100g), eggs (6g each), milk (8g/cup), lentils (18g/cup), chickpeas (15g/cup), quinoa (8g/cup), protein powder (20-25g/scoop). Sample day: Breakfast 3 eggs + slice paneer (30g), Lunch lentil dal + yogurt (25g), Dinner paneer curry + chickpeas (35g), Snacks protein shake + nuts (30g) = 120g protein. Very achievable!"
    },
    {
      question: "Best vegetarian protein sources for muscle gain?",
      answer: "COMPLETE PROTEINS (all amino acids): Eggs (6g each - best bioavailability), Greek yogurt (20g/cup), Paneer (18g/100g), Milk (8g/cup), Cottage cheese/chhena (11g/100g), Protein powder (whey/casein). INCOMPLETE (combine for completeness): Lentils/dal (18g/cup), Chickpeas (15g/cup), Kidney beans/rajma (15g/cup), Quinoa (8g/cup), Peanut butter (8g/2 tbsp), Tofu (10g/100g). PRO TIP: Dairy + eggs make vegetarian muscle building EASIER than vegan since you have complete proteins readily available. Focus on variety!"
    },
    {
      question: "Should I take supplements as a vegetarian bodybuilder?",
      answer: "Optional but beneficial: PROTEIN POWDER (whey/casein) - convenient way to hit daily protein targets, especially post-workout. CREATINE monohydrate (5g daily) - most effective muscle/strength supplement, safe, well-researched. OMEGA-3 (if not eating fish) - get from flaxseed, chia, walnuts, or algae supplement. VITAMIN D (if low sun exposure) - 2000 IU daily. Vitamin B12 - usually fine for vegetarians (dairy/eggs have it), but check bloodwork. NOT needed: BCAAs (waste of money if eating enough protein), most other supplements. Food first, supplements second!"
    },
    {
      question: "Is it harder to lose fat and stay lean on a vegetarian diet?",
      answer: "NO - if anything, vegetarian diets can HELP fat loss! Plant foods are typically: Lower calorie density (more volume, fewer calories), higher fiber (increases satiety, reduces hunger), nutrient-dense. Many vegetarians naturally maintain leaner physiques. Keys for fat loss: 1) Calorie deficit (eat less than you burn), 2) High protein (0.8-1g/lb to preserve muscle), 3) Strength training (maintain muscle mass), 4) Consistency. Vegetarian protein sources like Greek yogurt, eggs, lentils are filling and satisfying. Avoid: Excess ghee/oil, fried foods, excessive sweets. Vegetarian diet + smart choices = excellent for staying lean!"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-teal-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-green-700 font-semibold">
              🌱 Complete Vegetarian Fitness Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Vegetarian Workout Plan: Build Muscle on Plant-Based Nutrition
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover effective workout routines designed for vegetarians to build muscle, increase strength,
              boost athletic performance, and achieve fitness goals with plant-based nutrition support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#home-workouts">
                  Home Workouts
                </Link>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="#gym-workouts">
                  Gym Workouts
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
                <div className="text-3xl font-bold text-green-600 mb-2">3-5x</div>
                <div className="text-gray-600">Strength Training Per Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">45-60min</div>
                <div className="text-gray-600">Per Workout Session</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">8-12 Reps</div>
                <div className="text-gray-600">Muscle Building Range</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">48 Hours</div>
                <div className="text-gray-600">Rest Between Same Muscle</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Muscle on a Vegetarian Diet</h2>
              <p className="text-lg text-gray-700 mb-6">
                Contrary to myths, vegetarians can build significant muscle and strength. The key is progressive overload
                (gradually increasing weight/reps), adequate protein intake (0.8-1g per lb body weight), proper recovery,
                and strategic nutrient timing. Many successful athletes, bodybuilders, and strength competitors thrive on
                vegetarian diets. Plant proteins from legumes, soy, dairy, eggs, and protein powders provide all essential
                amino acids needed for muscle growth. Combined with proper training, vegetarians can achieve the same results
                as meat-eaters.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-green-800">Training Advantages for Vegetarians</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Lower inflammation = faster recovery</li>
                    <li>• Better cardiovascular health and endurance</li>
                    <li>• Higher fiber = better gut health and digestion</li>
                    <li>• Abundant antioxidants reduce muscle damage</li>
                    <li>• Natural energy from complex carbs</li>
                    <li>• Improved insulin sensitivity for muscle growth</li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-emerald-800">Keys to Vegetarian Muscle Building</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Protein:</strong> 0.8-1g per lb body weight daily</li>
                    <li>• <strong>Calories:</strong> Slight surplus for muscle gain (200-300+)</li>
                    <li>• <strong>Timing:</strong> Protein within 2 hours post-workout</li>
                    <li>• <strong>Progressive Overload:</strong> Increase weight consistently</li>
                    <li>• <strong>Recovery:</strong> 7-9 hours sleep, rest days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Timing Alert */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-6">
              <div className="flex items-start">
                <Zap className="w-8 h-8 text-blue-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900 text-xl mb-3">⚡ Vegetarian Workout Nutrition Timing:</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Pre-Workout (1-2 hours before):</strong> Complex carbs + moderate protein (oats + banana + peanut butter)</li>
                    <li>• <strong>During Workout:</strong> Water, BCAAs optional for intense sessions</li>
                    <li>• <strong>Post-Workout (within 30-60 min):</strong> Protein shake or high-protein meal (20-30g protein + carbs)</li>
                    <li>• <strong>Recovery Meal (2-3 hours later):</strong> Complete protein source with complex carbs</li>
                    <li>• <strong>Before Bed:</strong> Slow-digesting protein (Greek yogurt, cottage cheese, casein shake)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Workouts Section */}
      <section id="home-workouts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Home className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vegetarian Home Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Build muscle and strength at home with bodyweight exercises and minimal equipment.
              </p>
            </div>

            {/* Home Workout 1: Full Body Strength */}
            <Card className="border-green-200 mb-8">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">Full Body Strength (Monday/Wednesday/Friday)</CardTitle>
                  <Badge className="bg-green-600 text-white">45-60 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (10 minutes)</h5>
                    <p className="text-sm text-gray-700">Jumping jacks, arm circles, leg swings, bodyweight squats, light stretching</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Main Workout (4 Rounds)</h5>

                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Push-Ups (Regular or Modified)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 12-20 | <strong>Rest:</strong> 45 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Best upper body builder. Do on knees if needed. Progress to decline push-ups (feet elevated)
                          for more difficulty. Builds chest, shoulders, triceps, core.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Bodyweight Squats (Add Weight if Available)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 20-30 | <strong>Rest:</strong> 45 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          King of leg exercises. Go deep (thighs parallel to ground). Hold dumbbells, backpack with books,
                          or water jugs for added resistance. Builds quads, glutes, hamstrings.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Pike Push-Ups (Shoulder Focus)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 45 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Start in downward dog position, lower head toward ground, push back up. Targets shoulders more
                          than regular push-ups. Progress to handstand push-ups against wall.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Bulgarian Split Squats</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 12-15 each leg | <strong>Rest:</strong> 45 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Back foot elevated on chair/bench, lunge down on front leg. Unilateral leg training builds
                          strength and balance. Add weight when bodyweight becomes easy.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Pull-Ups or Inverted Rows</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 5-12 (pull-ups) or 12-20 (rows) | <strong>Rest:</strong> 60 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          If you have pull-up bar, do pull-ups. Otherwise, do inverted rows under a table. Back development
                          is crucial for balanced physique.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">6. Plank Hold</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 45-90 seconds | <strong>Rest:</strong> 90 sec (end of round)
                        </p>
                        <p className="text-sm text-gray-600">
                          Core strength is foundation for all exercises. Keep body straight, don't let hips sag.
                          Progress to side planks and plank variations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool Down (5-10 minutes)</h5>
                    <p className="text-sm text-gray-700">Full body stretching, hold each 30 seconds, deep breathing</p>
                  </div>

                  <div className="bg-green-100 border border-green-300 rounded-lg p-4 mt-4">
                    <p className="text-sm text-gray-800">
                      <strong>💪 Progressive Overload:</strong> When you can do max reps easily for 4 rounds, add weight
                      (weighted vest, backpack, dumbbells) or increase difficulty (decline push-ups, pistol squats).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 2: Core & Abs */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Core & Abs (Tuesday/Thursday/Saturday)</CardTitle>
                  <Badge className="bg-blue-600 text-white">20-30 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Strong core improves all lifts, prevents injury, and builds visible abs (with proper diet).
                  Do 3-4 rounds of this circuit.
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Circuit (3-4 Rounds, Minimal Rest):</h6>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Crunches:</strong> 25-30 reps</li>
                      <li>• <strong>Bicycle Crunches:</strong> 30 reps (15 each side)</li>
                      <li>• <strong>Leg Raises:</strong> 15-20 reps</li>
                      <li>• <strong>Russian Twists:</strong> 40 reps (20 each side)</li>
                      <li>• <strong>Mountain Climbers:</strong> 30 seconds</li>
                      <li>• <strong>Plank:</strong> 60 seconds</li>
                      <li>• <strong>Side Plank:</strong> 30 seconds each side</li>
                      <li>• <strong>Rest:</strong> 60-90 seconds between rounds</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gym Workouts Section */}
      <section id="gym-workouts" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Dumbbell className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vegetarian Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Build serious muscle mass with progressive weight training optimized for plant-based nutrition.
              </p>
            </div>

            {/* Gym Workout 1: Push Day */}
            <Card className="border-emerald-200 mb-8">
              <CardHeader className="bg-emerald-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-emerald-800">Push Day - Chest, Shoulders, Triceps (Monday/Thursday)</CardTitle>
                  <Badge className="bg-emerald-600 text-white">60-75 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Barbell Bench Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 2 min
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Primary chest builder. Progressive overload is key - add weight when you can do 12 reps.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Incline Dumbbell Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Upper chest development. Better range of motion than barbell.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Dumbbell Shoulder Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Builds strong, rounded shoulders. Can alternate with Arnold press.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Cable Chest Flyes</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Isolation exercise for chest stretch and squeeze.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Lateral Raises</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Side delts for shoulder width. Use lighter weight, strict form.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">6. Tricep Dips or Pushdowns</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Finishes triceps after compound movements.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 2: Pull Day */}
            <Card className="border-teal-200 mb-8">
              <CardHeader className="bg-teal-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-teal-800">Pull Day - Back, Biceps (Tuesday/Friday)</CardTitle>
                  <Badge className="bg-teal-600 text-white">60-75 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Pull-Ups or Lat Pulldowns</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 2 min
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Best back width builder. Use assisted machine if needed for pull-ups.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Barbell or Dumbbell Rows</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Back thickness. Keep back flat, pull to lower chest/upper abs.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Seated Cable Rows</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Mid-back development. Squeeze shoulder blades together.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Face Pulls</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Rear delts and upper back. Important for shoulder health.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Barbell Bicep Curls</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Classic bicep mass builder. No swinging - strict form.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">6. Hammer Curls</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Targets brachialis for arm thickness.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 3: Leg Day */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Leg Day (Wednesday/Saturday)</CardTitle>
                  <Badge className="bg-blue-600 text-white">60-75 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Barbell Back Squats</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 2-3 min
                    </p>
                    <p className="text-sm text-gray-600 mt-1">King of all exercises. Master form before adding heavy weight.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Romanian Deadlifts</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 2 min
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Hamstring and glute focus. Feel stretch in hamstrings.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Leg Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Additional leg volume without taxing lower back.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Leg Curls</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Hamstring isolation. Prevents muscle imbalances.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Calf Raises</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 4 | <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Complete lower body. High reps for calf development.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vegetarian Muscle Building Guidelines</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Training Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Progressive overload:</strong> Add weight or reps every 1-2 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Protein post-workout:</strong> 20-30g within 60 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track your lifts:</strong> Journal weights/reps to measure progress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Sleep 7-9 hours:</strong> Muscle growth happens during recovery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Calorie surplus:</strong> Need extra calories to build muscle (200-300+)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Not eating enough:</strong> Vegetarians often under-eat calories/protein</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Same weight forever:</strong> Must increase resistance for growth</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping legs:</strong> Largest muscle group, highest growth hormone release</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Too much cardio:</strong> Interferes with muscle building if excessive</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Poor protein timing:</strong> Spread throughout day, especially post-workout</span>
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

      {/* Dual CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Vegetarian Fitness Plan
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Training is only half the equation. Proper vegetarian nutrition with adequate protein is essential
              for muscle growth, recovery, and optimal performance. Get your complete diet plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Vegetarian Diet Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn optimal vegetarian nutrition for muscle building with complete protein sources and meal timing strategies.
                </p>
                <Button size="lg" className="w-full bg-white text-green-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/vegetarian">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Leaf className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a complete vegetarian workout and nutrition plan tailored to your goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands building muscle and strength on plant-based nutrition
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
