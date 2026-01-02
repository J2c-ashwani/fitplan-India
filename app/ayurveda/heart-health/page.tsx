import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Activity, Timer, Zap, Scale, Pill } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Heart Health: Arjuna & Cholesterol Management | FitPlan India",
    description: "Strengthen your heart (Hridaya) with Ayurveda. Comprehensive guide to Arjuna Bark, Garlic therapy, and managing blood pressure naturally.",
    keywords: ["Arjuna for heart", "Ayurveda for cholesterol", "High blood pressure home remedies", "Hridaya roga treatment", "Garlic for heart health"],
}

export default function HeartPage() {
    const tocItems = [
        { id: "intro", label: "The Seat of Consciousness" },
        { id: "arjuna", label: "Arjuna: The Hero Herb" },
        { id: "cholesterol", label: "Managing Cholesterol" },
        { id: "lifestyle", label: "Heart Lifestyle" },
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
                        Hridaya: The Seat of Life
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        In Ayurveda, the heart is not just a pump; it is the seat of <strong>Ojas</strong> (vitality), <strong>Prana</strong> (breath), and consciousness. Protecting it requires balancing emotional and physical health.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Why Modern Hearts Are Breaking</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Heart disease is often called <strong>Hridaya Roga</strong>. It is primarily caused by the blockage of channels (Dhamani) by thickened Kapha (cholesterol/plaque) and hardening by Vata (stress/high BP).
                            </p>
                            <p className="mt-4">
                                The Ayurvedic approach is twofold: <strong>Lekhana</strong> (scraping) therapies to remove blockages and <strong>Rasayana</strong> (rejuvenation) therapies to strengthen the heart muscle.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Arjuna Section */}
                <section id="arjuna" className="mb-20 scroll-mt-24">
                    <div className="bg-rose-50/50 p-8 md:p-12 rounded-3xl border border-rose-100">
                        <h2 className="text-3xl font-serif font-bold text-rose-900 mb-6">Arjuna: The Guardian of the Heart</h2>
                        <p className="text-gray-700 mb-8 text-lg">
                            If there is one herb you remember for heart health, let it be <strong>Arjuna (Terminalia Arjuna)</strong>.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-white border-none shadow-md">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-rose-800 text-lg mb-2">Scientific Power</h3>
                                    <p className="text-gray-600 text-sm">
                                        Rich in Co-enzyme Q10 and glycosides. Clinical trials show it improves Left Ventricular Ejection Fraction (LVEF) and reduces angina frequency. It acts as a natural beta-blocker.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white border-none shadow-md">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-rose-800 text-lg mb-2">How to Use (Ksheerapaka)</h3>
                                    <p className="text-gray-600 text-sm">
                                        Boil 1 tsp of Arjuna Bark powder in 1 cup of Milk + 1 cup of Water until it reduces to 1 cup. Drink this "Arjuna Milk" daily before bed.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Cholesterol Section */}
                <section id="cholesterol" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Scraping Away Cholesterol</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                                <Zap className="w-6 h-6 text-yellow-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">1. Garlic (Lashuna)</h3>
                                <p className="text-gray-600">The most potent enemy of cholesterol. Swallow 1 clove of raw garlic (chopped) with warm water on an empty stomach. Allicin helps reduce LDL levels.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                                <Scale className="w-6 h-6 text-yellow-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">2. Cinnamon & Honey</h3>
                                <p className="text-gray-600">Mix 1/2 tsp Ceylone Cinnamon + 1 tsp Honey in warm water. It improves metabolism and helps "melt" Kapha deposits in arteries.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="bg-yellow-100 p-3 rounded-full shrink-0">
                                <Activity className="w-6 h-6 text-yellow-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">3. Guggul</h3>
                                <p className="text-gray-600">A resin known for its lipid-lowering activity. Often prescribed as <em>Medohar Guggulu</em> for weight loss and cholesterol control.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Lifestyle Section */}
                <section id="lifestyle" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Heart-Healthy Routine</h2>
                    <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="font-bold text-sky-600 text-xl">01</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Manage Stress (Pranayama)</h4>
                                    <p className="text-gray-700 text-sm">Do <strong>Anulom Vilom</strong> (Alternate Nostril Breathing) for 10 mins. It calms the Vata in the mind and lowers blood pressure instantly.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="font-bold text-sky-600 text-xl">02</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Early Dinner</h4>
                                    <p className="text-gray-700 text-sm">Late meals put immense pressure on the heart as digestion competes with sleep. Eat by 7 PM.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="font-bold text-sky-600 text-xl">03</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Left-Side Sleeping</h4>
                                    <p className="text-gray-700 text-sm">Sleep on your left side (Vamkukshi). This uses gravity to help the lymph drain towards the heart and aids digestion.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can I take Arjuna if I'm on medication?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Arjuna naturally lowers BP and thins blood slightly. If you are already on thinners (like aspirin) or beta-blockers, consult your doctor to avoid hypotensive effects.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Is Coffee bad for the heart?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                For Vata and Pitta types, yes. Caffeine increases heart rate and blood pressure. Ayurveda recommends replacing it with <strong>Brahmi Tea</strong> or simply warm water.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div>
    )
}
