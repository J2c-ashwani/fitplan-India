"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function VegetarianBlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const categories = ["All", "Diet Plans", "Protein Sources", "Recipes", "Nutrition Tips", "Success Stories"]

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Vegetarian Weight Loss in India",
      excerpt: "Comprehensive guide to losing weight on a vegetarian diet with Indian foods and traditional recipes.",
      category: "Diet Plans",
      readTime: "10 min read",
      author: "FitPlan India Nutrition Team",
      date: "Dec 20, 2024",
      likes: 89,
      content: `
        <h3>Vegetarian Weight Loss: The Indian Advantage</h3>
        <p>India has the world's largest vegetarian population, and our traditional diet offers incredible advantages for weight loss when planned correctly.</p>
        
        <h4>Benefits of Vegetarian Diet for Weight Loss:</h4>
        <ul>
          <li>High fiber content promotes satiety</li>
          <li>Lower calorie density in most plant foods</li>
          <li>Rich in antioxidants and phytonutrients</li>
          <li>Better digestion and gut health</li>
          <li>Sustainable and environmentally friendly</li>
        </ul>

        <h4>Common Vegetarian Weight Loss Mistakes:</h4>
        <ul>
          <li>Over-relying on dairy products</li>
          <li>Consuming too many refined carbs</li>
          <li>Not getting enough protein</li>
          <li>Eating too many fried foods</li>
          <li>Ignoring portion sizes</li>
        </ul>

        <h4>Key Principles for Success:</h4>
        <ul>
          <li>Include protein in every meal</li>
          <li>Focus on whole grains over refined</li>
          <li>Eat plenty of vegetables and fruits</li>
          <li>Control oil and ghee consumption</li>
          <li>Stay hydrated with water and herbal teas</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Top 15 Vegetarian Protein Sources for Weight Loss",
      excerpt: "Complete list of high-protein vegetarian foods available in India with their nutritional values.",
      category: "Protein Sources",
      readTime: "8 min read",
      author: "FitPlan India Nutrition Team",
      date: "Dec 18, 2024",
      likes: 67,
      content: `
        <h3>Best Vegetarian Protein Sources</h3>
        
        <h4>Legumes and Pulses (per 100g cooked):</h4>
        <ul>
          <li><strong>Moong Dal:</strong> 24g protein, 347 calories</li>
          <li><strong>Chana Dal:</strong> 19g protein, 364 calories</li>
          <li><strong>Rajma:</strong> 23g protein, 333 calories</li>
          <li><strong>Black Gram (Urad):</strong> 25g protein, 341 calories</li>
          <li><strong>Chickpeas:</strong> 19g protein, 364 calories</li>
        </ul>

        <h4>Dairy Products:</h4>
        <ul>
          <li><strong>Paneer:</strong> 18g protein, 265 calories per 100g</li>
          <li><strong>Greek Yogurt:</strong> 10g protein, 59 calories per 100g</li>
          <li><strong>Cottage Cheese:</strong> 11g protein, 98 calories per 100g</li>
          <li><strong>Milk (toned):</strong> 3.2g protein, 58 calories per 100ml</li>
        </ul>

        <h4>Nuts and Seeds:</h4>
        <ul>
          <li><strong>Almonds:</strong> 21g protein, 579 calories per 100g</li>
          <li><strong>Peanuts:</strong> 26g protein, 567 calories per 100g</li>
          <li><strong>Pumpkin Seeds:</strong> 19g protein, 559 calories per 100g</li>
          <li><strong>Chia Seeds:</strong> 17g protein, 486 calories per 100g</li>
        </ul>

        <h4>Grains and Others:</h4>
        <ul>
          <li><strong>Quinoa:</strong> 14g protein, 368 calories per 100g</li>
          <li><strong>Oats:</strong> 17g protein, 389 calories per 100g</li>
          <li><strong>Soya Chunks:</strong> 52g protein, 345 calories per 100g</li>
        </ul>
      `,
    },
    {
      id: 3,
      title: "7-Day Vegetarian Weight Loss Meal Plan",
      excerpt: "Detailed meal plan with traditional Indian vegetarian foods for effective weight loss.",
      category: "Diet Plans",
      readTime: "12 min read",
      author: "FitPlan India Nutrition Team",
      date: "Dec 15, 2024",
      likes: 94,
      content: `
        <h3>7-Day Vegetarian Weight Loss Plan</h3>
        
        <h4>Day 1:</h4>
        <p><strong>Early Morning (6:30 AM):</strong> Warm water with lemon and honey</p>
        <p><strong>Breakfast (8:00 AM):</strong> Vegetable poha + Green tea</p>
        <p><strong>Mid-Morning (10:30 AM):</strong> 1 apple with 5 almonds</p>
        <p><strong>Lunch (1:00 PM):</strong> Brown rice (1/2 cup) + Moong dal + Bhindi sabzi + Cucumber raita</p>
        <p><strong>Evening (4:00 PM):</strong> Herbal tea with 2 digestive biscuits</p>
        <p><strong>Dinner (7:30 PM):</strong> Roti (2) + Palak paneer + Mixed salad</p>

        <h4>Day 2:</h4>
        <p><strong>Early Morning:</strong> Warm water with lemon</p>
        <p><strong>Breakfast:</strong> Oats upma with vegetables + Buttermilk</p>
        <p><strong>Mid-Morning:</strong> 1 orange</p>
        <p><strong>Lunch:</strong> Quinoa pulao + Rajma + Green salad</p>
        <p><strong>Evening:</strong> Green tea with roasted chana</p>
        <p><strong>Dinner:</strong> Vegetable soup + Grilled paneer with salad</p>

        <h4>Day 3:</h4>
        <p><strong>Early Morning:</strong> Warm water with lemon and ginger</p>
        <p><strong>Breakfast:</strong> Besan chilla (2) + Mint chutney + Green tea</p>
        <p><strong>Mid-Morning:</strong> 1 guava</p>
        <p><strong>Lunch:</strong> Brown rice + Chana dal + Lauki sabzi + Onion salad</p>
        <p><strong>Evening:</strong> Coconut water</p>
        <p><strong>Dinner:</strong> Roti (2) + Mixed dal + Steamed vegetables</p>

        <h4>Weekly Guidelines:</h4>
        <ul>
          <li>Drink 3-4 liters of water daily</li>
          <li>Include one protein source in each meal</li>
          <li>Eat dinner 3 hours before bedtime</li>
          <li>Practice mindful eating</li>
          <li>Include 30 minutes of physical activity</li>
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
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-600">
                FitPlan India
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
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
            </nav>
          </div>
        </div>
      </header>

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
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Vegetarian Diet Blog</h1>
                  <p className="text-gray-600 mt-2">
                    Complete guide to vegetarian weight loss with Indian foods and recipes
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                {filteredPosts.length} Articles
              </Badge>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-green-600 border-green-200">
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
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Vegetarian Weight Loss Journey?</h3>
              <p className="text-green-100 mb-6">
                Get personalized vegetarian diet plan from our certified nutritionists
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
