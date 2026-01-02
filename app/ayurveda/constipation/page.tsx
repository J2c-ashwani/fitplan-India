import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Activity, Ban } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Constipation Relief: Natural Remedies | FitPlan India",
    description: "Cure chronic constipation (Vibandha) with Ayurveda. Guide to Triphala, Castor Oil, and Vata-balancing diet for regular bowel movements.",
    keywords: ["Ayurveda for constipation", "Triphala benefits", "Natural laxatives india", "Vata dosha constipation", "Castor oil for constipation"],
}

export default function ConstipationPage() {
    const tocItems = [
        { id: "intro", label: "Root Cause" },
        { id: "diet", label: "Diet for Bowels" },
        { id: "remedies", label: "Top Remedies" },
        { id: "lifestyle", label: "Toilet Habits" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Vibandha: Freedom from Constipation
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Constipation is a classic sign of <strong>Vata</strong> imbalance (dryness and lack of movement). It is the mother of all diseases because retained toxins re-absorb into the blood.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dryness is the Enemy</h2>
                        <p className="text-gray-700">
                            The colon is the home of Vata. When you eat dry foods (toast, crackers) or drink too little water, the colon dries up, and stools become hard. The solution is <strong>Snigdha</strong> (Oiling) and Hydration.
                        </p>
                    </section>

                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The 'Moving' Diet</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <div className="bg-emerald-100 p-2 rounded-full mr-3 text-sm font-bold text-emerald-800">1</div>
                                <div><strong>More Ghee:</strong> Add 1 tsp of Desi Ghee to lunch and dinner. It lubricates the intestines.</div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-emerald-100 p-2 rounded-full mr-3 text-sm font-bold text-emerald-800">2</div>
                                <div><strong>Warm Water:</strong> Sip warm water throughout the day. Cold water freezes digestion.</div>
                            </li>
                            <li className="flex items-start">
                                <div className="bg-emerald-100 p-2 rounded-full mr-3 text-sm font-bold text-emerald-800">3</div>
                                <div><strong>Ripe Fruits:</strong> Papaya and Ripe Bananas are natural laxatives. <span className="text-red-500 text-sm">(Note: Green/Unripe bananas cause constipation!)</span></div>
                            </li>
                        </ul>
                    </section>

                    <section id="remedies" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Safe Ayurvedic Laxatives</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">1. Triphala Churna</h3>
                                    <p className="text-gray-700 text-sm">Non-habit forming. Balances all 3 doshas. Take 1 tsp with warm water at bedtime. It cleanses the colon overnight.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">2. Gandharva Haritaki</h3>
                                    <p className="text-gray-700 text-sm">Haritaki roasted in Castor oil. Best for chronic, hard constipation. Clears bowels effortlessly.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">3. Warm Milk + Ghee</h3>
                                    <p className="text-gray-700 text-sm">Grandmother's secret. 1 cup warm milk + 1 tsp ghee at night. Lubricates the passage.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">4. Psyllium Husk (Isabgol)</h3>
                                    <p className="text-gray-700 text-sm">Nature's fiber. Must take with lots of water, otherwise it can block bowels further.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Toilet Habits</h2>
                        <ul className="list-disc ml-5 space-y-2 text-gray-700">
                            <li><strong>Squatting Position:</strong> Use an Indian toilet or a stool under feet. This angle straightens the rectum.</li>
                            <li><strong>Fixed Time:</strong> Sit on the toilet every morning at same time, even if no urge. It trains the brain.</li>
                            <li><strong>Don't Strain:</strong> Straining causes piles/fissures. Breathe deeply.</li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    )
}
