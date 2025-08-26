import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Apple, Activity, Droplets, Target, Heart, Leaf } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Thyroid Weight Loss Plan | FitPlan India",
  description:
    "An Indian diet and lifestyle plan for thyroid management — hypothyroidism & hyperthyroidism. Balanced meals, lifestyle tips, and weight management strategies.",
  keywords:
    "thyroid diet plan india, hypothyroidism diet india, hyperthyroidism diet india, thyroid weight loss, thyroid meal plan",
}

export default function ThyroidPlan() {
  const challenges = [
    "Unexplained weight gain (Hypothyroidism)",
    "Unintended weight loss (Hyperthyroidism)",
    "Fatigue and low energy levels",
    "Mood swings and stress-related eating",
    "Digestive issues like bloating or constipation",
    "Difficulty sticking to regular exercise",
  ]

  const dietPlan = [
    {
      time: "7:30 AM – Morning",
      meal: "Warm water with lemon + soaked almonds + thyroid medication (empty stomach, 30 mins before food)",
    },
    {
      time: "9:00 AM – Breakfast",
      meal: "Vegetable oats upma OR moong dal chilla with mint chutney + green tea",
    },
    {
      time: "12:30 PM – Lunch",
      meal: "1 multigrain roti + dal + grilled chicken/fish/tofu/paneer + sautéed vegetables",
    },
    {
      time: "4:30 PM – Evening Snack",
      meal: "Fruit bowl (papaya, apple, or guava) OR sprouts salad with lemon",
    },
    {
      time: "7:30 PM – Dinner",
      meal: "Vegetable khichdi with curd OR quinoa + stir-fried vegetables",
    },
    {
      time: "9:30 PM – Bedtime",
      meal: "1 cup warm haldi milk OR herbal tea",
    },
  ]

  const lifestyleTips = [
    {
      icon: Heart,
      title: "Take Medication Correctly",
      description: "Always take thyroid medication on an empty stomach, 30–45 minutes before food.",
    },
    {
      icon: Activity,
      title: "Stay Active Daily",
      description: "Light to moderate workouts like yoga, brisk walking, or strength training help manage symptoms.",
    },
    {
      icon: Droplets,
      title: "Avoid Goitrogens in Excess",
      description: "Limit raw cruciferous vegetables (cabbage, cauliflower, broccoli) if you have hypothyroidism.",
    },
    {
      icon: Leaf,
      title: "Stress Management",
      description: "Meditation, yoga, and good sleep improve thyroid hormone balance and weight loss.",
    },
  ]

  const faqs = [
    {
      question: "What foods should I avoid in hypothyroidism?",
      answer:
        "Avoid excess soy, highly processed foods, refined sugar, deep-fried items, and too much cabbage/broccoli in raw form.",
    },
    {
      question: "Is weight loss possible with thyroid problems?",
      answer:
        "Yes. With proper medication, a balanced Indian diet, and regular activity, weight management is possible even with thyroid issues.",
    },
    {
      question: "Should I take supplements for thyroid health?",
      answer:
        "Only if prescribed by your doctor. Common helpful nutrients are selenium, zinc, and vitamin D — but food sources are best.",
    },
    {
      question: "Is intermittent fasting safe for thyroid patients?",
      answer:
        "It depends on the individual. Short fasting windows may work for some, but always consult your doctor before starting.",
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
                <Badge variant="secondary">Thyroid</Badge>
                <Badge variant="outline">Hypo + Hyperthyroidism</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Thyroid Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A balanced Indian diet and lifestyle approach for thyroid management — addressing both hypothyroidism
                and hyperthyroidism to support healthy weight management.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Apple className="h-4 w-4" />
                  <span>5,000+ Thyroid Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Weight Balance & Energy</span>
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
                  Balanced meals supporting thyroid health and weight management
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
                <h2 className="text-2xl font-bold mb-4">Get a Personalized Thyroid Diet Plan</h2>
                <p className="mb-6 opacity-90">
                  Our experts create customized thyroid-friendly diet & lifestyle plans for better weight control,
                  energy, and health.
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
                    <span className="text-sm font-medium">Thyroid & Weight Balance</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">Easy–Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Exercise</span>
                    <span className="text-sm font-medium">Light–Moderate</span>
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
                  <Link href="/plans/hypothyroidism" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Hypothyroidism Plan</div>
                    <div className="text-xs text-muted-foreground">Specialized diet for underactive thyroid</div>
                  </Link>
                  <Link href="/plans/hyperthyroidism" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Hyperthyroidism Plan</div>
                    <div className="text-xs text-muted-foreground">Nutrition for overactive thyroid</div>
                  </Link>
                  <Link href="/plans/hormonal-imbalance" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Hormonal Balance Plan</div>
                    <div className="text-xs text-muted-foreground">PCOD, Thyroid & Hormone health</div>
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
