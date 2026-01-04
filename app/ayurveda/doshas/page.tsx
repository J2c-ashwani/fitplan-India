import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wind, Flame, Droplet, ArrowRight, Check, X, Info } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "Understanding Tridosha: The Ultimate Guide to Vata, Pitta, Kapha | FitPlan India",
    description: "Discover your Ayurvedic body type. Comprehensive guide to Vata, Pitta, and Kapha doshas, including detailed diet charts, symptoms of imbalance, and scientific perspectives on bio-energies.",
    keywords: ["Ayurveda tridosha explained", "Vata Pitta Kapha characteristics", "Ayurvedic body type diet", "Symptoms of high Pitta", "How to balance Kapha", "Science of Ayurveda"],
}

export default function DoshasPage() {
    const tocItems = [
        { id: "intro", label: "What are Doshas?" },
        { id: "vata", label: "Vata (Air)" },
        { id: "pitta", label: "Pitta (Fire)" },
        { id: "kapha", label: "Kapha (Earth)" },
        { id: "science", label: "Scientific View" },
        { id: "faq", label: "FAQs" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#064e3b] text-white py-24">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 mt-6">
                        The Science of Tridosha
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Everything in the universe is made of five elements. In your body, they combine to form three bio-energies: <strong>Vata, Pitta, and Kapha.</strong> Knowing yours is the key to perfect health.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-5xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Blueprint of Life</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Ayurveda is not just about herbs; it's about physics. The <strong>Tridosha Theory</strong> states that health is a dynamic balance of three forces. You are born with a unique combination (<strong>Prakriti</strong>) that stays with you for life.
                            </p>
                            <p className="mt-4">
                                Most diseases arise when your current state (<strong>Vikriti</strong>) deviates from your birth state due to diet, stress, or seasons.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Vata Section */}
                <section id="vata" className="mb-20 scroll-mt-24">
                    <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12 border border-blue-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 bg-blue-100 rounded-2xl">
                                <Wind className="w-10 h-10 text-blue-600" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-serif font-bold text-gray-900">Vata Dosha</h2>
                                <p className="text-blue-600 font-medium text-lg">Air + Ether • The Energy of Movement</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">Characteristics</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Vata people are like the wind—creative, quick, and energetic but easily exhausted. They tend to have a thin frame, dry skin, and cold hands/feet. They learn fast but forget fast.
                                </p>
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-900">Signs of Imbalance (High Vata):</h4>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Anxiety & Overthinking</li>
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Insomnia & Restless sleep</li>
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Constipation & Bloating</li>
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Dry, cracking joints</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">How to Balance Vata</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="flex items-center gap-2 font-semibold text-green-700 mb-2">
                                            <Check className="w-5 h-5" /> Eat These (Favor)
                                        </h4>
                                        <p className="text-sm text-gray-600">Warm, oily, cooked foods. Sweet, sour, and salty tastes. Ghee, soups, stews, oats, avocados, almonds, warm milk.</p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 font-semibold text-red-600 mb-2">
                                            <X className="w-5 h-5" /> Avoid These
                                        </h4>
                                        <p className="text-sm text-gray-600">Cold, dry, raw foods. Salads, popcorn, crackers, caffeine, ice water, dried fruits (unless soaked).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pitta Section */}
                <section id="pitta" className="mb-20 scroll-mt-24">
                    <div className="bg-orange-50/50 rounded-3xl p-8 md:p-12 border border-orange-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 bg-orange-100 rounded-2xl">
                                <Flame className="w-10 h-10 text-orange-600" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-serif font-bold text-gray-900">Pitta Dosha</h2>
                                <p className="text-orange-600 font-medium text-lg">Fire + Water • The Energy of Transformation</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-3">Characteristics</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Pitta types are fiery, intelligent, and driven. They have a medium build, sharp digestion, and warm body temperature. They are natural leaders but can be perfectionists.
                                </p>
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-900">Signs of Imbalance (High Pitta):</h4>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Anger & Irritability</li>
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Acid Reflux & Heartburn</li>
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Skin rashes & Acne</li>
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Premature graying/balding</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">How to Balance Pitta</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="flex items-center gap-2 font-semibold text-green-700 mb-2">
                                            <Check className="w-5 h-5" /> Eat These (Favor)
                                        </h4>
                                        <p className="text-sm text-gray-600">Cool, refreshing foods. Sweet, bitter, and astringent tastes. Cucumber, mint, coconut, melons, leafy greens, ghee.</p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 font-semibold text-red-600 mb-2">
                                            <X className="w-5 h-5" /> Avoid These
                                        </h4>
                                        <p className="text-sm text-gray-600">Hot, spicy, oily foods. Chili, garlic, onions, tomatoes, fermented foods, alcohol, vinegar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kapha Section */}
                <section id="kapha" className="mb-20 scroll-mt-24">
                    <div className="bg-emerald-50/50 rounded-3xl p-8 md:p-12 border border-emerald-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 bg-emerald-100 rounded-2xl">
                                <Droplet className="w-10 h-10 text-emerald-600" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-serif font-bold text-gray-900">Kapha Dosha</h2>
                                <p className="text-emerald-600 font-medium text-lg">Earth + Water • The Energy of Lubrication</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-emerald-500 pl-3">Characteristics</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Kapha people are stable, strong, and compassionate. They have a solid build, thick hair, and excellent stamina. They sleep soundly but can be slow to start.
                                </p>
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-gray-900">Signs of Imbalance (High Kapha):</h4>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Lethargy & Depression</li>
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Weight gain & Water retention</li>
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Sinus congestion & Asthma</li>
                                        <li className="flex gap-2 text-gray-700"><span className="text-red-500">❌</span> Excessive attachment</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">How to Balance Kapha</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="flex items-center gap-2 font-semibold text-green-700 mb-2">
                                            <Check className="w-5 h-5" /> Eat These (Favor)
                                        </h4>
                                        <p className="text-sm text-gray-600">Light, warm, drying foods. Pungent, bitter, and astringent tastes. Ginger, black pepper, lentils, broccoli, quinoa.</p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 font-semibold text-red-600 mb-2">
                                            <X className="w-5 h-5" /> Avoid These
                                        </h4>
                                        <p className="text-sm text-gray-600">Heavy, sweet, milky foods. Dairy, sugar, fried foods, wheat, bananas, avocado, excess sleep.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Scientific View */}
                <section id="science" className="mb-20 scroll-mt-24">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6">Science Meets Ayurveda</h2>
                        <p className="text-gray-700 mb-6">
                            Modern research is beginning to map Ayurvedic concepts to physiological markers. A study documented in the <em>Journal of Ayurveda and Integrative Medicine</em> suggests correlations between Doshas and metabolic phenotypes.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-4 bg-stone-50 rounded-xl">
                                <h4 className="font-bold text-gray-900 mb-2">Vata & Nervous System</h4>
                                <p className="text-sm text-gray-600">Vata activities correlate with the catabolic processes and the sympathetic nervous system (flight or fight).</p>
                            </div>
                            <div className="p-4 bg-stone-50 rounded-xl">
                                <h4 className="font-bold text-gray-900 mb-2">Pitta & Metabolism</h4>
                                <p className="text-sm text-gray-600">Pitta correlates with enzymes, hormones, and the metabolic rate (thermogenesis).</p>
                            </div>
                            <div className="p-4 bg-stone-50 rounded-xl">
                                <h4 className="font-bold text-gray-900 mb-2">Kapha & Anabolism</h4>
                                <p className="text-sm text-gray-600">Kapha relates to anabolic processes, body fluid regulation, and structure building.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can my Dosha change?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Your birth constitution (<strong>Prakriti</strong>) never changes—it is your DNA. However, your current state (<strong>Vikriti</strong>) fluctuates daily based on diet, stress, and weather. The goal is to bring your Vikriti back in line with your Prakriti.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can I be two Doshas?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Yes! Most people are dual-dosha types, like <strong>Vata-Pitta</strong> or <strong>Pitta-Kapha</strong>. In these cases, you usually manage the dominant one first, or the one that is currently aggravated by the season.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">What is the "Best" Dosha?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                There is no "best" dosha. Each has superpowers. Vata is creative, Pitta is driven, and Kapha is loving. The best state is a <strong>Balanced</strong> state, regardless of your type.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>


                <div className="mb-20">
                    <SuccessStory
                        name="Rohan Mehta"
                        age={29}
                        condition="High Pitta (Acidity & Anger)"
                        result="Cooler Temperament & No Acid Reflux"
                        quote="I was always angry and had terrible heartburn. Dr. Arti diagnosed me as Pitta-aggravated and put me on a cooling diet (no chilies, more melon). Within 2 weeks, my 'fire' calmed down significantly."
                        duration="2 Weeks"
                    />
                </div>

                {/* CTA */}
                <div className="bg-[#064e3b] rounded-3xl p-8 md:p-16 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Don't Know Your Dosha?</h2>
                    <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Take our 3-minute comprehensive Vedic assessment to discover your Prakriti and get a personalized health roadmap.
                    </p>
                    <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-emerald-900/20">
                        Take Free Dosha Quiz <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>

            </div >
            <div className="container mx-auto px-4 max-w-5xl mb-12">
                <ScientificRefs
                    references={[
                        { text: "Genomic insights into Ayurveda (Nature - Scientific Reports)", url: "https://www.nature.com/articles/srep15786" },
                        { text: "Tridosha theory and physiological variability", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3151381/" }
                    ]}
                />
            </div>
        </div >
    )
}
