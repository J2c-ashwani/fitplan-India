import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Clock, Users, AlertCircle, Utensils, Activity, Moon, Brain } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PCOS Weight Loss Plan - Insulin Resistant Diet for Indian Women | FitPlan India",
  description:
    "Specialized PCOS weight loss plan with anti-inflammatory Indian foods, insulin-resistant diet, and hormone-balancing nutrition. 7-day meal plan included.",
  keywords:
    "PCOS weight loss, PCOS diet plan, insulin resistance diet, PCOS Indian food, polycystic ovary syndrome diet, hormone balance diet",
}

export default function PCOSPlanPage() {
  const challenges = [
    "Insulin resistance making weight loss difficult",
    "Hormonal imbalances affecting metabolism",
    "Irregular periods and mood swings",
    "Increased cravings for sugary foods",
    "Difficulty losing belly fat",
    "Hair loss and acne issues",
  ]

  const dietPlan = [
    {
      day: "Day 1",
      breakfast: "Vegetable poha with mint chutney + Green tea",
      midMorning: "1 apple with 10 almonds",
      lunch: "Brown rice + Dal + Mixed vegetable curry + Cucumber raita",
      evening: "Herbal tea + 2 whole grain biscuits",
      dinner: "Quinoa upma + Palak paneer + Small bowl curd",
    },
    {
      day: "Day 2",
      breakfast: "Oats upma with vegetables + Buttermilk",
      midMorning: "1 orange + 5 walnuts",
      lunch: "Roti + Rajma + Bhindi sabzi + Onion salad",
      evening: "Green tea + Roasted chana (1/4 cup)",
      dinner: "Vegetable daliya + Lauki curry + Mint chutney",
    },
    {
      day: "Day 3",
      breakfast: "Besan chilla with vegetables + Coconut chutney",
      midMorning: "1 pear + 8 cashews",
      lunch: "Brown rice + Sambar + Cabbage curry + Pickle",
      evening: "Herbal tea + 1 boiled egg (optional)",
      dinner: "Roti + Moong dal + Karela sabzi + Raita",
    },
  ]

  const lifestyleTips = [
    {
      icon: Activity,
      title: "Exercise Regularly",
      description: "30 minutes of moderate exercise daily. Include strength training, yoga, and cardio.",
    },
    {
      icon: Moon,
      title: "Quality Sleep",
      description: "7-8 hours of sleep to regulate hormones. Maintain consistent sleep schedule.",
    },
    {
      icon: Brain,
      title: "Stress Management",
      description: "Practice meditation, deep breathing, or yoga to manage cortisol levels.",
    },
    {
      icon: Utensils,
      title: "Meal Timing",
      description: "Eat every 3-4 hours to maintain stable blood sugar levels.",
    },
  ]

  const faqs = [
    {
      question: "Can I lose weight with PCOS?",
      answer:
        "Yes, absolutely! While PCOS makes weight loss more challenging due to insulin resistance, with the right diet plan and lifestyle changes, sustainable weight loss is achievable. Many women with PCOS have successfully lost weight and improved their symptoms.",
    },
    {
      question: "What foods should I avoid with PCOS?",
      answer:
        "Avoid refined sugars, processed foods, white bread, sugary drinks, fried foods, and high-glycemic index foods. These can worsen insulin resistance and hormonal imbalances.",
    },
    {
      question: "How much weight can I lose in a month with PCOS?",
      answer:
        "A healthy weight loss rate for PCOS is 1-2 kg per month. Rapid weight loss can worsen hormonal imbalances. Slow, steady progress is more sustainable and beneficial for PCOS management.",
    },
    {
      question: "Is intermittent fasting good for PCOS?",
      answer:
        "Intermittent fasting can be beneficial for some women with PCOS as it helps improve insulin sensitivity. However, it should be done under guidance and may not be suitable for everyone, especially those with eating disorders.",
    },
    {
      question: "Can I eat rice with PCOS?",
      answer:
        "Yes, but choose brown rice or other whole grains over white rice. Portion control is important, and it's best to pair rice with protein and fiber-rich vegetables to minimize blood sugar spikes.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">PCOS Specialized</Badge>
                <Badge variant="outline">4-8 Months</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">PCOS Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A comprehensive insulin-resistant friendly diet plan designed specifically for women with PCOS. Focus on
                anti-inflammatory foods, hormone balance, and sustainable weight loss.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>2,500+ Success Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Average 8-12kg loss</span>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Understanding PCOS and Weight Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Polycystic Ovary Syndrome (PCOS) affects 1 in 10 women of reproductive age in India. The condition is
                  characterized by hormonal imbalances, insulin resistance, and irregular periods, making weight loss
                  more challenging but not impossible.
                </p>
                <p className="text-muted-foreground">
                  Our PCOS-specific plan focuses on managing insulin levels, reducing inflammation, and supporting
                  hormonal balance through carefully selected Indian foods and meal timing strategies.
                </p>
              </CardContent>
            </Card>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  Common PCOS Weight Loss Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
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
                  Sample 7-Day PCOS Diet Plan
                </CardTitle>
                <CardDescription>
                  Vegetarian-friendly meals with optional eggs. All meals are designed to manage insulin levels and
                  support hormone balance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dietPlan.map((day, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
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
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This is a sample plan. For a complete 30-day meal plan with recipes, portion
                    sizes, and shopping lists, book a consultation with our PCOS specialists.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Essential Lifestyle Tips for PCOS</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Ready to Start Your PCOS Weight Loss Journey?</h2>
                <p className="mb-6 opacity-90">
                  Get a personalized PCOS diet plan with detailed meal plans, recipes, and ongoing support from our
                  certified nutritionists.
                </p>
                <Button size="lg" variant="secondary">
                  <Link href="/contact">Book PCOS Consultation - ₹500</Link>
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
                    <span className="text-sm font-medium">4-8 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Diet Type</span>
                    <span className="text-sm font-medium">Vegetarian+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Success Rate</span>
                    <span className="text-sm font-medium">85%</span>
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
                    <div className="font-medium text-sm">PCOD Weight Loss</div>
                    <div className="text-xs text-muted-foreground">Similar hormonal approach</div>
                  </Link>
                  <Link href="/plans/diabetes" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Diabetes Plan</div>
                    <div className="text-xs text-muted-foreground">Insulin management focus</div>
                  </Link>
                  <Link
                    href="/plans/intermittent-fasting"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="font-medium text-sm">Intermittent Fasting</div>
                    <div className="text-xs text-muted-foreground">Hormone regulation</div>
                  </Link>
                </CardContent>
              </Card>

              {/* Affiliate Products */}
              <Card className="bg-accent/10">
                <CardHeader>
                  <CardTitle className="text-lg">Recommended Products</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg border">
                    <div className="font-medium text-sm">PCOS Supplement</div>
                    <div className="text-xs text-muted-foreground mb-2">Inositol + Vitamin D</div>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      View Product
                    </Button>
                  </div>
                  <div className="p-3 rounded-lg border">
                    <div className="font-medium text-sm">Digital Food Scale</div>
                    <div className="text-xs text-muted-foreground mb-2">Portion control essential</div>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      View Product
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
