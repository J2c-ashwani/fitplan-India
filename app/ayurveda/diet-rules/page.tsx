import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Flame, Utensils, Ban, CheckCircle, AlertOctagon } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"

export const metadata: Metadata = {
    title: "10 Golden Ayurvedic Diet Rules | Art of Mindful Eating",
    description: "Ayurveda is not just about what you eat, but HOW you eat. Master the 10 rules of Ahara, the concept of Viruddha Ahar (Incompatible Foods), and the ideal daily eating schedule.",
    keywords: ["Ayurvedic eating rules", "Viruddha Ahar examples", "Ayurveda food combinations", "Mindful eating guide", "Digestive fire Agni"],
}

export default function DietRulesPage() {
    const tocItems = [
        { id: "agni", label: "The Concept of Agni" },
        { id: "rules", label: "10 Golden Rules" },
        { id: "incompatible", label: "Incompatible Foods" },
        { id: "schedule", label: "Ideal Schedule" },
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
                        The Art of Eating
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light">
                        In Ayurveda, food is medicine. But even the healthiest food can become poison (Ama) if eaten at the wrong time, in the wrong quantity, or with the wrong combination.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">

                {/* Agni Section */}
                <section id="agni" className="mb-20">
                    <ExpertNote
                        title="The Root of All Disease"
                        content="In Ayurveda, we say 'Sarve Roga Mandagni'—all diseases begin with weak digestive fire. I tell my patients: It's not just what you eat, but what you DIGEST that builds your tissues (Dhatus). Respect your hunger signals."
                    />
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-orange-100 rounded-full">
                                <Flame className="w-8 h-8 text-orange-600" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-gray-900">Respect Your Agni</h2>
                        </div>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                <strong>Agni</strong> is your digestive fire. Think of it like a campfire. If you dump too much wood (food) on a small fire, it suffocates. If you pour cold water (ice drinks) on it, it dies.
                            </p>
                            <p className="mt-4">
                                90% of diseases begin in the gut when Agni is weak and cannot digest food, leading to the formation of sticky toxins called <strong>Ama</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 10 Rules Section */}
                <section id="rules" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">The 10 Golden Rules (Ahara Vidhi)</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: "1. Eat Warm Food", desc: "Warm food stimulates Agni and enzymes. Cold food slows digestion." },
                            { title: "2. Eat Unctuous Food", desc: "Food should have some fat (Ghee/Oil) to lubricate the system." },
                            { title: "3. Eat in Proper Quantity", desc: "Fill 50% with food, 25% with water, and leave 25% empty for air." },
                            { title: "4. Eat Only When Hungry", desc: "Real hunger comes after the previous meal is fully digested (4-6 hours)." },
                            { title: "5. No Contradictory Foods", desc: "Avoid combinations like Milk + Fish or Fruit + Yogurt." },
                            { title: "6. Eat in a Peaceful Place", desc: "No TV, no phone. Stress shuts down blood flow to the gut." },
                            { title: "7. Don't Eat Too Fast", desc: "Chew your food. Digestion begins in the mouth." },
                            { title: "8. Don't Eat Too Slow", desc: "Eating for 1 hour confuses satiety signals." },
                            { title: "9. Focus on Food", desc: "Engage all senses—smell, sight, and taste—to prime digestion." },
                            { title: "10. Eat with Confidence", desc: "Trust that the food will nourish you. Anxiety causes indigestion." },
                        ].map((rule, i) => (
                            <Card key={i} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg text-[#064e3b] mb-2">{rule.title}</h3>
                                    <p className="text-gray-600 text-sm">{rule.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Incompatible Foods */}
                <section id="incompatible" className="mb-20 scroll-mt-24">
                    <div className="bg-red-50/50 p-8 md:p-12 rounded-3xl border border-red-100">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertOctagon className="w-8 h-8 text-red-600" />
                            <h2 className="text-3xl font-serif font-bold text-red-900">Viruddha Ahar (Danger Combos)</h2>
                        </div>
                        <p className="text-gray-700 mb-8">
                            Some foods are healthy alone but toxic together. They upset the balance of Doshas and create instant toxins.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center">
                                <span className="text-3xl">🥛 + 🍌</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Milk + Banana (Smoothies)</h4>
                                    <p className="text-sm text-gray-600">The heavy/sour quality of banana clashes with milk, causing instant phlegm and toxins.</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center">
                                <span className="text-3xl">🐟 + 🥛</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Fish + Milk</h4>
                                    <p className="text-sm text-gray-600">Fish is heating, milk is cooling. This thermal clash vitiates blood and causes skin diseases.</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center">
                                <span className="text-3xl">🍯 + 🔥</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Honey + Heat</h4>
                                    <p className="text-sm text-gray-600">Cooking honey turns it into a glue-like toxin. Only add honey to lukewarm water.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Daily Schedule */}
                <section id="schedule" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">The Circadian Eating Schedule</h2>
                    <div className="relative border-l-2 border-emerald-200 ml-6 space-y-12">
                        <div className="relative pl-8">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow"></span>
                            <h3 className="text-xl font-bold text-gray-900">7:00 AM - 8:00 AM: Breakfast</h3>
                            <p className="text-gray-600">Agni is just waking up. Eat something light, warm, and moist like stewed apples or oatmeal.</p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow"></span>
                            <h3 className="text-xl font-bold text-gray-900">12:00 PM - 1:30 PM: Lunch (King's Meal)</h3>
                            <p className="text-gray-600">Agni is strongest when the sun is highest. This is the time for your heaviest meal—grains, proteins, dairy.</p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow"></span>
                            <h3 className="text-xl font-bold text-gray-900">6:30 PM - 7:30 PM: Dinner (Pauper's Meal)</h3>
                            <p className="text-gray-600">Eat before sunset. Agni sets with the sun. Keep it very light—soups or cooked vegetables. No raw salads or heavy proteins.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-20">
                    <SuccessStory
                        name="Meera K."
                        age={42}
                        condition="Chronic Bloating & Fatigue"
                        result="Digestion Restored"
                        quote="I used to eat salads for dinner thinking it was healthy. Dr. Arti explained that raw cold food at night dampens my 'Agni'. Switching to warm soups for dinner completely fixed my morning bloating in 5 days."
                        duration="5 Days"
                    />
                </section>

                <section id="faq" className="mb-20 scroll-mt-24">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Can I drink water with meals?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Small sips of warm water <strong>during</strong> a meal aids digestion. Drinking a huge glass <strong>before</strong> dilutes acid (kills appetite). Drinking <strong>after</strong> causes weight gain (slows metabolism).
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-medium text-gray-900">Why shouldn't I eat cold yogurt at night?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed">
                                Yogurt is heavy and mucus-forming (Kapha increasing). At night, Kapha is naturally high. Eating yogurt then clogs the channels (Strotas) leading to colds, coughs, and weight gain.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

            </div>
            <div className="container mx-auto px-4 max-w-4xl mb-12">
                <ScientificRefs
                    references={[
                        { text: "Physiology of Digestion and Agni (Ayur)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3215322/" },
                        { text: "Impact of Meal Timing on Metabolism", url: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(14)00498-7" }
                    ]}
                />
            </div>
        </div>
    )
}
