"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DiabetesWeightLossBlog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const categories = ["All", "Diet Plans", "Exercise", "Blood Sugar Management", "Success Stories", "Tips"]

  const blogPosts = [
    {
      id: 1,
      title: "Diabetic-Friendly Indian Weight Loss Diet Plan",
      excerpt:
        "A comprehensive 7-day meal plan that helps manage blood sugar while promoting healthy weight loss with traditional Indian foods.",
      category: "Diet Plans",
      readTime: "10 min read",
      author: "FitPlan India Diabetes Team",
      date: "2024-01-14",
      likes: 162,
      content: `
        <h3>Understanding Diabetes and Weight Management</h3>
        <p>Managing diabetes while losing weight requires careful attention to blood sugar levels, portion control, and choosing the right foods that won't spike glucose levels.</p>
        
        <h3>7-Day Diabetic Weight Loss Meal Plan</h3>
        
        <h4>Day 1: Monday</h4>
        <ul>
          <li><strong>Breakfast:</strong> Vegetable daliya (1 cup) + Buttermilk (1 glass)</li>
          <li><strong>Mid-Morning:</strong> 1 small apple with skin</li>
          <li><strong>Lunch:</strong> Brown rice (1/2 cup) + Moong dal (1 cup) + Bottle gourd curry + Salad</li>
          <li><strong>Evening:</strong> Green tea + 5 almonds</li>
          <li><strong>Dinner:</strong> Roti (1) + Grilled fish (100g) + Mixed vegetable curry</li>
        </ul>
        
        <h4>Day 2: Tuesday</h4>
        <ul>
          <li><strong>Breakfast:</strong> Besan chilla (2 small) + Mint chutney</li>
          <li><strong>Mid-Morning:</strong> 1 small orange</li>
          <li><strong>Lunch:</strong> Quinoa pulao (1 cup) + Rajma (1/2 cup) + Cucumber raita</li>
          <li><strong>Evening:</strong> Herbal tea + Roasted makhana (1/4 cup)</li>
          <li><strong>Dinner:</strong> Palak paneer (1 cup) + Cauliflower roti (2)</li>
        </ul>
        
        <h3>Best Foods for Diabetic Weight Loss</h3>
        <ul>
          <li><strong>High Fiber Foods:</strong> Oats, quinoa, brown rice, vegetables</li>
          <li><strong>Lean Proteins:</strong> Fish, chicken breast, paneer, tofu</li>
          <li><strong>Healthy Fats:</strong> Nuts, seeds, olive oil, avocado</li>
          <li><strong>Low GI Fruits:</strong> Berries, apples, pears, oranges</li>
        </ul>
        
        <h3>Foods to Avoid</h3>
        <ul>
          <li>White rice, white bread, refined flour</li>
          <li>Sugary drinks and sweets</li>
          <li>Fried and processed foods</li>
          <li>High-sugar fruits like mango, grapes</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Safe Exercise Routines for Diabetics",
      excerpt:
        "Effective workout plans that help control blood sugar levels while promoting weight loss, with safety guidelines for diabetic individuals.",
      category: "Exercise",
      readTime: "7 min read",
      author: "FitPlan India Fitness Team",
      date: "2024-01-11",
      likes: 145,
      content: `
        <h3>Exercise Benefits for Diabetes</h3>
        <p>Regular exercise helps improve insulin sensitivity, lower blood glucose levels, and aids in healthy weight management for diabetics.</p>
        
        <h3>Pre-Exercise Safety Checklist</h3>
        <ul>
          <li>Check blood sugar levels before exercising</li>
          <li>Keep glucose tablets or snacks handy</li>
          <li>Stay hydrated throughout the workout</li>
          <li>Wear proper footwear to prevent injuries</li>
        </ul>
        
        <h3>Recommended Exercise Routine</h3>
        
        <h4>Aerobic Exercises (5 days/week, 30 minutes)</h4>
        <ul>
          <li>Brisk walking</li>
          <li>Swimming</li>
          <li>Cycling</li>
          <li>Dancing</li>
        </ul>
        
        <h4>Strength Training (2-3 days/week)</h4>
        <ul>
          <li>Bodyweight exercises</li>
          <li>Resistance band workouts</li>
          <li>Light weight training</li>
          <li>Yoga and stretching</li>
        </ul>
        
        <h3>Blood Sugar Management During Exercise</h3>
        <ul>
          <li>Ideal pre-exercise glucose: 100-180 mg/dL</li>
          <li>If below 100: eat a small snack</li>
          <li>If above 250: avoid exercise until levels normalize</li>
          <li>Monitor for signs of hypoglycemia</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: "Managing Blood Sugar Spikes During Weight Loss",
      excerpt: "Learn how to prevent and manage blood sugar fluctuations while following a weight loss diet plan.",
      category: "Blood Sugar Management",
      readTime: "6 min read",
      author: "FitPlan India Medical Team",
      date: "2024-01-08",
      likes: 128,
      content: `
        <h3>Understanding Blood Sugar Spikes</h3>
        <p>Blood sugar spikes can occur even during weight loss efforts. Understanding triggers and management strategies is crucial for diabetic individuals.</p>
        
        <h3>Common Triggers for Blood Sugar Spikes</h3>
        <ul>
          <li>Eating too many carbohydrates at once</li>
          <li>Skipping meals and then overeating</li>
          <li>Stress and lack of sleep</li>
          <li>Dehydration</li>
          <li>Certain medications</li>
        </ul>
        
        <h3>Prevention Strategies</h3>
        <ul>
          <li>Eat smaller, frequent meals</li>
          <li>Pair carbs with protein and fiber</li>
          <li>Stay hydrated throughout the day</li>
          <li>Monitor blood sugar regularly</li>
          <li>Practice stress management techniques</li>
        </ul>
        
        <h3>Emergency Management</h3>
        <ul>
          <li>Check blood sugar immediately</li>
          <li>Take prescribed medication as directed</li>
          <li>Drink water to stay hydrated</li>
          <li>Contact healthcare provider if levels remain high</li>
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <Link href="/" className="text-2xl font-bold text-primary">
              FitPlan India
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/plans" className="text-sm font-medium hover:text-primary transition-colors">
              Weight Loss Plans
            </Link>
            <Link href="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Calculators
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Blogs
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Diabetes Weight Loss Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guidance for safe and effective weight loss while managing diabetes and blood sugar levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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
                          ? "bg-red-100 text-red-700 font-medium"
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

          <div className="lg:col-span-3">
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-red-100 text-red-700">
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
                      <Button className="bg-red-600 hover:bg-red-700">Get Personalized Plan</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Diabetes Management Plan?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get a customized diet and exercise plan designed specifically for diabetic weight loss and blood sugar
            control
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Book Diabetes Consultation - ₹500
          </Button>
        </div>
      </div>
    </div>
  )
}
