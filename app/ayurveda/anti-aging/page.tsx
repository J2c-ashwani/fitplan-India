import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Hourglass, Star } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Rasayana: Ancient Secrets for Youthful Aging | Anti-Aging Ayurveda",
    description: "Stay young with Rasayana Therapy. Discover Chavanprash, Triphala, and Amalaki for longevity, immunity, and cellular rejuvenation.",
    keywords: ["Ayurveda for anti aging", "Rasayana therapy", "Chavanprash benefits", "Amalaki rasayana", "natural longevity secrets"],
}

export default function AntiAgingPage() {
    const tocItems = [
        { id: "intro", label: "What is Rasayana?" },
        { id: "amalaki", label: "1. Amalaki (Amla)" },
        { id: "chavanprash", label: "2. Chavanprash" },
        { id: "triphala", label: "3. Triphala" },
        { id: "shilajit", label: "4. Shilajit" },
        { id: "lifestyle", label: "Achara Rasayana" },
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
                        Rasayana: Ancient Secrets for Youthful Aging
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Aging is natural, but decaying is not. <strong>Rasayana</strong> (Rejuvenation Therapy) is one of the eight branches of Ayurveda dedicated to slowing down aging and maintaining vitality.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Hourglass className="w-6 h-6 text-emerald-600 mr-2" />
                            The Science of Rejuvenation
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Rasa (Nutrient Fluid) + Ayana (Path) = Rasayana. <br />
                                It ensures that nutrition reaches every single cell in your body, repairing damage and boosting <strong>Ojas</strong> (Vital Immunity). It's not just about looking young; it's about sharp memory, strong bones, and boundless energy.
                            </p>
                        </div>
                    </section>

                    {/* Remedy 1: Amalaki */}
                    <section id="amalaki" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. Amalaki (Indian Gooseberry)</h2>
                        <Card className="mb-6 bg-lime-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    The most potent rejuvenating herb in the world. It is the richest source of heat-stable Vitamin C and antioxidants. It is Tridoshic, meaning it balances everything.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-lime-200">
                                    <p className="text-sm text-gray-700"><strong>Daily Habit:</strong> Eat one fresh Amla or drink 20ml juice every morning to keep wrinkles and grey hair away.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Chavanprash */}
                    <section id="chavanprash" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Chavanprash: The Elixir of Life</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Legend says this formula was created by the Ashwini Kumars (Celestial Physicians) to make the old sage Chyavana young again. It contains 40+ herbs with Amla as the base. It boosts immunity and lung strength.
                        </p>
                    </section>

                    {/* Remedy 3: Triphala */}
                    <section id="triphala" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Triphala</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            "No mother? Do not worry if you have Triphala." It cares for your internal organs like a mother. <br />
                            A mixture of Amla, Haritaki, and Bibhitaki. It is powerful antioxidant and colon cleanser. Regular use prevents age-related diseases.
                        </p>
                    </section>

                    {/* Remedy 4: Shilajit */}
                    <section id="shilajit" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. Shilajit</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The "Destroyer of Weakness". Found in the Himalayas, this mineral pitch is rich in Fulvic Acid. It boosts mitochondrial energy production, making you feel decades younger.
                        </p>
                    </section>

                    {/* Achara Rasayana */}
                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Achara Rasayana (Behavioral Rejuvenation)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You don't just need herbs. Your behavior can age you or rejuvenate you.
                        </p>
                        <ul className="space-y-3 font-medium text-gray-700">
                            <li className="flex items-center"><Star className="w-5 h-5 text-emerald-600 mr-2" /> Truthfulness (Satya) - Removes mental stress.</li>
                            <li className="flex items-center"><Star className="w-5 h-5 text-emerald-600 mr-2" /> Calmness (Akrodha) - Being free from anger preserves Ojas.</li>
                            <li className="flex items-center"><Star className="w-5 h-5 text-emerald-600 mr-2" /> Cleanliness (Saucha).</li>
                        </ul>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Age Gracefully</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Add life to your years, not just years to your life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/weight-loss"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Healthy Living Plan
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
