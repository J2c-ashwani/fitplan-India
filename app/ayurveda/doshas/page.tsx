import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wind, Flame, Droplet, CheckCircle, XCircle, ArrowRight, Utensils, Brain, Activity } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Understanding Tridosha: Vata, Pitta, Kapha Explained | FitPlan India",
    description: "Discover your Ayurvedic body type (Prakriti). comprehensive guide to Vata, Pitta, and Kapha doshas, their characteristics, diet, and lifestyle tips.",
    keywords: ["Vata Pitta Kapha", "Ayurvedic Doshas", "Tridosha theory", "Ayurveda body types", "Vata diet", "Pitta diet", "Kapha diet"],
}

export default function DoshasPage() {
    const tocItems = [
        { id: "intro", label: "What are Doshas?" },
        { id: "vata", label: "Vata (Air/Ether)" },
        { id: "pitta", label: "Pitta (Fire/Water)" },
        { id: "kapha", label: "Kapha (Earth/Water)" },
        { id: "imbalance", label: "Signs of Imbalance" },
        { id: "quiz", label: "Take the Quiz" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <section className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 mt-6">
                        The Three Doshas: Your Ayurvedic Blueprint
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Vata, Pitta, and Kapha are the biological energies found throughout the human body and mind. They govern all physical and mental processes.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10"></div>
            </section>

            <div className="container mx-auto px-4 py-12 max-w-5xl">

                {/* Introduction */}
                <section id="intro" className="mb-16 text-center">
                    <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        According to Ayurveda, every person is born with a unique combination of these three forces, known as <strong>Prakriti</strong>. Understanding your dominant dosha is the key to personalized health, allowing you to eat and live in harmony with your true nature.
                    </p>
                </section>

                {/* Vata Section */}
                <section id="vata" className="mb-20 scroll-mt-24">
                    <div className="bg-white rounded-3xl shadow-lg border border-indigo-100 overflow-hidden">
                        <div className="bg-indigo-50 p-8 md:p-12 border-b border-indigo-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-indigo-100 rounded-full">
                                    <Wind className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h2 className="text-4xl font-serif font-bold text-indigo-900">Vata Dosha</h2>
                            </div>
                            <p className="text-xl text-indigo-800 font-medium">The Energy of Movement</p>
                            <p className="text-indigo-600 mt-2">Elements: Air + Ether</p>
                        </div>

                        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-indigo-500" /> Characteristics
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-indigo-600">Body:</span> Thin, light frame, prominent joints, dry skin, cold hands/feet.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-indigo-600">Digestion:</span> Irregular hunger, prone to gas and constipation.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-indigo-600">Sleep:</span> Light sleeper, tendency towards insomnia.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-indigo-600">Mind:</span> Creative, quick learner, enthusiastic, but forgets easily. Prone to anxiety.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-indigo-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                                    <Utensils className="w-5 h-5 text-indigo-600" /> Balancing Diet
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <strong className="text-green-700 block mb-1">✅ Favor (Warm, Oily, Heavy):</strong>
                                        <p className="text-sm text-gray-700">Cooked grains (rice, oats), root vegetables, nuts, warm milk, ghee, warming spices (ginger, cinnamon).</p>
                                    </div>
                                    <div>
                                        <strong className="text-red-700 block mb-1">❌ Avoid (Cold, Dry, Light):</strong>
                                        <p className="text-sm text-gray-700">Raw salads, popcorn, crackers, dried fruit, cold drinks, iced coffee.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pitta Section */}
                <section id="pitta" className="mb-20 scroll-mt-24">
                    <div className="bg-white rounded-3xl shadow-lg border border-amber-100 overflow-hidden">
                        <div className="bg-amber-50 p-8 md:p-12 border-b border-amber-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-amber-100 rounded-full">
                                    <Flame className="w-8 h-8 text-amber-600" />
                                </div>
                                <h2 className="text-4xl font-serif font-bold text-amber-900">Pitta Dosha</h2>
                            </div>
                            <p className="text-xl text-amber-800 font-medium">The Energy of Transformation</p>
                            <p className="text-amber-600 mt-2">Elements: Fire + Water</p>
                        </div>

                        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-amber-500" /> Characteristics
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-amber-600">Body:</span> Medium build, good muscle tone, warm body temp, sensitive skin (moles/freckles).
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-amber-600">Digestion:</span> Strong "Agni" (fire), sharp hunger, cannot skip meals. Prone to acidity.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-amber-600">Sleep:</span> Moderate sleeper, dreams are vivid or fiery.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-amber-600">Mind:</span> Intelligent, focused, ambitious, competitive. Prone to anger and irritability.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                                    <Utensils className="w-5 h-5 text-amber-600" /> Balancing Diet
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <strong className="text-green-700 block mb-1">✅ Favor (Cool, Heavy, Dry):</strong>
                                        <p className="text-sm text-gray-700">Sweet fruits (melons, grapes), leafy greens, cucumber, coconut, rice, milk, coriander, fennel.</p>
                                    </div>
                                    <div>
                                        <strong className="text-red-700 block mb-1">❌ Avoid (Hot, Sour, Salty):</strong>
                                        <p className="text-sm text-gray-700">Spicy foods (chilies), fermented foods, sour yogurt, tomatoes, vinegar, excessive salt, alcohol.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Kapha Section */}
                <section id="kapha" className="mb-20 scroll-mt-24">
                    <div className="bg-white rounded-3xl shadow-lg border border-emerald-100 overflow-hidden">
                        <div className="bg-emerald-50 p-8 md:p-12 border-b border-emerald-100">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-emerald-100 rounded-full">
                                    <Droplet className="w-8 h-8 text-emerald-600" />
                                </div>
                                <h2 className="text-4xl font-serif font-bold text-emerald-900">Kapha Dosha</h2>
                            </div>
                            <p className="text-xl text-emerald-800 font-medium">The Energy of Structure</p>
                            <p className="text-emerald-600 mt-2">Elements: Earth + Water</p>
                        </div>

                        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-emerald-500" /> Characteristics
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-emerald-600">Body:</span> Solid, heavier build, excellent stamina, thick hair, large eyes, smooth skin.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-emerald-600">Digestion:</span> Slow metabolism, low hunger, gains weight easily.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-emerald-600">Sleep:</span> Deep, heavy sleeper. Difficulty waking up.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-semibold text-emerald-600">Mind:</span> Calm, loyal, patient, forgiving. Prone to attachment and lethargy.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-emerald-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                                    <Utensils className="w-5 h-5 text-emerald-600" /> Balancing Diet
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <strong className="text-green-700 block mb-1">✅ Favor (Warm, Light, Dry):</strong>
                                        <p className="text-sm text-gray-700">Legumes, quinoa, barley, bitter greens, apples, pomegranates, warming spices (pepper, ginger).</p>
                                    </div>
                                    <div>
                                        <strong className="text-red-700 block mb-1">❌ Avoid (Cold, Heavy, Oily):</strong>
                                        <p className="text-sm text-gray-700">Dairy, cheese, fried foods, sweets, white bread, cold drinks, high-fat meats.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Imbalance Signs */}
                <section id="imbalance" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Identifying Imbalance (Vikriti)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-t-4 border-indigo-500">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-indigo-900 mb-3">Vata Imbalance</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Dry skin & lips</li>
                                    <li>• Constipation & gas</li>
                                    <li>• Anxiety & worry</li>
                                    <li>• Insomnia</li>
                                    <li>• Joint pain (cracking sounds)</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-amber-500">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-amber-900 mb-3">Pitta Imbalance</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Acid reflux & heartburn</li>
                                    <li>• Skin rashes & acne</li>
                                    <li>• Anger & irritability</li>
                                    <li>• Excessive sweating</li>
                                    <li>• Inflammation</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-emerald-500">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-emerald-900 mb-3">Kapha Imbalance</h3>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Weight gain</li>
                                    <li>• Sinus congestion</li>
                                    <li>• Lethargy & depression</li>
                                    <li>• Water retention</li>
                                    <li>• Lack of motivation</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* CTA */}
                <section id="quiz" className="bg-gradient-to-r from-emerald-800 to-teal-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Discover Your Unique Prakriti</h2>
                        <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                            Stop guessing. Take our comprehensive, Dr-reviewed Tridosha test to find out your exact body type and get a personalized wellness roadmap.
                        </p>
                        <Button size="lg" className="bg-amber-400 text-amber-900 hover:bg-amber-300 font-bold text-lg px-8 py-6 rounded-full" asChild>
                            <Link href="/tools/prakriti-quiz">
                                Take the Free Dosha Quiz <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </section>

            </div>
        </div>
    )
}
