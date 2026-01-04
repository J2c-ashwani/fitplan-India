import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sparkles, Droplet, Clock, ShieldCheck, Microscope, AlertTriangle, Check } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "Oil Pulling (Gandusha): The Ultimate Guide | Ayurvedic Detox",
    description: "Everything you need to know about Oil Pulling. Scientific benefits for teeth whitening, bad breath, and gut health. Step-by-step 20-minute protocol.",
    keywords: ["Oil pulling science", "Coconut oil pulling benefits", "Ayurvedic oral detox", "How to do oil pulling correctly", "Oil pulling side effects"],
}

export default function OilPullingPage() {
    const tocItems = [
        { id: "intro", label: "What is Oil Pulling?" },
        { id: "science", label: "The Science" },
        { id: "protocol", label: "Step-by-Step" },
        { id: "oils", label: "Best Oils" },
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
                        The Master Detox: Oil Pulling
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Known in Sanskrit as <strong>Gandusha</strong> or <strong>Kavala</strong>, this 3,000-year-old practice acts as a magnet for toxins, purifying not just your mouth, but your entire system.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">More Than Just a Trend</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                While Oil Pulling has become a modern wellness trend, it is described in the ancient Ayurvedic text <em>Charaka Samhita</em> as a daily ritual for strengthening teeth, improving voice, and enhancing taste.
                            </p>
                            <p className="mt-4">
                                The concept is simple: <strong>"Like attracts like."</strong> Most microorganisms in the mouth consist of a single cell covered in a lipid (fatty) membrane. When you swish oil, the fats attract each other, pulling the bacteria out of hiding spots that a toothbrush can't reach.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="mb-20">
                    <ExpertNote
                        title="The Morning Magnet"
                        content="Your mouth is the gateway to your gut. Overnight, bacteria multiply and 'toxins' (Ama) surface on the tongue. If you drink water immediately, you push them back in. Oil pulling traps these toxins in the fat lipid layer so you can spit them out forever."
                    />
                </div>

                {/* Science Section */}
                <section id="science" className="mb-20 scroll-mt-24">
                    <div className="bg-indigo-50/50 p-8 md:p-12 rounded-3xl border border-indigo-100">
                        <div className="flex items-center gap-3 mb-6">
                            <Microscope className="w-8 h-8 text-indigo-600" />
                            <h2 className="text-3xl font-serif font-bold text-indigo-900">What Does Science Say?</h2>
                        </div>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Critics often call it pseudoscience, but clinical trials tell a different story. Here are proven benefits backed by research:
                        </p>
                        <div className="grid gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-indigo-900 text-lg mb-2">1. Reduces Streptococcus Mutans</h3>
                                <p className="text-gray-600">A 2008 study found that swishing with sesame oil for 2 weeks significantly reduced the count of <em>S. mutans</em>, the primary bacteria responsible for tooth decay.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-indigo-900 text-lg mb-2">2. Combats Gingivitis</h3>
                                <p className="text-gray-600">Research shows oil pulling reduces plaque-induced gingivitis. The saponification process (oil turning soapy) creates a cleansing environment.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-indigo-900 text-lg mb-2">3. Detoxifies the Body</h3>
                                <p className="text-gray-600">By reducing final oral bacterial load, you swallow fewer toxins daily, relieving stress on the kidney and liver.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Protocol Section */}
                <section id="protocol" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">The Perfect 20-Minute Protocol</h2>
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-emerald-100 hidden md:block"></div>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="relative md:pl-24">
                                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-[#064e3b] text-white rounded-full items-center justify-center font-bold text-2xl shadow-lg">1</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Wake Up & Stomach Check</h3>
                                <p className="text-gray-600 leading-relaxed bg-stone-50 p-6 rounded-xl border border-stone-100">
                                    This <strong>MUST</strong> be done first thing in the morning on an empty stomach. Before water, coffee, or brushing. Your mouth contains the highest bacteria load right after waking up.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative md:pl-24">
                                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-[#064e3b] text-white rounded-full items-center justify-center font-bold text-2xl shadow-lg">2</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Spoonful</h3>
                                <p className="text-gray-600 leading-relaxed bg-stone-50 p-6 rounded-xl border border-stone-100">
                                    Take <strong>1 tablespoon</strong> of oil. Put it in your mouth. <span className="text-red-600 font-bold">DO NOT SWALLOW.</span> Just hold it. It will feel thick at first.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative md:pl-24">
                                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-[#064e3b] text-white rounded-full items-center justify-center font-bold text-2xl shadow-lg">3</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Swish & Multitask (15-20 Mins)</h3>
                                <p className="text-gray-600 leading-relaxed bg-stone-50 p-6 rounded-xl border border-stone-100">
                                    Gently push and pull the oil through your teeth. Don't gargle. Read a book, make your bed, or shower while you do this.
                                    <br /><br />
                                    <strong>The Sign:</strong> After 15 mins, the oil will turn thin, watery, and milky white. This means it is full of bacteria.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="relative md:pl-24">
                                <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-[#064e3b] text-white rounded-full items-center justify-center font-bold text-2xl shadow-lg">4</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Spit & Rinse</h3>
                                <p className="text-gray-600 leading-relaxed bg-stone-50 p-6 rounded-xl border border-stone-100">
                                    Spit into the trash can (oil clogs sink pipes!). Rinse your mouth with warm saline water. Finally, brush your teeth as normal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mb-20">
                    <SuccessStory
                        name="Anita D."
                        age={34}
                        condition="Bleeding Gums & Bad Breath"
                        result="Healthy Pink Gums"
                        quote="I tried every mouthwash, but the bad breath always came back. My dentist recommended oil pulling. It was gross for the first 3 days, but by Day 10, my gums stopped bleeding and I woke up with a fresh mouth."
                        duration="2 Weeks"
                    />
                </div>

                {/* Oils Section */}
                <section id="oils" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Choosing Your Oil</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-orange-50 border-orange-100">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">Sesame Oil (Traditional)</h3>
                                <p className="text-gray-700 mb-4">The "King of Oils" in Ayurveda.</p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Warming nature (Good for Vata)</li>
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> High Calcium (Strengthens teeth)</li>
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Best for receding gums</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-blue-50 border-blue-100">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">Coconut Oil (Modern)</h3>
                                <p className="text-gray-700 mb-4">The popular, tasty choice.</p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Cooling nature (Good for Pitta)</li>
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Lauric Acid (Strong antimicrobial)</li>
                                    <li className="flex gap-2"><Check className="w-4 h-4 text-green-600" /> Better for whitening</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can I swallow the oil?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                <strong>Absolutely NOT.</strong> By the end of 20 minutes, that oil is a toxic soup of bacteria and plaque. Swallowing it re-ingests the toxins you just worked hard to pull out.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can I do it if I have fillings?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Yes, it is generally safe for metallic or composite fillings. However, the rigorous swishing <em>can</em> rarely loosen loose crowns. Be gentle if you have extensive dental work.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">How long until I see results?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                <ul className="list-disc ml-5 mt-2 space-y-1">
                                    <li><strong>1 Week:</strong> Fresher breath and cleaner feeling teeth.</li>
                                    <li><strong>1 Month:</strong> Reduced gum bleeding and visible whitening.</li>
                                    <li><strong>3 Months:</strong> Improved sinus health and clearer skin.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
            <div className="container mx-auto px-4 max-w-4xl mb-12">
                <ScientificRefs
                    references={[
                        { text: "Effect of oil pulling on S. mutans count", url: "https://pubmed.ncbi.nlm.nih.gov/18408265/" },
                        { text: "Oil pulling for maintaining oral hygiene - A review", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5198813/" }
                    ]}
                />
            </div>
        </div>
    )
}
