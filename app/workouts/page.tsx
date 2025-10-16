import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Clock, Target, Zap, Baby, Activity, Leaf, Dumbbell, TrendingUp, Apple, Trophy, GraduationCap, Scale, Sparkles, Mountain, Sun, Flame, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Workout Programs | Expert Fitness & Exercise Guides - FitPlan India",
  description: "Complete workout programs and exercise guides for weight loss, muscle building, PCOS, diabetes, seniors, athletes, and specialized fitness goals.",
  keywords: "workout programs, exercise guides, fitness plans, weight loss workouts, muscle building, home workouts, gym routines India",
  openGraph: {
    title: "Workout Programs & Exercise Guides - FitPlan India",
    description: "Expert workout programs and exercise routines for every fitness goal.",
    url: "https://fitplanindia.com/workouts",
  },
}

const workoutPrograms = [
  { title: "Weight Loss Workouts", description: "Fat-burning cardio and HIIT routines for effective weight loss", href: "/workouts/weight-loss", icon: TrendingUp, duration: "30-45 min", color: "red" },
  { title: "Muscle Gain Program", description: "Strength training and hypertrophy workouts to build muscle", href: "/workouts/muscle-gain", icon: Dumbbell, duration: "60-90 min", color: "blue" },
  { title: "PCOS Exercise Guide", description: "Hormone-balancing workouts for PCOS management", href: "/workouts/pcos", icon: Heart, duration: "30-45 min", color: "pink" },
  { title: "PCOD Fitness Plan", description: "Tailored exercises for PCOD symptom management", href: "/workouts/pcod", icon: Heart, duration: "30-40 min", color: "pink" },
  { title: "Diabetes Exercise Program", description: "Blood sugar management through cardio and strength training", href: "/workouts/diabetes", icon: Target, duration: "30-45 min", color: "teal" },
  { title: "Heart Health Cardio", description: "Safe cardiovascular exercises for heart disease prevention", href: "/workouts/heart-health", icon: Heart, duration: "30-60 min", color: "red" },
  { title: "Mediterranean Active Living", description: "Lifestyle-based movement and walking routines", href: "/workouts/mediterranean", icon: Sun, duration: "30-60 min", color: "green" },
  { title: "Paleo Primal Fitness", description: "Functional training and natural movement patterns", href: "/workouts/paleo", icon: Mountain, duration: "30-45 min", color: "orange" },
  { title: "Athlete Training Program", description: "Sport-specific workouts and performance training", href: "/workouts/athlete-nutrition", icon: Trophy, duration: "60-90 min", color: "indigo" },
  { title: "Vegan Bodybuilding", description: "Plant-powered muscle building workout programs", href: "/workouts/vegan-bodybuilding", icon: Leaf, duration: "60-90 min", color: "green" },
  { title: "Prenatal Exercise", description: "Safe pregnancy workouts for healthy mothers and babies", href: "/workouts/pregnancy-nutrition", icon: Baby, duration: "20-30 min", color: "pink" },
  { title: "Senior Fitness Program", description: "Low-impact exercises for healthy aging and mobility", href: "/workouts/senior-citizens", icon: Users, duration: "20-40 min", color: "blue" },
  { title: "Thyroid Exercise Guide", description: "Energy-boosting workouts for thyroid management", href: "/workouts/thyroid", icon: Zap, duration: "30-45 min", color: "blue" },
  { title: "Post-Pregnancy Recovery", description: "Safe postpartum fitness and core strengthening", href: "/workouts/post-pregnancy", icon: Baby, duration: "20-30 min", color: "yellow" },
  { title: "Teen Fitness Guide", description: "Age-appropriate workouts for teenagers and students", href: "/workouts/teenagers", icon: GraduationCap, duration: "30-45 min", color: "indigo" },
  { title: "Obesity Weight Loss", description: "Beginner-friendly workouts for significant weight loss", href: "/workouts/obesity", icon: Scale, duration: "20-40 min", color: "orange" },
  { title: "Vegetarian Fitness", description: "Plant-based exercise and strength training", href: "/workouts/vegetarian", icon: Leaf, duration: "30-60 min", color: "green" },
  { title: "Keto Workout Plan", description: "Fat-adapted training for ketogenic dieters", href: "/workouts/keto", icon: Flame, duration: "30-45 min", color: "gray" },
  { title: "Intermittent Fasting Workouts", description: "Fasted cardio and optimal workout timing", href: "/workouts/intermittent-fasting", icon: Clock, duration: "30-45 min", color: "teal" },
  { title: "General Fitness Program", description: "Balanced workouts for overall health and wellness", href: "/workouts/general", icon: Activity, duration: "30-60 min", color: "purple" },
]

