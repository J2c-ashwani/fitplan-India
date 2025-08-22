"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TeenagersWeightLossBlog() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const categories = ["All", "Diet Plans", "Exercise", "Mental Health", "Success Stories", "Tips"]

  const blogPosts = [
    {
      id: 1,
      title: "Healthy Weight Loss for Teenagers: A Complete Guide",
      excerpt: "Safe and effective weight loss strategies specifically designed for teenagers aged 13-19.",
      category: "Diet Plans",
      readTime: "8 min read",
      author: "FitPlan India Teen Health Team",
      date: "2024-01-15",
      likes: 245,
      content: `
        <h3>Understanding Teen Weight Loss</h3>
        <p>Teenage years are crucial for physical and mental development. Weight loss during this period requires special attention to ensure proper nutrition and healthy growth.</p>
        
        <h4>Safe Weight Loss Guidelines for Teens</h4>
        <ul>
          <li>Aim for 1-2 pounds weight loss per week maximum</li>
          <li>Focus on building healthy habits rather than quick fixes</li>
          <li>Never skip meals or follow extreme diets</li>
          <li>Include all food groups in your diet</li>
        </ul>

        <h4>Sample Daily Meal Plan for Teenagers</h4>
        <p><strong>Breakfast (7:00 AM):</strong></p>
        <ul>
          <li>2 whole wheat parathas with 1 tsp ghee</li>
          <li>1 glass milk with turmeric</li>
          <li>1 banana or seasonal fruit</li>
        </ul>

        <p><strong>Mid-Morning Snack (10:00 AM):</strong></p>
        <ul>
          <li>1 handful mixed nuts and seeds</li>
          <li>1 glass buttermilk</li>
        </ul>

        <p><strong>Lunch (1:00 PM):</strong></p>
        <ul>
          <li>1 cup brown rice or 2 rotis</li>
          <li>1 cup dal (lentils)</li>
          <li>Mixed vegetable curry</li>
          <li>1 cup curd</li>
          <li>Green salad</li>
        </ul>

        <p><strong>Evening Snack (4:00 PM):</strong></p>
        <ul>
          <li>Homemade smoothie with fruits</li>
          <li>2-3 whole grain biscuits</li>
        </ul>

        <p><strong>Dinner (7:00 PM):</strong></p>
        <ul>
          <li>2 rotis or 1 cup quinoa</li>
          <li>Grilled chicken/paneer/tofu</li>
          <li>Steamed vegetables</li>
          <li>1 bowl soup</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Exercise Routines for Teenage Weight Loss",
      excerpt: "Fun and effective workout plans that fit into a student's busy schedule.",
      category: "Exercise",
      readTime: "6 min read",
      author: "FitPlan India Fitness Team",
      date: "2024-01-12",
      likes: 189,
      content: `
        <h3>Teen-Friendly Exercise Plans</h3>
        <p>Exercise should be enjoyable and sustainable for teenagers. Here are some effective workout routines:</p>
        
        <h4>Beginner Workout Plan (3 days/week)</h4>
        <p><strong>Day 1 - Full Body Strength:</strong></p>
        <ul>
          <li>Push-ups: 3 sets of 8-12 reps</li>
          <li>Squats: 3 sets of 15-20 reps</li>
          <li>Plank: 3 sets of 30-60 seconds</li>
          <li>Lunges: 3 sets of 10 per leg</li>
        </ul>

        <p><strong>Day 2 - Cardio Fun:</strong></p>
        <ul>
          <li>Dancing: 30 minutes</li>
          <li>Jump rope: 3 sets of 2 minutes</li>
          <li>Cycling: 20-30 minutes</li>
        </ul>

        <p><strong>Day 3 - Sports Activities:</strong></p>
        <ul>
          <li>Basketball: 45 minutes</li>
          <li>Swimming: 30 minutes</li>
          <li>Badminton: 45 minutes</li>
        </ul>

        <h4>Tips for Staying Active</h4>
        <ul>
          <li>Find activities you enjoy</li>
          <li>Exercise with friends for motivation</li>
          <li>Use fitness apps to track progress</li>
          <li>Join school sports teams</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: "Managing Stress and Emotional Eating in Teens",
      excerpt: "How to handle academic pressure and emotional eating during teenage years.",
      category: "Mental Health",
      readTime: "7 min read",
      author: "FitPlan India Psychology Team",
      date: "2024-01-10",
      likes: 156,
      content: `
        <h3>Understanding Emotional Eating in Teens</h3>
        <p>Academic pressure, social challenges, and hormonal changes can lead to emotional eating patterns in teenagers.</p>
        
        <h4>Common Triggers for Teen Emotional Eating</h4>
        <ul>
          <li>Exam stress and academic pressure</li>
          <li>Social media comparison</li>
          <li>Peer pressure and bullying</li>
          <li>Family conflicts</li>
          <li>Body image concerns</li>
        </ul>

        <h4>Healthy Coping Strategies</h4>
        <ul>
          <li><strong>Mindful Eating:</strong> Pay attention to hunger and fullness cues</li>
          <li><strong>Stress Management:</strong> Practice deep breathing and meditation</li>
          <li><strong>Physical Activity:</strong> Use exercise as a stress reliever</li>
          <li><strong>Social Support:</strong> Talk to friends, family, or counselors</li>
          <li><strong>Hobby Development:</strong> Engage in creative activities</li>
        </ul>

        <h4>Building a Positive Relationship with Food</h4>
        <ul>
          <li>Avoid labeling foods as "good" or "bad"</li>
          <li>Practice portion control without restriction</li>
          <li>Eat regular meals to prevent overeating</li>
          <li>Focus on how food makes you feel</li>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Teenagers Weight Loss Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Safe, healthy, and sustainable weight loss guidance specifically designed for teenagers and students
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
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
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
                      <Button className="bg-green-600 hover:bg-green-700">Get Personalized Plan</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Teen Weight Loss Journey?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get a personalized weight loss plan designed specifically for teenagers
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Book Teen Consultation - ₹500
          </Button>
        </div>
      </div>
    </div>
  )
}
