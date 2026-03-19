import PrakritiQuiz from "@/components/PrakritiQuiz"
import MedicalBadge from "@/components/MedicalBadge"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import ArticleSchema from "@/components/Schema/ArticleSchema"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.fitplanindia.com/tools/prakriti-quiz",
  },
    title: "Tridosha Test: Know Your Ayurvedic Body Type (Prakriti) | FitPlan India",
    description: "Take this free 2-minute Ayurvedic body type test to discover your dominant Dosha (Vata, Pitta, or Kapha). Medically reviewed by Dr. Arti, BAMS.",
    keywords: "ayurveda test, dosha quiz, vata pitta kapha test, body type quiz, prakriti analysis, ayurvedic doctor india",
    openGraph: {
        title: "Free Ayurvedic Body Type Test | Medically Reviewed",
        description: "Discover your dominant Dosha and get personalized wellness tips from Dr. Arti.",
        url: "https://www.fitplanindia.com/tools/prakriti-quiz",
    },
}

export default function PrakritiQuizPage() {
    return (
        <main className="min-h-screen bg-emerald-50/50">
            <ArticleSchema
                headline="Tridosha Test: Know Your Ayurvedic Body Type (Prakriti) | FitPlan India"
                description="Take this free 2-minute Ayurvedic body type test to discover your dominant Dosha (Vata, Pitta, or Kapha). Medically reviewed by Dr. Arti, BAMS."
                keywords={["ayurveda test", "dosha quiz", "vata pitta kapha test", "body type quiz", "prakriti analysis", "ayurvedic doctor india"]}
                datePublished="2024-01-01"
                dateModified={new Date().toISOString()}
            />
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white pt-20 pb-24 px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    {/* Abstract pattern overlay */}
                    <div className="w-[500px] h-[500px] rounded-full bg-yellow-400 blur-3xl absolute -top-20 -left-20 mix-blend-overlay"></div>
                    <div className="w-[500px] h-[500px] rounded-full bg-blue-400 blur-3xl absolute bottom-0 right-0 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <div className="inline-flex mb-6">
                        <MedicalBadge />
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-balance">
                        What Is Your Unique Ayurvedic Body Type (Prakriti) and Why Is It Blocking Your Weight Loss?
                    </h1>
                    <p className="text-lg text-white mb-8 border-l-4 border-emerald-300 pl-4 text-left bg-white/10 p-4 rounded-r-lg shadow-md leading-relaxed text-balance">
                        <strong>The Short Answer:</strong> Trying to lose weight using generic advice will fail if your diet contradicts your unique biological constitution. To unlock effortless weight loss and fix hormonal imbalances, you must take this clinical Dosha test to discover whether you have a Vata (Air), Pitta (Fire), or Kapha (Water) dominant body type, and immediately adjust your meals accordingly.
                    </p>

                    <div className="flex gap-4 justify-center text-sm font-medium text-emerald-200">
                        <span className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>2 Minute Test</span>
                        <span className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>Free Analysis</span>
                        <span className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>Doctor Verified</span>
                    </div>
                </div>
            </section>

            {/* Quiz Section */}
            <section className="px-4 -mt-12 pb-24 relative z-20">
                <div className="container mx-auto">
                    <PrakritiQuiz />
                </div>

                <div className="max-w-3xl mx-auto mt-12 text-center text-gray-500 text-sm">
                    <p>
                        *This test provides a general analysis of your constitution. For a clinical diagnosis and treatment of specific conditions,
                        please consult with a qualified Ayurvedic physician.
                    </p>
                </div>
            </section>
        </main>
    )
}
