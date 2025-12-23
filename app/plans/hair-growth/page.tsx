import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, TrendingUp, ArrowRight, Info, Scissors, Sparkles, Droplet } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Hair Growth Diet Plan | Best Foods for Hair Fall & Regrowth | FitPlan India",
    description: "Ayurvedic and scientific diet plan for hair growth. Foods to stop hair fall, prevent premature graying, and boost volume. Expert nutrition guide for strong hair.",
    keywords: "hair growth diet, best food for hair growth, diet for hair fall, ayurvedic hair diet, foods for strong hair, indian diet for hair regrowth, biotin rich foods india",
    openGraph: {
        title: "Hair Growth Diet Plan | Nutrition for Strong, Lustrous Hair",
        description: "Stop hair fall and boost growth with this expert-designed diet plan focusing on proteins, iron, and Pitta-pacifying foods.",
        url: "https://fitplanindia.com/plans/hair-growth",
    },
}

export default function HairGrowthDietPage() {
    const breadcrumbItems = [
        { label: "Diet Plans", href: "/plans" },
        { label: "Hair Growth Plan", href: "/plans/hair-growth" },
    ]

    const tocItems = [
        { id: "science", label: "The Science of Hair" },
        { id: "nutrients", label: "Vital Nutrients" },
        { id: "ayurveda", label: "Ayurvedic View" },
        { id: "foods-to-eat", label: "Foods to Eat" },
        { id: "foods-to-avoid", label: "Foods to Avoid" },
        { id: "faq", label: "FAQs" },
    ]

    const faqs = [
        {
            question: "Can diet really stop hair fall?",
            answer: "Yes, absolutely. Hair is the fastest growing tissue in the body and requires immense energy and nutrients. Deficiencies in Iron, Protein, Vitamin D, and B12 are the top causes of hair fall. Fixing these deficiencies through diet often restores hair growth within 3-6 months."
        },
        {
            question: "What is the best Indian food for hair growth?",
            answer: "Amla (Indian Gooseberry) is the #1 superfood for hair. It is rich in Vitamin C and antioxidants. Other top foods include Curry Leaves (chewed raw), Moringa (Drumstick leaves), Coconut (dry or fresh), and soaked Almonds."
        },
        {
            question: "Does protein help with hair growth?",
            answer: "Hair is 95% protein (Keratin). If you don't eat enough protein, your body shuts down non-essential functions like hair growth to save protein for vital organs. Eating adequate lentils, paneer, eggs, or chicken is non-negotiable for hair health."
        },
        {
            question: "How long does it take to see results?",
            answer: "Hair grows slowly (about 0.5 inches per month). Dietary changes take time to reflect. You will see reduced hair fall in 4-6 weeks, and noticeable new growth or volume improvements in 3-6 months of consistent healthy eating."
        },
        {
            question: "Is Biotin necessary for hair growth?",
            answer: "Biotin is important, but true deficiency is rare. Most hair issues are due to Iron (Ferritin) or Vitamin D deficiency, not Biotin. A balanced diet with nuts, seeds, and eggs provides enough Biotin naturally without expensive supplements."
        },
    ]

    return (
        <div className="min-h-screen bg-stone-50 pb-20">
            <StickyTOC items={tocItems} />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={breadcrumbItems} />
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-white text-emerald-800 font-semibold">
                            💇‍♀️ Ultimate Hair Nutrition Guide
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm font-serif">
                            Hair Growth Diet Plan
                        </h1>
                        <p className="text-xl text-emerald-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                            Stop hair fall, reverse early graying, and boost volume with a precise blend of Modern Nutrition (Protein & Iron) and Ancient Ayurveda (Pitta Pacification).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-emerald-900 hover:bg-stone-100 font-semibold" asChild>
                                <Link href="#foods-to-eat">See Best Foods</Link>
                            </Button>
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-500 font-semibold" asChild>
                                <Link href="#ayurveda">Ayurvedic Secrets</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Science Section */}
            <section id="science" className="py-16 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif">The Biology of Hair Growth</h2>
                        <div className="bg-stone-50 rounded-xl p-8 border border-stone-200 shadow-sm">
                            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                                Your hair is a barometer of your internal health. It is not a vital organ, so when your body is under stress or lacks nutrients, <strong>hair is the first thing it abandons.</strong>
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 text-red-600 font-bold text-xl">1</div>
                                    <h3 className="font-bold text-stone-800 mb-2">Anagen Phase</h3>
                                    <p className="text-sm text-stone-600">The growth phase (2-7 years). Diet extends this phase.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 text-yellow-600 font-bold text-xl">2</div>
                                    <h3 className="font-bold text-stone-800 mb-2">Catagen Phase</h3>
                                    <p className="text-sm text-stone-600">Transition phase (2-3 weeks). Follicle shrinks.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-100">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600 font-bold text-xl">3</div>
                                    <h3 className="font-bold text-stone-800 mb-2">Telogen Phase</h3>
                                    <p className="text-sm text-stone-600">Resting phase (3 months). Hair falls out. Stress triggers this.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nutrients Section */}
            <section id="nutrients" className="py-16 bg-stone-50 scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center font-serif">The "Big 4" Hair Nutrients</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-l-4 border-l-rose-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-rose-700"><Droplet className="w-5 h-5 mr-2" /> Iron (Ferritin)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Iron carries oxygen to hair roots. Low ferritin is the most common cause of hair thinning in women. Eat: Dates, Jaggery, Spinach, Garden Cress Seeds (Halim).</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-blue-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-blue-700"><Scissors className="w-5 h-5 mr-2" /> Protein (Keratin)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Hair IS protein. Without adequate protein intake (0.8g per kg body weight), hair becomes brittle and breaks. Eat: Dal, Paneer, Eggs, Chicken, Yogurt.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-yellow-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-yellow-700"><Sparkles className="w-5 h-5 mr-2" /> Biotin & Zinc</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Essential vitamins for hair structure and scalp health. Deficiency causes dandruff and weak roots. Eat: Almonds, Walnuts, Pumpkin Seeds, Whole Grains.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-orange-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-orange-700"><TrendingUp className="w-5 h-5 mr-2" /> Omega-3</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Hydrates the scalp from within and reduces inflammation (itchy scalp). Eat: Flaxseeds, Chia Seeds, Fish, Ghee.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ayurveda Section */}
            <section id="ayurveda" className="py-16 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-8">
                            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">Ancient Wisdom</span>
                        </div>
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 text-center font-serif">Ayurvedic View: Pitta Dosha & Asthi Dhatu</h2>
                        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-emerald-900 mb-3">1. Excess Pitta = Hair Fall</h3>
                                    <p className="text-stone-700 mb-4">
                                        According to Ayurveda, excess heat (Pitta) in the body moves to the head and "burns" the hair roots, causing falling and graying.
                                    </p>
                                    <p className="text-sm font-semibold text-emerald-800">→ Solution: Cooling foods (Coconut, Ghee, Fennel, Mint).</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-emerald-900 mb-3">2. Asthi Dhatu (Bone Health)</h3>
                                    <p className="text-stone-700 mb-4">
                                        Hair is the "Mala" (byproduct) of bones. If your bones are weak (low calcium), your hair will be weak.
                                    </p>
                                    <p className="text-sm font-semibold text-emerald-800">→ Solution: Sesame seeds, Milk, Moringa, Ragi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Foods to Eat */}
            <section id="foods-to-eat" className="py-16 bg-stone-50 scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">Best Foods for Hair Growth</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all">
                                <div className="h-40 bg-green-100 flex items-center justify-center">
                                    <span className="text-6xl">🥬</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-stone-900 mb-2">Curry Leaves</h3>
                                    <p className="text-stone-600 text-sm">"Keshya" (Hair Tonic). Rich in beta-carotene. Chew 3-5 raw leaves daily on empty stomach for preventing gray hair.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all">
                                <div className="h-40 bg-yellow-100 flex items-center justify-center">
                                    <span className="text-6xl">🍈</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-stone-900 mb-2">Amla (Gooseberry)</h3>
                                    <p className="text-stone-600 text-sm">Vitamin C powerhouse. Collagen builder. Consuming 1 Amla daily blocks DHT (hair loss hormone) naturally.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all">
                                <div className="h-40 bg-orange-100 flex items-center justify-center">
                                    <span className="text-6xl">🌰</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-stone-900 mb-2">Seeds Blend</h3>
                                    <p className="text-stone-600 text-sm">Pumpkin (Zinc) + Flax (Omega-3) + Sunflower (Vitamin E). A tablespoon daily strengthens hair shaft.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Foods to Avoid */}
            <section id="foods-to-avoid" className="py-16 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif">Dietary Villains for Hair</h2>
                        <div className="bg-red-50 rounded-xl p-8 border border-red-100">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <strong className="text-red-900">Excess Sugar:</strong> Spikes insulin, which shrinks hair follicles and increases inflammation on the scalp.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <strong className="text-red-900">Excess Salt:</strong> In Ayurveda, "Lavana" (Salt) causes hair loss (Khalitya) by increasing body heat. Minimize salty snacks.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <strong className="text-red-900">Sour & Fermented Foods:</strong> Excess pickles, tamarind, and vinegar increase Pitta, leading to premature graying.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 bg-stone-50 scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <FAQSection faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-emerald-800 to-teal-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-6 font-serif">Ready for Thicker, Fuller Hair?</h2>
                        <p className="text-xl mb-8 text-emerald-100">
                            Get a personalized diet plan tailored to your body type, stage of hair loss, and lifestyle.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm border border-emerald-500/30">
                                <Scissors className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
                                <h4 className="font-semibold text-white mb-2 text-xl">Personalized Hair Plan</h4>
                                <p className="text-emerald-100 text-sm mb-4">
                                    Custom meal plan + Supplement guide + Natural remedies - <PriceDisplay amountIn={500} amountUs={50} />
                                </p>
                                <Button size="lg" className="w-full bg-white text-emerald-900 hover:bg-stone-100 font-semibold" asChild>
                                    <Link href="/contact#contact-form">Book Consultation</Link>
                                </Button>
                            </div>

                            <div className="bg-emerald-600/20 border-2 border-emerald-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                                <Sparkles className="w-12 h-12 text-emerald-300 mx-auto mb-4" />
                                <h4 className="font-semibold text-white mb-2 text-xl">Ayurvedic Hair Assessment</h4>
                                <p className="text-emerald-100 text-sm mb-4">
                                    Find out if your hair fall is due to Vata, Pitta, or Kapha imbalance.
                                </p>
                                <Button size="lg" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold" asChild>
                                    <Link href="/tools/prakriti-quiz">Take Quiz Free</Link>
                                </Button>
                            </div>
                        </div>

                        <p className="text-emerald-200 text-sm mt-6 flex items-center justify-center">
                            <Info className="w-4 h-4 mr-2" /> Consistent diet for 90 days is required for visible hair growth.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
                        <RelatedContent />
                    </div>
                </div>
            </section>
        </div>
    )
}
