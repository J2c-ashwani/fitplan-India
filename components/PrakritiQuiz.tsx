"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ArrowRight, RefreshCcw, Leaf, Flame, Droplets, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import PriceDisplay from "@/components/PriceDisplay"

type Option = {
    text: string
    type: "Vata" | "Pitta" | "Kapha"
}

type Question = {
    id: number
    question: string
    options: Option[]
}

const questions: Question[] = [
    {
        id: 1,
        question: "How would you describe your body frame?",
        options: [
            { text: "Thin, bony, easy to lose weight", type: "Vata" },
            { text: "Medium build, good muscle definition", type: "Pitta" },
            { text: "Broad, sturdy, tends to gain weight", type: "Kapha" },
        ],
    },
    {
        id: 2,
        question: "How is your skin mostly?",
        options: [
            { text: "Dry, rough, thin", type: "Vata" },
            { text: "Sensitive, reddish, prone to acne", type: "Pitta" },
            { text: "Oily, smooth, thick", type: "Kapha" },
        ],
    },
    {
        id: 3,
        question: "How is your appetite?",
        options: [
            { text: "Irregular: sometimes hungry, sometimes not", type: "Vata" },
            { text: "Strong, sharp hunger (gets angry if delayed)", type: "Pitta" },
            { text: "Steady, low, can skip meals easily", type: "Kapha" },
        ],
    },
    {
        id: 4,
        question: "How do you react to weather?",
        options: [
            { text: "I hate the cold and wind", type: "Vata" },
            { text: "I hate the heat and humidity", type: "Pitta" },
            { text: "I dislike damp and cool weather", type: "Kapha" },
        ],
    },
    {
        id: 5,
        question: "How is your sleep pattern?",
        options: [
            { text: "Light, interrupted, often have insomnia", type: "Vata" },
            { text: "Moderate, but wake up alert", type: "Pitta" },
            { text: "Deep, heavy, hard to wake up", type: "Kapha" },
        ],
    },
    {
        id: 6,
        question: "How is your typical energy level?",
        options: [
            { text: "Comes in bursts, low stamina", type: "Vata" },
            { text: "Moderate, focused, competitive", type: "Pitta" },
            { text: "Slow to start but excellent stamina", type: "Kapha" },
        ],
    },
    {
        id: 7,
        question: "How is your digestion usually?",
        options: [
            { text: "Gassy, bloated, constipated", type: "Vata" },
            { text: "Fast metabolism, prone to acidity", type: "Pitta" },
            { text: "Slow metabolism, heavy feeling", type: "Kapha" },
        ],
    },
    {
        id: 8,
        question: "When stressed, how do you react?",
        options: [
            { text: "Anxious, worried, fearful", type: "Vata" },
            { text: "Irritable, critical, angry", type: "Pitta" },
            { text: "Withdrawn, stubborn, emotional eating", type: "Kapha" },
        ],
    },
]

type DoshaResult = "Vata" | "Pitta" | "Kapha"

const resultData = {
    Vata: {
        color: "blue",
        icon: Leaf,
        element: "Air + Space",
        traits: ["Creative", "Energetic", "Quick Learner"],
        challenges: ["Anxiety", "Dry Skin", "Digestion Issues"],
        dietTip: "Eat warm, oily, cooked foods. Avoid raw salads and cold drinks.",
        lifestyleTip: "Routine helps ground you. Sleep early and oil massage daily.",
    },
    Pitta: {
        color: "red",
        icon: Flame,
        element: "Fire + Water",
        traits: ["Sharp Intellect", "Determined", "Good Leader"],
        challenges: ["Anger", "Acidity", "Skin Rashes"],
        dietTip: "Eat cooling, sweet, bitter foods. Avoid spicy and fried food.",
        lifestyleTip: "Avoid overheating. Spend time in nature and practice cooling breathwork.",
    },
    Kapha: {
        color: "green",
        icon: Droplets,
        element: "Earth + Water",
        traits: ["Calm", "Loyal", "Strong Stamina"],
        challenges: ["Weight Gain", "Lethargy", "Congestion"],
        dietTip: "Eat light, warm, dry, spicy foods. Avoid heavy sweets and dairy.",
        lifestyleTip: "Vigorous exercise daily. Wake up early before sunrise.",
    },
}

