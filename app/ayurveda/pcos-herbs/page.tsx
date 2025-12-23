import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Leaf, AlertCircle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "5 Essential Ayurvedic Herbs for PCOS Management | FitPlan India",
    description: "Struggling with PCOS? Discover how Ashwagandha, Shatavari, Cinnamon, and other Ayurvedic herbs can help balance hormones naturally. Medically reviewed expert guide.",
    keywords: ["Ayurvedic treatment for PCOS", "Ashwagandha for PCOS", "Shatavari benefits women", "natural PCOS cure", "hormonal balance ayurveda", "cinnamon for pcos"],
}

export default function PCOSPage() {
    const tocItems = [
        { id: "intro", label: "Understanding PCOS" },
        { id: "ashwagandha", label: "1. Ashwagandha" },
        { id: "shatavari", label: "2. Shatavari" },
        { id: "cinnamon", label: "3. Cinnamon (Dalchini)" },
        { id: "turmeric", label: "4. Turmeric (Haldi)" },
        { id: "guduchi", label: "5. Guduchi (Giloy)" },
        { id: "lifestyle", label: "Lifestyle Changes" },
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
                        5 Essential Ayurvedic Herbs for PCOS Management
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Polycystic Ovary Syndrome (PCOS) affects 1 in 5 Indian women. While modern medicine manages symptoms, Ayurveda targets the root cause—hormonal imbalance and sluggish metabolism (Agni).
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Leaf className="w-6 h-6 text-emerald-600 mr-2" />
                            Understanding PCOS from an Ayurvedic Lens
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                In Ayurveda, PCOS is often correlated with <strong>Aarthava Kshaya</strong> or imbalances in the <strong>Kapha</strong> dosha. When Kapha increases, it slows down metabolism (Agni) and clogs the channels (Srotas) in the ovarian area.
                            </p>
                            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 my-6 rounded-r-lg">
                                <p className="font-semibold text-emerald-900 m-0">Key Ayurvedic Goals for PCOS:</p>
                                <ul className="list-disc ml-5 mt-2 space-y-1 text-emerald-800">
                                    <li>Reduce Kapha (excess weight and sluggishness).</li>
                                    <li>Balance Vata (regulate menstrual flow).</li>
                                    <li>Clear Ama (toxins) from reproductive channels.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Herb 1: Ashwagandha */}
                    <section id="ashwagandha" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. Ashwagandha: The Stress Buster</h2>
                        <Card className="mb-6 bg-stone-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Stress is a major trigger for PCOS symptoms. <strong>Ashwagandha</strong> <i>(Withania somnifera)</i> is a powerful adaptogen that helps lower cortisol (stress hormone) levels. High cortisol is often linked to insulin resistance and weight gain in PCOS women.
                                </p>
                                <h4 className="font-bold text-gray-900 mt-4 mb-2">Benefits:</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Reduces stress-induced hormonal imbalances.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Improves sleep quality and energy levels.</li>
                                    <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Supports healthy blood sugar levels.</li>
                                </ul>
                                <div className="mt-4 text-sm text-gray-500">
                                    <strong>How to take:</strong> 1/2 tsp of Ashwagandha powder with warm water or moon milk before bed.
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Herb 2: Shatavari */}
                    <section id="shatavari" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Shatavari: The Reproductive Tonic</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Known as the "Queen of Herbs", <strong>Shatavari</strong> <i>(Asparagus racemosus)</i> is the ultimate rejuvenator for the female reproductive system. It helps in regularizing the menstrual cycle by nourishing the ovaries.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-pink-50 p-6 rounded-xl">
                                <h4 className="font-bold text-pink-900 mb-2">Why it works?</h4>
                                <p className="text-sm text-pink-800">It contains phytoestrogens which help balance estrogen levels naturally, combating the high androgens (male hormones) often seen in PCOS.</p>
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-xl">
                                <h4 className="font-bold text-emerald-900 mb-2">Best for?</h4>
                                <p className="text-sm text-emerald-800">Women facing irregular periods, mood swings, or trying to conceive.</p>
                            </div>
                        </div>
                    </section>

                    {/* Herb 3: Cinnamon */}
                    <section id="cinnamon" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Cinnamon (Dalchini): Insulin Regulator</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A common kitchen spice with uncommon benefits. Many women with PCOS suffer from <strong>Insulin Resistance</strong>, leading to weight gain and dark patches on the skin. Cinnamon improves the body's sensitivity to insulin.
                        </p>
                        <ul className="space-y-3 bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Helps lower blood sugar spikes after meals.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Boosts metabolism and aids in weight loss.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> <strong>Tip:</strong> Sprinkle Ceylon cinnamon on your oatmeal or tea.</li>
                        </ul>
                    </section>

                    {/* Herb 4: Turmeric */}
                    <section id="turmeric" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. Turmeric (Haldi): The Inflammatory Fighter</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            PCOS is a state of chronic low-grade inflammation. <strong>Curcumin</strong>, the active compound in Turmeric, is a potent anti-inflammatory agent. It helps detoxify the liver and improves complexion (Varnya).
                        </p>
                    </section>

                    {/* Herb 5: Guduchi */}
                    <section id="guduchi" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">5. Guduchi (Giloy): The Immunity Booster</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Often called 'Amrita' (nectar of immortality), Guduchi is a Tridoshic herb (balances Vata, Pitta, and Kapha). It is particularly effective for women with PCOS who experience chronic fatigue and weak immunity.
                        </p>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Start Your Holistic Healing Journey</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            While herbs are powerful, they work best when combined with the right diet (Ahaar) and lifestyle (Vihaar). Get a personalized roadmap for your health.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/pcos"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get PCOS Diet Plan <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-emerald-700 transition-all duration-200 bg-white border-2 border-emerald-600 rounded-lg hover:bg-emerald-50"
                            >
                                Book Consultation
                            </Link>
                        </div>
                        <p className="text-xs text-emerald-600 mt-6 flex items-center justify-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            Disclaimer: Always consult an Ayurvedic physician before starting new supplements.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}
