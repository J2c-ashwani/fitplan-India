import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Activity, Droplet, AlertCircle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Kidney Care: Herbs & Diet for Renal Health | FitPlan India",
    description: "Support kidney function naturally with Ayurveda. Learn about Punarnava, Gokshura, and daily habits to cleanse kidneys and prevent stones.",
    keywords: ["Ayurveda for kidney health", "Punarnava for kidney", "Natural kidney detox", "Ayurvedic diet for renal failure", "Kidney stone home remedies"],
}

export default function KidneyPage() {
    const tocItems = [
        { id: "intro", label: "Kidneys in Ayurveda" },
        { id: "herbs", label: "Top Herbs" },
        { id: "diet", label: "Renal Diet" },
        { id: "lifestyle", label: "Lifestyle Tips" },
        { id: "stones", label: "Kidney Stones" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Vrikka Roga: Ayurvedic Approach to Kidney Health
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        In Ayurveda, kidneys are the roots of the <strong>Meda Vaha Srotas</strong> (Fat channels) and <strong>Mutra Vaha Srotas</strong> (Urine channels). Protecting them is vital for removing toxins (Ama).
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Renal Health</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                The kidneys filter 200 liters of blood daily. When <strong>Kapha</strong> and <strong>Vata</strong> are imbalanced, they can cause blockages (stones) or degeneration (failure). Ayurveda focuses on <strong>Mutrala</strong> (diuretic) herbs that flush out toxins without straining the kidneys.
                            </p>
                        </div>
                    </section>

                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Top Kidney-Protective Herbs</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">1. Punarnava</h3>
                                    <p className="text-gray-600 font-medium italic mb-2">"The one that renews"</p>
                                    <p className="text-gray-700 text-sm">Ideally used for reviving dying kidney cells. It reduces creatinine levels and swelling (edema) in the body.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">2. Gokshura</h3>
                                    <p className="text-gray-600 font-medium italic mb-2">Tribulus Terrestris</p>
                                    <p className="text-gray-700 text-sm">A powerful diuretic. It strengthens the urinary tract and is excellent for preventing urinary tract infections (UTIs) and stones.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">3. Varun</h3>
                                    <p className="text-gray-600 font-medium italic mb-2">Crataeva Nurvala</p>
                                    <p className="text-gray-700 text-sm">The "Stone Breaker". It has lithotriptic activity, meaning it helps break down kidney stones naturally.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">4. Pashanbhed</h3>
                                    <p className="text-gray-600 font-medium italic mb-2">Bergenia Ligulata</p>
                                    <p className="text-gray-700 text-sm">Literally means "breaking the rock". Highly effective for painful urination and dissolving crystals.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Kidney-Friendly Architecture</h2>
                        <div className="space-y-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-bold text-green-900 mb-2">✅ Eat Freely:</h4>
                                <p className="text-sm text-gray-700">Gourd family (Bottle gourd, Ridge gourd), Cucumber, Watermelon, Barley water, Coconut water (unless high potassium is an issue).</p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg">
                                <h4 className="font-bold text-red-900 mb-2">❌ strict Avoid:</h4>
                                <p className="text-sm text-gray-700">Excess salt, Red meat, Alcohol, Caffeine (dehydrates kidneys), Spinach and Tomato (if prone to Oxalate stones).</p>
                            </div>
                        </div>
                    </section>

                    <section id="stones" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Home Remedy for Stones</h2>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                            <h4 className="font-bold text-gray-900 mb-2">Kulthi (Horse Gram) Soup</h4>
                            <p className="text-gray-700 mb-2">This is the most potent Ayurvedic remedy for dissolving stones.</p>
                            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                                <li>Soak 1 cup Horse Gram overnight.</li>
                                <li>Boil in 4 cups of water until it reduces to 1 cup.</li>
                                <li>Drink this soup warm early morning.</li>
                            </ul>
                            <p className="text-xs text-gray-500 mt-2">*Avoid if you have high internal heat (Pitta) or acidity.</p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
