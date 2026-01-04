import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Baby, Brain, Shield, Utensils, AlertCircle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "Ayurveda for Kids: Natural Immunity & Brain Power | Bala Roga",
    description: "Raise strong, smart kids with Ayurveda. Guide to Swarnaprashana (Gold drops), memory boosting herbs like Brahmi, and natural remedies for cough & cold.",
    keywords: ["Ayurveda for children", "Swarnaprashana benefits", "Natural immunity for kids", "Brahmi for memory", "Home remedies for child cold"],
}

export default function KidsPage() {
    const tocItems = [
        { id: "intro", label: "Kapha Stage" },
        { id: "immunity", label: "Swarnaprashana" },
        { id: "brain", label: "Brain Power" },
        { id: "diet", label: "Diet Rules" },
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
                        Kaumarbhritya: Ayurveda for Kids
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Children are in the <strong>Kapha</strong> stage of life—growing, building tissue, but also prone to mucus, colds, and congestion. The goal is to build immunity without suppressing their natural growth.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Introduction */}
                <section id="intro" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Why Kids Get Sick Often</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                Since childhood is dominated by the Earth & Water elements (Kapha), kids naturally have more mucus. This is necessary for lubrication and growth!
                            </p>
                            <p className="mt-4">
                                However, excessive sugar and dairy turn this healthy Kapha into <strong>toxic mucus</strong>, leading to recurrent ear infections, tonsillitis, and congested chests.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="mb-20">
                    <ExpertNote
                        title="Don't Suppress the Fever"
                        content="Parents panic at the first sign of fever. In Ayurveda, fever (Jwara) is the body's way of cooking (digesting) toxins. Managing it with light food and rest builds lifelong immunity. Suppressing it with heavy meds every time creates chronic weakness."
                    />
                </div>

                {/* Immunity/Swarnaprashana Section */}
                <section id="immunity" className="mb-20 scroll-mt-24">
                    <div className="bg-yellow-50 rounded-3xl p-8 md:p-12 border border-yellow-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-4 bg-yellow-100 rounded-2xl">
                                <Shield className="w-10 h-10 text-yellow-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-gray-900">Swarnaprashana: The Gold Shield</h2>
                        </div>
                        <p className="text-gray-700 mb-8 text-lg">
                            Described in the <em>Kashyapa Samhita</em>, Swarnaprashana (Gold Licking) is one of the 16 essential rituals (Samskaras) for children.
                        </p>

                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-yellow-900 text-lg mb-3">What is it?</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                It is a mixture of <strong>Gold Ash (Suvarna Bhasma)</strong>, Vacha, Brahmi, Honey, and Ghee. It is traditionally given to children on the day of Pushya Nakshatra (every 27 days).
                            </p>
                            <h4 className="font-bold text-gray-900 text-sm mb-2">Proven Benefits:</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex gap-2">✨ Increases Immunity (Vyadhi Kshamatva).</li>
                                <li className="flex gap-2">✨ Enhances Memory (Medha Vardhana).</li>
                                <li className="flex gap-2">✨ Improves Digestion and Skin Tone.</li>
                            </ul>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-yellow-800">
                            <AlertCircle className="w-4 h-4" /> <strong>Note:</strong> Always administer under the guidance of an Ayurvedic doctor. Do not use raw gold.
                        </div>
                    </div>
                </section>

                {/* Brain Power Section */}
                <section id="brain" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Boosting Memory & Focus</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-indigo-100 bg-indigo-50">
                            <CardContent className="p-6">
                                <h3 className="flex items-center gap-2 font-bold text-indigo-900 mb-4 text-lg">
                                    <Brain className="w-5 h-5" /> Brahmi (Bacopa)
                                </h3>
                                <p className="text-gray-700 text-sm mb-3">The ultimate brain tonic for students.</p>
                                <p className="text-sm text-gray-600">
                                    Available as Ghrita (Ghee) or Syrup. It improves retention recall and reduces exam anxiety.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-indigo-100 bg-indigo-50">
                            <CardContent className="p-6">
                                <h3 className="flex items-center gap-2 font-bold text-indigo-900 mb-4 text-lg">
                                    <Brain className="w-5 h-5" /> Shankhpushpi
                                </h3>
                                <p className="text-gray-700 text-sm mb-3">The flower that looks like a conch.</p>
                                <p className="text-sm text-gray-600">
                                    Excellent for improving focus and concentration (ADD/ADHD support). It is calming and helps with sleep.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Diet Section */}
                <section id="diet" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Top 3 Diet Rules for Kids</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="bg-green-100 p-3 rounded-full shrink-0">
                                <Utensils className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">1. Limit Cold Dairy</h3>
                                <p className="text-gray-600">Cold cheese, yogurt, and ice cream clog the channels. Always give warm milk with a pinch of turmeric or ginger.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="bg-green-100 p-3 rounded-full shrink-0">
                                <Utensils className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">2. Breakfast is Mandatory</h3>
                                <p className="text-gray-600">Kids have high metabolic needs. A warm, cooked breakfast (Oats, Poha, Porridge) provides sustained energy for learning.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="bg-green-100 p-3 rounded-full shrink-0">
                                <Utensils className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">3. Sweet, but Healthy</h3>
                                <p className="text-gray-600">Kids crave sweet taste because they are growing. Replace white sugar with Jaggery (Iron-rich) or Honey (Kapha-reducing).</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mb-20">
                    <SuccessStory
                        name="Aarav's Mom"
                        age={7}
                        condition="Recurrent Cough & Cold"
                        result="Zero Antibiotics in 6 Months"
                        quote="Aarav was on nebulizers every month in winter. Ayurvedic doctor suggested stopping cold milk and yogurt, and starting Swarnaprashana. His immunity has transformed completely."
                        duration="6 Months"
                    />
                </div>

                {/* FAQ Section */}
                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Is Turmeric Milk safe for daily use?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Yes! <strong>Haldi Doodh</strong> is the best immunity booster. Ensure you use just a pinch (1/4 tsp) for kids, and always add a dash of black pepper for absorption.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">What to do for worms?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Worms (Krimi) are common due to weak digestion and sweets. Use <strong>Vidanga</strong> herbs or simply give 1 tsp of fresh Bitter Gourd juice or Pumpkin seeds on an empty stomach.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
            <div className="container mx-auto px-4 max-w-4xl mb-12">
                <ScientificRefs
                    references={[
                        { text: "Immunomodulatory effects of Swarnaprashan", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3960790/" },
                        { text: "Bacopa monnieri (Brahmi) in cognitive deficit", url: "https://pubmed.ncbi.nlm.nih.gov/18611150/" }
                    ]}
                />
            </div>
        </div>
    )
}
