import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Flame, Ban, Activity, Utensils } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Improve Gut Health & Digestion (Agni) | Ayurveda Guide",
    description: "Fix bloating, gas, and IBS naturally. Comprehensive Ayurveda guide to balancing Jatharagni (Digestive Fire) using Ginger, Fasting, and CCF Tea.",
    keywords: ["Ayurveda for gut health", "Agni digestive fire", "bloating home remedies", "curing IBS naturally", "Triphala for constipation", "Ayurvedic fasting"],
}

export default function GutHealthPage() {
    const tocItems = [
        { id: "agni", label: "The concept of Agni" },
        { id: "types", label: "Know your Digestion Type" },
        { id: "remedies", label: "Top 3 Gut Remedies" },
        { id: "fasting", label: "Langhanam (Fasting)" },
        { id: "combo", label: "Viruddha Ahar (Bad Combos)" },
        { id: "faqs", label: "FAQs" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Agni: The Gatekeeper of Your Health
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        In Ayurveda, you are not what you eat; <strong>you are what you digest</strong>. 90% of diseases, from arthritis to anxiety, begin with a weak digestive fire (Mandagni).
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Concept of Agni */}
                    <section id="agni" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Flame className="w-6 h-6 text-orange-600 mr-2" />
                            What is Agni?
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                <strong>Jatharagni</strong> (Stomach Fire) is the biological fire responsible for breaking down food, absorbing nutrients, and destroying pathogens.
                                <br />
                                When Agni is weak, food remains undigested and putrefies, forming a sticky, toxic substance called <strong>Ama</strong>. Ama coats the gut lining and blocks channels, causing "Leaky Gut".
                            </p>
                        </div>
                    </section>

                    {/* Types of Digestion */}
                    <section id="types" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Which Gut Type Are You?</h2>
                        <div className="grid gap-4 mt-6">
                            <div className="border-l-4 border-emerald-500 bg-emerald-50 p-4">
                                <h3 className="font-bold text-gray-900">1. Vishamagni (Variable Fire) - Vata Type</h3>
                                <p className="text-sm text-gray-700">One day you are hungry, next day no appetite. Bloating, gas, and constipation are common.</p>
                            </div>
                            <div className="border-l-4 border-red-500 bg-red-50 p-4">
                                <h3 className="font-bold text-gray-900">2. Tikshnagni (Sharp Fire) - Pitta Type</h3>
                                <p className="text-sm text-gray-700">Intense hunger ("Hangry"). Acidity, heartburn, and loose motions.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
                                <h3 className="font-bold text-gray-900">3. Mandagni (Dull Fire) - Kapha Type</h3>
                                <p className="text-sm text-gray-700">Slow metabolism. Even eating little water makes you gain weight. Heaviness after meals.</p>
                            </div>
                        </div>
                    </section>

                    {/* Expanded Remedies Section */}
                    <section id="remedies" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3 Ways to Reignite Your Fire</h2>

                        <div className="space-y-8">
                            {/* Remedy 1 */}
                            <Card className="bg-amber-50 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-amber-900 mb-2">1. The Ginger Appetizer</h3>
                                    <p className="mb-4 text-gray-700">A universal remedy for all body types. Ginger kindles the Agni without aggravating Pitta too much.</p>
                                    <div className="bg-white p-4 rounded-lg border border-amber-200">
                                        <strong>Recipe:</strong> 1 slice fresh ginger + Pinch of Rock Salt + Squeeze of Lime.
                                        <br /><strong>When:</strong> Chew this 10 minutes <strong>before</strong> lunch and dinner. It activates saliva and prepares the stomach.
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Remedy 2 */}
                            <Card className="bg-emerald-50 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">2. CCF Tea (The Gut Healer)</h3>
                                    <p className="mb-4 text-gray-700">Cumin, Coriander, Fennel. This triad is magical. Cumin helps absorption, Coriander cools heat, Fennel stops cramping.</p>
                                    <div className="bg-white p-4 rounded-lg border border-emerald-200">
                                        <strong>Recipe:</strong> Boil 1/2 tsp of each seed in 3 cups water. Strain and sip warm throughout the day.
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Remedy 3 */}
                            <Card className="bg-stone-100 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">3. Triphala at Night</h3>
                                    <p className="mb-4 text-gray-700">Gut health is incomplete without proper elimination. Triphala is not a laxative; it is a tonifier.</p>
                                    <div className="bg-white p-4 rounded-lg border border-stone-200">
                                        <strong>Recipe:</strong> 1 tsp Triphala powder with warm water just before sleep. It scrapes Ama from the colon walls.
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Fasting */}
                    <section id="fasting" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Langhanam (Therapeutic Fasting)</h2>
                        <p className="text-gray-700 mb-4">
                            If you have a fever, coating on tongue, or zero appetite—<strong>DO NOT EAT</strong>.
                        </p>
                        <div className="bg-gray-100 p-6 rounded-xl">
                            <h4 className="font-bold text-gray-900 mb-2">How to Fast Ayurvedically?</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li>• Don't do water-only fasts (increases Vata).</li>
                                <li>• Do a "Mono-Diet" of <strong>Mung Dal Soup</strong> or warm Rice Gruel (Kanji).</li>
                                <li>• Sip warm water continuously.</li>
                                <li>• Break fast only when real hunger returns (a clear burp, lightness in body).</li>
                            </ul>
                        </div>
                    </section>

                    {/* Incompatible Foods */}
                    <section id="combo" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Viruddha Ahar (Incompatible Foods)</h2>
                        <p className="text-gray-700 mb-4">
                            Some foods are healthy alone but toxic when mixed. They confuse the Agni.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center p-3 border rounded bg-red-50 text-red-900 font-medium">
                                <Ban className="w-5 h-5 mr-3" /> Milk + Fruits (Bananashake)
                            </div>
                            <div className="flex items-center p-3 border rounded bg-red-50 text-red-900 font-medium">
                                <Ban className="w-5 h-5 mr-3" /> Milk + Fish / Meat
                            </div>
                            <div className="flex items-center p-3 border rounded bg-red-50 text-red-900 font-medium">
                                <Ban className="w-5 h-5 mr-3" /> Milk + Salt (Curries with cream)
                            </div>
                            <div className="flex items-center p-3 border rounded bg-red-50 text-red-900 font-medium">
                                <Ban className="w-5 h-5 mr-3" /> Cold Water + Hot Food
                            </div>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Are probiotics good?</h4>
                                <p className="text-gray-700 text-sm">Ayurveda has the original probiotic: <strong>Takra (Buttermilk)</strong>. Commercial probiotic pills can sometimes increase SIBO. Homemade fresh buttermilk with cumin and curry leaves is superior.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Why do I get bloated after eating raw salad?</h4>
                                <p className="text-gray-700 text-sm">Raw vegetables are cold, dry, and rough—all Vata qualities. If you have weak Agni, raw food is hard to digest. Always steam or sauté your veggies.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Should I drink water with meals?</h4>
                                <p className="text-gray-700 text-sm">Sip small amounts of warm water <em>during</em> the meal to moisten food. Drinking a lot <em>before</em> dilutes acid. Drinking a lot <em>after</em> extinguishes the fire (makes you obese).</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Trust Your Gut</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            A happy gut is a happy mind. Reset your digestion today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/weight-loss"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Gut Reset Plan
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
