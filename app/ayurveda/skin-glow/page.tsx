import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Sparkles, Smile } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Varnya Herbs: Natural Solutions for Acne & Radiance | Ayurvedic Skincare",
    description: "Get glowing skin naturally with Ayurveda. Learn about Kumkumadi Tailam, Neem, Turmeric, and face mapping for acne treatment.",
    keywords: ["Ayurveda for glowing skin", "Kumkumadi oil benefits", "neem for acne", "ayurvedic face pack", "pitta dosha skin map"],
}

export default function SkinPage() {
    const tocItems = [
        { id: "intro", label: "Skin & Doshas" },
        { id: "neem", label: "1. Neem & Turmeric" },
        { id: "kumkumadi", label: "2. Kumkumadi Tailam" },
        { id: "sandalwood", label: "3. Sandalwood (Chandan)" },
        { id: "aloe", label: "4. Aloe Vera (Kumari)" },
        { id: "detox", label: "Internal Detox" },
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
                        Varnya Herbs: Natural Solutions for Acne & Radiance
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Beautiful skin isn't made in a lab; it's grown in nature. Ayurveda treats skin issues (Kustha) by purifying the blood (Rakta Dhatu) and balancing the Pitta dosha.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Sparkles className="w-6 h-6 text-emerald-600 mr-2" />
                            What is your Skin Type?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-2">Vata Skin</h4>
                                <p className="text-sm text-blue-800">Dry, thin, cold. Prone to wrinkles.</p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                                <h4 className="font-bold text-red-900 mb-2">Pitta Skin</h4>
                                <p className="text-sm text-red-800">Sensitive, oily T-zone. Prone to acne & redness.</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                <h4 className="font-bold text-green-900 mb-2">Kapha Skin</h4>
                                <p className="text-sm text-green-800">Oily, thick, large pores. Prone to cystic acne.</p>
                            </div>
                        </div>
                    </section>

                    {/* Remedy 1: Neem */}
                    <section id="neem" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. Neem & Turmeric: The Acne Killers</h2>
                        <Card className="mb-6 bg-emerald-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Neem is the ultimate blood purifier. Turmeric is the ultimate anti-inflammatory. Together, they clear bacterial infections causing acne.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-emerald-200">
                                    <p className="text-sm text-gray-700"><strong>DIY Mask:</strong> Mix Neem powder + Pinch of Turmeric + Rose Water. Apply for 15 mins. Wash off with cool water. (Great for Pitta/Kapha skin).</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Kumkumadi */}
                    <section id="kumkumadi" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Kumkumadi Tailam: The Golden Elixir</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Made with <strong>Saffron (Kesar)</strong>, this magical oil improves complexion, reduces dark circles, and fades acne scars. It is known as a <i>Varnya</i> (Radiance enhancing) formulation.
                        </p>
                    </section>

                    {/* Remedy 3: Sandalwood */}
                    <section id="sandalwood" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Sandalwood (Chandan)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If your skin is red, irritated, or burning (Pitta imbalance), Sandalwood is the cure. It is extremely cooling and soothing.
                        </p>
                    </section>

                    {/* Remedy 4: Aloe Vera */}
                    <section id="aloe" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. Aloe Vera (Kumari)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Known as "Kumari" (Young Girl) because it preserves youth. It triggers collagen production and hydrates dry Vata skin without making it oily.
                        </p>
                    </section>

                    {/* Diet */}
                    <section id="detox" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Clear Skin Diet</h2>
                        <ul className="space-y-3 font-medium text-gray-700">
                            <li className="flex items-center">❌ Avoid sour/spicy foods (Pickles, Chili) - they increase Pitta.</li>
                            <li className="flex items-center">✅ Drink 3 liters of water.</li>
                            <li className="flex items-center">✅ Eat seasonal fruits (Pomegranate, Grapes).</li>
                            <li className="flex items-center">✅ Avoid refined sugar (Glycation ages skin).</li>
                        </ul>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Glow from Within</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Skincare is self-care. Treat your skin as a sacred organ.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Skin Detox Diet
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
