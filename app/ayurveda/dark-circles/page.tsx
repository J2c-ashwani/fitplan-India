import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Eye } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Remove Dark Circles Naturally | Ayurvedic Under-Eye Care",
    description: "Ayurvedic home remedies for dark circles. Treat the root cause of under-eye bags with Saffron, Aloe Vera, and proper sleep hygiene.",
    keywords: ["Ayurveda for dark circles", "Under eye home remedies", "Kumkumadi oil benefits", "Remove dark circles permanently"],
}

export default function DarkCirclesPage() {
    const tocItems = [
        { id: "cause", label: "The Root Cause" },
        { id: "remedies", label: "Magical Lepas" },
        { id: "lifestyle", label: "Eye Habits" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Brighten Your Eyes: The Natural Way
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Dark circles are not just cosmetic; they signal **Rasa Dhatu Kshaya** (Depletion of nutrient plasma) or deep-seated stress and dehydration.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="cause" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">It's Not Just Lack of Sleep</h2>
                        <p className="text-gray-700">
                            While sleep is key, dark circles also come from:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-700">
                            <li><strong>Anemia:</strong> Low iron means less oxygen to the thin skin under eyes.</li>
                            <li><strong>Dehydration:</strong> Makes skin sink, revealing blood vessels.</li>
                            <li><strong>Digital Strain:</strong> Constant staring causes blood pooling around eyes.</li>
                        </ul>
                    </section>

                    <section id="remedies" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Under-Eye Elixirs</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">1. Kumkumadi Tailam</h3>
                                    <p className="text-gray-700 text-sm">The "Gold Oil". Contains Saffron (Kesar). Gently massaging 1 drop under each eye before bed lightens pigmentation miraculously.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">2. Cooling Packs</h3>
                                    <p className="text-gray-700 text-sm">Place slices of **Cucumber** or cotton pads soaked in **Rose Water** for 10 mins. It constricts blood vessels and reduces puffiness.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">3. Badam Rogan (Almond Oil)</h3>
                                    <p className="text-gray-700 text-sm">Rich in Vitamin E. Regular massage improves blood circulation and skin elasticity.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Netra Tarpana (Eye Care)</h2>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <ul className="space-y-4 text-gray-800">
                                <li><strong>The 20-20-20 Rule:</strong> Every 20 mins, look 20 feet away for 20 seconds. Breaks the strain.</li>
                                <li><strong>Hydrate:</strong> Drink 3L water. Plump skin hides dark circles.</li>
                                <li><strong>Sleep by 10 PM:</strong> The hours before midnight are double the value for recovery.</li>
                            </ul>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
