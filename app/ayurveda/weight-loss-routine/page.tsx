import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Leaf, Sun, Moon } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "The Dinacharya: Daily Ayurvedic Routine for Weight Loss | FitPlan India",
    description: "Lose weight naturally by following the Ayurvedic Dinacharya (Daily Routine). Learn when to wake up, what to drink, and how to eat for maximum metabolism.",
    keywords: ["Ayurvedic weight loss diet", "Dinacharya for weight loss", "Kapha body type diet", "drinking warm water benefits", "ayurveda waking time"],
}

export default function WeightLossRoutinePage() {
    const tocItems = [
        { id: "intro", label: "The Power of Routine" },
        { id: "wakeup", label: "1. Wake Up (Brahma Muhurta)" },
        { id: "ushapan", label: "2. Ushapan (Warm Water)" },
        { id: "abhyanga", label: "3. Udvartana (Dry Massage)" },
        { id: "eating", label: "4. Eating Rules" },
        { id: "sleep", label: "5. Sleep Time" },
        { id: "conclusion", label: "Conclusion" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        The Dinacharya: Daily Ayurvedic Routine for Weight Loss
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        In Ayurveda, <strong>when</strong> you eat is as important as <strong>what</strong> you eat. Aligning your daily activities with nature's biological clock (Circadian Rhythm) is the secret to sustainable weight loss.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Sun className="w-6 h-6 text-emerald-600 mr-2" />
                            Why Routine Matters for Weight Loss
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                The body loves rhythm. Irregular timings cause stress, leading to poor digestion (Mandagni) and accumulation of toxins (Ama), which eventually turns into fat. The Ayurvedic daily routine, or <strong>Dinacharya</strong>, is designed to keep your metabolic fire burning bright.
                            </p>
                        </div>
                    </section>

                    {/* Step 1: Wake Up */}
                    <section id="wakeup" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. Wake Up Before Sunrise</h2>
                        <Card className="mb-6 bg-orange-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Ideally between <strong>4:30 AM - 6:00 AM</strong> (Brahma Muhurta). This is the Vata time of the morning—fresh, light, and energetic.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-orange-200 text-sm text-gray-700">
                                    <p><strong>Why?</strong> If you wake up after 6:00 AM (Kapha time), you will feel heavy, lethargic, and slow throughout the day, which slows down metabolism.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Step 2: Ushapan */}
                    <section id="ushapan" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Ushapan (The Morning Drink)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Before brushing your teeth or looking at your phone, drink 1-2 glasses of warm copper water.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Flushes out toxins accumulated overnight.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Stimulates bowel movement.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> <strong>Add:</strong> 1 tsp Lemon + 1 tsp Honey (ONLY in lukewarm water, never hot) to cut fat.</li>
                        </ul>
                    </section>

                    {/* Step 3: Udvartana */}
                    <section id="abhyanga" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Udvartana (Dry Massage)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Instead of an oil massage (Abhyanga), people looking to lose weight should do <strong>Udvartana</strong>—a dry powder massage using Chickpea flour (Besan) or Triphala powder.
                        </p>
                        <div className="bg-emerald-50 p-4 rounded-lg text-emerald-900 border border-emerald-100">
                            Rub the powder on your body in an <strong>upward direction</strong> (opposite to hair growth). This creates friction, melts subcutaneous fat, and reduces cellulite.
                        </div>
                    </section>

                    {/* Step 4: Eating Rules */}
                    <section id="eating" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. The Sun Cycle Eating Rule</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your digestion matches the sun's intensity.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                            <div className="bg-stone-50 p-4 rounded-xl border">
                                <h4 className="font-bold text-gray-900 mb-2">Breakfast (After 8 AM)</h4>
                                <p className="text-sm">Light & Warm. E.g., Porridge, Poha.</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                                <h4 className="font-bold text-yellow-900 mb-2">Lunch (12 PM - 1 PM)</h4>
                                <p className="text-sm text-yellow-800">Heaviest meal of the day. Max digestive fire.</p>
                            </div>
                            <div className="bg-stone-50 p-4 rounded-xl border">
                                <h4 className="font-bold text-gray-900 mb-2">Dinner (Before 7 PM)</h4>
                                <p className="text-sm">Lightest meal. Finish 3 hours before sleep.</p>
                            </div>
                        </div>
                    </section>

                    {/* Step 5: Sleep */}
                    <section id="sleep" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">5. Sleep by 10 PM</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            10:00 PM to 2:00 AM is <strong>Pitta</strong> time. If you are awake, you will get hungry (midnight snacking). If you sleep, this fire goes inward to detoxify the liver and burn fat.
                        </p>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Need a Personalized Routine?</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            A general routine helps, but a personalized plan tailored to your lifestyle creates lasting change.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Personalized Plan <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
