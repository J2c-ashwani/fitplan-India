import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sun, CloudRain, Snowflake, Flower2, ThermometerSun } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ritucharya: The Ayurvedic Seasonal Guide | FitPlan India",
    description: "Align your diet with nature cycles. Comprehensive Ritucharya guide for Summer (Grishma), Monsoon (Varsha), and Winter (Hemanta) to prevent seasonal illness.",
    keywords: ["Ayurveda Ritucharya", "Seasonal diet ayurveda", "Monsoon ayurvedic tips", "Winter diet for immunity", "Summer cooling foods"],
}

export default function SeasonalPage() {
    const tocItems = [
        { id: "intro", label: "What is Ritucharya?" },
        { id: "summer", label: "Summer (Grishma)" },
        { id: "monsoon", label: "Monsoon (Varsha)" },
        { id: "winter", label: "Winter (Hemanta)" },
        { id: "spring", label: "Spring (Vasanta)" },
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
                        Ritucharya: Living with the Seasons
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Nature changes every few months, and so should your diet. Ignoring the season is the root cause of annual "flu seasons" and allergy flare-ups.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Intro Section */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Why Seasonal Eating?</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                <strong>Ritu</strong> means season, and <strong>Charya</strong> means regimen. Ayurveda divides the year into two periods: <strong>Adana Kala</strong> (taking away strength: Summer) and <strong>Visarga Kala</strong> (giving strength: Winter). Adapting your habits helps you ride the wave of nature rather than fighting against it.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Summer Section */}
                <section id="summer" className="mb-20 scroll-mt-24">
                    <div className="bg-orange-50/50 rounded-3xl p-8 md:p-12 border border-orange-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-orange-100 rounded-2xl">
                                <Sun className="w-10 h-10 text-orange-500" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-gray-900">Summer (Grishma)</h2>
                                <p className="text-orange-600 font-medium">Mid-May to mid-July • Pitta Season</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700">The sun absorbs the moisture of the earth. Strength is low. Digestion is weak.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-green-700 mb-3">✅ Favor</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>Sweet, cold, liquid foods.</li>
                                        <li>Rice, milk, ghee, grapes, coconut water.</li>
                                        <li><strong>Sattu</strong> (roasted gram flour drink).</li>
                                        <li>Afternoon naps are allowed!</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-red-600 mb-3">❌ Avoid</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>Salty, sour, and pungent foods.</li>
                                        <li>Alcohol and caffeine (dehydrating).</li>
                                        <li>Excessive exercise.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Monsoon Section */}
                <section id="monsoon" className="mb-20 scroll-mt-24">
                    <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12 border border-blue-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-blue-100 rounded-2xl">
                                <CloudRain className="w-10 h-10 text-blue-500" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-gray-900">Monsoon (Varsha)</h2>
                                <p className="text-blue-600 font-medium">Mid-July to mid-September • Vata Season</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700">Agni (digestion) is at its weakest. Vata is aggravated due to cold winds. Water-borne diseases are common.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-green-700 mb-3">✅ Favor</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>Sour, salty, and oily foods (balances Vata).</li>
                                        <li>Warm soups, old grains (easier to digest).</li>
                                        <li>Boiled water with ginger.</li>
                                        <li>Ginger & Lemon.</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-red-600 mb-3">❌ Avoid</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>Leafy greens (high bacteria count).</li>
                                        <li>Heavy meats.</li>
                                        <li>Daytime sleeping (increases sluggishness).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Winter Section */}
                <section id="winter" className="mb-20 scroll-mt-24">
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-slate-200 rounded-2xl">
                                <Snowflake className="w-10 h-10 text-slate-600" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-gray-900">Winter (Hemanta)</h2>
                                <p className="text-slate-600 font-medium">Mid-Nov to mid-Jan • Kapha Season</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700">The body heat is trapped inside. Agni is strongest! This is the time to build immunity and muscle.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-green-700 mb-3">✅ Favor</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>Heavy, nourishing foods.</li>
                                        <li>Ghee, nuts, dairy, fats.</li>
                                        <li>Sesame seeds and jaggery.</li>
                                        <li>Vigorous exercise.</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-red-600 mb-3">❌ Avoid</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>Light, excessive dry foods (Vata aggravating).</li>
                                        <li>Fasting (will burn bodily tissues).</li>
                                        <li>Cold drinks.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Spring Section */}
                <section id="spring" className="mb-20 scroll-mt-24">
                    <div className="bg-pink-50/50 rounded-3xl p-8 md:p-12 border border-pink-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-pink-100 rounded-2xl">
                                <Flower2 className="w-10 h-10 text-pink-500" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-gray-900">Spring (Vasanta)</h2>
                                <p className="text-pink-600 font-medium">Mid-March to mid-May • Kapha Melting</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-gray-700">Accumulated Winter Kapha starts melting due to the sun. This causes allergies, colds, and mucus.</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-green-700 mb-3">✅ Favor</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>Bitter, pungent, drying foods.</li>
                                        <li>Honey, barley, turmeric.</li>
                                        <li>Dry massage (Udvartana).</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-red-600 mb-3">❌ Avoid</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>Heavy, oily, sweet foods.</li>
                                        <li>Dairy and ice cream.</li>
                                        <li>Daytime sleep (highly forbidden).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can I eat mangoes in Monsoon?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                No. Mangoes are for Summer. By the time Monsoon hits, they are often artificially ripened or infested with worms. They also increase Vata-Pitta which is already unstable in Monsoon.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Why no leafy greens in rainy season?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                In the rainy season, the soil becomes acidic and worm-infested. Leafy greens are most susceptible to carrying these parasites. Ayurveda recommends avoidance to prevent stomach infections.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div>
    )
}
