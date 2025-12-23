import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Baby, Heart } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Postpartum Recovery & Lactation with Ayurveda | Sutika Paricharya",
    description: "Recover faster after delivery with Ayurvedic Postpartum Care (Sutika Paricharya). Diet tips for lactation, weight loss, and preventing back pain.",
    keywords: ["Ayurveda postpartum care", "diet after delivery indian", "foods for breast milk supply ayurveda", "Gond ke laddu benefits", "Sutika paricharya guide"],
}

export default function PostPregnancyPage() {
    const tocItems = [
        { id: "intro", label: "The Sacred 42 Days" },
        { id: "diet", label: "1. Healing Diet" },
        { id: "lactation", label: "2. Boosting Lactation" },
        { id: "massage", label: "3. Abhyanga & Belly Wrapping" },
        { id: "gond", label: "4. Gond Ke Laddu" },
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
                        Postpartum Recovery: The Ayurvedic Way (Sutika Paricharya)
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        The first 42 days after delivery determine your health for the next 42 years. Ayurveda focuses on balancing the huge <strong>Vata</strong> void created after the baby leaves the womb.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Baby className="w-6 h-6 text-emerald-600 mr-2" />
                            Rebuilding the Mother
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Delivery is an exhausting process that depletes the body's tissues (Dhatus) and aggravates Vata (Air element). This causes gas, joint pain, depression, and fatigue. The goal of <strong>Sutika Paricharya</strong> is to rest, oil, and nourish.
                            </p>
                        </div>
                    </section>

                    {/* Remedy 1: Diet */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. The Sutika Diet</h2>
                        <Card className="mb-6 bg-amber-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Food should be warm, soupy, and oily (Ghee). Cold, raw, and dry foods are strictly forbidden.
                                </p>
                                <div className="mt-4 text-sm text-gray-700">
                                    <ul className="list-disc ml-5 space-y-2">
                                        <li><strong>Harira / Raab:</strong> Hot gruel made of wheat, ghee, jaggery, and nuts.</li>
                                        <li><strong>Garlic Milk:</strong> Boiled garlic in milk helps reduce Vata pain and boosts immunity.</li>
                                        <li><strong>Ajwain Water:</strong> Cleanses the uterus and prevents gas in the baby.</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Lactation */}
                    <section id="lactation" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Galactogogues (Milk Boosters)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Breast milk is produced from the essence of the food you eat (Rasa Dhatu).
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-stone-50 p-4 rounded-lg">
                                <h4 className="font-bold">Shatavari</h4>
                                <p className="text-sm">The #1 herb for increasing milk supply.</p>
                            </div>
                            <div className="bg-stone-50 p-4 rounded-lg">
                                <h4 className="font-bold">Cumin (Jeera)</h4>
                                <p className="text-sm">Roast it and have it with warm water.</p>
                            </div>
                        </div>
                    </section>

                    {/* Remedy 3: Massage */}
                    <section id="massage" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Abhyanga & Belly Wrapping</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Daily massage with warm Sesame oil helps strengthen loose muscles and ligaments. <strong>Belly wrapping</strong> with a cotton cloth supports the back and helps the uterus shrink back to size.
                        </p>
                    </section>

                    {/* Remedy 4: Gond */}
                    <section id="gond" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. Gond Ke Laddu (Edible Gum)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A traditional Indian superfood for new moms. Gond strengthens the back bone and provides high energy (calories) specifically needed for breastfeeding.
                        </p>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">You matter too, Mom!</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            A healthy mom raises a healthy baby. Don't rush weight loss; focus on recovery.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/post-pregnancy"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Post-Pregnancy Diet
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
