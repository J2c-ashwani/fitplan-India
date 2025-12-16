"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Droplets, CheckCircle, Info } from "lucide-react"
import Link from "next/link"

export default function WaterCalculatorPage() {
    const [waterData, setWaterData] = useState({
        weight: "",
        activity: "moderate",
        climate: "moderate",
    })

    const [waterResult, setWaterResult] = useState<{
        liters: number
        glasses: number
        advice: string
    } | null>(null)

    const calculateWater = () => {
        const weight = parseFloat(waterData.weight)
        if (!weight || !waterData.activity || !waterData.climate) return

        // Base: 35ml per kg
        const baseWater = weight * 0.035

        const activityAdjustments: { [key: string]: number } = {
            low: 0,
            moderate: 0.5,
            high: 1.0,
            very_high: 1.5,
        }

        const climateAdjustments: { [key: string]: number } = {
            cool: 0,
            moderate: 0.2,
            hot: 0.5,
            very_hot: 0.8,
        }

        const totalWater = baseWater + activityAdjustments[waterData.activity] + climateAdjustments[waterData.climate]
        const glasses = Math.round(totalWater / 0.25) // 250ml glass

        let advice: string
        if (totalWater < 2) {
            advice = "Your calculated need is quite low. Ensure you drink at least 2 liters to support basic bodily functions."
        } else if (totalWater > 4) {
            advice = "Your needs are high! Spread intake throughout the day. Don't drink massive amounts at once."
        } else {
            advice = "This amount should keep you optimally hydrated for energy and digestion."
        }

        setWaterResult({
            liters: Math.round(totalWater * 10) / 10,
            glasses,
            advice,
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-white text-cyan-600 font-semibold">Free Health Tool</Badge>
                        <h1 className="text-4xl font-bold mb-4">Daily Water Intake Calculator</h1>
                        <p className="text-xl opacity-90">Find out exactly how much water you should drink daily based on your body weight, activity level, and climate.</p>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <Card className="border-2 border-cyan-100 shadow-lg">
                                <CardHeader className="bg-cyan-50/50">
                                    <CardTitle className="flex items-center gap-2">
                                        <Droplets className="w-6 h-6 text-cyan-600" />
                                        Calculate Hydration Needs
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-6">

                                    <div>
                                        <Label htmlFor="weight">Weight (kg)</Label>
                                        <Input
                                            id="weight"
                                            type="number"
                                            placeholder="70"
                                            value={waterData.weight}
                                            onChange={(e) => setWaterData({ ...waterData, weight: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label>Activity Level</Label>
                                            <Select value={waterData.activity} onValueChange={(val) => setWaterData({ ...waterData, activity: val })}>
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="low">Low (Minimal)</SelectItem>
                                                    <SelectItem value="moderate">Moderate (30-60min)</SelectItem>
                                                    <SelectItem value="high">High (1-2 hr)</SelectItem>
                                                    <SelectItem value="very_high">Athletic (2hr+)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label>Climate</Label>
                                            <Select value={waterData.climate} onValueChange={(val) => setWaterData({ ...waterData, climate: val })}>
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="cool">Cool</SelectItem>
                                                    <SelectItem value="moderate">Moderate</SelectItem>
                                                    <SelectItem value="hot">Hot (Indian Summer)</SelectItem>
                                                    <SelectItem value="very_hot">Very Hot/Humid</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <Button onClick={calculateWater} className="w-full bg-cyan-600 hover:bg-cyan-700 size-lg text-lg">
                                        Calculate Water Needs
                                    </Button>

                                    {waterResult && (
                                        <div className="mt-6 p-6 bg-cyan-50 rounded-lg border border-cyan-200 animate-in fade-in slide-in-from-top-4">
                                            <div className="text-center">
                                                <div className="text-sm text-gray-600 uppercase tracking-wide font-semibold">Your Daily Target</div>
                                                <div className="text-5xl font-bold text-cyan-600 my-2">{waterResult.liters} L</div>
                                                <div className="text-lg text-gray-700 font-medium">approx {waterResult.glasses} glasses</div>
                                            </div>
                                            <div className="mt-6 p-4 bg-white rounded border border-cyan-100">
                                                <h4 className="font-semibold text-cyan-800 mb-2 flex items-center gap-2">
                                                    <Info className="w-4 h-4" /> Hydration Tip
                                                </h4>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {waterResult.advice}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Rich Content for SEO */}
                            <div className="mt-12 prose max-w-none text-gray-700">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Hydration is Critical for Weight Loss</h2>
                                <p>
                                    Water is often the missing piece in the weight loss puzzle. Drinking enough water boosts metabolism by up to 30% for over an hour. It also helps the body flush out toxins released during fat burning.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Signs of Dehydration</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Fatigue:</strong> Even mild dehydration can drain your energy.</li>
                                    <li><strong>False Hunger:</strong> Thirst is often mistaken for hunger, leading to overeating.</li>
                                    <li><strong>Headaches:</strong> Identify if that afternoon headache is just a water signal.</li>
                                    <li><strong>Skin Issues:</strong> Hydration is key for glowing, clear skin.</li>
                                </ul>
                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Best Times to Drink Water</h3>
                                <p>
                                    Drink 2 glasses immediately upon waking to kickstart your organs. Drink 1 glass 30 minutes before meals to aid digestion and control appetite. Avoid heavy drinking during meals to prevent diluting digestive enzymes.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="space-y-6">
                            <Card className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                                <CardHeader>
                                    <CardTitle>Detox Water Recipes?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-6 opacity-90">
                                        Get our free guide on detox waters to boost metabolism. Included in our diet plans.
                                    </p>
                                    <Button variant="secondary" className="w-full font-semibold" asChild>
                                        <Link href="/contact">Get Plans</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Other Tools</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-2">
                                    <Link href="/tools/bmi-calculator" className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition text-cyan-700 font-medium">
                                        <CheckCircle className="w-4 h-4" /> BMI Calculator
                                    </Link>
                                    <Link href="/tools/calorie-calculator" className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition text-cyan-700 font-medium">
                                        <CheckCircle className="w-4 h-4" /> Calorie Calculator
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
