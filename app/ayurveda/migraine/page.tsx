import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, CloudLightning, Coffee } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Cure for Migraine & Headache | FitPlan India",
    description: "Holistic relief for Migraine (Ardhavabhedaka). Learn about Nasya therapy, cooling herbs, and dietary triggers to prevent splitting headaches.",
    keywords: ["Ayurveda for migraine", "Nasya treatment benefits", "Ardhavabhedaka treatment", "Headache home remedies", "Pitta migraine diet"],
}

export default function MigrainePage() {
    const tocItems = [
        { id: "intro", label: "Migraine in Ayurveda" },
        { id: "types", label: "Types of Headache" },
        { id: "remedies", label: "Home Remedies" },
        { id: "nasya", label: "Nasya Therapy" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Ardhavabhedaka: Conquering Migraine
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Migraine is not just a headache; it is a vascular event. Ayurveda calls it <strong>Ardhavabhedaka</strong> (Half-head pain), often triggered by Vata-Pitta imbalance.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="types" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Is your Headache Vata or Pitta?</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-4 bg-indigo-50 rounded-lg">
                                <h4 className="font-bold text-indigo-900">Vata Migraine</h4>
                                <p className="text-sm text-gray-700">Throbbing, pulsating pain. Dryness. Anxiety. Triggered by stress, skipping meals, or lack of sleep.</p>
                            </div>
                            <div className="p-4 bg-red-50 rounded-lg">
                                <h4 className="font-bold text-red-900">Pitta Migraine</h4>
                                <p className="text-sm text-gray-700">Burning, piercing pain. Sensitive to light. Improves with cold packs. Triggered by heat, spicy food, or anger.</p>
                            </div>
                        </div>
                    </section>

                    <section id="remedies" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Instant Relief Remedies</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">1. Ginger Tea</h3>
                                    <p className="text-gray-700 text-sm">Best for Vata headaches. Ginger blocks prostaglandins (pain chemicals). Drink warm with a little jaggery.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">2. Cooling Paste (Lepa)</h3>
                                    <p className="text-gray-700 text-sm">Best for Pitta. Mix sandalwood powder with rose water. Apply on forehead for 20 mins to calm the heat.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">3. Coriander Seed Water</h3>
                                    <p className="text-gray-700 text-sm">The ultimate cooling drink. Soak 1 tsp seeds overnight. Drink in morning. Clears excess Pitta.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="nasya" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Nasya: The Secret Weapon</h2>
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <h4 className="font-bold text-emerald-900 text-xl mb-3">Nasa Hi Shiraso Dwaram</h4>
                            <p className="italic text-emerald-700 mb-4">"The nose is the gateway to the brain."</p>
                            <p className="text-gray-700 mb-4">
                                Nasya involves putting medicated drops in nostrils. It clears the channels of the head and calms the central nervous system.
                            </p>
                            <div className="bg-white p-4 rounded-lg">
                                <strong className="text-emerald-800">Home Nasya Routine:</strong>
                                <ul className="list-disc ml-5 text-sm text-gray-700 mt-2">
                                    <li>Lie down with head tilted back.</li>
                                    <li>Put 2 drops of warm <strong>Anu Taila</strong> or <strong>Pure Ghee</strong> in each nostril.</li>
                                    <li>Sniff deeply. Do this empty stomach in morning.</li>
                                    <li><strong>Result:</strong> Reduces frequency and intensity of migraines significantly.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="triggers" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Food Triggers</h2>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700">
                            <li><strong>Aged Cheeses:</strong> High tyramine content.</li>
                            <li><strong>Chocolate/Caffeine:</strong> Can trigger or relieve, but often triggers withdrawal headaches.</li>
                            <li><strong>Fermented Foods:</strong> Pickles, dosas (sour batter) can aggravate Pitta.</li>
                            <li><strong>Skipping Meals:</strong> Drop in blood sugar is a major trigger.</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    )
}
