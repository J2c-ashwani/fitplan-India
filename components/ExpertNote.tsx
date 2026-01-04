import { Stethoscope } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ExpertNoteProps {
    title?: string
    content: string
}

export default function ExpertNote({ title = "Doctor's Insight", content }: ExpertNoteProps) {
    return (
        <Card className="my-8 border-l-4 border-l-indigo-600 bg-indigo-50/50 shadow-sm overflow-hidden">
            <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="flex-shrink-0 flex flex-col items-center space-y-2">
                        <div className="relative">
                            <Avatar className="h-16 w-16 border-2 border-indigo-200">
                                <AvatarImage src="/images/dr-arti.jpg" alt="Dr. Arti" />
                                <AvatarFallback className="bg-indigo-100 text-indigo-700 font-bold">DA</AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-full p-1 text-white border-2 border-white">
                                <Stethoscope className="w-3 h-3" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-xs font-bold text-gray-900">Dr. Arti</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wide">B.A.M.S.</p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h4 className="font-bold text-indigo-900 flex items-center gap-2 mb-2 font-serif text-lg">
                            {title}
                        </h4>
                        <div className="text-gray-700 leading-relaxed italic text-lg opacity-90 font-serif">
                            "{content}"
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
