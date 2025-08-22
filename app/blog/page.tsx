import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Clock, Target, Zap, Baby, GraduationCap, Leaf, Activity, Calendar, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Health & Fitness Blog | Condition-Specific Weight Loss Tips | FitPlan India",
  description:
    "Expert health and fitness blog with condition-specific weight loss tips for PCOS, thyroid, diabetes, post-pregnancy, and more. Evidence-based advice from certified nutritionists.",
  keywords:
    "health blog, weight loss tips, PCOS blog, thyroid diet blog, diabetes nutrition, fitness blog India, health condition advice",
}

export default function BlogPage() {
  const blogCategories = [
    {
      title: "PCOS/PCOD Weight Loss Blog",
      description: "Expert tips for managing PCOS symptoms and achieving sustainable weight loss",
      href: "/blog/pcos",
      icon: Heart,
      difficulty: "Moderate",
      duration: "Weekly Updates",
      color: "bg-pink-50 text-pink-700 border-pink-200",
    },
    {
      title: "Thyroid Condition Blog",
      description: "Specialized advice for hypothyroidism and hyperthyroidism weight management",
      href: "/blog/thyroid",
      icon: Zap,
      difficulty: "Moderate",
      duration: "Bi-weekly Posts",
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Diabetes Weight Loss Blog",
      description: "Blood sugar friendly weight loss strategies and meal planning tips",
      href: "/blog/diabetes",
      icon: Target,
      difficulty: "High",
      duration: "Weekly Updates",
      color: "bg-red-50 text-red-700 border-red-200",
    },
    {
      title: "Post-Pregnancy Fitness Blog",
      description: "Safe weight loss and fitness guidance for new mothers and breastfeeding",
      href: "/blog/post-pregnancy",
      icon: Baby,
      difficulty: "Easy",
      duration: "Weekly Posts",
      color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    },
    {
      title: "Teen & Student Health Blog",
      description: "Age-appropriate nutrition and fitness advice for teenagers and students",
      href: "/blog/teenagers",
      icon: GraduationCap,
      difficulty: "Easy",
      duration: "Bi-weekly Posts",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    {
      title: "Senior Citizens Wellness Blog",
      description: "Healthy aging tips and safe weight management for older adults",
      href: "/blog/senior-citizens",
      icon: Users,
      difficulty: "Easy",
      duration: "Weekly Updates",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      title: "Obesity Management Blog",
      description: "Comprehensive strategies for significant weight loss and lifestyle transformation",
      href: "/blog/obesity",
      icon: Activity,
      difficulty: "High",
      duration: "Weekly Posts",
      color: "bg-orange-50 text-orange-700 border-orange-200",
    },
    {
      title: "Vegetarian Diet Blog",
      description: "Plant-based nutrition tips and vegetarian weight loss meal planning",
      href: "/blog/vegetarian",
      icon: Leaf,
      difficulty: "Easy",
      duration: "Bi-weekly Posts",
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      title: "Keto Diet India Blog",
      description: "Low-carb lifestyle tips adapted for Indian cuisine and culture",
      href: "/blog/keto",
      icon: Zap,
      difficulty: "High",
      duration: "Weekly Updates",
      color: "bg-gray-50 text-gray-700 border-gray-200",
    },
    {
      title: "Intermittent Fasting Blog",
      description: "Time-restricted eating strategies suitable for Indian meal patterns",
      href: "/blog/intermittent-fasting",
      icon: Clock,
      difficulty: "Moderate",
      duration: "Weekly Posts",
      color: "bg-teal-50 text-teal-700 border-teal-200",
    },
    {
      title: "Exercise & Fitness Blog",
      description: "Home workouts, gym routines, and fitness tips for all fitness levels",
      href: "/blog/fitness",
      icon: Activity,
      difficulty: "Moderate",
      duration: "Daily Updates",
      color: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      title: "Nutrition Science Blog",
      description: "Evidence-based nutrition research and healthy eating fundamentals",
      href: "/blog/nutrition",
      icon: BookOpen,
      difficulty: "Easy",
      duration: "Weekly Posts",
      color: "bg-blue-50 text-blue-700 border-blue-200",
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
            <Link href="/plans" className="text-sm font-medium hover:text-primary transition-colors">
              Weight Loss Plans
            </Link>
            <Link href="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Calculators
            </Link>
            <Link href="/blog" className="text-sm font-medium text-primary">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Health & Fitness Blog</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Expert advice, evidence-based tips, and success stories for condition-specific weight loss and wellness
            journeys. Get the latest insights from certified nutritionists and health experts.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Personalized Advice - ₹500</Link>
          </Button>
        </div>
      </section>

      {/* Blog Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category, index) => {
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
                      <Link href={category.href}>Read Latest Articles</Link>
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
          <h2 className="text-3xl font-bold mb-6">Want Personalized Health Advice?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get expert guidance tailored to your specific health condition and goals. Our certified nutritionists
            provide personalized diet plans and lifestyle recommendations.
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
