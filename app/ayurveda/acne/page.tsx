import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sparkles, Droplet, Flame, AlertCircle, Ban, CheckCircle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "Ayurvedic Acne Cure: Yuvana Pidika Map & Remedies | FitPlan India",
    description: "Map your acne to your internal organs. Complete Ayurvedic guide to curing Yuvana Pidika (Acne) using Neem, Manjistha, and the Pitta-pacifying diet.",
    keywords: ["Ayurvedic acne map", "Neem for acne benefits", "Pitta dosha acne diet", "Yuvana Pidika treatment", "Manjistha for skin glow"],
}

export default function AcnePage() {
    const tocItems = [
        { id: "intro", label: "The Internal Fire" },
        { id: "map", label: "Face Mapping" },
        { id: "herbs", label: "Blood Purifiers" },
        { id: "remedies", label: "External Packs" },
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
                        Yuvana Pidika: The Heat Within
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Creams only treat 10% of the problem. In Ayurveda, acne is <strong>not a skin problem</strong>; it is a blood (Rakta) and Pitta problem. The heat is trying to escape through your skin.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Why You Break Out</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Acne, or <em>Yuvana Pidika</em>, is primarily caused by the vitiation of <strong>Pitta Dosha</strong> (Heat) and <strong>Rakta Dhatu</strong> (Blood). When you eat spicy, sour, or fermented foods, toxins mix with the blood and erupt as pimples.
                            </p>
                            <p className="mt-4">
                                Kapha then makes the pus, and Vata causes the scarring. To cure it, you must <strong>cool the blood</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Face Mapping Section */}
                <section id="map" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Ayurvedic Face Map</h2>
                    <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100">
                        <p className="text-center text-gray-600 mb-8">Where you break out tells you which organ is struggling.</p>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-rose-900 text-lg mb-2">Forehead</h3>
                                <p className="text-sm text-gray-600"><strong>Digestive System</strong></p>
                                <p className="text-xs text-gray-500 mt-2">Cause: Constipation, toxins, lack of water.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-rose-900 text-lg mb-2">Cheeks</h3>
                                <p className="text-sm text-gray-600"><strong>Lungs & Stomach</strong></p>
                                <p className="text-xs text-gray-500 mt-2">Cause: Overeating, pollution, sugar intake.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-rose-900 text-lg mb-2">Chin/Jaw</h3>
                                <p className="text-sm text-gray-600"><strong>Hormones (Reproductive)</strong></p>
                                <p className="text-xs text-gray-500 mt-2">Cause: Menstrual cycle, PCOD, stress.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Internal Herbs */}
                <section id="herbs" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">The Blood Purifiers (Rakta Shodhaka)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-green-100 bg-green-50">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-green-900 text-lg mb-2">1. Neem (The Bitter King)</h3>
                                <p className="text-gray-700 text-sm mb-3">Neem is the most powerful antibacterial herb in the world.</p>
                                <div className="bg-white p-3 rounded-lg text-sm text-green-800">
                                    <strong>How to take:</strong> Chew 4-5 fresh leaves empty stomach daily or take 1 capsule. It kills the acne-causing bacteria from within.
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-red-100 bg-red-50">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-red-900 text-lg mb-2">2. Manjistha (Rubia Cordifolia)</h3>
                                <p className="text-gray-700 text-sm mb-3">Known as the "Vascular System Cleaner."</p>
                                <div className="bg-white p-3 rounded-lg text-sm text-red-800">
                                    <strong>How to take:</strong> Take 1 tsp Manjistha powder with warm water. It removes deep-seated heat from the blood and lightens scars.
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* External Remedies */}
                <section id="remedies" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">External Applications (Lepa)</h2>
                    <div className="space-y-6">
                        <div className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="bg-emerald-100 p-3 rounded-full shrink-0">
                                <Sparkles className="w-6 h-6 text-emerald-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">For Active Pimples: Neem & Turmeric</h3>
                                <p className="text-gray-600">Mix fresh Neem leaf paste with a pinch of Turmeric. Apply on pimples (not whole face) and leave for 20 mins. It dries them out overnight.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="bg-emerald-100 p-3 rounded-full shrink-0">
                                <Sparkles className="w-6 h-6 text-emerald-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">For Scars: Aloe Vera & Saffron</h3>
                                <p className="text-gray-600">Mix fresh Aloe Gel with 2-3 strands of Saffron. Massage nightly. Aloe heals, Saffron lightens pigmentation.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mb-20">
                    <SuccessStory
                        name="Ananya R."
                        age={24}
                        condition="Cystic Acne"
                        result="Clear Skin in 45 Days"
                        quote="I spent a fortune on dermatologists. Dr. Arti's advice to stop yogurt (fermented) and start Neem capsules changed my skin. The cysts stopped erupting within 2 weeks."
                        duration="6 Weeks"
                    />
                </div>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Is milk bad for acne?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Yes. For acne-prone skin, dairy is often a trigger because it is heavy, mucus-forming (Kapha), and often contains hormones. Try cutting dairy for 2 weeks to see results.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can I pop pimples?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Never. Popping forces the bacteria deeper into the dermis and damages the collagen, leading to permanent pits (scars) that Ayurveda calls <em>Kshudra Roga</em>.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div>
    )
}
