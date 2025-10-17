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

  // Health condition plans
  const healthPlans = [
    'pcos',
    'pcod',
    'diabetes',
    'diabetes-type-1',
    'diabetes-type-2',
    'hypothyroidism',
    'hyperthyroidism',
    'thyroid',
    'obesity',
    'post-pregnancy',
    'hormonal-imbalance',
    'metabolic-syndrome',
  ].map((plan) => ({
    url: `${baseUrl}/plans/${plan}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Lifestyle plans
  const lifestylePlans = [
    'weight-loss',
    'weight-gain',
    'muscle-gain',
    'fat-loss',
    'general-wellness',
  ].map((plan) => ({
    url: `${baseUrl}/plans/${plan}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Diet plans
  const dietPlans = [
    'vegetarian',
    'vegan',
    'keto',
    'low-carb',
    'high-protein',
    'intermittent-fasting',
    'balanced-diet',
    'indian-diet',
  ].map((plan) => ({
    url: `${baseUrl}/plans/${plan}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Age-specific plans
  const agePlans = [
    'teenagers',
    'twenties',
    'thirties',
    'forties',
    'senior-citizens',
  ].map((plan) => ({
    url: `${baseUrl}/plans/${plan}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Special plans
  const specialPlans = [
    'gym-diet-combo',
    'home-workout',
    'office-workers',
    'busy-professionals',
  ].map((plan) => ({
    url: `${baseUrl}/plans/${plan}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
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
    ...healthPlans,
    ...lifestylePlans,
    ...dietPlans,
    ...agePlans,
    ...specialPlans,
    ...legalPages,
  ]
}
