import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Flame, Activity, Target, TrendingUp, Zap, Mountain } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Paleo Workout Program | Primal Fitness & Functional Training",
  description: "Complete paleo workout guide with primal movement patterns, functional fitness, CrossFit-style training, and natural bodyweight exercises for primal strength and athleticism.",
  keywords: "paleo workout, primal fitness, functional training, paleo exercise, CrossFit paleo, bodyweight training, primal movement, caveman workout",
  openGraph: {
    title: "Paleo Workout Program | Primal Fitness Training",
    description: "Train like our ancestors with functional, primal movement patterns.",
    url: "https://fitplanindia.com/workouts/paleo",
  },
}

export default function PaleoWorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-700 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-orange-700 font-semibold">
              🔥 Primal Fitness
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Paleo Workout: Train Like Your Ancestors
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover primal fitness with functional movement patterns, high-intensity intervals, natural bodyweight 
              exercises, and varied outdoor training that builds real-world strength and athleticism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#workouts">
                  View Workouts
                </Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/blog/paleo">
                  Paleo Diet Guide
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
                <div className="text-3xl font-bold text-orange-700 mb-2">3-5x</div>
                <div className="text-gray-600">Training Per Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-700 mb-2">20-40 min</div>
                <div className="text-gray-600">High Intensity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-700 mb-2">Functional</div>
                <div className="text-gray-600">Compound Movements</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-700 mb-2">Varied</div>
                <div className="text-gray-600">Never Boring</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Primal Fitness Philosophy</h2>
              <p className="text-lg text-gray-700 mb-6">
                Paleo/primal fitness mimics how our ancestors moved - **varied, functional, high-intensity bursts** followed 
                by rest. No treadmills or machines. Instead: sprinting, lifting heavy things, climbing, jumping, crawling, 
                and playing. Workouts are short but intense, emphasizing compound movements that build real-world strength, 
                power, and athleticism. Think CrossFit meets natural movement - constantly varied, functional exercises at 
                high intensity with adequate rest between sessions.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-orange-800">Primal Movement Patterns</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Squat:</strong> Fundamental human movement</li>
                    <li>• <strong>Hinge:</strong> Deadlifts, picking things up</li>
                    <li>• <strong>Push:</strong> Pushing objects, climbing</li>
                    <li>• <strong>Pull:</strong> Pulling, hanging, climbing</li>
                    <li>• <strong>Carry:</strong> Carrying heavy loads</li>
                    <li>• <strong>Sprint:</strong> Short bursts of speed</li>
                    <li>• <strong>Jump:</strong> Explosive power</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-amber-800">Why Primal Fitness Works</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Builds functional, real-world strength</li>
                    <li>• Efficient - short, intense workouts</li>
                    <li>• Prevents boredom with variety</li>
                    <li>• Improves athleticism and coordination</li>
                    <li>• Burns fat while building muscle</li>
                    <li>• Mimics natural human movement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Programs */}
      <section id="workouts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Paleo/Primal Workout Programs</h2>
            
            <div className="space-y-8">
              {/* Strength Training */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Flame className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">Primal Strength Training (2-3x/week)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Focus on heavy compound lifts - the movements that build true functional strength. Lift heavy things, 
                    just like our ancestors lifted rocks, logs, and carried animals.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Full Body Strength Workout (40 min):</h5>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700"><strong>Warm-up (5 min):</strong> Dynamic stretches, movement prep</p>
                        <p className="text-sm text-gray-700"><strong>1. Deadlifts:</strong> 5 sets x 5 reps (heavy) - Rest 3 min</p>
                        <p className="text-sm text-gray-700"><strong>2. Overhead Press:</strong> 4 sets x 6-8 reps - Rest 2 min</p>
                        <p className="text-sm text-gray-700"><strong>3. Weighted Pull-Ups:</strong> 4 sets x 6-8 reps - Rest 2 min</p>
                        <p className="text-sm text-gray-700"><strong>4. Front Squats:</strong> 3 sets x 8 reps - Rest 2 min</p>
                        <p className="text-sm text-gray-700"><strong>5. Farmer's Carries:</strong> 3 sets x 40m (heavy dumbbells/kettlebells)</p>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Alternative: Bodyweight Strength (No Equipment):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Pistol squats:</strong> 4 sets x 5 each leg</li>
                        <li>• <strong>Handstand push-ups:</strong> 4 sets x 5-10 (or pike push-ups)</li>
                        <li>• <strong>Weighted pull-ups:</strong> 4 sets x 8 (use backpack with rocks)</li>
                        <li>• <strong>Single-leg Romanian deadlifts:</strong> 3 sets x 10 each leg</li>
                        <li>• <strong>L-sit holds:</strong> 4 sets x 20-30 seconds</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* HIIT/MetCon */}
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Zap className="w-6 h-6 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-700">High-Intensity MetCon (2-3x/week)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    MetCon (metabolic conditioning) mimics the intense bursts of activity our ancestors did - chasing prey, 
                    fleeing danger. Short, brutal, effective. Like CrossFit WODs.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Sample MetCon Workout #1 - "Primal Grind" (20 min AMRAP*):</h5>
                      <p className="text-xs text-gray-600 mb-2">*AMRAP = As Many Rounds As Possible</p>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p>• 10 Burpees</p>
                        <p>• 20 Kettlebell Swings (24kg/16kg)</p>
                        <p>• 30 Air Squats</p>
                        <p>• 40 Mountain Climbers</p>
                        <p>• 50m Sprint</p>
                        <p className="text-xs text-gray-600 mt-2">Complete as many rounds as possible in 20 minutes. Rest only when needed.</p>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Sample MetCon Workout #2 - "Ancestral Strength" (EMOM 15*):</h5>
                      <p className="text-xs text-gray-600 mb-2">*EMOM = Every Minute On the Minute</p>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p><strong>Minute 1:</strong> 10 Kettlebell Thrusters</p>
                        <p><strong>Minute 2:</strong> 12 Box Jumps</p>
                        <p><strong>Minute 3:</strong> 15 Push-Ups</p>
                        <p><strong>Minute 4:</strong> 20 Walking Lunges</p>
                        <p><strong>Minute 5:</strong> 10 Pull-Ups</p>
                        <p className="text-xs text-gray-600 mt-2">Repeat 3 rounds (15 min total). Rest remaining time each minute.</p>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Sample MetCon Workout #3 - "Caveman Conditioning":</h5>
                      <div className="space-y-1 text-sm text-gray-700">
                        <p><strong>5 Rounds For Time:</strong></p>
                        <p>• 15 Deadlifts (bodyweight on bar)</p>
                        <p>• 20 Wall Balls</p>
                        <p>• 25 Calorie Row/Bike</p>
                        <p>• 400m Run</p>
                        <p className="text-xs text-gray-600 mt-2">Complete 5 rounds as fast as possible. Aim for under 30 minutes.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sprinting */}
              <Card className="border-yellow-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-6 h-6 text-yellow-600 mr-3" />
                    <CardTitle className="text-yellow-700">Sprint Training (1-2x/week)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Our ancestors sprinted occasionally - chasing game or escaping predators. Sprint training builds explosive 
                    power, burns fat, and improves fast-twitch muscle fibers. But it's intense - once or twice weekly is enough.
                  </p>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Sprint Workout (30 min total):</h5>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Warm-up (10 min):</strong> Light jog, dynamic stretches, 3-4 build-up sprints (50-75% effort)</p>
                      <p><strong>Main Workout:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• 8-10 x 100m sprints at 90-95% max effort</li>
                        <li>• Walk back to start for recovery (2-3 min rest between sprints)</li>
                        <li>• Focus on form: drive knees, pump arms, full effort</li>
                      </ul>
                      <p><strong>Cool-down (5 min):</strong> Light jog, static stretching</p>
                      <p className="text-xs text-gray-600 mt-2"><strong>Note:</strong> Sprint training is extremely demanding. Don't do day before/after heavy strength training.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Outdoor/Play */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Mountain className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">Outdoor & Natural Movement (1-2x/week)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Paleo lifestyle emphasizes moving outdoors in natural environments - hiking, climbing, swimming in nature, 
                    obstacle courses. This is "play" but also excellent functional fitness.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Natural Movement Activities:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Hiking:</strong> Uneven terrain, hills, elevation</li>
                        <li>• <strong>Rock climbing:</strong> Indoor/outdoor bouldering</li>
                        <li>• <strong>Swimming:</strong> Lakes, rivers, ocean</li>
                        <li>• <strong>Obstacle courses:</strong> Mud runs, Spartan races</li>
                        <li>• <strong>Trail running:</strong> Natural surfaces, varied terrain</li>
                        <li>• <strong>Tree climbing:</strong> Yes, really - primal movement!</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">MovNat-Style Workout (Outdoors):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Crawling patterns (10 min)</li>
                        <li>• Log/rock lifts and carries (10 min)</li>
                        <li>• Tree branch pull-ups and hangs (5 min)</li>
                        <li>• Balance beam walking (fallen logs)</li>
                        <li>• Broad jumps over obstacles</li>
                        <li>• Hill sprints (5-8 reps)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Week */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Paleo Training Week</h2>
            
            <Card className="border-orange-200">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-orange-800">Weekly Training Schedule</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-gray-800">Monday:</h5>
                    <p className="text-sm text-gray-700">Strength Training - Full body heavy compounds (40 min) + 15 min walk</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Tuesday:</h5>
                    <p className="text-sm text-gray-700">MetCon - High-intensity AMRAP or EMOM workout (25 min) + mobility work</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Wednesday:</h5>
                    <p className="text-sm text-gray-700">Active Recovery - Easy 30-45 min walk, yoga, or light swimming</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Thursday:</h5>
                    <p className="text-sm text-gray-700">Sprint Training - 100m sprints (30 min total including warm-up/cool-down)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Friday:</h5>
                    <p className="text-sm text-gray-700">Strength Training - Different emphasis than Monday (40 min)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Saturday:</h5>
                    <p className="text-sm text-gray-700">Outdoor Adventure - Hiking, obstacle course, rock climbing, or MetCon (60-90 min)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Sunday:</h5>
                    <p className="text-sm text-gray-700">Complete Rest or very light movement (stretching, easy walk)</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Paleo Training Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Primal Training Principles:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize compound movements:</strong> Squats, deadlifts, presses, pulls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Vary workouts:</strong> Never do same workout twice in a row</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Train outdoors when possible:</strong> Natural movement, sunshine, fresh air</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Rest adequately:</strong> High intensity requires recovery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Make it fun:</strong> Challenge yourself, but enjoy the process</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Overtraining:</strong> More isn't better - need recovery between intense sessions</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Poor form:</strong> Lift heavy only with proper technique</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Neglecting mobility:</strong> Warm-up and stretch to prevent injury</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Doing chronic cardio:</strong> Long slow cardio contradicts paleo principles</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Ignoring sleep:</strong> Recovery happens during sleep - prioritize it</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-700 to-amber-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Primal Transformation
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Primal fitness is powerful, but combine with the paleo diet - whole foods, no grains, high protein - 
              for complete ancestral health and optimal body composition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="/blog/paleo">
                  View Paleo Diet Guide
                </Link>
              </Button>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/ai-coach">
                  Get Personal Plan
                </Link>
              </Button>
            </div>
            <p className="text-white text-sm mt-6">
              🔥 Train like your ancestors for primal strength and vitality
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
