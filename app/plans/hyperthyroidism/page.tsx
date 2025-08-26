import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Target, AlertTriangle, Utensils, Activity, Moon, Droplets } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Hyperthyroidism Weight Gain Plan - Metabolism Balancing Indian Diet | FitPlan India",
  description:
    "Specialized hyperthyroidism weight gain plan with thyroid-friendly Indian foods, metabolism balancing strategies, and healthy weight restoration support.",
  keywords:
    "hyperthyroidism diet plan, thyroid weight gain, Indian diet for thyroid, high metabolism diet, hyperthyroid meal plan",
}

export default function HyperthyroidismPlanPage() {
  const challenges = [
    "Unintentional weight loss despite eating enough",
    "High metabolism causing fatigue and muscle loss",
    "Anxiety, restlessness, and sleep disturbances",
    "Difficulty maintaining balanced energy levels",
    "Nutrient deficiencies (calcium, vitamin D, protein)",
    "Managing social eating while avoiding triggers like caffeine",
  ]

  const dietPlan = [
    {
      day: "Day 1",
      breakfast: "Moong dal chilla + Mint chutney + Herbal tea (caffeine-free)",
      midMorning: "1 banana + 5 soaked almonds",
      lunch: "2 rotis (multigrain) + Dal + Lauki sabzi + Carrot cucumber salad",
      evening: "Buttermilk (unsalted) + 2 rice cakes",
      dinner: "Vegetable khichdi (brown rice + moong dal) + Palak curry",
    },
    {
      day: "Day 2",
      breakfast: "Vegetable poha + 1 boiled egg (optional)",
      midMorning: "1 guava + 5 walnuts",
      lunch: "Brown rice (1/2 cup) + Rajma + Bhindi curry + Cabbage salad",
      evening: "Caffeine-free green tea + Roasted chana",
      dinner: "2 rotis + Moong dal + Tinda curry + Raita",
    },
    {
      day: "Day 3",
      breakfast: "Vegetable upma + Coconut chutney",
      midMorning: "1 apple + 6 cashews",
      lunch: "Bajra roti + Chicken curry (optional) + Mixed sabzi",
      evening: "Herbal tea + 1 boiled egg (optional)",
      dinner: "Oats khichdi + Methi sabzi + Pickle (small)",
    },
  ]

  const lifestyleTips = [
    {
      icon: Target,
      title: "Thyroid Monitoring",
      description: "Check TSH, T3, and T4 levels regularly. Adjust diet with medical advice.",
    },
    {
      icon: Activity,
      title: "Light to Moderate Exercise",
      description: "Gentle yoga, walking, and stretching help manage anxiety and maintain muscle mass.",
    },
    {
      icon: Droplets,
      title: "Hydration & Electrolytes",
      description: "Drink enough water and include natural electrolyte sources like coconut water.",
    },
    {
      icon: Moon,
      title: "Stress & Sleep Care",
      description: "Aim for 7-8 hours of sleep. Avoid late-night screen time and caffeine.",
    },
  ]

  const faqs = [
    {
      question: "Can hyperthyroid patients gain weight back?",
      answer:
        "Yes, with proper diet and treatment, patients can regain healthy weight. Focus on nutrient-rich foods and avoid relying on empty calories.",
    },
    {
      question: "What foods should be avoided with hyperthyroidism?",
      answer:
        "Avoid caffeine, refined sugar, processed foods, and excess iodine (like seaweed, iodized salt). These may worsen symptoms.",
    },
    {
      question: "Which foods help in hyperthyroidism?",
      answer:
        "Include whole grains, fresh vegetables, fruits, dairy, legumes, and lean protein. Cruciferous vegetables (cabbage, broccoli) in moderation may help reduce thyroid hormone activity.",
    },
    {
      question: "Can exercise help hyperthyroidism?",
      answer:
        "Yes, but stick to light-to-moderate activity. Over-exercising can worsen fatigue, muscle loss, and heart symptoms.",
    },
    {
      question: "Is stress linked to hyperthyroidism?",
      answer:
        "Stress can worsen symptoms and affect sleep. Meditation, yoga, and relaxation techniques are recommended for thyroid patients.",
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
                <Badge variant="destructive">High Priority</Badge>
                <Badge variant="outline">6-12 Months</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Hyperthyroidism Weight Gain Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A medically-supervised nutrition and lifestyle plan designed for hyperthyroidism. Focus on metabolism
                control, muscle preservation, and restoring healthy weight through balanced Indian meals.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>1,200+ Success Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Improved TSH levels in 3 months</span>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <Card className="mb-8 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertTriangle className="h-5 w-5" />
                  Important Medical Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-sm">
                  This plan is for educational purposes. Always consult your endocrinologist before starting any diet or
                  lifestyle changes. Hyperthyroidism requires regular monitoring and medication adjustments.
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Understanding Hyperthyroidism and Weight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Hyperthyroidism speeds up metabolism, often leading to unintentional weight loss, muscle weakness, and
                  nutrient imbalances. Managing diet and lifestyle is crucial to restore balance and support thyroid
                  health.
                </p>
                <p className="text-muted-foreground">
                  Our thyroid-specific plan includes high-quality protein, balanced carbs, and essential micronutrients
                  to support weight gain, energy, and long-term wellness.
                </p>
              </CardContent>
            </Card>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Common Hyperthyroidism Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sample Diet Plan */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Sample 7-Day Hyperthyroidism Diet Plan
                </CardTitle>
                <CardDescription>
                  Thyroid-friendly meals designed to stabilize energy and promote healthy weight gain.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dietPlan.map((day, index) => (
                    <Card key={index} className="border-l-4 border-l-red-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{day.day}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div>
                          <strong>Breakfast:</strong> {day.breakfast}
                        </div>
                        <div>
                          <strong>Mid-Morning:</strong> {day.midMorning}
                        </div>
                        <div>
                          <strong>Lunch:</strong> {day.lunch}
                        </div>
                        <div>
                          <strong>Evening:</strong> {day.evening}
                        </div>
                        <div>
                          <strong>Dinner:</strong> {day.dinner}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-700">
                    <strong>Medical Supervision Required:</strong> This plan should only be followed with regular
                    thyroid testing and doctor guidance.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Essential Lifestyle Tips for Hyperthyroidism</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Ready to Manage Your Hyperthyroidism?</h2>
                <p className="mb-6 opacity-90">
                  Get a customized hyperthyroidism diet and lifestyle plan with medical supervision, regular checkups,
                  and ongoing support.
                </p>
                <Button size="lg" variant="secondary">
                  <Link href="/contact">Book Thyroid Consultation - ₹500</Link>
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
                    <span className="text-sm font-medium">6-12 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">High</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Medical Supervision</span>
                    <span className="text-sm font-medium">Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="text-sm font-medium">74%</span>
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
                  <Link href="/plans/diabetes" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Diabetes Plan</div>
                    <div className="text-xs text-muted-foreground">Blood sugar friendly diet</div>
                  </Link>
                  <Link href="/plans/obesity" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Obesity Management</div>
                    <div className="text-xs text-muted-foreground">Sustainable fat loss</div>
                  </Link>
                  <Link href="/plans/vegetarian" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Vegetarian Plan</div>
                    <div className="text-xs text-muted-foreground">Plant-based options</div>
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
