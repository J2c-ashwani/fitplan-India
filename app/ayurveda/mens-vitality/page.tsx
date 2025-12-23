import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, Shield } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Vajikaran: Herbs for Men's Health & Stamina | Ayurveda",
    description: "Boost stamina and vitality naturally with Vajikaran Rasayana. Discover benefits of Ashwagandha, Shilajit, Safed Musli, and Gokshura for men's health.",
    keywords: ["Ayurveda for men's health", "Vajikaran therapy", "Shilajit benefits", "Ashwagandha for stamina", "Safed musli uses"],
}

export default function MensVitalityPage() {
    const tocItems = [
        { id: "intro", label: "What is Vajikaran?" },
        { id: "shilajit", label: "1. Shilajit" },
        { id: "ashwagandha", label: "2. Ashwagandha" },
        { id: "musli", label: "3. Safed Musli" },
        { id: "gokshura", label: "4. Gokshura" },
        { id: "milk", label: "5. Almond Milk" },
        { id: "conclusion", label: "Conclusion" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#1e1b4b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Vajikaran: Herbs for Men's Health & Stamina
                    </h1>
                    <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                        Ayurveda dedicates an entire branch called <strong>Vajikarana</strong> to men's virility and vitality. It focuses on improving the quality of reproductive tissue (Shukra Dhatu).
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Zap className="w-6 h-6 text-indigo-600 mr-2" />
                            Strength from Within
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Stress, poor diet, and lack of sleep deplete <strong>Ojas</strong> (vital energy). Vajikaran therapy uses powerful herbs to rebuild strength, endurance, and confidence. It makes a man "as strong as a horse" (Vaji).
                            </p>
                        </div>
                    </section>

                    {/* Remedy 1: Shilajit */}
                    <section id="shilajit" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">1. Shilajit: The Rock of Strength</h2>
                        <Card className="mb-6 bg-slate-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Found in the high Himalayas, Shilajit is rich in minerals and Fulvic acid. It boosts testosterone levels naturally and fights chronic fatigue.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-slate-200">
                                    <p className="text-sm text-gray-700"><strong>Usage:</strong> Take a pea-sized amount of pure Shilajit resin with warm milk in the morning.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Ashwagandha */}
                    <section id="ashwagandha" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">2. Ashwagandha</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Known for reducing performance anxiety. By lowering cortisol levels, it allows the body's energy to be directed towards reproduction and muscle building.
                        </p>
                    </section>

                    {/* Remedy 3: Safed Musli */}
                    <section id="musli" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">3. Safed Musli</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Often called "White Gold" or "Indian Viagra". It is a nutritive tonic that improves sperm count and motility. It is excellent for bodybuilding as well.
                        </p>
                    </section>

                    {/* Remedy 4: Gokshura */}
                    <section id="gokshura" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">4. Gokshura (Tribulus)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A prickly fruit that works on the urinary and reproductive systems. It naturally boosts endogenous testosterone production without side effects.
                        </p>
                    </section>

                    {/* Diet */}
                    <section id="milk" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">5. Almond Milk (Thandai)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Nuts, especially Almonds and Walnuts, are essential. Soaked almonds mixed with milk, saffron, and cardamom is a classic Vrishya (Aphrodisiac) recipe.
                        </p>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 text-center border border-indigo-200">
                        <h3 className="text-2xl font-bold text-indigo-900 mb-4">Reclaim Your Vigor</h3>
                        <p className="text-indigo-800 mb-8 max-w-2xl mx-auto">
                            Combine these herbs with weight training and good sleep for maximum results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/muscle-gain"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-md"
                            >
                                Get Muscle Gain Plan
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
