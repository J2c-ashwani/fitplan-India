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
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQSection from "@/components/FAQSection"

export default function CalorieCalculatorPage() {
    const breadcrumbItems = [
        { label: "Tools", href: "/tools" },
        { label: "Calorie Calculator", href: "/tools/calorie-calculator" },
    ]

    const faqs = [
        {
            question: "How accurate is this calorie calculator?",
            answer: "This calculator uses the Mifflin-St Jeor equation, which is considered the 'gold standard' for estimating calorie needs. However, it provides an estimate. Your actual metabolism can vary based on genetics, muscle mass, and hormonal health (like Thyroid/PCOS)."
        },
        {
            question: "Should I count vegetable calories?",
            answer: "Generally, no. Green leafy vegetables and fibrous veggies (cucumber, broccoli, spinach) are very low in calories and high in fiber. You can eat them in abundance. Focus on counting calories from grains, oils, dairy, fruits, and proteins."
        },
        {
            question: "How much of a calorie deficit do I need to lose weight?",
            answer: "A safe deficit is 200-500 calories below your maintenance (TDEE). This leads to sustainable weight loss of 0.25-0.5 kg per week. Aggressive deficits (>750 calories) often cause muscle loss and metabolic slowdown."
        },
        {
            question: "Does eating late at night make me gain weight?",
            answer: "No, calories are calories regardless of the time. However, late-night eating often leads to mindless snacking on high-calorie foods. If you stick to your daily calorie limit, meal timing doesn't significantly impact weight loss."
        },
        {
            question: "Why am I not losing weight in a calorie deficit?",
            answer: "Common reasons: 1) Underestimating portions (oils/sauces), 2) Water retention (salty food/hormones), 3) Metabolic adaptation (need a diet break), 4) Medical issues like Hypothyroidism. If stuck for >2 weeks, reassess your tracking accuracy."
        }
    ]

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
                    <div className="mb-6 text-blue-100">
                        <Breadcrumbs items={breadcrumbItems} />
                    </div>
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
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Guide to Caloric Balance</h2>
                                <p>
                                    Weight management often feels complicated, but at its core, it's a game of energy balance. This calculator uses the Mifflin-St Jeor equation (considered the gold standard in clinical settings) to estimate your needs.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Understanding the Numbers</h3>
                                <div className="grid md:grid-cols-2 gap-4 my-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2 mb-2"><Flame className="w-4 h-4 text-orange-500" /> BMR (Basal Metabolic Rate)</h4>
                                        <p className="text-sm">This is what your body burns in a coma. It's the energy needed for breathing, blood circulation, and cell production. Never eat below your BMR without medical supervision.</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-bold flex items-center gap-2 mb-2"><Zap className="w-4 h-4 text-yellow-500" /> TDEE (Total Daily Energy Expenditure)</h4>
                                        <p className="text-sm">This is your BMR + Activity. This is your "maintenance" number. Eating this amount will keep your weight stable.</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Weight Loss Strategy for Indian Diets</h3>
                                <p>
                                    Indian diets are typically high in carbs (Roti, Rice, Idli). You don't need to give them up, but portion control is key.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>The Protein Problem:</strong> Most Indian vegetarian diets lack protein. Aim for Paneer, Dal, Soya, or Curd with every meal to stay full.</li>
                                    <li><strong>Volume Eating:</strong> Fill half your plate with Sabzi (cooked vegetables) or Salad before adding Rice or Roti.</li>
                                    <li><strong>Healthy Swaps:</strong> Replace white rice with Brown Rice or Quinoa, and regular Atta with Multigrain Atta for more fiber.</li>
                                </ul>

                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why Your Weight Fluctuates</h3>
                                <p>
                                    Don't panic if the scale jumps up 1-2 kgs overnight. This is usually water retention caused by:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>High salt intake (Sodium holds water)</li>
                                    <li>Menstrual cycle changes</li>
                                    <li>Heavy workout sessions (Muscles retain water for repair)</li>
                                    <li>Carbohydrate heavy meals</li>
                                </ul>
                                <p className="text-sm text-gray-500 mt-4 italic">
                                    <strong>Disclaimer:</strong> This calculator provides an estimate. Individual results vary based on metabolism, genetics, and health conditions like PCOS or Thyroid. Consult our nutritionists for a precise plan.
                                </p>
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
                                        <Link href="/contact#contact-form">Get Customized Plan</Link>
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

                    {/* FAQ Section */}
                    <section className="py-12 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <FAQSection faqs={faqs} />
                            </div>
                        </div>
                    </section>
                </div>
        </div>
            </section >
        </div >
    )
}
