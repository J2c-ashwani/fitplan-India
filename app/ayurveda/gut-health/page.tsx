import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Leaf, Flame, Activity } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Agni: Improving Digestive Fire for Better Immunity | Gut Health Ayurveda",
    description: "Your gut is your second brain. Learn how to balance your Digestive Fire (Agni) to fix bloating, acidity, and low immunity naturally with Ayurveda.",
    keywords: ["Ayurveda for gut health", "Agni digestive fire", "bloating home remedies", "curing acidity permanently", "improve metabolism ayurveda"],
}

export default function GutHealthPage() {
    const tocItems = [
        { id: "intro", label: "The Concept of Agni" },
        { id: "signs", label: "Signs of Weak Agni" },
        { id: "ginger", label: "1. Ginger Appetizer" },
        { id: "ccf", label: "2. CCF Tea" },
        { id: "fasting", label: "3. Langhana (Fasting)" },
        { id: "mistakes", label: "Common Mistakes" },
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
                        Agni: Improving Digestive Fire for Better Immunity
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        In Ayurveda, <strong>"You are not what you eat, you are what you digest."</strong> A balanced Agni (Digestive Fire) is the gatekeeper of good health.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Flame className="w-6 h-6 text-orange-600 mr-2" />
                            What is Agni?
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Agni is the biological fire responsible for digestion, absorption, and assimilation of food. If your Agni is strong, even heavy food gets digested. If it's weak (Mandagni), even light food turns into <strong>Ama</strong> (toxins), causing disease.
                            </p>
                        </div>
                    </section>

                    {/* Signs of Weak Agni */}
                    <section id="signs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Signs of Weak Digestion</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-700">
                            <li className="flex items-center p-3 bg-red-50 rounded border border-red-100"><Activity className="w-5 h-5 text-red-600 mr-3" /> Bloating or Gas after meals</li>
                            <li className="flex items-center p-3 bg-red-50 rounded border border-red-100"><Activity className="w-5 h-5 text-red-600 mr-3" /> Heaviness / Lethargy</li>
                            <li className="flex items-center p-3 bg-red-50 rounded border border-red-100"><Activity className="w-5 h-5 text-red-600 mr-3" /> White coating on tongue</li>
                            <li className="flex items-center p-3 bg-red-50 rounded border border-red-100"><Activity className="w-5 h-5 text-red-600 mr-3" /> Irregular bowel movements</li>
                        </ul>
                    </section>

                    {/* Remedy 1: Ginger */}
                    <section id="ginger" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. The Ginger Appetizer</h2>
                        <Card className="mb-6 bg-amber-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Before lunch and dinner, chew a small slice of fresh ginger with a pinch of rock salt and a drop of lemon/lime juice.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-amber-200">
                                    <p className="text-sm text-gray-700"><strong>Effect:</strong> This kickstarts salivary glands and prepares the stomach for food, ensuring complete digestion.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: CCF Tea */}
                    <section id="ccf" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. CCF Tea (Cumin, Coriander, Fennel)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This is the classic Ayurvedic digestive tea that suits all body types. It helps flush out water retention and soothes the gut lining.
                        </p>
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <h4 className="font-bold text-emerald-900 mb-2">Recipe:</h4>
                            <p className="text-emerald-800">Boil 1 tsp each of Cumin (Jeera), Coriander (Dhania), and Fennel (Saunf) seeds in 3 cups of water. Sip warm throughout the day.</p>
                        </div>
                    </section>

                    {/* Remedy 3: Fasting */}
                    <section id="fasting" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Langhana (Lightness/Fasting)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have no appetite, <strong>do not eat</strong>. Skipping a meal or eating very light (like Moong Dal Soup) allows your Agni to burn the accumulated Ama instead of processing new food.
                        </p>
                    </section>

                    {/* Mistakes */}
                    <section id="mistakes" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Common Agni Killers</h2>
                        <ul className="space-y-3 font-medium text-gray-700">
                            <li className="flex items-center">❌ Drinking ice-cold water (puts out the fire).</li>
                            <li className="flex items-center">❌ Eating when angry or stressed.</li>
                            <li className="flex items-center">❌ Snacking constantly (grazing).</li>
                            <li className="flex items-center">❌ Incompatible foods (Milk + Fish, Fruit + Yogurt).</li>
                        </ul>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Fix Your Gut, Fix Your Health</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Ayurveda says 90% of diseases begin in the gut. Let's reset your digestion today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Consult Dr. Arti <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
