import { Link2, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Reference {
    text: string
    url?: string
}

interface ScientificRefsProps {
    references: Reference[]
}

export default function ScientificRefs({ references }: ScientificRefsProps) {
    if (!references || references.length === 0) return null

    return (
        <Card className="mt-12 mb-8 bg-slate-50 border-slate-200">
            <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-slate-700 border-b border-slate-200 pb-3">
                    <BookOpen className="w-5 h-5" />
                    <h3 className="font-bold text-sm uppercase tracking-wide">Scientific References & Sources</h3>
                </div>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600">
                    {references.map((ref, idx) => (
                        <li key={idx} className="pl-2">
                            <span className="mr-2">{ref.text}</span>
                            {ref.url && (
                                <a
                                    href={ref.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
                                >
                                    View Study <Link2 className="w-3 h-3" />
                                </a>
                            )}
                        </li>
                    ))}
                </ol>
                <p className="text-xs text-slate-400 mt-6 italic">
                    Disclaimer: This content is medically reviewed by Dr. Arti (BAMS) but should not replace professional medical advice.
                </p>
            </CardContent>
        </Card>
    )
}
