import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dumbbell, Flame, Target, Utensils, Activity, Zap, Coffee } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Gym + Diet Combo Plan | FitPlan India",
  description:
    "An Indian diet + gym workout combo for fat loss, muscle gain, and overall fitness. Includes pre/post workout meals and sustainable training guidance.",
  keywords:
    "gym diet plan india, workout diet india, muscle gain diet indian, fat loss gym plan, indian diet with exercise",
}

export default function GymDietComboPlan() {
  const challenges = [
    "Not knowing how to balance gym workouts with diet",
    "Protein deficiency in typical Indian meals",
    "Overeating post-workout due to hunger",
    "Relying on supplements instead of whole foods",
    "Skipping meals or following crash diets",
    "Inconsistent workout routines",
  ]

  const dietPlan = [
    {
      time: "7:00 AM – Pre-Workout",
      meal: "Black coffee/green tea + 1 banana or 2 dates",
    },
    {
      time: "8:30 AM – Post-Workout Breakfast",
      meal: "3 egg whites + 1 whole egg OR paneer bhurji + 2 multigrain rotis + salad",
    },
    {
      time: "12:30 PM – Lunch",
      meal: "1.5 multigrain roti + grilled chicken/fish/paneer + dal + sautéed vegetables",
    },
    {
      time: "4:30 PM – Evening Snack",
      meal: "Sprouts salad / roasted chana + buttermilk",
    },
    {
      time: "7:30 PM – Dinner",
      meal: "Grilled paneer/tofu/chicken + quinoa or brown rice + stir-fried veggies",
    },
    {
      time: "10:00 PM – Bedtime",
      meal: "1 cup warm milk (low-fat) + flax/chia seeds",
    },
  ]

  const workoutPlan = [
    {
      day: "Day 1 – Chest & Triceps",
      routine: "Bench press, push-ups, dumbbell fly, tricep dips",
    },
    {
      day: "Day 2 – Back & Biceps",
      routine: "Pull-ups, bent-over rows, lat pulldown, bicep curls",
    },
    {
      day: "Day 3 – Legs",
      routine: "Squats, lunges, leg press, calf raises",
    },
    {
      day: "Day 4 – Shoulders & Core",
      routine: "Overhead press, lateral raises, planks, bicycle crunches",
    },
    {
      day: "Day 5 – Full Body HIIT",
      routine: "Burpees, kettlebell swings, mountain climbers, jump squats",
    },
    {
      day: "Day 6 – Active Recovery",
      routine: "Yoga, stretching, light cardio (walking/swimming)",
    },
  ]

  const lifestyleTips = [
    {
      icon: Utensils,
      title: "Protein with Every Meal",
      description: "Include paneer, dal, eggs, fish, or chicken to meet daily protein needs.",
    },
    {
      icon: Coffee,
      title: "Smart Pre-Workout Boost",
      description: "Coffee or green tea helps with focus and fat burning before gym.",
    },
    {
      icon: Flame,
      title: "Post-Workout Recovery",
      description: "Have a protein + carb combo within 30–45 mins after training.",
    },
    {
      icon: Zap,
      title: "Stay Hydrated",
      description: "Electrolytes and 3–4 liters of water daily for recovery and performance.",
    },
  ]

  const faqs = [
    {
      question: "Do I need protein powder for this plan?",
      answer:
        "Not necessarily. You can meet protein needs through paneer, eggs, chicken, fish, dals, and sprouts. Protein powder is optional for convenience.",
    },
    {
      question: "How many days a week should I work out?",
      answer: "5–6 days a week with proper rest is ideal. Consistency is key, not overtraining.",
    },
    {
      question: "Can vegetarians build muscle?",
      answer:
        "Yes. With paneer, tofu, lentils, dals, nuts, and seeds, vegetarians can gain muscle if protein intake is adequate.",
    },
    {
      question: "Should I do cardio if I want muscle gain?",
      answer:
        "Yes, but moderately. 20–30 minutes of cardio helps fat loss while strength training builds muscle.",
    },
    {
      question: "What’s the best pre-workout meal?",
      answer: "A banana with black coffee or oats with milk 30–45 mins before workout.",
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
                <Badge variant="secondary">Gym + Diet</Badge>
                <Badge variant="outline">Muscle + Fat Loss</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Gym + Diet Combo Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A powerful mix of gym training and Indian diet strategies to help you burn fat, build lean muscle, and
                achieve long-term fitness.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-4 w-4" />
                  <span>10,000+ Gym Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Fat loss + Muscle gain</span>
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
                <CardTitle>Sample Diet Plan (With Gym)</CardTitle>
                <CardDescription>
                  High-protein, balanced meals to support fat loss and muscle recovery.
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

            {/* Sample Workout Plan */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Weekly Gym Workout Routine</CardTitle>
                <CardDescription>Balanced strength training + cardio for best results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workoutPlan.map((plan, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-muted/20">
                      <div className="font-semibold">{plan.day}</div>
                      <div className="text-sm text-muted-foreground">{plan.routine}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Key Tips for Success</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Get a Personalized Gym + Diet Plan</h2>
                <p className="mb-6 opacity-90">
                  Our fitness experts design customized diet and gym workout plans to maximize your fat loss and muscle
                  gain results.
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
                    <span className="text-sm font-medium">Fat Loss + Muscle Gain</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">Medium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Workout</span>
                    <span className="text-sm font-medium">5–6 days/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Diet Type</span>
                    <span className="text-sm font-medium">High Protein Indian</span>
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
                  <Link href="/plans/keto-diet" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Keto Diet Plan</div>
                    <div className="text-xs text-muted-foreground">Low-carb fat loss diet</div>
                  </Link>
                  <Link
                    href="/plans/intermittent-fasting"
                    className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="font-medium text-sm">Intermittent Fasting</div>
                    <div className="text-xs text-muted-foreground">Meal timing-based fat loss</div>
                  </Link>
                  <Link href="/plans/obesity" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Obesity Plan</div>
                    <div className="text-xs text-muted-foreground">Beginner-friendly fat loss</div>
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
