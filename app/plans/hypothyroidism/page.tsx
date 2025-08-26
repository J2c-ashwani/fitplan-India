import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Target, AlertTriangle, Utensils, Activity, Moon, Droplets, Heart } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Hypothyroidism Weight Loss Plan - Indian Thyroid Diet | FitPlan India",
  description:
    "Specialized hypothyroidism weight loss plan with thyroid-friendly Indian foods, metabolism boosting strategies, and long-term fat loss support.",
  keywords:
    "hypothyroidism diet plan, thyroid weight loss, Indian diet for hypothyroid, low metabolism diet, hypothyroid meal plan",
}

export default function HypothyroidismPlanPage() {
  const challenges = [
    "Slow metabolism leading to weight gain",
    "Persistent fatigue and low energy",
    "Dry skin, hair fall, and puffiness",
    "Mood swings and low motivation",
    "Constipation and bloating",
    "Difficulty losing fat despite exercise",
  ]

  const dietPlan = [
    {
      day: "Day 1",
      breakfast: "Vegetable oats upma + 1 boiled egg (optional) + Green tea",
      midMorning: "Papaya bowl + 5 soaked almonds",
      lunch: "2 multigrain rotis + Dal + Lauki sabzi + Carrot cucumber salad",
      evening: "Roasted chana + Herbal tea",
      dinner: "Brown rice (1/2 cup) + Moong dal khichdi + Palak curry",
    },
    {
      day: "Day 2",
      breakfast: "Moong dal chilla + Mint chutney + Black coffee (sugar-free)",
      midMorning: "1 guava + 5 walnuts",
      lunch: "1 cup quinoa + Rajma curry + Bhindi sabzi + Salad",
      evening: "Buttermilk (unsalted) + 2 rice cakes",
      dinner: "2 bajra rotis + Chicken curry (optional) + Methi sabzi",
    },
    {
      day: "Day 3",
      breakfast: "Vegetable poha + 1 boiled egg (optional)",
      midMorning: "Apple slices + 6 cashews",
      lunch: "2 jowar rotis + Dal tadka + Cabbage sabzi + Salad",
      evening: "Caffeine-free green tea + Roasted foxnuts (makhana)",
      dinner: "Oats khichdi + Methi thepla (1 small) + Raita",
    },
  ]

  const lifestyleTips = [
    {
      icon: Target,
      title: "Thyroid Monitoring",
      description: "Check TSH, T3, and T4 levels regularly. Diet adjustments must be supervised by a doctor.",
    },
    {
      icon: Activity,
      title: "Regular Exercise",
      description: "Daily 30–45 mins of brisk walking, yoga, or strength training boosts metabolism.",
    },
    {
      icon: Droplets,
      title: "Hydration & Fiber",
      description: "Drink 2–3L of water daily. Include fiber-rich fruits and vegetables to fight constipation.",
    },
    {
      icon: Moon,
      title: "Sleep & Stress",
      description: "Ensure 7–9 hours of quality sleep. Stress worsens thyroid imbalance.",
    },
  ]

  const faqs = [
    {
      question: "Can hypothyroidism patients lose weight?",
      answer:
        "Yes. With proper medication, a thyroid-friendly diet, and consistent lifestyle habits, weight loss is achievable.",
    },
    {
      question: "Which foods should be avoided in hypothyroidism?",
      answer:
        "Avoid processed foods, excessive sugar, deep-fried snacks, and high soy products. Limit goitrogenic foods (raw cruciferous veggies) if iodine deficiency is present.",
    },
    {
      question: "Which nutrients are important for hypothyroidism?",
      answer:
        "Iodine, selenium, zinc, vitamin D, and protein are crucial. Include eggs, fish, nuts, seeds, and whole grains.",
    },
    {
      question: "Does exercise help hypothyroidism?",
      answer:
        "Yes, regular exercise helps improve metabolism, reduce fatigue, and maintain a healthy weight.",
    },
    {
      question: "Is stress management important for thyroid health?",
      answer:
        "Yes, chronic stress can worsen hypothyroid symptoms. Yoga, meditation, and breathing exercises are helpful.",
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
              <h1 className="text-4xl font-bold mb-4">Hypothyroidism Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A thyroid-supportive weight management plan designed for hypothyroidism. Focus on boosting metabolism,
                balancing hormones, and achieving fat loss with Indian meals.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>2,400+ Success Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Metabolic boost in 3 months</span>
                </div>
              </div>
            </div>

            {/* Medical Notice */}
            <Card className="mb-8 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertTriangle className="h-5 w-5" />
                  Important Medical Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-sm">
                  This plan is educational and supportive. Always follow your doctor’s prescription for thyroid
                  medication (like levothyroxine) before starting any diet or lifestyle change.
                </p>
              </CardContent>
            </Card>

            {/* Intro */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Understanding Hypothyroidism & Weight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Hypothyroidism slows down metabolism, leading to weight gain, water retention, and fatigue. Diet and
                  lifestyle play a major role in managing weight while keeping thyroid hormones balanced.
                </p>
                <p className="text-muted-foreground">
                  This plan focuses on metabolism-boosting foods, high-quality proteins, and lifestyle changes that
                  improve thyroid function.
                </p>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Common Hypothyroidism Challenges
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

            {/* Diet Plan */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Sample 7-Day Hypothyroidism Diet Plan
                </CardTitle>
                <CardDescription>
                  Balanced Indian meals to improve metabolism and reduce thyroid symptoms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dietPlan.map((day, index) => (
                    <Card key={index} className="border-l-4 border-l-blue-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{day.day}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div><strong>Breakfast:</strong> {day.breakfast}</div>
                        <div><strong>Mid-Morning:</strong> {day.midMorning}</div>
                        <div><strong>Lunch:</strong> {day.lunch}</div>
                        <div><strong>Evening:</strong> {day.evening}</div>
                        <div><strong>Dinner:</strong> {day.dinner}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> Take thyroid medication on an empty stomach (30 mins before breakfast).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Lifestyle Tips for Hypothyroidism</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Ready to Control Your Hypothyroidism?</h2>
                <p className="mb-6 opacity-90">
                  Get a customized hypothyroidism diet and lifestyle plan with ongoing doctor guidance.
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
                    <span className="text-sm font-medium">Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Medical Supervision</span>
                    <span className="text-sm font-medium">Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Ad */}
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
                  <Link href="/plans/hyperthyroidism" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Hyperthyroidism Plan</div>
                    <div className="text-xs text-muted-foreground">Metabolism control</div>
                  </Link>
                  <Link href="/plans/obesity" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Obesity Management</div>
                    <div className="text-xs text-muted-foreground">Fat loss strategies</div>
                  </Link>
                  <Link href="/plans/vegetarian" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Vegetarian Plan</div>
                    <div className="text-xs text-muted-foreground">Plant-based nutrition</div>
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
