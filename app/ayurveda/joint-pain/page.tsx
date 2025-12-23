import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Leaf, AlertCircle, Droplet } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Natural Relief for Joint Pain & Arthritis (Sandhivata) | Ayurveda Guide",
    description: "Ayurvedic home remedies for arthritis and joint pain. Learn about Mahanarayan Oil, Turmeric Milk, Ginger, and dietary changes to reduce inflammation and Vata.",
    keywords: ["Ayurvedic treatment for joint pain", "home remedy for arthritis", "Mahanarayan oil benefits", "turmeric milk for pain", "Sandhivata ayurveda"],
}

export default function JointPainPage() {
    const tocItems = [
        { id: "intro", label: "Ayurveda & Arthritis" },
        { id: "oil", label: "1. Mahanarayan Oil" },
        { id: "turmeric", label: "2. Golden Milk (Haldi Doodh)" },
        { id: "ginger", label: "3. Ginger & Castor Oil" },
        { id: "fenugreek", label: "4. Fenugreek Seeds" },
        { id: "potli", label: "5. Potli Massage" },
        { id: "conclusion", label: "Conclusion" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Managing Arthritis & Joint Pain Naturally (Sandhivata)
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Joint pain is often a sign of high <strong>Vata</strong> drying up the lubricating fluid (Shleshaka Kapha) in the joints. Ayurveda restores mobility through oiling (Snehana) and heating (Swedana).
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Leaf className="w-6 h-6 text-emerald-600 mr-2" />
                            Why Do Joints Hurt?
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                According to Ayurveda, there are two main types of joint issues:
                            </p>
                            <ul className="list-disc ml-5 space-y-2 mt-4">
                                <li><strong>Sandhivata (Osteoarthritis):</strong> Caused by Vata aggravation leading to dry, cracking joints.</li>
                                <li><strong>Amavata (Rheumatoid Arthritis):</strong> Caused by Ama (toxins) accumulation leading to swollen, painful joints.</li>
                            </ul>
                            <p className="mt-4">The treatment approach differs slightly, but the goal is to reduce inflammation and pain.</p>
                        </div>
                    </section>

                    {/* Remedy 1: Oil Massage */}
                    <section id="oil" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. Massage with Mahanarayan Oil</h2>
                        <Card className="mb-6 bg-orange-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>Mahanarayan Taila</strong> is a legendary Ayurvedic oil enriched with 50+ herbs. Regular massage specifically targets Vata, reduces stiffness, and strengthens muscles around the knee and back.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-orange-200">
                                    <h4 className="font-bold text-orange-900 mb-2">How to use:</h4>
                                    <p className="text-sm text-gray-700">Warm the oil slightly. Massage gently on affected joints for 15 minutes before a bath. Avoid vigorous massage if joints are swollen and red (Amavata).</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Golden Milk */}
                    <section id="turmeric" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Golden Milk (Haldi Doodh)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Internal lubrication is as important as external. Turmeric milk is a potent anti-inflammatory drink. Add a pinch of black pepper to increase absorption of Curcumin.
                        </p>
                    </section>

                    {/* Remedy 3: Ginger & Castor Oil */}
                    <section id="ginger" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Ginger Tea & Castor Oil</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            For <strong>Amavata</strong> (Rheumatoid Arthritis), cleansing the gut is crucial.
                        </p>
                        <ul className="space-y-3 bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> <strong>Ginger Tea:</strong> Sip throughout the day to burn Ama (toxins).</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> <strong>Castor Oil (Erand Taila):</strong> Taking 1 tsp with warm water at night helps flush out toxins and reduce pain.</li>
                        </ul>
                    </section>

                    {/* Remedy 4: Fenugreek */}
                    <section id="fenugreek" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. Fenugreek (Methi) Seeds</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Methi is excellent for joint pain due to its warming anti-inflammatory properties. Swallow 1 tsp of methi seeds with warm water in the morning.
                        </p>
                    </section>

                    {/* Remedy 5: Potli Massage */}
                    <section id="potli" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">5. Potli Massage (Bolus Fomentation)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Make a small bundle (Potli) using a cotton cloth filled with hot salt or sand (for Ama) or herbal powders. Press it gently over painful areas to reduce swelling.
                        </p>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Pain-Free Living is Possible</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Don't just manage pain with painkillers. Heal your joints with an anti-inflammatory diet and Ayurvedic therapies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-emerald-700 transition-all duration-200 bg-white border-2 border-emerald-600 rounded-lg hover:bg-emerald-50"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
