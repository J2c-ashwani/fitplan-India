import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Sparkles, Droplet, Sun, AlertCircle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Secrets for Glowing Skin (Varnya) | FitPlan India",
    description: "Get radiant skin naturally. Ease acne, pigmentation, and dullness with Neem, Turmeric, Kumkumadi Tailam, and Pitta-pacifying diet.",
    keywords: ["Ayurvedic skin care", "Kukumadi tailam benefits", "Neem for acne", "how to get glowing skin naturally", "pitta dosha skin problems", "turmeric face pack recipe"],
}

export default function SkinGlowPage() {
    const tocItems = [
        { id: "pitta", label: "Skin & Pitta" },
        { id: "herbs", label: "Varnya Herbs" },
        { id: "kumkumadi", label: "Kumkumadi Magic" },
        { id: "detox", label: "Blood Cleansing" },
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
                        Varnya: Illuminate Your Skin from Within
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Your skin is a mirror of your blood (Rakta Dhatu). Creams only polish the mirror; Ayurveda cleans the blood. Discover the "Varnya" (Complexion Enhancing) herbs.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Pitta Connection */}
                    <section id="pitta" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Sun className="w-6 h-6 text-orange-500 mr-2" />
                            The Pitta-Blood Connection
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Skin inflammation (Acne, Rosacea, Rashes) is essentially <strong>Heat</strong> trying to escape the body.
                                <br />
                                When <strong>Pitta Dosha</strong> (Heat) mixes with <strong>Rakta</strong> (Blood), it creates toxins that erupt as pimples.
                            </p>
                            <div className="bg-orange-50 p-4 border-l-4 border-orange-500 mt-4 text-sm">
                                <strong>The Strategy:</strong> Cool the blood. Avoid spicy, sour, and fermented foods. Use cooling herbs.
                            </div>
                        </div>
                    </section>

                    {/* Herbs */}
                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Top 3 Complexion Herbs</h2>

                        <div className="grid gap-6">
                            <Card className="bg-emerald-50 border-emerald-100">
                                <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-center">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-emerald-900 mb-2">1. Neem (The Blood Purifier)</h3>
                                        <p className="text-sm text-gray-700">Bitter is beautiful. Neem kills the bacteria causing acne and detoxifies the liver. A clean liver = clean skin.</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center min-w-[120px] border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-600">USAGE</div>
                                        <div className="text-sm">Chew 2 leaves daily</div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-yellow-50 border-yellow-100">
                                <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-center">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-yellow-900 mb-2">2. Turmeric (The Golden Glow)</h3>
                                        <p className="text-sm text-gray-700">Potent anti-oxidant. Reduces pigmentation and dark spots (Vyanga). It effectively inhibits melanin production.</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center min-w-[120px] border border-yellow-200">
                                        <div className="text-xs font-bold text-yellow-600">USAGE</div>
                                        <div className="text-sm">Face pack with honey</div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-red-50 border-red-100">
                                <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-center">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-red-900 mb-2">3. Manjistha (Rubia Cordifolia)</h3>
                                        <p className="text-sm text-gray-700">The best herb for lymphatic drainage. It clears stubborn pigmentation and promotes even skin tone.</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center min-w-[120px] border border-red-200">
                                        <div className="text-xs font-bold text-red-600">USAGE</div>
                                        <div className="text-sm">Wait for doctor advice</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Kumkumadi */}
                    <section id="kumkumadi" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Kumkumadi Tailam Explained</h2>
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center"><Sparkles className="w-5 h-5 mr-2 text-yellow-500" /> Liquid Gold</h3>
                            <p className="text-gray-700 mb-4">
                                The legendary oil made with <strong>Saffron (Kumkuma)</strong> and 16 other herbs.
                            </p>
                            <ul className="text-sm text-gray-700 list-disc ml-5 space-y-2">
                                <li><strong>Benefit:</strong> It improves complexion, reduces dark circles, and removes tan.</li>
                                <li><strong>How to use:</strong> Take 3-4 drops. Massage on face at night. Leave it on.</li>
                                <li><strong>Caution:</strong> If you have active oily acne, use minimal quantity.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Detox Diet */}
                    <section id="detox" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The Glow Diet</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-bold text-green-900 mb-2">Do's (Pathya)</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>Water Rich Veggies:</strong> Cucumber, Zucchini, Guard.</li>
                                    <li>• <strong>Pomegranate:</strong> Increases blood count and glow.</li>
                                    <li>• <strong>Raisins:</strong> Soaked raisins purify blood.</li>
                                    <li>• <strong>Aloe Vera Juice:</strong> Cools the system.</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg">
                                <h4 className="font-bold text-red-900 mb-2">Don'ts (Apathya)</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>Excess Salt:</strong> Causes water retention and puffiness.</li>
                                    <li>• <strong>Sour Foods:</strong> Tamarind, Pickles trigger acne.</li>
                                    <li>• <strong>Fried Food:</strong> Blocks pores.</li>
                                    <li>• <strong>Coffee:</strong> Dehydrates skin (makes it look aged).</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Why do I get acne only on cheeks?</h4>
                                <p className="text-gray-700 text-sm">In Ayurveda face mapping, cheeks relate to the stomach and lungs. High acidity or respiratory issues can show up here. Forehead acne relates to stress and bad digestion.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Is milk bad for acne?</h4>
                                <p className="text-gray-700 text-sm">Yes, commercial dairy is highly mucus-forming and often contains hormones. Switching to a dairy-free diet for 3 weeks usually clears up cystic acne significantly.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Does stress cause dull skin?</h4>
                                <p className="text-gray-700 text-sm">Absolutely. Stress constricts blood vessels, reducing oxygen flow to the skin ("Graying" of skin). Pranayama restores the glow (Ojas).</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Glow is not a color, it's a health signal.</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            When your digestion is good and blood is clean, you don't need makeup.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Skin Detox Plan
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
