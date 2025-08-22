"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SeniorCitizensWeightLossBlog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const categories = ["All", "Diet Plans", "Exercise", "Health Tips", "Success Stories", "Lifestyle"]

  const blogPosts = [
    {
      id: 1,
      title: "Safe Weight Management for Senior Citizens (60+)",
      excerpt: "Gentle and effective weight management strategies for seniors focusing on health and mobility.",
      category: "Diet Plans",
      readTime: "10 min read",
      author: "FitPlan India Senior Health Team",
      date: "2024-01-15",
      likes: 312,
      content: `
        <h3>Weight Management After 60</h3>
        <p>As we age, our metabolism slows down and muscle mass decreases. Weight management for seniors requires a gentle, health-focused approach.</p>
        
        <h4>Key Principles for Senior Weight Management</h4>
        <ul>
          <li>Focus on maintaining muscle mass</li>
          <li>Prioritize nutrient-dense foods</li>
          <li>Stay adequately hydrated</li>
          <li>Include gentle, regular physical activity</li>
          <li>Manage chronic conditions effectively</li>
        </ul>

        <h4>Sample Daily Meal Plan for Seniors</h4>
        <p><strong>Early Morning (6:00 AM):</strong></p>
        <ul>
          <li>1 glass warm water with lemon</li>
          <li>Soaked almonds (5-6 pieces)</li>
        </ul>

        <p><strong>Breakfast (8:00 AM):</strong></p>
        <ul>
          <li>1 bowl oats porridge with milk</li>
          <li>1 banana or seasonal fruit</li>
          <li>1 tsp honey</li>
        </ul>

        <p><strong>Mid-Morning (10:30 AM):</strong></p>
        <ul>
          <li>1 glass buttermilk</li>
          <li>2-3 dates</li>
        </ul>

        <p><strong>Lunch (12:30 PM):</strong></p>
        <ul>
          <li>1 cup brown rice or 1 roti</li>
          <li>1 cup dal (well-cooked)</li>
          <li>Soft-cooked vegetables</li>
          <li>1 cup curd</li>
          <li>Green salad (finely chopped)</li>
        </ul>

        <p><strong>Evening Snack (4:00 PM):</strong></p>
        <ul>
          <li>Herbal tea with 2 digestive biscuits</li>
          <li>Handful of roasted nuts</li>
        </ul>

        <p><strong>Dinner (7:00 PM):</strong></p>
        <ul>
          <li>1 bowl vegetable soup</li>
          <li>1 roti or 1/2 cup rice</li>
          <li>Steamed fish/chicken/paneer</li>
          <li>Cooked vegetables</li>
        </ul>

        <h4>Important Nutritional Considerations</h4>
        <ul>
          <li>Increase protein intake to prevent muscle loss</li>
          <li>Ensure adequate calcium and vitamin D</li>
          <li>Include omega-3 rich foods</li>
          <li>Limit sodium to manage blood pressure</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Gentle Exercise Routines for Seniors",
      excerpt: "Low-impact exercises that improve strength, balance, and flexibility for older adults.",
      category: "Exercise",
      readTime: "8 min read",
      author: "FitPlan India Physiotherapy Team",
      date: "2024-01-12",
      likes: 267,
      content: `
        <h3>Safe Exercise for Senior Citizens</h3>
        <p>Regular physical activity is crucial for seniors to maintain independence, prevent falls, and manage chronic conditions.</p>
        
        <h4>Chair Exercises (For Limited Mobility)</h4>
        <p><strong>Upper Body Strengthening:</strong></p>
        <ul>
          <li>Arm circles: 10 forward, 10 backward</li>
          <li>Shoulder blade squeezes: 10-15 reps</li>
          <li>Seated marching: 20 steps</li>
          <li>Ankle rotations: 10 each direction</li>
        </ul>

        <p><strong>Standing Exercises (With Support):</strong></p>
        <ul>
          <li>Wall push-ups: 8-12 reps</li>
          <li>Calf raises: 10-15 reps</li>
          <li>Side leg lifts: 8-10 per leg</li>
          <li>Standing marching: 20 steps</li>
        </ul>

        <h4>Walking Program</h4>
        <ul>
          <li><strong>Week 1-2:</strong> 10 minutes daily</li>
          <li><strong>Week 3-4:</strong> 15 minutes daily</li>
          <li><strong>Week 5-6:</strong> 20 minutes daily</li>
          <li><strong>Week 7+:</strong> 30 minutes daily</li>
        </ul>

        <h4>Balance and Flexibility</h4>
        <ul>
          <li>Tai Chi movements</li>
          <li>Gentle yoga poses</li>
          <li>Standing on one foot (with support)</li>
          <li>Heel-to-toe walking</li>
        </ul>

        <h4>Safety Tips</h4>
        <ul>
          <li>Always warm up before exercising</li>
          <li>Use proper footwear</li>
          <li>Exercise with a partner when possible</li>
          <li>Stop if you feel dizzy or short of breath</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: "Managing Chronic Conditions While Losing Weight",
      excerpt: "How to safely lose weight when dealing with diabetes, hypertension, and other age-related conditions.",
      category: "Health Tips",
      readTime: "9 min read",
      author: "FitPlan India Medical Team",
      date: "2024-01-10",
      likes: 198,
      content: `
        <h3>Weight Loss with Chronic Conditions</h3>
        <p>Many seniors have chronic conditions that require special consideration during weight loss efforts.</p>
        
        <h4>Diabetes Management</h4>
        <ul>
          <li>Monitor blood sugar levels regularly</li>
          <li>Eat smaller, frequent meals</li>
          <li>Choose complex carbohydrates</li>
          <li>Include fiber-rich foods</li>
          <li>Coordinate with your doctor for medication adjustments</li>
        </ul>

        <h4>Hypertension (High Blood Pressure)</h4>
        <ul>
          <li>Reduce sodium intake significantly</li>
          <li>Increase potassium-rich foods</li>
          <li>Limit processed foods</li>
          <li>Practice stress-reduction techniques</li>
          <li>Monitor blood pressure regularly</li>
        </ul>

        <h4>Arthritis and Joint Health</h4>
        <ul>
          <li>Choose low-impact exercises</li>
          <li>Include anti-inflammatory foods</li>
          <li>Maintain healthy weight to reduce joint stress</li>
          <li>Consider swimming or water exercises</li>
          <li>Use heat/cold therapy as needed</li>
        </ul>

        <h4>Heart Health</h4>
        <ul>
          <li>Follow a heart-healthy diet</li>
          <li>Limit saturated and trans fats</li>
          <li>Include omega-3 fatty acids</li>
          <li>Exercise within recommended heart rate zones</li>
          <li>Manage stress effectively</li>
        </ul>

        <h4>Medication Considerations</h4>
        <ul>
          <li>Some medications can affect weight</li>
          <li>Discuss weight loss goals with your doctor</li>
          <li>Never stop medications without medical advice</li>
          <li>Be aware of drug-nutrient interactions</li>
        </ul>
      `,
    },
  ]

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">FitPlan India</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/plans" className="text-gray-700 hover:text-green-600 transition-colors">
                Weight Loss Plans
              </Link>
              <Link href="/tools" className="text-gray-700 hover:text-green-600 transition-colors">
                Calculators
              </Link>
              <Link href="/blog" className="text-green-600 font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Blogs
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Senior Citizens Weight Management Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Safe, gentle, and effective weight management strategies for adults 60 and above
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? "bg-green-100 text-green-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none mb-6" dangerouslySetInnerHTML={{ __html: post.content }} />
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => toggleLike(post.id)}
                          className={`flex items-center space-x-1 ${
                            likedPosts.includes(post.id) ? "text-red-500" : "text-gray-500"
                          } hover:text-red-500 transition-colors`}
                        >
                          <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                          <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                          <Share2 className="w-5 h-5" />
                          <span>Share</span>
                        </button>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700">Get Senior-Friendly Plan</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Senior Weight Management Journey?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get a personalized, gentle weight management plan designed for seniors
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Book Senior Consultation - ₹500
          </Button>
        </div>
      </div>
    </div>
  )
}
