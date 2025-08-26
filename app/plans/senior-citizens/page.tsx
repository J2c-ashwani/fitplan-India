import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Users, Target, AlertTriangle, Utensils, Activity, Moon, Dumbbell } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Senior Citizens Weight Loss & Wellness Plan | FitPlan India",
  description:
    "A safe and effective Indian diet and lifestyle plan for senior citizens (50+) to manage weight, improve energy, and support healthy aging.",
  keywords:
    "senior citizen diet plan india, weight loss over 50 india, healthy aging diet, indian diet for seniors, weight management after 50",
}

export default function SeniorCitizensPlan() {
  const challenges = [
    "Slower metabolism with age",
    "Muscle loss (sarcopenia)",
    "Joint pain and reduced mobility",
    "Higher risk of diabetes, BP, heart issues",
    "Difficulty digesting heavy foods",
    "Emotional eating & social habits",
  ]

  const dietPlan = [
    {
      time: "7:30 AM – Morning",
      meal: "Warm water + soaked almonds (4–5) + 1 walnut",
    },
    {
      time: "9:00 AM – Breakfast",
      meal: "Vegetable upma/poha with peanuts + 1 boiled egg or paneer cubes",
    },
    {
      time: "12:30 PM – Lunch",
      meal: "1 multigrain roti + dal/paneer curry + lightly sautéed vegetables + cucumber salad",
    },
    {
      time: "4:30 PM – Evening Snack",
      meal: "Green tea + roasted chana / sprouts chaat",
    },
    {
      time: "7:30 PM – Dinner",
      meal: "Moong dal khichdi + curd + stir-fried spinach/broccoli",
    },
    {
      time: "9:00 PM – Bedtime",
      meal: "1 cup warm turmeric milk (low-fat)",
    },
  ]

  const lifestyleTips = [
    {
      icon: Activity,
      title: "Gentle Exercise",
      description:
        "Walking, yoga, or swimming for 30 minutes daily keeps joints healthy without strain.",
    },
    {
      icon: Dumbbell,
      title: "Strength Maintenance",
      description:
        "Light resistance training with bands or bodyweight helps preserve muscle mass.",
    },
    {
      icon: Utensils,
      title: "Digestive Friendly Meals",
      description:
        "Opt for smaller, frequent meals that are easy to digest, avoiding fried or spicy foods at night.",
    },
    {
      icon: Moon,
      title: "Sleep Hygiene",
      description:
        "Early dinners and 7–8 hours of sleep improve metabolism and hormone balance.",
    },
  ]

  const faqs = [
    {
      question: "Is weight loss safe for people above 50?",
      answer:
        "Yes, with a balanced diet and light activity. The focus is on fat loss while maintaining muscle and bone health.",
    },
    {
      question: "Should seniors avoid carbs?",
      answer:
        "No, carbs are essential. Prefer complex carbs like millets, oats, and multigrain rotis instead of refined flour or white rice.",
    },
    {
      question: "What’s the best exercise for seniors?",
      answer:
        "Walking, yoga, and light strength training are safest. Avoid high-impact workouts unless cleared by a doctor.",
    },
    {
      question: "How can seniors prevent muscle loss?",
      answer:
        "Include protein in every meal—dal, paneer, fish, eggs, or sprouts—and do light resistance exercises.",
    },
    {
      question: "Can seniors do intermittent fasting?",
      answer:
        "Mild time-restricted eating (like 12:12) may help, but long fasting windows are not recommended without medical guidance.",
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
                <Badge variant="secondary">50+ Age</Badge>
                <Badge variant="outline">Safe & Sustainable</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Senior Citizens Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A gentle, Indian diet and lifestyle plan designed for seniors to stay fit, control weight, and improve overall energy without stress.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>2,800+ Senior Clients Helped</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Safe weight loss: 2–4 kg/month</span>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <Card className="mb-8 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <AlertTriangle className="h-5 w-5" />
                  Health Precaution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm">
                  Seniors with chronic conditions like diabetes, hypertension, or heart disease must consult a doctor before starting any weight loss plan.
                </p>
              </CardContent>
            </Card>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Challenges for Seniors</CardTitle>
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
                <CardTitle>Sample Senior Citizen Indian Diet Plan</CardTitle>
                <CardDescription>
                  Balanced meals focusing on easy digestion, strength, and energy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dietPlan.map((plan, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-muted/30">
                      <div className="font-semibold">{plan.time}</div>
                      <div className="text-sm text-muted-foreground">{plan.meal}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Healthy Aging Lifestyle Tips</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Get a Safe Senior Plan</h2>
                <p className="mb-6 opacity-90">
                  Our experts create customized senior weight loss plans keeping in mind medications, health history, and lifestyle needs.
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
                    <span className="text-sm text-muted-foreground">Age Group</span>
                    <span className="text-sm font-medium">50+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">Easy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Weight Loss</span>
                    <span className="text-sm font-medium">2–4 kg/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Focus</span>
                    <span className="text-sm font-medium">Health + Mobility</span>
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
                  <Link href="/plans/metabolic" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Metabolic Health Plan</div>
                    <div className="text-xs text-muted-foreground">Balance metabolism after 40</div>
                  </Link>
                  <Link href="/plans/thyroid" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Thyroid Plan</div>
                    <div className="text-xs text-muted-foreground">Manage hypothyroidism naturally</div>
                  </Link>
                  <Link href="/plans/vegetarian" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Vegetarian Plan</div>
                    <div className="text-xs text-muted-foreground">Balanced plant-based meals</div>
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
