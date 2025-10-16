import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Heart, Activity, Smile, Sun, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mediterranean Lifestyle Workout | Active Living for Longevity & Health",
  description: "Complete Mediterranean lifestyle exercise guide with walking routines, active living principles, longevity workouts, and balanced fitness for heart health and vitality.",
  keywords: "mediterranean lifestyle, active living, longevity workouts, walking routine, mediterranean fitness, healthy aging exercise, lifestyle fitness",
  openGraph: {
    title: "Mediterranean Lifestyle Workout | Active Living Guide",
    description: "Exercise and active living principles from the world's healthiest lifestyle.",
    url: "https://fitplanindia.com/workouts/mediterranean",
  },
}

export default function MediterraneanWorkoutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-green-700 font-semibold">
              🌿 Active Mediterranean Lifestyle
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Mediterranean Lifestyle: Active Living for Longevity
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Discover the Mediterranean approach to fitness - not intense gym sessions, but a lifestyle of daily movement, 
              walking, outdoor activities, and social physical activities for lasting health and longevity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#activities">
                  View Activities
                </Link>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/blog/mediterranean">
                  Mediterranean Diet Guide
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
                <div className="text-3xl font-bold text-green-700 mb-2">30-60 min</div>
                <div className="text-gray-600">Daily Movement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-700 mb-2">Walking</div>
                <div className="text-gray-600">Primary Activity</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-700 mb-2">Social</div>
                <div className="text-gray-600">Group Activities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-2">Lifelong</div>
                <div className="text-gray-600">Sustainable Fitness</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Mediterranean Approach to Fitness</h2>
              <p className="text-lg text-gray-700 mb-6">
                Mediterranean cultures prioritize **active living** over structured exercise. Instead of spending hours at 
                the gym, they integrate movement throughout daily life - walking to markets, gardening, dancing, socializing 
                while active, and enjoying outdoor activities. This sustainable approach leads to better adherence, lower 
                stress, and greater longevity than intense, unsustainable gym routines. The focus is moderate, consistent 
                activity combined with rest, enjoyment, and social connection.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-green-800">Mediterranean Fitness Principles</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Daily moderate movement over intense workouts</li>
                    <li>• Walking as primary form of exercise</li>
                    <li>• Outdoor activities in nature and sunshine</li>
                    <li>• Social physical activities (group walks, dancing)</li>
                    <li>• Functional movement (gardening, household tasks)</li>
                    <li>• Enjoyment and sustainability over intensity</li>
                  </ul>
                </div>
                
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-3 text-emerald-800">Health Benefits</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Reduced heart disease risk (40-50%)</li>
                    <li>• Improved longevity and quality of life</li>
                    <li>• Lower stress and better mental health</li>
                    <li>• Maintained healthy weight naturally</li>
                    <li>• Strong social connections</li>
                    <li>• Better sleep and energy levels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Activities */}
      <section id="activities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Mediterranean Active Living Activities</h2>
            
            <div className="space-y-8">
              {/* Walking */}
              <Card className="border-green-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Activity className="w-6 h-6 text-green-600 mr-3" />
                    <CardTitle className="text-green-700">Daily Walking - The Foundation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Walking is the cornerstone of Mediterranean fitness. It's free, accessible, low-impact, and sustainable 
                    for life. Mediterranean cultures walk to markets, cafes, friends' homes - building 10,000+ steps into 
                    daily life without "exercise."
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Daily Walking Routine:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Morning walk:</strong> 20-30 min after breakfast</li>
                        <li>• <strong>Post-lunch stroll:</strong> 10-15 min (aids digestion)</li>
                        <li>• <strong>Evening walk:</strong> 20-30 min before dinner</li>
                        <li>• <strong>Weekend longer walks:</strong> 60-90 min in nature</li>
                        <li>• <strong>Total:</strong> 60-90 minutes daily walking</li>
                        <li>• Pace: Moderate - can hold conversation</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Making Walking a Lifestyle:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Walk to run errands instead of driving</li>
                        <li>• Take stairs instead of elevators</li>
                        <li>• Park farther from destinations</li>
                        <li>• Walk while talking on phone</li>
                        <li>• Join walking groups or walk with friends</li>
                        <li>• Explore new neighborhoods on foot</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Outdoor Activities */}
              <Card className="border-blue-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Sun className="w-6 h-6 text-blue-600 mr-3" />
                    <CardTitle className="text-blue-700">Outdoor & Nature Activities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Mediterranean lifestyle emphasizes outdoor movement in natural settings, providing both physical 
                    activity and mental health benefits from nature exposure and vitamin D from sunshine.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Gardening (2-3x/week):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Digging, planting, weeding</li>
                        <li>• Burns 200-400 cal/hour</li>
                        <li>• Functional strength training</li>
                        <li>• Provides fresh vegetables</li>
                        <li>• Stress relief and connection to nature</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Swimming (2-3x/week):</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 30-45 minutes leisurely</li>
                        <li>• Full-body, low-impact</li>
                        <li>• Popular in coastal regions</li>
                        <li>• Social and refreshing</li>
                        <li>• Excellent for all ages</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2 text-blue-800">Hiking/Nature Walks:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Weekend activity (1-2 hours)</li>
                        <li>• Gentle terrain preferred</li>
                        <li>• Often with family/friends</li>
                        <li>• Combines exercise and socializing</li>
                        <li>• Mental health benefits</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social & Recreational */}
              <Card className="border-purple-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Users className="w-6 h-6 text-purple-600 mr-3" />
                    <CardTitle className="text-purple-700">Social & Recreational Movement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Exercise doesn't feel like "work" when it's social and fun. Mediterranean cultures integrate movement 
                    into social activities, making fitness enjoyable and sustainable.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Social Activities:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Dancing:</strong> Traditional folk dances, social dancing</li>
                        <li>• <strong>Group walks:</strong> Evening paseo (stroll) with neighbors</li>
                        <li>• <strong>Bocce/Pétanque:</strong> Gentle outdoor games</li>
                        <li>• <strong>Cycling with friends:</strong> Leisurely bike rides</li>
                        <li>• <strong>Active family time:</strong> Beach, park, playing with children</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Daily Movement Habits:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Active commuting:</strong> Walk or bike to work</li>
                        <li>• <strong>Household tasks:</strong> Cleaning, cooking, yard work</li>
                        <li>• <strong>Market shopping:</strong> Walking to fresh food markets</li>
                        <li>• <strong>Siesta alternative:</strong> Post-lunch gentle walk</li>
                        <li>• <strong>Evening socializing:</strong> Walking to meet friends</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Optional Strength Training */}
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                    <CardTitle className="text-orange-700">Optional: Gentle Strength Training (2x/week)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    While not traditional, adding basic strength training helps maintain muscle mass and bone density with 
                    aging. Keep it simple, functional, and enjoyable.
                  </p>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Simple Home Routine (20 minutes, 2x/week):</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Bodyweight squats:</strong> 2 sets x 12 reps</li>
                      <li>• <strong>Wall push-ups:</strong> 2 sets x 10 reps</li>
                      <li>• <strong>Step-ups:</strong> 2 sets x 10 each leg</li>
                      <li>• <strong>Plank:</strong> 2 sets x 20-30 seconds</li>
                      <li>• <strong>Standing leg raises:</strong> 2 sets x 10 each side</li>
                      <li>• Light, comfortable - no need for heavy weights or intensity</li>
                    </ul>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Mediterranean Active Living Week</h2>
            
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Typical Weekly Movement Pattern</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-gray-800">Monday:</h5>
                    <p className="text-sm text-gray-700">Morning walk (30 min), post-lunch stroll (15 min), evening walk to market (20 min), gardening (30 min)</p>
                    <p className="text-xs text-gray-500">Total: 95 min natural movement</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Tuesday:</h5>
                    <p className="text-sm text-gray-700">Morning walk (30 min), gentle strength training at home (20 min), evening walk with friends (30 min)</p>
                    <p className="text-xs text-gray-500">Total: 80 min</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Wednesday:</h5>
                    <p className="text-sm text-gray-700">Walk to errands (40 min), post-lunch stroll (15 min), swimming (30 min), evening walk (20 min)</p>
                    <p className="text-xs text-gray-500">Total: 105 min</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Thursday:</h5>
                    <p className="text-sm text-gray-700">Morning walk (30 min), household activities (30 min), gentle strength training (20 min), evening stroll (20 min)</p>
                    <p className="text-xs text-gray-500">Total: 100 min</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Friday:</h5>
                    <p className="text-sm text-gray-700">Morning walk (30 min), gardening (45 min), evening walk to social gathering (25 min)</p>
                    <p className="text-xs text-gray-500">Total: 100 min</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Saturday:</h5>
                    <p className="text-sm text-gray-700">Long morning hike with family (90 min), afternoon bocce game (30 min), evening paseo walk (20 min)</p>
                    <p className="text-xs text-gray-500">Total: 140 min</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">Sunday:</h5>
                    <p className="text-sm text-gray-700">Leisurely morning walk (40 min), beach swimming (30 min), post-lunch family walk (30 min), rest and relaxation</p>
                    <p className="text-xs text-gray-500">Total: 100 min</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <p className="text-sm font-semibold text-green-700">Weekly Average: ~720 minutes (12 hours) of natural, enjoyable movement spread throughout the week!</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mediterranean Lifestyle Success Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-700">✅ Embrace Active Living:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Make movement social:</strong> Walk with friends, family activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Choose enjoyable activities:</strong> Dancing, swimming, gardening</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Integrate into daily life:</strong> Walk for transportation, not just exercise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Prioritize consistency:</strong> Daily moderate over occasional intense</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Enjoy the journey:</strong> Focus on pleasure, not performance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4 text-red-700">❌ Avoid Modern Mistakes:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't overdo intensity:</strong> Mediterranean approach is moderate</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Avoid sedentary lifestyle:</strong> Even with good diet</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't isolate exercise:</strong> Make it social and enjoyable</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Avoid "all or nothing":</strong> Any movement is beneficial</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't skip rest days:</strong> Recovery and enjoyment are essential</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Complete Your Mediterranean Lifestyle
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Active living is one pillar of the Mediterranean lifestyle. Combine with the Mediterranean diet - rich in 
              whole foods, olive oil, and fish - for complete health and longevity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="/blog/mediterranean">
                  View Mediterranean Diet Guide
                </Link>
              </Button>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/ai-coach">
                  Get Personal Plan
                </Link>
              </Button>
            </div>
            <p className="text-white text-sm mt-6">
              🌿 Adopt the world's healthiest lifestyle for lasting vitality and longevity
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
