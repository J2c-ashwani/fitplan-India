import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Wind, Coffee, Droplet, ArrowRight, Ban, CheckCircle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Constipation Relief: Vibandha Cure | FitPlan India",
    description: "Chronic constipation (Vibandha) is the root of all disease. Learn how to cure it with Triphala, Castor Oil, and proper toilet posture.",
    keywords: ["Ayurveda for constipation", "Triphala dosage for constipation", "Castor oil for stomach cleaning", "Vata dosha constipation diet", "Natural laxatives India"],
}

export default function ConstipationPage() {
    const tocItems = [
        { id: "intro", label: "Root Cause" },
        { id: "remedies", label: "Natural Laxatives" },
        { id: "diet", label: "Fiber & Fats" },
        { id: "habits", label: "Toilet Habits" },
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
                        Vibandha: Breaking the Blockage
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        In Ayurveda, if your bowels don't clear in the morning, your day hasn't started. Constipation is a sign of high <strong>Vata</strong> (dryness), turning the gut into a desert.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Why It Happens</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                The colon is the primary seat of <strong>Vata Dosha</strong>. When Vata increases due to stress, travel, or dry food, it sucks the moisture out of the stool, making it hard and rocky.
                            </p>
                            <p className="mt-4">
                                This is not just uncomfortable; suffering from <strong>Vibandha</strong> means toxins (Ama) are being re-absorbed into the blood, leading to acne, headaches, and brain fog.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Remedies Section */}
                <section id="remedies" className="mb-20 scroll-mt-24">
                    <div className="bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100">
                        <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8">Safe Ayurvedic Laxatives</h2>
                        <div className="grid gap-6">
                            <Card className="bg-white border-none shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-amber-900 text-lg">1. Triphala Churna (The Daily Gentle)</h3>
                                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">Non-Habit Forming</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">A mix of Amla, Haritaki, and Bibhitaki. It tones the colon muscles rather than just flushing.</p>
                                    <div className="bg-amber-50 p-3 rounded-lg text-sm text-amber-800">
                                        <strong>Dose:</strong> 1 tsp with warm water before bed.
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white border-none shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-amber-900 text-lg">2. Castor Oil (The Heavy Duty)</h3>
                                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-bold">Use Occasionally</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">Rich in Ricinoleic acid, it stimulates strong bowel movements. Best for severe, stubborn constipation.</p>
                                    <div className="bg-amber-50 p-3 rounded-lg text-sm text-amber-800">
                                        <strong>Dose:</strong> 1 tbsp in warm milk at night.
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="bg-white border-none shadow-md">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-amber-900 text-lg">3. Munakka (Black Raisins)</h3>
                                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">Safe for Kids/Pregnant</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-3">Gentle hydration for the gut. Good for dry, hard stools.</p>
                                    <div className="bg-amber-50 p-3 rounded-lg text-sm text-amber-800">
                                        <strong>Dose:</strong> Soak 10-15 raisins overnight. Eat them and drink the water in morning.
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Diet Section */}
                <section id="diet" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Eating for Elimination</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="flex items-center gap-2 font-bold text-green-800 text-xl mb-4">
                                <CheckCircle className="w-6 h-6" /> Lubricate (Snehan)
                            </h4>
                            <ul className="space-y-4 text-gray-700">
                                <li><strong>Ghee:</strong> The most important remedy. Add 1 tsp of Ghee to every meal. It lubricates the intestines so stool slides out.</li>
                                <li><strong>Warm Milk:</strong> Natural mild laxative.</li>
                                <li><strong>Papaya & Guava:</strong> Rich in enzymes and roughage.</li>
                                <li><strong>Oatmeal:</strong> Soluble fiber that holds water.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="flex items-center gap-2 font-bold text-red-800 text-xl mb-4">
                                <Ban className="w-6 h-6" /> Dryness (Ruksha)
                            </h4>
                            <ul className="space-y-4 text-gray-700">
                                <li><strong>Raw Salads:</strong> Too rough and dry for a Vata gut. Cook your veggies!</li>
                                <li><strong>Popcorn/Crackers:</strong> Like eating cardboard—absorbs all moisture.</li>
                                <li><strong>Cold Water:</strong> Constricts the gut muscles (peristalsis).</li>
                                <li><strong>Black Tea/Coffee:</strong> Diuretics that dehydrate the colon.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Habits Section */}
                <section id="habits" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Potty Training for Adults</h2>
                    <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="font-bold text-sky-600 text-xl">01</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Squat, Don't Sit</h4>
                                    <p className="text-gray-700 text-sm">Western toilets kink the colon. Use a <strong>footstool</strong> to raise your knees above your hips. This straightens the rectum for easy exit.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="font-bold text-sky-600 text-xl">02</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">The Morning Water (Usha Paan)</h4>
                                    <p className="text-gray-700 text-sm">Drink 1 liter of lukewarm water immediately upon waking. The pressure (Gastro-colic reflex) triggers the urge to go.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="font-bold text-sky-600 text-xl">03</div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Don't Suppress Urges</h4>
                                    <p className="text-gray-700 text-sm">Suppressing the urge (Vega Dharana) causes the stool to move back up (retrograde) and become harder.</p>
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
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Is Isabgol (Psyllium) good?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Yes, but <strong>only with enough water</strong>. Isabgol is a bulk-forming laxative. If you don't drink 2 glasses of water with it, it can turn into a cement-like block in your gut and worsen constipation.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Why does travel cause constipation?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Travel involves movement, which increases air (Vata) in the body. Irregular meal times and dehydration add to it. Always carry Triphala when traveling.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div>
    )
}
