import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Award, Heart, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const categories = [
    { title: "Hypothyroidism Weight Loss", href: "/plans/hypothyroidism", icon: Heart },
    { title: "PCOS Weight Loss Plan", href: "/plans/pcos", icon: Heart },
    { title: "Diabetes Weight Loss", href: "/plans/diabetes", icon: Heart },
    { title: "Post-Pregnancy Plans", href: "/plans/post-pregnancy", icon: Heart },
    { title: "Vegetarian Plans", href: "/plans/vegetarian", icon: Heart },
    { title: "Keto Diet for Indians", href: "/plans/keto-diet", icon: Zap },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "PCOS",
      result: "Lost 15kg in 6 months",
      text: "The personalized plan helped me manage my PCOS symptoms while losing weight naturally.",
    },
    {
      name: "Rajesh Kumar",
      condition: "Diabetes",
      result: "Lost 12kg, improved HbA1c",
      text: "My blood sugar levels are now under control, and I feel more energetic than ever.",
    },
    {
      name: "Anita Patel",
      condition: "Hypothyroidism",
      result: "Lost 10kg in 4 months",
      text: "Finally found a plan that works with my thyroid condition. Highly recommended!",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Trusted by People
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Personalized Weight Loss Plans for Every Condition
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get customized diet plans and expert guidance for PCOS, thyroid, diabetes, and more. Start your
            transformation journey with India's most trusted fitness platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact">Book Consultation for ₹500</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="/tools">Try Free BMI Calculator</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Personalised Care</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Weight Loss Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our expertly crafted plans designed for specific health conditions and lifestyle needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Specialized diet and lifestyle plans tailored for your specific health needs.
                    </CardDescription>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href={category.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose FitPlan India?</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We understand the unique challenges faced by Indians in their weight loss journey. Our plans are designed by
            certified professionals who specialize in Indian cuisine and lifestyle patterns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Condition-Specific</h3>
              <p className="text-muted-foreground">
                Plans tailored for PCOS, thyroid, diabetes, and other health conditions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground">Certified professionals and trainers with years of experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">10,000+ successful transformations across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real people, real results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.condition} • {testimonial.result}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Indians who have successfully achieved their weight loss goals with our personalized
            plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link href="/contact">Book Your Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/tools">Try Free Calculators</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
