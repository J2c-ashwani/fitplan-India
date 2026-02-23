import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fitplanindia.com'
  const currentDate = new Date().toISOString()

  // Helper to dynamically read directories
  const getSubdirs = (dirPath: string) => {
    try {
      // In Next.js, process.cwd() points to the root of the project
      const fullPath = path.join(process.cwd(), 'app', dirPath)
      if (!fs.existsSync(fullPath)) return []
      return fs.readdirSync(fullPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('[') && !dirent.name.startsWith('('))
        .map(dirent => dirent.name)
    } catch (e) {
      console.warn(`Failed to read directory for sitemap: ${dirPath}`, e)
      return []
    }
  }

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/plans`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/workouts`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/tools`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/ai-coach`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/ayurveda`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.9 },
  ]

  // Dynamically generated arrays
  const ayurveda = getSubdirs('ayurveda').map((page) => ({
    url: `${baseUrl}/ayurveda/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const plans = getSubdirs('plans').map((plan) => ({
    url: `${baseUrl}/plans/${plan}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const workouts = getSubdirs('workouts').map((workout) => ({
    url: `${baseUrl}/workouts/${workout}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const tools = getSubdirs('tools').map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const blogs = getSubdirs('blog').map((blog) => ({
    url: `${baseUrl}/blog/${blog}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Legal pages
  const legalPages = [
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.3 },
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
