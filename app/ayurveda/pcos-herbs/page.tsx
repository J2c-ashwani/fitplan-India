import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Calendar, Coffee, Utensils, Moon } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "5 Best Ayurvedic Herbs to Cure PCOS/PCOD Permanently | FitPlan India",
    description: "Reverse PCOS naturally with Ayurveda. A comprehensive guide on Ashwagandha, Shatavari, and Cinnamon for hormonal balance, weight loss, and irregular periods.",
    keywords: ["Ayurvedic treatment for PCOS", "Ashwagandha for PCOS", "Shatavari benefits for women", "PCOS diet chart indian", "Yoga for PCOD", "cure pcod permanently"],
}

export default function PCOSPage() {
    const tocItems = [
        { id: "understanding", label: "Ayurvedic View on PCOS" },
        { id: "herbs", label: "Top 5 Herbs" },
        { id: "diet", label: "PCOS Diet Chart" },
        { id: "lifestyle", label: "Lifestyle (Vihara)" },
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
                        PCOS & Ayurveda: A Holistic Guide to Hormonal Balance
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        PCOS (Polycystic Ovary Syndrome) is not just a reproductive issue; it is a metabolic disaster. In Ayurveda, we treat the root cause: a <strong>Vata-Kapha</strong> imbalance blocking the flow of nutrients to the ovaries.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Detailed Introduction */}
                    <section id="understanding" className="mb-12">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Ayurvedic Physiology of PCOS (Granthi Roga)</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                In modern medicine, PCOS is treated with birth control pills that force a bleed but do not fix the underlying issue. Ayurveda views PCOS as a complex interplay of three factors:
                            </p>
                            <ul className="list-none space-y-4 pl-0">
                                <li className="flex items-start">
                                    <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-1 rounded mr-3 text-sm">Kapha</span>
                                    <span><strong>Excess Kapha:</strong> Causes weight gain, sluggish metabolism, and the formation of cysts (which are essentially condensed mucus/fluid).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-1 rounded mr-3 text-sm">Vata</span>
                                    <span><strong>Aggravated Vata:</strong> Causes irregular periods and pain. Vata is responsible for movement; when blocked, the ovum is not released.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-1 rounded mr-3 text-sm">Meda</span>
                                    <span><strong>Meda Dhatu (Adipose Tissue):</strong> Poor metabolism leads to insulin resistance, which Ayurveda describes as 'Medovriddhi' (excess fat tissue) blocking the channels.</span>
                                </li>
                            </ul>
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                                <p className="font-medium text-red-900"><strong>The Goal:</strong> To clear the blockage (Srotoshodhana), burn the excess Kapha/Fat (Lekhana), and regulate Vata flow (Anulomana).</p>
                            </div>
                        </div>
                    </section>

                    <div className="mb-20">
                        <ExpertNote
                            title="The Pill Trap"
                            content="Taking contraceptive pills to regulate periods in PCOS is like painting over a crack in the wall. It hides the problem but the wall (your metabolism) keeps weakening. You must fix the metabolism first."
                        />
                    </div>

                    {/* Expanded Herbs Section */}
                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Top 5 Ayurvedic Herbs for PCOS</h2>
                        <p className="text-gray-700 mb-6">
                            These are not just supplements; they are medicine. Scientific studies have shown these herbs can mimic insulin, reduce androgens (male hormones), and induce ovulation.
                        </p>

                        <div className="space-y-8">
                            {/* Herb 1 */}
                            <Card className="bg-stone-50 overflow-hidden">
                                <div className="bg-emerald-600 text-white p-3 font-bold">1. Shatavari (Asparagus Racemosus)</div>
                                <CardContent className="p-6">
                                    <p className="mb-4"><strong>The "Queen of Herbs".</strong> Shatavari promotes follicular growth and development. It balances LH/FSH ratios which are often disturbed in PCOS.</p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm bg-white p-4 rounded-lg border">
                                        <div>
                                            <strong className="block text-emerald-700 mb-1">Dosage:</strong>
                                            1 tsp (3-5g) powder daily.
                                        </div>
                                        <div>
                                            <strong className="block text-emerald-700 mb-1">How to take:</strong>
                                            With warm milk or water before bed.
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Herb 2 */}
                            <Card className="bg-stone-50 overflow-hidden">
                                <div className="bg-emerald-600 text-white p-3 font-bold">2. Ashwagandha (Withania Somnifera)</div>
                                <CardContent className="p-6">
                                    <p className="mb-4"><strong>The Stress buster.</strong> High cortisol (stress hormone) leads to high insulin. Ashwagandha lowers cortisol substantially, indirectly helping to control blood sugar and reduce belly fat.</p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm bg-white p-4 rounded-lg border">
                                        <div>
                                            <strong className="block text-emerald-700 mb-1">Dosage:</strong>
                                            500mg extract or 1 tsp powder.
                                        </div>
                                        <div>
                                            <strong className="block text-emerald-700 mb-1">How to take:</strong>
                                            Morning with water (Kapha type) or Milk (Vata type).
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Herb 3 */}
                            <Card className="bg-stone-50 overflow-hidden">
                                <div className="bg-emerald-600 text-white p-3 font-bold">3. Cinnamon (Dalchini)</div>
                                <CardContent className="p-6">
                                    <p className="mb-4"><strong>Natural Metformin.</strong> Studies show cinnamon improves insulin sensitivity and regularizes menstrual cycles.</p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm bg-white p-4 rounded-lg border">
                                        <div>
                                            <strong className="block text-emerald-700 mb-1">Dosage:</strong>
                                            1/2 tsp powder.
                                        </div>
                                        <div>
                                            <strong className="block text-emerald-700 mb-1">How to take:</strong>
                                            Sprinkle on breakfast, or boil in tea.
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Herb 4 & 5 Combined */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border p-4 rounded-xl">
                                    <h4 className="font-bold text-gray-900 mb-2">4. Turmeric (Haldi)</h4>
                                    <p className="text-sm text-gray-600 mb-2">Potent anti-inflammatory. Reduces acne and facial hair caused by inflammation.</p>
                                    <p className="text-xs font-semibold text-emerald-600">Take with Black Pepper.</p>
                                </div>
                                <div className="border p-4 rounded-xl">
                                    <h4 className="font-bold text-gray-900 mb-2">5. Guduchi (Giloy)</h4>
                                    <p className="text-sm text-gray-600 mb-2">Boosts immunity and detoxifies the liver, helping it process excess hormones.</p>
                                    <p className="text-xs font-semibold text-emerald-600">Drink juice empty stomach.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Detailed Diet Chart */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The Ideal PCOS Diet Chart</h2>
                        <p className="text-gray-700 mb-6">
                            Food must be <strong>Warm, Light, and Digestible</strong>. Avoid everything cold, slimy, and heavy (like cheese, yogurt, and ice cream).
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-orange-100 p-3 rounded-full mr-4"><Coffee className="w-5 h-5 text-orange-600" /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Early Morning (7:00 AM)</h4>
                                    <p className="text-gray-700">Warm water + 1 tbsp Methi (Fenugreek) seeds water (soaked overnight). Chewing methi seeds improves insulin response.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-yellow-100 p-3 rounded-full mr-4"><Utensils className="w-5 h-5 text-yellow-600" /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Breakfast (9:00 AM)</h4>
                                    <p className="text-gray-700">Moong Dal Chilla / Besan Chilla with mint chutney. <br /><span className="text-sm text-red-500">❌ Avoid: White Bread, Parathas, Smoothies.</span></p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-full mr-4"><Utensils className="w-5 h-5 text-green-600" /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Lunch (1:00 PM)</h4>
                                    <p className="text-gray-700">Best meal of the day. 1 Multigrain Roti (Barley/Jowar) + 1 bowl Sabzi + 1 bowl Dal. <br /><span className="text-sm text-green-600">✅ Advice: Barley (Jau) helps scrape away fat.</span></p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4"><Moon className="w-5 h-5 text-blue-600" /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Dinner (7:00 PM)</h4>
                                    <p className="text-gray-700">Lightest meal. Vegetable Soup or Khichdi. <br /><span className="text-sm text-red-500">❌ strict Rule: Do not eat after 8 PM.</span></p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Lifestyle */}
                    <section id="lifestyle" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Lifestyle (Vihara) Changes</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-emerald-50 p-6 rounded-xl">
                                <h3 className="font-bold text-emerald-900 mb-3 flex items-center"><Calendar className="w-5 h-5 mr-2" /> Yoga Asanas</h3>
                                <ul className="space-y-2 text-sm text-emerald-800">
                                    <li>• <strong>Surya Namaskar:</strong> 12 rounds daily for metabolism.</li>
                                    <li>• <strong>Butterfly Pose (Baddha Konasana):</strong> Opens pelvic region.</li>
                                    <li>• <strong>Kapalbhati:</strong> Breathing technique to burn abdominal fat.</li>
                                </ul>
                            </div>
                            <div className="bg-amber-50 p-6 rounded-xl">
                                <h3 className="font-bold text-amber-900 mb-3 flex items-center"><AlertCircle className="w-5 h-5 mr-2" /> What to Avoid</h3>
                                <ul className="space-y-2 text-sm text-amber-800">
                                    <li>• <strong>Daytime Sleep (Divaswapna):</strong> Strictly prohibited. It increases Kapha and cysts.</li>
                                    <li>• <strong>Plastics:</strong> Don't drink hot liquids in plastic; they contain endocrine disruptors.</li>
                                    <li>• <strong>Refined Sugar:</strong> The #1 enemy of PCOS.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="mb-20">
                        <SuccessStory
                            name="Priya S."
                            age={24}
                            condition="PCOS & Cystic Acne"
                            result="Periods Regularized, Skin Cleared"
                            quote="I had periods once every 3 months. After 4 months of Kanchanar Guggulu and giving up sugar, my cycle is perfectly 28 days. My skin cleared up as a bonus."
                            duration="4 Months"
                        />
                    </div>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can Ayurveda cure PCOS permanently?</h4>
                                <p className="text-gray-700 text-sm">Yes, unlike hormonal pills which only mask symptoms, Ayurveda aims to treat the root metabolic cause. However, it requires a permanent lifestyle change. If you go back to bad habits, the symptoms will return.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: How long does it take to see results?</h4>
                                <p className="text-gray-700 text-sm">Typically, a 3-month cycle (90 days) is needed to see significant changes in menstruation and weight. Hair growth issues (Hirsutism) may take 6-12 months to reverse.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Is Dairy allowed in PCOS?</h4>
                                <p className="text-gray-700 text-sm">Ayurveda values pure A2 Cow Milk but advises caution for PCOS. Commercial milk often has hormones. If you are intolerant or have high Kapha (congestion/weight), avoid dairy for 4 weeks.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Ready to Reclaim Your Health?</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            You don't have to live with irregular periods and weight gain forever. Let Dr. Arti design a custom plan for your body type.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/pcos"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Personalized PCOS Plan
                            </Link>
                            <Link
                                href="/tools/prakriti-quiz"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-emerald-700 transition-all duration-200 bg-white border-2 border-emerald-600 rounded-lg hover:bg-emerald-50"
                            >
                                Check Your Body Type
                            </Link>
                        </div>
                    </section>
                </div>
                <div className="container mx-auto px-4 max-w-4xl mb-12">
                    <ScientificRefs
                        references={[
                            { text: "Withania somnifera (Ashwagandha) in stress-related female reproductive disorders", url: "https://pubmed.ncbi.nlm.nih.gov/23439798/" },
                            { text: "Effects of Cinnamon on Insulin Resistance in PCOS", url: "https://pubmed.ncbi.nlm.nih.gov/17296187/" },
                            { text: "Curcumin/Turmeric clinical effects in PCOS", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7356885/" }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
