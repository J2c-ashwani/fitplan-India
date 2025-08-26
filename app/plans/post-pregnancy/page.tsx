import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Target, AlertTriangle, Utensils, Activity, Moon, Baby, Droplets, Heart } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Post-Pregnancy Weight Loss Plan - Indian Diet & Lifestyle | FitPlan India",
  description:
    "Safe and sustainable post-pregnancy weight loss plan for new mothers. Balanced Indian diet, lactation-friendly foods, and lifestyle guidance to restore health.",
  keywords:
    "post pregnancy weight loss, indian diet after delivery, weight loss after childbirth, safe diet for new mothers, lactation friendly weight loss plan",
}

export default function PostPregnancyPlanPage() {
  const challenges = [
    "Balancing weight loss with lactation needs",
    "Lack of time for exercise due to newborn care",
    "Postpartum fatigue and hormonal changes",
    "Cravings and emotional eating",
    "Abdominal fat and loose skin",
    "Sleep deprivation affecting metabolism",
  ]

  const dietPlan = [
    {
      day: "Day 1",
      breakfast: "Moong dal cheela + Mint chutney + Warm ajwain water",
      midMorning: "1 banana + 5 soaked almonds",
      lunch: "2 chapatis (multigrain) + Palak dal + Carrot & cucumber salad",
      evening: "1 glass haldi milk + Handful of roasted chana",
      dinner: "Vegetable khichdi + Lauki sabzi + Raita",
    },
    {
      day: "Day 2",
      breakfast: "Oats porridge with nuts & dates + Herbal tea",
      midMorning: "1 apple + 4 walnuts",
      lunch: "2 rotis + Mix veg curry + Moong dal soup",
      evening: "Homemade laddoo (gond/ajwain) + Green tea",
      dinner: "Brown rice + Rajma curry + Salad",
    },
    {
      day: "Day 3",
      breakfast: "Idli + Sambar + Coconut chutney",
      midMorning: "1 orange + 5 cashews",
      lunch: "1 millet roti + Chicken curry (optional) + Beans sabzi",
      evening: "Buttermilk + 2 khakra",
      dinner: "Vegetable oats upma + Tomato soup",
    },
  ]

  const lifestyleTips = [
    {
      icon: Baby,
      title: "Prioritize Recovery",
      description: "Focus on healing during the first 40 days. Avoid crash diets and strenuous workouts.",
    },
    {
      icon: Heart,
      title: "Lactation-Safe Diet",
      description: "Include methi, ajwain, jeera, garlic, and milk to support breast milk production.",
    },
    {
      icon: Activity,
      title: "Gentle Exercises",
      description: "Start with walking, breathing exercises, and yoga after doctor’s clearance.",
    },
    {
      icon: Moon,
      title: "Rest & Sleep",
      description: "Take naps when the baby sleeps to reduce fatigue and improve metabolism.",
    },
    {
      icon: Droplets,
      title: "Stay Hydrated",
      description: "Drink 10-12 glasses of water, jeera water, or ajwain water to aid digestion and recovery.",
    },
  ]

  const faqs = [
    {
      question: "When can I start dieting after delivery?",
      answer:
        "Wait at least 6–8 weeks before starting structured weight loss, or until your doctor gives approval. Nutrition should first support recovery and lactation.",
    },
    {
      question: "Can I lose weight while breastfeeding?",
      answer:
        "Yes, but it should be gradual. A crash diet can reduce milk supply. A balanced calorie-controlled diet works best.",
    },
    {
      question: "How long does it take to lose pregnancy weight?",
      answer:
        "Most women can return to pre-pregnancy weight within 6–12 months with consistent diet and exercise.",
    },
    {
      question: "Which foods should be avoided after pregnancy?",
      answer:
        "Avoid fried snacks, excess caffeine, alcohol, processed foods, and aerated drinks. They affect recovery and milk quality.",
    },
    {
      question: "What exercises are safe post-pregnancy?",
      answer:
        "Walking, kegel exercises, stretching, and yoga are safe after 6 weeks. For C-section recovery, consult your doctor first.",
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
                <Badge variant="destructive">New Moms</Badge>
                <Badge variant="outline">6-12 Months</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Post-Pregnancy Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A safe, sustainable plan for new mothers to lose weight while maintaining energy,
                supporting recovery, and ensuring healthy lactation.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>2,500+ Happy Moms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Gradual weight loss: 4-8 kg in 3 months</span>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <Card className="mb-8 border-pink-200 bg-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-800">
                  <AlertTriangle className="h-5 w-5" />
                  Important Health Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pink-700 text-sm">
                  Post-pregnancy weight loss should be gradual. Always consult your gynecologist before
                  starting any diet or workout, especially if you had a C-section or complications.
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Understanding Post-Pregnancy Weight Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pregnancy brings natural weight gain, and it’s important to give the body time to recover.
                  Hormonal changes, lack of sleep, and stress can slow down fat loss. A structured, nourishing
                  plan ensures recovery while gradually reducing weight.
                </p>
                <p className="text-muted-foreground">
                  Our approach focuses on nutrient-rich Indian meals, lactation-friendly foods, and
                  lifestyle tips that fit into a new mom’s busy routine.
                </p>
              </CardContent>
            </Card>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Common Challenges After Pregnancy
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
                  Sample 7-Day Post-Pregnancy Diet Plan
                </CardTitle>
                <CardDescription>
                  Nutritious, lactation-friendly meals for new mothers to promote recovery and gradual weight loss.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dietPlan.map((day, index) => (
                    <Card key={index} className="border-l-4 border-l-pink-500">
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
                <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
                  <p className="text-sm text-pink-700">
                    <strong>Note:</strong> Weight loss may be slower post-pregnancy. Focus on recovery,
                    bonding with your baby, and gradual lifestyle changes rather than quick results.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Lifestyle Tips for New Mothers</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Want a Customized Post-Pregnancy Plan?</h2>
                <p className="mb-6 opacity-90">
                  Get a personalized recovery and weight loss program designed for your body and lifestyle
                  by our expert dietitians.
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
                    <span className="text-sm font-medium">6-12 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">Easy-Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Breastfeeding Safe</span>
                    <span className="text-sm font-medium">Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="text-sm font-medium">81%</span>
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
                  <Link href="/plans/obesity" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Obesity Plan</div>
                    <div className="text-xs text-muted-foreground">General fat loss program</div>
                  </Link>
                  <Link href="/plans/diabetes" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Diabetes Plan</div>
                    <div className="text-xs text-muted-foreground">Sugar control diet</div>
                  </Link>
                  <Link
                    href="/plans/hormonal-imbalance"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="font-medium text-sm">Hormonal Imbalance Plan</div>
                    <div className="text-xs text-muted-foreground">Balance post-pregnancy hormones</div>
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
