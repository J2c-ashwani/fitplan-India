import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sparkles, Droplet, Flame, Moon, Scissors, AlertTriangle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurveda for Gray Hair: Reverse Palitya Naturally | FitPlan India",
    description: "Premature graying (Palitya) is a sign of high Pitta. Learn how to reverse it with Bhringraj Oil, Nasya, and cooling Ayurvedic diets.",
    keywords: ["Ayurveda for gray hair", "Bhringraj oil benefits", "Palitya treatment", "Nasya for hair growth", "Curry leaves for hair"],
}

export default function GrayHairPage() {
    const tocItems = [
        { id: "intro", label: "The Pitta Connection" },
        { id: "bhringraj", label: "Bhringraj Oil" },
        { id: "nasya", label: "Nasya for Hair" },
        { id: "diet", label: "Melanin Diet" },
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
                        Palitya: Turning Back the Clock
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        In Ayurveda, premature graying isn't about age; it's about <strong>Heat</strong>. When the body gets too hot (High Pitta), it literally "burns out" the melanin in your hair follicles.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Why Hair Turns Gray</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Hair color comes from a pigment called melanin. The fire element (<strong>Pitta Dosha</strong>) governs metabolism and transformation, including hair color.
                            </p>
                            <p className="mt-4">
                                Excessive anger, hot spicy food, alcohol, and stress overheat the liver. This trapped acid/heat travels to the scalp and "scorches" the hair roots, turning them white (Palitya).
                            </p>
                        </div>
                    </div>
                </section>

                {/* Bhringraj Section */}
                <section id="bhringraj" className="mb-20 scroll-mt-24">
                    <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-emerald-100 rounded-2xl">
                                <Sparkles className="w-10 h-10 text-emerald-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-gray-900">Bhringraj: The King of Hair</h2>
                        </div>
                        <p className="text-gray-700 mb-8 text-lg">
                            <em>Eclipta Alba</em>, or Bhringraj, is medically proven to darken hair and stimulate growth.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-emerald-900 text-lg mb-3">The "Mahabhringraj" Oil</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    This is not just herbal oil; it is an extraction process. The leaves are boiled in sesame oil until all moisture evaporates.
                                </p>
                                <div className="bg-emerald-50 p-3 rounded-lg text-sm text-emerald-800 font-medium">
                                    Massaging this oil nightly cools the scalp and feeds melanin directly to roots.
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-emerald-900 text-lg mb-3">Amla (Indian Gooseberry)</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    The richest source of Vitamin C. It is a <em>Rasayana</em> (Rejuvenator).
                                </p>
                                <div className="bg-emerald-50 p-3 rounded-lg text-sm text-emerald-800 font-medium">
                                    Drinking 30ml of Amla juice daily prevents graying from the inside by reducing whole-body Pitta.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nasya Section */}
                <section id="nasya" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Nasya: The Secret Weapon</h2>
                    <div className="flex gap-6 items-start p-8 bg-white rounded-3xl shadow-sm border border-stone-200">
                        <div className="hidden md:block bg-stone-100 p-4 rounded-full">
                            <Droplet className="w-8 h-8 text-stone-700" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Nose Drops for Hair?</h3>
                            <p className="text-gray-700 mb-4">
                                It sounds counter-intuitive, but the nose is the direct route to the cranial nerves. Putting <strong>2 drops of Anu Taila</strong> in each nostril daily lubricates the brain and scalp from within.
                            </p>
                            <p className="text-gray-700 font-medium">
                                result: It prevents premature graying, stops hair fall, and improves eyesight.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Diet Section */}
                <section id="diet" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">The Melanin Diet</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="border-green-100 bg-green-50">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-green-900 text-lg mb-4">✅ Eat (Cooling/Dark)</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li><strong>Curry Leaves:</strong> The specific remedy for gray hair. Chew 5-6 raw leaves daily.</li>
                                    <li><strong>Black Sesame Seeds:</strong> Rich in copper and iron (melanin precursors).</li>
                                    <li><strong>Coconut Water:</strong> Cools the Pitta immediately.</li>
                                    <li><strong>Iron-rich foods:</strong> Dates, Figs, Jaggery.</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-red-100 bg-red-50">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-red-900 text-lg mb-4">❌ Avoid (Heating)</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li><strong>Acidity creators:</strong> Vinegar, pickles, excessive chili.</li>
                                    <li><strong>Alcohol/Smoking:</strong> Major causes of oxidative stress (graying).</li>
                                    <li><strong>Salty foods:</strong> Excessive salt (Lavana) causes hair to fall and gray faster.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can white hair turn black again?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Once the follicle is completely dead (white), it is hard to reverse. However, <strong>graying</strong> strands (which still have some pigment) can often be darkened, and <strong>new growth</strong> can be restored to natural color with strict Pitta management.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Is Henna (Mehendi) good?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Yes, Henna is a natural conditioner and cooler. It colors the hair without the damaging chemicals of synthetic dyes. However, it can be drying, so always mix it with curd or oil.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div>
    )
}
