import { Trophy, Quote, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SuccessStoryProps {
    name: string
    age?: number
    condition?: string
    result: string
    quote: string
    duration?: string
}

export default function SuccessStory({ name, age, condition, result, quote, duration }: SuccessStoryProps) {
    return (
        <Card className="my-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100 shadow-sm">
            <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-emerald-700 mb-1">
                    <Trophy className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wide">Patient Success Story</span>
                </div>
                <CardTitle className="text-xl font-serif text-gray-900">
                    How {name} {condition ? `Reversed ${condition}` : "Transformed Her Health"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-4">
                        <div className="relative">
                            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-200 -z-10 transform -scale-x-100" />
                            <p className="text-gray-700 italic text-lg leading-relaxed relative z-10">
                                "{quote}"
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {duration && (
                                <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-600 border border-emerald-100 shadow-sm">
                                    ⏱️ Time: {duration}
                                </span>
                            )}
                            {condition && (
                                <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-600 border border-emerald-100 shadow-sm">
                                    🎯 Condition: {condition}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-5 border border-emerald-100 shadow-sm flex flex-col justify-center">
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Key Result</p>
                        <p className="text-2xl font-bold text-emerald-700 leading-tight">
                            {result}
                        </p>
                        <div className="flex gap-1 mt-3">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <div className="mt-2 text-xs text-gray-400">Verified Patient</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
