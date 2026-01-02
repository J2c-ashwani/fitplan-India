import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Clock, Flame, Ban } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "10 Golden Ayurvedic Diet Rules | FitPlan India",
    description: "Eating the right food is not enough; eating it the right way matters. Learn about Viruddha Ahar, Agni, and mindful eating habits.",
    keywords: ["Ayurvedic eating rules", "Viruddha Ahar examples", "Mindful eating Ayurveda", "Drinking water rules ayurveda"],
}

export default function DietRulesPage() {
    const tocItems = [
        { id: "agni", label: "Respect Your Agni" },
        { id: "rules", label: "The 10 Golden Rules" },
        { id: "viruddha", label: "Incompatible Foods" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        The Art of Eating: Ayurvedic Diet Rules
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        In Ayurveda, <strong>how</strong> you eat is just as important as <strong>what</strong> you eat. Even nectar can become poison if eaten incorrectly.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="agni" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Agni: The Digestive Fire</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Think of your digestion like a campfire. If the fire is strong, it burns the wood (food) completely. If it is weak, the wood smokes and chars (creating <strong>Ama</strong>/toxins). All Ayurvedic rules focus on keeping this fire burning bright.
                        </p>
                    </section>

                    <section id="rules" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The 10 Golden Rules</h2>
                        <div className="space-y-6">
                            {[
                                { title: "1. Eat only when hungry", desc: "Real hunger is the signal your Agni is ready. Eating out of boredom creates toxins." },
                                { title: "2. Eat warm, fresh food", desc: "Cold food douses the digestive fire. Warm food stimulates enzymes." },
                                { title: "3. Sit down to eat", desc: "Eating while standing or walking disturbs Vata and causes bloating." },
                                { title: "4. Don't drink water with meals", desc: "Small sips are okay/good. But a large glass dilutes digestive acids. Drink water 45 mins before or after meals." },
                                { title: "5. Chew 32 times", desc: "Digestion begins in the mouth. Saliva is essential for breaking down carbs." },
                                { title: "6. Lunch should be the largest meal", desc: "Agni follows the sun. It is strongest at noon. Dinner should be light." },
                                { title: "7. Include all 6 tastes", desc: "Sweet, Sour, Salty, Bitter, Pungent, Astringent. Most of us miss the last three." },
                                { title: "8. Avoid distractions", desc: "No TV or phone. Focus on the taste and texture of food to satisfy the brain." },
                                { title: "9. Leave 1/4th stomach empty", desc: "2 parts food, 1 part liquid, 1 part air. Don't stuff yourself." },
                                { title: "10. Rest briefly after eating", desc: "Sit in Vajrasana or walk 100 steps. Do not sleep immediately." }
                            ].map((rule, i) => (
                                <div key={i} className="flex items-start">
                                    <div className="bg-emerald-100 rounded-full p-1 mr-4 mt-1"><CheckCircleIcon /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{rule.title}</h4>
                                        <p className="text-gray-600 text-sm">{rule.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="viruddha" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Viruddha Ahar (Incompatible Foods)</h2>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6">
                            <p className="mb-4 text-red-900">Never combine these foods, as they create chemical reactions that the body cannot process:</p>
                            <ul className="list-disc ml-5 space-y-2 text-gray-800">
                                <li><strong>Milk + Fruit:</strong> Especially sour fruits or bananas. (Yes, banana shake is bad digestion-wise!)</li>
                                <li><strong>Milk + Fish/Meat:</strong> Highly toxic combination.</li>
                                <li><strong>Honey + Ghee (Equal quantity):</strong> Becomes toxic. Use unequal ratios (e.g., 2:1).</li>
                                <li><strong>Hot + Cold:</strong> Ice cream immediately after hot coffee.</li>
                                <li><strong>Curd (Yogurt) at Night:</strong> Increases mucus and blocks channels.</li>
                            </ul>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

function CheckCircleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    )
}
