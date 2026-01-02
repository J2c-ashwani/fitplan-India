import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Brain, CloudLightning, Coffee, Moon, Ban, CheckCircle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Migraine Relief: Ardhavabhedaka Cure | FitPlan India",
    description: "Stop the throbbing pain naturally. Comprehensive guide to Ayurvedic Nasya therapy, trigger foods, and herbal remedies for permanent migraine relief.",
    keywords: ["Ayurveda for migraine", "Ardhavabhedaka treatment", "Nasya therapy benefits", "Migraine home remedies India", "Headache trigger foods"],
}

export default function MigrainePage() {
    const tocItems = [
        { id: "intro", label: "Understanding Migraine" },
        { id: "nasya", label: "Nasya Therapy" },
        { id: "diet", label: "Trigger Foods" },
        { id: "remedies", label: "Home Remedies" },
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
                        Ardhavabhedaka: The Splitting Pain
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        In Ayurveda, a migraine is not just a headache; it is <strong>"Ardhavabhedaka"</strong> (half-head pain) caused by the blockage of Vata and Pitta in the cranial nerves.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Root Cause</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                While modern medicine treats the symptom with painkillers, Ayurveda treats the root: <strong>Vitiated Vata</strong> (dryness/constriction) blocking the blood vessels in the brain, often aggravated by <strong>Pitta</strong> (heat/acidity).
                            </p>
                            <p className="mt-4">
                                This explains why migraines are often accompanied by nausea (Pitta) and sensitivity to light/sound (Vata). The cure involves cleansing the sinuses and cooling the blood.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Nasya Section */}
                <section id="nasya" className="mb-20 scroll-mt-24">
                    <div className="bg-purple-50 p-8 md:p-12 rounded-3xl border border-purple-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-purple-100 rounded-2xl">
                                <Brain className="w-10 h-10 text-purple-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-gray-900">Nasya: The Direct Route to the Brain</h2>
                        </div>
                        <p className="text-gray-700 mb-8 text-lg">
                            The nose is the doorway to the brain (<em>Nasa Hi Shiraso Dwaram</em>). Instilling medicated oils clears the channels and instantly calms the central nervous system.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-purple-900 text-lg mb-3">Protocol (Morning)</h3>
                                <ol className="list-decimal ml-5 space-y-2 text-gray-700 bg-purple-50/50 p-4 rounded-lg">
                                    <li>Lie down on your back with head tilted back.</li>
                                    <li>Put <strong>2 drops</strong> of <em>Anu Taila</em> or Warm Ghee in each nostril.</li>
                                    <li>Sniff deeply.</li>
                                    <li>Massage the forehead and sinuses for 2 mins.</li>
                                </ol>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-purple-900 text-lg mb-3">Scientific Mechanism</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Nasya stimulates the olfactory nerve centers in the limbic system. The lipid-soluble herbs cross the blood-brain barrier faster than oral medicines, reducing neuro-inflammation and regulating serotonin.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Diet/Triggers Section */}
                <section id="diet" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Identify Your Triggers</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-red-100 bg-red-50">
                            <CardContent className="p-6">
                                <h3 className="flex items-center gap-2 font-bold text-red-900 mb-4 text-lg">
                                    <Ban className="w-5 h-5" /> Major Triggers (Avoid)
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-2">❌ <strong>Aged Cheese/Wine:</strong> High in tyramine.</li>
                                    <li className="flex gap-2">❌ <strong>Fermented Foods:</strong> Idli/Dosa batter (sourness aggravates Pitta).</li>
                                    <li className="flex gap-2">❌ <strong>Skipping Meals:</strong> Low blood sugar triggers Vata.</li>
                                    <li className="flex gap-2">❌ <strong>Spicy Chilis:</strong> Increases body heat instantly.</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-green-100 bg-green-50">
                            <CardContent className="p-6">
                                <h3 className="flex items-center gap-2 font-bold text-green-900 mb-4 text-lg">
                                    <CheckCircle className="w-5 h-5" /> Cooling Foods (Favor)
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex gap-2">✅ <strong>Sweet Fruits:</strong> Melon, Pears, Grapes.</li>
                                    <li className="flex gap-2">✅ <strong>Ghee:</strong> The ultimate Pitta pacifier. Add to rice.</li>
                                    <li className="flex gap-2">✅ <strong>Coconut Water:</strong> Cools the blood.</li>
                                    <li className="flex gap-2">✅ <strong>Milk:</strong> Warm milk with saffron at night.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Remedies Section */}
                <section id="remedies" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">SOS: Instant Relief Remedies</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="bg-stone-100 p-3 rounded-full shrink-0">
                                <CloudLightning className="w-6 h-6 text-stone-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">1. Ginger Powder Paste</h3>
                                <p className="text-gray-600">Mix 1 tsp dry ginger powder with a little water to make a paste. Apply it on the forehead. The slight burning sensation draws blood away from the heavy head, relieving pressure.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="bg-stone-100 p-3 rounded-full shrink-0">
                                <Moon className="w-6 h-6 text-stone-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">2. Brahmi Cooling Oil</h3>
                                <p className="text-gray-600">Massage the scalp with Brahmi or Bhringraj oil. It cools the Pitta in the head and induces sleep, which is often the best cure for a migraine attack.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Why do migraines happen on weekends?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                This is "Let-down Migraine". The sudden drop in stress levels (Vata) allows blood vessels to dilate rapidly, causing pain. Maintain a consistent sleep schedule even on weekends.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can caffeine help?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Initially, yes, as caffeine constricts blood vessels. However, the subsequent "caffeine crash" causes rebound dilation, making the headache worse. It is better to avoid reliance on coffee.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div>
    )
}
