import { Users, Heart, Award, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About <span className="text-emerald-600">FitPlan India</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empowering Indians to achieve optimal health through personalized nutrition 
            and expert guidance tailored to Indian lifestyles and dietary preferences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              FitPlan India was founded with a simple mission: to make professional nutrition 
              guidance accessible to every Indian, regardless of their location or health condition.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand the unique challenges faced by Indians when it comes to health and nutrition. 
              From PCOS and diabetes to thyroid disorders and obesity, our team of certified nutritionists 
              has helped thousands of Indians achieve their health goals through customized meal plans 
              that respect cultural preferences and dietary traditions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What sets us apart is our deep understanding of Indian cuisine, regional dietary habits, 
              and the specific health challenges prevalent in India. Every plan we create is not just 
              nutritionally sound but also practical and delicious.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Personalized Care</h3>
                  <p className="text-gray-600 text-sm">
                    Every plan is customized to your unique health needs and preferences
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
                  <p className="text-gray-600 text-sm">
                    Certified nutritionists with years of experience in Indian nutrition
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Community Support</h3>
                  <p className="text-gray-600 text-sm">
                    Join thousands of Indians on their journey to better health
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Results-Driven</h3>
                  <p className="text-gray-600 text-sm">
                    Proven strategies that deliver measurable health improvements
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Expertise</h2>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Our team specializes in managing a wide range of health conditions common in India:
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span className="text-gray-600">PCOS/PCOD Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span className="text-gray-600">Diabetes (Type 1 & Type 2)</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span className="text-gray-600">Thyroid Disorders</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span className="text-gray-600">Weight Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span className="text-gray-600">Post-Pregnancy Nutrition</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span className="text-gray-600">Hormonal Imbalances</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span className="text-gray-600">Metabolic Syndrome</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span className="text-gray-600">Sports Nutrition</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose FitPlan India?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-emerald-600">Indian-Centric Approach</h3>
              <p className="text-gray-600">
                All our meal plans are designed around traditional Indian foods, making them easy 
                to follow and sustainable for long-term success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-emerald-600">Certified Nutritionists</h3>
              <p className="text-gray-600">
                Our team consists of qualified nutritionists with extensive experience in managing 
                Indian health conditions and dietary requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-emerald-600">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide continuous guidance and support throughout your health journey, ensuring 
                you never feel alone in your transformation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-emerald-600">Affordable Pricing</h3>
              <p className="text-gray-600">
                Quality nutrition guidance shouldn't be expensive. Our plans are priced to be accessible 
                to every Indian family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Health Journey?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of Indians who have transformed their lives with FitPlan India.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  )
}
