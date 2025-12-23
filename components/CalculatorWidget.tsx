"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, ArrowRight, RefreshCcw } from "lucide-react"

export default function CalculatorWidget() {
    const [mode, setMode] = useState<"bmi" | "calories">("bmi")
    const [result, setResult] = useState<number | null>(null)

    // Form State
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("") // cm
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("female")
    const [activity, setActivity] = useState("1.2")

    const calculate = () => {
        if (!weight || !height) return

        const w = parseFloat(weight)
        const h = parseFloat(height) / 100 // cm to m

        if (mode === "bmi") {
            const bmi = w / (h * h)
            setResult(parseFloat(bmi.toFixed(1)))
        } else {
            // Mifflin-St Jeor Equation
            if (!age) return
            const a = parseFloat(age)

            let bmr = (10 * w) + (6.25 * parseFloat(height)) - (5 * a)
            if (gender === "male") bmr += 5
            else bmr -= 161

            const tdee = bmr * parseFloat(activity)
            setResult(Math.round(tdee))
        }
    }

    const reset = () => {
        setResult(null)
        setWeight("")
        setHeight("")
        setAge("")
    }

    return (
        <div className="my-8 relative overflow-hidden rounded-2xl border-2 border-emerald-100 bg-gradient-to-br from-emerald-50/50 to-white shadow-lg">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Calculator className="w-32 h-32" />
            </div>

            <div className="p-6 relative z-10">
                {!result ? (
                    <>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="font-bold text-xl text-gray-900">Check Your Numbers</h3>
                                <p className="text-sm text-gray-500">Know where you stand before starting</p>
                            </div>
                            <div className="flex bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setMode("bmi")}
                                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${mode === "bmi" ? "bg-white text-emerald-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    BMI
                                </button>
                                <button
                                    onClick={() => setMode("calories")}
                                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${mode === "calories" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
                                        }`}
                                >
                                    Calories
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="space-y-2">
                                <Label htmlFor="weight">Weight (kg)</Label>
                                <Input
                                    id="weight"
                                    type="number"
                                    placeholder="e.g. 65"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="bg-white/80"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="height">Height (cm)</Label>
                                <Input
                                    id="height"
                                    type="number"
                                    placeholder="e.g. 165"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    className="bg-white/80"
                                />
                            </div>
                        </div>

                        {mode === "calories" && (
                            <>
                                <div className="grid grid-cols-2 gap-4 mb-4 animate-in fade-in zoom-in-95 duration-200">
                                    <div className="space-y-2">
                                        <Label htmlFor="age">Age</Label>
                                        <Input
                                            id="age"
                                            type="number"
                                            placeholder="e.g. 30"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            className="bg-white/80"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gender">Gender</Label>
                                        <Select value={gender} onValueChange={setGender}>
                                            <SelectTrigger className="bg-white/80">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="female">Female</SelectItem>
                                                <SelectItem value="male">Male</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="mb-4 animate-in fade-in zoom-in-95 duration-200">
                                    <Label htmlFor="activity">Activity Level</Label>
                                    <Select value={activity} onValueChange={setActivity}>
                                        <SelectTrigger className="bg-white/80">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1.2">Sedentary (Office Job)</SelectItem>
                                            <SelectItem value="1.375">Light Exercise (1-2 days)</SelectItem>
                                            <SelectItem value="1.55">Moderate Exercise (3-5 days)</SelectItem>
                                            <SelectItem value="1.725">Heavy Exercise (6-7 days)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </>
                        )}

                        <Button
                            onClick={calculate}
                            className={`w-full font-bold ${mode === "bmi" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            Calculate {mode === "bmi" ? "BMI" : "Calories"} <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </>
                ) : (
                    <div className="text-center py-4 animate-in zoom-in-90 duration-300">
                        <h4 className="text-gray-500 font-medium mb-1">Your {mode.toUpperCase()} is</h4>
                        <div className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
                            {result}
                            <span className="text-lg font-normal text-gray-400 ml-1">
                                {mode === "bmi" ? "" : "kcal"}
                            </span>
                        </div>

                        <p className="text-sm font-medium mb-6 px-4 py-2 rounded-full inline-block bg-white shadow-sm border border-gray-100">
                            {mode === "bmi"
                                ? result < 18.5 ? "Underweight" : result < 25 ? "Healthy Weight ✅" : result < 30 ? "Overweight" : "Obese ⚠️"
                                : "Daily maintenance calories"
                            }
                        </p>

                        <Button onClick={reset} variant="outline" size="sm" className="mx-auto flex items-center">
                            <RefreshCcw className="w-3 h-3 mr-2" /> Recalculate
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
