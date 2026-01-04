import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Ban, Activity, Utensils } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "Natural Remedies for Hypothyroidism & TSH Control | FitPlan India",
    description: "Manage Hypothyroidism (Galaganda) with Ayurveda. Learn about Kanchanar Guggulu, Coriander water, Selenium rich diet, and Ujjayi Pranayama for thyroid health.",
    keywords: ["Ayurvedic cure for hypothyroidism", "Kanchanar Guggulu benefits", "Coriander seeds for thyroid", "Indian diet for thyroid patients", "Ujjayi pranayama for thyroid"],
}

export default function ThyroidPage() {
    const tocItems = [
        { id: "ayurveda-view", label: "Thyroid in Ayurveda" },
        { id: "remedies", label: "Top 4 Home Remedies" },
        { id: "herbs", label: "Medical Herbs" },
        { id: "diet", label: "Thyroid Diet Chart" },
        { id: "contra", label: "Foods to Avoid" },
        { id: "yoga", label: "Yoga for TSH" },
        { id: "faqs", label: "FAQs" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Natural Support for Hypothyroidism (Galaganda)
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Thyroid issues are rapidly increasing due to stress and processed salts. In Ayurveda, this condition correlates with <strong>Galaganda</strong> (Enlargement of neck glands) caused by low <strong>Agar (Metabolic Fire)</strong>.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Detailed Introduction */}
                    <section id="ayurveda-view" className="mb-12">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Agni Connection</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                The thyroid gland controls metabolism. When your metabolism slows down (Hypothyroidism), it means your <strong>Jatharagni</strong> (Digestive Fire) is weak. This leads to:
                            </p>
                            <ul className="grid sm:grid-cols-2 gap-4 mt-4">
                                <li className="bg-stone-50 p-3 rounded border"><strong>Kapha increase:</strong> Weight gain and water retention.</li>
                                <li className="bg-stone-50 p-3 rounded border"><strong>Vata blockage:</strong> Dry skin, hoarse voice, and constipation.</li>
                            </ul>
                            <p className="mt-4">
                                The Ayurvedic protocol is not just to supply thyroxine externally, but to stimulate the gland to produce its own hormones by "igniting the fire" using warming spices and iodine-rich herbs.
                            </p>
                        </div>
                    </section>

                    <div className="mb-20">
                        <ExpertNote
                            title="The Emotional Weight"
                            content="The thyroid (Vishuddhi Chakra) is connected to 'speaking your truth'. Many patients, especially women, suppress their voice or emotions, which manifests as a blockage in the throat chakra. Healing involves expression as much as medication."
                        />
                    </div>

                    {/* Remedies */}
                    <section id="remedies" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Top 4 Kitchen Remedies</h2>

                        <div className="space-y-6">
                            <Card className="bg-emerald-50 border-emerald-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">1. Coriander (Dhania) Water</h3>
                                    <p className="text-gray-700 mb-3"><strong>Mechanism:</strong> Ayurveda considers Dhania as Tridoshic. It is specifically hailed for cleaning the thyroid gland and reducing swelling.</p>
                                    <div className="bg-white p-3 rounded text-sm font-medium text-emerald-800 border border-emerald-200">
                                        Recipe: Crush 2 tsp coriander seeds. Soak in 1 glass water overnight. Boil in morning until it reduces to half. Drink empty stomach.
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-amber-50 border-amber-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-amber-900 mb-2">2. Brazil Nuts (Selenium Powerhouse)</h3>
                                    <p className="text-gray-700 mb-3">While not traditional Indian, they fit the Ayurvedic principle of nutrient-dense food. The thyroid needs Selenium to convert T4 (inactive) to T3 (active) hormone.</p>
                                    <div className="bg-white p-3 rounded text-sm font-medium text-amber-800 border border-amber-200">
                                        Prescription: Eat just 2 Brazil nuts a day (contains 100% daily Selenium).
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="border border-stone-200 p-5 rounded-xl">
                                    <h4 className="font-bold text-gray-900 mb-2">3. Virgin Coconut Oil</h4>
                                    <p className="text-sm text-gray-600">Contains Medium Chain Fatty Acids (MCFAs) which bypass digestion and jumpstart metabolism directly.</p>
                                    <p className="mt-2 text-sm font-semibold">Usage: 1 tsp raw daily.</p>
                                </div>
                                <div className="border border-stone-200 p-5 rounded-xl">
                                    <h4 className="font-bold text-gray-900 mb-2">4. Onion Neck Pack</h4>
                                    <p className="text-sm text-gray-600">A folk remedy. The phosphoric acid in onion juice is believed to stimulate the gland when massaged locally.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Herbs */}
                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Kanchanar Guggulu: The Thyroid Herb</h2>
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="prose prose-lg text-gray-700 flex-1">
                                <p>
                                    If you go to any Ayurvedic doctor for thyroid, this is the first prescription. <strong>Kanchanar</strong> is a tree bark used specifically for "Gandamala" (Neck Swellings/Goiter). <strong>Guggulu</strong> is a resin that scrapes away fat and toxins.
                                </p>
                                <p className="mt-4">
                                    It effectively reduces the size of the thyroid gland (in goiter) and stimulates function.
                                </p>
                                <div className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 text-orange-900 text-sm">
                                    <strong>Note:</strong> Always consult a doctor before starting Guggulu if you are pregnant or on blood thinners.
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Diet Chart */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Thyroid-Friendly Diet</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse rounded-lg bg-white shadow-sm overflow-hidden">
                                <thead className="bg-[#064e3b] text-white">
                                    <tr>
                                        <th className="p-4">Category</th>
                                        <th className="p-4">Eat These (Pathya)</th>
                                        <th className="p-4">Avoid These (Apathya)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-4 font-semibold text-gray-900">Grains</td>
                                        <td className="p-4 text-gray-700">Old Rice, Barley, Quinoa</td>
                                        <td className="p-4 text-red-600">Gluten (Wheat, Maida) often triggers autoimmune thyroid (Hashimoto's)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-gray-900">Vegetables</td>
                                        <td className="p-4 text-gray-700">Gourd family (Lauki, Turai), Pumpkin, Drumstick</td>
                                        <td className="p-4 text-red-600">Raw Cruciferous veggies (Cabbage, Broccoli, Cauliflower) contain Goitrogens. Always cook them.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-gray-900">Oils</td>
                                        <td className="p-4 text-gray-700">Coconut Oil, Ghee</td>
                                        <td className="p-4 text-red-600">Refined Soy Oil, Sunflower Oil (Pro-inflammatory)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold text-gray-900">Spices</td>
                                        <td className="p-4 text-gray-700">Black Pepper, Ginger, Long Pepper (Trikatu)</td>
                                        <td className="p-4 text-red-600">Excess Red Chilli</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Yoga */}
                    <section id="yoga" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Yoga for Thyroid Stimulation</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-stone-50 p-6 rounded-xl text-center">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🧘‍♀️</div>
                                <h3 className="font-bold text-gray-900 mb-2">Sarvangasana</h3>
                                <p className="text-sm text-gray-600">Shoulder Stand. Rushes blood to the neck region.</p>
                            </div>
                            <div className="bg-stone-50 p-6 rounded-xl text-center">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🐟</div>
                                <h3 className="font-bold text-gray-900 mb-2">Matsyasana</h3>
                                <p className="text-sm text-gray-600">Fish Pose. Stretches the neck throat exposed to open flow.</p>
                            </div>
                            <div className="bg-stone-50 p-6 rounded-xl text-center">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🌬️</div>
                                <h3 className="font-bold text-gray-900 mb-2">Ujjayi Pranayama</h3>
                                <p className="text-sm text-gray-600">"Ocean Breath". Creates vibrations in the throat that physically massage the gland.</p>
                            </div>
                        </div>
                    </section>

                    <div className="mb-20">
                        <SuccessStory
                            name="Sunita K."
                            age={42}
                            condition="Hypothyroidism (TSH 14)"
                            result="TSH Reduced to 4.2"
                            quote="I was tired all the time. The Coriander water and Ujjayi breathing were simple changes, but they brought my energy back. My hairfall has stopped too."
                            duration="5 Months"
                        />
                    </div>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can I stop my thyroid medication if I follow this?</h4>
                                <p className="text-gray-700 text-sm"><strong>Absolutely NOT.</strong> Thyroid hormones are vital for survival. You should start these remedies alongside your medication. Get tested every 6 weeks. Only your doctor can lower your dosage as your levels improve.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Is Soy safe for thyroid patients?</h4>
                                <p className="text-gray-700 text-sm">No. Soy contains phytoestrogens which can interfere with hormone absorption. It's best avoided.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: What is the best time to do Ujjayi Pranayama?</h4>
                                <p className="text-gray-700 text-sm">Early morning, empty stomach, for 10-15 minutes daily.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Metabolism Reset Plan</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Thyroid is a lifestyle disease. Fix your lifestyle, and the gland will heal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/thyroid"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Thyroid Diet Plan
                            </Link>
                        </div>
                    </section>

                </div>
                <div className="container mx-auto px-4 max-w-4xl mb-12">
                    <ScientificRefs
                        references={[
                            { text: "Coriander seeds and thyroid function", url: "https://pubmed.ncbi.nlm.nih.gov/22409893/" },
                            { text: "Effect of Selenium supplementation on TSH", url: "https://pubmed.ncbi.nlm.nih.gov/17696828/" }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
