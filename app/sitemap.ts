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
  ]

  // Diet Plans (Verified directories)
  const plans = [
    'diabetes',
    'gym-diet-combo',
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
    ...workouts,
    ...tools,
    ...legalPages,
  ]
}
