import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Clock, Target, Zap, Baby, GraduationCap, Leaf, Activity, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Weight Loss Plans for Every Health Condition | FitPlan India",
  description:
    "Specialized weight loss plans for PCOS, thyroid, diabetes, post-pregnancy, and more. Expert-designed Indian diet plans with proven results.",
  keywords:
    "weight loss plans, PCOS diet, thyroid diet, diabetes diet, Indian weight loss, health condition diet plans",
}

export default function PlansPage() {
  const categories = [
    {
      title: "Hypothyroidism Weight Loss Plan",
      description: "Specialized plan for underactive thyroid with metabolism-boosting foods",
      href: "/plans/hypothyroidism",
      icon: Heart,
      difficulty: "Moderate",
      duration: "3-6 months",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Hyperthyroidism Weight Loss Plan",
      description: "Balanced approach for overactive thyroid with calorie-dense nutrition",
      href: "/plans/hyperthyroidism",
      icon: Zap,
      difficulty: "Moderate",
      duration: "2-4 months",
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
    {
      title: "PCOS Weight Loss Plan",
      description: "Insulin-resistant friendly diet with anti-inflammatory foods",
      href: "/plans/pcos",
      icon: Heart,
      difficulty: "Moderate",
      duration: "4-8 months",
      color: "bg-pink-50 text-pink-700 border-pink-200",
    },
    {
      title: "PCOD Weight Loss Plan",
      description: "Hormone-balancing nutrition plan for polycystic ovary disorder",
      href: "/plans/pcod",
      icon: Heart,
      difficulty: "Moderate",
      duration: "4-6 months",
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      title: "Diabetes Weight Loss Plan",
      description: "Blood sugar friendly meals with controlled carbohydrates",
      href: "/plans/diabetes",
      icon: Target,
      difficulty: "High",
      duration: "6-12 months",
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      title: "Obesity & General Weight Loss",
      description: "Comprehensive plan for significant weight reduction and lifestyle change",
      href: "/plans/obesity",
      icon: Users,
      difficulty: "High",
      duration: "6-18 months",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      title: "Post-Pregnancy Weight Loss",
      description: "Safe and nutritious plan for new mothers and breastfeeding",
      href: "/plans/post-pregnancy",
      icon: Baby,
      difficulty: "Easy",
      duration: "6-12 months",
      color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    },
    {
      title: "Teenagers & Students Plan",
      description: "Age-appropriate nutrition for growing teens and busy students",
      href: "/plans/teenagers",
      icon: GraduationCap,
      difficulty: "Easy",
      duration: "3-6 months",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      title: "Vegetarian & Vegan Plans",
      description: "Plant-based nutrition with complete protein and nutrient balance",
      href: "/plans/vegetarian",
      icon: Leaf,
      difficulty: "Easy",
      duration: "3-8 months",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      title: "Keto Diet for Indians",
      description: "Low-carb, high-fat approach adapted for Indian cuisine and lifestyle",
      href: "/plans/keto",
      icon: Zap,
      difficulty: "High",
      duration: "2-6 months",
      color: "bg-gray-50 text-gray-700 border-gray-200",
    },
    {
      title: "Intermittent Fasting Plan",
      description: "Time-restricted eating patterns suitable for Indian meal timings",
      href: "/plans/intermittent-fasting",
      icon: Clock,
      difficulty: "Moderate",
      duration: "2-12 months",
      color: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      title: "Senior Citizens Plan",
      description: "Age-appropriate nutrition for healthy aging and weight management",
      href: "/plans/senior-citizens",
      icon: Heart,
      difficulty: "Easy",
      duration: "6-12 months",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Gym + Diet Combo",
      description: "Integrated workout and nutrition plan for maximum results",
      href: "/plans/gym-diet-combo",
      icon: Activity,
      difficulty: "High",
      duration: "3-12 months",
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <Link href="/" className="text-2xl font-bold text-primary">
              FitPlan India
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/plans" className="text-sm font-medium text-primary">
              Weight Loss Plans
            </Link>
            <Link href="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Calculators
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Specialized Weight Loss Plans</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose from our expertly crafted plans designed for specific health conditions, age groups, and dietary
            preferences. Each plan is tailored for Indian lifestyle and cuisine.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Personalized Plan - ₹500</Link>
          </Button>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg leading-tight">{category.title}</CardTitle>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Badge variant="outline" className={category.color}>
                        {category.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        <Calendar className="h-3 w-3 mr-1" />
                        {category.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-sm leading-relaxed">{category.description}</CardDescription>
                    <Button
                      variant="outline"
                      asChild
                      className="w-full bg-transparent group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link href={category.href}>View Plan Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Not Sure Which Plan is Right for You?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a consultation with our certified nutritionists to get a personalized recommendation based on your
            health condition, lifestyle, and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Book Consultation - ₹500</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="/tools">Try Free Health Calculators</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
