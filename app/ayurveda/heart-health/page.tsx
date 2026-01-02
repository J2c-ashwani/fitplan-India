import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Activity, Zap } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Heart Health: Hridaya Roga Management | FitPlan India",
    description: "Protect your heart naturally. Learn about Arjun Chhal, stress management, and heart-healthy diet tips from Ayurveda to prevent cardiac issues.",
    keywords: ["Ayurveda for heart health", "Arjun chhal benefits", "Hridaya roga treatment", "Natural cholesterol control", "Yoga for heart"],
}

export default function HeartPage() {
    const tocItems = [
        { id: "intro", label: "The Heart in Ayurveda" },
        { id: "herbs", label: "Arjuna the Protector" },
        { id: "cholesterol", label: "Managing Cholesterol" },
        { id: "lifestyle", label: "Heart Lifestyle" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Hridaya: The Seat of Consciousness
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Ayurveda views the heart not just as a pump, but as the seat of <strong>Ojas</strong> (Vitality) and <strong>Prana</strong> (Life Force). Emotional health is as vital as physical health for the heart.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Emotional & Physical Heart</h2>
                        <p className="text-gray-700">
                            Heart diseases are often linked to <strong>Sadhaka Pitta</strong> (emotional processing) and <strong>Vyana Vata</strong> (circulatory force). Suppressed emotions (grief, anger) dry up Ojas and strain the heart.
                        </p>
                    </section>

                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Arjuna: The Hero Herb</h2>
                        <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-100">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Arjuna (Terminalia Arjuna)</h3>
                            <p className="text-emerald-800 mb-4">
                                Ancient texts claim Arjuna was named after the warrior prince because it protects the heart just as Arjuna protected his family. It is a cardiac tonic that strengthens heart muscles, reduces blood pressure, and clears arterial plaque.
                            </p>
                            <div className="bg-white p-4 rounded-lg inline-block">
                                <strong className="text-emerald-700">How to use (Arjuna Ksheerapak):</strong>
                                <p className="text-sm text-gray-600 mt-1">Boil 1 tsp Arjuna bark powder in 1 cup milk + 1 cup water until it reduces to 1 cup. Drink daily at bedtime.</p>
                            </div>
                        </div>
                    </section>

                    <section id="cholesterol" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Natural Cholesterol Control</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">1. Garlic (Lashuna)</h3>
                                    <p className="text-sm text-gray-700">Crush 1 clove and eat raw in morning. It thins the blood naturally and reduces bad cholesterol (LDL).</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">2. Guggul</h3>
                                    <p className="text-sm text-gray-700">A resin that scrapes away fat (Lekhana) from the channels/arteries.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">3. Cinnamon</h3>
                                    <p className="text-sm text-gray-700">Reduces triglycerides and blood sugar.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2">4. Flaxseeds</h3>
                                    <p className="text-sm text-gray-700">High in Omega-3 fatty acids which clean the arteries.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Heart-Healthy Lifestyle</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <Heart className="w-5 h-5 text-red-500 mr-3 mt-1" />
                                <div><strong>Pranayama (Anulom Vilom):</strong> Balances the nervous system and reduces blood pressure immediately.</div>
                            </li>
                            <li className="flex items-start">
                                <Activity className="w-5 h-5 text-red-500 mr-3 mt-1" />
                                <div><strong>Limit Salt:</strong> Salt increases water retention and BP. Use Rock Salt (Sendha Namak) instead of refined salt.</div>
                            </li>
                            <li className="flex items-start">
                                <Zap className="w-5 h-5 text-red-500 mr-3 mt-1" />
                                <div><strong>Manage Anger:</strong> Pitta emotions overheat the blood. Practice cooling foods (Melons, Cucumber) and meditation.</div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
