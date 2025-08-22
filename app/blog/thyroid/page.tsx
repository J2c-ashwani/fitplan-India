"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ThyroidBlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const categories = ["All", "Diet Plans", "Exercise", "Lifestyle", "Success Stories", "Tips"]

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Thyroid and Weight Gain: The Complete Guide",
      excerpt: "Learn how thyroid disorders affect your metabolism and weight management strategies.",
      content: `
        <h3>What is Thyroid?</h3>
        <p>The thyroid is a butterfly-shaped gland in your neck that produces hormones regulating metabolism, energy, and weight.</p>
        
        <h3>Hypothyroidism vs Hyperthyroidism</h3>
        <p><strong>Hypothyroidism:</strong> Underactive thyroid leads to slow metabolism and weight gain.</p>
        <p><strong>Hyperthyroidism:</strong> Overactive thyroid causes rapid metabolism and weight loss.</p>
        
        <h3>Weight Management Strategies</h3>
        <ul>
          <li>Regular medication compliance</li>
          <li>Balanced nutrition with iodine-rich foods</li>
          <li>Regular exercise routine</li>
          <li>Stress management</li>
          <li>Adequate sleep (7-8 hours)</li>
        </ul>
      `,
      category: "Lifestyle",
      readTime: "8 min",
      author: "FitPlan India Team",
      date: "2024-01-15",
      likes: 45,
      tags: ["thyroid", "metabolism", "weight-management"],
    },
    {
      id: 2,
      title: "7-Day Thyroid-Friendly Diet Plan for Weight Loss",
      excerpt: "A comprehensive meal plan designed specifically for thyroid patients.",
      content: `
        <h3>Day 1-7 Meal Plan</h3>
        
        <h4>Day 1:</h4>
        <p><strong>Breakfast:</strong> Oats with almonds and berries + Green tea</p>
        <p><strong>Mid-Morning:</strong> 1 apple with 5 soaked almonds</p>
        <p><strong>Lunch:</strong> Brown rice + Dal + Mixed vegetables + Curd</p>
        <p><strong>Evening:</strong> Herbal tea + 2 whole grain biscuits</p>
        <p><strong>Dinner:</strong> Quinoa salad with vegetables + Grilled paneer</p>
        
        <h4>Foods to Include:</h4>
        <ul>
          <li>Iodine-rich foods: Sea vegetables, fish, dairy</li>
          <li>Selenium sources: Brazil nuts, sunflower seeds</li>
          <li>Zinc foods: Pumpkin seeds, chickpeas</li>
          <li>Anti-inflammatory foods: Turmeric, ginger</li>
        </ul>
        
        <h4>Foods to Avoid:</h4>
        <ul>
          <li>Processed foods high in sodium</li>
          <li>Excessive soy products</li>
          <li>Refined sugars</li>
          <li>Cruciferous vegetables in large amounts</li>
        </ul>
      `,
      category: "Diet Plans",
      readTime: "12 min",
      author: "FitPlan India Nutrition Team",
      date: "2024-01-12",
      likes: 67,
      tags: ["diet-plan", "meal-prep", "thyroid-diet"],
    },
    {
      id: 3,
      title: "Best Exercises for Thyroid Patients",
      excerpt: "Safe and effective workout routines that support thyroid health and weight management.",
      content: `
        <h3>Exercise Guidelines for Thyroid Patients</h3>
        
        <h4>Low-Impact Cardio (30 minutes, 4-5 times/week):</h4>
        <ul>
          <li>Brisk walking</li>
          <li>Swimming</li>
          <li>Cycling</li>
          <li>Elliptical training</li>
        </ul>
        
        <h4>Strength Training (2-3 times/week):</h4>
        <ul>
          <li>Light weights with higher repetitions</li>
          <li>Resistance band exercises</li>
          <li>Bodyweight exercises</li>
          <li>Yoga poses for strength</li>
        </ul>
        
        <h4>Flexibility & Stress Relief:</h4>
        <ul>
          <li>Daily yoga practice</li>
          <li>Meditation (10-15 minutes)</li>
          <li>Deep breathing exercises</li>
          <li>Gentle stretching</li>
        </ul>
        
        <h4>Exercise Precautions:</h4>
        <ul>
          <li>Start slowly and gradually increase intensity</li>
          <li>Monitor heart rate</li>
          <li>Stay hydrated</li>
          <li>Listen to your body</li>
        </ul>
      `,
      category: "Exercise",
      readTime: "10 min",
      author: "FitPlan India Fitness Team",
      date: "2024-01-10",
      likes: 52,
      tags: ["exercise", "workout", "thyroid-fitness"],
    },
    {
      id: 4,
      title: "Sarah's Thyroid Weight Loss Success Story",
      excerpt: "How Sarah lost 15kg despite hypothyroidism with the right approach.",
      content: `
        <h3>Meet Sarah - Age 32, Hypothyroidism</h3>
        <p><strong>Starting Weight:</strong> 78kg | <strong>Current Weight:</strong> 63kg | <strong>Time:</strong> 8 months</p>
        
        <h4>Her Challenge:</h4>
        <p>Sarah was diagnosed with hypothyroidism at 28. Despite eating healthy, she gained 20kg over 4 years and felt constantly tired.</p>
        
        <h4>Her Approach:</h4>
        <ul>
          <li>Consistent thyroid medication</li>
          <li>Followed thyroid-specific diet plan</li>
          <li>Regular morning walks (45 minutes)</li>
          <li>Yoga and meditation for stress</li>
          <li>Proper sleep schedule</li>
        </ul>
        
        <h4>Key Learnings:</h4>
        <ul>
          <li>Patience is crucial - weight loss is slower with thyroid issues</li>
          <li>Consistency matters more than perfection</li>
          <li>Stress management is essential</li>
          <li>Regular monitoring of thyroid levels</li>
        </ul>
        
        <h4>Sarah's Advice:</h4>
        <p>"Don't give up! It took me 8 months to lose what others might lose in 4, but it's possible. Work with your body, not against it."</p>
      `,
      category: "Success Stories",
      readTime: "6 min",
      author: "FitPlan India Team",
      date: "2024-01-08",
      likes: 89,
      tags: ["success-story", "motivation", "hypothyroidism"],
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
                        selectedCategory === category ? "bg-green-100 text-green-700 font-medium" : "hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="mt-6 bg-gradient-to-br from-green-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Need Personalized Help?</h3>
                <p className="text-sm mb-4">Get a customized thyroid weight loss plan from our experts.</p>
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100">Book Consultation</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Thyroid Weight Loss Blog</h1>
              <p className="text-xl text-gray-600">
                Expert advice and proven strategies for managing weight with thyroid conditions
              </p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
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
            <Card className="mt-12 bg-gradient-to-r from-green-500 to-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Thyroid Weight Loss Journey?</h2>
                <p className="text-xl mb-6">Get personalized guidance from our thyroid specialists</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    Book Consultation - ₹500
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                  >
                    Download Free Guide
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
