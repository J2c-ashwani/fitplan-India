import { Badge } from "@/components/ui/badge"
import PriceDisplay from "@/components/PriceDisplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, AlertCircle, Sparkles, ArrowRight, Info, Eye, Sun } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Anti-Aging & Eye Health Diet Plan | Rasayana Therapy | FitPlan India",
    description: "Ayurvedic anti-aging diet (Rasayana) to reverse wrinkles, improve vision, and boost longevity. Collagen-rich foods and eye care nutrition guide.",
    keywords: "anti aging diet plan, rasayana therapy ayurveda, diet for younger skin, foods for eye health, ayurvedic anti aging secrets, collagen rich indian food",
    openGraph: {
        title: "Anti-Aging & Eye Health Diet Plan | Turn Back the Clock Naturally",
        description: "Reverse signs of aging and protect your vision with this expert blend of Ayurvedic Rasayana herbs and modern collagen nutrition.",
        url: "https://fitplanindia.com/plans/anti-aging",
    },
}

export default function AntiAgingDietPage() {
    const breadcrumbItems = [
        { label: "Diet Plans", href: "/plans" },
        { label: "Anti-Aging Plan", href: "/plans/anti-aging" },
    ]

    const tocItems = [
        { id: "root-cause", label: "Why We Age" },
        { id: "nutrients", label: "Youth Nutrients" },
        { id: "ayurveda", label: "Rasayana Secrets" },
        { id: "foods-to-eat", label: "Foods to Eat" },
        { id: "foods-to-avoid", label: "Foods to Avoid" },
        { id: "faq", label: "FAQs" },
    ]

    const faqs = [
        {
            question: "Can diet really reverse wrinkles?",
            answer: "Diet can significantly slow them down and soften existing ones. Wrinkles are caused by collagen breakdown (Glycation) from sugar and sun damage. A diet rich in antioxidants and healthy fats repairs cell membranes and boosts natural collagen production."
        },
        {
            question: "What is the best food for eyesight?",
            answer: "The eyes are a 'Pitta' organ. Cooling, Vitamin A-rich foods are best. Top choices: Carrots (Beta-carotene), Triphala (Ayurvedic eye tonic), Ghee (lubrication), and Almonds (Vitamin E)."
        },
        {
            question: "At what age should I start an anti-aging diet?",
            answer: "Ayurveda says 'Rasayana' (Rejuvenation) therapy should start at age 30. This is when the body's natural repair mechanisms slow down. Prevention is 10x easier than cure."
        },
        {
            question: "Is Ghee good or bad for aging?",
            answer: "In moderation, Desi Cow Ghee is the #1 anti-aging food in Ayurveda. It improves memory (Medha), lubricates joints, softens skin, and strengthens eyes. It builds 'Ojas' (Vitality)."
        },
        {
            question: "Do I need collagen supplements?",
            answer: "Not necessarily. Bone broth, fish, egg whites, and Vitamin C (Amla) help your body build its own collagen. Natural sources are always better absorbed than synthetic powders."
        },
    ]

    return (
        <div className="min-h-screen bg-stone-50 pb-20">
            <StickyTOC items={tocItems} />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-800 to-purple-900 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={breadcrumbItems} />
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-white text-indigo-800 font-semibold">
                            ⏳ Rasayana: The Science of Longevity
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm font-serif">
                            Anti-Aging & Eye Health Plan
                        </h1>
                        <p className="text-xl text-indigo-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                            Restore youthful vitality, sharpen your vision, and protect your joints with the ancient wisdom of Rasayana and modern nutritional science.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-indigo-900 hover:bg-stone-100 font-semibold" asChild>
                                <Link href="#foods-to-eat">Superfoods</Link>
                            </Button>
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-400 font-semibold" asChild>
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
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif">The 3 Pillars of Aging</h2>
                        <div className="bg-stone-50 rounded-xl p-8 border border-stone-200 shadow-sm">
                            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                                Aging isn't just about time; it's about biological wear and tear. We target these three mechanisms to slow the clock.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 text-red-600 font-bold text-xl"><Sparkles className="w-6 h-6" /></div>
                                    <h3 className="font-bold text-stone-800 mb-2">Oxidation</h3>
                                    <p className="text-sm text-stone-600">"Rusting" of cells. Free radicals attack DNA and collagen. Antidote: Antioxidants.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 text-yellow-600 font-bold text-xl"><Sun className="w-6 h-6" /></div>
                                    <h3 className="font-bold text-stone-800 mb-2">Inflammation</h3>
                                    <p className="text-sm text-stone-600">Chronic low-grade inflammation ("Inflammaging") damages tissues over time. Antidote: Turmeric & Omega-3.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600 font-bold text-xl"><Eye className="w-6 h-6" /></div>
                                    <h3 className="font-bold text-stone-800 mb-2">Drying (Vata)</h3>
                                    <p className="text-sm text-stone-600">As we age, we lose moisture. Skin wrinkles, joints creak, eyes dry out. Antidote: Healthy Fats (Ghee).</p>
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
                        <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center font-serif">Youth Nutrients</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-l-4 border-l-purple-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-purple-700">Resveratrol (DNA Repair)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Activates "Sirtuins" (longevity genes). Found in Grapes, Berries, and Peanuts. Mimics the effects of fasting.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-orange-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-orange-700">Lutein (Eye Shield)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Acts as "internal sunglasses", protecting eyes from blue light and UV damage. Eat: Spinach, Egg Yolks, Corn.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-pink-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-pink-700">Collagen Boosters</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Vitamin C + Amino Acids = Collagen. You don't just need to eat collagen; you need to help your body make it. Eat: Citrus, Bone Broth.</p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-yellow-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-yellow-700">Omega-3 (Brain & Joints)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-stone-700 text-sm">Crucial for cognitive health (preventing dementia) and lubricating dry joints. Eat: Walnuts, Flaxseeds, Fatty Fish.</p>
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
                            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">Ancient Wisdom</span>
                        </div>
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 text-center font-serif">Rasayana Therapy</h2>
                        <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-900 mb-3">1. Triphala Magic</h3>
                                    <p className="text-stone-700 mb-4">
                                        A blend of 3 fruits (Amla, Haritaki, Vibhitaki). It is a powerful antioxidant, eye tonic, and gentle detoxifier.
                                    </p>
                                    <p className="text-sm font-semibold text-indigo-800">→ Secret: Wash eyes with Triphala water.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-900 mb-3">2. Chyawanprash</h3>
                                    <p className="text-stone-700 mb-4">
                                        The original anti-aging formula. Contains 40+ herbs with Amla base. It boosts immunity (Ojas) and keeps tissues young.
                                    </p>
                                    <p className="text-sm font-semibold text-indigo-800">→ Dosage: 1 tsp daily with warm milk.</p>
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
                        <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">Foods for Longevity</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all">
                                <div className="h-40 bg-purple-100 flex items-center justify-center">
                                    <span className="text-6xl">🍇</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-stone-900 mb-2">Dark Berries</h3>
                                    <p className="text-stone-600 text-sm">Grapes, Jamun, Blueberries. Highest in antioxidants. Protects mental sharpness.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all">
                                <div className="h-40 bg-orange-100 flex items-center justify-center">
                                    <span className="text-6xl">🥕</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-stone-900 mb-2">Carrots & Ghee</h3>
                                    <p className="text-stone-600 text-sm">Cook carrots in Ghee. The fat helps absorb Vitamin A, essential for night vision and skin repair.</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all">
                                <div className="h-40 bg-green-100 flex items-center justify-center">
                                    <span className="text-6xl">🥑</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg text-stone-900 mb-2">Healthy Fats</h3>
                                    <p className="text-stone-600 text-sm">Avocado, Almonds, Walnuts. Keeps cell membranes soft and supple, preventing "drying out" of old age.</p>
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
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif">Aging Accelerators</h2>
                        <div className="bg-red-50 rounded-xl p-8 border border-red-100">
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <strong className="text-red-900">Sugar (The Wrinkle Maker):</strong> Causes Glycation - sugar binds to collagen and snaps it like a dry twig.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <strong className="text-red-900">Trans Fats:</strong> Found in biscuits and fried snacks. They harden cell membranes, making nutrient absorption difficult for old cells.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                                    <div>
                                        <strong className="text-red-900">Alcohol:</strong> Severely dehydrates the body and strains the liver, your primary detox organ.
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
            <section className="py-16 bg-gradient-to-r from-indigo-800 to-purple-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-6 font-serif">Invest in Your Future Self</h2>
                        <p className="text-xl mb-8 text-indigo-100">
                            The best time to start anti-aging was yesterday. The second best time is now.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm border border-indigo-500/30">
                                <Sparkles className="w-12 h-12 text-indigo-200 mx-auto mb-4" />
                                <h4 className="font-semibold text-white mb-2 text-xl">Personalized Longevity Plan</h4>
                                <p className="text-indigo-100 text-sm mb-4">
                                    Custom Rasayana diet + Eye exercises + Lifestyle routine - <PriceDisplay amountIn={500} amountUs={50} />
                                </p>
                                <Button size="lg" className="w-full bg-white text-indigo-900 hover:bg-stone-100 font-semibold" asChild>
                                    <Link href="/contact#contact-form">Book Consultation</Link>
                                </Button>
                            </div>

                            <div className="bg-indigo-600/20 border-2 border-indigo-400 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm">
                                <Eye className="w-12 h-12 text-indigo-300 mx-auto mb-4" />
                                <h4 className="font-semibold text-white mb-2 text-xl">Eye Health Guide</h4>
                                <p className="text-indigo-100 text-sm mb-4">
                                    Free guide on Trataka (Candle Gazing) and eye wash techniques.
                                </p>
                                <Button size="lg" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold" asChild>
                                    <Link href="/blog/eye-care">Read Guide</Link>
                                </Button>
                            </div>
                        </div>

                        <p className="text-indigo-200 text-sm mt-6 flex items-center justify-center">
                            <Info className="w-4 h-4 mr-2" /> Aging is inevitable, but looking old is optional.
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
