import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Flame, AlertCircle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Home Remedies for Acidity (Amla-Pitta) & Bloating | Ayurveda",
    description: "Cure acidity and heartburn permanently with Ayurveda. Learn about CCF Tea, Pomegranate, and cooling foods to balance Pitta dosha.",
    keywords: ["Ayurvedda for acidity", "Amla pitta treatment", "home remedy for heartburn", "bloating cure ayurveda", "foods to avoid for acidity"],
}

export default function AcidityPage() {
    const tocItems = [
        { id: "intro", label: "Understanding Amla-Pitta" },
        { id: "coconut", label: "1. Coconut Water" },
        { id: "fennel", label: "2. Fennel (Saunf)" },
        { id: "raisins", label: "3. Soak Raisins" },
        { id: "ghee", label: "4. Milk & Ghee" },
        { id: "avoid", label: "Triggers" },
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
                        Home Remedies for Acid Reflux (Amla-Pitta)
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        The burning sensation in your chest is your body screaming "Too much Heat!". In Ayurveda, this is <strong>Amla-Pitta</strong>, an excess of hot and sour qualities in the stomach.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Flame className="w-6 h-6 text-red-600 mr-2" />
                            Cooling the Fire
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Acidity is not just about acid; it's about <strong>Pitta</strong>. When you eat spicy, sour, or fermented foods (like idli/dosa batter left too long), the Pitta in the stomach becomes liquid and sour, causing reflux. The cure is <strong>Cooling (Sheeta)</strong> and <strong>Alkaline</strong> foods.
                            </p>
                        </div>
                    </section>

                    {/* Remedy 1: Coconut Water */}
                    <section id="coconut" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. Tender Coconut Water</h2>
                        <Card className="mb-6 bg-emerald-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Nature's best antacid. It instantly cools the stomach lining and balances pH levels. Drink it first thing in the morning.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Fennel */}
                    <section id="fennel" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Fennel Seeds (Saunf)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Chewing fennel seeds after meals is an Indian tradition for a reason. It aids digestion and its cooling oil neutralizes acid.
                        </p>
                    </section>

                    {/* Remedy 3: Raisins */}
                    <section id="raisins" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Black Raisins (Munakka)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Soak 10-15 black raisins water overnight. Drink the water and eat the raisins in the morning. This reduces Pitta and helps relieve constipation, which is often a root cause of acidity.
                        </p>
                    </section>

                    {/* Remedy 4: Cold Milk */}
                    <section id="ghee" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. Cold Milk & Ghee</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Sipping half a cup of cold milk provides instant relief. Adding 1 tsp of Ghee to warm milk at night coats the stomach lining and protects it from acid attack.
                        </p>
                    </section>

                    {/* Triggers */}
                    <section id="avoid" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Stop Adding Fuel to Fire</h2>
                        <ul className="space-y-3 font-medium text-gray-700">
                            <li className="flex items-center">❌ Sour foods: Yogurt (Curd), Tomatoes, Vinegar, Pickles.</li>
                            <li className="flex items-center">❌ Fermented foods: Idli, Dosa (if sour), Alcohol.</li>
                            <li className="flex items-center">❌ Caffeine: Coffee on an empty stomach.</li>
                            <li className="flex items-center">❌ Skipping meals (Pitta eats the stomach lining if no food is present).</li>
                        </ul>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Eat Right, Feel Light</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Chronic acidity can lead to ulcers. Heal it with a Pitta-pacifying diet.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Diet Plan
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
