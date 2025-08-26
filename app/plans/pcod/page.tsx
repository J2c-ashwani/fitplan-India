import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Target, AlertTriangle, Utensils, Activity, Moon, Droplets } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PCOD Weight Loss Plan - Hormone Balancing Indian Diet | FitPlan India",
  description:
    "Specialized PCOD weight loss plan with hormone-balancing Indian foods, insulin resistance management, and sustainable fat loss. Expert-designed meal plans.",
  keywords:
    "pcod weight loss, pcod diet plan, indian diet for pcod, hormone balance diet, insulin resistance diet, pcod meal plan",
}

export default function PCODPlanPage() {
  const challenges = [
    "Insulin resistance making weight loss harder",
    "Irregular periods and hormonal fluctuations",
    "Cravings and binge eating tendencies",
    "Stress and poor sleep impacting hormones",
    "Difficulty with high-intensity workouts",
    "Managing social situations and festive foods",
  ]

  const dietPlan = [
    {
      day: "Day 1",
      breakfast: "Moong dal chilla + Mint chutney + Green tea",
      midMorning: "1 apple + 6 soaked almonds",
      lunch: "1 roti (multigrain) + Palak dal + Lauki sabzi + Cucumber salad",
      evening: "Buttermilk + 2 roasted khakra",
      dinner: "Quinoa khichdi + Vegetable raita + Stir-fried beans",
    },
    {
      day: "Day 2",
      breakfast: "Vegetable oats upma + Herbal tea",
      midMorning: "1 orange + 5 walnuts",
      lunch: "Brown rice (½ cup) + Chana dal + Bhindi sabzi + Salad",
      evening: "Green tea + 2 tbsp roasted chana",
      dinner: "2 bajra rotis + Mix veg curry + Moong dal soup",
    },
    {
      day: "Day 3",
      breakfast: "Besan chilla + Coconut chutney",
      midMorning: "1 guava + 6 cashews",
      lunch: "Millet roti + Chicken curry (optional) + Bhindi sabzi",
      evening: "Herbal tea + 1 boiled egg (optional)",
      dinner: "Cauliflower rice pulao + Moong dal + Methi sabzi",
    },
  ]

  const lifestyleTips = [
    {
      icon: Activity,
      title: "Daily Movement",
      description: "Aim for 30-40 minutes of exercise daily. Strength training helps improve insulin sensitivity.",
    },
    {
      icon: Target,
      title: "Cycle Tracking",
      description: "Track menstrual cycles to understand hormonal changes and adjust your routine accordingly.",
    },
    {
      icon: Moon,
      title: "Prioritize Sleep",
      description: "7-9 hours of restful sleep is essential for hormonal balance and appetite regulation.",
    },
    {
      icon: Droplets,
      title: "Stay Hydrated",
      description: "Drink 8-10 glasses of water to support metabolism and reduce bloating.",
    },
  ]

  const faqs = [
    {
      question: "Can women with PCOD lose weight?",
      answer:
        "Yes! With the right diet, exercise, and stress management, women with PCOD can achieve healthy and sustainable weight loss. Consistency is key.",
    },
    {
      question: "What foods should women with PCOD avoid?",
      answer:
        "Avoid refined carbs, sugary foods, fried snacks, packaged juices, and excess dairy. These worsen insulin resistance and hormonal imbalance.",
    },
    {
      question: "Are fruits allowed in a PCOD diet?",
      answer:
        "Yes, but focus on low-glycemic fruits like berries, apple, guava, and orange. Avoid bananas, mangoes, and grapes in excess.",
    },
    {
      question: "Is intermittent fasting safe with PCOD?",
      answer:
        "Intermittent fasting can help regulate insulin, but it should be started gradually and only if your doctor approves. Avoid very long fasting windows.",
    },
    {
      question: "Which workouts are best for PCOD?",
      answer:
        "Strength training, yoga, and moderate cardio are most effective. Avoid excessive high-intensity training that may stress hormones further.",
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
              <h1 className="text-4xl font-bold mb-4">PCOD Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A holistic weight loss plan designed for women with PCOD. Focus on insulin resistance, hormone balance,
                and sustainable fat loss through Indian meals.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>2,200+ Success Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Improved cycle regularity: 65%</span>
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
                  This plan is designed for educational purposes. Always consult your gynecologist or endocrinologist
                  before starting any weight loss program, especially if you're on medication for PCOD.
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Understanding PCOD and Weight Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  PCOD (Polycystic Ovarian Disease) affects nearly 1 in 5 Indian women of reproductive age. It leads to
                  hormonal imbalance, insulin resistance, and weight gain — making weight loss more challenging.
                </p>
                <p className="text-muted-foreground">
                  Our PCOD-specific plan emphasizes hormone-friendly Indian foods, portion control, and lifestyle
                  strategies to support healthy, long-term fat loss while balancing hormones naturally.
                </p>
              </CardContent>
            </Card>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Common PCOD Weight Loss Challenges
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
                  Sample 7-Day PCOD Diet Plan
                </CardTitle>
                <CardDescription>
                  Hormone-friendly meals designed to improve insulin sensitivity and reduce inflammation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dietPlan.map((day, index) => (
                    <Card key={index} className="border-l-4 border-l-purple-500">
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
                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm text-purple-700">
                    <strong>Medical Supervision Recommended:</strong> PCOD weight loss requires lifestyle changes and
                    sometimes medical treatment. Always consult your doctor before starting.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Essential Lifestyle Tips for PCOD Weight Loss</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Ready to Manage Your PCOD Through Weight Loss?</h2>
                <p className="mb-6 opacity-90">
                  Get a medically-supervised PCOD weight loss plan with cycle tracking, personalized meals, and ongoing
                  support.
                </p>
                <Button size="lg" variant="secondary">
                  <Link href="/contact">Book PCOD Consultation - ₹500</Link>
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
                    <span className="text-sm font-medium">Recommended</span>
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
                  <Link href="/plans/hypothyroidism" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Hypothyroidism Plan</div>
                    <div className="text-xs text-muted-foreground">Thyroid-friendly approach</div>
                  </Link>
                  <Link href="/plans/obesity" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Obesity Management</div>
                    <div className="text-xs text-muted-foreground">Comprehensive weight loss</div>
                  </Link>
                  <Link href="/plans/diabetes" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Diabetes Plan</div>
                    <div className="text-xs text-muted-foreground">Blood sugar friendly</div>
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
