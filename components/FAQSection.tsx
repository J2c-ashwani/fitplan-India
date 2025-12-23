"use client"

interface FAQItem {
    question: string
    answer: string
}

interface FAQSectionProps {
    title?: string
    faqs: FAQItem[]
}

export default function FAQSection({ title = "Frequently Asked Questions", faqs }: FAQSectionProps) {
    // Generate FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <section className="py-12 bg-gray-50 rounded-xl">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{title}</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="group bg-white rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors"
                        >
                            <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                                <span className="text-left pr-4">{faq.question}</span>
                                <svg
                                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
