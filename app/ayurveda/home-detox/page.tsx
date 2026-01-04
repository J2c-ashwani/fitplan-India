import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Trash2, Calendar, Coffee, AlertTriangle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "Weekend Ayurvedic Detox Plan (Home Cleanse) | FitPlan India",
    description: "Reset your digestion in 48 hours. A simple Kitchari Cleanse and Castor Oil detox (Virechana) to flush toxins and boost energy.",
    keywords: ["Ayurvedic home detox", "Kitchari cleanse recipe", "weekend detox plan", "castor oil cleanse method", "how to remove ama", "gut reset diet"],
}

export default function HomeDetoxPage() {
    const tocItems = [
        { id: "why", label: "Why Detox?" },
        { id: "signs", label: "Signs of Ama" },
        { id: "plan", label: "The 48-Hour Plan" },
        { id: "kitchari", label: "Kitchari Recipe" },
        { id: "purge", label: "The Purge (Virechana)" },
        { id: "faqs", label: "FAQs" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#0d9488] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        The 48-Hour Weekend Reset
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
                        You service your car every 6 months. When was the last time you serviced your body? Flush out accumulated <strong>Ama</strong> (Toxins) with this gentle Ayurvedic Home Cleanse.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Why Detox */}
                    <section id="why" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Trash2 className="w-6 h-6 text-teal-600 mr-2" />
                            Understanding Ama
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                <strong>Ama</strong> is sticky, undigested toxic sludge that clogs your channels (Srotas). It prevents nutrients from reaching cells and prevents waste from leaving.
                                <br />
                                We need to:
                            </p>
                            <ol className="list-decimal pl-5 mt-2">
                                <li><strong>Loosen</strong> the Ama (using Ghee).</li>
                                <li><strong>Bring it</strong> to the stomach (using Heat).</li>
                                <li><strong>Flush it</strong> out (using Castor Oil).</li>
                            </ol>
                        </div>
                    </section>

                    {/* Signs */}
                    <section id="signs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#0d9488] mb-6 border-b pb-2">Do you need a detox? Check list.</h2>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <ul className="text-gray-700 space-y-3">
                                <li className="flex items-center"><AlertTriangle className="w-5 h-5 text-red-500 mr-3" /> Thick white coating on tongue morning.</li>
                                <li className="flex items-center"><AlertTriangle className="w-5 h-5 text-red-500 mr-3" /> Waking up tired even after 8 hours sleep.</li>
                                <li className="flex items-center"><AlertTriangle className="w-5 h-5 text-red-500 mr-3" /> Body odour or bad breath.</li>
                                <li className="flex items-center"><AlertTriangle className="w-5 h-5 text-red-500 mr-3" /> Constant bloating.</li>
                            </ul>
                            <p className="mt-4 text-sm font-bold text-red-800">If you have 3+ signs, proceed below.</p>
                        </div>
                    </section>

                    {/* Plan */}
                    <section id="plan" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#0d9488] mb-6 border-b pb-2">The Weekend Plan</h2>

                        <div className="space-y-8">
                            <div className="border border-teal-200 rounded-lg overflow-hidden">
                                <div className="bg-teal-50 p-4 font-bold text-teal-900 border-b border-teal-200">Saturday: Preparation (Oleation)</div>
                                <div className="p-6 space-y-4">
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm uppercase">Morning</h4>
                                        <p className="text-sm text-gray-700">Drink 2 tbsp melted <strong>Pure Ghee</strong> on empty stomach with hot water. This lubricates the channels ("Snehana").</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm uppercase">Meals</h4>
                                        <p className="text-sm text-gray-700">Eat ONLY <strong>Kitchari</strong> (Rice + Moong Dal) for Breakfast, Lunch, and Dinner. No veggies, no snacking.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm uppercase">Night</h4>
                                        <p className="text-sm text-gray-700">Take 1 tsp Triphala with warm water.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-teal-200 rounded-lg overflow-hidden">
                                <div className="bg-teal-50 p-4 font-bold text-teal-900 border-b border-teal-200">Sunday: The Purge (Virechana)</div>
                                <div className="p-6 space-y-4">
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm uppercase">6:00 AM</h4>
                                        <p className="text-sm text-gray-700">Drink <strong>2 tbsp Castor Oil</strong> mixed in half cup warm ginger tea / orange juice. (Stay near a toilet!).</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm uppercase">Morning</h4>
                                        <p className="text-sm text-gray-700">You will pass stool 3-5 times. The first will be solid, then liquid. Sip hot water only.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm uppercase">Lunch</h4>
                                        <p className="text-sm text-gray-700">Once appetite returns strongly, eat very thin Rice Gruel (Kanji).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Kitchari */}
                    <section id="kitchari" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#0d9488] mb-6 border-b pb-2">Best Detox Recipe: Kitchari</h2>
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                            <p className="text-gray-700 mb-4">
                                Why Kitchari? It is perfectly balanced protein + carb that is pre-digested by cooking, giving your gut a complete rest.
                            </p>
                            <div className="font-mono text-sm bg-white p-4 rounded border text-gray-600">
                                Ingredients:<br />
                                - 1/2 cup Basmati Rice<br />
                                - 1/2 cup Yellow Moong Dal (Soaked)<br />
                                - 1 tsp Ghee<br />
                                - 1 tsp Cumin, Mustard, Turmeric<br />
                                - 4 cups Water (Make it soupy)<br /><br />
                                Method: Sauté spices in ghee. Add rice/dal. Add water. Pressure cook 3 whistles.
                            </div>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#0d9488] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Will I feel weak?</h4>
                                <p className="text-gray-700 text-sm">Sunday morning you might feel a bit light-headed as toxins leave. Rest is mandatory. By Sunday evening, you will feel lighter and clearer than ever.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Who should NOT do this?</h4>
                                <p className="text-gray-700 text-sm">Pregnant/Breastfeeding women, children, weak elderly people, or anyone with active diarrhea.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can I drink coffee?</h4>
                                <p className="text-gray-700 text-sm">No caffeine during detox. It taxes the liver which we are trying to clean. Herbal teas only.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <div className="mb-12">
                        <SuccessStory
                            name="Rahul T."
                            age={45}
                            condition="Brain Fog & Lethargy"
                            result="Mental Clarity Restored"
                            quote="I was skeptical about the Castor Oil purge. But on Sunday evening, I felt like a light was switched on in my brain. The 2 days of Kitchari gave my gut the break it desperately needed."
                            duration="48 Hours"
                        />
                    </div>

                    <section id="conclusion" className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 text-center border border-teal-200">
                        <h3 className="text-2xl font-bold text-teal-900 mb-4">A Fresh Start</h3>
                        <p className="text-teal-800 mb-8 max-w-2xl mx-auto">
                            Your body heals itself; you just need to get out of the way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/tools/prakriti-quiz"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-teal-600 rounded-lg hover:bg-teal-700 shadow-md"
                            >
                                Know Your Body Type Before Detox
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
            <div className="container mx-auto px-4 max-w-4xl mb-12">
                <ScientificRefs
                    references={[
                        { text: "Concept of Ama in Ayurveda", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3336336/" },
                        { text: "Efficacy of Virechana Karma (Therapeutic Purgation)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3215320/" }
                    ]}
                />
            </div>
        </div>
    )
}
