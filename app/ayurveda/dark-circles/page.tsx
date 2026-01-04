import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Eye, Moon, Sparkles, Droplet, Clock, Coffee } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "Ayurveda for Dark Circles: Kumkumadi & Eye Care | FitPlan India",
    description: "Dark circles are a sign of Vata imbalance and stress. Learn how to erase them using Kumkumadi Tailam, Aloe Vera, and Ayurvedic eye exercises (Trataka).",
    keywords: ["Ayurveda for dark circles", "Kumkumadi tailam benefits", "Under eye home remedies", "Vata dosha eyes", "Trataka eye exercise"],
}

export default function DarkCirclesPage() {
    const tocItems = [
        { id: "intro", label: "The Vata-Pitta Link" },
        { id: "kumkumadi", label: "Kumkumadi Tailam" },
        { id: "remedies", label: "Quick Fixes" },
        { id: "exercises", label: "Eye Yoga" },
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
                        Windows to the Soul
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Dark circles are not just cosmetic. In Ayurveda, they indicate <strong>Rasa Dhatu Kshaya</strong> (dehydration of nutritional plasma) and high Vata (stress/dryness).
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Why Do They Appear?</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                The skin under the eyes is the thinnest in the body. When you are stressed or sleep-deprived, the body enters "survival mode", diverting blood to vital organs. The blood vessels under the eyes constrict and become visible as dark shadows.
                            </p>
                            <p className="mt-4">
                                <strong>Vata types</strong> get grayish/brown circles (dryness). <strong>Pitta types</strong> get yellowish/purple circles (heat).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Kumkumadi Section */}
                <section id="kumkumadi" className="mb-20 scroll-mt-24">
                    <div className="bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-amber-100 rounded-2xl">
                                <Sparkles className="w-10 h-10 text-amber-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-gray-900">Kumkumadi Tailam: The Golden Elixir</h2>
                        </div>
                        <p className="text-gray-700 mb-8 text-lg">
                            This is the gold standard in Ayurveda for eye care. It is a blend of <strong>Saffron (Kesar)</strong>, Sandalwood, and 16 other herbs cooked in goat milk and sesame oil.
                        </p>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-amber-900 text-lg mb-3">How to Use</h3>
                            <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                                <li>Take just <strong>1 drop</strong> on your ring finger (the weakest finger).</li>
                                <li>Gently massage under the eye in a circular motion for 1 minute before bed.</li>
                                <li><strong>Do not wash off.</strong> Let the saffron work overnight to lighten pigmentation.</li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* Remedies Section */}
                <section id="remedies" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Kitchen Remedies</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <h3 className="font-bold text-gray-900 text-lg mb-3">1. Cucumber & Rose Water</h3>
                            <p className="text-gray-600">The classic remedy works because it is <strong>Cooling (Sheeta)</strong>. It constricts dilated blood vessels, reducing puffiness instantly.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <h3 className="font-bold text-gray-900 text-lg mb-3">2. Almond Oil</h3>
                            <p className="text-gray-600">Rich in Vitamin E. It nourishes the Vata dryness. Apply a drop if you don't have Kumkumadi oil.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <h3 className="font-bold text-gray-900 text-lg mb-3">3. Cold Milk Pads</h3>
                            <p className="text-gray-600">Dip cotton pads in cold raw milk and place on eyes for 10 mins. Lactic acid lightens skin while fat moisturizes it.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                            <h3 className="font-bold text-gray-900 text-lg mb-3">4. Aloe Vera</h3>
                            <p className="text-gray-600">Anti-inflammatory. Soothes tired eyes from screen strain.</p>
                        </div>
                    </div>
                </section>

                {/* Exercises/Yoga Section */}
                <section id="exercises" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Trataka: Yoga for Eyes</h2>
                    <div className="flex gap-6 items-start p-8 bg-sky-50 rounded-3xl shadow-sm border border-sky-100">
                        <div className="hidden md:block bg-sky-100 p-4 rounded-full">
                            <Eye className="w-8 h-8 text-sky-700" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Candle Gazing (Trataka)</h3>
                            <p className="text-gray-700 mb-4">
                                Staring at a computer screen freezes the eye muscles, reducing blood flow. Trataka improves circulation and vision.
                            </p>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li>1. Light a ghee lamp/candle at eye level in a dark room.</li>
                                <li>2. Gaze at the flame without blinking until tears come out.</li>
                                <li>3. Close your eyes and visualize the flame.</li>
                                <li>4. This "tear cleansing" washes out toxins and stress from the eyes.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="mb-20">
                    <SuccessStory
                        name="Riya S."
                        age={32}
                        condition="Chronic Dark Circles"
                        result="Visible Reduction"
                        quote="I tried every eye cream at Sephora. Kumkumadi Tailam was different. It didn't just sit on top; it absorbed. Combined with Trataka, my eyes look 5 years younger."
                        duration="3 Weeks"
                    />
                </div>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Do eye creams really work?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Chemical creams only work on the surface. Ayurveda believes eyes are a "Pitta" organ. Unless you cool the body (liver) and get proper sleep (Ratricharya), surface creams will have limited effect.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Does water intake affect dark circles?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Yes. Dehydration makes the skin thinner, making blood vessels show through more. Drinking warm water keeps the Rasa Dhatu (plasma) plump and healthy.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div >
    )
}
