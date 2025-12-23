import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Clock,
  Target,
  Zap,
  Baby,
  GraduationCap,
  Leaf,
  Activity,
  Scale,
  Flame,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Calendar,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQSection from "@/components/FAQSection"
import PriceDisplay from "@/components/PriceDisplay"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Specialized Diet Plans for Every Health Condition | FitPlan India",
  description:
    "Expert-designed diet plans for PCOS, thyroid, diabetes, post-pregnancy, weight loss, and more. Tailored Indian meal plans with proven results.",
  keywords:
    "diet plans India, PCOS diet, thyroid diet, diabetes diet, weight loss plans, specialized meal plans, health condition diets",
  openGraph: {
    title: "Specialized Diet Plans - FitPlan India",
    description: "Expert-designed plans for every health condition and goal.",
    url: "https://fitplanindia.com/plans",
  },
}

const dietPlans = [
  {
    title: "PCOS Weight Loss Plan",
    description: "Insulin-resistant friendly diet with anti-inflammatory foods and hormone balance",
    href: "/plans/pcos",
    icon: Heart,
    duration: "4-8 months",
    difficulty: "Moderate",
    color: "pink",
  },
  {
    title: "PCOD Weight Loss Plan",
    description: "Hormone-balancing nutrition plan for polycystic ovary disorder management",
    href: "/plans/pcod",
    icon: Heart,
    duration: "4-6 months",
    difficulty: "Moderate",
    color: "purple",
  },
  {
    title: "Hypothyroidism Weight Loss",
    description: "Metabolism-boosting foods for underactive thyroid and weight management",
    href: "/plans/hypothyroidism",
    icon: Activity,
    duration: "3-6 months",
    difficulty: "Moderate",
    color: "blue",
  },
  {
    title: "Hyperthyroidism Weight Gain",
    description: "Calorie-dense nutrition for overactive thyroid and healthy weight gain",
    href: "/plans/hyperthyroidism",
    icon: Zap,
    duration: "2-4 months",
    difficulty: "Moderate",
    color: "orange",
  },
  {
    title: "Thyroid Management Plan",
    description: "Comprehensive plan for both hypo and hyperthyroid with balanced nutrition",
    href: "/plans/thyroid",
    icon: Target,
    duration: "3-6 months",
    difficulty: "Moderate",
    color: "green",
  },
  {
    title: "Diabetes Diet Plan",
    description: "Blood sugar friendly meals with controlled carbs and glycemic index focus",
    href: "/plans/diabetes",
    icon: Target,
    duration: "6-12 months",
    difficulty: "High",
    color: "red",
  },
  {
    title: "Obesity Weight Loss Plan",
    description: "Comprehensive plan for significant weight reduction and lifestyle transformation",
    href: "/plans/obesity",
    icon: Scale,
    duration: "6-18 months",
    difficulty: "High",
    color: "orange",
  },
  {
    title: "Post-Pregnancy Weight Loss",
    description: "Safe and nutritious plan for new mothers and breastfeeding women",
    href: "/plans/post-pregnancy",
    icon: Baby,
    duration: "6-12 months",
    difficulty: "Easy",
    color: "yellow",
  },
  {
    title: "Teenagers & Students Plan",
    description: "Age-appropriate nutrition for growing teens with balanced macro and micronutrients",
    href: "/plans/teenagers",
    icon: GraduationCap,
    duration: "3-6 months",
    difficulty: "Easy",
    color: "indigo",
  },
  {
    title: "Senior Citizens Plan",
    description: "Age-appropriate nutrition for healthy aging, bone health, and weight management",
    href: "/plans/senior-citizens",
    icon: Users,
    duration: "6-12 months",
    difficulty: "Easy",
    color: "blue",
  },
  {
    title: "Vegetarian Diet Plan",
    description: "Plant-based nutrition with complete protein and nutrient balance for vegetarians",
    href: "/plans/vegetarian",
    icon: Leaf,
    duration: "3-8 months",
    difficulty: "Easy",
    color: "green",
  },
  {
    title: "Keto Diet for Indians",
    description: "Low-carb, high-fat approach adapted for Indian cuisine and lifestyle preferences",
    href: "/plans/keto-diet",
    icon: Flame,
    duration: "2-6 months",
    difficulty: "High",
    color: "gray",
  },
  {
    title: "Intermittent Fasting Plan",
    description: "Time-restricted eating patterns suitable for Indian meal timings and culture",
    href: "/plans/intermittent-fasting",
    icon: Clock,
    duration: "2-12 months",
    difficulty: "Moderate",
    color: "teal",
  },
  {
    title: "Gym + Diet Combo",
    description: "Integrated workout and nutrition plan for muscle gain and maximum fitness results",
    href: "/plans/gym-diet-combo",
    icon: Activity,
    duration: "3-12 months",
    difficulty: "High",
    color: "orange",
  },
  {
    title: "Metabolic Weight Loss Plan",
    description: "Plan designed to boost metabolic rate, fat burning, and manage stubborn weight",
    href: "/plans/metabolic",
    icon: Zap,
    duration: "4-10 months",
    difficulty: "Moderate",
    color: "cyan",
  },
  {
    title: "Hormonal Imbalance Plan",
    description: "Balanced diet to correct hormonal imbalances and regulate metabolism naturally",
    href: "/plans/hormonal-imbalance",
    icon: Heart,
    duration: "4-8 months",
    difficulty: "Moderate",
    color: "rose",
  },
]

