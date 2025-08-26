import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Apple, Activity, Target, Heart, Flame, Leaf } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Metabolic Weight Loss Plan | FitPlan India",
  description:
    "Boost metabolism and manage weight naturally with a customized Indian diet plan. Designed for insulin resistance, slow metabolism, and metabolic syndrome.",
  keywords:
    "metabolic diet plan india, boost metabolism indian diet, insulin resistance diet plan, metabolic weight loss plan, slow metabolism diet",
}

export default function MetabolicPlan() {
  const challenges = [
    "Slow metabolism leading to weight gain",
    "Insulin resistance or prediabetes",
    "Unexplained fatigue and low energy",
    "Cravings for sugar and refined carbs",
    "Difficulty losing weight despite efforts",
    "High belly fat and waist circumference",
  ]

  const dietPlan = [
    {
      time: "7:30 AM – Morning",
      meal: "Warm water with apple cider vinegar (optional) + soaked almonds/walnuts",
    },
    {
      time: "9:00 AM – Breakfast",
      meal: "Vegetable moong dal chilla with chutney OR oats poha with flax seeds + green tea",
    },
    {
      time: "12:30 PM – Lunch",
      meal: "1 multigrain roti + dal + grilled fish/chicken/tofu/paneer + stir-fried vegetables",
    },
    {
      time: "4:30 PM – Evening Snack",
      meal: "Roasted chana OR sprouts salad with lemon & black salt",
    },
    {
      time: "7:30 PM – Dinner",
      meal: "Quinoa upma OR millet khichdi with curd + sautéed vegetables",
    },
    {
      time: "9:30 PM – Bedtime",
      meal: "Chamomile tea OR warm haldi (turmeric) milk without sugar",
    },
  ]

  const lifestyleTips = [
    {
      icon: Flame,
      title: "Boost Metabolism Naturally",
      description: "Include strength training, HIIT, and resistance exercises to increase muscle mass and burn fat.",
    },
    {
      icon: Activity,
      title: "Stay Consistent",
      description: "Eating at fixed times improves insulin sensitivity and metabolic rate.",
    },
    {
      icon: Heart,
      title: "Sleep & Stress Control",
      description: "Poor sleep and high stress slow metabolism — aim for 7–8 hours of quality sleep.",
    },
    {
      icon: Leaf,
      title: "Hydration & Herbal Support",
      description: "Green tea, black coffee, and adequate hydration help improve metabolic rate.",
    },
  ]

  const faqs = [
    {
      question: "What is a metabolic diet plan?",
      answer:
        "It’s a diet designed to improve metabolism, balance blood sugar, and help in sustainable weight loss by focusing on protein, fiber, and healthy fats.",
    },
    {
      question: "Which foods boost metabolism?",
      answer:
        "Lean protein, green tea, spices (like cinnamon, turmeric), omega-3 rich foods, and high-fiber vegetables help boost metabolism.",
    },
    {
      question: "Is intermittent fasting good for slow metabolism?",
      answer:
        "Yes, when done correctly. Intermittent fasting can improve insulin sensitivity, but it should be personalized.",
    },
    {
      question: "Can exercise really fix slow metabolism?",
      answer:
        "Yes. Strength training and muscle building significantly improve metabolism since muscle burns more calories than fat.",
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
                <Badge variant="secondary">Metabolic</Badge>
                <Badge variant="outline">Weight Loss</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Metabolic Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A personalized Indian diet and lifestyle plan designed to improve metabolism, reduce insulin resistance,
                and support fat loss.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Apple className="h-4 w-4" />
                  <span>3,000+ Clients Improved Metabolism</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Boost Fat Burning</span>
                </div>
              </div>
            </div>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sample Diet Plan */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Sample Diet Plan</CardTitle>
                <CardDescription>
                  Balanced meals for boosting metabolism and controlling weight
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
                <CardTitle>Lifestyle & Management Tips</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Get a Personalized Metabolic Diet Plan</h2>
                <p className="mb-6 opacity-90">
                  Our experts design customized diet & exercise routines to boost metabolism and make weight loss easier.
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
                    <span className="text-sm text-muted-foreground">Focus</span>
                    <span className="text-sm font-medium">Metabolism & Fat Loss</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Exercise</span>
                    <span className="text-sm font-medium">Strength + Cardio</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Diet Type</span>
                    <span className="text-sm font-medium">Balanced Indian Diet</span>
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
                    <div className="font-medium text-sm">Diabetes Management Plan</div>
                    <div className="text-xs text-muted-foreground">Control blood sugar & improve insulin sensitivity</div>
                  </Link>
                  <Link href="/plans/obesity" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Obesity Plan</div>
                    <div className="text-xs text-muted-foreground">For high BMI & general weight loss</div>
                  </Link>
                  <Link href="/plans/intermittent-fasting" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Intermittent Fasting</div>
                    <div className="text-xs text-muted-foreground">Boost metabolism with fasting cycles</div>
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