export default function PrakritiQuiz() {
    const [currentQ, setCurrentQ] = useState(0)
    const [scores, setScores] = useState({ Vata: 0, Pitta: 0, Kapha: 0 })
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState<DoshaResult | null>(null)

    const handleAnswer = (type: "Vata" | "Pitta" | "Kapha") => {
        const newScores = { ...scores, [type]: scores[type] + 1 }
        setScores(newScores)

        if (currentQ < questions.length - 1) {
            setCurrentQ(currentQ + 1)
        } else {
            calculateResult(newScores)
        }
    }

    const calculateResult = (finalScores: typeof scores) => {
        const maxScore = Math.max(finalScores.Vata, finalScores.Pitta, finalScores.Kapha)
        if (finalScores.Vata === maxScore) setResult("Vata")
        else if (finalScores.Pitta === maxScore) setResult("Pitta")
        else setResult("Kapha")
        setShowResult(true)
    }

    const resetQuiz = () => {
        setScores({ Vata: 0, Pitta: 0, Kapha: 0 })
        setCurrentQ(0)
        setShowResult(false)
        setResult(null)
    }

    if (showResult && result) {
        const data = resultData[result]
        const Icon = data.icon

        // Safety check for color mapping
        const colorClasses = {
            blue: "bg-blue-50 text-blue-700 border-blue-200",
            red: "bg-red-50 text-red-700 border-red-200",
            green: "bg-green-50 text-green-700 border-green-200"
        }
        const bgClass = colorClasses[data.color as keyof typeof colorClasses]

        return (
            <div className="w-full max-w-2xl mx-auto">
                <Card className={`border-2 ${bgClass}`}>
                    <CardContent className="pt-8 pb-8 text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                                <Icon className="w-10 h-10" />
                            </div>

                            <h2 className="text-3xl font-bold mb-2">You are Predominantly {result}</h2>
                            <p className="text-lg opacity-80 mb-6 font-medium">Element: {data.element}</p>

                            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
                                <div className="bg-white/60 p-4 rounded-xl">
                                    <h4 className="font-bold mb-2 flex items-center gap-2">✨ Your Superpowers</h4>
                                    <ul className="text-sm space-y-1">
                                        {data.traits.map(t => <li key={t}>• {t}</li>)}
                                    </ul>
                                </div>
                                <div className="bg-white/60 p-4 rounded-xl">
                                    <h4 className="font-bold mb-2 flex items-center gap-2">⚠️ Watch Out For</h4>
                                    <ul className="text-sm space-y-1">
                                        {data.challenges.map(c => <li key={c}>• {c}</li>)}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm text-left mb-8">
                                <h3 className="font-bold text-lg mb-4 text-gray-900 border-b pb-2">Dr. Arti's Prescription for {result}</h3>

                                <div className="space-y-4">
                                    <div>
                                        <span className="font-semibold text-emerald-700 block mb-1">🥗 Dietary Focus:</span>
                                        <p className="text-gray-700 text-sm">{data.dietTip}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-emerald-700 block mb-1">🧘‍♀️ Lifestyle Fix:</span>
                                        <p className="text-gray-700 text-sm">{data.lifestyleTip}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button onClick={resetQuiz} variant="outline" className="border-gray-400">
                                    <RefreshCcw className="w-4 h-4 mr-2" /> Retake Quiz
                                </Button>
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                                    <Link href="/contact#contact-form">
                                        Get Full {result} Diet Plan - <PriceDisplay amountIn={500} amountUs={50} />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const question = questions[currentQ]

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-500 mb-2 font-medium">
                    <span>Question {currentQ + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQ) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQ) / questions.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQ}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <Card className="border-emerald-100 shadow-lg">
                        <CardContent className="pt-8 pb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center leading-snug">
                                {question.question}
                            </h3>

                            <div className="space-y-4">
                                {question.options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(option.type)}
                                        className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all flex items-center justify-between group"
                                    >
                                        <span className="text-lg text-gray-700 font-medium group-hover:text-emerald-900">{option.text}</span>
                                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-emerald-600" />
                                    </button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
