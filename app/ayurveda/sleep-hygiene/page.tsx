import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Moon, Coffee } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Night Rituals for Deep Sleep (Nidra) | Cure Insomnia",
    description: "Can't sleep? Discover Ayurvedic remedies for insomnia (Anidra). Learn about Golden Milk, Padabhyanga (Foot Massage), and bedtime rituals for deep rest.",
    keywords: ["Ayurveda for insomnia", "Golden milk recipe for sleep", "Padabhyanga benefits", "ayurvedic sleep remedies", "how to sleep better naturally"],
}

export default function SleepPage() {
    const tocItems = [
        { id: "intro", label: "Sleep & Ayurveda" },
        { id: "milk", label: "1. Nutmeg Milk" },
        { id: "massage", label: "2. Padabhyanga (Foot Massage)" },
        { id: "oil", label: "3. Shiro Pichu (Head Oiling)" },
        { id: "gadgets", label: "4. Digital Detox" },
        { id: "tips", label: "Quick Sleep Tips" },
        { id: "conclusion", label: "Conclusion" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#1e1b4b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Ayurvedic Night Rituals for Deep Sleep (Nidra)
                    </h1>
                    <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                        Sleep is one of the three pillars of life (Trayopastambha). In Ayurveda, insomnia is often excess <strong>Vata</strong> in the mind—too much movement, thinking, and dryness.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Moon className="w-6 h-6 text-indigo-600 mr-2" />
                            The Vata-Mind Connection
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                When you can't shut off your brain at night, that's Vata dosha running wild. The cold, light, and mobile qualities of Vata keep the nervous system alert. To induce sleep, you need to introduce <strong>Heaviness, Warmth, and Stability</strong> (Kapha qualities).
                            </p>
                        </div>
                    </section>

                    {/* Remedy 1: Milk */}
                    <section id="milk" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">1. Warm Nutmeg Milk</h2>
                        <Card className="mb-6 bg-amber-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Warm cow's milk contains tryptophan, which aids sleep. Adding <strong>Nutmeg (Jaiphal)</strong> acts as a natural sedative.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-amber-200">
                                    <h4 className="font-bold text-amber-900 mb-2">The Bedtime Recipe:</h4>
                                    <p className="text-sm text-gray-700">1 Cup Warm Milk + Pinch of Nutmeg + Pinch of Cardamom. Drink 30 mins before bed. (Vegans can use Almond Milk).</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Foot Massage */}
                    <section id="massage" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">2. Padabhyanga (Foot Massage)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your feet are full of nerve endings connected to your eyes and brain. Rubbing warm <strong>Ghee</strong> or <strong>Sesame Oil</strong> on your soles for 5 minutes pulls the energy downwards (grounding), calming the mind instantly.
                        </p>
                    </section>

                    {/* Remedy 3: Head Oiling */}
                    <section id="oil" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">3. Shiro Pichu / Oiling</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Just putting 2 drops of Brahmi Oil or Almond Oil in your nostrils (Nasya) or applying a little oil on the crown of your head can soothe the nervous system.
                        </p>
                    </section>

                    {/* Remedy 4: Digital Detox */}
                    <section id="gadgets" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">4. Blue Light is Anti-Sleep</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Ayurveda follows nature. Blue light from phones mimics sunlight, tricking your brain into thinking it's day. Stop screens 1 hour before bed. Read a physical book instead.
                        </p>
                    </section>

                    {/* Tips */}
                    <section id="tips" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">Quick Sleep Hygiene Tips</h2>
                        <ul className="space-y-3 font-medium text-gray-700">
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-600 mr-2" /> Keep your bedroom cool and dark.</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-600 mr-2" /> Practice mild deep breathing (Pranayama).</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-indigo-600 mr-2" /> Wash legs with cool water before bed.</li>
                        </ul>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 text-center border border-indigo-200">
                        <h3 className="text-2xl font-bold text-indigo-900 mb-4">Wake Up Refreshed</h3>
                        <p className="text-indigo-800 mb-8 max-w-2xl mx-auto">
                            Good sleep leads to better weight loss, skin, and mood.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/ayurveda/stress-anxiety"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-md"
                            >
                                Read Stress Management Tips
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
