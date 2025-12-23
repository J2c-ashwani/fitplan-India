import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Leaf, Flower, Brain } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Manas Roga: Natural Herbs for Stress & Anxiety | Ayurveda",
    description: "Calm your mind with Ayurveda. Discover adaptogenic herbs like Ashwagandha, Brahmi, and Jatamansi to fight anxiety (Chitta Udvega) and stress naturally.",
    keywords: ["Ayurveda for anxiety", "Brahmi benefits for brain", "Ashwagandha for stress", "Jatamansi uses", "calming ayurvedic herbs"],
}

export default function StressPage() {
    const tocItems = [
        { id: "intro", label: "Ayurveda on Mental Health" },
        { id: "brahmi", label: "1. Brahmi" },
        { id: "ashwagandha", label: "2. Ashwagandha" },
        { id: "jatamansi", label: "3. Jatamansi" },
        { id: "shankhpushpi", label: "4. Shankhpushpi" },
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
                        Manas Roga: Calming the Mind with Natural Herbs
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Anxiety is essentially <strong>future-thinking</strong> gone excessive (Vata imbalance). Ayurveda uses 'Medhya Rasayanas' (Brain Tonics) to stabilize the nervous system.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Brain className="w-6 h-6 text-emerald-600 mr-2" />
                            Sattva, Rajas, and Tamas
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Mental health in Ayurveda depends on the three Gunas using. <strong>Sattva</strong> (Clarity), <strong>Rajas</strong> (Activity/Agitation), and <strong>Tamas</strong> (Inertia). Stress is high Rajas. Depression is high Tamas. The goal is to increase Sattva.
                            </p>
                        </div>
                    </section>

                    {/* Remedy 1: Brahmi */}
                    <section id="brahmi" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. Brahmi (Bacopa Monnieri)</h2>
                        <Card className="mb-6 bg-lime-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Named after Lord Brahma (Creator), this herb is the gold standard for intellect and memory. It works by cooling the brain (reducing Pitta) and calming nerves (reducing Vata).
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-lime-200">
                                    <p className="text-sm text-gray-700"><strong>Best for:</strong> People who suffer from burnout, mental fatigue, and lack of concentration.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Ashwagandha */}
                    <section id="ashwagandha" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Ashwagandha</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We've mentioned it for PCOS, but it's equally potent for anxiety. It is an "Adaptogen," meaning it helps your body adapt to stress by regulating cortisol levels. It gives you the "strength of a horse" to handle pressure.
                        </p>
                    </section>

                    {/* Remedy 3: Jatamansi */}
                    <section id="jatamansi" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Jatamansi (Spikenard)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A powerful herb for those with racing thoughts and insomnia. Unlike modern sedatives that make you groggy, Jatamansi promotes a calm, clear state of mind.
                        </p>
                    </section>

                    {/* Remedy 4: Shankhpushpi */}
                    <section id="shankhpushpi" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. Shankhpushpi</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This beautiful blue flower is excellent for nervous tension. It is often given to students during exams to reduce performance anxiety and boost memory recall.
                        </p>
                    </section>


                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Peace of Mind is Natural</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Nature has provided us with everything we need to handle modern stress.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-emerald-700 transition-all duration-200 bg-white border-2 border-emerald-600 rounded-lg hover:bg-emerald-50"
                            >
                                Talk to an Expert
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
