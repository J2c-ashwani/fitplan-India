"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Zap, CheckCircle, Info, Flame } from "lucide-react"
import Link from "next/link"

export default function CalorieCalculatorPage() {
    const [calorieData, setCalorieData] = useState({
        age: "",
        gender: "female",
        height: "",
        weight: "",
        activity: "sedentary",
        goal: "maintain",
    })

    const [calorieResult, setCalorieResult] = useState<{
        bmr: number
        maintenance: number
        goal: number
        goalType: string
    } | null>(null)

    const calculateCalories = () => {
        const age = parseInt(calorieData.age)
        const height = parseFloat(calorieData.height)
        const weight = parseFloat(calorieData.weight)

        if (!age || !height || !weight || !calorieData.gender || !calorieData.activity || !calorieData.goal) return

        // Calculate BMR using Mifflin-St Jeor Equation
        let bmr: number
        if (calorieData.gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161
        }

        const activityMultipliers: { [key: string]: number } = {
            sedentary: 1.2,
            light: 1.375,
            moderate: 1.55,
            active: 1.725,
            very_active: 1.9,
        }

        const maintenance = bmr * activityMultipliers[calorieData.activity]

        let goalCalories: number
        let goalType: string
        switch (calorieData.goal) {
            case "lose_fast":
                goalCalories = maintenance - 750
                goalType = "Fast Weight Loss (0.7-0.8 kg/week)"
                break
            case "lose_moderate":
                goalCalories = maintenance - 500
                goalType = "Moderate Weight Loss (0.5 kg/week)"
                break
            case "lose_slow":
                goalCalories = maintenance - 250
                goalType = "Slow Weight Loss (0.25 kg/week)"
                break
            case "maintain":
                goalCalories = maintenance
                goalType = "Maintain Current Weight"
                break
            case "gain":
                goalCalories = maintenance + 300
                goalType = "Weight Gain (0.25 kg/week)"
                break
            default:
                goalCalories = maintenance
                goalType = "Maintain Current Weight"
        }

        setCalorieResult({
            bmr: Math.round(bmr),
            maintenance: Math.round(maintenance),
            goal: Math.round(goalCalories),
            goalType,
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-white text-blue-600 font-semibold">Free Health Tool</Badge>
                        <h1 className="text-4xl font-bold mb-4">Daily Calorie Calculator (BMR & TDEE)</h1>
                        <p className="text-xl opacity-90">Calculate exactly how many calories you need to lose weight, gain muscle, or maintain your current physique.</p>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <Card className="border-2 border-blue-100 shadow-lg">
                                <CardHeader className="bg-blue-50/50">
                                    <CardTitle className="flex items-center gap-2">
                                        <Zap className="w-6 h-6 text-blue-600" />
                                        Calculate Daily Needs
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label>Gender</Label>
                                            <Select value={calorieData.gender} onValueChange={(val) => setCalorieData({ ...calorieData, gender: val })}>
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label htmlFor="age">Age</Label>
                                            <Input
                                                id="age"
                                                type="number"
                                                value={calorieData.age}
                                                onChange={(e) => setCalorieData({ ...calorieData, age: e.target.value })}
                                                className="mt-1"
                                                placeholder="25"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="height">Height (cm)</Label>
                                            <Input
                                                id="height"
                                                type="number"
                                                placeholder="170"
                                                value={calorieData.height}
                                                onChange={(e) => setCalorieData({ ...calorieData, height: e.target.value })}
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="weight">Weight (kg)</Label>
                                            <Input
                                                id="weight"
                                                type="number"
                                                placeholder="70"
                                                value={calorieData.weight}
                                                onChange={(e) => setCalorieData({ ...calorieData, weight: e.target.value })}
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label>Activity Level</Label>
                                        <Select value={calorieData.activity} onValueChange={(val) => setCalorieData({ ...calorieData, activity: val })}>
                                            <SelectTrigger className="mt-1">
                                                <SelectValue placeholder="Select activity" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="sedentary">Sedentary (No exercise)</SelectItem>
                                                <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                                                <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                                                <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                                                <SelectItem value="very_active">Very Active (Physical job/training)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label>Your Goal</Label>
                                        <Select value={calorieData.goal} onValueChange={(val) => setCalorieData({ ...calorieData, goal: val })}>
                                            <SelectTrigger className="mt-1">
                                                <SelectValue placeholder="Select goal" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="lose_fast">Lose Weight Fast</SelectItem>
                                                <SelectItem value="lose_moderate">Lose Weight Moderately</SelectItem>
                                                <SelectItem value="lose_slow">Lose Weight Slowly</SelectItem>
                                                <SelectItem value="maintain">Maintain Weight</SelectItem>
                                                <SelectItem value="gain">Gain Weight</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <Button onClick={calculateCalories} className="w-full bg-blue-600 hover:bg-blue-700 size-lg text-lg">
                                        Calculate Calories
                                    </Button>

                                    {calorieResult && (
                                        <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200 animate-in fade-in slide-in-from-top-4">
                                            <div className="text-center mb-6">
                                                <div className="text-sm text-gray-600 uppercase tracking-wide font-semibold">Daily Calories for Goal</div>
                                                <div className="text-5xl font-bold text-blue-700 my-2">{calorieResult.goal} <span className="text-2xl text-blue-600">kcal</span></div>
                                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                                    {calorieResult.goalType}
                                                </Badge>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-white p-3 rounded border border-blue-100 text-center">
                                                    <div className="text-xs text-gray-500 font-medium">Basal Metabolic Rate (BMR)</div>
                                                    <div className="text-xl font-bold text-gray-800">{calorieResult.bmr}</div>
                                                </div>
                                                <div className="bg-white p-3 rounded border border-blue-100 text-center">
                                                    <div className="text-xs text-gray-500 font-medium">Maintenance Calories (TDEE)</div>
                                                    <div className="text-xl font-bold text-gray-800">{calorieResult.maintenance}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Rich Content for SEO/AdSense */}
                            <div className="mt-12 prose max-w-none text-gray-700">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding BMR & TDEE</h2>
                                <p>
                                    To effectively manage your weight, you need to understand two key numbers: your Basal Metabolic Rate (BMR) and your Total Daily Energy Expenditure (TDEE).
                                </p>
                                <div className="grid md:grid-cols-2 gap-4 my-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2 mb-2"><Flame className="w-4 h-4 text-orange-500" /> BMR</h4>
                                        <p className="text-sm">Calories your body burns just to exist (breathing, circulation) at complete rest. It accounts for about 60-70% of daily burn.</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2 mb-2"><Zap className="w-4 h-4 text-yellow-500" /> TDEE</h4>
                                        <p className="text-sm">Total calories you burn in a day, including exercise and daily movement. This is your "maintenance" number.</p>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">How to use this result?</h3>
                                <p>
                                    The calculator uses the Mifflin-St Jeor equation, considered one of the most accurate equations for estimating BMR. Once you have your goal calories:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Track your food:</strong> Use an app to log what you eat and aim to hit closer to your goal number.</li>
                                    <li><strong>Monitor progress:</strong> Weigh yourself weekly. If weight isn't moving after 2 weeks, adjust calories by +/- 100-200.</li>
                                    <li><strong>Prioritize Protein:</strong> Regardless of calorie goal, ensure you get enough protein to stay satiated and correct muscle mass.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="space-y-6">
                            <Card className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white">
                                <CardHeader>
                                    <CardTitle>Diet Plan for Your goal</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-6 opacity-90">
                                        Calories are just the start. Get a meal plan with delicious recipes that fit your macros.
                                    </p>
                                    <Button variant="secondary" className="w-full font-semibold" asChild>
                                        <Link href="/contact">Get Customized Plan</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Other Tools</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-2">
                                    <Link href="/tools/bmi-calculator" className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition text-blue-700 font-medium">
                                        <CheckCircle className="w-4 h-4" /> BMI Calculator
                                    </Link>
                                    <Link href="/tools/protein-calculator" className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition text-blue-700 font-medium">
                                        <CheckCircle className="w-4 h-4" /> Protein Calculator
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
