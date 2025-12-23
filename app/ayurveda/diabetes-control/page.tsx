import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Droplet, Activity, HeartPulse, Moon } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Natural Ayurveda Treatments for Diabetes (Madhumeha) | FitPlan India",
    description: "Control high blood pressure naturally. Ayurvedic guide to managing Madhumeha using Methi, Jamun, Karela, and lifestyle changes to reverse insulin resistance.",
    keywords: ["Ayurveda for diabetes type 2", "Natural blood sugar control", "Methi water benefits", "Jamun seeds powder for diabetes", "Ayurvedic diet for sugar patients"],
}

export default function DiabetesPage() {
    const tocItems = [
        { id: "intro", label: "Madhumeha Explained" },
        { id: "herbs", label: "The Fabulous 4 Herbs" },
        { id: "diet", label: "Sugar Control Diet" },
        { id: "lifestyle", label: "Daily Routine" },
        { id: "faqs", label: "FAQs" },
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
                        Madhumeha: Managing Diabetes the Ayurvedic Way
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Diabetes is described as <strong>Madhumeha</strong> (Sweet Urine) in Ayurveda, classified under 20 types of Prameha (Urinary disorders). It is primarily a disease of excess Kapha and fat (Meda).
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Droplet className="w-6 h-6 text-emerald-600 mr-2" />
                            Why does it happen?
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Charaka Samhita (the ancient text) explicitly states the cause: <strong>"Asyapakhya"</strong> (Sitting too much) and <strong>"Dadhi Navanna"</strong> (Excess intake of curd, sweets, and new grains).
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-4">
                                <h4 className="font-bold text-blue-900">The 3 Pillars of Treatment:</h4>
                                <ul className="list-disc ml-5 mt-2 text-blue-800">
                                    <li><strong>Ahar (Diet):</strong> Reducing Kapha-aggravating foods.</li>
                                    <li><strong>Vihar (Lifestyle):</strong> Increasing physical activity (Vyayama).</li>
                                    <li><strong>Aushadhi (Medicine):</strong> Bitter and astringent herbs to reduce sugar.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Expanded Herbs Section */}
                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Top 4 Anti-Diabetic Herbs</h2>
                        <p className="text-gray-700 mb-6">
                            Bitter taste (Tikta Rasa) is the antidote to sweetness. Almost all diabetic herbs are bitter.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">

                            {/* Herb 1 */}
                            <Card className="bg-white border-l-4 border-emerald-500 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">1. Methi (Fenugreek)</h3>
                                    <p className="text-gray-600 text-sm mb-3">Rich in soluble fiber 'galactomannan', it slows down the absorption of sugar in the blood.</p>
                                    <div className="bg-stone-50 p-2 text-sm rounded">
                                        <strong>Ritual:</strong> Soak 1 tbsp seeds overnight. Drink water + chew seeds in the morning.
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Herb 2 */}
                            <Card className="bg-white border-l-4 border-purple-500 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-purple-900 mb-2">2. Jamun Seeds</h3>
                                    <p className="text-gray-600 text-sm mb-3">Often thrown away, the seeds contain 'Jamboline' which checks the conversion of starch into sugar.</p>
                                    <div className="bg-stone-50 p-2 text-sm rounded">
                                        <strong>Ritual:</strong> Dry seeds, powder them. Take 1 tsp twice daily with water.
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Herb 3 */}
                            <Card className="bg-white border-l-4 border-green-500 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-green-900 mb-2">3. Karela (Bitter Gourd)</h3>
                                    <p className="text-gray-600 text-sm mb-3">Contains 'Charantin' and 'Polypeptide-p' (plant insulin). It mimics human insulin to lower blood sugar.</p>
                                    <div className="bg-stone-50 p-2 text-sm rounded">
                                        <strong>Ritual:</strong> 20ml fresh juice on empty stomach. Best for pre-diabetics.
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Herb 4 */}
                            <Card className="bg-white border-l-4 border-yellow-500 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-yellow-900 mb-2">4. Nisha-Amalaki</h3>
                                    <p className="text-gray-600 text-sm mb-3">A classic combination of Turmeric (Nisha) and Amla. Turmeric prevents inflammation of the pancreas, while Amla repairs cells.</p>
                                    <div className="bg-stone-50 p-2 text-sm rounded">
                                        <strong>Ritual:</strong> Mix equal parts powder. Take with warm water.
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Diet Section */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The Diabetic Plate</h2>
                        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                            <div className="bg-gray-50 p-4 border-b">
                                <h4 className="font-bold text-gray-900">Glycemic Index Rules</h4>
                            </div>
                            <div className="p-6 bg-white space-y-4">
                                <div className="flex justify-between items-center border-b border-dashed pb-2">
                                    <span className="text-gray-700">Grains</span>
                                    <span className="font-medium text-emerald-700">Barley (Jau), Millets (Bajra/Ragi)</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-dashed pb-2">
                                    <span className="text-gray-700">Pulses</span>
                                    <span className="font-medium text-emerald-700">Moong, Chana, Horse Gram</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-dashed pb-2">
                                    <span className="text-gray-700">Fruits</span>
                                    <span className="font-medium text-emerald-700">Jamun, Guava, Apple, Papaya (Limited)</span>
                                </div>
                                <div className="flex justify-between items-center bg-red-50 p-2 rounded">
                                    <span className="text-red-700 font-bold">STRICTLY AVOID</span>
                                    <span className="text-red-700 text-sm">Sugar, Jaggery, Honey (in excess), Potato, White Rice, Maida.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Lifestyle */}
                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Lifestyle Hacks</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <Activity className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                                <div>
                                    <strong>The 1000 Step Rule:</strong> Never sit or sleep immediately after meals. Walk 1000 steps (Shatapavali) to help blood sugar uptake by muscles.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <HeartPulse className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                                <div>
                                    <strong>Dry Friction Massage (Udvartana):</strong> Rub herbal powders on the body instead of oil. This reduces subcutaneous fat and improves insulin sensitivity.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Moon className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" />
                                <div>
                                    <strong>Sleep Early:</strong> Staying awake late at night increases stress hormones which spike blood sugar the next morning.
                                </div>
                            </li>
                        </ul>
                    </section>


                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Is fruit sugar (Fructose) safe?</h4>
                                <p className="text-gray-700 text-sm">In moderation, yes. Whole fruits have fiber which blunts the spike. Fruit juices, however, are sugar bombs—avoid them completely.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can I eat rice?</h4>
                                <p className="text-gray-700 text-sm">Ayurveda recommends "Purana Shali" (Old Rice) stored for 1 year, as it becomes lighter. If you must eat rice, drain the starch water (Maad) completely, or switch to Brown/Red rice.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can diabetes be reversed?</h4>
                                <p className="text-gray-700 text-sm">Pre-diabetes and early Type-2 diabetes are reversible with strict dietary changes and weight loss. Chronic Type-2 can be well-managed. Type-1 cannot be reversed but management can be improved.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Take Control of Your Numbers</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            You are meant to enjoy the sweetness of life, not suffer from the sweetness of blood.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/workouts/diabetes"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                View Diabetes Exercises
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
