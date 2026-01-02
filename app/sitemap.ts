import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fitplanindia.com'
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/plans`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/workouts`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ai-coach`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ayurveda`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Ayurveda Pages (Verified)
  const ayurveda = [
    'doshas',
    'pcos-herbs',
    'thyroid-remedies',
    'diabetes-control',
    'joint-pain',
    'weight-loss-routine',
    'gut-health',
    'sleep-hygiene',
    'stress-anxiety',
    'hair-health',
    'skin-glow',
    'anti-aging',
    'eye-care',
    'acne',
    'gray-hair',
    'dark-circles',
    'body-polishing',
    'post-pregnancy',
    'acidity-bloating',
    'mens-vitality',
    'home-detox',
    'kidney-health',
    'liver-care',
    'immunity',
    'diet-rules',
    'oil-pulling',
    'heart-health',
    'seasonal-guide',
    'migraine',
    'constipation',
    'menopause',
    'kids-health',
  ].map((page) => ({
    url: `${baseUrl}/ayurveda/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Diet Plans (Verified directories)
  const plans = [
    'anti-aging',
    'diabetes',
    'gym-diet-combo',
    'gym',
    'hair-growth',
    'hormonal-imbalance',
    'hyperthyroidism',
    'hypothyroidism',
    'intermittent-fasting',
    'keto-diet',
    'metabolic',
    'obesity',
    'pcod',
    'pcos',
    'post-pregnancy',
    'senior-citizens',
    'skin-detox',
    'teenagers',
    'thyroid',
    'vegetarian',
  ].map((plan) => ({
    url: `${baseUrl}/plans/${plan}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Workout Plans (Verified directories)
  const workouts = [
    'athlete-nutrition',
    'diabetes',
    'general',
    'heart-health',
    'hormonal',
    'hyperthyroidism',
    'hypothyroidism',
    'intermittent-fasting',
    'keto',
    'mediterranean',
    'metabolic',
    'muscle-gain',
    'obesity',
    'paleo',
    'pcod',
    'pcos',
    'post-pregnancy',
    'pregnancy-nutrition',
    'senior-citizens',
    'teenagers',
    'thyroid',
    'vegan-bodybuilding',
    'vegetarian',
    'weight-loss',
  ].map((workout) => ({
    url: `${baseUrl}/workouts/${workout}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Tools (Verified directories)
  const tools = [
    'bmi-calculator',
    'calorie-calculator',
    'protein-calculator',
    'water-intake-calculator',
  ].map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const blogs = [
    'athlete-nutrition',
    'diabetes',
    'exercise-fitness',
    'heart-health',
    'intermittent-fasting',
    'keto',
    'mediterranean',
    'muscle-gain',
    'nutrition-science',
    'obesity',
    'paleo',
    'pcod',
    'pcos',
    'post-pregnancy',
    'pregnancy-nutrition',
    'senior-citizens',
    'teenagers',
    'thyroid',
    'vegan-bodybuilding',
    'vegetarian',
    'weight-loss',
  ].map((blog) => ({
    url: `${baseUrl}/blog/${blog}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return [
    ...mainPages,
    ...plans,
    ...ayurveda,
    ...workouts,
    ...tools,
    ...blogs,
    ...legalPages,
  ]
}
