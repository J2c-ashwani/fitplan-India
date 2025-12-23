"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Activity, CheckCircle, Info, Database } from "lucide-react"
import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"
import FAQSection from "@/components/FAQSection"

export default function ProteinCalculatorPage() {
    const breadcrumbItems = [
        { label: "Tools", href: "/tools" },
        { label: "Protein Calculator", href: "/tools/protein-calculator" },
    ]

    const faqs = [
        {
            question: "Is it safe to eat a high protein diet?",
            answer: "For healthy individuals with normal kidney function, high protein diets (up to 2g-2.5g per kg) are perfectly safe. They help with satiety, metabolism, and muscle repair. However, if you have pre-existing kidney conditions, consult a doctor first."
        },
        {
            question: "Do I need protein powder to build muscle?",
            answer: "No, protein powder is just a convenient source of high-quality protein (like powdered milk/curd). You can absolutely build muscle eating chicken, eggs, soya, paneer, and dal. Supplements are helpful only if you struggle to meet your daily target through food alone."
        },
        {
            question: "What is the best vegetarian protein source?",
            answer: "Soya chunks contain the highest protein (52g per 100g), followed by Paneer, Tofu, and Lentils. Combining grains (Rice/Roti) with pulses (Dal/Rajma) creates a 'complete protein' with all essential amino acids."
        },
        {
            question: "How much protein do I need for weight loss?",
            answer: "Protein is critical for weight loss to prevent muscle loss. Aim for 1.2g to 1.6g per kg of body weight. This keeps you full longer and burns more calories during digestion compared to carbs or fats."
        },
        {
            question: "Can I eat all my protein in one meal?",
            answer: "It's better to spread protein intake across 3-4 meals (e.g., 20-30g per meal). This maximizes muscle protein synthesis throughout the day. Your body can absorb large amounts, but utilizing it for muscle building is more efficient with frequent doses."
        }
    ]

    const [proteinData, setProteinData] = useState({
        weight: "",
        activity: "moderate",
        goal: "maintenance",
        age: "",
    })

    const [proteinResult, setProteinResult] = useState<{
        grams: number
        advice: string
        sources: string[]
    } | null>(null)

    const calculateProtein = () => {
        const weight = parseFloat(proteinData.weight)
        const age = parseInt(proteinData.age)

        if (!weight || !age || !proteinData.activity || !proteinData.goal) return

        let proteinPerKg: number

        // Activity Base (Sedentary 0.8 is RDI, but optimization requires more)
        switch (proteinData.activity) {
            case "sedentary": proteinPerKg = 0.8; break;
            case "light": proteinPerKg = 1.0; break;
            case "moderate": proteinPerKg = 1.2; break;
            case "active": proteinPerKg = 1.4; break;
            case "very_active": proteinPerKg = 1.6; break;
            default: proteinPerKg = 0.8;
        }

        if (proteinData.goal === "muscle_gain") proteinPerKg += 0.4
        if (proteinData.goal === "weight_loss") proteinPerKg += 0.3 // High protein spares muscle in deficit

        if (age > 50) proteinPerKg += 0.2 // Sarcopenia prevention

        const totalProtein = Math.round(weight * proteinPerKg)

        let advice: string
        if (totalProtein < 50) {
            advice = "Aim to include protein in every single meal."
        } else if (totalProtein > 150) {
            advice = "This is a high target. Consider whey protein supplements to help reach it."
        } else {
            advice = "This target is very achievable with whole foods."
        }

        setProteinResult({
            grams: totalProtein,
            advice,
            sources: [
                "Chicken Breast (31g/100g)",
                "Soya Chunks (52g/100g)",
                "Paneer/Cottage Cheese (18g/100g)",
                "Lentils/Dal (9g/100g cooked)",
                "Greek Yogurt (10g/100g)",
                "Eggs (6g per egg)",
                "Fish (20-25g/100g)",
                "Whey Protein (24g per scoop)"
            ]
        })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-6 text-purple-100">
                        <Breadcrumbs items={breadcrumbItems} />
                    </div>
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-4 bg-white text-purple-600 font-semibold">Free Health Tool</Badge>
                        <h1 className="text-4xl font-bold mb-4">Daily Protein Calculator</h1>
                        <p className="text-xl opacity-90">Calculate optimal protein intake for muscle growth, fat loss, or general health maintenance.</p>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <Card className="border-2 border-purple-100 shadow-lg">
                                <CardHeader className="bg-purple-50/50">
                                    <CardTitle className="flex items-center gap-2">
                                        <Activity className="w-6 h-6 text-purple-600" />
                                        Calculate Protein Needs
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-6">

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="weight">Weight (kg)</Label>
                                            <Input
                                                id="weight"
                                                type="number"
                                                placeholder="70"
                                                value={proteinData.weight}
                                                onChange={(e) => setProteinData({ ...proteinData, weight: e.target.value })}
                                                className="mt-1"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="age">Age</Label>
                                            <Input
                                                id="age"
                                                type="number"
                                                placeholder="30"
                                                value={proteinData.age}
                                                onChange={(e) => setProteinData({ ...proteinData, age: e.target.value })}
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label>Activity Level</Label>
                                            <Select value={proteinData.activity} onValueChange={(val) => setProteinData({ ...proteinData, activity: val })}>
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="sedentary">Sedentary</SelectItem>
                                                    <SelectItem value="light">Light Activity</SelectItem>
                                                    <SelectItem value="moderate">Moderate Activity</SelectItem>
                                                    <SelectItem value="active">Active Gym Goer</SelectItem>
                                                    <SelectItem value="very_active">Athlete</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label>Goal</Label>
                                            <Select value={proteinData.goal} onValueChange={(val) => setProteinData({ ...proteinData, goal: val })}>
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="maintenance">Maintenance</SelectItem>
                                                    <SelectItem value="weight_loss">Fat Loss (High Protein)</SelectItem>
                                                    <SelectItem value="muscle_gain">Build Muscle</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <Button onClick={calculateProtein} className="w-full bg-purple-600 hover:bg-purple-700 size-lg text-lg">
                                        Calculate Protein
                                    </Button>

                                    {proteinResult && (
                                        <div className="mt-6 p-6 bg-purple-50 rounded-lg border border-purple-200 animate-in fade-in slide-in-from-top-4">
                                            <div className="text-center">
                                                <div className="text-sm text-gray-600 uppercase tracking-wide font-semibold">Daily Protein Target</div>
                                                <div className="text-5xl font-bold text-purple-700 my-2">{proteinResult.grams}g</div>
                                            </div>
                                            <div className="mt-6">
                                                <h4 className="font-semibold text-purple-800 mb-2">Top Sources for You:</h4>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {proteinResult.sources.map((s, i) => (
                                                        <div key={i} className="flex items-center text-sm text-gray-700 bg-white p-2 rounded shadow-sm">
                                                            <CheckCircle className="w-3 h-3 text-purple-500 mr-2" /> {s}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Rich Content for SEO */}
                            <div className="mt-12 prose max-w-none text-gray-700">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Importance of Protein</h2>
                                <p>
                                    Protein is the building block of life. It is essential for repairing tissues, making hormones, and building muscle. For weight loss, protein is the "king of nutrients" because it has a high thermic effect (you burn calories digesting it) and it keeps you full longer than carbs or fats.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">How much is too much?</h3>
                                <p>
                                    The general safe upper limit is around 2g per kg of body weight for most active individuals. Consistently exceeding this without heavy training may not provide additional benefits. Our calculator stays within safe evidence-based ranges.
                                </p>
                                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Vegetarian Protein Sources</h3>
                                <p>
                                    In India, many people are vegetarian. Great sources include Paneer, Soya Chunks (Meal maker), Lentils (Dal), Chickpeas (Chana), Greek Yogurt (Curd), and Whey Protein supplements. Mixing grains and legumes (like Rice + Dal) ensures a complete amino acid profile.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="space-y-6">
                            <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
                                <CardHeader>
                                    <CardTitle>High Protein Diet Plan?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-6 opacity-90">
                                        Get a customized high-protein meal plan (Veg or Non-Veg) for muscle gain or fat loss.
                                    </p>
                                    <Button variant="secondary" className="w-full font-semibold" asChild>
                                        <Link href="/contact#contact-form">Book Consultation</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Other Tools</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-2">
                                    <Link href="/tools/bmi-calculator" className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition text-purple-700 font-medium">
                                        <CheckCircle className="w-4 h-4" /> BMI Calculator
                                    </Link>
                                    <Link href="/tools/calorie-calculator" className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition text-purple-700 font-medium">
                                        <CheckCircle className="w-4 h-4" /> Calorie Calculator
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
