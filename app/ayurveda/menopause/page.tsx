import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Flower2, Flame, Heart, Smile, Sun, UserCheck } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurveda for Menopause: Natural Relief from Hot Flashes | FitPlan India",
    description: "Manage Rajonivritti (Menopause) naturally. Guide to Shatavari, cooling pranayama, and hormone-balancing diets to stop hot flashes and mood swings.",
    keywords: ["Ayurveda for menopause", "Shatavari benefits menopause", "Natural hot flash remedies", "Rajonivritti treatment", "Menopause diet chart India"],
}

export default function MenopausePage() {
    const tocItems = [
        { id: "intro", label: "The Shift (Rajonivritti)" },
        { id: "herbs", label: "Female Tonics" },
        { id: "symptoms", label: "Symptom Management" },
        { id: "lifestyle", label: "Lifestyle Change" },
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
                        Rajonivritti: The Wise Woman Era
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Menopause is not a disease; it is a natural transition. In Ayurveda, it marks the shift from the Pitta (productive) phase of life to the <strong>Vata</strong> (wisdom/spiritual) phase.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Why Is It So Intense?</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                As menstrual cycles stop, the body's cooling mechanism decreases, leading to a temporary rise in fire (<strong>Pitta</strong>) and air (<strong>Vata</strong>).
                            </p>
                            <p className="mt-4">
                                This imbalance causes the classic trifecta of symptoms: <strong>Hot Flashes</strong> (Pitta), <strong>Dryness/Anxiety</strong> (Vata), and <strong>Weight Gain</strong> (Kapha). The goal is to cool the body and lubricate the tissues.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Herbs Section */}
                <section id="herbs" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Nature's Hormone Balancers</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-pink-50 border-pink-100">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-pink-900 mb-2">1. Shatavari (Asparagus Racemosus)</h3>
                                <p className="text-gray-700 text-sm mb-3">"She who possesses 100 husbands." The #1 female tonic.</p>
                                <p className="text-sm text-gray-600">
                                    <strong>Science:</strong> Contains phytoestrogens (plant-based estrogens) that naturally fill the hormone gap, reducing hot flashes and vaginal dryness without side effects.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-rose-50 border-rose-100">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-rose-900 mb-2">2. Ashoka Bark</h3>
                                <p className="text-gray-700 text-sm mb-3">"Remover of Sorrow."</p>
                                <p className="text-sm text-gray-600">
                                    <strong>Science:</strong> Excellent for uterine health. If you have irregular heavy bleeding (perimenopause), Ashoka is the most potent astringent to stop it.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-purple-50 border-purple-100">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-purple-900 mb-2">3. Brahmi</h3>
                                <p className="text-gray-700 text-sm mb-3">The Mind Cooler.</p>
                                <p className="text-sm text-gray-600">
                                    <strong>Science:</strong> Menopause often brings brain fog and anxiety. Brahmi calms the nervous system and improves sleep quality.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-green-50 border-green-200">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-green-900 mb-2">4. Aloe Vera</h3>
                                <p className="text-gray-700 text-sm mb-3">Kumari.</p>
                                <p className="text-sm text-gray-600">
                                    <strong>Science:</strong> Cooling and liver cleansing. Taking 2 tbsp of Aloe gel daily regulates metabolism and prevents menopausal weight gain.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Symptoms Management */}
                <section id="symptoms" className="mb-20 scroll-mt-24">
                    <div className="bg-orange-50/50 p-8 md:p-12 rounded-3xl border border-orange-100">
                        <h2 className="text-3xl font-serif font-bold text-orange-900 mb-8">Managing Detailed Symptoms</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                                <div className="bg-orange-100 p-3 rounded-full shrink-0">
                                    <Flame className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">For Hot Flashes</h4>
                                    <p className="text-gray-600 text-sm">Drink <strong>Coriander Water</strong>. Soak 1 tbsp coriander seeds overnight in 1 glass of water. Drink in the morning. It flushes excess Pitta instantly.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                                <div className="bg-orange-100 p-3 rounded-full shrink-0">
                                    <Smile className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">For Mood Swings</h4>
                                    <p className="text-gray-600 text-sm">Practice <strong>Chandra Bhedana</strong> (Left Nostril Breathing). Inhale through left, exhale through right. The left nostril is the Moon channel—calming and cooling.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                                <div className="bg-orange-100 p-3 rounded-full shrink-0">
                                    <Heart className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">For Bone Density (Osteoporosis)</h4>
                                    <p className="text-gray-600 text-sm">Eat <strong>Sesame Seeds</strong> (Til). They are the richest plant source of calcium. Chew 1 tsp of roasted white sesame seeds daily.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Does Soy help?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Soy contains isoflavones (phytoestrogens) which can help, but Ayurveda recommends fermentation (like Tofu/Miso) over processed soy milk, which can be hard to digest and Vata-aggravating.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Why am I gaining belly fat?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Typically called "Vata Belly." As hormones drop, metabolism slows. Avoid raw salads and cold smoothies. Switch to warm, cooked meals with spices like cumin and ginger to reignite digestion.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
        </div>
    )
}
