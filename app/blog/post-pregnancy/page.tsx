"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PostPregnancyBlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const categories = ["All", "Diet Plans", "Exercise", "Lifestyle", "Success Stories", "Tips"]

  const blogPosts = [
    {
      id: 1,
      title: "Safe Post-Pregnancy Weight Loss: A Complete Guide",
      excerpt: "Everything new mothers need to know about losing pregnancy weight safely and effectively.",
      content: `
        <h3>Understanding Post-Pregnancy Weight Loss</h3>
        <p>After childbirth, your body needs time to recover. Safe weight loss typically begins 6-8 weeks postpartum with doctor's approval.</p>
        
        <h3>Timeline for Weight Loss</h3>
        <ul>
          <li><strong>0-6 weeks:</strong> Focus on recovery, not weight loss</li>
          <li><strong>6-12 weeks:</strong> Gradual introduction of healthy habits</li>
          <li><strong>3-6 months:</strong> Active weight loss phase</li>
          <li><strong>6-12 months:</strong> Reaching pre-pregnancy weight</li>
        </ul>
        
        <h3>Breastfeeding Considerations</h3>
        <p>Breastfeeding mothers need an additional 300-500 calories daily. Rapid weight loss can affect milk supply.</p>
        
        <h3>Safe Weight Loss Rate</h3>
        <p>Aim for 0.5-1 kg per week. Faster weight loss may compromise milk production and energy levels.</p>
      `,
      category: "Lifestyle",
      readTime: "10 min",
      author: "FitPlan India Maternity Team",
      date: "2024-01-15",
      likes: 78,
      tags: ["post-pregnancy", "safe-weight-loss", "new-mothers"],
    },
    {
      id: 2,
      title: "7-Day Post-Pregnancy Nutrition Plan",
      excerpt: "A balanced meal plan designed for new mothers focusing on nutrition and gradual weight loss.",
      content: `
        <h3>Nutritional Priorities for New Mothers</h3>
        
        <h4>Daily Meal Structure:</h4>
        <p><strong>Breakfast:</strong> Oats with nuts and fruits + Milk</p>
        <p><strong>Mid-Morning:</strong> Smoothie with spinach, banana, and protein powder</p>
        <p><strong>Lunch:</strong> Brown rice + Dal + Vegetables + Curd + Ghee</p>
        <p><strong>Evening:</strong> Herbal tea + Handful of nuts</p>
        <p><strong>Dinner:</strong> Quinoa/Roti + Vegetable curry + Paneer/Chicken</p>
        <p><strong>Before Bed:</strong> Warm milk with turmeric (if breastfeeding)</p>
        
        <h4>Essential Nutrients:</h4>
        <ul>
          <li><strong>Protein:</strong> 1.2-1.5g per kg body weight</li>
          <li><strong>Calcium:</strong> 1200mg daily (dairy, sesame seeds)</li>
          <li><strong>Iron:</strong> 15mg daily (spinach, lentils, dates)</li>
          <li><strong>Omega-3:</strong> Walnuts, flaxseeds, fish</li>
          <li><strong>Folate:</strong> Green leafy vegetables</li>
        </ul>
        
        <h4>Hydration:</h4>
        <p>Drink 3-4 liters of water daily, especially if breastfeeding.</p>
      `,
      category: "Diet Plans",
      readTime: "12 min",
      author: "FitPlan India Nutrition Team",
      date: "2024-01-12",
      likes: 92,
      tags: ["nutrition", "meal-plan", "breastfeeding"],
    },
    {
      id: 3,
      title: "Postpartum Exercise: When and How to Start",
      excerpt: "Safe exercise guidelines for new mothers to regain strength and lose weight gradually.",
      content: `
        <h3>Exercise Timeline After Delivery</h3>
        
        <h4>Week 1-6: Recovery Phase</h4>
        <ul>
          <li>Deep breathing exercises</li>
          <li>Gentle pelvic floor exercises</li>
          <li>Short walks (5-10 minutes)</li>
          <li>Basic stretching</li>
        </ul>
        
        <h4>Week 6-12: Gradual Return</h4>
        <ul>
          <li>Longer walks (20-30 minutes)</li>
          <li>Core rehabilitation exercises</li>
          <li>Light yoga</li>
          <li>Swimming (after clearance)</li>
        </ul>
        
        <h4>Month 3+: Active Phase</h4>
        <ul>
          <li>Strength training with light weights</li>
          <li>Cardio exercises</li>
          <li>Group fitness classes</li>
          <li>Running (if comfortable)</li>
        </ul>
        
        <h4>Special Considerations:</h4>
        <ul>
          <li>Check for diastasis recti before core exercises</li>
          <li>Wear supportive sports bra</li>
          <li>Stay hydrated</li>
          <li>Listen to your body</li>
        </ul>
      `,
      category: "Exercise",
      readTime: "8 min",
      author: "FitPlan India Fitness Team",
      date: "2024-01-10",
      likes: 65,
      tags: ["postpartum-exercise", "recovery", "fitness"],
    },
    {
      id: 4,
      title: "Priya's Post-Pregnancy Transformation: Lost 18kg in 10 Months",
      excerpt: "How Priya safely lost her pregnancy weight while breastfeeding and caring for her newborn.",
      content: `
        <h3>Meet Priya - Age 29, New Mother</h3>
        <p><strong>Pre-Pregnancy:</strong> 58kg | <strong>Post-Delivery:</strong> 76kg | <strong>Current:</strong> 58kg | <strong>Time:</strong> 10 months</p>
        
        <h4>Her Challenge:</h4>
        <p>Priya gained 18kg during pregnancy. As a first-time mother, she struggled with finding time for herself while breastfeeding and caring for her baby.</p>
        
        <h4>Her Strategy:</h4>
        <ul>
          <li>Started with gentle walks at 6 weeks postpartum</li>
          <li>Focused on nutritious, calorie-controlled meals</li>
          <li>Exercised during baby's nap time (20-30 minutes)</li>
          <li>Joined online postpartum fitness classes</li>
          <li>Maintained consistent sleep schedule</li>
        </ul>
        
        <h4>Monthly Progress:</h4>
        <ul>
          <li><strong>Month 1-2:</strong> Recovery and establishing routine</li>
          <li><strong>Month 3-4:</strong> Lost 4kg with diet and walking</li>
          <li><strong>Month 5-6:</strong> Added strength training, lost 6kg</li>
          <li><strong>Month 7-10:</strong> Reached goal weight with consistent habits</li>
        </ul>
        
        <h4>Priya's Tips:</h4>
        <p>"Be patient with yourself. Your body created a miracle - give it time to heal and recover. Small consistent steps lead to big results."</p>
      `,
      category: "Success Stories",
      readTime: "7 min",
      author: "FitPlan India Team",
      date: "2024-01-08",
      likes: 134,
      tags: ["success-story", "transformation", "new-mother"],
    },
  ]

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-green-600">
                FitPlan India
              </Link>
              <div className="hidden md:flex space-x-6">
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
            <Button className="bg-green-600 hover:bg-green-700">Book Consultation - ₹500</Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Blogs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category ? "bg-pink-100 text-pink-700 font-medium" : "hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="mt-6 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">New Mother Support</h3>
                <p className="text-sm mb-4">Get personalized post-pregnancy weight loss guidance from our experts.</p>
                <Button className="w-full bg-white text-pink-600 hover:bg-gray-100">Book Consultation</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Post-Pregnancy Weight Loss Blog</h1>
              <p className="text-xl text-gray-600">Safe and effective weight loss strategies for new mothers</p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>

                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

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
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="mt-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Post-Pregnancy Journey?</h2>
                <p className="text-xl mb-6">Get personalized support for safe and effective weight loss</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                    Book Consultation - ₹500
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-pink-600 bg-transparent"
                  >
                    Download New Mother Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
