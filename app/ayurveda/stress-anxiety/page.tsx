import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Leaf, Eye, Heart, Brain, Wind } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Natural Herbs & Techniques for Stress & Anxiety | Ayurveda",
    description: "Calm your mind with Ayurveda. Discover adaptogenic herbs like Ashwagandha and Brahmi, Pranayama techniques, and Satvavajaya therapy for mental peace.",
    keywords: ["Ayurveda for anxiety", "Brahmi benefits for brain", "Ashwagandha for stress relief", "Shirodhara therapy", "Pranayama for mental health", "Jatamansi benefits"],
}

export default function StressPage() {
    const tocItems = [
        { id: "mind", label: "The Ayurvedic Mind" },
        { id: "herbs", label: "Medhya Rasayanas" },
        { id: "therapy", label: "Shirodhara & Nuance" },
        { id: "breathing", label: "Pranayama" },
        { id: "faqs", label: "FAQs" },
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
                        Prashanti: The Art of Mental Peace
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Anxiety is described in Ayurveda as <strong>Chittodvega</strong>. It is excessive movement (Vata) in the mind (Manas). The cure lies in stability and grounding.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Ayurvedic Mind */}
                    <section id="mind" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Brain className="w-6 h-6 text-emerald-600 mr-2" />
                            The 3 Gunas of the Mind
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Just as the body has Doshas (Vata, Pitta, Kapha), the mind has Gunas:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mt-4">
                                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-center">
                                    <h4 className="font-bold text-emerald-900">1. Sattva</h4>
                                    <p className="text-sm">Clarity, Balance, Peace. <br />This is the ideal state.</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-center">
                                    <h4 className="font-bold text-orange-900">2. Rajas</h4>
                                    <p className="text-sm">Activity, Passion, Restlessness.<br /><strong>Stress</strong> is excess Rajas.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-center">
                                    <h4 className="font-bold text-gray-900">3. Tamas</h4>
                                    <p className="text-sm">Inertia, Dullness, Depression.<br />Lack of motivation.</p>
                                </div>
                            </div>
                            <p className="mt-4">
                                Ayurvedic therapy aims to increase one's Sattva to overcome Rajas and Tamas.
                            </p>
                        </div>
                    </section>

                    {/* Herbs */}
                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Top 4 Brain Tonics (Medhya Rasayana)</h2>
                        <p className="text-gray-700 mb-6">
                            Nature has provided specific herbs that cross the blood-brain barrier to nourish neurons.
                        </p>

                        <div className="space-y-6">
                            <Card className="bg-stone-50 overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Brahmi (Bacopa Monnieri)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        The "Herb of Grace". It improves communication between brain chemicals (neurotransmitters). It cools the head and improves concentration.
                                    </p>
                                    <div className="text-emerald-700 font-medium text-sm">Best for: Students & Work Burnout.</div>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-50 overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Ashwagandha</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        The ultimate adaptogen. It regulates the HPA axis (Hypothalamus-Pituitary-Adrenal), stopping your body from panic-reacting to every small stressor.
                                    </p>
                                    <div className="text-emerald-700 font-medium text-sm">Best for: General Anxiety & Fatigue.</div>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-50 overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Jatamansi (Spikenard)</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        A hairy root that looks like an ascetic's hair. It increases serotonin and taurine levels, acting as a natural anti-depressant without sedative side effects.
                                    </p>
                                    <div className="text-emerald-700 font-medium text-sm">Best for: Racing thoughts & Insomnia.</div>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-50 overflow-hidden">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Shankhpushpi</h3>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Enhances cognitive function (Medha) and reduces mental fatigue. It helps you retain what you read.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Therapies */}
                    <section id="therapy" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Holistic Therapies</h2>
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 mb-6">
                            <h3 className="text-xl font-bold text-emerald-900 mb-2">Shirodhara</h3>
                            <p className="text-gray-700">
                                The pouring of warm medicated oil on the "Third Eye" point (forehead) in a continuous stream.
                                <br /><strong>Mechanism:</strong> It synchronizes alpha brain waves, inducing a "Turiya" state—deep alertness combined with deep rest. It creates a profound sense of safety.
                            </p>
                        </div>
                    </section>

                    {/* Breathing */}
                    <section id="breathing" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The Breath-Brain Link</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border border-gray-200 p-5 rounded-xl">
                                <h4 className="font-bold text-gray-900 flex items-center mb-2"><Wind className="w-5 h-5 mr-2 text-blue-500" /> Anulom Vilom</h4>
                                <p className="text-sm text-gray-600">Alternate Nostril Breathing. Balances the Left Brain (Logical) and Right Brain (Emotional).</p>
                                <p className="text-xs font-semibold mt-2">Duration: 10 mins daily.</p>
                            </div>
                            <div className="border border-gray-200 p-5 rounded-xl">
                                <h4 className="font-bold text-gray-900 flex items-center mb-2"><Wind className="w-5 h-5 mr-2 text-blue-500" /> Bhramari</h4>
                                <p className="text-sm text-gray-600">Humming Bee Breath. The vibration stimulates the Vagus nerve, switching off the "Fight or Flight" mode.</p>
                                <p className="text-xs font-semibold mt-2">Duration: 5-7 rounds.</p>
                            </div>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Does diet affect mental health?</h4>
                                <p className="text-gray-700 text-sm">Yes. Stale, processed, and meat-heavy (Tamasic) foods dull the mind. Spicy, coffee-heavy (Rajasic) foods agitate it. Fresh, vegetarian, sweet fruits (Sattvic) calm it.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can I combine these herbs with anti-depressants?</h4>
                                <p className="text-gray-700 text-sm"><strong>Consult a doctor.</strong> Herbs like St. John's Wort or large doses of Brahmi can interact with SSRIs. Always keep a 2-hour gap and monitor effects.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: How to stop overthinking?</h4>
                                <p className="text-gray-700 text-sm">Overthinking is Vata. Grounding is key. Walking bare feet on grass (Earthing) or eating warm, heavy foods (Root vegetables, Ghee) helps ground flighty thoughts.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Peace is Your Nature</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Stress is an acquired habit. Peace is your factory setting. Use Ayurveda to do a factory reset.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-emerald-700 transition-all duration-200 bg-white border-2 border-emerald-600 rounded-lg hover:bg-emerald-50"
                            >
                                Talk to a Wellness Expert
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
