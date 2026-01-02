import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Smile, Shield, Sun } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurveda for Kids: Natural Immunity & Growth | FitPlan India",
    description: "Boost your child's immunity and brain power with Ayurveda. Safe home remedies for cough, cold, and memory (Suvarna Prashan) for children.",
    keywords: ["Ayurveda for kids immunity", "Home remedies for child cough", "Suvarna Prashan benefits", "Ayurvedic diet for children", "Brahmi for memory"],
}

export default function KidsHealthPage() {
    const tocItems = [
        { id: "kapha", label: "The Kapha Age" },
        { id: "immunity", label: "Boosting Immunity" },
        { id: "memory", label: "Brain Power" },
        { id: "diet", label: "Food for Growth" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Bala Roga: Ayurveda for Little Ones
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Childhood is the phase of construction. Building strong tissues (Dhatus) and immunity (Ojas) now ensures a lifetime of health.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="kapha" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Kapha Phase</h2>
                        <p className="text-gray-700">
                            From birth to puberty, children are naturally dominant in <strong>Kapha Dosha</strong> (Earth + Water). This is needed for growth (building mass), but it also means they are prone to Kapha issues like <strong>Mucus, Colds, Congestion, and Worms</strong>.
                        </p>
                    </section>

                    <section id="immunity" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Fighting Frequent Colds</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">1. Turmeric Milk</h3>
                                    <p className="text-gray-700 text-sm">Best antibiotic. Give warm with a pinch of pepper (to dry mucus) and honey.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">2. Tulsi Drops</h3>
                                    <p className="text-gray-700 text-sm">Boil 5 tulsi leaves in water. Give this 'Holy Water' daily to prevent viral fevers.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">3. Suvarna Prashan</h3>
                                    <p className="text-gray-700 text-sm">The "Ayurvedic Vaccine". Micro-doses of gold ash with ghee/honey. Proven to boost physical and mental immunity.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="memory" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Brain Boosters (Medhya Rasayana)</h2>
                        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-indigo-200 p-2 rounded mr-3">🧠</div>
                                    <div>
                                        <strong className="text-indigo-900">Brahmi:</strong>
                                        <p className="text-sm text-gray-700">Improves retention and recall. Available as syrups (Brahmi Ghrita).</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-indigo-200 p-2 rounded mr-3">🥜</div>
                                    <div>
                                        <strong className="text-indigo-900">Almonds & Walnuts:</strong>
                                        <p className="text-sm text-gray-700">Look like the brain, good for the brain. Soak 2 almonds overnight and peel skin before giving.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dietary Rules for Kids</h2>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700">
                            <li><strong>No Cold Milk:</strong> Always boil milk with a pinch of ginger/cardamom to make it digestible. Cold milk causes snot.</li>
                            <li><strong>Limit Sugar:</strong> Refined sugar feeds worms and causes hyperactivity. Use Jaggery or Honey.</li>
                            <li><strong>Early Dinner:</strong> Kids digest slowly at night. Heavy dinners lead to cough in the morning.</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    )
}
