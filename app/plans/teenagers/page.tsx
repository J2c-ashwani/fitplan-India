import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Target, AlertTriangle, Utensils, Activity, Moon, BookOpen, Coffee } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Teenagers & Students Weight Loss Plan - Indian Diet & Lifestyle | FitPlan India",
  description:
    "Healthy weight loss plan for teenagers & students. Balanced Indian diet, energy-boosting foods, and study-friendly lifestyle tips.",
  keywords:
    "teenager weight loss, student diet plan, healthy indian diet for students, weight loss for teenagers, study friendly diet",
}

export default function TeenagersPlanPage() {
  const challenges = [
    "Irregular eating due to study schedules",
    "High junk food and sugary snacks consumption",
    "Sedentary lifestyle from long hours of study",
    "Excess caffeine and late-night habits",
    "Peer pressure & body image concerns",
    "Lack of consistent physical activity",
  ]

  const dietPlan = [
    {
      day: "Day 1",
      breakfast: "Vegetable poha + 1 boiled egg (or sprouts) + Milk",
      midMorning: "1 apple + 5 soaked almonds",
      lunch: "2 chapatis + Dal tadka + Mix veg sabzi + Salad",
      evening: "Roasted makhana + Green tea",
      dinner: "Brown rice + Rajma curry + Carrot-beet salad",
    },
    {
      day: "Day 2",
      breakfast: "Oats porridge with banana & nuts",
      midMorning: "1 orange + 4 walnuts",
      lunch: "2 rotis + Chole curry + Cucumber raita",
      evening: "1 multigrain sandwich (veggies + paneer)",
      dinner: "Vegetable upma + Tomato soup",
    },
    {
      day: "Day 3",
      breakfast: "Idli + Sambar + Coconut chutney",
      midMorning: "1 pear + 5 cashews",
      lunch: "1 millet roti + Palak dal + Beans stir fry",
      evening: "1 boiled corn cob + Herbal tea",
      dinner: "Vegetable khichdi + Lauki sabzi + Salad",
    },
  ]

  const lifestyleTips = [
    {
      icon: BookOpen,
      title: "Smart Study Snacks",
      description: "Replace chips and soft drinks with roasted chana, fruits, or nuts to stay full and focused.",
    },
    {
      icon: Activity,
      title: "Daily Exercise",
      description: "Encourage at least 45–60 minutes of outdoor activity like cycling, walking, or sports.",
    },
    {
      icon: Coffee,
      title: "Limit Caffeine",
      description: "Avoid excess tea, coffee, and energy drinks. They disturb sleep and increase cravings.",
    },
    {
      icon: Moon,
      title: "Sleep Hygiene",
      description: "Teenagers need 7–8 hours of proper sleep for metabolism, memory, and overall health.",
    },
  ]

  const faqs = [
    {
      question: "Is dieting safe for teenagers?",
      answer:
        "Strict diets are not safe. The focus should be on balanced meals, portion control, and physical activity.",
    },
    {
      question: "What is the best breakfast for students?",
      answer:
        "Breakfast should be protein-rich to keep energy levels stable: poha, oats, eggs, or idli are good options.",
    },
    {
      question: "Can students skip dinner to lose weight?",
      answer:
        "Skipping meals can harm metabolism and concentration. Instead, opt for lighter dinners like soups and khichdi.",
    },
    {
      question: "How to control junk food cravings?",
      answer:
        "Keep healthy snacks handy. Drink water and eat fruits before stepping out to avoid overeating junk food.",
    },
    {
      question: "What exercises are good for students?",
      answer:
        "Any activity that they enjoy: running, swimming, dancing, yoga, or team sports. Consistency is key.",
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
                <Badge variant="destructive">Teenagers</Badge>
                <Badge variant="outline">Students</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Teenagers & Students Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A balanced, energy-boosting plan designed for teenagers and students to lose weight safely
                while supporting focus and growth.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>3,200+ Students Benefited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Weight loss: 3–6 kg in 2 months</span>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <Card className="mb-8 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <AlertTriangle className="h-5 w-5" />
                  Important Health Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  Teenagers should not follow crash diets or extreme fasting. Proper nutrition is essential
                  for growth, learning, and hormonal balance.
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Understanding Teenager Weight Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Teenagers and students often struggle with weight due to irregular meals, fast food,
                  and lack of physical activity. A structured diet can help maintain healthy weight
                  while boosting concentration and energy for studies.
                </p>
                <p className="text-muted-foreground">
                  This plan combines balanced Indian meals with study-friendly lifestyle habits for
                  sustainable weight management.
                </p>
              </CardContent>
            </Card>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Common Challenges for Students
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
                  Sample 7-Day Teenager Diet Plan
                </CardTitle>
                <CardDescription>
                  Simple, affordable, and nutritious Indian meals for growing students.
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
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> Avoid energy drinks, packaged juices, and late-night junk food.
                    Focus on natural, homemade meals for better concentration and steady energy.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Lifestyle Tips for Students</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Want a Customized Student Plan?</h2>
                <p className="mb-6 opacity-90">
                  Get a personalized diet and study-friendly weight loss program designed by our expert dietitians.
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
                    <span className="text-sm font-medium">2–3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">Easy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Student-Friendly</span>
                    <span className="text-sm font-medium">Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="text-sm font-medium">78%</span>
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
                  <Link href="/plans/pcod" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">PCOD Plan</div>
                    <div className="text-xs text-muted-foreground">Hormonal balance & weight control</div>
                  </Link>
                  <Link href="/plans/obesity" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Obesity Plan</div>
                    <div className="text-xs text-muted-foreground">General fat loss program</div>
                  </Link>
                  <Link
                    href="/plans/post-pregnancy"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="font-medium text-sm">Post-Pregnancy Plan</div>
                    <div className="text-xs text-muted-foreground">New mothers’ recovery diet</div>
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
