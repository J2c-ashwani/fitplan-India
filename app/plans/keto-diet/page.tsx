import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Flame, Users, Target, AlertTriangle, Utensils, Activity, Beef, EggFried } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Indian Keto Diet Plan - Low Carb Weight Loss | FitPlan India",
  description:
    "Indian keto diet plan for fast fat loss with low-carb meals, vegetarian keto options, and easy Indian recipes for sustainable results.",
  keywords:
    "keto diet india, keto vegetarian indian, keto recipes indian, indian keto plan, low carb diet india",
}

export default function KetoPlanPage() {
  const challenges = [
    "Adjusting to very low carb intake initially",
    "Keto flu symptoms like fatigue & headache",
    "Finding vegetarian keto protein sources",
    "Overeating fats instead of balancing macros",
    "Difficulty maintaining Indian food cravings (roti, rice, sweets)",
    "Digestive issues if fiber is ignored",
  ]

  const dietPlan = [
    {
      day: "Day 1",
      breakfast: "Paneer bhurji cooked in ghee + avocado slices",
      midMorning: "Handful of walnuts & almonds",
      lunch: "Grilled chicken (or paneer for vegetarians) + sautéed spinach in butter",
      evening: "Cheese cubes + black coffee (unsweetened)",
      dinner: "Fish curry (or soya chunks curry) + sautéed broccoli",
    },
    {
      day: "Day 2",
      breakfast: "Omelette with spinach & cheese (tofu scramble for vegans)",
      midMorning: "Coconut water (unsweetened) + 5 soaked almonds",
      lunch: "Mutton curry (or paneer tikka) + cucumber salad with olive oil",
      evening: "Boiled eggs (or keto almond flour biscuits)",
      dinner: "Chicken tikka (or tofu) + cauliflower rice pulao",
    },
    {
      day: "Day 3",
      breakfast: "Bullet coffee (black coffee with ghee/coconut oil) + boiled eggs",
      midMorning: "Cucumber & cheese sticks",
      lunch: "Butter chicken (or palak paneer) + sautéed beans",
      evening: "Avocado smoothie (with almond milk, no sugar)",
      dinner: "Grilled prawns (or soya kebabs) + zucchini stir fry",
    },
  ]

  const lifestyleTips = [
    {
      icon: Beef,
      title: "Protein Control",
      description:
        "Prioritize moderate protein intake from eggs, paneer, chicken, fish, tofu, and nuts.",
    },
    {
      icon: EggFried,
      title: "Healthy Fats",
      description:
        "Use ghee, coconut oil, olive oil, and avocado. Avoid trans fats and deep-fried junk.",
    },
    {
      icon: Activity,
      title: "Exercise Smart",
      description:
        "Strength training works best with keto, but avoid extreme endurance workouts in the first 2 weeks.",
    },
    {
      icon: Flame,
      title: "Hydration & Electrolytes",
      description:
        "Drink enough water, add pink salt to food, and include magnesium/potassium-rich foods to avoid keto flu.",
    },
  ]

  const faqs = [
    {
      question: "Is the keto diet safe for Indians?",
      answer:
        "Yes, but it requires careful planning. Focus on whole foods, avoid processed keto products, and consult a doctor if you have medical conditions.",
    },
    {
      question: "Can vegetarians follow keto?",
      answer:
        "Yes. Paneer, tofu, mushrooms, avocado, nuts, seeds, and low-carb vegetables make vegetarian keto possible.",
    },
    {
      question: "Can I eat roti and rice on keto?",
      answer:
        "No, regular wheat roti and rice are high in carbs. Replace them with almond flour rotis and cauliflower rice.",
    },
    {
      question: "How much weight can I lose on keto?",
      answer:
        "Many people lose 3–5 kg in the first month, mainly due to water loss, followed by steady fat loss.",
    },
    {
      question: "Do I need supplements on keto?",
      answer:
        "Electrolytes (sodium, potassium, magnesium) are recommended to prevent keto flu. Some also take MCT oil.",
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
                <Badge variant="destructive">Keto</Badge>
                <Badge variant="outline">Low Carb</Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">Indian Keto Diet Plan</h1>
              <p className="text-xl text-muted-foreground mb-6">
                A low-carb, high-fat Indian keto plan designed for rapid fat loss while keeping Indian flavors alive.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>3,200+ Clients Benefited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>Weight loss: 4–8 kg in 2 months</span>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <Card className="mb-8 border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-800">
                  <AlertTriangle className="h-5 w-5" />
                  Important Keto Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm">
                  The keto diet should not be followed long-term without guidance. People with diabetes, liver or kidney conditions must consult a doctor first.
                </p>
              </CardContent>
            </Card>

            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Why Keto Diet Works?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The keto diet works by drastically reducing carbs and increasing fat intake, pushing your body into ketosis where it burns fat for energy instead of glucose.
                </p>
                <p className="text-muted-foreground">
                  For Indians, this means replacing rice, roti, and sweets with low-carb alternatives while enjoying paneer, ghee, eggs, fish, and green veggies.
                </p>
              </CardContent>
            </Card>

            {/* Common Challenges */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Common Challenges
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
                  Sample 7-Day Indian Keto Diet Plan
                </CardTitle>
                <CardDescription>
                  A mix of low-carb Indian meals suitable for vegetarians and non-vegetarians.
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
                        <div><strong>Breakfast:</strong> {day.breakfast}</div>
                        <div><strong>Mid-Morning:</strong> {day.midMorning}</div>
                        <div><strong>Lunch:</strong> {day.lunch}</div>
                        <div><strong>Evening:</strong> {day.evening}</div>
                        <div><strong>Dinner:</strong> {day.dinner}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-700">
                    <strong>Note:</strong> Vegetarians can replace chicken/fish with paneer, tofu, or soya. Vegans can use tofu, seitan, and almond/soy milk.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Lifestyle Tips */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Essential Keto Lifestyle Tips</CardTitle>
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
                <h2 className="text-2xl font-bold mb-4">Want a Customized Keto Plan?</h2>
                <p className="mb-6 opacity-90">
                  Get a personalized Indian keto plan designed by our nutrition experts for safe and sustainable fat loss.
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
                    <span className="text-sm font-medium">1–3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <span className="text-sm font-medium">Moderate–Hard</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Vegetarian-Friendly</span>
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
                  <Link href="/plans/vegetarian" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Vegetarian Plan</div>
                    <div className="text-xs text-muted-foreground">Plant-based keto alternatives</div>
                  </Link>
                  <Link href="/plans/pcod" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">PCOD Plan</div>
                    <div className="text-xs text-muted-foreground">Hormonal balance diet</div>
                  </Link>
                  <Link href="/plans/obesity" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="font-medium text-sm">Obesity Plan</div>
                    <div className="text-xs text-muted-foreground">General weight loss diet</div>
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