const colorGradients: Record<string, string> = {
  pink: "from-pink-600 to-rose-700",
  purple: "from-purple-600 to-indigo-700",
  blue: "from-blue-600 to-indigo-700",
  orange: "from-orange-600 to-amber-700",
  green: "from-green-600 to-emerald-700",
  red: "from-red-600 to-rose-700",
  yellow: "from-yellow-600 to-orange-600",
  indigo: "from-indigo-600 to-purple-700",
  teal: "from-teal-600 to-cyan-700",
  gray: "from-gray-600 to-slate-700",
  cyan: "from-cyan-600 to-blue-700",
  rose: "from-rose-600 to-pink-700",
}

const colorButtons: Record<string, string> = {
  pink: "bg-pink-600 hover:bg-pink-700 text-white",
  purple: "bg-purple-600 hover:bg-purple-700 text-white",
  blue: "bg-blue-600 hover:bg-blue-700 text-white",
  orange: "bg-orange-600 hover:bg-orange-700 text-white",
  green: "bg-green-600 hover:bg-green-700 text-white",
  red: "bg-red-600 hover:bg-red-700 text-white",
  yellow: "bg-yellow-600 hover:bg-yellow-700 text-white",
  indigo: "bg-indigo-600 hover:bg-indigo-700 text-white",
  teal: "bg-teal-600 hover:bg-teal-700 text-white",
  gray: "bg-gray-600 hover:bg-gray-700 text-white",
  cyan: "bg-cyan-600 hover:bg-cyan-700 text-white",
  rose: "bg-rose-600 hover:bg-rose-700 text-white",
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-yellow-100 text-yellow-700",
  High: "bg-red-100 text-red-700",
}

