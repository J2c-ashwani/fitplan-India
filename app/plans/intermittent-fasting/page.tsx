import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Users, Target, AlertTriangle, Utensils, Activity, Coffee, Moon } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Indian Intermittent Fasting Plan - Time Restricted Eating | FitPlan India",
  description:
    "Indian intermittent fasting plan (16:8, 18:6) with balanced meal options for fat loss, improved metabolism, and sustainable health.",
  keywords:
    "intermittent fasting india, 16:8 fasting indian, fasting weight loss, indian intermittent fasting meal plan",
}

export default function IntermittentFastingPage() {
  const challenges = [
    "Hunger pangs in the initial days",
    "Difficulty avoiding late-night snacking",
    "Confusion about what breaks a fast",
    "Low energy if meals are not balanced",
    "Overeating during eating window",
    "Social & cultural meal timings",
  ]

  const dietPlan = [
    {
      window: "16:8 Fasting (Eat between 12 PM – 8 PM)",
      meal1: "12:00 PM – Lunch: Paneer curry + 2 multigrain rotis + salad",
      snack: "3:30 PM – Black coffee/green tea + handful of almonds",
      meal2: "7:30 PM – Dinner: Grilled chicken/fish (or tofu) + sautéed vegetables",
    },
    {
      window: "18:6 Fasting (Eat between 1 PM – 7 PM)",
      meal1: "1:00 PM – Lunch: Rajma curry + 1 small bowl brown rice + cucumber salad",
      snack: "4:00 PM – Black coffee + cheese cubes",
      meal2: "6:30 PM – Dinner: Palak paneer + stir-fried broccoli",
    },
    {
      window: "20:4 Fasting (Eat between 2 PM – 6 PM, advanced)",
      meal1: "2:00 PM – Large meal: Chicken tikka + cauliflower rice pulao + leafy greens",
      snack: "5:00 PM – Greek yogurt (unsweetened) with flax seeds",
    },
  ]

  const lifestyleTips = [
    {
      icon: Coffee,
      title: "Fasting Drinks",
      description:
        "During fasting, only water, black coffee, and green tea are allowed. Avoid milk and sugar.",
    },
    {
      icon: Utensils,
      title: "Balanced Meals",
      description:
        "Each meal should include protein, fiber, and healthy fats to prevent overeating.",
    },
    {
      icon: Activity,
      title: "Exercise Timing",
      description:
        "Light workouts can be done in fasting state; strength training is best during eating window.",
    },
    {
      icon: Moon,
      title: "Sleep & Recovery",
      description:
        "Adequate sleep helps control hunger hormones and improves fasting benefits.",
    },
  ]

  const faqs = [
    {
      question: "Does intermittent fasting work for Indians?",
      answer:
        "Yes, IF works well with Indian meals by adjusting timings. Focus on dal, paneer, sabzi, and salads during eating windows.",
    },
    {
      question: "Can I drink tea during fasting?",
      answer:
        "Yes, but only black tea or green tea without sugar/milk. Adding milk breaks the fast.",
    },
    {
      question: "What’s the best intermittent fasting window?",
      answer:
        "16:8 is the most popular and sustainable. Advanced levels like 18:6 or 20:4 should be done gradually.",
    },
    {
      question: "Can women do intermittent fasting?",
      answer:
        "Yes, but they should avoid prolonged fasting (>18 hrs) without guidance, especially during periods or pregnancy.",
    },
    {
      question: "How much weight can I lose with intermittent fasting?",
      answer:
        "On average, 3–6 kg in 2 months with proper diet and exercise.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">Fasting</Badge>
                <Badge variant="outline">Time Restricted</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Indian Intermittent Fasting Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A time-restricted eating plan (16:8, 18:6) designed for Indian lifestyles, helping you lose fat and improve metabolism without strict dieting.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>4,500+ Clients Benefited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Weight loss: 3–6 kg in 2 months</span>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <Card className="mb-8 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <AlertTriangle className="h-5 w-5" />
                  Important Fasting Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 text-sm">
                  Intermittent fasting is not suitable for pregnant women, people with eating disorders, or those with medical conditions like diabetes without supervision.
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Why Intermittent Fasting Works?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Intermittent fasting works by giving your body longer breaks from food, which lowers insulin levels and boosts fat burning.  
                </p>
                <p className="text-muted-foreground">
                  For Indians, IF is effective because it only changes meal timings, not food choices—making it easier to follow than restrictive diets.
                </p>
              </CardContent>
            </Card>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Common Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sample Fasting Plans */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Sample Indian Intermittent Fasting Plans
                </CardTitle>
                <CardDescription>
                  Choose your fasting window and follow with balanced Indian meals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dietPlan.map((plan, index) => (
                    <Card key={index} className="border-l-4 border-l-yellow-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{plan.window}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div><strong>Meal 1:</strong> {plan.meal1}</div>
                        <div><strong>Snack:</strong> {plan.snack}</div>
                        <div><strong>Meal 2:</strong> {plan.meal2 || "—"}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Essential Fasting Lifestyle Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {lifestyleTips.map((tip, index) => {
                    const Icon = tip.icon
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{tip.title}</h3>
                          <p className="text-sm text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* FAQs */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Want a Customized IF Plan?</h2>
                <p className="mb-6 opacity-90">
                  Get a personalized intermittent fasting plan based on your health, lifestyle, and goals from our expert nutritionists.
                </p>
                <Button size="lg" variant="secondary">
                  <Link href="/contact">Book Consultation - ₹500</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Plan Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="text-sm font-medium">Flexible</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">Easy–Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Best Window</span>
                    <span className="text-sm font-medium">16:8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Ad Space */}
              <Card className="bg-muted/30">
                <CardContent className="p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">Advertisement</div>
                  <div className="h-32 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Google AdSense</span>
                  </div>
                </CardContent>
              </Card>

              {/* Related Plans */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Plans</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/plans/keto" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Keto Plan</div>
                    <div className="text-xs text-muted-foreground">Low-carb diet for fat loss</div>
                  </Link>
                  <Link href="/plans/vegetarian" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Vegetarian Plan</div>
                    <div className="text-xs text-muted-foreground">Plant-based fat loss diet</div>
                  </Link>
                  <Link href="/plans/obesity" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Obesity Plan</div>
                    <div className="text-xs text-muted-foreground">General weight loss strategy</div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
