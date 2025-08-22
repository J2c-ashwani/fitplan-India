import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Users, Target, AlertTriangle, Utensils, Activity, Moon, Droplets } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Diabetes Weight Loss Plan - Blood Sugar Friendly Indian Diet | FitPlan India",
  description:
    "Specialized diabetes weight loss plan with low-glycemic Indian foods, blood sugar management, and sustainable weight loss. Expert-designed meal plans.",
  keywords:
    "diabetes weight loss, diabetic diet plan, blood sugar diet, diabetes Indian food, low glycemic diet, diabetic meal plan",
}

export default function DiabetesPlanPage() {
  const challenges = [
    "Blood sugar spikes from carbohydrate-rich Indian foods",
    "Medication affecting weight loss progress",
    "Risk of hypoglycemia during exercise",
    "Portion control with traditional Indian meals",
    "Managing hunger between meals",
    "Social eating and festival food challenges",
  ]

  const dietPlan = [
    {
      day: "Day 1",
      breakfast: "Vegetable oats + 1 boiled egg (optional) + Green tea",
      midMorning: "1 small apple + 6 almonds",
      lunch: "1 roti + Dal + Lauki curry + Cucumber salad",
      evening: "Buttermilk + 2 whole grain crackers",
      dinner: "Quinoa pulao + Palak paneer + Mint chutney",
    },
    {
      day: "Day 2",
      breakfast: "Besan chilla with vegetables + Coconut chutney",
      midMorning: "1 orange + 5 walnuts",
      lunch: "Brown rice (1/2 cup) + Rajma + Bhindi + Onion salad",
      evening: "Green tea + Roasted chana (2 tbsp)",
      dinner: "2 roti + Moong dal + Karela curry + Raita",
    },
    {
      day: "Day 3",
      breakfast: "Vegetable upma + Sambhar (small bowl)",
      midMorning: "1 guava + 8 cashews",
      lunch: "Bajra roti + Chicken curry (optional) + Mixed vegetables",
      evening: "Herbal tea + 1 boiled egg (optional)",
      dinner: "Cauliflower rice + Dal + Methi sabzi + Pickle",
    },
  ]

  const lifestyleTips = [
    {
      icon: Target,
      title: "Blood Sugar Monitoring",
      description: "Check blood glucose before and after meals. Maintain a food diary to track patterns.",
    },
    {
      icon: Activity,
      title: "Post-Meal Walks",
      description: "10-15 minute walk after meals helps control blood sugar spikes naturally.",
    },
    {
      icon: Droplets,
      title: "Stay Hydrated",
      description: "Drink 8-10 glasses of water daily. Proper hydration helps kidney function.",
    },
    {
      icon: Moon,
      title: "Consistent Sleep",
      description: "7-8 hours of quality sleep. Poor sleep affects blood sugar control.",
    },
  ]

  const faqs = [
    {
      question: "Can diabetics lose weight safely?",
      answer:
        "Yes, weight loss is actually beneficial for diabetes management. However, it should be done gradually (1-2 kg per month) under medical supervision to avoid blood sugar fluctuations and medication adjustments.",
    },
    {
      question: "What Indian foods should diabetics avoid?",
      answer:
        "Avoid white rice, refined wheat products, sugary sweets, fried foods, fruit juices, and processed foods. These cause rapid blood sugar spikes and make diabetes management difficult.",
    },
    {
      question: "Can I eat fruits with diabetes?",
      answer:
        "Yes, but choose low-glycemic fruits like apples, oranges, guava, and berries. Eat them in moderation and preferably with nuts or as part of a meal to slow sugar absorption.",
    },
    {
      question: "Is intermittent fasting safe for diabetics?",
      answer:
        "Intermittent fasting can be beneficial for some diabetics, but it requires careful medical supervision and medication adjustments. Never attempt without consulting your doctor first.",
    },
    {
      question: "How much carbs should diabetics eat daily?",
      answer:
        "Generally 45-60g of carbs per meal, but this varies based on individual needs, medication, and activity level. Focus on complex carbs from whole grains and vegetables.",
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
            <Link href="/plans" className="text-sm font-medium hover:text-primary transition-colors">
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
              <h1 className="text-4xl font-bold mb-4">Diabetes Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A medically-supervised weight loss plan designed for diabetics. Focus on blood sugar control, gradual
                weight loss, and long-term diabetes management through Indian cuisine.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>1,800+ Success Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Average HbA1c reduction: 1.2%</span>
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
                  This plan is designed for educational purposes. Always consult your doctor before starting any weight
                  loss program, especially if you're on diabetes medication. Blood sugar monitoring and medication
                  adjustments may be necessary.
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Understanding Diabetes and Weight Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Type 2 diabetes affects over 77 million Indians, making it crucial to manage both blood sugar levels
                  and weight. Excess weight makes diabetes harder to control, while proper weight management can
                  significantly improve blood sugar levels.
                </p>
                <p className="text-muted-foreground">
                  Our diabetes-specific plan focuses on low-glycemic Indian foods, portion control, and meal timing to
                  help you lose weight while maintaining stable blood sugar levels throughout the day.
                </p>
              </CardContent>
            </Card>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Common Diabetes Weight Loss Challenges
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
                  Sample 7-Day Diabetic Diet Plan
                </CardTitle>
                <CardDescription>
                  Low-glycemic meals designed to maintain stable blood sugar. All portions are controlled and
                  carb-counted.
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
                    <strong>Medical Supervision Required:</strong> This plan requires regular blood sugar monitoring and
                    possible medication adjustments. Consult your doctor before starting.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Essential Lifestyle Tips for Diabetic Weight Loss</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Ready to Manage Your Diabetes Through Weight Loss?</h2>
                <p className="mb-6 opacity-90">
                  Get a medically-supervised diabetes weight loss plan with blood sugar tracking, meal plans, and
                  ongoing support.
                </p>
                <Button size="lg" variant="secondary">
                  <Link href="/contact">Book Diabetes Consultation - ₹500</Link>
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
                  <Link href="/plans/obesity" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Obesity Management</div>
                    <div className="text-xs text-muted-foreground">Comprehensive weight loss</div>
                  </Link>
                  <Link
                    href="/plans/senior-citizens"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="font-medium text-sm">Senior Citizens Plan</div>
                    <div className="text-xs text-muted-foreground">Age-appropriate approach</div>
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
