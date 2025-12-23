import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Hourglass, Shield, Zap, Sparkles } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Rasayana Therapy: Ayurvedic Anti-Aging Secrets | FitPlan India",
    description: "Reverse aging naturally with Rasayana Therapy. Learn about Ojas, Amla (Chavanprash), and Shilajit to restore youth and immunity.",
    keywords: ["Ayurvedic anti-aging herbs", "Rasayana therapy benefits", "Chavanprash for immunity", "increasing ojas naturally", "shilajit for energy", "rejuvenation therapy india"],
}

export default function AntiAgingPage() {
    const tocItems = [
        { id: "rasayana", label: "What is Rasayana?" },
        { id: "ojas", label: "Ojas: The Vital Nectar" },
        { id: "herbs", label: "Age-Reversal Herbs" },
        { id: "lifestyle", label: "Achara Rasayana" },
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
                        Rasayana: The Science of Age Reversal
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Aging (Jara) is natural, but premature degeneration is not. <strong>Rasayana</strong> is the dedicated branch of Ayurveda focused on regenerating cells, boosting immunity, and extending youth.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Concept of Rasayana */}
                    <section id="rasayana" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Hourglass className="w-6 h-6 text-emerald-600 mr-2" />
                            Rasa + Ayana
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                <strong>'Rasa'</strong> means the nutrient fluid (plasma). <strong>'Ayana'</strong> means the path or circulation.
                                <br />
                                Rasayana therapy clears the channels (srotas) so that nutrients can reach every cell efficiently. It stops the degeneration of tissues.
                            </p>
                        </div>
                    </section>

                    {/* Ojas */}
                    <section id="ojas" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Ojas: The Glow of Youth</h2>
                        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                            <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center"><Sparkles className="w-5 h-5 mr-2" /> The 8th Tissue</h3>
                            <p className="text-gray-700 mb-4">
                                After food nourishes the 7 tissues (Lymph, Blood, Muscle, Fat, Bone, Marrow, Reproductive Fluid), the final essence produced is <strong>Ojas</strong>.
                                <br /><br />
                                High Ojas = Radiant skin, strong immunity, endless energy.
                                <br />
                                Low Ojas = Weakness, anxiety, dullness.
                            </p>
                            <div className="font-semibold text-amber-800">
                                Rasayana Herbs rebuild Ojas.
                            </div>
                        </div>
                    </section>

                    {/* Herbs */}
                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The Elixirs of Life</h2>

                        <div className="space-y-8">
                            {/* Herb 1 */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-emerald-100 p-4 rounded-full min-w-[60px] text-center font-bold text-emerald-900 text-xl">1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Amalaki (Chavanprash)</h3>
                                    <p className="text-gray-700 mb-2">
                                        The main ingredient in Chavanprash. Amla is the only fruit that balances all 3 Doshas. It is the highest source of Vitamin C (anti-oxidant) in the plant kingdom.
                                    </p>
                                    <div className="text-sm bg-stone-50 inline-block px-3 py-1 rounded border">
                                        <strong>Ritual:</strong> 1 tsp Chavanprash every morning on empty stomach.
                                    </div>
                                </div>
                            </div>

                            {/* Herb 2 */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-stone-100 p-4 rounded-full min-w-[60px] text-center font-bold text-stone-900 text-xl">2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Shilajit (Destroyer of Weakness)</h3>
                                    <p className="text-gray-700 mb-2">
                                        A mineral pitch found in the Himalayas. It is packed with Fulvic Acid, which carries minerals directly into cells (mitochondria) to produce energy. It boosts stamina and libido.
                                    </p>
                                    <div className="text-sm bg-stone-50 inline-block px-3 py-1 rounded border">
                                        <strong>Ritual:</strong> Pea-sized resin in warm milk.
                                    </div>
                                </div>
                            </div>

                            {/* Herb 3 */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-green-100 p-4 rounded-full min-w-[60px] text-center font-bold text-green-900 text-xl">3</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Guduchi (Amrita)</h3>
                                    <p className="text-gray-700 mb-2">
                                        Called "Amrita" (Nectar of Immortality). It is a powerful immunomodulator. It detoxifies the body while strengthening it, a rare combination.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Achara Rasayana */}
                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Achara Rasayana (Behavioral Anti-Aging)</h2>
                        <p className="text-gray-700 mb-6">
                            Ayurveda says you can get the benefits of herbs just by your behavior. Stress ages you faster than bad food.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-bold text-blue-900 mb-2">The Youth Code:</h4>
                                <ul className="text-sm text-gray-700 space-y-2">
                                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> <strong>Satyavadi:</strong> Speaking the truth (reduces mental conflict).</li>
                                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> <strong>Akrodha:</strong> Freedom from anger (Pitta burns cells).</li>
                                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> <strong>Nivritta:</strong> Avoiding alcohol and excessive sex.</li>
                                </ul>
                            </div>
                            <div className="bg-stone-50 p-4 rounded-lg flex items-center justify-center text-center">
                                <p className="italic text-gray-600">"One who remains calm, eats wholesome food, and shares with others, lives for a 100 years."</p>
                            </div>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: When should I start Rasayana?</h4>
                                <p className="text-gray-700 text-sm">Ideally, after any detox (Panchakarma). The body absorbs tonics best when its channels are clean. However, daily herbs like Amla can be started anytime.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Is Shilajit only for men?</h4>
                                <p className="text-gray-700 text-sm">Myth. Shilajit is excellent for women too, especially for energy levels, bone density, and slowing down aging. However, pregnant women should avoid it.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can I eat Chavanprash in Summer?</h4>
                                <p className="text-gray-700 text-sm">Traditionally, it is a winter tonic because it is heating. In summer, you can switch to <strong>Amalaki Rasayana</strong> (pure Amla powder) which is cooling.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Add Life to Your Years</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            You cannot stop the clock, but you can definitely slow it down.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/ayurveda/home-detox"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Start with a Home Detox
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
