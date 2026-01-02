import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Moon, Sun, Flower2 } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurveda for Menopause: Managing Hot Flashes Naturally | FitPlan India",
    description: "Navigate Rajonivritti gracefully. Ayurvedic guide for hot flashes, mood swings, and bone health during menopause using Shatavari and cooling diets.",
    keywords: ["Ayurveda for menopause", "Hot flashes home remedies", "Shatavari for menopause", "Rajonivritti treatment", "Menopause diet plan"],
}

export default function MenopausePage() {
    const tocItems = [
        { id: "transition", label: "The Transition" },
        { id: "symptoms", label: "Managing Symptoms" },
        { id: "herbs", label: "Rasayanas" },
        { id: "lifestyle", label: "Self Care" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Rajonivritti: Graceful Menopause
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Menopause is not a disease; it is a transition from the householder phase (Pitta) to the elder/wisdom phase (Vata). Ayurveda helps you sail through this storm smoothly.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="transition" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vata & Pitta Dance</h2>
                        <p className="text-gray-700">
                            During this time, hormones (Pitta) decline, and the body becomes drier (Vata). This clash causes Hot Flashes (Pitta explosion) and Anxiety/Insomnia (Vata disturbance). The goal is to <strong>Cool Pitta</strong> and <strong>Ground Vata</strong>.
                        </p>
                    </section>

                    <section id="symptoms" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Symptom Solutions</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-3 bg-red-100 rounded-lg h-fit"><Sun className="w-6 h-6 text-red-600" /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Hot Flashes (Tejas)</h4>
                                    <p className="text-gray-700 mb-2">Sudden waves of heat. Avoid spicy food, alcohol, and caffeine. Drink <strong>Coconut Water</strong> and <strong>Fennel Tea</strong> daily to cool the body from inside.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-indigo-100 rounded-lg h-fit"><Moon className="w-6 h-6 text-indigo-600" /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Insomnia & Anxiety (Vata)</h4>
                                    <p className="text-gray-700 mb-2">Massaging feet with warm Sesame oil (Padabhyanga) before bed calms the nervous system instantly.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-3 bg-stone-100 rounded-lg h-fit"><Sparkles className="w-6 h-6 text-stone-600" /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">Vaginal Dryness</h4>
                                    <p className="text-gray-700 mb-2">Internal application of Ghee or specialist oils (like Shatavari Ghrita) restores moisture and elasticity.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Herbs for Women</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-pink-50 border-pink-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-pink-900 mb-2">1. Shatavari</h3>
                                    <p className="text-gray-700 text-sm">"She who possesses 100 husbands". It contains phytoestrogens that naturally balance declining hormones.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">2. Ashoka</h3>
                                    <p className="text-gray-700 text-sm">The "Remover of Sorrow". Relieves pelvic pain and supports the uterus.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">3. Brahmi</h3>
                                    <p className="text-gray-700 text-sm">Vital component for mental clarity. Helps reduce brain fog and mood swings.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bone Health (Asthi Dhatu)</h2>
                        <p className="text-gray-700 mb-4">
                            As estrogen drops, bones become porous (Vata entering bones).
                        </p>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700">
                            <li><strong>Calcium Rich Foods:</strong> Sesame seeds (Til) contain more calcium than milk. Eat 1 tsp daily.</li>
                            <li><strong>Yoga:</strong> Weight-bearing asanas like Warrior Pose strengthen bones.</li>
                            <li><strong>Vitamin D:</strong> Morning sun exposure is non-negotiable.</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    )
}
