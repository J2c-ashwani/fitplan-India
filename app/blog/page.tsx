import { Button } from "@/components/ui/button"
import PriceDisplay from "@/components/PriceDisplay"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Clock, Target, Zap, Baby, Activity, Leaf, Dumbbell, TrendingUp, Apple, Trophy, BookOpen, GraduationCap, Scale, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Health & Fitness Blog | Expert Diet Plans & Workout Guides - FitPlan India",
  description: "Expert health and fitness blog with comprehensive diet plans, workout routines, and nutrition guides for weight loss, muscle gain, PCOS, diabetes, heart health, and more.",
  keywords: "health blog, fitness blog, diet plans, workout guides, weight loss tips, muscle building, nutrition advice, wellness blog India",
  openGraph: {
    title: "Health & Fitness Blog - FitPlan India",
    description: "Expert diet plans, workout guides, and health tips for your fitness journey.",
    url: "https://fitplanindia.com/blog",
  },
}

const blogCategories = [
  { title: "Weight Loss Diet", description: "Complete guide to losing weight safely with calorie deficit strategies", href: "/blog/weight-loss", icon: TrendingUp, duration: "12 min", color: "red" },
  { title: "Muscle Gain Diet", description: "Build serious muscle with high-protein meal plans and bulking strategies", href: "/blog/muscle-gain", icon: Dumbbell, duration: "14 min", color: "blue" },
  { title: "PCOS Diet Plan", description: "Expert tips for managing PCOS symptoms and sustainable weight loss", href: "/blog/pcos", icon: Heart, duration: "14 min", color: "pink" },
  { title: "PCOD Diet Plan", description: "Manage PCOD with hormone-balancing nutrition strategies", href: "/blog/pcod", icon: Heart, duration: "16 min", color: "pink" },
  { title: "Diabetes Diet", description: "Blood sugar management with low-glycemic meal plans", href: "/blog/diabetes", icon: Target, duration: "15 min", color: "teal" },
  { title: "Heart Health Diet", description: "Lower blood pressure and cholesterol with DASH diet", href: "/blog/heart-health", icon: Heart, duration: "15 min", color: "red" },
  { title: "Mediterranean Diet", description: "World's healthiest diet for heart health and longevity", href: "/blog/mediterranean", icon: Leaf, duration: "14 min", color: "green" },
  { title: "Paleo Diet", description: "Eat like our ancestors with whole foods and no grains", href: "/blog/paleo", icon: Apple, duration: "13 min", color: "orange" },
  { title: "Athlete Nutrition Diet", description: "Performance fueling for competitive athletes", href: "/blog/athlete-nutrition", icon: Trophy, duration: "17 min", color: "indigo" },
  { title: "Vegan Bodybuilding Diet", description: "Build muscle on plants with complete vegan protein strategies", href: "/blog/vegan-bodybuilding", icon: Leaf, duration: "15 min", color: "green" },
  { title: "Pregnancy Nutrition Diet", description: "Complete pregnancy diet with trimester-specific meal plans", href: "/blog/pregnancy-nutrition", icon: Baby, duration: "18 min", color: "pink" },
  { title: "Senior Wellness Diet", description: "Healthy aging and nutrition for 60+ adults", href: "/blog/senior-citizens", icon: Users, duration: "16 min", color: "blue" },
  { title: "Thyroid Diet Plan", description: "Specialized advice for thyroid disorder management", href: "/blog/thyroid", icon: Zap, duration: "14 min", color: "blue" },
  { title: "Post-Pregnancy Diet", description: "Safe weight loss guidance for new mothers and breastfeeding", href: "/blog/post-pregnancy", icon: Baby, duration: "13 min", color: "yellow" },
  { title: "Teen Health Diet", description: "Age-appropriate nutrition for teenagers", href: "/blog/teenagers", icon: GraduationCap, duration: "12 min", color: "indigo" },
  { title: "Obesity Management Diet", description: "Comprehensive strategies for significant weight loss transformation", href: "/blog/obesity", icon: Scale, duration: "15 min", color: "orange" },
  { title: "Vegetarian Diet", description: "Plant-based nutrition and vegetarian meal planning", href: "/blog/vegetarian", icon: Leaf, duration: "12 min", color: "green" },
  { title: "Keto Diet Plan", description: "Low-carb lifestyle adapted for Indian cuisine", href: "/blog/keto", icon: Zap, duration: "14 min", color: "gray" },
  { title: "Intermittent Fasting Diet", description: "Time-restricted eating for Indian meal patterns", href: "/blog/intermittent-fasting", icon: Clock, duration: "13 min", color: "teal" },
  { title: "Exercise & Fitness Guide", description: "Home workouts and gym routines for all levels", href: "/blog/exercise-fitness", icon: Activity, duration: "11 min", color: "purple" },
  { title: "Nutrition Science Guide", description: "Evidence-based nutrition research fundamentals", href: "/blog/nutrition-science", icon: BookOpen, duration: "10 min", color: "blue" },
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

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-indigo-700 font-semibold text-base">
              📚 Complete Health & Fitness Library
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Expert Diet Plans & Fitness Guides
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              21 comprehensive, evidence-based guides covering weight loss, muscle building, PCOS, diabetes,
              heart health, popular diets, and specialized nutrition for every life stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#all-guides">
                  Explore All Guides
                </Link>
              </Button>
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white border-2 border-white font-semibold" asChild>
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
                <div className="text-4xl font-bold text-indigo-700 mb-2">21+</div>
                <div className="text-gray-600">Expert Guides</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-700 mb-2">10K+</div>
                <div className="text-gray-600">Happy Readers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-700 mb-2">100%</div>
                <div className="text-gray-600">Evidence-Based</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-700 mb-2">Free</div>
                <div className="text-gray-600">Complete Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Guides Section */}
      <section id="all-guides" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse All Diet & Fitness Guides</h2>
              <p className="text-gray-600">
                Choose from our comprehensive collection of expert-written health resources
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogCategories.map((blog, idx) => {
                const Icon = blog.icon
                return (
                  <Card key={idx} className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorGradients[blog.color]} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{blog.title}</CardTitle>
                      <Badge className="bg-gray-100 text-gray-700 w-fit">
                        <Clock className="w-3 h-3 mr-1" />
                        {blog.duration} read
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{blog.description}</p>
                      <Button
                        className={`w-full font-bold shadow-md ${colorButtons[blog.color]}`}
                        size="lg"
                        asChild
                      >
                        <Link href={blog.href}>
                          Learn About {blog.title}
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
      <section className="py-16 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Want Personalized Health Advice?
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Get expert guidance tailored to your specific health condition and goals. Our certified nutritionists
              provide personalized diet plans and lifestyle recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">AI Personal Coach</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Get personalized diet and workout plans using AI technology - completely free!
                </p>
                <Button size="lg" className="w-full bg-white text-indigo-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Try AI Coach Free
                  </Link>
                </Button>
              </div>

              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Heart className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Expert Consultation</h4>
                <div className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Book one-on-one consultation with certified nutritionists for <PriceDisplay amountIn={500} amountUs={50} />.
                </div>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/contact#contact-form">
                    Book Consultation - <PriceDisplay amountIn={500} amountUs={50} />
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join thousands transforming their health with FitPlan India
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
