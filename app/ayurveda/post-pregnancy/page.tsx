import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Baby, Heart, Coffee, Shield } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Sutika Paricharya: Ayurvedic Postnatal Care Guide | FitPlan India",
    description: "Recover quickly after delivery with Ayurvedic Sutika Paricharya. Diet chart, Gond Laddu recipe, and massage tips for nursing mothers to regain strength.",
    keywords: ["Ayurvedic postnatal care", "Sutika Paricharya guide", "Gond ka laddu for pregnancy", "diet after delivery indian", "postpartum recovery herbs", "breastfeeding diet ayurveda"],
}

export default function PostPregnancyPage() {
    const tocItems = [
        { id: "sutika", label: "What is Sutika?" },
        { id: "vata", label: "The Vata Storm" },
        { id: "diet", label: "Recovery Diet" },
        { id: "laddu", label: "Gond Laddu Recipe" },
        { id: "massage", label: "Abhyanga" },
        { id: "faqs", label: "FAQs" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#be123c] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        The First 42 Days: A Rebirth for the Mother
                    </h1>
                    <p className="text-lg md:text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
                        In Ayurveda, the first 6 weeks after delivery (Sutika Kala) determine a woman's health for the next 40 years. Neglecting this period invites back pain, depression, and hormonal issues.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Sutika Concept */}
                    <section id="sutika" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Baby className="w-6 h-6 text-rose-600 mr-2" />
                            Sutika Paricharya: The Protocol
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Delivery is physically traumatic. In the process of expelling the baby, immense <strong>Vata</strong> (Air) rushes into the empty space in the abdomen.
                                <br />
                                If this Vata is not calmed with <strong>Oil (Sneha)</strong> and <strong>Warmth (Sweda)</strong>, it lodges in the joints and mind, causing postpartum arthritis and blues.
                            </p>
                        </div>
                    </section>

                    {/* Diet Section */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#be123c] mb-6 border-b pb-2">The Recovery Diet</h2>
                        <p className="text-gray-700 mb-6">
                            The digestive fire (Agni) is extremely weak after labor. You cannot digest heavy food like Paneer, Pizza, or Raw Salads.
                        </p>

                        <div className="grid gap-6">
                            <Card className="bg-stone-50 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Days 1-3: Liquid Diet</h3>
                                    <p className="text-sm text-gray-700">Gruel (Peyas) made of rice and ghee. Warm water with Ajwain (Carom seeds) to clean the uterus.</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-50 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Days 4-10: Semi-Solid Diet</h3>
                                    <p className="text-sm text-gray-700">Moong Dal Khichdi. Milk with Garlic (Ksheerapaka). Garlic boosts immunity and milk production.</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-50 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Days 11-42: Nourishing Diet</h3>
                                    <p className="text-sm text-gray-700">Ghee, Mutton Soup (if non-veg), Gourds (Lauki/Turai), and Laddus.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Recipe */}
                    <section id="laddu" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#be123c] mb-6 border-b pb-2">The Magic of Gond Laddu</h2>
                        <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
                            <h3 className="font-bold text-rose-900 mb-4 flex items-center"><Heart className="w-5 h-5 mr-2" /> Why eat it?</h3>
                            <p className="text-gray-700 mb-4">
                                <strong>Gond (Edible Gum)</strong> strengthens the backbone and pelvic floor. <strong>Dry Fruits</strong> provide essential fats for breast milk. <strong>Ghee</strong> lubricates the dry internal organs.
                            </p>
                            <div className="bg-white p-4 rounded text-sm text-rose-800">
                                <strong>Dosage:</strong> 1 Laddu (50g) with warm milk in the morning.
                            </div>
                        </div>
                    </section>

                    {/* Massage */}
                    <section id="massage" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#be123c] mb-6 border-b pb-2">Abhyanga & Belly Binding</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-rose-600 mr-2 mt-1" />
                                <div>
                                    <strong>Oil Massage:</strong> Daily full body massage with <strong>Dhanwantharam Thailam</strong> or Sesame Oil. Wait 30 mins before bathing in hot water.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-rose-600 mr-2 mt-1" />
                                <div>
                                    <strong>Belly Binding (Udaraveshtana):</strong> Tightly wrapping the abdomen with a cotton cloth helps the uterus shrink back to size and supports the back.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-rose-600 mr-2 mt-1" />
                                <div>
                                    <strong>Fumigation (Dhoopana):</strong> Smoke from burning garlic skin and ajwain prevents infection in the intimate areas.
                                </div>
                            </li>
                        </ul>
                    </section>


                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#be123c] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: When can I start exercising?</h4>
                                <p className="text-gray-700 text-sm">Ayurveda strictly forbids vigorous exercise for 3 months. Only gentle walking and breathing. Your ligaments are loose; running now will cause prolapse.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can I drink cold water?</h4>
                                <p className="text-gray-700 text-sm">Never. Cold water increases Vata and slows down recovery. Drink only boiled water with Jeera/Ajwain.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: What increases breast milk?</h4>
                                <p className="text-gray-700 text-sm">Shatavari, Jeera (Cumin), Garlic, and Milk. Stress reduces milk, so rest is crucial.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-8 text-center border border-rose-200">
                        <h3 className="text-2xl font-bold text-rose-900 mb-4">Mother the Mother</h3>
                        <p className="text-rose-800 mb-8 max-w-2xl mx-auto">
                            You cannot pour from an empty cup. Heal yourself first to heal your baby.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/post-pregnancy"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-rose-600 rounded-lg hover:bg-rose-700 shadow-md"
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
