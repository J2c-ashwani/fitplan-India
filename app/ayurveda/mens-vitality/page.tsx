import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, Battery, Activity, Shield } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Vajikarana Therapy: Ayurvedic Herbs for Men's Vitality | FitPlan India",
    description: "Boost stamina and testosterone naturally with Vajikarana herbs. Learn about Shilajit, Ashwagandha, Safed Musli, and Gokshura for peak male health.",
    keywords: ["Ayurveda for men's health", "Vajikarana therapy benefits", "Shilajit for testosterone", "Ashwagandha for stamina", "Safed musli uses", "natural cure for ed india"],
}

export default function MensVitalityPage() {
    const tocItems = [
        { id: "vajikarana", label: "What is Vajikarana?" },
        { id: "herbs", label: "The 4 Horsemen Herbs" },
        { id: "diet", label: "Virility Diet" },
        { id: "lifestyle", label: "Brahmacharya & Sleep" },
        { id: "faqs", label: "FAQs" },
        { id: "conclusion", label: "Conclusion" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#111827] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Vajikarana: The Science of Virility
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Men's health is often ignored until it breaks. Ayurveda dedicates an entire branch called <strong>Vajikarana</strong> ensuring a man has the strength of a horse (Vaji) to produce healthy offspring and enjoy life.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Concept */}
                    <section id="vajikarana" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Zap className="w-6 h-6 text-yellow-600 mr-2" />
                            More than just Aphrodisiacs
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Modern medicine gives a blue pill for temporary blood flow. Vajikarana builds the <strong>Shukra Dhatu</strong> (Reproductive Tissue) from scratch.
                                <br />
                                It focuses on 3 things: <strong>Shukra Vriddhi</strong> (Quality/Quantity), <strong>Shukra Sruti</strong> (Performance), and <strong>Ojas</strong> (Immunity).
                            </p>
                        </div>
                    </section>

                    {/* Herbs */}
                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#111827] mb-6 border-b pb-2">The Big 4: Testosterone Boosters</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-black text-white">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-yellow-500 mb-2">1. Shilajit</h3>
                                    <p className="text-sm text-gray-300">"Conqueror of Mountains". It is fulvic acid + 84 minerals. It boosts cellular energy (ATP) and directly increases testosterone levels.</p>
                                    <div className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-500">Usage: Resin with milk</div>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Ashwagandha</h3>
                                    <p className="text-sm text-gray-700">"Smell of a Horse". It reduces cortisol (stress kills testosterone). It improves stamina and muscle mass.</p>
                                    <div className="mt-4 text-xs font-bold uppercase tracking-wider text-gray-500">Usage: 500mg daily</div>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Safed Musli</h3>
                                    <p className="text-sm text-gray-700">"Herbal Viagra". It is a potent restorative tonic for weakness and boosts sperm count.</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Gokshura</h3>
                                    <p className="text-sm text-gray-700">Tribulus Terrestris. It supports kidney function and urinary health, which is linked to reproductive health.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Diet Section */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#111827] mb-6 border-b pb-2">The Virility Diet</h2>
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-900 mb-3">Shukra-Building Foods</h4>
                            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 text-sm">
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> <strong>Ghee:</strong> Increases Ojas and sperm quality.</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> <strong>Almonds/Dates:</strong> Soaked overnight. Instant energy.</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> <strong>Milk:</strong> Warm, organic A2 milk is a complete food.</li>
                                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> <strong>Urad Dal:</strong> Black gram cooked with ghee is highly aphrodisiac.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Lifestyle */}
                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#111827] mb-6 border-b pb-2">Lifestyle Killers</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <Shield className="w-5 h-5 text-red-600 mr-2 mt-1" />
                                <div>
                                    <strong>Alcohol & Smoking:</strong> They are 'Teekshna' (Sharp/Hot). They dry up the Shukra Dhatu, leading to low count and motility.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Shield className="w-5 h-5 text-red-600 mr-2 mt-1" />
                                <div>
                                    <strong>Excess Heat:</strong> Tight underwear, hot baths, or laptop on lap kill sperm production (which needs to be 2°C cooler than body temp).
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#111827] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: How long does Shilajit take to work?</h4>
                                <p className="text-gray-700 text-sm">It's not instant. It takes 2-4 weeks of consistent use to feel the surge in stamina and energy. Cycle it: 3 months on, 1 month off.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Does gymming increase testosterone?</h4>
                                <p className="text-gray-700 text-sm">Compound lifts (Squats, Deadlifts) definitely do. However, overtraining (running marathons) raises cortisol and lowers testosterone. Balance is key.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Is vegetarian food enough for protein?</h4>
                                <p className="text-gray-700 text-sm">Yes, if planned well. Ayurveda recommends Paneer, Whey, Lentils, and Nuts. Many wrestlers in ancient India were vegetarian.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center border border-gray-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Reclaim Your Prime</h3>
                        <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
                            Vitality is not just about the bedroom; it’s about the zest for life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/mens-vitality"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 shadow-md"
                            >
                                Get Men's Diet Plan
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
