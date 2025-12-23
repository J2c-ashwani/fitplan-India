import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Home, Dumbbell, Heart, Activity, Clock, Target, Zap, Apple, TrendingUp } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import CalculatorWidget from "@/components/CalculatorWidget"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Teen Workout Plan | Best Exercises for Teenagers & Adolescents",
  description: "Complete teen workout guide with safe, effective exercises for strength building, sports performance, fitness, and healthy development for teenagers aged 13-19.",
  keywords: "teen workout, teenager exercise, adolescent fitness, workout for teens, teenage strength training, teen gym routine, sports training for teens",
  openGraph: {
    title: "Teen Workout Plan | Complete Exercise Guide for Teenagers",
    description: "Evidence-based teen workout routines for strength, sports performance, and healthy development.",
    url: "https://fitplanindia.com/workouts/teenagers",
  },
}

export default function TeenagerWorkoutPage() {
  const breadcrumbItems = [
    { label: "Workouts", href: "/workouts" },
    { label: "Teen Workout Plan", href: "/workouts/teenagers" },
  ]

  const tocItems = [
    { id: "stats", label: "Why Exercise" },
    { id: "safety", label: "Safety Guidelines" },
    { id: "home-workouts", label: "Home Workouts" },
    { id: "gym-workouts", label: "Gym Workouts" },
    { id: "guidelines", label: "Training Guidelines" },
    { id: "faq", label: "FAQs" },
  ]

  const faqs = [
    {
      question: "At what age can teenagers start lifting weights? Is it safe?",
      answer: "Teens can start strength training around age 13-14 (after puberty begins) with proper supervision. Weight training is SAFE if done correctly: Master bodyweight exercises first (push-ups, squats), start with light weights (focus on form, not ego), get supervision from coach/trainer/parent initially, NEVER max out (1-rep max) - growth plates still developing. Benefits: Builds confidence, improves sports performance, establishes healthy habits. More dangerous = contact sports. With proper technique, weight training is very safe for teens!"
    },
    {
      question: "How much should teenagers exercise weekly?",
      answer: "Guidelines: 60 minutes daily physical activity (can include sports, PE class, active play). For structured training: 3-4x weekly strength training (30-45 min), 2-3x weekly cardio/sports (30-60 min), 1-2 rest days. DON'T overdo it - teens need recovery for growth. Balance training with school, sleep (8-10 hours essential!), social life. Quality >> quantity. Listen to body - persistent fatigue or pain = need rest. Many teen athletes overtrain, which hinders growth and performance."
    },
    {
      question: "Will lifting weights stunt my growth as a teenager?",
      answer: "NO! This is a MYTH with zero scientific evidence. Proper weight training does NOT stunt growth. Growth plates close based on genetics and hormones, not exercise. Actually, resistance training STIMULATES growth hormone release! What CAN damage growth plates: Improper technique with heavy weights, maxing out (1-rep max), lack of supervision, sports injuries (much higher risk than weight training). With proper form and reasonable weights, lifting is perfectly safe and beneficial for developing teens."
    },
    {
      question: "How can teenagers build muscle and get bigger?",
      answer: "Teen years are BEST time to build muscle - hormones (testosterone, growth hormone) are sky-high! Keys: 1) Strength train 3-4x weekly with progressive overload (gradually add weight), 2) Eat ENOUGH calories (most teens under-eat), especially protein (0.7-1g per lb bodyweight), 3) Sleep 8-10 hours (growth and recovery happen during sleep - NON-NEGOTIABLE), 4) Be patient - natural muscle building takes months/years, not weeks. Avoid: Steroids, extreme diets, overtraining. Focus on compound movements (squats, deadlifts, bench press, pull-ups)."
    },
    {
      question: "Should teenagers do the same workouts as adults?",
      answer: "Similar principles but modified approach: Same exercises (squats, push-ups, rows) but START LIGHTER, focus more on FORM than weight, avoid max effort lifts initially, include more variety/fun (sports, activities), emphasize skill development and movement quality. Teens recover faster than adults (can train more frequently), but also need more sleep and nutrition for growth. Teen workouts should be challenging but sustainable - avoid adult 'bodybuilder' routines which are too much volume. Full-body workouts 3x weekly work great for teens."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <StickyTOC items={tocItems} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-indigo-700 font-semibold">
              💪 Complete Teen Workout Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Teen Workout Plan: Build Strength, Power & Athletic Performance
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover safe, effective workouts designed specifically for teenagers to build muscle, improve sports
              performance, boost confidence, and establish lifelong fitness habits during adolescent years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#home-workouts">
                  Home Workouts
                </Link>
              </Button>
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white border-2 border-white font-semibold" asChild>
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
                <div className="text-3xl font-bold text-indigo-600 mb-2">60min</div>
                <div className="text-gray-600">Daily Activity Recommended</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">3x/Week</div>
                <div className="text-gray-600">Strength Training Frequency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">30-60min</div>
                <div className="text-gray-600">Per Workout Session</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">1-2 Days</div>
                <div className="text-gray-600">Rest Between Sessions</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Exercise is Essential for Teens</h2>
              <p className="text-lg text-gray-700 mb-6">
                The teenage years are a crucial period for building strength, establishing healthy habits, and developing
                athletic abilities. Regular exercise during adolescence builds bone density, develops muscle mass, improves
                cardiovascular fitness, enhances sports performance, boosts self-confidence and body image, reduces stress
                and anxiety, improves focus and academic performance, and establishes lifelong fitness habits. Teens who
                exercise regularly have better mental health, stronger immune systems, and reduced risk of obesity.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-indigo-800">Benefits of Teen Exercise</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Builds muscle strength and bone density</li>
                    <li>• Improves sports performance and athleticism</li>
                    <li>• Boosts confidence and self-esteem</li>
                    <li>• Reduces stress, anxiety, and depression</li>
                    <li>• Improves sleep quality and energy levels</li>
                    <li>• Enhances focus and academic performance</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-purple-800">Teen Training Priorities</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Proper Form:</strong> Master technique before adding weight</li>
                    <li>• <strong>Progressive Overload:</strong> Gradually increase difficulty</li>
                    <li>• <strong>Full Body:</strong> Balance all muscle groups</li>
                    <li>• <strong>Sports Specific:</strong> Train for your sport's demands</li>
                    <li>• <strong>Recovery:</strong> Rest days are essential for growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section id="safety" className="py-8 bg-yellow-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-8 h-8 text-yellow-700 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-yellow-900 text-xl mb-3">⚠️ Essential Safety Guidelines for Teens:</h4>
                  <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Get clearance from doctor</strong> before starting intense training (especially if sedentary)</li>
                    <li>• <strong>Master bodyweight exercises</strong> before adding weights</li>
                    <li>• <strong>Use proper form always</strong> - bad form causes injuries that affect growth</li>
                    <li>• <strong>Never max out</strong> (1-rep max) - growth plates are still developing</li>
                    <li>• <strong>Warm up 5-10 minutes</strong> before every workout</li>
                    <li>• <strong>Get supervision</strong> when learning new exercises, especially with weights</li>
                    <li>• <strong>Listen to your body</strong> - stop if you feel pain (not soreness)</li>
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
              <Home className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Teen Home Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Build strength and fitness at home with bodyweight exercises and minimal equipment.
              </p>
            </div>

            {/* Home Workout 1: Full Body Beginner */}
            <Card className="border-indigo-200 mb-8">
              <CardHeader className="bg-indigo-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-indigo-800">Full Body Beginner (Monday/Wednesday/Friday)</CardTitle>
                  <Badge className="bg-indigo-600 text-white">30-40 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (5-10 minutes)</h5>
                    <p className="text-sm text-gray-700">Jumping jacks, high knees, arm circles, leg swings, light jogging in place</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Main Workout (3-4 Rounds)</h5>

                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">1. Push-Ups (Regular or Modified)</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 10-20 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Start in plank, lower chest to ground, push back up. Do on knees if regular is too hard.
                          Builds chest, shoulders, triceps, and core.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">2. Bodyweight Squats</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 15-25 | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Feet shoulder-width apart, lower down as if sitting in chair, keep chest up, drive through heels to stand.
                          Best leg exercise for teens.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">3. Walking Lunges</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 10-12 each leg | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Step forward, lower back knee toward ground, push up and step forward with other leg.
                          Builds leg strength and balance.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">4. Plank Hold</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Duration:</strong> 30-60 seconds | <strong>Rest:</strong> 30 seconds
                        </p>
                        <p className="text-sm text-gray-600">
                          Hold plank position on forearms or hands, keep body straight from head to heels.
                          Core strength is crucial for all sports.
                        </p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h6 className="font-semibold mb-2">5. Burpees</h6>
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Reps:</strong> 8-15 | <strong>Rest:</strong> 60 seconds between rounds
                        </p>
                        <p className="text-sm text-gray-600">
                          Squat, place hands down, jump feet back to plank, do push-up, jump feet in, jump up.
                          Full-body exercise that builds power and endurance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool Down (5 minutes)</h5>
                    <p className="text-sm text-gray-700">Full body stretching - hold each stretch 20-30 seconds</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 2: Athletic Performance */}
            <Card className="border-blue-200 mb-8">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-800">Athletic Performance (Tuesday/Thursday)</CardTitle>
                  <Badge className="bg-blue-600 text-white">25-35 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Focus on explosive power, speed, and agility - essential for most sports.
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Jump Squats</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Squat down, explode up into a jump. Builds explosive leg power.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Box Jumps (Or Step Jumps)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Jump onto sturdy box or step. Improves vertical jump and power.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Sprint Intervals</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Format:</strong> 30 sec sprint, 90 sec walk/jog (repeat 6-8x)
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Builds speed and anaerobic endurance for sports.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Ladder Drills (Or Line Drills)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Duration:</strong> 10 minutes | <strong>Various patterns</strong>
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Improves footwork, agility, and coordination for any sport.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Home Workout 3: Core & Abs */}
            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">Core & Abs Finisher (Add to any workout)</CardTitle>
                  <Badge className="bg-purple-600 text-white">10-15 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Core Circuit (2-3 rounds):</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Crunches: 20 reps</li>
                      <li>• Bicycle crunches: 20 reps</li>
                      <li>• Leg raises: 15 reps</li>
                      <li>• Russian twists: 30 reps (15 each side)</li>
                      <li>• Plank: 45-60 seconds</li>
                      <li>• Rest: 30 seconds between rounds</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Why Core Matters:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Improves athletic performance</li>
                      <li>• Prevents back injuries</li>
                      <li>• Better posture and balance</li>
                      <li>• Transfers power in sports</li>
                      <li>• Aesthetic six-pack (with diet)</li>
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
              <Dumbbell className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Teen Gym Workout Plan</h2>
              <p className="text-lg text-gray-600">
                Build serious muscle and strength with proper weight training (ages 14+, with supervision).
              </p>
            </div>

            {/* Gym Workout 1: Upper Body */}
            <Card className="border-purple-200 mb-8">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">Upper Body Day (Monday/Thursday)</CardTitle>
                  <Badge className="bg-purple-600 text-white">45-60 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-800">
                    <strong>⚠️ Important:</strong> Start with light weights (even just the bar). Master form first.
                    Have a coach or trainer supervise initially. Never train alone with heavy weights.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Bench Press (Barbell or Dumbbell)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3-4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Primary chest builder. Start light, use spotter.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Pull-Ups or Lat Pulldowns</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3-4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Best back exercise. Use assisted pull-up machine if needed.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Dumbbell Shoulder Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Builds strong, athletic shoulders.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Dumbbell Rows</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 each arm | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Thick back development, improves posture.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Bicep Curls</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Arm development. Start with light dumbbells (10-15 lbs).</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">6. Tricep Dips or Pushdowns</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-15 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Completes arm training, builds triceps.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gym Workout 2: Lower Body */}
            <Card className="border-green-200 mb-8">
              <CardHeader className="bg-green-50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-800">Lower Body Day (Tuesday/Friday)</CardTitle>
                  <Badge className="bg-green-600 text-white">45-60 min</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">1. Barbell Back Squats</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3-4 | <strong>Reps:</strong> 8-12 | <strong>Rest:</strong> 2 min
                    </p>
                    <p className="text-sm text-gray-600 mt-1">King of leg exercises. Master form with just the bar first.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">2. Romanian Deadlifts</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10-12 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Hamstrings and glutes. Critical for athletic performance.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">3. Leg Press</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 90 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Additional leg volume, safer than squats for beginners.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">4. Walking Lunges (With Dumbbells)</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 10 each leg | <strong>Rest:</strong> 60 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Unilateral leg training, improves balance and coordination.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">5. Leg Curls</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3 | <strong>Reps:</strong> 12-15 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Isolates hamstrings, prevents imbalances.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">6. Calf Raises</h6>
                    <p className="text-sm text-gray-700">
                      <strong>Sets:</strong> 3-4 | <strong>Reps:</strong> 15-20 | <strong>Rest:</strong> 45 sec
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Complete lower body, helps with jumping and sprinting.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cardio & Sports Training */}
            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Cardio & Sports-Specific Training (Wednesday/Saturday)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Cardio Options:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Basketball pickup games (30-45 min)</li>
                      <li>• Swimming laps (30-40 min)</li>
                      <li>• Soccer practice or scrimmage</li>
                      <li>• Running intervals on track</li>
                      <li>• Cycling or mountain biking</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h6 className="font-semibold mb-2">Sports-Specific Drills:</h6>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Practice skills for your sport</li>
                      <li>• Agility ladder work</li>
                      <li>• Cone drills for footwork</li>
                      <li>• Medicine ball throws</li>
                      <li>• Sport-specific conditioning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exercise Guidelines */}
      <section id="guidelines" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Teen Training Guidelines & Safety</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Training Best Practices:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Master bodyweight first:</strong> Before adding weights to exercises</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Focus on form:</strong> Quality over weight lifted every time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Progress gradually:</strong> Add weight/reps slowly over weeks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Rest 1-2 days:</strong> Between training same muscle groups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Get 8-10 hours sleep:</strong> Growth and recovery happen during sleep</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Teen Training Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ego lifting:</strong> Using too much weight with bad form</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Training every day:</strong> No rest days = overtraining and injury</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping warm-up:</strong> Cold muscles tear easily</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Copying social media:</strong> Influencer workouts aren't for beginners</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Poor nutrition:</strong> Can't out-train a bad diet</span>
                  </li>
                </ul>
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
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Teen Fitness Journey
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Working out is only half the equation. Proper nutrition is essential for muscle growth, recovery,
              and athletic performance. Get your complete teen nutrition plan today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Diet Guide CTA */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Apple className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Teen Nutrition Guide</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Learn proper nutrition for muscle growth, sports performance, and healthy development during teenage years.
                </p>
                <Button size="lg" className="w-full bg-white text-indigo-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/blog/teenagers">
                    View Diet Guide
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Get Personal Plan</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Use our AI Coach to create a complete teen fitness and nutrition plan tailored to your sport and goals.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Get AI Plan
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands of teens building strength and confidence through proper training
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
