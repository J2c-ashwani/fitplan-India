"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calculator, Droplets, Zap, Target, Users, Activity, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ToolsPage() {
  // BMI Calculator State
  const [bmiData, setBmiData] = useState({
    height: "",
    weight: "",
    unit: "imperial", // imperial for USA/UK/Australia
  })
  const [bmiResult, setBmiResult] = useState<{
    bmi: number
    category: string
    color: string
    advice: string
  } | null>(null)

  // Calorie Calculator State
  const [calorieData, setCalorieData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activity: "",
    goal: "",
  })
  const [calorieResult, setCalorieResult] = useState<{
    bmr: number
    maintenance: number
    goal: number
    goalType: string
  } | null>(null)

  // Water Calculator State
  const [waterData, setWaterData] = useState({
    weight: "",
    activity: "",
    climate: "",
  })
  const [waterResult, setWaterResult] = useState<{
    liters: number
    glasses: number
    advice: string
  } | null>(null)

  // Protein Calculator State
  const [proteinData, setProteinData] = useState({
    weight: "",
    activity: "",
    goal: "",
    age: "",
  })
  const [proteinResult, setProteinResult] = useState<{
    grams: number
    advice: string
    sources: string[]
  } | null>(null)

  // BMI Calculator Functions
  const calculateBMI = () => {
    const height = parseFloat(bmiData.height)
    const weight = parseFloat(bmiData.weight)

    if (!height || !weight) return

    let bmi: number
    if (bmiData.unit === "metric") {
      bmi = weight / ((height / 100) * (height / 100))
    } else {
      bmi = (weight / (height * height)) * 703
    }

    let category: string
    let color: string
    let advice: string

    if (bmi < 18.5) {
      category = "Underweight"
      color = "text-blue-600"
      advice = "Consider gaining weight through a balanced diet and strength training."
    } else if (bmi < 25) {
      category = "Normal Weight"
      color = "text-emerald-600"
      advice = "Great! Maintain your current weight with a balanced diet and regular exercise."
    } else if (bmi < 30) {
      category = "Overweight"
      color = "text-orange-600"
      advice = "Consider losing 5-10% of your body weight through diet and exercise."
    } else {
      category = "Obese"
      color = "text-red-600"
      advice = "Consult a healthcare provider for a comprehensive weight loss plan."
    }

    setBmiResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      color,
      advice,
    })
  }

  // Calorie Calculator Functions
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

    // Activity multipliers
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9,
    }

    const maintenance = bmr * activityMultipliers[calorieData.activity]

    // Goal adjustments
    let goalCalories: number
    let goalType: string
    switch (calorieData.goal) {
      case "lose_fast":
        goalCalories = maintenance - 750
        goalType = "Fast Weight Loss (1.5 lbs/week)"
        break
      case "lose_moderate":
        goalCalories = maintenance - 500
        goalType = "Moderate Weight Loss (1 lb/week)"
        break
      case "lose_slow":
        goalCalories = maintenance - 250
        goalType = "Slow Weight Loss (0.5 lbs/week)"
        break
      case "maintain":
        goalCalories = maintenance
        goalType = "Maintain Current Weight"
        break
      case "gain":
        goalCalories = maintenance + 300
        goalType = "Weight Gain (0.5 lbs/week)"
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

  // Water Calculator Functions
  const calculateWater = () => {
    const weight = parseFloat(waterData.weight)
    if (!weight || !waterData.activity || !waterData.climate) return

    // Base water requirement: 35ml per kg body weight
    const baseWater = weight * 0.035

    // Activity adjustments
    const activityAdjustments: { [key: string]: number } = {
      low: 0,
      moderate: 0.5,
      high: 1.0,
      very_high: 1.5,
    }

    // Climate adjustments
    const climateAdjustments: { [key: string]: number } = {
      cool: 0,
      moderate: 0.2,
      hot: 0.5,
      very_hot: 0.8,
    }

    const totalWater = baseWater + activityAdjustments[waterData.activity] + climateAdjustments[waterData.climate]
    const glasses = Math.round(totalWater / 0.25) // 250ml per glass

    let advice: string
    if (totalWater < 2) {
      advice = "Increase your water intake gradually throughout the day."
    } else if (totalWater > 4) {
      advice = "Spread your water intake throughout the day to avoid overhydration."
    } else {
      advice = "Perfect! This amount will keep you well-hydrated."
    }

    setWaterResult({
      liters: Math.round(totalWater * 10) / 10,
      glasses,
      advice,
    })
  }

  // Protein Calculator Functions
  const calculateProtein = () => {
    const weight = parseFloat(proteinData.weight)
    const age = parseInt(proteinData.age)

    if (!weight || !age || !proteinData.activity || !proteinData.goal) return

    // Base protein requirement
    let proteinPerKg: number

    // Activity-based requirements
    switch (proteinData.activity) {
      case "sedentary":
        proteinPerKg = 0.8
        break
      case "light":
        proteinPerKg = 1.0
        break
      case "moderate":
        proteinPerKg = 1.2
        break
      case "active":
        proteinPerKg = 1.4
        break
      case "very_active":
        proteinPerKg = 1.6
        break
      default:
        proteinPerKg = 0.8
    }

    // Goal adjustments
    if (proteinData.goal === "muscle_gain") {
      proteinPerKg += 0.4
    } else if (proteinData.goal === "weight_loss") {
      proteinPerKg += 0.2
    }

    // Age adjustment (seniors need more protein)
    if (age > 65) {
      proteinPerKg += 0.2
    }

    const totalProtein = weight * proteinPerKg

    const sources = [
      "Chicken breast (31g per 100g)",
      "Greek yogurt (10g per 100g)",
      "Eggs (6g per egg)",
      "Salmon (25g per 100g)",
      "Lentils (9g per 100g cooked)",
      "Cottage cheese (11g per 100g)",
      "Almonds (21g per 100g)",
      "Quinoa (4g per 100g cooked)",
    ]

    let advice: string
    if (totalProtein < 50) {
      advice = "Focus on including protein in every meal and snack."
    } else if (totalProtein > 120) {
      advice = "Spread protein intake throughout the day for better absorption."
    } else {
      advice = "Great target! Include variety in your protein sources."
    }

    setProteinResult({
      grams: Math.round(totalProtein),
      advice,
      sources,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-emerald-600 font-semibold">
              🧮 Free Health Tools
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Health & Fitness Calculators
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Use our scientifically accurate calculators to determine your BMI, daily calorie needs, water intake, 
              and protein requirements. Get personalized recommendations for your health journey.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                <span>Scientifically Accurate</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Used by 50,000+ Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span>Personalized Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* BMI Calculator */}
            <Card className="border-2 hover:border-emerald-200 hover:shadow-xl transition-all">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  BMI Calculator
                </CardTitle>
                <CardDescription className="text-base">Calculate your Body Mass Index and get health recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bmi-height" className="text-sm font-semibold">Height</Label>
                    <Input
                      id="bmi-height"
                      type="number"
                      placeholder={bmiData.unit === "metric" ? "170 cm" : "5.7 ft"}
                      value={bmiData.height}
                      onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="bmi-weight" className="text-sm font-semibold">Weight</Label>
                    <Input
                      id="bmi-weight"
                      type="number"
                      placeholder={bmiData.unit === "metric" ? "70 kg" : "154 lbs"}
                      value={bmiData.weight}
                      onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-semibold">Unit System</Label>
                  <Select value={bmiData.unit} onValueChange={(value) => setBmiData({ ...bmiData, unit: value })}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="imperial">Imperial (ft, lbs)</SelectItem>
                      <SelectItem value="metric">Metric (cm, kg)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateBMI} className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-6">
                  Calculate BMI
                </Button>
                {bmiResult && (
                  <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg border-2 border-emerald-200">
                    <div className="text-center mb-4">
                      <div className="text-5xl font-bold text-emerald-600">{bmiResult.bmi}</div>
                      <div className={`text-xl font-semibold mt-2 ${bmiResult.color}`}>{bmiResult.category}</div>
                    </div>
                    <p className="text-sm text-gray-700 text-center leading-relaxed">{bmiResult.advice}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Calorie Calculator */}
            <Card className="border-2 hover:border-emerald-200 hover:shadow-xl transition-all">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  Calorie Calculator
                </CardTitle>
                <CardDescription className="text-base">Calculate your daily calorie needs based on your goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cal-age" className="text-sm font-semibold">Age</Label>
                    <Input
                      id="cal-age"
                      type="number"
                      placeholder="25"
                      value={calorieData.age}
                      onChange={(e) => setCalorieData({ ...calorieData, age: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold">Gender</Label>
                    <Select
                      value={calorieData.gender}
                      onValueChange={(value) => setCalorieData({ ...calorieData, gender: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cal-height" className="text-sm font-semibold">Height (cm)</Label>
                    <Input
                      id="cal-height"
                      type="number"
                      placeholder="170"
                      value={calorieData.height}
                      onChange={(e) => setCalorieData({ ...calorieData, height: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cal-weight" className="text-sm font-semibold">Weight (kg)</Label>
                    <Input
                      id="cal-weight"
                      type="number"
                      placeholder="70"
                      value={calorieData.weight}
                      onChange={(e) => setCalorieData({ ...calorieData, weight: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-semibold">Activity Level</Label>
                  <Select
                    value={calorieData.activity}
                    onValueChange={(value) => setCalorieData({ ...calorieData, activity: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (desk job, no exercise)</SelectItem>
                      <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
                      <SelectItem value="active">Active (hard exercise 6-7 days/week)</SelectItem>
                      <SelectItem value="very_active">Very Active (physical job + exercise)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-semibold">Goal</Label>
                  <Select
                    value={calorieData.goal}
                    onValueChange={(value) => setCalorieData({ ...calorieData, goal: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lose_fast">Lose Weight Fast (1.5 lbs/week)</SelectItem>
                      <SelectItem value="lose_moderate">Lose Weight Moderate (1 lb/week)</SelectItem>
                      <SelectItem value="lose_slow">Lose Weight Slow (0.5 lbs/week)</SelectItem>
                      <SelectItem value="maintain">Maintain Weight</SelectItem>
                      <SelectItem value="gain">Gain Weight (0.5 lbs/week)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateCalories} className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Calculate Calories
                </Button>
                {calorieResult && (
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200 space-y-3">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600">{calorieResult.goal} cal/day</div>
                      <div className="text-sm text-gray-600 mt-2">{calorieResult.goalType}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-blue-200">
                      <div className="text-center">
                        <div className="text-xs text-gray-500">BMR</div>
                        <div className="font-semibold text-gray-900">{calorieResult.bmr} cal</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Maintenance</div>
                        <div className="font-semibold text-gray-900">{calorieResult.maintenance} cal</div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Water Intake Calculator */}
            <Card className="border-2 hover:border-emerald-200 hover:shadow-xl transition-all">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Droplets className="h-6 w-6 text-cyan-600" />
                  </div>
                  Water Intake Calculator
                </CardTitle>
                <CardDescription className="text-base">Calculate your daily water requirement based on activity and climate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <Label htmlFor="water-weight" className="text-sm font-semibold">Weight (kg)</Label>
                  <Input
                    id="water-weight"
                    type="number"
                    placeholder="70"
                    value={waterData.weight}
                    onChange={(e) => setWaterData({ ...waterData, weight: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm font-semibold">Activity Level</Label>
                  <Select
                    value={waterData.activity}
                    onValueChange={(value) => setWaterData({ ...waterData, activity: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (minimal exercise)</SelectItem>
                      <SelectItem value="moderate">Moderate (30-60 min exercise)</SelectItem>
                      <SelectItem value="high">High (1-2 hours exercise)</SelectItem>
                      <SelectItem value="very_high">Very High (2+ hours exercise)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-semibold">Climate</Label>
                  <Select
                    value={waterData.climate}
                    onValueChange={(value) => setWaterData({ ...waterData, climate: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select climate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cool">Cool (below 68°F)</SelectItem>
                      <SelectItem value="moderate">Moderate (68-86°F)</SelectItem>
                      <SelectItem value="hot">Hot (86-104°F)</SelectItem>
                      <SelectItem value="very_hot">Very Hot (above 104°F)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateWater} className="w-full bg-cyan-600 hover:bg-cyan-700 text-lg py-6">
                  Calculate Water Intake
                </Button>
                {waterResult && (
                  <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border-2 border-cyan-200">
                    <div className="text-center mb-4">
                      <div className="text-5xl font-bold text-cyan-600">{waterResult.liters}L</div>
                      <div className="text-xl text-gray-600 mt-2">{waterResult.glasses} glasses per day</div>
                      <div className="text-xs text-gray-500 mt-1">(8 oz glasses)</div>
                    </div>
                    <p className="text-sm text-gray-700 text-center leading-relaxed">{waterResult.advice}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Protein Calculator */}
            <Card className="border-2 hover:border-emerald-200 hover:shadow-xl transition-all">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Activity className="h-6 w-6 text-purple-600" />
                  </div>
                  Protein Calculator
                </CardTitle>
                <CardDescription className="text-base">Calculate your daily protein needs based on activity and goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="protein-weight" className="text-sm font-semibold">Weight (kg)</Label>
                    <Input
                      id="protein-weight"
                      type="number"
                      placeholder="70"
                      value={proteinData.weight}
                      onChange={(e) => setProteinData({ ...proteinData, weight: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="protein-age" className="text-sm font-semibold">Age</Label>
                    <Input
                      id="protein-age"
                      type="number"
                      placeholder="25"
                      value={proteinData.age}
                      onChange={(e) => setProteinData({ ...proteinData, age: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-semibold">Activity Level</Label>
                  <Select
                    value={proteinData.activity}
                    onValueChange={(value) => setProteinData({ ...proteinData, activity: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (no exercise)</SelectItem>
                      <SelectItem value="light">Light (1-3 days/week)</SelectItem>
                      <SelectItem value="moderate">Moderate (3-5 days/week)</SelectItem>
                      <SelectItem value="active">Active (6-7 days/week)</SelectItem>
                      <SelectItem value="very_active">Very Active (2x/day or intense)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-semibold">Primary Goal</Label>
                  <Select
                    value={proteinData.goal}
                    onValueChange={(value) => setProteinData({ ...proteinData, goal: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maintenance">General Health</SelectItem>
                      <SelectItem value="weight_loss">Weight Loss</SelectItem>
                      <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateProtein} className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
                  Calculate Protein Intake
                </Button>
                {proteinResult && (
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200 space-y-4">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-purple-600">{proteinResult.grams}g</div>
                      <div className="text-sm text-gray-600 mt-2">per day</div>
                    </div>
                    <p className="text-sm text-gray-700 text-center leading-relaxed">{proteinResult.advice}</p>
                    <div className="pt-3 border-t border-purple-200">
                      <h4 className="font-semibold text-sm mb-3 text-gray-900">Good Protein Sources:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {proteinResult.sources.map((source, index) => (
                          <div key={index} className="text-xs text-gray-600 flex items-start">
                            <CheckCircle className="h-3 w-3 text-purple-500 mr-1 mt-0.5 flex-shrink-0" />
                            <span>{source}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need a Personalized Plan?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            While these calculators provide great starting points, a personalized consultation can help you create a
            comprehensive plan tailored to your specific health conditions and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6" asChild>
              <Link href="/contact">Book Consultation - $100</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent font-semibold"
              asChild
            >
              <Link href="/plans">View Weight Loss Plans</Link>
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-6">No hidden charges • 100% Personalized • Expert Support</p>
        </div>
      </section>
    </div>
  )
}