const colorGradients: Record<string, string> = {
  red: "from-red-600 to-rose-700",
  blue: "from-blue-600 to-indigo-700",
  pink: "from-pink-600 to-rose-700",
  green: "from-green-600 to-emerald-700",
  orange: "from-orange-600 to-amber-700",
  teal: "from-teal-600 to-cyan-700",
  yellow: "from-yellow-600 to-orange-600",
  gray: "from-gray-600 to-slate-700",
  purple: "from-purple-600 to-indigo-700",
  indigo: "from-indigo-600 to-purple-700",
}

const colorButtons: Record<string, string> = {
  red: "bg-red-600 hover:bg-red-700 text-white",
  blue: "bg-blue-600 hover:bg-blue-700 text-white",
  pink: "bg-pink-600 hover:bg-pink-700 text-white",
  green: "bg-green-600 hover:bg-green-700 text-white",
  orange: "bg-orange-600 hover:bg-orange-700 text-white",
  teal: "bg-teal-600 hover:bg-teal-700 text-white",
  yellow: "bg-yellow-600 hover:bg-yellow-700 text-white",
  gray: "bg-gray-600 hover:bg-gray-700 text-white",
  purple: "bg-purple-600 hover:bg-purple-700 text-white",
  indigo: "bg-indigo-600 hover:bg-indigo-700 text-white",
}

export default function WorkoutsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-purple-700 font-semibold text-base">
              💪 Complete Workout Library
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Expert Workout Programs & Exercise Guides
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              20 comprehensive, expert-designed workout programs covering weight loss, muscle building, specialized 
              conditions, and fitness for every life stage and goal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#programs">
                  Explore All Programs
                </Link>
              </Button>
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/ai-coach">
                  Get AI Personal Plan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-4xl font-bold text-purple-700 mb-2">20+</div>
                <div className="text-gray-600">Workout Programs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-700 mb-2">10K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-700 mb-2">100%</div>
                <div className="text-gray-600">Expert-Designed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-700 mb-2">Free</div>
                <div className="text-gray-600">Complete Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse All Workout Programs</h2>
              <p className="text-gray-600">
                Choose from our comprehensive collection of expert-designed fitness programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workoutPrograms.map((workout, idx) => {
                const Icon = workout.icon
                return (
                  <Card key={idx} className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorGradients[workout.color]} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{workout.title}</CardTitle>
                      <Badge className="bg-gray-100 text-gray-700 w-fit">
                        <Clock className="w-3 h-3 mr-1" />
                        {workout.duration}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{workout.description}</p>
                      <Button 
                        className={`w-full font-bold shadow-md ${colorButtons[workout.color]}`}
                        size="lg"
                        asChild
                      >
                        <Link href={workout.href}>
                          View {workout.title}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Want a Personalized Workout Plan?
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Get expert guidance tailored to your specific fitness goals, schedule, and equipment availability. 
              Our certified trainers provide personalized workout programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">AI Personal Coach</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Get personalized workout and diet plans using AI technology - completely free!
                </p>
                <Button size="lg" className="w-full bg-white text-purple-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Try AI Coach Free
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Expert Trainer</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Book one-on-one training with certified fitness professionals for $100.
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/contact">
                    Book Training - $100
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-white text-sm mt-6">
              ✨ Join thousands achieving their fitness goals with FitPlan India
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
