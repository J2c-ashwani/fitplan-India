import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Apple, Activity, Heart, Leaf, Moon, Sparkles } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Hormonal Imbalance Weight Loss Plan | FitPlan India",
  description:
    "Balance hormones and lose weight naturally with a customized Indian diet plan. Designed for PCOD, PCOS, thyroid, stress-related imbalances, and irregular cycles.",
  keywords:
    "hormonal imbalance diet plan india, PCOD weight loss diet, PCOS hormonal balance diet, thyroid diet plan india, stress hormones diet, female hormone imbalance diet",
}

export default function HormonalImbalancePlan() {
  const challenges = [
    "Unexplained weight gain despite diet & exercise",
    "Irregular or painful periods (PCOD/PCOS)",
    "Thyroid imbalance (hypo/hyperthyroidism)",
    "Mood swings, stress & anxiety",
    "Belly fat and bloating",
    "Cravings for sugar and junk food",
  ]

  const dietPlan = [
    {
      time: "7:00 AM – Morning",
      meal: "Warm water with lemon + soaked flax/chia seeds (rich in omega-3s)",
    },
    {
      time: "9:00 AM – Breakfast",
      meal: "Vegetable oats upma OR moong dal cheela with mint chutney + green tea",
    },
    {
      time: "12:30 PM – Lunch",
      meal: "1-2 multigrain rotis + dal + lean protein (chicken/fish/tofu/paneer) + green salad",
    },
    {
      time: "4:30 PM – Evening Snack",
      meal: "Sprouts chaat with lemon OR handful of roasted makhana",
    },
    {
      time: "7:30 PM – Dinner",
      meal: "Quinoa pulao with mixed vegetables OR millet khichdi + curd",
    },
    {
      time: "9:00 PM – Bedtime",
      meal: "Golden turmeric milk OR chamomile tea for stress relief",
    },
  ]

  const lifestyleTips = [
    {
      icon: Leaf,
      title: "Eat Hormone-Friendly Foods",
      description: "Include flaxseeds, pumpkin seeds, leafy greens, omega-3-rich foods, and avoid processed sugar.",
    },
    {
      icon: Activity,
      title: "Exercise Smart",
      description: "Balance between yoga, strength training, and walking to regulate insulin and cortisol levels.",
    },
    {
      icon: Heart,
      title: "Manage Stress",
      description: "High stress disrupts cortisol and estrogen balance. Practice meditation, journaling, or deep breathing.",
    },
    {
      icon: Moon,
      title: "Prioritize Sleep",
      description: "Poor sleep impacts insulin, cortisol, and reproductive hormones. Aim for 7–8 hours of deep rest.",
    },
    {
      icon: Sparkles,
      title: "Cycle Syncing",
      description: "Women can align food & workouts with menstrual phases for better results and reduced PMS symptoms.",
    },
  ]

  const faqs = [
    {
      question: "What is a hormonal imbalance diet plan?",
      answer:
        "It’s a plan focused on foods that regulate estrogen, progesterone, insulin, and thyroid hormones to restore balance naturally.",
    },
    {
      question: "Which foods are best for hormonal balance?",
      answer:
        "Flaxseeds, chia seeds, pumpkin seeds, lentils, omega-3 fatty acids, cruciferous vegetables (like broccoli), and anti-inflammatory spices like turmeric.",
    },
    {
      question: "Can I lose weight with hormonal imbalance?",
      answer:
        "Yes, with a tailored diet, regular exercise, stress management, and proper sleep, sustainable weight loss is possible.",
    },
    {
      question: "Is intermittent fasting safe for hormonal imbalance?",
      answer:
        "It depends. Gentle fasting (like 12–14 hours) may help insulin sensitivity, but long fasting hours can disrupt female hormones.",
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
                <Badge variant="secondary">Hormonal Imbalance</Badge>
                <Badge variant="outline">Weight Loss</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Hormonal Imbalance Weight Loss Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A specialized Indian diet & lifestyle plan designed to restore hormone balance, reduce belly fat, and improve overall well-being.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Apple className="h-4 w-4" />
                  <span>5,000+ Women Benefited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>Balance Hormones Naturally</span>
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
                  Balanced meals designed to regulate hormones & reduce cravings
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
                <h2 className="text-2xl font-bold mb-4">Get a Personalized Hormonal Balance Plan</h2>
                <p className="mb-6 opacity-90">
                  Our experts design customized diet & lifestyle programs to balance hormones and support sustainable weight loss.
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
                    <span className="text-sm font-medium">Hormonal Balance & Fat Loss</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">Moderate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Exercise</span>
                    <span className="text-sm font-medium">Yoga + Strength Training</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Diet Type</span>
                    <span className="text-sm font-medium">Balanced Hormone-Friendly Diet</span>
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
                  <Link href="/plans/pcos" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">PCOS Diet Plan</div>
                    <div className="text-xs text-muted-foreground">Balance hormones & improve fertility</div>
                  </Link>
                  <Link href="/plans/thyroid" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Thyroid Management Plan</div>
                    <div className="text-xs text-muted-foreground">Support thyroid hormones & metabolism</div>
                  </Link>
                  <Link href="/plans/metabolic" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Metabolic Plan</div>
                    <div className="text-xs text-muted-foreground">Boost metabolism & fat burning</div>
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
