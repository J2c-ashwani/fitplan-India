import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Moon } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Reverse Gray Hair Naturally | Ayurvedic Palitya Treatment",
    description: "Prevent premature graying (Palitya). Ayurvedic remedies using Bhringraj, Amla, and Nasya to restore natural hair color.",
    keywords: ["Ayurveda for gray hair", "Premature graying cure", "Bhringraj oil benefits", "Amla for hair blackening", "Nasya for hair"],
}

export default function GrayHairPage() {
    const tocItems = [
        { id: "cause", label: "Why Hair Turns Gray" },
        { id: "remedies", label: "Color Restoring Herbs" },
        { id: "nasya", label: "Nasya Treatment" },
        { id: "diet", label: "Melanin Diet" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Palitya: Reversing the Gray
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Premature graying is a sign of <strong>High Pitta</strong> in the body. The excess heat burns out the melanin pigment in the hair follicles.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="cause" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The "Burnout" Effect</h2>
                        <p className="text-gray-700">
                            Just as stress burns you out, internal heat burns your hair. Contributing factors include:
                        </p>
                        <ul className="list-disc ml-5 mt-2 text-gray-700">
                            <li>Excessive anger/stress (Pitta emotions).</li>
                            <li>Hot showers on the head (weakens roots).</li>
                            <li>Eating too many spicy/salty foods.</li>
                            <li>Late nights (disturbs Pitta time: 10 PM - 2 AM).</li>
                        </ul>
                    </section>

                    <section id="remedies" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The Black Gold Herbs</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">1. Bhringraj</h3>
                                    <p className="text-gray-700 text-sm">"The King of Hair". Massaging the scalp with Bhringraj oil cools the head and stimulates pigment production. It is the #1 remedy for graying.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">2. Amla (Indian Gooseberry)</h3>
                                    <p className="text-gray-700 text-sm">Rich in Vitamin C and antioxidants. Eating one Amla daily prevents the oxidative stress that causes aging/graying.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">3. Curry Leaves</h3>
                                    <p className="text-gray-700 text-sm">Boil curry leaves in coconut oil until they turn black. Apply this oil. It is packed with B-vitamins and beta-carotene.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="nasya" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Nasya for Hair?</h2>
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <p className="text-gray-700 mb-4">
                                Yes! Putting **Anu Taila** (medicated oil) drops in the nose is the fastest way to reach the hair roots via the brain.
                            </p>
                            <p className="text-sm text-gray-600">
                                <strong>How to:</strong> Put 2 drops in each nostril every morning. This clears excess heat from the head region and nourishes the sensory organs.
                            </p>
                        </div>
                    </section>

                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Melanin-Boosting Diet</h2>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700">
                            <li><strong>Black Sesame Seeds:</strong> Traditional remedy. Eat 1 tsp daily (roasted).</li>
                            <li><strong>Copper Water:</strong> Store water in a copper vessel overnight. Copper is essential for melanin synthesis.</li>
                            <li><strong>Iron-Rich Foods:</strong> Dates, Figs, and Leafy Greens. Anemia often leads to graying.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
