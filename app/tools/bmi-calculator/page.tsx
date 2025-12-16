"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Target, CheckCircle, AlertCircle, Info } from "lucide-react"
import Link from "next/link"

export default function BMICalculatorPage() {
    const [bmiData, setBmiData] = useState({
        height: "",
        weight: "",
        unit: "metric", // Default to metric for India
    })

    const [bmiResult, setBmiResult] = useState<{
        bmi: number
        category: string
        color: string
        advice: string
    } | null>(null)

    const calculateBMI = () => {
        const height = parseFloat(bmiData.height)
        const weight = parseFloat(bmiData.weight)

        if (!height || !weight) return

        let bmi: number
        if (bmiData.unit === "metric") {
            // Height in cm to meters
            bmi = weight / ((height / 100) * (height / 100))
        } else {
            // Height in feet.inches (e.g., 5.7) needs conversion or just use inches?
            // Standard input usually asks for feet and inches separately or pure inches. 
            // The original code assumed direct calculation: (weight / (height * height)) * 703
            // But user input might be 5.7 for 5ft 7in. 5.7 feet is 5' 8.4". 
            // Let's assume input is in inches for calculation simplicity or handle decimal feet.
            // For simplicity matching original: assuming input is total inches or decimal feet?
            // Original: bmi = (weight / (height * height)) * 703. This implies height in inches.
            // We should probably clarify UI or assume inches. Let's stick to original logic but improve UI text.
            bmi = (weight / (height * height)) * 703
        }

        let category: string
        let color: string
        let advice: string

        if (bmi < 18.5) {
            category = "Underweight"
            color = "text-blue-600"
            advice = "You are in the underweight range. It's important to eat a balanced diet and include nutrient-dense foods to reach a healthy weight. Consult our nutritionists for a weight gain plan."
        } else if (bmi < 25) {
            category = "Normal Weight"
            color = "text-emerald-600"
            advice = "Great job! You are in the healthy weight range. Maintain your weight with a balanced diet and regular physical activity."
        } else if (bmi < 30) {
            category = "Overweight"
            color = "text-orange-600"
            advice = "You are in the overweight range. Losing a small amount of weight can provide significant health benefits. Consider our weight loss plans."
        } else {
            category = "Obese"
            color = "text-red-600"
            advice = "You fall into the obese category, which may increase risk for certain health conditions. We highly recommend consulting a healthcare provider or joining our medical weight loss program."
        }

        setBmiResult({
            bmi: Math.round(bmi * 10) / 10,
            category,
            color,
            advice,
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-emerald-600 to-green-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-white text-emerald-600 font-semibold">Free Health Tool</Badge>
                        <h1 className="text-4xl font-bold mb-4">BMI Calculator India</h1>
                        <p className="text-xl opacity-90">Calculate your Body Mass Index (BMI) accurately and check if you are in a healthy weight range.</p>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <Card className="border-2 border-emerald-100 shadow-lg">
                                <CardHeader className="bg-emerald-50/50">
                                    <CardTitle className="flex items-center gap-2">
                                        <Target className="w-6 h-6 text-emerald-600" />
                                        Calculate Your BMI
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label>Unit System</Label>
                                            <Select value={bmiData.unit} onValueChange={(val) => setBmiData({ ...bmiData, unit: val })}>
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="metric">Metric (kg, cm)</SelectItem>
                                                    <SelectItem value="imperial">Imperial (lbs, inches)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="height">Height {bmiData.unit === 'metric' ? '(cm)' : '(inches)'}</Label>
                                            <Input
                                                id="height"
                                                type="number"
                                                placeholder={bmiData.unit === 'metric' ? "170" : "67"}
                                                value={bmiData.height}
                                                onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })}
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="weight">Weight {bmiData.unit === 'metric' ? '(kg)' : '(lbs)'}</Label>
                                            <Input
                                                id="weight"
                                                type="number"
                                                placeholder={bmiData.unit === 'metric' ? "70" : "154"}
                                                value={bmiData.weight}
                                                onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })}
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>

                                    <Button onClick={calculateBMI} className="w-full bg-emerald-600 hover:bg-emerald-700 size-lg text-lg">
                                        Calculate BMI
                                    </Button>

                                    {bmiResult && (
                                        <div className="mt-6 p-6 bg-emerald-50 rounded-lg border border-emerald-200 animate-in fade-in slide-in-from-top-4">
                                            <div className="text-center">
                                                <div className="text-sm text-gray-600 uppercase tracking-wide font-semibold">Your BMI</div>
                                                <div className="text-5xl font-bold text-emerald-700 my-2">{bmiResult.bmi}</div>
                                                <Badge className={`text-lg px-4 py-1 ${bmiResult.color.replace('text-', 'bg-').replace('600', '100')} ${bmiResult.color}`}>
                                                    {bmiResult.category}
                                                </Badge>
                                            </div>
                                            <div className="mt-6 p-4 bg-white rounded border border-emerald-100">
                                                <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                                                    <Info className="w-4 h-4" /> Recommendation
                                                </h4>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {bmiResult.advice}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Rich Content for SEO/AdSense */}
                            <div className="mt-12 prose max-w-none text-gray-700">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is BMI?</h2>
                                <p>
                                    Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m² where kg is a person's weight in kilograms and m² is their height in meters squared. A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9. BMI applies to most adults 18-65 years.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Why BMI Matters for Indian Health</h3>
                                <p>
                                    For the Indian population, health risks often start at a lower BMI compared to global standards. The Asian cutoff for overweight is often considered 23.0 instead of 25.0 due to higher risk of diabetes and cardiovascular issues at lower body weights. Maintaining a healthy BMI is crucial for preventing lifestyle diseases like Type 2 Diabetes, Hypertension, and PCOD/PCOS.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Calculate, Track, and Improve</h3>
                                <p>
                                    Use our free BMI calculator India tool regularly to track your progress. Whether your goal is weight loss, muscle gain, or maintenance, knowing your starting point is key.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="space-y-6">
                            <Card className="bg-gradient-to-br from-emerald-600 to-green-700 text-white">
                                <CardHeader>
                                    <CardTitle>Need Expert Help?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-6 opacity-90">
                                        Get a personalized diet plan tailored to your BMI and health goals.
                                    </p>
                                    <Button variant="secondary" className="w-full font-semibold" asChild>
                                        <Link href="/contact">Book Consultation</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Other Tools</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-2">
                                    <Link href="/tools/calorie-calculator" className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition text-emerald-700 font-medium">
                                        <CheckCircle className="w-4 h-4" /> Calorie Calculator
                                    </Link>
                                    <Link href="/tools/protein-calculator" className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition text-emerald-700 font-medium">
                                        <CheckCircle className="w-4 h-4" /> Protein Calculator
                                    </Link>
                                    <Link href="/tools/water-intake-calculator" className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition text-emerald-700 font-medium">
                                        <CheckCircle className="w-4 h-4" /> Water Calculator
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
