import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Droplet, ArrowRight, Info, Sparkles, Sun } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Skin Detox Diet Plan | Ayurvedic Blood Purification for Acne & Glow | FitPlan India",
    description: "Natural diet plan for clear, glowing skin. Detoxify your blood (Rakta Shodhana) with Neem, Turmeric, and Pitta-pacifying foods. Expert guide for acne and pigmentation.",
    keywords: "skin detox diet plan, diet for glowing skin, ayurvedic blood purifier foods, diet for acne free skin, pitta dosha skin diet, indian diet for skin whitening",
    openGraph: {
        title: "Skin Detox Diet Plan | Nutrition for Radiant, Acne-Free Skin",
        description: "Clear acne and get natural glow with this expert-designed diet plan focusing on blood purification and anti-inflammatory foods.",
        url: "https://fitplanindia.com/plans/skin-detox",
    },
}

export default function SkinDetoxDietPage() {
    const breadcrumbItems = [
        { label: "Diet Plans", href: "/plans" },
        { label: "Skin Detox Plan", href: "/plans/skin-detox" },
    ]

    const tocItems = [
        { id: "root-cause", label: "The Root Cause" },
        { id: "nutrients", label: "Skin Superfoods" },
        { id: "ayurveda", label: "Ayurvedic Detox" },
        { id: "foods-to-eat", label: "Foods to Eat" },
        { id: "foods-to-avoid", label: "Foods to Avoid" },
        { id: "faq", label: "FAQs" },
    ]

    const faqs = [
        {
            question: "Can diet really cure acne?",
            answer: "Yes. Acne is often an internal inflammation signal. High sugar and dairy intake spikes insulin, causing oil glands to overproduce sebum. Eliminating these triggers and adding blood-purifying foods (like Neem and Turmeric) can clear acne from the root."
        },
        {
            question: "How long does a skin detox take?",
            answer: "Skin cells regenerate every 28 days. You need to follow the detox diet for at least 4-6 weeks to see significant changes in texture, clarity, and glow. Consistency is key."
        },
        {
            question: "Is dairy bad for skin?",
            answer: "For many people, yes. Commercial milk often contains hormones that can trigger acne. In Ayurveda, fermented dairy (yogurt) can clog channels (Srotas) if you have Kapha imbalances. We recommend switching to almond/coconut milk or consuming A2 milk in moderation."
        },
        {
            question: "What is the best morning drink for glowing skin?",
            answer: "Warm water with lemon and honey (for Kapha) or Fennel water (for Pitta) is excellent. For active acne, a shot of Aloe Vera juice or Neem juice is the most powerful blood purifier."
        },
        {
            question: "Does drinking water actually help?",
            answer: "Yes! Hydration flushes out toxins (Ama) through urine and sweat. Dehydrated skin looks dull and ages faster. Aim for 2.5-3 liters daily, but don't overdo it if you have weak kidneys."
        },
    ]

    return (
        <div className="min-h-screen bg-stone-50 pb-20">
            <StickyTOC items={tocItems} />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-rose-700 to-pink-900 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={breadcrumbItems} />
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-white text-rose-800 font-semibold">
                            ✨ Radiance & Clarity Guide
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm font-serif">
                            Skin Detox Diet Plan
                        </h1>
                        <p className="text-xl text-rose-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                            Clear acne, reduce pigmentation, and achieve natural radiance by purifying your blood (Rakta Shodhana) with targeted nutrition.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-rose-900 hover:bg-stone-100 font-semibold" asChild>
                                <Link href="#foods-to-eat">Detox Foods</Link>
                            </Button>
                            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white border-2 border-rose-400 font-semibold" asChild>
                                <Link href="#ayurveda">Ayurvedic Secrets</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Root Cause Section */}
            <section id="root-cause" className="py-16 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif">Why Does Skin Break Out?</h2>
                        <div className="bg-stone-50 rounded-xl p-8 border border-stone-200 shadow-sm">
                            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                                Your skin is a mirror of your gut and blood. Creams only treat the surface. Real healing happens when you fix the internal imbalance.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 text-red-600 font-bold text-xl"><Sun className="w-6 h-6" /></div>
                                    <h3 className="font-bold text-stone-800 mb-2">Internal Heat</h3>
                                    <p className="text-sm text-stone-600">Excess Pitta (Heat) in the blood seeks an exit through the skin as acne/rashes.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 text-yellow-600 font-bold text-xl"><AlertCircle className="w-6 h-6" /></div>
                                    <h3 className="font-bold text-stone-800 mb-2">Toxin Build-up</h3>
                                    <p className="text-sm text-stone-600">Undigested food (Ama) circulates and clogs the skin channels (Srotas).</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600 font-bold text-xl"><Droplet className="w-6 h-6" /></div>
                                    <h3 className="font-bold text-stone-800 mb-2">Dehydration</h3>
                                    <p className="text-sm text-stone-600">Dry blood makes skin dull and prone to premature wrinkles (Vata issue).</p>
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
                        <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center font-serif">Skin Superfoods</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-l-4 border-l-orange-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-orange-700">Beta-Carotene (Glow)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Converts to Vitamin A, essential for skin cell turnover. Gives a natural warm glow. Eat: Carrots, Sweet Potatoes, Pumpkin.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-green-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-green-700">Chlorophyll (Detox)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Plant blood that cleans human blood. Oxygenates the skin and reduces breakouts. Eat: Spinach, Wheatgrass, Parsley, Cilantro.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-yellow-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-yellow-700">Vitamin C (Collagen)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Necessary for collagen production (firmness) and fading dark spots. Eat: Amla, Oranges, Lemon, Bell Peppers.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-blue-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-blue-700">Omega-3 (Moisture)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Keeps cell membranes healthy, locking in moisture and keeping irritants out. Eat: Walnuts, Chia Seeds, Flaxseeds.</p>
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
                            <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">Ayurvedic Wisdom</span>
                        </div>
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 text-center font-serif">Rakta Shodhana (Blood Purification)</h2>
                        <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-rose-900 mb-3">1. Bitter is Better</h3>
                                    <p className="text-stone-700 mb-4">
                                        The breakdown of skin health is often due to excess Sweet/Salty taste. The antidote is <strong>Tikta Rasa (Bitter Taste)</strong>. It cools the blood and kills bacteria.
                                    </p>
                                    <p className="text-sm font-semibold text-rose-800">→ Remdies: Neem leaves, Karela (Bitter gourd), Turmeric.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-rose-900 mb-3">2. Manjistha Magic</h3>
                                    <p className="text-stone-700 mb-4">
                                        Manjistha is the quintessential blood cleanser in Ayurveda. It improves circulation and removes stagnation (pigmentation).
                                    </p>
                                    <p className="text-sm font-semibold text-rose-800">→ Usage: 1/2 tsp Manjistha powder with warm water.</p>
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
                        <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">Best Foods for Glowing Skin</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all">
                                <div className="h-40 bg-green-100 flex items-center justify-center">
                                    <span className="text-6xl">🌿</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-stone-900 mb-2">Neem & Aloe</h3>
                                    <p className="text-stone-600 text-sm">Natural antibiotics. A shot of Neem/Aloe juice in the morning flushes toxins instantly.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all">
                                <div className="h-40 bg-purple-100 flex items-center justify-center">
                                    <span className="text-6xl">🍇</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-stone-900 mb-2">Antioxidant Berries</h3>
                                    <p className="text-stone-600 text-sm">Blueberries, Pomegranates, Grapes. Fight free radicals preventing aging and dullness.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all">
                                <div className="h-40 bg-yellow-100 flex items-center justify-center">
                                    <span className="text-6xl">🍲</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-stone-900 mb-2">Turmeric (Haldi)</h3>
                                    <p className="text-stone-600 text-sm">Anti-inflammatory gold. Cook with it, or drink minimal Golden Milk (if dairy suits you). Cleans blood.</p>
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
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif">Skin Killers to Avoid</h2>
                        <div className="bg-red-50 rounded-xl p-8 border border-red-100">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <strong className="text-red-900">Fried & Oily Foods:</strong> Directly increase Pitta and oil production in skin pores.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <strong className="text-red-900">Refined Sugar:</strong> Breaks down collagen (Glycation), leading to wrinkles and sagging skin.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <strong className="text-red-900">Spicy & Fermented Items:</strong> Red chili, alcohol, and stale idli batter can trigger flare-ups in sensitive skin.
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
            <section className="py-16 bg-gradient-to-r from-rose-800 to-pink-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-6 font-serif">Reveal Your True Radiance</h2>
                        <p className="text-xl mb-8 text-rose-100">
                            Clear skin is 80% diet and 20% skincare. Let's fix your internal ecosystem.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm border border-rose-500/30">
                                <Sparkles className="w-12 h-12 text-rose-200 mx-auto mb-4" />
                                <h4 className="font-semibold text-white mb-2 text-xl">Personalized Detox Plan</h4>
                                <p className="text-rose-100 text-sm mb-4">
                                    Custom anti-acne meal plan + Herb guide + Lifestyle tips - <PriceDisplay amountIn={500} amountUs={50} />
                                </p>
                                <Button size="lg" className="w-full bg-white text-rose-900 hover:bg-stone-100 font-semibold" asChild>
                                    <Link href="/contact#contact-form">Book Consultation</Link>
                                </Button>
                            </div>

                            <div className="bg-rose-600/20 border-2 border-rose-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                                <Sun className="w-12 h-12 text-rose-300 mx-auto mb-4" />
                                <h4 className="font-semibold text-white mb-2 text-xl">Ayurvedic Skin Type</h4>
                                <p className="text-rose-100 text-sm mb-4">
                                    Is your skin Vata (dry), Pitta (sensitive), or Kapha (oily)?
                                </p>
                                <Button size="lg" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold" asChild>
                                    <Link href="/tools/prakriti-quiz">Take Quiz Free</Link>
                                </Button>
                            </div>
                        </div>

                        <p className="text-rose-200 text-sm mt-6 flex items-center justify-center">
                            <Info className="w-4 h-4 mr-2" /> Results visible in 4-6 weeks of blood purification diet.
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
