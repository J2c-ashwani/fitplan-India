import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Dumbbell, Clock, Info, Target, Zap, TrendingUp, Sparkles, ArrowRight, RotateCcw } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import StickyTOC from "@/components/StickyTOC"
import RelatedContent from "@/components/RelatedContent"
import FAQSection from "@/components/FAQSection"
import type { Metadata } from "next"
import PriceDisplay from "@/components/PriceDisplay"

export const metadata: Metadata = {
    title: "Gym Workout Plan | 4-Day Upper/Lower Split | FitPlan India",
    description: "Complete gym workout routine for beginners and intermediates. 4-day Upper/Lower split focusing on compound exercises, strength, and muscle definition.",
    keywords: "gym workout plan, gym routine list, upper lower split, 4 day gym split, beginner gym workout, muscle building gym plan India",
    openGraph: {
        title: "Gym Workout Plan | The Ultimate 4-Day Split",
        description: "Build muscle and strength with this proven 4-day Upper/Lower gym split.",
        url: "https://fitplanindia.com/workouts/gym",
    },
}

export default function GymWorkoutPage() {
    const breadcrumbItems = [
        { label: "Workouts", href: "/workouts" },
        { label: "Gym Routine", href: "/workouts/gym" },
    ]

    const tocItems = [
        { id: "overview", label: "Overview" },
        { id: "schedule", label: "Weekly Schedule" },
        { id: "upper", label: "Upper Motivation" },
        { id: "lower", label: "Lower Power" },
        { id: "tips", label: "Pro Tips" },
        { id: "faq", label: "FAQs" },
    ]

    const faqs = [
        {
            question: "Is this plan suitable for beginners?",
            answer: "Yes! But start light. Focus on form first. If 4 days is too much, combine Upper A + Lower A into one week (2 days) and Upper B + Lower B into next week."
        },
        {
            question: "How long should I rest between sets?",
            answer: "For heavy compound lifts (Bench, Squat, Deadlift), rests 2-3 minutes. For isolation exercises (Curls, Raises), rest 60-90 seconds."
        },
        {
            question: "Can I swap exercises if I don't have the machine?",
            answer: "Absolutely. If you don't have a specific machine, use free weights (dumbbells/barbells) that target the same muscle group. The movement pattern matters more than the tool."
        },
        {
            question: "What should I eat before my gym workout?",
            answer: "Carbs for fuel + Moderate Protein. E.g., Banana with peanut butter, Oatmeal, or a slice of toast 1-2 hours before lifting."
        },
        {
            question: "Do I need supplements?",
            answer: "No, real food is best. Whey protein is convenient post-workout but not mandatory if you hit your protein goals from meals."
        }
    ]

    return (
        <div className="min-h-screen bg-stone-50 pb-20">
            <StickyTOC items={tocItems} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-800 to-indigo-900 text-white pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={breadcrumbItems} />
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-indigo-500 text-white font-semibold">
                            🏋️ Gym Mastery Series
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-shadow-sm font-serif">
                            The 4-Day Gym Split
                        </h1>
                        <p className="text-xl text-indigo-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                            A balanced Upper/Lower split designed to build strength and aesthetics. Hit every muscle group twice a week for maximum growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-indigo-900 hover:bg-stone-100 font-semibold" asChild>
                                <Link href="#schedule">See Schedule</Link>
                            </Button>
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-2 border-indigo-400 font-semibold" asChild>
                                <Link href="/contact#contact-form">Get Custom Plan</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Stats */}
            <section id="overview" className="py-16 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
                        <div>
                            <div className="text-3xl font-bold text-indigo-600 mb-2">4 Days</div>
                            <div className="text-gray-600">Per Week</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600 mb-2">60 Min</div>
                            <div className="text-gray-600">Session Length</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">Build</div>
                            <div className="text-gray-600">Muscle & Strength</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-cyan-600 mb-2">Gym</div>
                            <div className="text-gray-600">Required</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weekly Schedule */}
            <section id="schedule" className="py-16 bg-stone-50 scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif text-center">Weekly Gym Schedule</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-l-4 border-l-indigo-500">
                                <CardHeader><CardTitle className="text-indigo-700">Part A: Strength Focus</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b pb-2"><span>Monday</span> <span className="font-bold">Upper Body A</span></li>
                                        <li className="flex justify-between border-b pb-2"><span>Tuesday</span> <span className="font-bold">Lower Body A</span></li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-purple-500">
                                <CardHeader><CardTitle className="text-purple-700">Part B: Hypertrophy Focus</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b pb-2"><span>Thursday</span> <span className="font-bold">Upper Body B</span></li>
                                        <li className="flex justify-between border-b pb-2"><span>Friday</span> <span className="font-bold">Lower Body B</span></li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                        <p className="text-center text-stone-500 mt-4 text-sm">
                            *Wednesday and Weekends are Rest/Active Recovery days.
                        </p>
                    </div>
                </div>
            </section>

            {/* Workout Routines */}
            <section id="upper" className="py-16 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">Monday: Upper Body A</h2>
                        <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-100 mb-8">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-indigo-200">
                                            <th className="py-3 font-bold text-indigo-900">Exercise</th>
                                            <th className="py-3 font-bold text-indigo-900">Sets</th>
                                            <th className="py-3 font-bold text-indigo-900">Reps</th>
                                            <th className="py-3 font-bold text-indigo-900">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-stone-700">
                                        <tr className="border-b border-indigo-100 bg-white">
                                            <td className="py-3 px-2 font-medium">1. Bench Press (Barbell)</td>
                                            <td className="py-3 px-2">4</td>
                                            <td className="py-3 px-2">6-8</td>
                                            <td className="py-3 px-2 text-sm">Heavy compound push. Focus on chest.</td>
                                        </tr>
                                        <tr className="border-b border-indigo-100">
                                            <td className="py-3 px-2 font-medium">2. Bent Over Rows</td>
                                            <td className="py-3 px-2">4</td>
                                            <td className="py-3 px-2">8-10</td>
                                            <td className="py-3 px-2 text-sm">Keep back straight. Hits lats/rhomboids.</td>
                                        </tr>
                                        <tr className="border-b border-indigo-100 bg-white">
                                            <td className="py-3 px-2 font-medium">3. Overhead Press (Seated/Standing)</td>
                                            <td className="py-3 px-2">3</td>
                                            <td className="py-3 px-2">10-12</td>
                                            <td className="py-3 px-2 text-sm">Shoulder builder. Don't arch lower back.</td>
                                        </tr>
                                        <tr className="border-b border-indigo-100">
                                            <td className="py-3 px-2 font-medium">4. Lat Pulldowns</td>
                                            <td className="py-3 px-2">3</td>
                                            <td className="py-3 px-2">10-12</td>
                                            <td className="py-3 px-2 text-sm">Create width. Pull elbows down to hips.</td>
                                        </tr>
                                        <tr className="border-b border-indigo-100 bg-white">
                                            <td className="py-3 px-2 font-medium">5. Skullcrushers (Triceps)</td>
                                            <td className="py-3 px-2">3</td>
                                            <td className="py-3 px-2">12-15</td>
                                            <td className="py-3 px-2 text-sm">Isolation. Elbows stationary.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="lower" className="py-16 bg-stone-50 scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-stone-900 mb-8 font-serif">Tuesday: Lower Body A</h2>
                        <div className="bg-purple-50 rounded-xl p-8 border border-purple-100 mb-8">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-purple-200">
                                            <th className="py-3 font-bold text-purple-900">Exercise</th>
                                            <th className="py-3 font-bold text-purple-900">Sets</th>
                                            <th className="py-3 font-bold text-purple-900">Reps</th>
                                            <th className="py-3 font-bold text-purple-900">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-stone-700">
                                        <tr className="border-b border-purple-100 bg-white">
                                            <td className="py-3 px-2 font-medium">1. Squats (Barbell)</td>
                                            <td className="py-3 px-2">4</td>
                                            <td className="py-3 px-2">6-8</td>
                                            <td className="py-3 px-2 text-sm">King of legs. Break parallel if possible.</td>
                                        </tr>
                                        <tr className="border-b border-purple-100">
                                            <td className="py-3 px-2 font-medium">2. Romanian Deadlifts</td>
                                            <td className="py-3 px-2">3</td>
                                            <td className="py-3 px-2">8-10</td>
                                            <td className="py-3 px-2 text-sm">Feel the stretch in hamstrings.</td>
                                        </tr>
                                        <tr className="border-b border-purple-100 bg-white">
                                            <td className="py-3 px-2 font-medium">3. Bulgarian Split Squats</td>
                                            <td className="py-3 px-2">3</td>
                                            <td className="py-3 px-2">10-12</td>
                                            <td className="py-3 px-2 text-sm">Per leg. Focus on balance and glutes.</td>
                                        </tr>
                                        <tr className="border-b border-purple-100">
                                            <td className="py-3 px-2 font-medium">4. Calf Raises</td>
                                            <td className="py-3 px-2">4</td>
                                            <td className="py-3 px-2">15-20</td>
                                            <td className="py-3 px-2 text-sm">Pause at the top and bottom.</td>
                                        </tr>
                                        <tr className="border-b border-purple-100 bg-white">
                                            <td className="py-3 px-2 font-medium">5. Plank / Hanging Leg Raise</td>
                                            <td className="py-3 px-2">3</td>
                                            <td className="py-3 px-2">Failure</td>
                                            <td className="py-3 px-2 text-sm">Core stability.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips Section */}
            <section id="tips" className="py-16 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-stone-900 mb-6 font-serif">Rules of the Iron Game</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                <Target className="w-8 h-8 text-red-500 mb-3" />
                                <h3 className="font-bold text-stone-800 mb-2">Progressive Overload</h3>
                                <p className="text-stone-600 text-sm">Usually beat your last workout. Add 2.5kg OR add 1 rep. If you aren't doing more work, you aren't growing.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                <RotateCcw className="w-8 h-8 text-blue-500 mb-3" />
                                <h3 className="font-bold text-stone-800 mb-2">Consistency is King</h3>
                                <p className="text-stone-600 text-sm">A mediocre program done consistently beats the perfect program done sporadically. Don't skip Monday.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 bg-stone-50 scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <FAQSection faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-slate-800 to-indigo-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-6 font-serif">Level Up Your Gains</h2>
                        <p className="text-xl mb-8 text-indigo-100">
                            Need strict form checks or a diet plan to match your lifting?
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm border border-indigo-500/30">
                                <Sparkles className="w-12 h-12 text-indigo-200 mx-auto mb-4" />
                                <h4 className="font-semibold text-white mb-2 text-xl">AI Coach</h4>
                                <p className="text-indigo-100 text-sm mb-4">
                                    Get a personalized diet plan to fuel your lifts - Free.
                                </p>
                                <Button size="lg" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold" asChild>
                                    <Link href="/ai-coach">Start Free Plan</Link>
                                </Button>
                            </div>

                            <div className="bg-white/10 rounded-lg p-6 flex-1 max-w-md backdrop-blur-sm border border-indigo-500/30">
                                <Dumbbell className="w-12 h-12 text-indigo-200 mx-auto mb-4" />
                                <h4 className="font-semibold text-white mb-2 text-xl">Personal Training</h4>
                                <p className="text-indigo-100 text-sm mb-4">
                                    1-on-1 coaching for perfect technique - <PriceDisplay amountIn={1500} amountUs={60} />
                                </p>
                                <Button size="lg" className="w-full bg-white text-indigo-900 hover:bg-stone-100 font-semibold" asChild>
                                    <Link href="/contact#contact-form">Book Session</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-4">
                        <RelatedContent />
                    </div>
                </div>
            </section>
        </div>
    )
}
