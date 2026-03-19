"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, ChevronRight, Activity, AlertCircle, Sparkles } from "lucide-react"
import Link from "next/link"

// PCOS Calculator Logic
const questions = [
  {
    id: "cycle",
    question: "How long is your typical menstrual cycle?",
    options: [
      { text: "Regular (21-35 days)", score: 0 },
      { text: "Irregular (Over 35 days)", score: 3 },
      { text: "Absent/No periods without medication", score: 5 },
    ]
  },
  {
    id: "weight",
    question: "Do you struggle to lose weight despite dieting and exercising?",
    options: [
      { text: "No, I lose weight normally", score: 0 },
      { text: "Yes, it takes extremely strict dieting to lose 1 kg", score: 3 },
      { text: "Yes, I am gaining weight rapidly around my belly", score: 5 },
    ]
  },
  {
    id: "cravings",
    question: "How often do you experience intense sugar or carbohydrate cravings?",
    options: [
      { text: "Rarely", score: 0 },
      { text: "Sometimes (usually around my period)", score: 1 },
      { text: "Almost every day (especially after meals)", score: 4 },
    ]
  },
  {
    id: "fatigue",
    question: "Do you experience severe energy crashes or fatigue in the afternoon?",
    options: [
      { text: "Never", score: 0 },
      { text: "Sometimes", score: 2 },
      { text: "Yes, I constantly feel exhausted", score: 4 },
    ]
  },
  {
    id: "physical",
    question: "Do you notice any of these physical symptoms?",
    options: [
      { text: "None of these", score: 0 },
      { text: "Acne on jawline or mild hair thinning", score: 3 },
      { text: "Dark skin patches (neck/armpits) or excessive facial hair", score: 5 },
    ]
  }
]

export default function PCOSCalculator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResult, setShowResult] = useState(false)

  const handleSelectOption = (score: number) => {
    const currentQuestion = questions[currentStep]
    setAnswers({ ...answers, [currentQuestion.id]: score })

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const restart = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResult(false)
  }

  // Calculate Risk
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0)
  
  let riskLevel = "Low"
  let description = ""
  let recommendation = ""
  let colorClass = ""
  
  if (totalScore >= 15) {
    riskLevel = "High (Likely Insulin-Resistant PCOS)"
    description = "Your symptoms strongly indicate Insulin Resistance, which is the root cause of weight gain for 70% of women with PCOS. Your body is overproducing insulin, which forces your ovaries to produce excess testosterone and stores everything you eat as stubborn belly fat."
    recommendation = "You need an immediate Anti-Inflammatory, Low-Glycemic Medical Diet. Generic 'eat less, move more' advice will only make your hormones worse."
    colorClass = "text-rose-600 bg-rose-50 border-rose-200"
  } else if (totalScore >= 7) {
    riskLevel = "Moderate (Watch Your Blood Sugar)"
    description = "You are showing early warning signs of insulin resistance or hormonal imbalance. While it may not be severe yet, your metabolism is struggling to process carbohydrates efficiently."
    recommendation = "A specialized PCOS diet combining complex carbs with proteins can reverse these symptoms before they develop into full-blown metabolic syndrome."
    colorClass = "text-amber-600 bg-amber-50 border-amber-200"
  } else {
    riskLevel = "Low (Metabolically Healthy)"
    description = "Great news! Your symptoms do not strongly indicate insulin resistance. Your weight challenges might be related to other factors like stress, simple calorie imbalances, or standard hormonal fluctuations."
    recommendation = "Focus on a balanced diet and regular exercise to maintain your healthy metabolism."
    colorClass = "text-emerald-600 bg-emerald-50 border-emerald-200"
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">Free Medical Tool</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">PCOS Insulin Resistance Calculator</h1>
          <p className="text-lg text-gray-600">
            Find out if Insulin Resistance is the hidden reason you can't lose weight with PCOS. Takes 60 seconds.
          </p>
        </div>

        {!showResult ? (
          <Card className="border-2 shadow-xl">
            <CardHeader className="bg-gray-50 border-b">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Question {currentStep + 1} of {questions.length}</span>
                <span className="text-sm font-medium text-emerald-600">{Math.round(((currentStep) / questions.length) * 100)}% Complete</span>
              </div>
              <Progress value={((currentStep) / questions.length) * 100} className="h-2" />
              <CardTitle className="text-2xl mt-6">{questions[currentStep].question}</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelectOption(option.score)}
                    className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group flex items-center justify-between"
                  >
                    <span className="font-medium text-gray-700 group-hover:text-emerald-800">{option.text}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className={`border-2 shadow-xl overflow-hidden ${colorClass}`}>
              <div className="bg-white/50 border-b p-6 text-center">
                <Activity className={`w-12 h-12 mx-auto mb-4 ${colorClass.split(' ')[0]}`} />
                <h2 className="text-xl font-semibold text-gray-600 uppercase tracking-widest mb-2">Your Risk Level</h2>
                <div className={`text-4xl font-extrabold ${colorClass.split(' ')[0]}`}>{riskLevel}</div>
              </div>
              <CardContent className="p-8 bg-white">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-gray-500" />
                    What this means for your body:
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-500" />
                    Medical Recommendation:
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">{recommendation}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-600 shadow-xl bg-gradient-to-br from-emerald-600 to-green-700 text-white overflow-hidden">
              <CardContent className="p-10 text-center">
                <h3 className="text-3xl font-bold mb-4">You Don't Have to Fight This Alone</h3>
                <p className="text-lg text-emerald-50 mb-8 max-w-xl mx-auto">
                  Dr. Arti specializes in reversing Insulin Resistance through targeted Indian Medical Nutrition Therapy. Stop starving yourself and start healing your hormones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 font-bold text-lg px-8 py-6 h-auto" asChild>
                    <Link href="/plans/pcos">View PCOD/PCOS Diet Plan</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-bold text-lg px-8 py-6 h-auto bg-transparent" asChild>
                    <Link href="/contact#contact-form">Book Dr. Arti Consultation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <Button variant="ghost" onClick={restart} className="text-gray-500 hover:text-gray-800">
                Retake the test
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${className}`}>{children}</span>
}
