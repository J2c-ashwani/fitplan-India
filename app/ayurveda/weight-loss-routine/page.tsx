import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Leaf, Sun, Moon, Clock, Utensils } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "The Dinacharya: Daily Ayurvedic Routine for Weight Loss | FitPlan India",
    description: "Lose weight naturally by following the Ayurvedic Dinacharya (Daily Routine). Learn when to wake up, what to drink, and how to eat for maximum metabolism.",
    keywords: ["Ayurvedic weight loss diet", "Dinacharya for weight loss", "Kapha body type diet", "drinking warm water benefits", "ayurveda waking time", "circadian rhythm weight loss"],
}

export default function WeightLossRoutinePage() {
    const tocItems = [
        { id: "intro", label: "The Clock of Life" },
        { id: "wakeup", label: "Early Morning (Vata)" },
        { id: "noon", label: "Mid-Day (Pitta)" },
        { id: "evening", label: "Evening (Kapha)" },
        { id: "massage", label: "Dry Massage" },
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
                        The Ayurveda Clock: Aligning with Nature for Effortless Weight Loss
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        You don't need a gym membership; you need a clock. In Ayurveda, <strong>when</strong> you eat is as important as <strong>what</strong> you eat. This daily routine (Dinacharya) aligns your metabolism with the sun.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Introduction */}
                    <section id="intro" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Clock className="w-6 h-6 text-emerald-600 mr-2" />
                            Why Timings Matter?
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                The body works in 4-hour cycles dominated by Vata, Pitta, and Kapha. If you eat a heavy meal during "Kapha Time" (Evening), it turns to fat. If you eat it during "Pitta Time" (Noon), it turns to energy.
                            </p>
                            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 mt-4">
                                <p className="font-bold text-emerald-900">The Golden Rule:</p>
                                <p className="text-emerald-800">"Live like a King in the morning, a Prince at noon, and a Pauper at night."</p>
                            </div>
                        </div>
                    </section>

                    {/* Morning / Vata */}
                    <section id="wakeup" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Morning (6:00 AM - 10:00 AM)</h2>
                        <Card className="mb-6 bg-orange-50 border-none">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-orange-900 mb-3 text-lg flex items-center"><Sun className="w-5 h-5 mr-2" /> Wake Up in Brahma Muhurta</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Wake up <strong>before sunrise (around 5:30 - 6:00 AM)</strong>. This is Vata time—light and energetic. If you sleep past 6 AM into Kapha time, you will wake up feeling heavy, groggy, and lazy, setting the tone for a slow metabolic day.
                                </p>

                                <h3 className="font-bold text-orange-900 mb-3 text-lg flex items-center"><Utensils className="w-5 h-5 mr-2" /> Ushapan (Water Therapy)</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Drink 500ml warm water (preferably from a copper vessel) *before* brushing teeth. This flushes the kidneys and stimulates a bowel movement.
                                    <br /><strong>Add:</strong> 1 tsp Lemon + 1 tsp Honey (ONLY in lukewarm water) to cut fat.
                                </p>

                                <h3 className="font-bold text-orange-900 mb-3 text-lg flex items-center">🧘‍♀️ Exercise</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Exercise implies "Langhana" (Lightness). Do it between 6 AM - 10 AM (Kapha time) to counteract the heaviness of the atmosphere.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Noon / Pitta */}
                    <section id="noon" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Noon (10:00 AM - 2:00 PM)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This is <strong>Pitta Time</strong>. The sun is highest in the sky, and your internal fire (Agni) is at its peak.
                        </p>
                        <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                            <h4 className="font-bold text-yellow-900 text-lg mb-2">The Lunch Rule</h4>
                            <p className="text-gray-700">
                                Eat your <strong>heaviest meal</strong> of the day between 12:00 PM and 1:00 PM. This is the only time your body can digest grains, fats, and proteins efficiently without storing them as fat.
                            </p>
                            <div className="mt-4 flex gap-4">
                                <span className="bg-white px-3 py-1 rounded border text-sm font-semibold">Salad First</span>
                                <span className="bg-white px-3 py-1 rounded border text-sm font-semibold">Then Grains</span>
                                <span className="bg-white px-3 py-1 rounded border text-sm font-semibold">Buttermilk (Chaas) Last</span>
                            </div>
                        </div>
                    </section>

                    {/* Evening / Kapha */}
                    <section id="evening" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Evening (6:00 PM - 10:00 PM)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This is <strong>Kapha Time</strong> again. The sun has set, and digestion slows down drastically.
                        </p>
                        <Card className="mb-6 bg-blue-50 border-none">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center"><Moon className="w-5 h-5 mr-2" /> Dinner before 7:00 PM</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Finish dinner by sunset. If you eat late (Example: 9 PM), the food sits in your stomach all night, turns into toxic Ama, and leads to visceral belly fat.
                                </p>
                                <div className="bg-white p-4 rounded-lg border border-blue-200">
                                    <p className="font-bold text-sm text-gray-900 mb-1">What to eat?</p>
                                    <p className="text-sm text-gray-600">Soup, Lentils, Cooked Veggies. <span className="text-red-500 font-bold">NO</span> Raw Salad, No Yogurt, No Heavy Grains, No Non-Veg at night.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Massage */}
                    <section id="massage" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Udvartana (Fat-Burning Massage)</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Standard massage uses oil. But for weight loss, Ayurveda prescribes <strong>Udvartana</strong>—a dry powder massage.
                        </p>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-1" />
                                <span><strong>Ingredients:</strong> Chickpea Flour (Besan) + Triphala Powder + Pinch of Turmeric.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-1" />
                                <span><strong>Method:</strong> Rub this dry powder vigorously on your body in an <strong>upward direction</strong> (towards the heart) before your shower.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-1" />
                                <span><strong>Benefit:</strong> Creates friction, heats up the subcutaneous fat, melts cellulite, and opens pores.</span>
                            </li>
                        </ul>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: I work late shifts. How can I wake up at 5 AM?</h4>
                                <p className="text-gray-700 text-sm">Ayurveda is about rhythm. If you work night shifts, your rhythm is inverted. Try to maintain a constant sleep/wake cycle even on weekends, and ensure your "night" meal is light regardless of the time.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can I sleep in the afternoon?</h4>
                                <p className="text-gray-700 text-sm"><strong>Big NO.</strong> "Divaswapna" (Day sleep) increases Kapha intensely. It slows down metabolism immediately. If you are tired, do 10 mins of Yoga Nidra (propless relaxation), but don't sleep.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: How much water should I drink?</h4>
                                <p className="text-gray-700 text-sm">Drink when thirsty. Ayurveda advises against forcing gallons of water if you aren't thirsty, as it dampens the digestive fire (Agni). Sip warm water throughout the day.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <div className="mb-12">
                        <SuccessStory
                            name="Kavita R."
                            age={38}
                            condition="Post-Partum Weight"
                            result="Lost 12kg"
                            quote="I stopped counting calories and started following the sun. Just by shifting my dinner to 6:30 PM and drinking warm water, the weight started falling off. It's not a diet, it's a lifestyle."
                            duration="4 Months"
                        />
                    </div>

                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Routine is Medicine</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            You don't need a strict diet if you have a strict routine.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans/obesity"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Weight Loss Plan
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
            <div className="container mx-auto px-4 max-w-4xl mb-12">
                <ScientificRefs
                    references={[
                        { text: "Timing of food intake predicts weight loss effectiveness (Intl Journal of Obesity)", url: "https://www.nature.com/articles/ijo2012229" },
                        { text: "Circadian rhythms and metabolism", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3753381/" }
                    ]}
                />
            </div>
        </div>
    )
}
