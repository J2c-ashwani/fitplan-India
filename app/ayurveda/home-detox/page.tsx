import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, RefreshCw, Leaf } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Simple Weekend Home Detox Plan (Mini-Panchakarma) | Ayurveda",
    description: "Reset your digestion with a 2-day Ayurvedic Home Detox. Learn how to do Kitchari Cleanse, Castor Oil purge, and self-massage to remove toxins.",
    keywords: ["Ayurvedic home detox", "Kitchari cleanse recipe", "weekend detox plan", "castor oil cleanse", "remove toxins naturally"],
}

export default function DetoxPage() {
    const tocItems = [
        { id: "intro", label: "Why Detox?" },
        { id: "saturday", label: "Day 1: Prep & Ghee" },
        { id: "kitchari", label: "The Kitchari Diet" },
        { id: "sunday", label: "Day 2: Purgation" },
        { id: "post", label: "Post-Detox" },
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
                        Weekend Reset: Simple Home Detox Plan
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        You service your car every few months; why not your body? This gentle 2-day plan is a mini-version of the famous <strong>Panchakarma</strong> therapy to flush out accumulated Ama (toxins).
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <RefreshCw className="w-6 h-6 text-emerald-600 mr-2" />
                            Signs You Need a Detox
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <ul className="grid sm:grid-cols-2 gap-2">
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" /> Feeling heavy/lethargic constantly.</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" /> Thick white coating on tongue.</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" /> Bad breath or body odor.</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" /> Brain fog or irritability.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Saturday: Snehana */}
                    <section id="saturday" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Saturday (Day 1): Oiling & Loosening</h2>
                        <Card className="mb-6 bg-yellow-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    The goal today is to lubricate the channels so toxins stop sticking to the tissues.
                                </p>
                                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start"><strong className="mr-2">7:00 AM:</strong> Drink 2 tbsps of warm melted Ghee on empty stomach. Drink warm water after.</li>
                                    <li className="flex items-start"><strong className="mr-2">All Day:</strong> Eat ONLY liquid Kitchari (Rice + Moong Dal). No veggies, no salt (or very little).</li>
                                    <li className="flex items-start"><strong className="mr-2">Night:</strong> Apply warm sesame oil all over body (Abhyanga) followed by a hot shower.</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Kitchari Recipe */}
                    <section id="kitchari" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Why Kitchari?</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Moong Dal and Basmati Rice cooked together is the easiest food to digest. It gives the digestive system a break, allowing energy to be used for detoxing. Add excessive water to make it soupy.
                        </p>
                    </section>

                    {/* Sunday: Virechana */}
                    <section id="sunday" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Sunday (Day 2): The Purge</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Today we flush the toxins out. Stay at home!
                        </p>
                        <ul className="space-y-3 bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> <strong>7:00 AM:</strong> Mix 1-2 tbsp Castor Oil in a cup of warm ginger tea/water. Drink it quickly.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> <strong>Wait:</strong> You will have multiple bowel movements. Drink warm water to stay hydrated.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> <strong>Lunch:</strong> Once the purging stops and you feel hungry, eat Kitchari.</li>
                        </ul>
                    </section>

                    {/* Post Detox */}
                    <section id="post" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Post-Detox Care (Samsarjana)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your digestive fire (Agni) is weak after detox. Don't eat pizza on Monday!
                            <br />Gradually reintroduce solid foods over the next 2 days. Start with soups, then cooked veggies, then grains.
                        </p>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">A Fresh Start</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            You will feel lighter, clearer, and more energetic.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-emerald-700 transition-all duration-200 bg-white border-2 border-emerald-600 rounded-lg hover:bg-emerald-50"
                            >
                                Get Full Panchakarma Guide
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
