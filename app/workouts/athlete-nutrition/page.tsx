import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Trophy, Dumbbell, Zap, Clock, Target, TrendingUp, Activity, Heart } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Athlete Training Program | Sports Performance Workouts for Competitive Athletes",
  description: "Complete athlete training program with sport-specific workouts, strength training, speed/agility drills, endurance conditioning, and performance optimization for competitive athletes.",
  keywords: "athlete training, sports workouts, performance training, athletic conditioning, sports training program, athlete workout plan, competitive sports training",
  openGraph: {
    title: "Athlete Training Program | Sports Performance Workouts",
    description: "Complete training programs for competitive athletes to maximize performance.",
    url: "https://fitplanindia.com/workouts/athlete-nutrition",
  },
}

export default function AthleteWorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-indigo-700 font-semibold">
              🏆 Elite Performance Training
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Athlete Training: Peak Performance Workouts
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Complete training programs for competitive athletes including strength training, speed/agility work, 
              endurance conditioning, and sport-specific drills to maximize athletic performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#programs">
                  View Training Programs
                </Link>
              </Button>
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/blog/athlete-nutrition">
                  Athlete Nutrition Guide
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
                <div className="text-3xl font-bold text-indigo-700 mb-2">5-6x</div>
                <div className="text-gray-600">Training Per Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-700 mb-2">60-90 min</div>
                <div className="text-gray-600">Session Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-2">Sport-Specific</div>
                <div className="text-gray-600">Training Focus</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-700 mb-2">Periodized</div>
                <div className="text-gray-600">Training Phases</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Athletic Training Principles</h2>
              <p className="text-lg text-gray-700 mb-6">
                Elite athletic performance requires systematic training across multiple components: strength and power 
                development, speed and agility, sport-specific skills, aerobic and anaerobic conditioning, flexibility 
                and mobility, and strategic recovery. Training is periodized with off-season (build foundation), pre-season 
                (sport-specific prep), in-season (maintain performance), and post-season (recovery) phases. Athletes train 
                5-6 days per week with varied intensities and focuses.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-indigo-800">Training Components</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Strength training (3-4x/week)</li>
                    <li>• Speed & agility work (2-3x/week)</li>
                    <li>• Sport-specific skills (daily)</li>
                    <li>• Conditioning (3-4x/week)</li>
                    <li>• Mobility & flexibility (daily)</li>
                    <li>• Active recovery (1-2x/week)</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-purple-800">Periodization Phases</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Off-Season:</strong> Build strength & conditioning base</li>
                    <li>• <strong>Pre-Season:</strong> Sport-specific preparation</li>
                    <li>• <strong>In-Season:</strong> Maintain performance, manage fatigue</li>
                    <li>• <strong>Post-Season:</strong> Recovery & regeneration</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Complete Training Programs by Sport Type</h2>
            
            <div className="space-y-8">
              {/* Strength & Power Sports */}
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Dumbbell className="w-6 h-6 text-red-600 mr-3" />
                    <CardTitle className="text-red-700">Strength & Power Athletes (Football, Rugby, Track & Field)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Training Focus:</h5>
                      <p className="text-sm text-gray-700">
                        Maximum strength, explosive power, speed development. Heavy compound lifts combined with plyometrics 
                        and Olympic lifting variations.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Weekly Schedule:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• <strong>Monday:</strong> Lower body strength (squats, deadlifts)</li>
                          <li>• <strong>Tuesday:</strong> Speed work + conditioning</li>
                          <li>• <strong>Wednesday:</strong> Upper body strength (bench, rows)</li>
                          <li>• <strong>Thursday:</strong> Power/plyometrics</li>
                          <li>• <strong>Friday:</strong> Full body Olympic lifts</li>
                          <li>• <strong>Saturday:</strong> Sport-specific drills</li>
                          <li>• <strong>Sunday:</strong> Active recovery/mobility</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Key Exercises:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Back squats (5x5 heavy)</li>
                          <li>• Deadlifts (5x3 heavy)</li>
                          <li>• Bench press (5x5)</li>
                          <li>• Power cleans (5x3)</li>
                          <li>• Box jumps (5x5)</li>
                          <li>• Sprint intervals (10x40m)</li>
                          <li>• Weighted sled pushes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Endurance Sports */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Activity className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Endurance Athletes (Runners, Cyclists, Swimmers, Triathletes)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Training Focus:</h5>
                      <p className="text-sm text-gray-700">
                        Aerobic base building, VO2 max development, lactate threshold training, strength endurance. 
                        Mix of long slow distance, tempo work, and interval training.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Weekly Training:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• <strong>Monday:</strong> Easy recovery run/ride</li>
                          <li>• <strong>Tuesday:</strong> Interval training (VO2 max)</li>
                          <li>• <strong>Wednesday:</strong> Strength training (full body)</li>
                          <li>• <strong>Thursday:</strong> Tempo run (threshold)</li>
                          <li>• <strong>Friday:</strong> Easy cross-training</li>
                          <li>• <strong>Saturday:</strong> Long endurance session</li>
                          <li>• <strong>Sunday:</strong> Rest or active recovery</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Strength Work (2x/week):</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Single-leg squats (3x12)</li>
                          <li>• Romanian deadlifts (3x12)</li>
                          <li>• Push-ups (3x15-20)</li>
                          <li>• Pull-ups/rows (3x10)</li>
                          <li>• Core work (planks, bridges)</li>
                          <li>• Plyometric drills (light)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mixed Sports */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Zap className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">Mixed Sport Athletes (Soccer, Basketball, Tennis, MMA)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Training Focus:</h5>
                      <p className="text-sm text-gray-700">
                        Balance of strength, power, speed, agility, and endurance. High emphasis on multi-directional movement, 
                        change of direction, and repeated sprint ability.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Weekly Structure:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• <strong>Monday:</strong> Strength training (lower)</li>
                          <li>• <strong>Tuesday:</strong> Speed & agility drills</li>
                          <li>• <strong>Wednesday:</strong> Sport-specific practice</li>
                          <li>• <strong>Thursday:</strong> Strength training (upper)</li>
                          <li>• <strong>Friday:</strong> Conditioning intervals</li>
                          <li>• <strong>Saturday:</strong> Sport practice/scrimmage</li>
                          <li>• <strong>Sunday:</strong> Active recovery</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Speed/Agility Work:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Cone drills (5-10-5, T-drill)</li>
                          <li>• Ladder drills (10 min)</li>
                          <li>• Sprint intervals (8x30m)</li>
                          <li>• Change of direction drills</li>
                          <li>• Shuttle runs</li>
                          <li>• Reactive agility work</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Workout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Strength Training Session (All Athletes)</h2>
            
            <Card className="border-indigo-200">
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-indigo-800">Full Body Strength Workout (60 minutes)</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Warm-Up (10 minutes):</h5>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• 5 min light cardio (jog, bike, row)</li>
                      <li>• Dynamic stretching (leg swings, arm circles)</li>
                      <li>• Movement prep (bodyweight squats, lunges, push-ups)</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-indigo-800 mb-2">Main Workout (45 minutes):</h5>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm">1. Back Squats - 4 sets x 6 reps (heavy)</p>
                        <p className="text-xs text-gray-600">Rest: 3 minutes between sets</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">2. Bench Press - 4 sets x 6 reps</p>
                        <p className="text-xs text-gray-600">Rest: 2-3 minutes</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">3. Romanian Deadlifts - 3 sets x 8 reps</p>
                        <p className="text-xs text-gray-600">Rest: 2 minutes</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">4. Weighted Pull-Ups - 3 sets x 8 reps</p>
                        <p className="text-xs text-gray-600">Rest: 2 minutes</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">5. Walking Lunges - 3 sets x 10 each leg</p>
                        <p className="text-xs text-gray-600">Rest: 90 seconds</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">6. Core Circuit (3 rounds):</p>
                        <ul className="text-xs text-gray-600 ml-4">
                          <li>- Plank: 45 seconds</li>
                          <li>- Russian twists: 20 reps</li>
                          <li>- Hanging leg raises: 12 reps</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Cool-Down (5 minutes):</h5>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4">
                      <li>• Light cardio (2-3 min)</li>
                      <li>• Static stretching (major muscle groups)</li>
                      <li>• Foam rolling as needed</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Athletic Training Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Performance Optimization:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Periodize training:</strong> Plan phases for peak performance timing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Track performance:</strong> Log workouts, times, weights, metrics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize recovery:</strong> 8-10 hours sleep, nutrition, hydration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Master technique:</strong> Perfect form before adding intensity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Work weaknesses:</strong> Address limiting factors in performance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Common Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Overtraining:</strong> More isn't always better - recovery is crucial</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Neglecting mobility:</strong> Leads to injury and limits performance</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Poor nutrition timing:</strong> Not fueling workouts properly</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Skipping warm-up:</strong> Increases injury risk significantly</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>No periodization:</strong> Training hard all year leads to burnout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Optimize Your Athletic Performance
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Training is only half the equation. Proper sports nutrition is essential for performance, recovery, 
              and competitive advantage. Get your complete athlete nutrition guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="/blog/athlete-nutrition">
                  View Athlete Nutrition Guide
                </Link>
              </Button>
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/ai-coach">
                  Get Personal Training Plan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