export default function PlansPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Diet Plans", href: "/plans" },
  ]

  const faqs = [
    {
      question: "Are these diet plans suitable for Indian vegetarians?",
      answer: "Absolutely! All our meal plans are 100% Indian-cuisine based and highly customizable. We have dedicated options for Vegetarians, Eggetarians, and Non-Vegetarians. Even our condition-specific plans (like PCOS or Diabetes) include full vegetarian substitution guides."
    },
    {
      question: "How do I know which plan is right for me?",
      answer: "If you have a diagnosed condition (PCOS, Thyroid, Diabetes), choose that specific plan as it targets the root hormonal or metabolic cause. If your goal is general fitness or weight loss without a medical condition, the 'Metabolic Weight Loss' or 'Gym + Diet Combo' are excellent starting points. You can also book a consultation for personalized guidance."
    },
    {
      question: "Can I switch plans later if my goals change?",
      answer: "Yes. Many users start with a condition-specific plan (e.g., to manage PCOS) and then switch to a general fitness plan (like Gym + Diet) once their hormones are balanced. Our flexible structure supports your longterm health journey."
    },
    {
      question: "Do I need to buy expensive supplements?",
      answer: "No. Our philosophy is 'Food First'. While we provide a supplement guide for optimization (especially for conditions like Thyroid or PCOS), they are optional. The core results come from the balanced, nutrient-dense Indian meal plans provided."
    },
    {
      question: "Is there support available if I get stuck?",
      answer: "Yes! You can upgrade to a personalized plan at any time to get 1-on-1 access to a certified nutritionist who can tweak your plan, answer daily queries, and keep you accountable."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-teal-700 font-semibold text-base">
              🎯 Specialized Diet Plans
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Expert Diet Plans for Every Health Condition
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              16 specialized, expert-designed diet plans tailored for specific health conditions, age groups, and
              dietary preferences. Indian cuisine-based with proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100 font-semibold" asChild>
                <Link href="#plans">
                  Explore All Plans
                </Link>
              </Button>
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white border-2 border-white font-semibold" asChild>
                <Link href="/contact">
                  Get Personalized Plan - <PriceDisplay amountIn={500} amountUs={50} />
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
                <div className="text-4xl font-bold text-teal-700 mb-2">16+</div>
                <div className="text-gray-600">Specialized Plans</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-700 mb-2">15K+</div>
                <div className="text-gray-600">Success Stories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-700 mb-2">100%</div>
                <div className="text-gray-600">Indian Cuisine</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-700 mb-2">Expert</div>
                <div className="text-gray-600">Nutritionist Designed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Plans Section */}
      <section id="plans" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse All Diet Plans</h2>
              <p className="text-gray-600">
                Choose the perfect plan designed for your health condition and lifestyle
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dietPlans.map((plan, idx) => {
                const Icon = plan.icon
                return (
                  <Card key={idx} className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorGradients[plan.color]} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-2">{plan.title}</CardTitle>
                      <div className="flex gap-2 flex-wrap">
                        <Badge className={difficultyColors[plan.difficulty]}>
                          {plan.difficulty}
                        </Badge>
                        <Badge className="bg-gray-100 text-gray-700">
                          <Calendar className="w-3 h-3 mr-1" />
                          {plan.duration}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      <Button
                        className={`w-full font-bold shadow-md ${colorButtons[plan.color]}`}
                        size="lg"
                        asChild
                      >
                        <Link href={plan.href}>
                          View {plan.title}
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

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 inline-flex items-center gap-2">
                <HelpCircle className="w-8 h-8 text-teal-600" />
                Common Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our specialized Indian diet plans.
              </p>
            </div>
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Not Sure Which Plan is Right for You?
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Book a consultation with our certified nutritionists to get a personalized recommendation based on
              your health condition, lifestyle, medical history, and fitness goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Personalized Consultation */}
              <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Personalized Consultation</h4>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Get expert advice from certified nutritionists with customized diet plan - <PriceDisplay amountIn={500} amountUs={50} />.
                </p>
                <Button size="lg" className="w-full bg-white text-teal-700 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/contact">
                    Book Consultation - <PriceDisplay amountIn={500} amountUs={50} />
                  </Link>
                </Button>
              </div>

              {/* AI Coach CTA */}
              <div className="bg-yellow-500/20 border-2 border-yellow-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2 text-xl">Free AI Coach</h4>
                <p className="text-yellow-100 text-sm mb-4 leading-relaxed">
                  Get instant AI-powered diet and workout recommendations completely free!
                </p>
                <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                  <Link href="/ai-coach">
                    Try AI Coach Free
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-white text-sm mt-6">
              ✨ Join 15,000+ Indians who transformed their health with FitPlan India
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
