"use client"

interface ArticleSchemaProps {
    headline: string
    description: string
    author?: string
    datePublished?: string
    dateModified?: string
    image?: string
    keywords?: string[]
}

export default function ArticleSchema({
    headline,
    description,
    author = "Dr. Arti Kumari",
    datePublished,
    dateModified,
    image = "/og-image.jpg",
    keywords = []
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": headline,
        "description": description,
        "image": `https://fitplanindia.com${image}`,
        "author": {
            "@type": "Person",
            "name": author
        },
        "publisher": {
            "@type": "Organization",
            "name": "FitPlan India",
            "logo": {
                "@type": "ImageObject",
                "url": "https://fitplanindia.com/logo.png"
            }
        },
        "datePublished": datePublished || new Date().toISOString().split('T')[0],
        "dateModified": dateModified || new Date().toISOString().split('T')[0],
        "keywords": keywords.join(", ")
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
