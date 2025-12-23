import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Leaf, Sparkles, Scissors, Droplet } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Keshya: Ayurvedic Secrets for Strong, Lustrous Hair | FitPlan India",
    description: "Combat hair fall and early greying with Ayurveda. Discover the power of Bhringraj, Amla, Hibiscus, and hair oiling rituals (Shiro Abhyanga) for growth.",
    keywords: ["Ayurveda for hair growth", "Bhringraj oil benefits", "stop hair fall naturally", "early greying home remedies", "shikakai for hair"],
}

export default function HairHealthPage() {
    const tocItems = [
        { id: "intro", label: "Ayurveda & Hair Care" },
        { id: "bhringraj", label: "1. Bhringraj (King of Herbs)" },
        { id: "amla", label: "2. Amla (Indian Gooseberry)" },
        { id: "hibiscus", label: "3. Hibiscus (Japa)" },
        { id: "nasya", label: "4. Nasya Therapy" },
        { id: "diet", label: "Hair Diet (Asthi Dhatu)" },
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
                        Keshya: Ayurvedic Secrets for Strong, Lustrous Hair
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        In Ayurveda, your hair is an extension of your bone tissue (Asthi Dhatu). Hair fall and greying are signs of excess heat (Pitta) and malnutrition in the deeper tissues.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Scissors className="w-6 h-6 text-emerald-600 mr-2" />
                            The Root Cause of Hair Problems
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Hair health is a mirror of your internal health. <strong>Khalitya</strong> (Hair Fall) and <strong>Palitya</strong> (Greying) happen when 'Pitta' burns the hair roots. Commercial shampoos strip natural oils; Ayurveda nourishes the roots with <strong>Keshya</strong> (Hair friendly) herbs.
                            </p>
                        </div>
                    </section>

                    {/* Remedy 1: Bhringraj */}
                    <section id="bhringraj" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. Bhringraj: The King of Hair</h2>
                        <Card className="mb-6 bg-emerald-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    If there is one herb you need, it's <strong>Bhringraj</strong>. It promotes growth, retains natural color, and induces sleep (which cools Pitta).
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-emerald-200">
                                    <p className="text-sm text-gray-700"><strong>Ritual:</strong> Mix Bhringraj powder with Coconut oil. Heat slightly. Massage into scalp twice a week. Leave overnight.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Amla */}
                    <section id="amla" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Amla: The Vitamin C Bomb</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Amla acts as a natural conditioner. It prevents dandruff and strengthens follicles. Consuming Amla juice daily prevents premature greying from the inside out.
                        </p>
                    </section>

                    {/* Remedy 3: Hibiscus */}
                    <section id="hibiscus" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Hibiscus (Japa)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The flowers and leaves of the red Hibiscus are rich in amino acids that nourish keratin. It makes hair soft, shiny, and voluminous.
                        </p>
                        <ul className="space-y-3 bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Grind fresh hibiscus flowers into a paste.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Apply as a mask for 30 minutes.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Rinse with lukewarm water (no shampoo needed).</li>
                        </ul>
                    </section>

                    {/* Remedy 4: Nasya */}
                    <section id="nasya" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. Nasya Therapy</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            What you put in your nose reaches your brain and scalp. Putting 2 drops of <strong>Anu Taila</strong> in each nostril daily keeps scalp channels open and prevents greying.
                        </p>
                    </section>

                    {/* Diet */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Feed Your Hair (Asthi Poshan)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Since hair is a byproduct of bone tissue, foods that strengthen bones also strengthen hair.
                        </p>
                        <ul className="grid grid-cols-2 gap-4 text-gray-700">
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2" /> Sesame Seeds (Calcium)</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2" /> Curry Leaves (Iron)</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2" /> Moringa (Multi-vitamin)</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2" /> Coconut Water (Hydration)</li>
                        </ul>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Get Rapunzel-Like Hair</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Stop using harsh chemicals. Embrace the natural goodness of Indian herbs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Book Hair Consultation
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
