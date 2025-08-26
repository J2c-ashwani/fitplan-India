import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Users, Target, AlertTriangle, Utensils, Activity, Moon, Droplets } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Obesity & General Weight Loss Plan - Indian Diet & Lifestyle | FitPlan India",
  description:
    "Obesity and general weight loss plan with sustainable Indian diet, portion control, and lifestyle modifications. Effective for long-term fat loss and health improvement.",
  keywords:
    "obesity weight loss, indian diet for weight loss, general weight loss plan, fat loss diet, obesity management india",
}

export default function ObesityPlanPage() {
  const challenges = [
    "Slow metabolism making fat loss difficult",
    "Emotional eating and food cravings",
    "Sedentary lifestyle and lack of physical activity",
    "Joint pain making exercise challenging",
    "Dependence on packaged and fast foods",
    "Difficulty staying consistent with healthy habits",
  ]

  const dietPlan = [
    {
      day: "Day 1",
      breakfast: "Vegetable poha + Green tea",
      midMorning: "1 apple + 5 soaked almonds",
      lunch: "2 chapatis (multigrain) + Lauki chana dal + Cucumber salad",
      evening: "Buttermilk + 2 roasted khakra",
      dinner: "Brown rice khichdi + Mix veg sabzi + Raita",
    },
    {
      day: "Day 2",
      breakfast: "Oats porridge with flax seeds + Herbal tea",
      midMorning: "1 guava + 4 walnuts",
      lunch: "1 roti + Palak dal + Bhindi sabzi + Salad",
      evening: "Green tea + Roasted chana",
      dinner: "2 bajra rotis + Mix veg curry + Moong dal soup",
    },
    {
      day: "Day 3",
      breakfast: "Moong dal cheela + Mint chutney",
      midMorning: "1 orange + 6 cashews",
      lunch: "Millet roti + Chicken curry (optional) + Beans sabzi",
      evening: "Herbal tea + 1 boiled egg (optional)",
      dinner: "Vegetable oats upma + Tomato soup",
    },
  ]

  const lifestyleTips = [
    {
      icon: Activity,
      title: "Increase Daily Movement",
      description: "30-40 minutes of brisk walking, swimming, or cycling daily helps boost metabolism.",
    },
    {
      icon: Target,
      title: "Portion Control",
      description: "Use smaller plates and mindful eating to prevent overeating.",
    },
    {
      icon: Moon,
      title: "Sleep Management",
      description: "7-8 hours of quality sleep regulates hunger hormones and supports fat loss.",
    },
    {
      icon: Droplets,
      title: "Hydration",
      description: "Drink 10-12 glasses of water daily to curb cravings and improve metabolism.",
    },
  ]

  const faqs = [
    {
      question: "Can obesity be reversed with diet and exercise?",
      answer:
        "Yes, sustainable changes in eating habits, increased physical activity, and medical guidance can help reduce obesity and its health risks.",
    },
    {
      question: "Which foods should be avoided for obesity?",
      answer:
        "Avoid fried snacks, sugary drinks, refined carbs, processed foods, and late-night binge eating.",
    },
    {
      question: "Is intermittent fasting good for obesity?",
      answer:
        "Intermittent fasting can help in weight loss, but it should be started gradually. A balanced calorie-controlled diet works equally well.",
    },
    {
      question: "How fast can I lose weight safely?",
      answer:
        "Safe weight loss is about 0.5 to 1 kg per week. Crash diets may cause nutrient deficiencies and rebound weight gain.",
    },
    {
      question: "What type of exercise is best for obese individuals?",
      answer:
        "Low-impact workouts like brisk walking, yoga, swimming, and cycling are recommended to avoid joint strain.",
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
              <h1 className="text-4xl font-bold mb-4">Obesity & General Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A structured plan to manage obesity and general weight loss with balanced Indian meals,
                lifestyle improvements, and long-term health benefits.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>5,000+ Success Stories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Average weight loss: 5-10 kg in 3 months</span>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <Card className="mb-8 border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertTriangle className="h-5 w-5" />
                  Important Health Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-sm">
                  This plan is for educational purposes only. Consult a healthcare professional before beginning,
                  especially if you have diabetes, hypertension, or joint problems.
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Understanding Obesity & General Weight Loss</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Obesity is one of the leading health concerns in India, increasing the risk of diabetes, hypertension,
                  and heart disease. General weight loss is not just about aesthetics but also about improving overall
                  health.
                </p>
                <p className="text-muted-foreground">
                  Our plan combines portion-controlled Indian meals, consistent activity, and behavior modification
                  techniques to help you lose weight safely and sustainably.
                </p>
              </CardContent>
            </Card>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Common Challenges in Obesity
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
                  Sample 7-Day Weight Loss Diet Plan
                </CardTitle>
                <CardDescription>
                  Balanced meals designed to promote fat loss while providing complete nutrition.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dietPlan.map((day, index) => (
                    <Card key={index} className="border-l-4 border-l-green-500">
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
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-700">
                    <strong>Note:</strong> Sustainable weight loss comes from consistent eating habits,
                    portion control, and lifestyle changes — not crash diets.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Lifestyle Tips for Obesity & Weight Loss</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Weight Loss Journey?</h2>
                <p className="mb-6 opacity-90">
                  Get a personalized obesity management and weight loss plan with expert guidance and constant support.
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
                    <span className="text-sm font-medium">Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Medical Supervision</span>
                    <span className="text-sm font-medium">Advised</span>
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
                  <Link href="/plans/diabetes" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Diabetes Plan</div>
                    <div className="text-xs text-muted-foreground">Blood sugar management</div>
                  </Link>
                  <Link href="/plans/hypothyroidism" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Hypothyroidism Plan</div>
                    <div className="text-xs text-muted-foreground">Thyroid-specific nutrition</div>
                  </Link>
                  <Link href="/plans/pcod" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">PCOD Plan</div>
                    <div className="text-xs text-muted-foreground">Hormone balancing diet</div>
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
