import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Flame, AlertOctagon, Utensils } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "Natural Home Remedies for Acidity & Gas (Amla Pitta) | Ayurveda",
    description: "Cure acid reflux and bloating permanently. Ayurvedic diet for Amla Pitta, cooling herbs like Fennel and Amla, and foods to avoid.",
    keywords: ["Ayurvedic cure for acidity", "home remedies for gas and bloating", "Amla Pitta treatment", "stomach heat remedies", "pitta pacifying diet"],
}

export default function AcidityPage() {
    const tocItems = [
        { id: "root", label: "Root Cause: Amla Pitta" },
        { id: "remedies", label: "Instant Relief Remedies" },
        { id: "diet", label: "Cooling Diet" },
        { id: "lifestyle", label: "Vihara (Lifestyle)" },
        { id: "faqs", label: "FAQs" },
        { id: "conclusion", label: "Conclusion" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#c2410c] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Cooling the Fire: Ayurvedic Cure for Acidity (GERD)
                    </h1>
                    <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                        Acidity is not just about stomach acid; it is <strong>"Amla Pitta"</strong> (Sour Fire). When the body's fire turns sour due to fermentation of food, it burns upwards.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Root Cause */}
                    <section id="root" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Flame className="w-6 h-6 text-orange-600 mr-2" />
                            The Volcano Inside
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Why does Pitta increase? Three 'S's: <strong>Spicy, Sour, Stress.</strong>
                            </p>
                            <ul className="list-disc pl-5 mt-4 space-y-2">
                                <li><strong>Fermented Food:</strong> Idli/Dosa batter that is too sour increases heat.</li>
                                <li><strong>Skipping Meals:</strong> If you don't give the acid food to digest, it starts digesting the stomach lining (Ulcers).</li>
                                <li><strong>Tea/Coffee:</strong> Highly acidic.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Remedies */}
                    <section id="remedies" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#c2410c] mb-6 border-b pb-2">3 Emergency Fire Extinguishers</h2>

                        <div className="space-y-6">
                            <Card className="bg-emerald-50 border-emerald-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">1. CCF Tea (Cumin, Coriander, Fennel)</h3>
                                    <p className="text-sm text-gray-700">Coriander is the best herb to cool internal heat without putting out the digestive fire. Fennel relaxes the sphincter.</p>
                                    <div className="font-semibold text-emerald-800 mt-2 text-sm">Drink warm after meals.</div>
                                </CardContent>
                            </Card>

                            <Card className="bg-stone-100 border-stone-200">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">2. Black Raisins (Munakka)</h3>
                                    <p className="text-sm text-gray-700">Soak 10-15 raisins overnight. Drink the water and eat them in the morning. They reduce Pitta and relieve constipation (exhaust pipe for heat).</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-white border-l-4 border-green-500 shadow-sm">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-green-900 mb-2">3. Aloe Vera Juice</h3>
                                    <p className="text-sm text-gray-700">The gel naturally coats the esophagus and heals burns/ulcers.</p>
                                    <div className="font-semibold text-green-800 mt-2 text-sm">20ml on empty stomach.</div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Diet Section */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#c2410c] mb-6 border-b pb-2">The Cooling Diet</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2 bg-green-100 p-2 rounded">Enjoy (Sheeta)</h4>
                                <ul className="text-gray-700 text-sm space-y-2 pl-2">
                                    <li>• <strong>Sweet Fruits:</strong> Ripe Mango, Melon, Pomegranate.</li>
                                    <li>• <strong>Vegetables:</strong> Cucumber, Pumpkin, Leafy Greens.</li>
                                    <li>• <strong>Grains:</strong> Rice, Barley (Cooling).</li>
                                    <li>• <strong>Dairy:</strong> Cold Milk (with rose syrup), Ghee.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2 bg-red-100 p-2 rounded">Avoid (Ushna)</h4>
                                <ul className="text-gray-700 text-sm space-y-2 pl-2">
                                    <li>• <strong>Sour Fruits:</strong> Lemon, Orange, Grapefruit.</li>
                                    <li>• <strong>Spices:</strong> Chilli, Garlic, Ginger (Dry ginger is okay).</li>
                                    <li>• <strong>Grains:</strong> Corn, Bajra (Heating).</li>
                                    <li>• <strong>Misc:</strong> Vinegar, Pickles, Alcohol.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Lifestyle */}
                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#c2410c] mb-6 border-b pb-2">Lifestyle Changes</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-1" />
                                <div>
                                    <strong>Left Side Sleeping:</strong> Lying on your left side prevents acid from flowing up into the esophagus due to the shape of the stomach.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-1" />
                                <div>
                                    <strong>Sheetali Pranayama:</strong> Curling the tongue into a tube and breathing in. This cools the blood physically.
                                </div>
                            </li>
                        </ul>
                    </section>


                    <div className="mb-12">
                        <SuccessStory
                            name="Suresh M."
                            age={52}
                            condition="Severe GERD & Heartburn"
                            result="Off Antacids in 21 Days"
                            quote="I was popping antacids like candy. Dr. Arti's simple hack of 'Black Raisins' water and sleeping on the left side changed everything. I haven't had heartburn in 3 months."
                            duration="3 Weeks"
                        />
                    </div>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#c2410c] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Does milk cure acidity?</h4>
                                <p className="text-gray-700 text-sm">Cold, sweetened milk is an instant antacid. However, hot milk might aggravate it for some. Avoid milk if you are bloating (milk is heavy).</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Is Lemon water good?</h4>
                                <p className="text-gray-700 text-sm">Lemon is acidic but has an alkaline effect post-digestion. However, for active Amla Pitta, it is best avoided until symptoms subside.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Why do I get acidity when fasting?</h4>
                                <p className="text-gray-700 text-sm">If you have high metabolic fire (Tikshnagni), fasting leaves the acid with nothing to burn, so it burns the stomach lining. You should do juice fasting, not water fasting.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border border-orange-200">
                        <h3 className="text-2xl font-bold text-orange-900 mb-4">Put Out the Fire</h3>
                        <p className="text-orange-800 mb-8 max-w-2xl mx-auto">
                            You don't need pills; you need cooling foods. Reset your pH balance naturally.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/metabolic"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-orange-600 rounded-lg hover:bg-orange-700 shadow-md"
                            >
                                Get Acid-Free Diet
                            </Link>
                        </div>
                    </section>

                </div>
                <div className="container mx-auto px-4 max-w-4xl mb-12">
                    <ScientificRefs
                        references={[
                            { text: "Management of Amlapitta (Hyperacidity) in Ayurveda", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3665191/" },
                            { text: "Evaluation of Aloe Vera in treatment of GERD", url: "https://pubmed.ncbi.nlm.nih.gov/26742306/" }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
