import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Leaf, AlertCircle, Droplet } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Natural Remedies to Boost Thyroid Function | Ayurveda for Hypothyroidism",
    description: "Manage thyroid levels naturally with Ayurveda. Learn about coriander water, brazil nuts, yoga poses, and diet tips for Hypothyroidism (Galaganda).",
    keywords: ["Ayurvedic diet for thyroid", "coriander water for thyroid", "hypothyroidism home remedies", "ujjayi pranayama benefits", "selenium rich foods india"],
}

export default function ThyroidPage() {
    const tocItems = [
        { id: "intro", label: "Thyroid & Ayurveda" },
        { id: "coriander", label: "1. Coriander Water" },
        { id: "guggul", label: "2. Kanchanar Guggulu" },
        { id: "selenium", label: "3. Selenium Superfoods" },
        { id: "yoga", label: "4. Yoga for Thyroid" },
        { id: "avoid", label: "5. Foods to Avoid" },
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
                        Natural Remedies to Boost Thyroid Function
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Thyroid disorders are often linked to imbalances in <strong>Vata</strong> and <strong>Kapha</strong> doshas within the body's metabolic fire (Agni). Discover how to reignite your metabolism naturally.
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
                            Thyroid Health: The Ayurvedic Perspective
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                In Ayurveda, Hypothyroidism is correlated with <strong>Galaganda</strong>. It is primarily caused by a <i>Kapha-Vata</i> imbalance that slows down metabolic processes. The treatment focuses on <strong>Deepana</strong> (improving digestion) and <strong>Pachana</strong> (digesting toxins).
                            </p>
                        </div>
                    </section>

                    {/* Remedy 1: Coriander Water */}
                    <section id="coriander" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. The Magic of Coriander Water (Dhania)</h2>
                        <Card className="mb-6 bg-amber-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Coriander seeds are one of the most effective remedies for thyroid function. They help in cleaning the bodily channels (Srotas) and improving digestion without increasing acidity (Pitta).
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-amber-200">
                                    <h4 className="font-bold text-amber-900 mb-2">How to prepare:</h4>
                                    <ol className="list-decimal ml-5 space-y-1 text-sm text-gray-700">
                                        <li>Soak 2 tsp of crushed coriander seeds in a glass of water overnight.</li>
                                        <li>Boil it in the morning until it reduces to half.</li>
                                        <li>Strain and drink empty stomach.</li>
                                    </ol>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Kanchanar Guggulu */}
                    <section id="guggul" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Kanchanar Guggulu</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This is a classical Ayurvedic formulation specifically used for treating glandular swellings and thyroid disorders. It helps in drying up the excess Kapha (mucus/fat) affecting the thyroid gland.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                            <AlertCircle className="w-4 h-4" />
                            <span><strong>Note:</strong> Only take this under the guidance of an Ayurvedic doctor.</span>
                        </div>
                    </section>

                    {/* Remedy 3: Selenium Foods */}
                    <section id="selenium" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Selenium & Iodine Superfoods</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your thyroid needs Selenium to convert T4 hormone into active T3. Include these in your diet:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <li className="flex items-center p-3 bg-stone-50 rounded"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2" /> Brazil Nuts (2 per day)</li>
                            <li className="flex items-center p-3 bg-stone-50 rounded"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2" /> Sunflower Seeds</li>
                            <li className="flex items-center p-3 bg-stone-50 rounded"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2" /> Mushrooms</li>
                            <li className="flex items-center p-3 bg-stone-50 rounded"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2" /> Curry Leaves</li>
                        </ul>
                    </section>

                    {/* Remedy 4: Yoga */}
                    <section id="yoga" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. Yoga Asanas for Thyroid</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Certain yoga poses stimulate the throat region, improving blood circulation to the thyroid gland.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-900 mb-2">Sarvangasana (Shoulder Stand)</h4>
                                <p className="text-sm text-blue-800">The most powerful pose for thyroid health. It reverses blood flow to the throat.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-900 mb-2">Ujjayi Pranayama</h4>
                                <p className="text-sm text-blue-800">"Victorious Breath" creates a vibration in the throat that stimulates the thyroid.</p>
                            </div>
                        </div>
                    </section>

                    {/* Remedy 5: Foods to Avoid */}
                    <section id="avoid" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">5. Foods to Avoid (Goitrogens)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Some foods can interfere with thyroid function if eaten raw in large quantities.
                        </p>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <ul className="space-y-2 text-red-800">
                                <li>❌ Raw Cabbage, Cauliflower, Broccoli (Cook them well to de-activate goitrogens)</li>
                                <li>❌ Soy Products (Tofu, Soy Milk)</li>
                                <li>❌ Excess Sugar and Processed Foods</li>
                            </ul>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Heal Your Thyroid Naturally</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            A specific diet plan can help you manage TSH levels and reduce dependency on medication.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/thyroid"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Thyroid Diet Plan <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-emerald-700 transition-all duration-200 bg-white border-2 border-emerald-600 rounded-lg hover:bg-emerald-50"
                            >
                                Consult Dr. Arti
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
