import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Activity, Droplet, AlertCircle, Check, X, Beaker } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Kidney Care: The Complete Renal Health Guide | FitPlan India",
    description: "Revive kidney function naturally. In-depth guide to Punarnava, Gokshura, and the Ayurvedic Renal Diet. Scientifically backed remedies for creatinine control and stone prevention.",
    keywords: ["Ayurveda for kidney failure", "Lower creatinine naturally", "Punarnava benefits for kidney", "Ayurvedic renal diet chart", "Kidney stone home removal"],
}

export default function KidneyPage() {
    const tocItems = [
        { id: "intro", label: "Kidneys in Ayurveda" },
        { id: "science", label: "Science & Herbs" },
        { id: "diet", label: "Renal Diet Chart" },
        { id: "stones", label: "Stone Protocol" },
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
                        Vrikka Roga: Ayurvedic Kidney Care
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        In Ayurveda, kidneys are the root of <strong>Meda Vaha Srotas</strong> (Fat channels). Protecting them is not just about filtration; it's about balancing the body's entire fluid & fat metabolism.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Silent Guardians</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Your kidneys filter 200 liters of blood daily. In Ayurveda, kidney issues arise from the vitiation of <strong>Vata</strong> (dryness/degeneration) and <strong>Kapha</strong> (blockages/stones).
                            </p>
                            <p className="mt-4">
                                Typical signs of kidney distress include water retention (edema), dark urine, and persistent fatigue. Ayurveda treats this by focusing on <strong>Mutrala</strong> (diuretic) herbs that flush toxins without straining the nephrons.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Science of Herbs */}
                <section id="science" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">The "Renal 4" Herbs: Clinical Perspective</h2>
                    <div className="grid gap-6">
                        <Card className="bg-white border-stone-200 shadow-sm">
                            <CardContent className="p-8 flex gap-6">
                                <div className="hidden md:block p-4 bg-green-50 rounded-2xl h-fit">
                                    <Beaker className="w-8 h-8 text-green-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#064e3b] mb-2">1. Punarnava (Boerhavia Diffusa)</h3>
                                    <p className="text-gray-700 mb-3"><em>"The one that makes you new again."</em></p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <strong>Scientific Mechanism:</strong> Clinical studies show Punarnava contains <em>punarnavine</em>, an alkaloid that protects nephrons from toxicity. It is a potassium-sparing diuretic, meaning it flushes water but keeps essential electrolytes.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-white border-stone-200 shadow-sm">
                            <CardContent className="p-8 flex gap-6">
                                <div className="hidden md:block p-4 bg-green-50 rounded-2xl h-fit">
                                    <Shield className="w-8 h-8 text-green-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#064e3b] mb-2">2. Gokshura (Tribulus Terrestris)</h3>
                                    <p className="text-gray-700 mb-3"><em>"The Urinary Tract Tonic."</em></p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <strong>Scientific Mechanism:</strong> Known for its lithotriptic (stone-breaking) activity. It increases urine volume and prevents the supersaturation of calcium oxalate, reducing recurrent stone formation.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-white border-stone-200 shadow-sm">
                            <CardContent className="p-8 flex gap-6">
                                <div className="hidden md:block p-4 bg-green-50 rounded-2xl h-fit">
                                    <Activity className="w-8 h-8 text-green-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#064e3b] mb-2">3. Varun (Crataeva Nurvala)</h3>
                                    <p className="text-gray-700 mb-3"><em>"The Stone Breaker."</em></p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <strong>Scientific Mechanism:</strong> Contains lupeol, which deactivates the enzyme glycolate oxidase, reducing the production of oxalates (the main component of kidney stones).
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Diet Chart */}
                <section id="diet" className="mb-20 scroll-mt-24">
                    <div className="bg-emerald-50/50 p-8 md:p-12 rounded-3xl border border-emerald-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">The Ayurvedic Renal Diet</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-green-800 text-xl mb-4">
                                    <Check className="w-6 h-6" /> Eat Freely (Pathya)
                                </h4>
                                <ul className="space-y-3 text-gray-700">
                                    <li><strong>Gourds:</strong> Bottle gourd (Lauki), Ridge Gourd (Turai). Excellent diuretics.</li>
                                    <li><strong>Grains:</strong> Old Rice, Barley (Jo). Barley water is the #1 kidney detox drink.</li>
                                    <li><strong>Spices:</strong> Coriander, Cumin, Fennel (Cooling spices).</li>
                                    <li><strong>Fruits:</strong> Apples, Berries, Pineapple (Low potassium).</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="flex items-center gap-2 font-bold text-red-800 text-xl mb-4">
                                    <X className="w-6 h-6" /> Strongly Avoid (Apathya)
                                </h4>
                                <ul className="space-y-3 text-gray-700">
                                    <li><strong>High Sodium:</strong> Pickles, processed snacks, papad.</li>
                                    <li><strong>Heavy Proteins:</strong> Red meat, organ meats (High metabolic load).</li>
                                    <li><strong>Oxalates:</strong> Spinach, Tomato seeds, Chocolate (Cause stones).</li>
                                    <li><strong>Caffeine/Alcohol:</strong> Severely dehydrating for kidneys.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stone Protocol */}
                <section id="stones" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Remedy for Stones (Ashmari)</h2>
                    <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
                        <h3 className="text-2xl font-bold text-amber-900 mb-4">Kulthi (Horse Gram) Soup Protocol</h3>
                        <p className="text-gray-700 mb-6">
                            Horse gram is the most potent lithotriptic agent in Ayurveda. It dissolves crystals like hot water dissolves sugar.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <span className="font-bold text-amber-600 text-xl">1.</span>
                                <p className="text-gray-800">Soak 1 cup of Horse Gram overnight in 4 cups of water.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-amber-600 text-xl">2.</span>
                                <p className="text-gray-800">Boil it the next morning until the water reduces to 1 cup.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-amber-600 text-xl">3.</span>
                                <p className="text-gray-800">Strain and mix with a pinch of Rock Salt (Sendha Namak).</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="font-bold text-amber-600 text-xl">4.</span>
                                <p className="text-gray-800">Drink warm on an empty stomach for 14 days.</p>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg w-fit">
                            <AlertCircle className="w-4 h-4" /> Avoid if you have high acidity or bleeding disorders.
                        </div>
                    </div>
                </section>


                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can Ayurveda reverse kidney failure?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Ayurveda can significantly slow progression and improve quality of life (reduce dialysis frequency) by managing urea/creatinine levels. However, "reversal" depends on the stage. Early-stage damage is often reversible; end-stage requires integrative care.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Is Milk safe for kidney patients?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Cow's milk is acceptable in moderation as it is cooling. However, avoid high-protein dairy supplements or cheese, which increase the phosphate load on kidneys.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">How much water should I drink?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Contrary to popular belief, <strong>do not overdrink</strong> if you have kidney swelling. Drink only according to thirst. Excess water taxes the already weak kidneys.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div>
    )
}
