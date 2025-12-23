import Link from "next/link"
import { ArrowRight, BookOpen, Star, Activity } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RelatedContent() {
    return (
        <section className="py-8 mt-8 border-t border-gray-200">
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Recommended Next Steps</h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
                {/* Card 1: Related Diet */}
                <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-500 cursor-pointer overflow-hidden group">
                    <CardContent className="p-5">
                        <div className="mb-3 p-2 bg-emerald-100 w-fit rounded-lg group-hover:bg-emerald-600 transition-colors">
                            <BookOpen className="w-5 h-5 text-emerald-700 group-hover:text-white" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 group-hover:text-emerald-700 transition-colors">Diet Plan Guide</h4>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            Combine this full workout routine with our specialized diet chart for maximum results.
                        </p>
                        <Link href="/plans" className="text-sm font-semibold text-emerald-600 flex items-center hover:underline">
                            View Diet Plans <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </CardContent>
                </Card>

                {/* Card 2: Success Stories */}
                <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-amber-500 cursor-pointer overflow-hidden group">
                    <CardContent className="p-5">
                        <div className="mb-3 p-2 bg-amber-100 w-fit rounded-lg group-hover:bg-amber-600 transition-colors">
                            <Star className="w-5 h-5 text-amber-700 group-hover:text-white" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 group-hover:text-amber-700 transition-colors">Success Stories</h4>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            See how real people transformed their bodies using these exact strategies.
                        </p>
                        <Link href="/success-stories" className="text-sm font-semibold text-amber-600 flex items-center hover:underline">
                            Read Stories <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </CardContent>
                </Card>

                {/* Card 3: Tools */}
                <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500 cursor-pointer overflow-hidden group">
                    <CardContent className="p-5">
                        <div className="mb-3 p-2 bg-blue-100 w-fit rounded-lg group-hover:bg-blue-600 transition-colors">
                            <Activity className="w-5 h-5 text-blue-700 group-hover:text-white" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 group-hover:text-blue-700 transition-colors">Health Tools</h4>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            Track your daily calorie needs, BMI, and protein intake with free tools.
                        </p>
                        <Link href="/tools" className="text-sm font-semibold text-blue-600 flex items-center hover:underline">
                            Try Calculators <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
