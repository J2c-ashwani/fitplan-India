import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Award, Heart, Zap, Target, Activity, Dumbbell, Apple, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import PriceDisplay from "@/components/PriceDisplay"

export const metadata: Metadata = {
  title: "FitPlan 2025 | Personalized Weight Loss Plans for PCOS, Thyroid, Diabetes - USA, UK, Australia",
  description: "Get personalized diet plans and expert guidance for PCOS, thyroid, diabetes, post-pregnancy, and more. Trusted fitness platform with 10,000+ successful transformations in USA, UK, Canada, Australia.",
  keywords: "weight loss plans, PCOS diet plan, thyroid weight loss, diabetes diet, personalized diet plan, online nutritionist, fitness coaching USA UK Australia Canada",
}

export default function HomePage() {
  const featuredPlans = [
    {
      title: "PCOS Weight Loss Plan",
      href: "/plans/pcos",
      icon: Heart,
      description: "Insulin-resistant diet, hormone-balancing foods, and proven strategies for PCOS weight loss.",
      badge: "Most Popular",
      color: "from-pink-600 to-rose-700"
    },
    {
      title: "Thyroid Weight Loss",
      href: "/plans/hypothyroidism",
      icon: Target,
      description: "Metabolism-boosting nutrition to overcome hypothyroidism and achieve sustainable weight loss.",
      badge: "High Demand",
      color: "from-blue-600 to-cyan-700"
    },
    {
      title: "Diabetes Diet Plan",
      href: "/plans/diabetes",
      icon: Activity,
      description: "Blood sugar control, low-glycemic meals, and effective weight management for diabetics.",
      badge: "Expert Recommended",
      color: "from-green-600 to-emerald-700"
    },
    {
      title: "Post-Pregnancy Plans",
      href: "/plans/post-pregnancy",
      icon: Heart,
      description: "Safe postpartum weight loss with breastfeeding-friendly nutrition and gentle exercise.",
      badge: "New Mothers",
      color: "from-purple-600 to-violet-700"
    },
    {
      title: "Keto Diet Plans",
      href: "/plans/keto-diet",
      icon: Zap,
      description: "Low-carb, high-fat keto meals with proven strategies for rapid fat loss and ketosis.",
      badge: "Trending",
      color: "from-fuchsia-600 to-purple-700"
    },
    {
      title: "Intermittent Fasting",
      href: "/plans/intermittent-fasting",
      icon: TrendingUp,
      description: "16:8, 18:6 fasting schedules with meal timing strategies for maximum fat loss.",
      badge: "Time-Restricted",
      color: "from-indigo-600 to-violet-700"
    },
  ]

  const allPlans = [
    { title: "Vegetarian Diet Plan", href: "/plans/vegetarian", icon: Apple },
    { title: "Gym + Diet Combo", href: "/plans/gym-diet-combo", icon: Dumbbell },
    { title: "Metabolic Weight Loss", href: "/plans/metabolic", icon: TrendingUp },
    { title: "Hormonal Imbalance Plan", href: "/plans/hormonal-imbalance", icon: Heart },
    { title: "Teenagers Weight Plan", href: "/plans/teenagers", icon: Users },
    { title: "Senior Citizens Plan", href: "/plans/senior-citizens", icon: Heart },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section - Health Green Theme */}
      <section className="bg-gradient-to-br from-emerald-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-emerald-600 font-semibold">
              🏆 World's Leading Health & Fitness Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Personalized Weight Loss Plans for Every Condition
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get customized diet plans and expert guidance for PCOS, thyroid, diabetes, post-pregnancy, and more. Trusted by
              10,000+ clients worldwide in USA, UK, Canada, and Australia. Science-based nutrition tailored to your lifestyle and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6" asChild>
                <Link href="/contact#contact-form">Book Consultation - <PriceDisplay amountIn={500} amountUs={50} /></Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent font-semibold"
                asChild
              >
                <Link href="/tools">Try Free BMI Calculator</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>10,000+ Transformations</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Certified Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-white" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>100% Personalized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tools Section - HIGH ENGAGEMENT */}
      <section className="py-16 -mt-10 relative z-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link href="/tools/bmi-calculator" className="group">
              <Card className="h-full border-2 border-emerald-100 hover:border-emerald-500 hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-600 transition-colors">
                    <Target className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-emerald-700">BMI Calculator</h3>
                  <p className="text-sm text-gray-500 mt-2">Check health status</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/tools/calorie-calculator" className="group">
              <Card className="h-full border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-600 transition-colors">
                    <Zap className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700">Calorie Calculator</h3>
                  <p className="text-sm text-gray-500 mt-2">Calculate daily needs</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/tools/protein-calculator" className="group">
              <Card className="h-full border-2 border-purple-100 hover:border-purple-500 hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-600 transition-colors">
                    <Activity className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-purple-700">Protein Calculator</h3>
                  <p className="text-sm text-gray-500 mt-2">Optimize intake</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/plans" className="group">
              <Card className="h-full bg-emerald-600 text-white border-2 border-emerald-600 hover:bg-emerald-700 hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center items-center">
                  <h3 className="font-bold text-lg mb-1">View All Plans</h3>
                  <p className="text-emerald-100 text-sm">Start your journey →</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Plans */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Popular Weight Loss Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertly crafted plans designed for specific health conditions and lifestyle needs. Each plan includes personalized
              diet guidance, meal timing, and proven strategies backed by nutritional science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredPlans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200 group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${plan.color}`}></div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${plan.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="text-xs font-semibold">
                        {plan.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">{plan.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-gray-600">
                      {plan.description}
                    </CardDescription>
                    <Button variant="outline" asChild className="w-full group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                      <Link href={plan.href}>View Complete Plan →</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">More Specialized Plans</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {allPlans.map((plan, index) => {
                const Icon = plan.icon
                return (
                  <Link
                    key={index}
                    href={plan.href}
                    className="group p-4 border-2 rounded-lg hover:border-emerald-500 hover:shadow-lg transition-all bg-white"
                  >
                    <Icon className="h-8 w-8 mx-auto mb-2 text-gray-600 group-hover:text-emerald-600 transition-colors" />
                    <p className="text-sm font-semibold text-center text-gray-700 group-hover:text-emerald-600 transition-colors">
                      {plan.title}
                    </p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose FitPlan?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of weight loss with medical conditions. Our plans are designed by certified
              professionals specializing in evidence-based nutrition and sustainable lifestyle changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:border-emerald-300 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Condition-Specific</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Plans tailored for PCOS, thyroid, diabetes, hormonal imbalances, and other health conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-emerald-300 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Certified nutritionists and trainers with 10+ years of experience in medical weight loss.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-emerald-300 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  10,000+ successful transformations worldwide with average 10-20 lbs loss in first month.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-emerald-300 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Apple className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg">Real Food Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Delicious, sustainable meal plans with whole foods - no shakes, pills, or extreme restrictions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How FitPlan Works</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to start your transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-emerald-600">
                1
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Book Consultation</h3>
              <div className="text-sm text-gray-600"><PriceDisplay amountIn={500} amountUs={50} /> one-time consultation fee. Get personalized assessment of your health and goals.</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-600">
                2
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Get Custom Plan</h3>
              <p className="text-sm text-gray-600">Receive personalized diet plan, meal timing, and exercise recommendations tailored to you.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-lime-600">
                3
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Follow & Track</h3>
              <p className="text-sm text-gray-600">Implement your plan with weekly check-ins and progress tracking support.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-teal-600">
                4
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">See Results</h3>
              <p className="text-sm text-gray-600">Average 10-20 lbs weight loss in first month with sustainable long-term results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-emerald-100">Successful Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8/5</div>
              <div className="text-emerald-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10-20 lbs</div>
              <div className="text-emerald-100">Average Loss (Month 1)</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">12+</div>
              <div className="text-emerald-100">Specialized Plans</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands worldwide who have successfully achieved their weight loss goals with our personalized plans.
            Book your consultation today for just <PriceDisplay amountIn={500} amountUs={50} />!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6" asChild>
              <Link href="/contact#contact-form">Book Consultation - <PriceDisplay amountIn={500} amountUs={50} /></Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent font-semibold"
              asChild
            >
              <Link href="/tools">Try Free Calculators</Link>
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-6">No hidden charges • 100% Personalized • Expert Support</p>
        </div>
      </section>
    </main>
  )
}
