import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://fitplanindia.com'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/private/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
