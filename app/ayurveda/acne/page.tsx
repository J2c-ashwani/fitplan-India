import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Ban, Droplet } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Acne Treatment: Cure Pimples Permanently | FitPlan India",
    description: "Clear skin from within. Ayurvedic remedies for Yuvana Pidika (Acne). Learn about Neem, Manjistha, and the Pitta-pacifying diet for glowing skin.",
    keywords: ["Ayurveda for acne", "Pimple cure home remedies", "Neem for skin", "Manjistha benefits", "Pitta diet for acne"],
}

export default function AcnePage() {
    const tocItems = [
        { id: "cause", label: "Root Cause" },
        { id: "herbs", label: "Skin Herbs" },
        { id: "diet", label: "Glow Diet" },
        { id: "face-map", label: "Face Mapping" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Yuvana Pidika: The Truth About Acne
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Acne is not just a skin problem; it is a blood problem. Ayurveda calls it <strong>Yuvana Pidika</strong> (Boils of Youth), caused by vitiated <strong>Rakta Dhatu</strong> (Blood) due to excess Pitta.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="cause" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Creams Don't Work</h2>
                        <p className="text-gray-700">
                            Topical creams only suppress the symptom. The root cause is heat in the blood. If you eat spicy food, get angry often, or have constipation, the toxins bubble up to the surface as pimples.
                        </p>
                    </section>

                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Blood Purifiers (Rakta Shodhaka)</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">1. Neem</h3>
                                    <p className="text-gray-700 text-sm">The ultimate antibacterial. Chewing 2-3 bitter Neem leaves on an empty stomach clears bacteria from the blood.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">2. Manjistha</h3>
                                    <p className="text-gray-700 text-sm">The lymphatic cleaner. It unclogs stagnant blood and gives a radiant complexion.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">3. Triphala Water</h3>
                                    <p className="text-gray-700 text-sm">Wash your face with Triphala water instead of soap. It removes oil without overdrying.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="face-map" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Ayurvedic Face Mapping</h2>
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                            <ul className="space-y-3 text-gray-800">
                                <li><strong>Forehead Acne:</strong> Digestive trouble / Constipation. Drink more water.</li>
                                <li><strong>Cheek Acne:</strong> Lung/Respiratory distress or Dirty Pillowcases.</li>
                                <li><strong>Chin/Jawline Acne:</strong> Hormonal imbalance (PCOS/PCOD) or localized pelvic congestion.</li>
                                <li><strong>Nose Acne:</strong> High Blood Pressure or Heart heat (Pitta).</li>
                            </ul>
                        </div>
                    </section>

                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Pimple-Free Diet</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-green-50 rounded-lg">
                                <h4 className="font-bold text-green-900 mb-2">✅ Yes:</h4>
                                <p className="text-sm">Aloe Vera juice, Cucumber, Mint, Coriander, Moong Dal.</p>
                            </div>
                            <div className="p-4 bg-red-50 rounded-lg">
                                <h4 className="font-bold text-red-900 mb-2">❌ No:</h4>
                                <p className="text-sm">Peanuts (high heat), Pickles, Fermented foods, White sugar, Deep-fried snacks.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
