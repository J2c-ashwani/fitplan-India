import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sparkles, Feather, Scale, Heart, Bath, Leaf } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Body Polishing: Udvartana at Home | FitPlan India",
    description: "Udvartana is the Ayurvedic art of dry massage with herbal powders. Learn how to make Ubtan for glowing skin, cellulite reduction, and lymphatic drainage.",
    keywords: ["Ayurvedic body polishing", "Udvartana for weight loss", "DIY Ubtan recipe", "Lymphatic drainage massage at home", "Skin glow powder"],
}

export default function BodyPolishingPage() {
    const tocItems = [
        { id: "intro", label: "What is Udvartana?" },
        { id: "benefits", label: "Benefits" },
        { id: "recipes", label: "DIY Recipes" },
        { id: "how-to", label: "Step-by-Step" },
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
                        Udvartana: The Royal Scrub
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Abhyanga is oil massage; <strong>Udvartana</strong> is dry herbal powder massage. It is the secret to the radiant, firm skin of Indian royalty. It doesn't just clean; it sculpts.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Friction is Medicine</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Unlike spa scrubs that just exfoliate, Udvartana is a therapeutic procedure where herbal powders are rubbed <strong>upwards</strong> (against the direction of hair growth) with pressure.
                            </p>
                            <p className="mt-4">
                                This friction generates heat, melts subcutaneous fat (Kapha), and stimulates the lymphatic system to drain toxins. It is the #1 recommended therapy for weight loss and cellulite.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section id="benefits" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Why You Need It</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-amber-50 border-amber-100">
                            <CardContent className="p-6">
                                <h3 className="flex items-center gap-2 font-bold text-amber-900 text-lg mb-2">
                                    <Scale className="w-5 h-5" /> Melts Cellulite
                                </h3>
                                <p className="text-gray-700 text-sm">The vigorous upward strokes break down fat deposits under the skin, smoothing out cellulite lumps.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-amber-50 border-amber-100">
                            <CardContent className="p-6">
                                <h3 className="flex items-center gap-2 font-bold text-amber-900 text-lg mb-2">
                                    <Sparkles className="w-5 h-5" /> Instant Glow
                                </h3>
                                <p className="text-gray-700 text-sm">Removes dead skin cells and increases blood flow to the surface, giving you that "post-workout" redness and glow.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-amber-50 border-amber-100">
                            <CardContent className="p-6">
                                <h3 className="flex items-center gap-2 font-bold text-amber-900 text-lg mb-2">
                                    <Feather className="w-5 h-5" /> Removes Body Odor
                                </h3>
                                <p className="text-gray-700 text-sm">Herbs like Sandalwood and Chickpea flour neutralize sweat bacteria and cleanse pores deep down.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-amber-50 border-amber-100">
                            <CardContent className="p-6">
                                <h3 className="flex items-center gap-2 font-bold text-amber-900 text-lg mb-2">
                                    <Heart className="w-5 h-5" /> Lymphatic Detox
                                </h3>
                                <p className="text-gray-700 text-sm">Stimulates the sluggish lymph nodes to drain water retention (Edema).</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Recipes Section */}
                <section id="recipes" className="mb-20 scroll-mt-24">
                    <div className="bg-emerald-50/50 p-8 md:p-12 rounded-3xl border border-emerald-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Make Your Own "Ubtan"</h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-emerald-900 mb-2">For Oily Skin / Weight Loss (Kapha)</h3>
                                <p className="text-gray-600 text-sm mb-4">Dry, rough powder to create heat.</p>
                                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                                    <li>1 cup Chickpea Flour (Besan)</li>
                                    <li>1 tbsp Triphala Powder</li>
                                    <li>1 tsp Turmeric</li>
                                    <li><strong>Mix with:</strong> Just water or dry rub.</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-emerald-900 mb-2">For Dry Skin (Vata)</h3>
                                <p className="text-gray-600 text-sm mb-4">Moisturizing paste.</p>
                                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                                    <li>1 cup Almond Powder or Red Lentil flour</li>
                                    <li>1 tbsp Sandalwood powder</li>
                                    <li><strong>Mix with:</strong> Warm Milk or Cream (Malai).</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-emerald-900 mb-2">For Sensitive Skin / Rashes (Pitta)</h3>
                                <p className="text-gray-600 text-sm mb-4">Cooling, soothing paste.</p>
                                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                                    <li>1 cup Oat flour</li>
                                    <li>1 tbsp Neem powder</li>
                                    <li>1 tbsp Rose petal powder</li>
                                    <li><strong>Mix with:</strong> Rose water or Cold Milk.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How-to Section */}
                <section id="how-to" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">The Technique</h2>
                    <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
                        <ol className="list-decimal ml-5 space-y-4 text-gray-800">
                            <li><strong>Stand in the shower:</strong> It gets messy!</li>
                            <li><strong>Make a paste:</strong> Mix your powder with water/milk to make a thick paste.</li>
                            <li><strong>Apply Upwards (Pratiloma):</strong> Start from feet. Rub firmly upwards towards the heart. This direction fights gravity and helps lymph flow.</li>
                            <li><strong>Focus on fat:</strong> Scrub thighs, buttocks, and belly vigorously for 5-10 minutes.</li>
                            <li><strong>Rinse:</strong> Wash off with warm water. Do not use soap (the herbs are the soap!).</li>
                        </ol>
                    </div>
                </section>


                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">How often should I do it?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                For weight loss (Kapha), do it daily. For general glow, 2-3 times a week is sufficient. It is traditionally done daily during the <strong>Spring</strong> season to melt winter fat.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can men do it?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Absolutely. In ancient India, wrestlers (Pahalwans) used Udvartana to define muscle tone and remove excess oil/sweat after practice.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div>
    )
}
