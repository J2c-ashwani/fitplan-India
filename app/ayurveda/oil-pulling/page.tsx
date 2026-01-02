import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Droplet, Clock } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Ayurvedic Oil Pulling: Benefits & How To Start | Gandusha Guide",
    description: "Master the ancient art of Oil Pulling (Gandusha). Learn how swishing coconut or sesame oil can whiten teeth, remove toxins, and improve gut health.",
    keywords: ["Oil pulling benefits", "Gandusha ayurveda", "Coconut oil pulling", "Sesame oil for teeth", "Oral detox"],
}

export default function OilPullingPage() {
    const tocItems = [
        { id: "what-is", label: "What is It?" },
        { id: "benefits", label: "Key Benefits" },
        { id: "how-to", label: "Step-by-Step" },
        { id: "oils", label: "Best Oils" },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            <StickyTOC items={tocItems} />

            <div className="relative bg-[#064e3b] text-white py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <MedicalBadge />
                    <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 mt-6">
                        Gandusha: The Ancient Detox
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Oil Pulling is not just for white teeth. In Ayurveda, the tongue is the mirror of the internal organs. Cleaning the mouth detoxifies the entire body.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    <section id="what-is" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">More Than Just Mouthwash</h2>
                        <p className="text-gray-700">
                            <strong>Gandusha</strong> (holding liquid) or <strong>Kavala</strong> (swishing liquid) involves swishing oil in the mouth for 15-20 minutes. Ideally done first thing in the morning on an empty stomach.
                        </p>
                    </section>

                    <section id="benefits" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Why Swish Oil?</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">1. Pulls Toxins (Ama)</h3>
                                    <p className="text-gray-700 text-sm">Oral bacteria have a lipid (fat) outer coating. They stick to the oil like a magnet and are spit out.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">2. Whitens Teeth</h3>
                                    <p className="text-gray-700 text-sm">Natural mechanical cleaning removes stains without damaging enamel like chemical bleaches.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-stone-50">
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-emerald-900 mb-2">3. Cures Bad Breath</h3>
                                    <p className="text-gray-700 text-sm">Halitosis is often caused by bacteria on the tongue. Oil pulling creates a clean oral microbiome.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section id="how-to" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">How To Do It Correctly</h2>
                        <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                            <ol className="list-decimal ml-5 space-y-3 text-gray-800">
                                <li><strong>Take 1 tbsp of Oil:</strong> Put it in your mouth. Do not swallow!</li>
                                <li><strong>Swish Gently:</strong> Push and pull the oil through your teeth.</li>
                                <li><strong>Time it:</strong> Continue for 10-15 minutes until the oil turns thin and milky white.</li>
                                <li><strong>Spit into Trash:</strong> Do not spit in the sink (it clogs pipes) or swallow (it's full of toxins).</li>
                                <li><strong>Rinse:</strong> Rinse with warm water and brush as usual.</li>
                            </ol>
                        </div>
                    </section>

                    <section id="oils" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Which Oil is Best?</h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                                <h4 className="font-bold text-orange-900 mb-1">Cold-Pressed Sesame Oil</h4>
                                <p className="text-sm text-gray-700">The traditional Ayurveda choice. Warming nature. Good for receding gums and tooth sensitivity.</p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-1">Virgin Coconut Oil</h4>
                                <p className="text-sm text-gray-700">The modern choice. Cooling nature. Antimicrobial and tastes better. Great for whitening.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}
