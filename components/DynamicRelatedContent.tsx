import Link from "next/link"
import { ArrowRight, BookOpen, Star, Activity, Leaf, Dumbbell } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

type TopicKey = "pcos" | "thyroid" | "diabetes" | "weight_loss" | "default"

const TOPIC_LINKS = {
    pcos: [
        {
            title: "PCOS Diet Plan",
            href: "/plans/pcos",
            desc: "Balance your hormones with this clinical PCOS medical diet.",
            icon: BookOpen,
            color: "emerald"
        },
        {
            title: "PCOS Workout",
            href: "/workouts/pcos",
            desc: "Specific exercises to lower insulin resistance and stress.",
            icon: Dumbbell,
            color: "purple"
        },
        {
            title: "Ayurvedic Herbs for PCOS",
            href: "/ayurveda/pcos-herbs",
            desc: "Ancient natural remedies to regulate your cycle.",
            icon: Leaf,
            color: "amber"
        }
    ],
    thyroid: [
        {
            title: "Thyroid Diet Plan",
            href: "/plans/thyroid",
            desc: "Boost your metabolism with this thyroid-healing diet.",
            icon: BookOpen,
            color: "emerald"
        },
        {
            title: "Thyroid Workout",
            href: "/workouts/thyroid",
            desc: "Energy-boosting routines specifically for Hypothyroidism.",
            icon: Dumbbell,
            color: "purple"
        },
        {
            title: "Ayurvedic Thyroid Care",
            href: "/ayurveda/thyroid-remedies",
            desc: "Natural ways to support your thyroid gland.",
            icon: Leaf,
            color: "amber"
        }
    ],
    diabetes: [
        {
            title: "Diabetes Diet Plan",
            href: "/plans/diabetes",
            desc: "Medically approved meals to stabilize blood sugar.",
            icon: BookOpen,
            color: "emerald"
        },
        {
            title: "Diabetes Workout",
            href: "/workouts/diabetes",
            desc: "Exercises proven to naturally lower your HbA1c.",
            icon: Dumbbell,
            color: "purple"
        },
        {
            title: "Ayurvedic Control",
            href: "/ayurveda/diabetes-control",
            desc: "Herbs and practices for holistic blood sugar management.",
            icon: Leaf,
            color: "amber"
        }
    ],
    weight_loss: [
        {
            title: "Weight Loss Diet",
            href: "/plans/obesity",
            desc: "Sustainable Indian meals for long-term fat loss.",
            icon: BookOpen,
            color: "emerald"
        },
        {
            title: "Weight Loss Workout",
            href: "/workouts/weight-loss",
            desc: "Fat-burning cardio and strength building routines.",
            icon: Dumbbell,
            color: "purple"
        },
        {
            title: "Calorie Calculator",
            href: "/tools/calorie-calculator",
            desc: "Calculate your exact daily caloric needs to lose fat.",
            icon: Activity,
            color: "blue"
        }
    ],
    default: [
        {
            title: "Custom Diet Plans",
            href: "/plans",
            desc: "Explore all our condition-specific medical diet configurations.",
            icon: BookOpen,
            color: "emerald"
        },
        {
            title: "Success Stories",
            href: "/success-stories",
            desc: "See how real Indians transformed their bodies using these strategies.",
            icon: Star,
            color: "amber"
        },
        {
            title: "Health Calculators",
            href: "/tools",
            desc: "Track your daily calorie needs, BMI, and protein intake.",
            icon: Activity,
            color: "blue"
        }
    ]
}

const colorMap = {
    emerald: {
        border: "border-l-emerald-500",
        bg: "bg-emerald-100",
        hoverBg: "group-hover:bg-emerald-600",
        text: "text-emerald-700",
        hoverText: "group-hover:text-emerald-700",
        iconHover: "group-hover:text-white"
    },
    amber: {
        border: "border-l-amber-500",
        bg: "bg-amber-100",
        hoverBg: "group-hover:bg-amber-600",
        text: "text-amber-700",
        hoverText: "group-hover:text-amber-700",
        iconHover: "group-hover:text-white"
    },
    blue: {
        border: "border-l-blue-500",
        bg: "bg-blue-100",
        hoverBg: "group-hover:bg-blue-600",
        text: "text-blue-700",
        hoverText: "group-hover:text-blue-700",
        iconHover: "group-hover:text-white"
    },
    purple: {
        border: "border-l-purple-500",
        bg: "bg-purple-100",
        hoverBg: "group-hover:bg-purple-600",
        text: "text-purple-700",
        hoverText: "group-hover:text-purple-700",
        iconHover: "group-hover:text-white"
    }
}

export default function DynamicRelatedContent({ topic }: { topic?: string }) {
    // Map the incoming topic string to our known keys, or fallback to default
    let mappedTopic: TopicKey = "default"

    if (topic) {
        const normalized = topic.toLowerCase()
        if (normalized.includes("pcos") || normalized.includes("pcod")) mappedTopic = "pcos"
        else if (normalized.includes("thyroid") || normalized.includes("hypo") || normalized.includes("hyper")) mappedTopic = "thyroid"
        else if (normalized.includes("diabet")) mappedTopic = "diabetes"
        else if (normalized.includes("weight") || normalized.includes("obesity") || normalized.includes("fat")) mappedTopic = "weight_loss"
    }

    const linksToRender = TOPIC_LINKS[mappedTopic]

    return (
        <section className="py-8 mt-8 border-t border-gray-200">
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">Recommended Next Steps</h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
                {linksToRender.map((link, idx) => {
                    const Icon = link.icon
                    const tColor = colorMap[link.color as keyof typeof colorMap]

                    return (
                        <Card key={idx} className={`hover:shadow-lg transition-shadow border-l-4 ${tColor.border} cursor-pointer overflow-hidden group`}>
                            <CardContent className="p-5">
                                <div className={`mb-3 p-2 ${tColor.bg} w-fit rounded-lg ${tColor.hoverBg} transition-colors`}>
                                    <Icon className={`w-5 h-5 ${tColor.text} ${tColor.iconHover}`} />
                                </div>
                                <h4 className={`font-bold text-lg mb-2 ${tColor.hoverText} transition-colors`}>{link.title}</h4>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                    {link.desc}
                                </p>
                                <Link href={link.href} className={`text-sm font-semibold ${tColor.text} flex items-center hover:underline`}>
                                    View {link.title.split(" ")[0]} <ArrowRight className="w-4 h-4 ml-1" />
                                </Link>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
