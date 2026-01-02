import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Sun, Activity, Zap } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Immunity Booster: Build Ojas Naturally | FitPlan India",
    description: "Strengthen your immune system with Ayurveda. Learn about Ojas, Chyawanprash, Golden Milk, and Giloy to fight infections naturally.",
    keywords: ["Ayurveda immunity booster", "What is Ojas", "Chyawanprash benefits", "Golden milk recipe", "Giloy for immunity"],
}

export default function ImmunityPage() {
    const tocItems = [
        { id: "ojas", label: "The Concept of Ojas" },
        { id: "foods", label: "Ojas Building Foods" },
        { id: "herbs", label: "Immunity Herbs" },
        { id: "habits", label: "Lifestyle Habits" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Building Ojas: The Essence of Immunity
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        In Ayurveda, immunity is not just fighting germs; it is the presence of <strong>Ojas</strong>—the subtle essence of all body tissues that gives you vitality and glow.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="ojas" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Ojas?</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ojas is the final byproduct of perfect digestion. Imagine it as the honey created from the nectar of food. When your digestion (Agni) is strong, you produce Ojas. When it is weak, you produce Ama (toxins). High Ojas means you rarely get sick, have glowing skin, and a stable mind.
                        </p>
                    </section>

                    <section id="foods" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Top 5 Ojas-Building Foods</h2>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                                <div className="text-3xl mb-2">🥛</div>
                                <h4 className="font-bold text-gray-800">Ghee</h4>
                            </div>
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                                <div className="text-3xl mb-2">🥜</div>
                                <h4 className="font-bold text-gray-800">Almonds</h4>
                                <p className="text-xs text-gray-500">(Soaked)</p>
                            </div>
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                                <div className="text-3xl mb-2">🍯</div>
                                <h4 className="font-bold text-gray-800">Honey</h4>
                                <p className="text-xs text-gray-500">(Raw)</p>
                            </div>
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                                <div className="text-3xl mb-2">🥣</div>
                                <h4 className="font-bold text-gray-800">Dates</h4>
                            </div>
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                                <div className="text-3xl mb-2">🥬</div>
                                <h4 className="font-bold text-gray-800">Mung Beans</h4>
                            </div>
                        </div>
                    </section>

                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The Immunity Powerhouses</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">1. Chyawanprash</h3>
                                    <p className="text-gray-700 text-sm">The original immunity jam used for thousands of years. It is based on Amla (Vitamin C) and 40+ herbs. 1 tsp daily offers 360-degree protection.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">2. Giloy (Guduchi)</h3>
                                    <p className="text-gray-700 text-sm">Described as "Amrita" (Nectar of Immortality). It fights chronic fevers and boosts white blood cell counts.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">3. Turmeric Milk (Haldi Doodh)</h3>
                                    <p className="text-gray-700 text-sm">Not just a trend. Curcumin is a potent anti-viral. Drink warm milk with 1/2 tsp turmeric + pinch of black pepper (essential for absorption).</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">4. Mulethi (Liquorice)</h3>
                                    <p className="text-gray-700 text-sm">Excellent for respiratory immunity. Soothes sore throats and strengthens lungs.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="habits" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Ojas-Destroying Habits</h2>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6">
                            <ul className="list-disc ml-5 space-y-2 text-red-900">
                                <li><strong>Excessive Stress:</strong> Worry dries up Ojas immediately.</li>
                                <li><strong>Lack of Sleep:</strong> The body repairs and builds immunity during sleep.</li>
                                <li><strong>Processed Food:</strong> Creates Ama (toxins) which blocks Ojas.</li>
                                <li><strong>Overexertion:</strong> Working beyond your capacity drains vitality.</li>
                            </ul>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
