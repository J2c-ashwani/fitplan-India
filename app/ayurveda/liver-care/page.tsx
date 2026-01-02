import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Activity, Droplet, AlertCircle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Liver Detox: Yakrit Care Guide | FitPlan India",
    description: "Revive your liver with Ayurveda. Effective home remedies for Fatty Liver, Jaundice, and Sluggish Liver using Kutki, Bhumi Amla, and simple diet changes.",
    keywords: ["Ayurveda for fatty liver", "Liver detox home remedies", "Kutki benefits", "Bhumi amla for liver", "Ayurvedic diet for liver health"],
}

export default function LiverPage() {
    const tocItems = [
        { id: "intro", label: "The Fire Engine" },
        { id: "signs", label: "Signs of Toxins" },
        { id: "herbs", label: "Liver Herbs" },
        { id: "detox", label: "Detox Plan" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Yakrit Care: Natural Liver Detox
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        The liver is the seat of <strong>Pitta</strong> (Fire). It governs digestion, metabolism, and the purity of blood. keeping it cool and clean is essential for health.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Liver Health Matters</h2>
                        <p className="text-gray-700">
                            Ayurveda calls the liver <strong>Yakrit</strong>. It is responsible for converting <strong>Rasa Dhatu</strong> (Nutrient plasma) into <strong>Rakta Dhatu</strong> (Blood). If the liver is sluggish, toxins enter the blood, causing skin diseases, acne, and hormonal issues.
                        </p>
                    </section>

                    <section id="signs" className="mb-12 scroll-mt-24">
                        <div className="bg-amber-50 rounded-xl p-6">
                            <h3 className="font-bold text-amber-900 mb-4 flex items-center"><AlertCircle className="w-5 h-5 mr-2" /> Signs Your Liver Needs Help</h3>
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-800">
                                <ul className="list-disc ml-5 space-y-1">
                                    <li>Chronic fatigue or weakness</li>
                                    <li>Yellowing of eyes/skin</li>
                                    <li>Bloating after fatty meals</li>
                                    <li>Acne, rashes, or itchy skin</li>
                                </ul>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li>Anger and irritability (High Pitta)</li>
                                    <li>Bad breath or coated tongue</li>
                                    <li>High cholesterol</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Miracle Herbs for Liver</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">1. Kutki</h3>
                                    <p className="text-gray-700 text-sm">A bitter herb that is cooling for the liver. It promotes bile flow and protects liver cells from toxins. Excellent for Fatty Liver.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">2. Bhumi Amla</h3>
                                    <p className="text-gray-700 text-sm">Clinically proven to help with Hepatitis B. It regenerates liver tissues and reverses livel damage.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">3. Kalmegh</h3>
                                    <p className="text-gray-700 text-sm">Simple and potent. It acts as a blood purifier and boosts liver immunity.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">4. Aloe Vera</h3>
                                    <p className="text-gray-700 text-sm">Cooling and cleansing. 20ml juice in the morning flushes out Pitta heat from the liver.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="detox" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Simple Liver Detox Routine</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="font-bold text-emerald-600 mr-3">1.</div>
                                <p className="text-gray-700"><strong>Start Day with Lemon Water:</strong> Warm water + 1/2 lemon. Sour taste stimulates the liver to dump toxins.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="font-bold text-emerald-600 mr-3">2.</div>
                                <p className="text-gray-700"><strong>Eat Cruciferous Veggies:</strong> Broccoli, Cabbage, and Cauliflower aid liver enzyme production.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="font-bold text-emerald-600 mr-3">3.</div>
                                <p className="text-gray-700"><strong>Avoid Alcohol & Fried Food:</strong> Give your liver a break. These are the hardest for it to process.</p>
                            </div>
                            <div className="flex items-start">
                                <div className="font-bold text-emerald-600 mr-3">4.</div>
                                <p className="text-gray-700"><strong>Dinner by 7 PM:</strong> The liver detoxes itself between 10 PM and 2 AM. If you eat late, it is busy digesting instead of cleaning.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
