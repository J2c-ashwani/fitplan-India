import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Bone, ThermometerSun, Activity } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "Ayurvedic Treatment for Joint Pain & Arthritis (Sandhivata) | FitPlan India",
    description: "Relieve knee pain, back pain, and arthritis naturally. Discover Mahanarayan Oil, Golden Milk, and dietary changes to lubricate dry joints.",
    keywords: ["Ayurveda for arthritis", "Joint pain home remedies", "Mahanarayan oil benefits", "foods for strong joints", "natural cure for knee pain"],
}

export default function JointPainPage() {
    const tocItems = [
        { id: "intro", label: "Sandhivata vs Amavata" },
        { id: "remedies", label: "Top 4 Pain Relief Remedies" },
        { id: "massage", label: "The Oil Solution" },
        { id: "diet", label: "Joint Health Diet" },
        { id: "exercise", label: "Movement as Medicine" },
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
                        Banish Joint Pain: Ayurvedic Solutions for Arthritis
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Pain is the cry of a starving nerve. In Ayurveda, joint pain is rarely just "old age"; it is either <strong>Vata</strong> (Dryness/Air) drying out the lubrication or <strong>Ama</strong> (Toxins) clogging the joint space.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Bone className="w-6 h-6 text-emerald-600 mr-2" />
                            Know Your Pain Type
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-900 mb-2">1. Sandhivata (Osteoarthritis)</h3>
                                <p className="text-sm text-gray-700"><strong>Cause:</strong> High Vata (Air) dries up the Shleshaka Kapha (Synovial Fluid).</p>
                                <p className="text-sm text-gray-700 mt-2"><strong>Symptoms:</strong> Cracking sound (Crepitus), Dry pain, worse in cold weather, improved by Oil/Heat.</p>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-lg font-bold text-red-900 mb-2">2. Amavata (Rheumatoid Arthritis)</h3>
                                <p className="text-sm text-gray-700"><strong>Cause:</strong> Ama (Toxins) accumulation in joints causing inflammation.</p>
                                <p className="text-sm text-gray-700 mt-2"><strong>Symptoms:</strong> Swelling, Redness, Heavy pain, Morning stiffness, worse with Oil (needs Dry Heat).</p>
                            </div>
                        </div>
                        <div className="mt-4 text-center text-sm font-semibold text-gray-500 italic">
                            *Identifying this difference is crucial because putting oil on Amavata will make it WORSE.
                        </div>
                    </section>

                    <div className="mb-20">
                        <ExpertNote
                            title="Oil vs. Heat"
                            content="The biggest mistake patients make is applying oil on a swollen, red joint (Amavata). This traps the heat and worsens pain. Use Dry Heat (Sand bag) for swelling, and Oil only for dry, cracking joints."
                        />
                    </div>

                    {/* Remedies */}
                    <section id="remedies" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Top 4 Kitchen Remedies</h2>

                        <div className="space-y-6">
                            {/* Remedy 1 */}
                            <Card className="bg-yellow-50 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-yellow-900 mb-2">1. Golden Milk (Haldi Doodh)</h3>
                                    <p className="text-gray-700 mb-2">Turmeric contains Curcumin, a potent anti-inflammatory. Cow's milk provides Calcium.</p>
                                    <div className="bg-white p-3 rounded text-sm text-yellow-800">
                                        <strong>Note:</strong> Always add a pinch of <strong>Black Pepper</strong>. It increases Curcumin absorption by 2000%.
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Remedy 2 */}
                            <Card className="bg-amber-50 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-amber-900 mb-2">2. Dry Ginger Powder (Sonth)</h3>
                                    <p className="text-gray-700 mb-2">Better than fresh ginger for joint pain. It digests the Ama (toxins) causing the pain.</p>
                                    <div className="bg-white p-3 rounded text-sm text-amber-800">
                                        <strong>Usage:</strong> Mix 1 tsp Sonth with warm water or ghee and take before meals.
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Remedy 3 */}
                            <Card className="bg-emerald-50 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">3. Fenugreek (Methi)</h3>
                                    <p className="text-gray-700 mb-2">Methi is "Ushna" (Hot) in potency. It is excellent for Vata-Kapha pain, especially back pain and knee pain.</p>
                                </CardContent>
                            </Card>

                            {/* Remedy 4 */}
                            <Card className="bg-stone-100 border-none">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">4. Castor Oil (Eranda Taila)</h3>
                                    <p className="text-gray-700 mb-2">The only oil that targets Vata at its root (the colon). It acts as a mild laxative to flush out Vata and toxins.</p>
                                    <div className="bg-white p-3 rounded text-sm text-stone-800">
                                        <strong>Detox:</strong> 1 tsp in warm milk at night (Consult doctor first).
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* External Therapy */}
                    <section id="massage" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">External Therapies</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-emerald-100 p-2 rounded-full mr-4 mt-1">1</div>
                                <div>
                                    <h4 className="font-bold text-lg">Mahanarayan Oil Massage</h4>
                                    <p className="text-gray-700">A classical formulation of 50+ herbs. For Osteoarthritis, warm this oil and massage knees/joints for 15 mins daily to restore lubrication. <br /><span className="text-xs text-red-500">(Not for Rheumatoid Arthritis)</span></p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-emerald-100 p-2 rounded-full mr-4 mt-1">2</div>
                                <div>
                                    <h4 className="font-bold text-lg">Potli Massage (Bolus)</h4>
                                    <p className="text-gray-700">Make a cloth bag (potli) filled with hot sand or rock salt. Press it on painful areas. This "Dry Heat" is excellent for Rheumatoid Arthritis swelling.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Diet Section */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Diet for Strong Joints</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" /> <strong>Ghee:</strong> The ultimate lubricant for dry Vata joints.</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" /> <strong>Sesame Seeds:</strong> Natural calcium. Eat 'Til-Laddu'.</li>
                            <li className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" /> <strong>Garlic:</strong> Anti-inflammatory sulfur compounds.</li>
                            <li className="flex items-center"><Activity className="w-5 h-5 text-red-500 mr-2" /> <strong>AVOID:</strong> Kidney Beans (Rajma), Chickpeas (Chole) if you have gas/bloating. Avoid sour curd.</li>
                        </ul>
                    </section>

                    <div className="mb-20">
                        <SuccessStory
                            name="Mrs. Iyer"
                            age={65}
                            condition="Knee Osteoarthritis"
                            result="Climbing Stairs Pain-Free"
                            quote="I was scheduled for knee replacement. My Vaidya suggested 'Janu Basti' (Oil pooling) and castor oil detox. The dryness is gone, and so is the pain."
                            duration="4 Months"
                        />
                    </div>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Is walking good for knee pain?</h4>
                                <p className="text-gray-700 text-sm">Excessive walking can aggravate Vata and wear out the joint further if there is no lubrication. Gentle walking is fine, but avoid running. Cycling or Swimming is better as it is low-impact.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Does cracking knuckles cause arthritis?</h4>
                                <p className="text-gray-700 text-sm">No, that sound is just gas bubbles popping. However, in Ayurveda, frequent cracking indicates high Vata (dryness) in the body, which is a pre-cursor to joint issues.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Why does my pain increase in winter?</h4>
                                <p className="text-gray-700 text-sm">Cold increases Vata (which is cold by nature) and Kapha (stiffness). You must keep joints warm and eat warming foods (sesame, jaggery) in winter.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Keep Moving, Keep Living</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Motion is lotion. Combined with the right oiling and diet, you can maintain flexibility well into your 80s.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/senior-citizens"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Anti-Inflammatory Diet
                            </Link>
                        </div>
                    </section>

                </div>
                <div className="container mx-auto px-4 max-w-4xl mb-12">
                    <ScientificRefs
                        references={[
                            { text: "Efficacy of Curcumin in osteoarthritis", url: "https://pubmed.ncbi.nlm.nih.gov/24672232/" },
                            { text: "Mahanarayan Taila in Sandhigata Vata", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3665196/" }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
