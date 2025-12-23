import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Eye, Monitor, Droplet, Sun } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Eye Care (Netra Chikitsa) | Natural Vision Improvement",
    description: "Cure digital eye strain and dark circles with Ayurveda. Learn about Triphala eye wash, Netra Basti, and Trataka exercises for better vision.",
    keywords: ["Ayurvedic eye care", "Triphala for eyes", "Netra Basti therapy", "cure dry eyes ayurveda", "remove dark circles naturally", "trataka benefits"],
}

export default function EyeCarePage() {
    const tocItems = [
        { id: "root", label: "The Fire in the Eyes" },
        { id: "digital", label: "Digital Eye Strain" },
        { id: "remedies", label: "Top 3 Remedies" },
        { id: "exercises", label: "Eye Yoga (Trataka)" },
        { id: "diet", label: "Vision Diet" },
        { id: "faqs", label: "FAQs" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#0f766e] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        The Windows to the Soul: Ayurvedic Eye Care
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
                        Eyes are the seat of <strong>Alochanaka Pitta</strong> (Fire). Excessive screen time increases this heat, leading to redness, dryness, and weak vision. Cool them down naturally.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Root Cause */}
                    <section id="root" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Eye className="w-6 h-6 text-teal-600 mr-2" />
                            Why is vision deteriorating?
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                In the digital age, we don't blink enough. This causes the lubricating Kapha in the eyes to dry up, and the burning Pitta to take over.
                                <br />
                                <strong>Ayurveda says:</strong> "Sarvendriyanam Nayanam Pradhanam" (Of all senses, the eyes are most important).
                            </p>
                        </div>
                    </section>

                    {/* Digital Strain */}
                    <section id="digital" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#0f766e] mb-6 border-b pb-2">Computer Vision Syndrome</h2>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h4 className="font-bold text-red-900 mb-3 flex items-center"><Monitor className="w-5 h-5 mr-2" /> The 20-20-20 Rule</h4>
                            <p className="text-gray-700 mb-4">
                                Every 20 minutes, look at something 20 feet away for 20 seconds. This relaxes the ciliary muscles that get locked into "near focus" mode.
                            </p>
                            <div className="bg-white p-4 rounded text-sm text-red-800 font-medium">
                                Tip: Splash cold water on your eyes with your mouth filled with water. This pushes pressure to the eyes and cools them instantly.
                            </div>
                        </div>
                    </section>

                    {/* Remedies */}
                    <section id="remedies" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#0f766e] mb-6 border-b pb-2">3 Ancient Secrets for Vision</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-teal-50 border-teal-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-teal-900 mb-2">1. Triphala Eye Wash</h3>
                                    <p className="text-sm text-gray-700">Soak 1 tsp Triphala powder in water overnight. Strain it through a fine cloth in the morning. Wash your eyes with this water to cure redness and improve vision.</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-100 border-stone-200">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Netra Basti</h3>
                                    <p className="text-sm text-gray-700">A dough ring is placed around the eye and filled with warm medicated ghee. This is the ultimate cure for dry eyes and myopia.</p>
                                    <div className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500">Professional Therapy</div>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-100 border-stone-200">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Castor Oil for Lashes</h3>
                                    <p className="text-sm text-gray-700">Apply a drop of castor oil on eyelashes before sleep. It cools the eyes, promotes thick lash growth, and prevents sleep crust.</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-100 border-stone-200">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Rose Water Drops</h3>
                                    <p className="text-sm text-gray-700">Put 2 drops of pure organic rose water to remove dust and soothe burning eyes instantly.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Exercises */}
                    <section id="exercises" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#0f766e] mb-6 border-b pb-2">Trataka (Candle Gazing)</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                                <div>
                                    <strong>What is it?</strong> Staring at a candle flame without blinking until tears gently flow.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                                <div>
                                    <strong>Benefits:</strong> It cleanses the tear ducts, strengthens eye muscles, and improves concentration (Third Eye improvement).
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                                <div>
                                    <strong>How often?</strong> Once or twice a week in a dark room.
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Diet Section */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#0f766e] mb-6 border-b pb-2">The Vision Diet</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2 bg-green-100 p-2 rounded">Eat (Chakshushya)</h4>
                                <ul className="text-gray-700 text-sm space-y-2 pl-2">
                                    <li>• <strong>Ghee:</strong> Most important fat for eyes.</li>
                                    <li>• <strong>Amla:</strong> Richest source of Vitamin C.</li>
                                    <li>• <strong>Carrots/Pumpkin:</strong> Beta-carotene.</li>
                                    <li>• <strong>Almonds:</strong> Vitamin E prevents cataracts.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2 bg-red-100 p-2 rounded">Avoid (Netra-Virodhi)</h4>
                                <ul className="text-gray-700 text-sm space-y-2 pl-2">
                                    <li>• <strong>Sour Foods:</strong> Excessive pickles/tamarind.</li>
                                    <li>• <strong>Alcohol:</strong> Damages the liver which damages eyes.</li>
                                    <li>• <strong>Salty Food:</strong> Increases water retention/puffiness.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#0f766e] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can Ayurveda remove specs?</h4>
                                <p className="text-gray-700 text-sm">In early stages (pseudo-myopia in kids), yes. For adults, it can stop the number from increasing and improve clarity, but reversing high numbers is rare.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: How to remove dark circles?</h4>
                                <p className="text-gray-700 text-sm">Dark circles are Vata imbalance (dryness). Massage under eyes with Kumkumadi Tailam or Almond oil daily. Sleep before 10 PM.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: My eyes twitch. Why?</h4>
                                <p className="text-gray-700 text-sm">Eye twitching is pure Vata (stress + fatigue). Rest, warm compress, and magnesium-rich foods (bananas/almonds) will fix it.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 text-center border border-teal-200">
                        <h3 className="text-2xl font-bold text-teal-900 mb-4">Protect Your Vision</h3>
                        <p className="text-teal-800 mb-8 max-w-2xl mx-auto">
                            Your eyes have to last you a lifetime. Don't burn them out.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/anti-aging"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-teal-600 rounded-lg hover:bg-teal-700 shadow-md"
                            >
                                Get Anti-Aging Diet
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
