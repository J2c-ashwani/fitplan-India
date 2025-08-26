"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ObesityBlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const categories = ["All", "Diet Plans", "Exercise", "Success Stories", "Medical Info", "Lifestyle Tips"]

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Obesity: Causes and Health Risks",
      excerpt:
        "Comprehensive guide to understanding obesity, its causes, and associated health risks in the Indian context.",
      category: "Medical Info",
      readTime: "8 min read",
      author: "FitPlan India Medical Team",
      date: "Dec 20, 2024",
      likes: 45,
      content: `
        <h3>What is Obesity?</h3>
        <p>Obesity is a complex health condition characterized by excessive body fat accumulation. In India, obesity rates have been rising due to lifestyle changes, urbanization, and dietary shifts.</p>
        
        <h4>BMI Classifications for Indians:</h4>
        <ul>
          <li>Normal: 18.5-22.9 kg/m²</li>
          <li>Overweight: 23-24.9 kg/m²</li>
          <li>Obese Class I: 25-29.9 kg/m²</li>
          <li>Obese Class II: ≥30 kg/m²</li>
        </ul>

        <h4>Common Causes in India:</h4>
        <ul>
          <li>Sedentary lifestyle and desk jobs</li>
          <li>High consumption of refined foods</li>
          <li>Irregular meal timings</li>
          <li>Genetic predisposition</li>
          <li>Hormonal imbalances</li>
          <li>Stress and poor sleep patterns</li>
        </ul>

        <h4>Health Risks:</h4>
        <ul>
          <li>Type 2 Diabetes</li>
          <li>Heart disease and hypertension</li>
          <li>Sleep apnea</li>
          <li>Joint problems</li>
          <li>Fatty liver disease</li>
          <li>Increased cancer risk</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "7-Day Indian Diet Plan for Obesity Management",
      excerpt: "Structured meal plan designed specifically for managing obesity with Indian foods and flavors.",
      category: "Diet Plans",
      readTime: "12 min read",
      author: "FitPlan India Nutrition Team",
      date: "Dec 18, 2024",
      likes: 78,
      content: `
        <h3>7-Day Obesity Management Diet Plan</h3>
        
        <h4>Day 1:</h4>
        <p><strong>Early Morning (6:30 AM):</strong> Warm water with lemon and honey</p>
        <p><strong>Breakfast (8:00 AM):</strong> Vegetable upma with mint chutney + Green tea</p>
        <p><strong>Mid-Morning (10:30 AM):</strong> 1 apple or guava</p>
        <p><strong>Lunch (1:00 PM):</strong> Brown rice (1/2 cup) + Dal + Mixed vegetable curry + Cucumber salad</p>
        <p><strong>Evening (4:00 PM):</strong> Buttermilk with roasted cumin</p>
        <p><strong>Dinner (7:30 PM):</strong> Roti (2) + Palak paneer + Tomato soup</p>

        <h4>Day 2:</h4>
        <p><strong>Early Morning:</strong> Warm water with lemon</p>
        <p><strong>Breakfast:</strong> Oats porridge with berries + Herbal tea</p>
        <p><strong>Mid-Morning:</strong> 1 orange</p>
        <p><strong>Lunch:</strong> Quinoa pulao + Rajma + Green salad</p>
        <p><strong>Evening:</strong> Green tea with 4-5 almonds</p>
        <p><strong>Dinner:</strong> Vegetable soup + Grilled paneer salad</p>

        <h4>Key Guidelines:</h4>
        <ul>
          <li>Drink 3-4 liters of water daily</li>
          <li>Avoid refined sugar and processed foods</li>
          <li>Include fiber-rich foods in every meal</li>
          <li>Practice portion control</li>
          <li>Eat dinner 3 hours before bedtime</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: "Effective Exercise Routine for Obesity",
      excerpt: "Comprehensive workout plan combining cardio and strength training for sustainable weight loss.",
      category: "Exercise",
      readTime: "10 min read",
      author: "FitPlan India Fitness Team",
      date: "Dec 15, 2024",
      likes: 62,
      content: `
        <h3>Exercise Plan for Obesity Management</h3>
        
        <h4>Week 1-2: Foundation Building</h4>
        <p><strong>Daily Activities:</strong></p>
        <ul>
          <li>Morning walk: 20-30 minutes</li>
          <li>Basic stretching: 10 minutes</li>
          <li>Breathing exercises: 5 minutes</li>
        </ul>

        <h4>Week 3-4: Intensity Building</h4>
        <p><strong>Monday, Wednesday, Friday:</strong></p>
        <ul>
          <li>Brisk walking: 45 minutes</li>
          <li>Bodyweight exercises: 15 minutes</li>
          <li>Yoga: 15 minutes</li>
        </ul>
        
        <p><strong>Tuesday, Thursday, Saturday:</strong></p>
        <ul>
          <li>Swimming or cycling: 30 minutes</li>
          <li>Strength training: 20 minutes</li>
          <li>Cool down stretching: 10 minutes</li>
        </ul>

        <h4>Bodyweight Exercises:</h4>
        <ul>
          <li>Wall push-ups: 2 sets of 10</li>
          <li>Chair squats: 2 sets of 12</li>
          <li>Modified planks: 2 sets of 20 seconds</li>
          <li>Arm circles: 2 sets of 15</li>
        </ul>

        <h4>Important Tips:</h4>
        <ul>
          <li>Start slowly and gradually increase intensity</li>
          <li>Listen to your body and rest when needed</li>
          <li>Stay hydrated during workouts</li>
          <li>Consult a doctor before starting any exercise program</li>
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
      {/* Header */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to All Blogs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-green-100 text-green-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Obesity Management Blog</h1>
                  <p className="text-gray-600 mt-2">
                    Comprehensive guides for managing obesity with Indian diet and lifestyle approaches
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-red-100 text-red-700">
                {filteredPosts.length} Articles
              </Badge>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-red-600 border-red-200">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {post.author} • {post.date}
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => toggleLike(post.id)}
                          className={`flex items-center space-x-1 ${
                            likedPosts.includes(post.id) ? "text-red-600" : "text-gray-500"
                          }`}
                        >
                          <Heart className={`h-4 w-4 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                          <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>

                    <div className="prose prose-green max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg shadow-md p-8 mt-12 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Weight Loss Journey?</h3>
              <p className="text-green-100 mb-6">
                Get personalized obesity management plan from our certified nutritionists
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Book ₹500 Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
