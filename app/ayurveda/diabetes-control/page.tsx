import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Leaf, AlertCircle, Droplet } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Management of Diabetes (Madhumeha) | Natural Sugar Control",
    description: "Control blood sugar levels naturally with Ayurveda. Discover the benefits of Jamun seeds, Methi (Fenugreek), Karela, and diet tips for managing Diabetes Type 2.",
    keywords: ["Ayurveda for diabetes", "Jamun seeds for sugar", "Methi water benefits", "Madhumeha treatment ayurveda", "sugar control home remedies"],
}

export default function DiabetesPage() {
    const tocItems = [
        { id: "intro", label: "Diabetes in Ayurveda" },
        { id: "methi", label: "1. Fenugreek (Methi)" },
        { id: "jamun", label: "2. Jamun Seeds" },
        { id: "karela", label: "3. Bitter Gourd (Karela)" },
        { id: "amla", label: "4. Amla & Turmeric" },
        { id: "lifestyle", label: "5. Active Lifestyle" },
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
                        Managing Sugar Levels Naturally (Madhumeha)
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Ayurveda classifies diabetes as <strong>Madhumeha</strong>, a disease of abundance. It is primarily a Kapha disorder that can be managed effectively with simple kitchen herbs and lifestyle changes.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Leaf className="w-6 h-6 text-emerald-600 mr-2" />
                            The 'Sweet Urine' Disease
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                In ancient texts, diabetes was identified by ants being attracted to the urine of patients. It is considered a <strong>Lifestyle Disorder</strong> caused by excessive intake of Kapha-aggravating foods (sweets, dairy, refined flour) and lack of physical activity (Avyayam).
                            </p>
                        </div>
                    </section>

                    {/* Remedy 1: Methi */}
                    <section id="methi" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">1. Fenugreek (Methi): The Glucose Regulator</h2>
                        <Card className="mb-6 bg-yellow-50 border-none">
                            <CardContent className="p-6">
                                <p className="text-gray-700 leading-relaxed">
                                    Methi seeds are rich in soluble fiber which slows down the digestion and absorption of carbohydrates. This helps in preventing spikes in blood sugar levels.
                                </p>
                                <div className="bg-white p-4 rounded-lg mt-4 border border-yellow-200">
                                    <h4 className="font-bold text-yellow-900 mb-2">Usage:</h4>
                                    <p className="text-sm text-gray-700">Soak 1 tsp of seeds overnight. Drink the water and chew the seeds first thing in the morning.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Remedy 2: Jamun */}
                    <section id="jamun" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">2. Jamun Seeds: The Miracle Powder</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            While the Jamun fruit is good, its <strong>Seeds (Guthli)</strong> are medicinal gold for diabetics. They contain jamboline, which prevents the conversion of starch into sugar.
                        </p>
                        <ul className="space-y-3 bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Controls excessive urination.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> Reduces blood sugar levels significantly.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5" /> <strong>Tip:</strong> Buy dried Jamun seed powder and take 1 tsp with water before meals.</li>
                        </ul>
                    </section>

                    {/* Remedy 3: Karela */}
                    <section id="karela" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">3. Bitter Gourd (Karela)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            "Bitter is better" for diabetes. Karela contains an insulin-like compound called Polypeptide-p or p-insulin which has been shown to lower blood glucose naturally.
                        </p>
                        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                            <p className="text-emerald-900 font-medium">Have 30ml of Karela Juice mixed with Amla Juice every morning for best results.</p>
                        </div>
                    </section>

                    {/* Remedy 4: Amla & Turmeric */}
                    <section id="amla" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">4. Nishamalaki (Amla + Turmeric)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The combination of Amla (Indian Gooseberry) and Turmeric is a classical Ayurvedic remedy known as <strong>Nishamalaki</strong>. It not only controls sugar but also prevents diabetic complications like retinopathy and neuropathy.
                        </p>
                    </section>

                    {/* Remedy 5: Active Lifestyle */}
                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">5. Stay Active (Vyayama)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Since diabetes is a Kapha disorder (sedentary nature), movement is medicine.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-stone-50 p-6 rounded-xl">
                                <h4 className="font-bold text-gray-900 mb-2">Brisk Walking</h4>
                                <p className="text-sm text-gray-700">30-45 minutes daily acts as a natural insulin sensitizer.</p>
                            </div>
                            <div className="bg-stone-50 p-6 rounded-xl">
                                <h4 className="font-bold text-gray-900 mb-2">Yoga Poses</h4>
                                <p className="text-sm text-gray-700">Mandukasana (Frog Pose) and Ardha Matsyendrasana stimulate the pancreas.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Reverse High Sugar Naturally</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            With the right Low-Glycemic Index diet and Ayurvedic herbs, you can manage diabetes effectively.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/diabetes"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Diabetes Diet Plan <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact#contact-form"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-emerald-700 transition-all duration-200 bg-white border-2 border-emerald-600 rounded-lg hover:bg-emerald-50"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
