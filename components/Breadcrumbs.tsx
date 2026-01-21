import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Generate Schema.org BreadcrumbList
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 2, // +2 because Home is usually #1 implicit or explicit
            "name": item.label,
            "item": item.href.startsWith("http") ? item.href : `https://www.fitplanindia.com${item.href}`
        }))
    }

    // Prepend Home to schema if not present (optional, but good practice)
    const fullSchema = {
        ...breadcrumbSchema,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.fitplanindia.com"
            },
            ...breadcrumbSchema.itemListElement
        ]
    }

    return (
        <nav aria-label="Breadcrumb" className="w-full mb-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema) }}
            />

            <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
                <li className="flex items-center">
                    <Link href="/" className="hover:text-emerald-600 transition-colors flex items-center">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>

                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                        {index === items.length - 1 ? (
                            <span className="font-medium text-emerald-700 pointer-events-none" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="hover:text-emerald-600 transition-colors hover:underline decoration-emerald-600/30 underline-offset-4"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
