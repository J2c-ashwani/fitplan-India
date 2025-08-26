"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PCOSWeightLossBlog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const categories = ["All", "Diet Plans", "Exercise", "Natural Remedies", "Success Stories", "Tips"]

  const blogPosts = [
    {
      id: 1,
      title: "7-Day PCOS Weight Loss Diet Plan for Indian Women",
      excerpt:
        "A complete meal plan designed specifically for PCOS management with Indian foods and spices that help regulate hormones naturally.",
      category: "Diet Plans",
      readTime: "8 min read",
      author: "FitPlan India Nutrition Team",
      date: "2024-01-15",
      likes: 245,
      content: `
        <h3>Understanding PCOS and Weight Loss</h3>
        <p>PCOS (Polycystic Ovary Syndrome) affects 1 in 10 women of reproductive age. Weight management becomes challenging due to insulin resistance and hormonal imbalances.</p>
        
        <h3>7-Day Indian PCOS Diet Plan</h3>
        
        <h4>Day 1: Monday</h4>
        <ul>
          <li><strong>Breakfast:</strong> Methi paratha (1) + Greek yogurt (1 cup) + Green tea</li>
          <li><strong>Mid-Morning:</strong> Handful of almonds (10-12)</li>
          <li><strong>Lunch:</strong> Brown rice (1/2 cup) + Dal (1 cup) + Mixed vegetable curry + Salad</li>
          <li><strong>Evening:</strong> Green tea + 1 apple</li>
          <li><strong>Dinner:</strong> Grilled chicken (100g) + Quinoa upma + Cucumber raita</li>
        </ul>
        
        <h4>Day 2: Tuesday</h4>
        <ul>
          <li><strong>Breakfast:</strong> Oats upma with vegetables + Buttermilk</li>
          <li><strong>Mid-Morning:</strong> 1 orange</li>
          <li><strong>Lunch:</strong> Roti (2) + Palak paneer + Brown rice (1/2 cup) + Salad</li>
          <li><strong>Evening:</strong> Herbal tea + Roasted chana (1/4 cup)</li>
          <li><strong>Dinner:</strong> Fish curry (100g) + Cauliflower rice + Green salad</li>
        </ul>
        
        <h3>PCOS-Friendly Indian Spices</h3>
        <ul>
          <li><strong>Cinnamon:</strong> Helps regulate blood sugar levels</li>
          <li><strong>Turmeric:</strong> Reduces inflammation and insulin resistance</li>
          <li><strong>Fenugreek:</strong> Improves glucose tolerance</li>
          <li><strong>Spearmint:</strong> Helps reduce excess androgens</li>
        </ul>
        
        <h3>Foods to Avoid</h3>
        <ul>
          <li>Refined sugars and processed foods</li>
          <li>White rice and refined flour</li>
          <li>Fried and oily foods</li>
          <li>Sugary drinks and sodas</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Best Exercises for PCOS Weight Loss at Home",
      excerpt:
        "Effective home workout routines that help manage PCOS symptoms, reduce insulin resistance, and promote healthy weight loss.",
      category: "Exercise",
      readTime: "6 min read",
      author: "FitPlan India Fitness Team",
      date: "2024-01-12",
      likes: 38,
      content: `
        <h3>Why Exercise is Crucial for PCOS</h3>
        <p>Regular exercise helps improve insulin sensitivity, reduce inflammation, and balance hormones in women with PCOS.</p>
        
        <h3>PCOS-Friendly Home Workout Routine</h3>
        
        <h4>Strength Training (3x per week)</h4>
        <ul>
          <li>Bodyweight squats: 3 sets of 15 reps</li>
          <li>Push-ups (modified if needed): 3 sets of 10 reps</li>
          <li>Lunges: 3 sets of 12 reps each leg</li>
          <li>Plank: 3 sets of 30 seconds</li>
          <li>Glute bridges: 3 sets of 15 reps</li>
        </ul>
        
        <h4>Cardio Workouts (4x per week)</h4>
        <ul>
          <li>Brisk walking: 30-45 minutes</li>
          <li>Dancing: 20-30 minutes</li>
          <li>Cycling: 30 minutes</li>
          <li>Swimming: 30 minutes</li>
        </ul>
        
        <h3>Yoga for PCOS</h3>
        <p>Specific yoga poses that help with PCOS symptoms:</p>
        <ul>
          <li>Butterfly pose (Baddha Konasana)</li>
          <li>Child's pose (Balasana)</li>
          <li>Cobra pose (Bhujangasana)</li>
          <li>Bridge pose (Setu Bandhasana)</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: "Managing PCOS Symptoms Naturally with Indian Herbs",
      excerpt:
        "Discover traditional Indian herbs and natural remedies that can help manage PCOS symptoms and support weight loss efforts.",
      category: "Natural Remedies",
      readTime: "5 min read",
      author: "FitPlan India Ayurveda Team",
      date: "2024-01-10",
      likes: 52,
      content: `
        <h3>Ayurvedic Approach to PCOS</h3>
        <p>Ayurveda views PCOS as an imbalance in the body's doshas. Natural herbs can help restore this balance and manage symptoms effectively.</p>
        
        <h3>Top Indian Herbs for PCOS</h3>
        
        <h4>1. Spearmint (Pudina)</h4>
        <p>Helps reduce excess androgens and regulate menstrual cycles. Drink spearmint tea twice daily.</p>
        
        <h4>2. Fenugreek (Methi)</h4>
        <p>Improves glucose metabolism and insulin sensitivity. Soak methi seeds overnight and consume in the morning.</p>
        
        <h4>3. Cinnamon (Dalchini)</h4>
        <p>Helps regulate blood sugar levels and improve insulin resistance. Add to tea or warm water.</p>
        
        <h4>4. Turmeric (Haldi)</h4>
        <p>Powerful anti-inflammatory properties. Mix with warm milk before bedtime.</p>
        
        <h3>Natural PCOS Management Tips</h3>
        <ul>
          <li>Maintain regular sleep schedule (7-8 hours)</li>
          <li>Practice stress management techniques</li>
          <li>Stay hydrated (8-10 glasses of water daily)</li>
          <li>Include fiber-rich foods in diet</li>
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Blogs
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PCOS Weight Loss Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, proven strategies, and natural remedies for managing PCOS symptoms and achieving sustainable
            weight loss
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
                          ? "bg-pink-100 text-pink-700 font-medium"
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
                      <Badge variant="secondary" className="bg-pink-100 text-pink-700">
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
                      <Button className="bg-pink-600 hover:bg-pink-700">Get Personalized Plan</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Personalized PCOS Management Plan?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get a customized diet and lifestyle plan designed specifically for your PCOS symptoms and weight loss goals
          </p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            Book PCOS Consultation - ₹500
          </Button>
        </div>
      </div>
    </div>
  )
}
