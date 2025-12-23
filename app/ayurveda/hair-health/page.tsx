import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Scissors, Droplet, Sparkles, AlertCircle } from "lucide-react"
import MedicalBadge from "@/components/MedicalBadge"
import StickyTOC from "@/components/StickyTOC"

export const metadata: Metadata = {
    title: "Best Ayurvedic Hair Oil & Herbs for Growth | Keshya",
    description: "Stop hair fall and premature graying naturally. Ayurvedic guide to Bhringraj, Amla, and Nasya therapy for thick, lustrous hair.",
    keywords: ["Ayurvedic hair oil for growth", "Bhringraj benefits", "Amla for white hair", "Nasya for hair fall", "Pitta dosha hair loss", "hair care routine Indian"],
}

export default function HairHealthPage() {
    const tocItems = [
        { id: "root-cause", label: "The Root Cause (Pitta)" },
        { id: "herbs", label: "Keshya Herbs (Hair Tonics)" },
        { id: "oils", label: "Oiling Secrets" },
        { id: "nasya", label: "The Nasya Miracle" },
        { id: "diet", label: "Diet for Hair" },
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
                        Keshya: The Ancient Secret to Lustrous Hair
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Hair is a byproduct of bone tissue (Asthi Dhatu). When your bones are well-nourished, your hair shines. Hair fall, however, is a result of <strong>excess Pitta</strong> (Heat) frying the follicles.
                    </p>
                </div>
                <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">

                    {/* Root Cause */}
                    <section id="root-cause" className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Flame className="w-6 h-6 text-red-600 mr-2" />
                            Why is my hair falling?
                        </h2>
                        <div className="prose prose-lg text-gray-700">
                            <p>
                                In Ayurveda, hair fall (Khalitya) and graying (Palitya) are primarily <strong>Pitta disorders</strong>.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li><strong>Excess Body Heat:</strong> Caused by spicy food, anger, or stress. The heat rises to the scalp and weakens the roots.</li>
                                <li><strong>Poor Nutrition:</strong> If your Asthi Dhatu (Bones) is weak (low Calcium/Magnesium), the byproduct (Hair) will be weak too.</li>
                                <li><strong>Blocked Pores:</strong> Excess Kapha (Oil/Dandruff) blocking the follicles.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Herbs */}
                    <section id="herbs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The "Keshya" (Hair-Friendly) Herbs</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-emerald-50 border-emerald-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2">1. Bhringraj</h3>
                                    <p className="text-sm text-gray-700 mb-3">Literally "The King of Hair". It darkens the hair color and reverses early graying. It initiates new growth in dormant follicles.</p>
                                    <div className="bg-white px-3 py-1 rounded-full inline-block text-xs font-bold text-emerald-800 border border-emerald-200">
                                        Apply oil 3x/week
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-green-50 border-green-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-green-900 mb-2">2. Amla (Indian Gooseberry)</h3>
                                    <p className="text-sm text-gray-700 mb-3">The richest source of Vitamin C. It strengthens the roots and reduces Pitta (Heat) in the head.</p>
                                    <div className="bg-white px-3 py-1 rounded-full inline-block text-xs font-bold text-green-800 border border-green-200">
                                        Eat 1 Amla daily
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-red-50 border-red-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-red-900 mb-2">3. Hibiscus (Japa)</h3>
                                    <p className="text-sm text-gray-700 mb-3">The flower extract conditions the hair, preventing split ends and dryness (Vata hair).</p>
                                    <div className="bg-white px-3 py-1 rounded-full inline-block text-xs font-bold text-red-800 border border-red-200">
                                        Use in hair mask
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-yellow-50 border-yellow-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-yellow-900 mb-2">4. Methi (Fenugreek)</h3>
                                    <p className="text-sm text-gray-700 mb-3">High nicotinic acid content treats dandruff and fungal issues on the scalp.</p>
                                    <div className="bg-white px-3 py-1 rounded-full inline-block text-xs font-bold text-yellow-800 border border-yellow-200">
                                        Soak & apply paste
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Oiling Tech */}
                    <section id="oils" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">The Art of Champi (Head Massage)</h2>
                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                            <p className="text-gray-700 mb-4">
                                Oiling is not just for hair; it's for the brain. It cools the skull and calms Vata.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Which Oil?</h4>
                                    <ul className="text-sm text-gray-600 list-disc ml-5">
                                        <li><strong>Coconut:</strong> Best for Pitta (Summer/Red Scalp).</li>
                                        <li><strong>Sesame/Almond:</strong> Best for Vata (Dry/Frizzy Hair).</li>
                                        <li><strong>Mustard:</strong> Good for Kapha (Dandruff/Oily Scalp).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">The Rule</h4>
                                    <p className="text-sm text-gray-600">
                                        Apply WARM oil at night. Wash in the morning.
                                        <br /><span className="text-red-500 font-bold">Never</span> apply cold oil.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Nasya */}
                    <section id="nasya" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Nasya: The Secret Weapon</h2>
                        <div className="flex items-start">
                            <Droplet className="w-8 h-8 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Why put oil in nose for hair?</h3>
                                <p className="text-gray-700">
                                    The nose is the most direct route to the brain and scalp. Putting 2 drops of <strong>Anu Taila</strong> or Ghee in each nostril lubricates the head from the inside.
                                    <br />
                                    It is clinically proven to reduce hair fall caused by stress and heat.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Diet */}
                    <section id="diet" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Feed Your Hair</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" /> <strong>Curry Leaves:</strong> Chew 3-4 raw leaves daily. Prevents graying.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" /> <strong>Moringa:</strong> Multi-vitamin for hair.</li>
                            <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" /> <strong>Coconut:</strong> Eat dry coconut to oil your body from within.</li>
                            <li className="flex items-start"><AlertCircle className="w-5 h-5 text-red-500 mr-2" /> <strong>Avoid:</strong> Excess salt (it causes hair to fall out) and sour foods (pickles promote graying).</li>
                        </ul>
                    </section>

                    {/* FAQs */}
                    <section id="faqs" className="mb-12 scroll-mt-24">
                        <h2 className="text-3xl font-serif font-bold text-[#064e3b] mb-6 border-b pb-2">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Does shaving the head increase density?</h4>
                                <p className="text-gray-700 text-sm">Yes, temporarily. Tonsuring (Mundan) removes the weak hair and allows the scalp to breathe. Applying medicinal pastes (Lepa) on a shaved head absorbs 10x better.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Is sulphate-free shampoo enough?</h4>
                                <p className="text-gray-700 text-sm">It's a start. But Reetha (Soapnut) and Shikakai are the real cleansers that don't strip natural oils. Try using natural powders once a week.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h4 className="font-bold text-gray-900 mb-2">Q: Can white hair turn black again?</h4>
                                <p className="text-gray-700 text-sm">Early graying (premature) can be reversed with Bhringraj and diet. Natural age-related graying (genetic) cannot be fully reversed, but can be slowed down.</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion & CTA */}
                    <section id="conclusion" className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
                        <h3 className="text-2xl font-bold text-emerald-900 mb-4">External Care is 20%, Internal is 80%</h3>
                        <p className="text-emerald-800 mb-8 max-w-2xl mx-auto">
                            Don't just chase expensive shampoos. Fix your digestion and reduce stress, and your hair will bounce back.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/plans"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-md"
                            >
                                Get Hair Growth Diet
                            </Link>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}

function Flame(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.246-2.246-3-3a5.868 5.868 0 0 0-4.11 3.751 7.674 7.674 0 0 0 3.756 8.327 9.877 9.877 0 0 0 8.022-2.128" />
            <path d="M22 17c-.365 3.33-4.143 4.29-6.327 2.246a6.83 6.83 0 0 1-1.923-2.496C13.25 15.25 14 13.5 14 13.5c.348-.992 1.436-1.579 2.5-1.5 2 0 4.5 1 4.5 5" />
            <path d="M12 12c2-3 5.5-3 7-7-2.333 1.667-3.5 4.5-3 7" />
        </svg>
    )
}
