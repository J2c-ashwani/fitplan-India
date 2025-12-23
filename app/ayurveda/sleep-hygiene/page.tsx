import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Moon, Coffee, AlertCircle, Smartphone } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ancient Sleep Remedies & Digital Detox | Ayurveda for Insomnia",
    description: "Can't sleep? Discover Ayurvedic remedies for insomnia (Anidra). Learn about Golden Milk, Padabhyanga (Foot Massage), and bedtime rituals for deep rest.",
    keywords: ["Ayurveda for insomnia", "Golden milk recipe for sleep", "Padabhyanga benefits", "ayurvedic sleep remedies", "how to sleep better naturally", "sleep deprivation side effects"],
}

export default function SleepPage() {
    const tocItems = [
        { id: "science", label: "Sleep Science (Ayurveda)" },
        { id: "remedies", label: "3 Bedtime Potions" },
        { id: "rituals", label: "The Sleep Rituals" },
        { id: "env", label: "Sleep Environment" },
        { id: "faqs", label: "FAQs" },
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
                        Nidra: The Pillar of Life We Often Ignore
                    </h1>
                    <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                        Sleep is one of the three pillars of life (Trayopastambha), alongside Diet and Lifestyle. In Ayurveda, sleep is <strong>Bhutadhatri</strong>—it nourishes all living beings like a mother.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Science of Sleep */}
                    <section id="science" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Moon className="w-6 h-6 text-indigo-600 mr-2" />
                            Why can't I sleep?
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Insomnia (Anidra) is primarily a <strong>Vata Disorder</strong>. Vata is light, moving, and dry. Sleep requires the qualities of <strong>Kapha</strong>: heavy, stable, and slow.
                            </p>
                            <p>
                                When your mind is racing with thoughts, or your nervous system is wired (due to screens/caffeine), Vata is high. To induce sleep, we must ground this energy.
                            </p>
                        </div>
                    </section>

                    {/* Remedies */}
                    <section id="remedies" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">Top 3 Bedtime Potions</h2>

                        <div className="space-y-6">
                            <Card className="bg-yellow-50 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-yellow-900 mb-2">1. Nutmeg Milk (Jaiphal Doodh)</h3>
                                    <p className="mb-3 text-gray-700">Milk contains tryptophan, a sedative amino acid. Nutmeg prevents waking up in the middle of the night.</p>
                                    <div className="bg-white p-4 rounded-lg text-sm border border-yellow-200">
                                        <strong>Recipe:</strong> 1 cup warm milk + Pinch of Nutmeg powder + Pinch of Cardamom. Drink 30 mins before bed. (Vegans: Use Almond Milk).
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-100 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">2. Poppy Seed (Khus Khus) Tea</h3>
                                    <p className="mb-3 text-gray-700">A strong natural sedative. Excellent for chronic insomnia.</p>
                                    <div className="bg-white p-4 rounded-lg text-sm border border-stone-200">
                                        <strong>Recipe:</strong> Soak 1 tsp poppy seeds for 2 hours. Grind with water/milk. Boil and drink.
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-emerald-50 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">3. Ashwagandha Latte</h3>
                                    <p className="mb-3 text-gray-700">If stress prevents you from sleeping, Ashwagandha lowers cortisol to help you wind down.</p>
                                    <div className="bg-white p-4 rounded-lg text-sm border border-emerald-200">
                                        <strong>Recipe:</strong> 1 tsp Ashwagandha powder in 1 cup milk ("Moon Milk").
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Rituals */}
                    <section id="rituals" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">The Golden Sleep Rituals</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Padabhyanga (Foot Massage)</h3>
                                <p className="text-gray-700 mb-2">
                                    The soles of your feet have 5 key energy points connected to your eyes and nervous system.
                                    <br />
                                    <strong>Action:</strong> Rub warm Ghee or Sesame Oil on your feet for 5 minutes. Put on old socks. This pulls the excess heat/energy from the head down to the feet (grounding).
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Nasya (Nasal Drops)</h3>
                                <p className="text-gray-700 mb-2">
                                    The nose is the doorway to the brain. Puttng 2 drops of warm Ghee or Anu Taila lubricates the brain tissues and calms the mind instantly.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Environment / Digital Detox */}
                    <section id="env" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">Digital Hygiene</h2>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center"><Smartphone className="w-5 h-5 mr-2" /> The Blue Light Problem</h3>
                            <p className="text-gray-700 mb-4">
                                Ayurveda follows the sun. Blue light from phones mimics the sun's frequency at noon. Looking at your phone at 10 PM tricks your pineal gland into treating it as 10 AM, stopping Melatonin production.
                            </p>
                            <div className="font-semibold text-red-800">Rule: No screens 60 minutes before bed. Read a physical book.</div>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#1e1b4b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Which side should I sleep on?</h4>
                                <p className="text-gray-700 text-sm">Ayurveda recommends <strong>Left Lateral (Vamagkukshi)</strong>. It aids digestion (stomach is on the left) and promotes right-nostril breathing (Surya Nadi), which keeps the body warm.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Why do I wake up at 3 AM?</h4>
                                <p className="text-gray-700 text-sm">2 AM - 6 AM is Vata time. If your Vata is high, your sleep will be light and disturbed during these hours. Oil massage is the cure.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Is napping okay?</h4>
                                <p className="text-gray-700 text-sm">Only in Summer (Grishma Ritu). In other seasons, day sleep increases Kapha and toxins.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 text-center border border-indigo-200">
                        <h3 className="text-2xl font-bold text-indigo-900 mb-4">Master Your Morning</h3>
                        <p className="text-indigo-800 mb-8 max-w-2xl mx-auto">
                            A good morning starts the night before.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/ayurveda/stress-anxiety"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-md"
                            >
                                Read Stress Management
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
