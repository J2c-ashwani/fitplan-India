import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Sun, Cloud, Snowflake, Wind } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ritucharya: Ayurvedic Seasonal Regimen Guide | FitPlan India",
    description: "Align your diet with nature. Complete guide to Ritucharya, eating for Summer, Monsoon, and Winter to prevent seasonal sickness.",
    keywords: ["Ayurveda seasonal guide", "Ritucharya explained", "Ayurveda summer diet", "Monsoon diet ayurveda", "Winter immunity tips"],
}

export default function SeasonalPage() {
    const tocItems = [
        { id: "intro", label: "What is Ritucharya?" },
        { id: "summer", label: "Summer (Grishma)" },
        { id: "monsoon", label: "Monsoon (Varsha)" },
        { id: "winter", label: "Winter (Hemanta)" },
        { id: "spring", label: "Spring (Vasanta)" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Ritucharya: The Wisdom of Seasons
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Nature changes, and so should we. Ritucharya explains how to adapt your diet and lifestyle to the changing seasons (Ritus) to maintain balance.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="summer" className="mb-12 scroll-mt-24">
                        <div className="bg-orange-50 rounded-xl overflow-hidden border border-orange-100">
                            <div className="bg-orange-100 p-4 border-b border-orange-200 flex items-center gap-3">
                                <Sun className="w-6 h-6 text-orange-600" />
                                <h2 className="text-xl font-bold text-orange-900">Summer (Grishma Ritu) - May to mid-July</h2>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-orange-900"><strong>Dosha Effect:</strong> Pitta (Fire) increases. Body strength is low.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-bold text-orange-800 mb-2">✅ Do's:</h4>
                                        <ul className="text-sm list-disc ml-5 text-gray-700">
                                            <li>Sweet, light, liquid diet</li>
                                            <li>Rice, milk, ghee, grapes, watermelon</li>
                                            <li>Coconut water, buttermilk</li>
                                            <li>Moonlight walks (cooling)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-orange-800 mb-2">❌ Don'ts:</h4>
                                        <ul className="text-sm list-disc ml-5 text-gray-700">
                                            <li>Spicy, salty, sour foods</li>
                                            <li>Alcohol and caffeine</li>
                                            <li>Heavy exercise</li>
                                            <li>Direct sun exposure</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="monsoon" className="mb-12 scroll-mt-24">
                        <div className="bg-blue-50 rounded-xl overflow-hidden border border-blue-100">
                            <div className="bg-blue-100 p-4 border-b border-blue-200 flex items-center gap-3">
                                <Cloud className="w-6 h-6 text-blue-600" />
                                <h2 className="text-xl font-bold text-blue-900">Monsoon (Varsha Ritu) - mid-July to Sept</h2>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-blue-900"><strong>Dosha Effect:</strong> Vata aggravates. Digestion (Agni) is weakest.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-bold text-blue-800 mb-2">✅ Do's:</h4>
                                        <ul className="text-sm list-disc ml-5 text-gray-700">
                                            <li>Sour, salty, oily foods (calms Vata)</li>
                                            <li>Warm soups, old grains</li>
                                            <li>Ginger tea with meals</li>
                                            <li>Boiled water only</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-800 mb-2">❌ Don'ts:</h4>
                                        <ul className="text-sm list-disc ml-5 text-gray-700">
                                            <li>Leafy greens (prone to worms)</li>
                                            <li>Daytime sleeping</li>
                                            <li>Getting wet in rain</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="winter" className="mb-12 scroll-mt-24">
                        <div className="bg-stone-50 rounded-xl overflow-hidden border border-stone-200">
                            <div className="bg-stone-200 p-4 border-b border-stone-300 flex items-center gap-3">
                                <Snowflake className="w-6 h-6 text-stone-600" />
                                <h2 className="text-xl font-bold text-stone-900">Winter (Hemanta/Shishira) - Nov to Feb</h2>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-stone-900"><strong>Effect:</strong> Digestive fire is strongest. Body needs fuel.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-bold text-stone-800 mb-2">✅ Do's:</h4>
                                        <ul className="text-sm list-disc ml-5 text-gray-700">
                                            <li>Heavy, nourishing foods</li>
                                            <li>Ghee, nuts, sesame seeds, dates</li>
                                            <li>Milk products, meat soup</li>
                                            <li>Oil massage (Abhyanga)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-800 mb-2">❌ Don'ts:</h4>
                                        <ul className="text-sm list-disc ml-5 text-gray-700">
                                            <li>Cold drinks</li>
                                            <li>Light, dry foods (increase Vata)</li>
                                            <li>Fasting (weakens body now)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="spring" className="mb-12 scroll-mt-24">
                        <div className="bg-green-50 rounded-xl overflow-hidden border border-green-100">
                            <div className="bg-green-100 p-4 border-b border-green-200 flex items-center gap-3">
                                <Wind className="w-6 h-6 text-green-600" />
                                <h2 className="text-xl font-bold text-green-900">Spring (Vasanta) - March to April</h2>
                            </div>
                            <div className="p-6">
                                <p className="mb-4 text-green-900"><strong>Effect:</strong> Kapha melts. Prone to colds and allergies.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-bold text-green-800 mb-2">✅ Do's:</h4>
                                        <ul className="text-sm list-disc ml-5 text-gray-700">
                                            <li>Light, dry, bitter foods</li>
                                            <li>Barley, honey, spices</li>
                                            <li>Vigorous exercise</li>
                                            <li>Dry massage (Udvartana)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-green-800 mb-2">❌ Don'ts:</h4>
                                        <ul className="text-sm list-disc ml-5 text-gray-700">
                                            <li>Heavy, oily, sweet foods</li>
                                            <li>Daytime sleep</li>
                                            <li>Dairy products (increase mucus)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
