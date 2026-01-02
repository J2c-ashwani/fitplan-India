import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Sun } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Body Polishing: Udvartana at Home | FitPlan India",
    description: "Get glowing skin and burn fat with Udvartana (Herbal Scrub). DIY Ayurvedic body polishing recipes using Triphala and Besan.",
    keywords: ["Udvartana benefits", "Ayurvedic body polishing", "Weight loss massage", "Natural body scrub recipe", "Glowing skin ayurveda"],
}

export default function BodyPolishingPage() {
    const tocItems = [
        { id: "what-is", label: "What is Udvartana?" },
        { id: "benefits", label: "Benefits" },
        { id: "recipe", label: "DIY Scrub Recipe" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Udvartana: The Royal Body Polish
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Udvartana is unlike a regular spa scrub. It is a therapeutic **upward** massage with herbal powders that breaks down visceral fat (Kapha) and gives the skin a diamond-like glow.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="what-is" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dry vs. Oily Scrub</h2>
                        <p className="text-gray-700 mb-4">
                            There are two types:
                        </p>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700">
                            <li><strong>Ruksha (Dry):</strong> Pure powder massage. Best for Weight Loss and Reducing Cellulite.</li>
                            <li><strong>Snigdha (Oily):</strong> Powder mixed with oil. Best for Dry Skin and Glow.</li>
                        </ul>
                    </section>

                    <section id="benefits" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Why Do It?</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">1. Melts Cellulite</h3>
                                    <p className="text-gray-700 text-sm">The friction heat generated dissolves stagnation in the lymphatic system.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">2. Exfoliates Dead Skin</h3>
                                    <p className="text-gray-700 text-sm">Removes dead cells naturally without abrasive chemicals, leaving skin baby soft.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">3. Improves Circulation</h3>
                                    <p className="text-gray-700 text-sm">Opens the pores and allows the skin to breathe.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="recipe" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">DIY Home Ubtan Recipe</h2>
                        <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                            <h4 className="font-bold text-amber-900 text-xl mb-4">The "Golden Glow" Mix</h4>
                            <ul className="list-disc ml-5 space-y-2 text-gray-800 mb-4">
                                <li><strong>Chickpea Flour (Besan):</strong> 4 tbsp (Base)</li>
                                <li><strong>Wild Turmeric (Kasturi Manjal):</strong> 1 tsp (Antiseptic/Glow)</li>
                                <li><strong>Triphala Powder:</strong> 1 tbsp (Detox)</li>
                                <li><strong>Sandalwood Powder:</strong> 1 tsp (Cooling/Fragrance)</li>
                                <li><strong>Rose Water/Milk:</strong> To make a paste</li>
                            </ul>
                            <p className="text-sm text-gray-700 italic">
                                <strong>Ritual:</strong> Apply entire paste on body. Let it semi-dry. Rub off in **upward** strokes (towards the heart) vigorously. Shower with warm water. No soap needed!
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
