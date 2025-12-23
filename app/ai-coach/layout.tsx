import type { Metadata } from 'next'
import AICoachSEOContent from "@/components/AICoachSEOContent"

export const metadata: Metadata = {
    title: 'AI Diet Coach & Workout Planner | Free FitPlan India Tool',
    description: 'Chat with our AI Fitness Coach for free. Get instant personalized diet plans (PCOS, Thyroid, Weight Loss) and workout routines tailored to your goals. No signup required to test.',
    keywords: ['AI diet coach', 'free personal trainer AI', 'workout generator', 'PCOS diet planner', 'Indian diet chart maker'],
    openGraph: {
        title: 'AI Fitness Coach - Your Free Personal Trainer',
        description: 'Get a 100% personalized diet & workout plan in seconds. Try it now!',
        type: 'website',
    }
}

export default function AICoachLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <AICoachSEOContent />
            {/* Hidden SEO Content Structure could go here if needed, but Metadata is priority */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "FitPlan AI Coach",
                        "applicationCategory": "HealthApplication",
                        "operatingSystem": "Web",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "INR"
                        },
                        "description": "An AI-powered personal trainer that generates customized diet and workout plans for Indian users."
                    })
                }}
            />
        </>
    )
}
