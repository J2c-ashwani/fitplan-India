import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Activity, Droplet, Zap, Check, X, Beaker, Leaf } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "Ayurvedic Liver Detox: Complete Yakrit Care Guide | FitPlan India",
    description: "Natural remedies for Fatty Liver and Jaundice. Learn about Kutki, Bhumi Amla, and the 7-Day Ayurvedic Liver Cleanse diet.",
    keywords: ["Ayurveda for fatty liver", "Liver detox home remedies", "Kutki benefits", "Bhumi amla for liver", "Yakrit roga treatment"],
}

export default function LiverPage() {
    const tocItems = [
        { id: "intro", label: "The Fire Station" },
        { id: "science", label: "Science of Herbs" },
        { id: "cleanse", label: "7-Day Detox" },
        { id: "foods", label: "Liver Superfoods" },
        { id: "faq", label: "FAQs" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <div className="relative bg-[#064e3b] text-white py-24">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 mt-6">
                        Yakrit: The Seat of Fire
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        In Ayurveda, the Liver (Yakrit) is the home of the five <strong>Bhutagnis</strong> (Elemental Fires). It is the hot engine that converts food into blood (Rakta). When it overheats, disease begins.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Are You "Toxic"?</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                The liver handles 500+ functions. When overloaded with alcohol, fried foods, or pharmaceutical drugs, it becomes sluggish. In Ayurveda, this is often a <strong>High Pitta</strong> condition.
                            </p>
                            <div className="mt-6 bg-red-50 p-6 rounded-xl border border-red-100">
                                <h4 className="font-bold text-red-900 mb-2">Signs of a Sluggish Liver:</h4>
                                <ul className="grid md:grid-cols-2 gap-2 text-red-800">
                                    <li>❌ Chronic anger/irritability</li>
                                    <li>❌ Yellowing of eyes/urine</li>
                                    <li>❌ Skin rashes/acne/eczema</li>
                                    <li>❌ Waking up at 1AM-3AM (Liver time)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Science of Herbs */}
                <section id="science" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Clinical Hepatoprotectors</h2>
                    <div className="grid gap-6">
                        <Card className="bg-white border-stone-200 shadow-sm">
                            <CardContent className="p-8 flex gap-6">
                                <div className="hidden md:block p-4 bg-emerald-50 rounded-2xl h-fit">
                                    <Leaf className="w-8 h-8 text-emerald-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#064e3b] mb-2">1. Kutki (Picrorhiza Kurroa)</h3>
                                    <p className="text-gray-700 mb-3"><em>"The Bitter Gold."</em></p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <strong>Scientific Mechanism:</strong> Contains 'Kutkin', a potent iridoid glycoside. Research validates it for lowering bilirubin levels and regenerating liver tissue in viral hepatitis. It is intensely bitter, which pacifies Pitta.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-white border-stone-200 shadow-sm">
                            <CardContent className="p-8 flex gap-6">
                                <div className="hidden md:block p-4 bg-emerald-50 rounded-2xl h-fit">
                                    <Activity className="w-8 h-8 text-emerald-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#064e3b] mb-2">2. Bhumi Amla (Phyllanthus Niruri)</h3>
                                    <p className="text-gray-700 mb-3"><em>"The Stone Breaker."</em></p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <strong>Scientific Mechanism:</strong> Clinically proven to block the DNA polymerase of the Hepatitis B virus. It is the gold standard herb for reversing liver damage and fatty liver.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-white border-stone-200 shadow-sm">
                            <CardContent className="p-8 flex gap-6">
                                <div className="hidden md:block p-4 bg-emerald-50 rounded-2xl h-fit">
                                    <Droplet className="w-8 h-8 text-emerald-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#064e3b] mb-2">3. Aloe Vera (Kumari)</h3>
                                    <p className="text-gray-700 mb-3"><em>"The Cooling Healer."</em></p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        <strong>Scientific Mechanism:</strong> Fresh Aloe gel increases bile production (choleretic effect), helping flush accumulated fat and cholesterol from the liver.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* 7-Day Cleanse */}
                <section id="cleanse" className="mb-20 scroll-mt-24">
                    <div className="bg-[#064e3b] text-white p-8 md:p-12 rounded-3xl">
                        <h2 className="text-3xl font-serif font-bold mb-8">7-Day Liver Reset Plan</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">1</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Morning: The Flush</h4>
                                    <p className="text-emerald-100 text-sm">Drink 1 glass of warm water with <strong>Lemon + 1/2 tsp Turmeric</strong>. Turmeric stimulates bile flow.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">2</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Noon: The Coolant</h4>
                                    <p className="text-emerald-100 text-sm">Eat a bowl of Papaya. The enzyme papain dissolves dead tissue. Add a glass of Sugarcane juice (if not diabetic).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">3</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Evening: The Bitter Pill</h4>
                                    <p className="text-emerald-100 text-sm">Take 1 tsp of <strong>Triphala Powder</strong> or <strong>Kutki</strong> before dinner. Bitter taste is the liver's best friend.</p>
                                </div>
                            </div>
                            <div className="border-t border-emerald-500/30 pt-4 mt-6">
                                <p className="text-center font-bold text-emerald-200">⚠️ STRICTLY AVOID: Alcohol, Oils, Sugar, and Red Meat for 7 days.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Foods */}
                <section id="foods" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Liver Superfoods List</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-lime-50 p-6 rounded-xl border border-lime-100">
                            <h3 className="font-bold text-lime-900 mb-4 text-xl">✅ Pitta Pacifying (Cooling)</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>Bitter Gourd (Karela):</strong> Top liver tonic.</li>
                                <li>• <strong>Amla (Indian Gooseberry):</strong> High Vitamin C antioxidants.</li>
                                <li>• <strong>Beetroot:</strong> Increases enzyme production.</li>
                                <li>• <strong>Cruciferous Veggies:</strong> Broccoli/Cauliflower.</li>
                                <li>• <strong>Ghee:</strong> 1 tsp daily (lubricates without clogging).</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h3 className="font-bold text-red-900 mb-4 text-xl">❌ Pitta Aggravating (Heating)</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Alcohol (The #1 enemy).</li>
                                <li>• Deep fried foods.</li>
                                <li>• Spicy chili peppers.</li>
                                <li>• Excessive salt.</li>
                                <li>• Stale leftovers (increases toxic load).</li>
                            </ul>
                        </div>
                    </div>
                </section>



                <div className="mb-20">
                    <SuccessStory
                        name="Rohan K."
                        age={38}
                        condition="Grade 2 Fatty Liver"
                        result="Reversed to Normal"
                        quote="I drank alcohol every weekend for 10 years. My SGOT/SGPT levels were sky high. I followed Dr. Arti's 3 month Kutki protocol and stopped alcohol. My latest scan shows a perfectly healthy liver."
                        duration="3 Months"
                    />
                </div>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Is Fatty Liver reversible?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Yes. The liver is the only organ that can regenerate itself completely. Grade 1 and 2 Fatty Liver can often be reversed within 3-6 months with strict dietary changes and herbs like Bhumi Amla.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Why is bitterness important?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                The <strong>Bitter (Tikta)</strong> taste is cooling and light. It reduces fat (Kapha) and heat (Pitta). Modern diets lack bitter foods, which leads to liver congestion. Start eating more greens and drinking Neem/Karela juice.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
            <div className="container mx-auto px-4 max-w-4xl mb-12">
                <ScientificRefs
                    references={[
                        { text: "Hepatoprotective potential of Kutki (Picrorhiza kurroa)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3336365/" },
                        { text: "Phyllanthus niruri (Bhumi Amla) in hepatitis B", url: "https://pubmed.ncbi.nlm.nih.gov/3065666/" }
                    ]}
                />
            </div>
        </div >
    )
}
