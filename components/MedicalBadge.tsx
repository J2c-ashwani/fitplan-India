import Image from "next/image"
import { ShieldCheck } from "lucide-react"

export default function MedicalBadge() {
    return (
        <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                <Image
                    src="/dr-arti.jpg"
                    alt="Dr. Arti"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-[10px] items-center flex gap-1 uppercase tracking-wider font-bold text-emerald-600">
                    <ShieldCheck className="w-3 h-3" />
                    Medically Reviewed
                </span>
                <span className="text-xs font-semibold text-gray-900 leading-none">
                    Dr. Arti, BAMS
                </span>
            </div>
        </div>
    )
}
