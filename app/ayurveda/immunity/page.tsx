import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ShieldCheck, Sun, Moon, Battery, Zap, AlertTriangle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Immunity Booster: Build Ojas Naturally | FitPlan India",
    description: "Ayurveda's secret to immunity is Ojas. comprehensive guide to Chyawanprash, Golden Milk (Turmeric), and lifestyle habits that build natural resistance to disease.",
    keywords: ["Ayurveda for immunity", "What is Ojas", "Chyawanprash benefits", "Golden milk recipe", "Natural immunity booster India"],
}

export default function ImmunityPage() {
    const tocItems = [
        { id: "ojas", label: "What is Ojas?" },
        { id: "boosters", label: "Top Boosters" },
        { id: "killers", label: "Immunity Killers" },
        { id: "routine", label: "Morning Ritual" },
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
                        Ojas: The Essence of Immunity
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        Modern medicine fights the germ. Ayurveda strengthens the host. Immunity isn't just a defense system; it's a glowing substance called <strong>Ojas</strong>.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Intro Section */}
                <section id="ojas" className="mb-20">
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">The Purest Essence</h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                <strong>Ojas</strong> (vigor) is the final byproduct of digestion. After food passes through the 7 tissues (plasma, blood, muscle, fat, bone, nerves, reproductive), the finest essence remaining is Ojas.
                            </p>
                            <p className="mt-4">
                                It takes <strong>30 days</strong> for a meal to turn into Ojas. This honey-like substance resides in the heart and circulates through the body, giving you skin glow, strength, and immunity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Boosters Section */}
                <section id="boosters" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">The "Rasayanas" (Rejuvenators)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="bg-amber-50 border-amber-100">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-amber-900 mb-2">1. Chyawanprash</h3>
                                <p className="text-gray-700 text-sm mb-3">The original bio-hack. Formulated by Rishi Chyawana.</p>
                                <p className="text-sm text-gray-600">
                                    <strong>Science:</strong> Packed with Amla (50x Vitamin C of oranges). Increases Natural Killer (NK) cell activity and macrophage activation.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-yellow-50 border-yellow-100">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-yellow-900 mb-2">2. Golden Milk (Haldi Doodh)</h3>
                                <p className="text-gray-700 text-sm mb-3">Turmeric + Black Pepper + Milk + Ghee.</p>
                                <p className="text-sm text-gray-600">
                                    <strong>Science:</strong> Curcumin is anti-inflammatory. Pepper increases absorption by 2000%. Ghee delivers it to cells (lipid carrier).
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-green-50 border-green-100">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-green-900 mb-2">3. Giloy (Guduchi)</h3>
                                <p className="text-gray-700 text-sm mb-3">"Amrita" or the Root of Immortality.</p>
                                <p className="text-sm text-gray-600">
                                    <strong>Science:</strong> A powerful immunomodulator. Excellent for chronic fevers, low platelets (dengue), and autoimmune conditions.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-stone-50 border-stone-200">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Ashwagandha</h3>
                                <p className="text-gray-700 text-sm mb-3">"Smell of a Horse". Gives stamina.</p>
                                <p className="text-sm text-gray-600">
                                    <strong>Science:</strong> Reduces cortisol (stress hormone). High stress suppresses the immune system; Ashwagandha restores it.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Killers Section */}
                <section id="killers" className="mb-20 scroll-mt-24">
                    <div className="bg-red-50/50 p-8 md:p-12 rounded-3xl border border-red-100">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-8 h-8 text-red-600" />
                            <h2 className="text-3xl font-serif font-bold text-red-900">What Destroys Ojas?</h2>
                        </div>
                        <p className="text-gray-700 mb-6">
                            You can take all the herbs in the world, but if you do these things, your immunity bucket will keep leaking:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4">
                            <li className="flex gap-2 items-start bg-white p-4 rounded-lg shadow-sm">
                                <span className="text-red-500 font-bold">1.</span>
                                <div>
                                    <strong className="block text-gray-900">Excessive Sex</strong>
                                    <span className="text-sm text-gray-600">Ayurveda warns that loss of reproductive tissue (Shukra) directly depletes Ojas.</span>
                                </div>
                            </li>
                            <li className="flex gap-2 items-start bg-white p-4 rounded-lg shadow-sm">
                                <span className="text-red-500 font-bold">2.</span>
                                <div>
                                    <strong className="block text-gray-900">Stress & Grief</strong>
                                    <span className="text-sm text-gray-600">Constant worry "dries up" the nourishing juices of the body.</span>
                                </div>
                            </li>
                            <li className="flex gap-2 items-start bg-white p-4 rounded-lg shadow-sm">
                                <span className="text-red-500 font-bold">3.</span>
                                <div>
                                    <strong className="block text-gray-900">Processed Sugar</strong>
                                    <span className="text-sm text-gray-600">Sugar paralyzes white blood cells for hours after consumption.</span>
                                </div>
                            </li>
                            <li className="flex gap-2 items-start bg-white p-4 rounded-lg shadow-sm">
                                <span className="text-red-500 font-bold">4.</span>
                                <div>
                                    <strong className="block text-gray-900">Late Nights</strong>
                                    <span className="text-sm text-gray-600">Body repair happens between 10 PM - 2 AM. Missing this window weakens you.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Routine Section */}
                <section id="routine" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">The Immunity Morning Routine</h2>
                    <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
                        <ol className="relative border-l border-sky-200 ml-4 space-y-8">
                            <li className="mb-4 ml-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-100 rounded-full -left-4 ring-4 ring-white">
                                    <Sun className="w-4 h-4 text-sky-600" />
                                </span>
                                <h3 className="font-bold text-lg text-gray-900">1. Wake Up at Brahma Muhurta</h3>
                                <p className="text-sm text-gray-600">Approx 45 mins before sunrise. the air is rich in oxygen and high in Prana.</p>
                            </li>
                            <li className="mb-4 ml-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-100 rounded-full -left-4 ring-4 ring-white">
                                    <Droplet className="w-4 h-4 text-sky-600" />
                                </span>
                                <h3 className="font-bold text-lg text-gray-900">2. Nasya (Nasal Drops)</h3>
                                <p className="text-sm text-gray-600">Put 2 drops of Anu Taila or Sesame oil in each nostril. This creates a barrier against viruses entering the nose.</p>
                            </li>
                            <li className="mb-4 ml-6">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-100 rounded-full -left-4 ring-4 ring-white">
                                    <Zap className="w-4 h-4 text-sky-600" />
                                </span>
                                <h3 className="font-bold text-lg text-gray-900">3. CCF Tea</h3>
                                <p className="text-sm text-gray-600">Drink Cumin-Coriander-Fennel tea. It gently ignites Agni without overheating, ensuring breakfast is digested well.</p>
                            </li>
                        </ol>
                    </div>
                </section>

            </div>
        </div>
    )
}
