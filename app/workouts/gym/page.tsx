import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Dumbbell, Repeat, Zap, RotateCcw, Scale } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ExpertNote from "@/components/ExpertNote"
import SuccessStory from "@/components/SuccessStory"
import ScientificRefs from "@/components/ScientificRefs"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gym Workout Plan for Beginners | 4-Day Split Routine",
    description: "Complete 4-day gym workout split for beginners. Focus on compound movements, muscle building, and proper form. Includes upper/lower body split.",
    keywords: "gym workout plan, beginner gym routine, 4 day gym split, upper lower split, muscle building workout, gym exercises for beginners",
}

export default function GymWorkoutPage() {
    return (
        <div className="min-h-screen bg-stone-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-blue-500 hover:bg-blue-600 text-white border-none">
                        Beginner to Intermediate
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        The Foundation Protocol
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                        Stop guessing. This 4-day Upper/Lower split is the most scientifically proven way to build muscle and strength efficiently.
                    </p>
                    <div className="flex justify-center gap-4 text-sm font-semibold text-slate-400">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> 4 Days/Week</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 60 Mins</span>
                        <span className="flex items-center"><Dumbbell className="w-4 h-4 mr-2" /> Hypertrophy</span>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-4xl mt-12">
                <ExpertNote
                    title="Why Upper/Lower Split?"
                    content="Bro-splits (Chest day, Back day) hit muscles only once a week. Science shows that hitting each muscle group twice a week (Frequency) yields 2x faster growth. This split allows optimal recovery while maximizing stimulation."
                />
            </div>

            {/* Schedule Overview */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                        <Repeat className="w-8 h-8 text-blue-600 mr-3" />
                        Weekly Schedule
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { day: "Monday", focus: "Upper Body A", color: "bg-blue-100 text-blue-800" },
                            { day: "Tuesday", focus: "Lower Body A", color: "bg-orange-100 text-orange-800" },
                            { day: "Wednesday", focus: "Rest / Cardio", color: "bg-slate-100 text-slate-600" },
                            { day: "Thursday", focus: "Upper Body B", color: "bg-blue-50 text-blue-700" },
                            { day: "Friday", focus: "Lower Body B", color: "bg-orange-50 text-orange-700" },
                            { day: "Sat/Sun", focus: "Active Rest", color: "bg-green-50 text-green-700" },
                        ].map((item, index) => (
                            <div key={index} className={`p-4 rounded-xl border border-transparent ${item.color} flex flex-col items-center justify-center text-center`}>
                                <span className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">{item.day}</span>
                                <span className="font-bold">{item.focus}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workouts */}
            <section className="py-12 space-y-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Workout A */}
                    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mb-8">
                        <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-bold">Upper Body A</h3>
                                <p className="text-blue-100 text-sm">Focus: Strength & Compounds</p>
                            </div>
                            <Dumbbell className="w-8 h-8 opacity-50" />
                        </div>
                        <div className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-slate-50">
                                        <TableHead className="w-[40%] pl-6">Exercise</TableHead>
                                        <TableHead>Sets</TableHead>
                                        <TableHead>Reps</TableHead>
                                        <TableHead className="text-right pr-6">Rest</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { name: "Bench Press / Dumbbell Press", sets: "3", reps: "6-8", rest: "3 min" },
                                        { name: "Bent Over Barbell Rows", sets: "3", reps: "6-8", rest: "3 min" },
                                        { name: "Overhead Press (Seated/Standing)", sets: "3", reps: "8-10", rest: "2 min" },
                                        { name: "Lat Pulldowns / Pull-ups", sets: "3", reps: "10-12", rest: "2 min" },
                                        { name: "Dumbbell Lateral Raises", sets: "3", reps: "12-15", rest: "90s" },
                                        { name: "Tricep Rope Pushdowns", sets: "2", reps: "12-15", rest: "60s" },
                                    ].map((ex, i) => (
                                        <TableRow key={i} className="hover:bg-slate-50 transition-colors">
                                            <TableCell className="font-medium pl-6 text-slate-900">{ex.name}</TableCell>
                                            <TableCell>{ex.sets}</TableCell>
                                            <TableCell>{ex.reps}</TableCell>
                                            <TableCell className="text-right pr-6 text-slate-500 italic">{ex.rest}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    {/* Workout B */}
                    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                        <div className="bg-orange-600 p-6 text-white flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-bold">Lower Body A</h3>
                                <p className="text-orange-100 text-sm">Focus: Squat & Legs</p>
                            </div>
                            <Zap className="w-8 h-8 opacity-50" />
                        </div>
                        <div className="p-0">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-slate-50">
                                        <TableHead className="w-[40%] pl-6">Exercise</TableHead>
                                        <TableHead>Sets</TableHead>
                                        <TableHead>Reps</TableHead>
                                        <TableHead className="text-right pr-6">Rest</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {[
                                        { name: "Barbell Squats", sets: "3", reps: "6-8", rest: "3 min" },
                                        { name: "Romanian Deadlifts", sets: "3", reps: "8-10", rest: "3 min" },
                                        { name: "Leg Press", sets: "3", reps: "10-12", rest: "2 min" },
                                        { name: "Leg Curls (Seated/Lying)", sets: "3", reps: "12-15", rest: "90s" },
                                        { name: "Calf Raises", sets: "4", reps: "15-20", rest: "60s" },
                                        { name: "Cable Crunches / Planks", sets: "3", reps: "15 / 1m", rest: "60s" },
                                    ].map((ex, i) => (
                                        <TableRow key={i} className="hover:bg-slate-50 transition-colors">
                                            <TableCell className="font-medium pl-6 text-slate-900">{ex.name}</TableCell>
                                            <TableCell>{ex.sets}</TableCell>
                                            <TableCell>{ex.reps}</TableCell>
                                            <TableCell className="text-right pr-6 text-slate-500 italic">{ex.rest}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Gym Rules for Success</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100 mb-4">
                                <Scale className="w-8 h-8 text-orange-500 mb-3" />
                                <h3 className="font-bold text-stone-800 mb-2">Progressive Overload</h3>
                                <p className="text-stone-600 text-sm">You must do more than last time. Add 1.25kg weight, do 1 more rep, or improve form every session. If you aren't progressing, you aren't growing.</p>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
                                <RotateCcw className="w-8 h-8 text-blue-500 mb-3" />
                                <h3 className="font-bold text-stone-800 mb-2">Consistency is King</h3>
                                <p className="text-stone-600 text-sm">A mediocre program done consistently beats the perfect program done sporadically. Don't skip Monday.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-4xl">
                <SuccessStory
                    name="Vikram Singh"
                    age={32}
                    condition="Skinny-Fat to Muscular"
                    result="Doubled Squat Strength in 4 Months"
                    quote="I used to just do random machines. Following this structured push-pull-legs split helped me build my foundation. The focus on compound lifts like squats and deadlifts was a game changer for my physique."
                    duration="4 Months"
                />
            </div>

            {/* FAQ Section */}
            <section id="faq" className="py-16 bg-stone-50 scroll-mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Common Questions</h2>
                        {/* Add Accordion here if needed */}
                        <p className="text-center text-gray-600">Ensure to warm up for 5-10 mins (Treadmill + Dynamic Stretching) before starting.</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-slate-800 to-indigo-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl font-bold mb-6">
                            Don't Train in Isolation
                        </h2>
                        <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                            Proper nutrition is 70% of the game. Pair this workout with our high-protein meal plans.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold" asChild>
                                <Link href="/blog/weight-loss">
                                    Get Diet Plan
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-4xl">
                <ScientificRefs
                    references={[
                        { text: "Resistance Training Frequency and Hypertrophy (Schoenfeld et al.)", url: "https://pubmed.ncbi.nlm.nih.gov/27102172/" },
                        { text: "Progressive Overload Principle", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4562558/" }
                    ]}
                />
            </div>
        </div>
    )
}
