"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Heart, Calculator, Droplets, Zap, Target, Users, Activity } from "lucide-react"
import Link from "next/link"

export default function ToolsPage() {
  // BMI Calculator State
  const [bmiData, setBmiData] = useState({
    height: "",
    weight: "",
    unit: "metric", // metric or imperial
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
    const height = Number.parseFloat(bmiData.height)
    const weight = Number.parseFloat(bmiData.weight)

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
      color = "text-green-600"
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
    const age = Number.parseInt(calorieData.age)
    const height = Number.parseFloat(calorieData.height)
    const weight = Number.parseFloat(calorieData.weight)

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
        goalType = "Fast Weight Loss (0.75kg/week)"
        break
      case "lose_moderate":
        goalCalories = maintenance - 500
        goalType = "Moderate Weight Loss (0.5kg/week)"
        break
      case "lose_slow":
        goalCalories = maintenance - 250
        goalType = "Slow Weight Loss (0.25kg/week)"
        break
      case "maintain":
        goalCalories = maintenance
        goalType = "Maintain Current Weight"
        break
      case "gain":
        goalCalories = maintenance + 300
        goalType = "Weight Gain (0.25kg/week)"
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
    const weight = Number.parseFloat(waterData.weight)
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
    const weight = Number.parseFloat(proteinData.weight)
    const age = Number.parseInt(proteinData.age)

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
      "Dal and legumes (20-25g per cup)",
      "Paneer (14g per 100g)",
      "Greek yogurt (15g per cup)",
      "Eggs (6g per egg)",
      "Quinoa (8g per cup cooked)",
      "Nuts and seeds (6g per ounce)",
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
    <div className="min-h-screen bg-background">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Free Health Tools
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Health & Fitness Calculators</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Use our free calculators to determine your BMI, daily calorie needs, water intake, and protein requirements.
            Get personalized recommendations for your health journey.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              <span>Scientifically Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Used by 50,000+ Indians</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span>Personalized Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* BMI Calculator */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  BMI Calculator
                </CardTitle>
                <CardDescription>Calculate your Body Mass Index and get health recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bmi-height">Height</Label>
                    <Input
                      id="bmi-height"
                      type="number"
                      placeholder={bmiData.unit === "metric" ? "170 cm" : "5.7 ft"}
                      value={bmiData.height}
                      onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="bmi-weight">Weight</Label>
                    <Input
                      id="bmi-weight"
                      type="number"
                      placeholder={bmiData.unit === "metric" ? "70 kg" : "154 lbs"}
                      value={bmiData.weight}
                      onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label>Unit System</Label>
                  <Select value={bmiData.unit} onValueChange={(value) => setBmiData({ ...bmiData, unit: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metric">Metric (cm, kg)</SelectItem>
                      <SelectItem value="imperial">Imperial (ft, lbs)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateBMI} className="w-full">
                  Calculate BMI
                </Button>
                {bmiResult && (
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-bold text-primary">{bmiResult.bmi}</div>
                      <div className={`text-lg font-semibold ${bmiResult.color}`}>{bmiResult.category}</div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">{bmiResult.advice}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Calorie Calculator */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Calorie Calculator
                </CardTitle>
                <CardDescription>Calculate your daily calorie needs based on your goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cal-age">Age</Label>
                    <Input
                      id="cal-age"
                      type="number"
                      placeholder="25"
                      value={calorieData.age}
                      onChange={(e) => setCalorieData({ ...calorieData, age: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Gender</Label>
                    <Select
                      value={calorieData.gender}
                      onValueChange={(value) => setCalorieData({ ...calorieData, gender: value })}
                    >
                      <SelectTrigger>
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
                    <Label htmlFor="cal-height">Height (cm)</Label>
                    <Input
                      id="cal-height"
                      type="number"
                      placeholder="170"
                      value={calorieData.height}
                      onChange={(e) => setCalorieData({ ...calorieData, height: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cal-weight">Weight (kg)</Label>
                    <Input
                      id="cal-weight"
                      type="number"
                      placeholder="70"
                      value={calorieData.weight}
                      onChange={(e) => setCalorieData({ ...calorieData, weight: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label>Activity Level</Label>
                  <Select
                    value={calorieData.activity}
                    onValueChange={(value) => setCalorieData({ ...calorieData, activity: value })}
                  >
                    <SelectTrigger>
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
                  <Label>Goal</Label>
                  <Select
                    value={calorieData.goal}
                    onValueChange={(value) => setCalorieData({ ...calorieData, goal: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lose_fast">Lose Weight Fast (0.75kg/week)</SelectItem>
                      <SelectItem value="lose_moderate">Lose Weight Moderate (0.5kg/week)</SelectItem>
                      <SelectItem value="lose_slow">Lose Weight Slow (0.25kg/week)</SelectItem>
                      <SelectItem value="maintain">Maintain Weight</SelectItem>
                      <SelectItem value="gain">Gain Weight (0.25kg/week)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateCalories} className="w-full">
                  Calculate Calories
                </Button>
                {calorieResult && (
                  <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{calorieResult.goal} calories/day</div>
                      <div className="text-sm text-muted-foreground">{calorieResult.goalType}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">BMR: </span>
                        <span className="font-medium">{calorieResult.bmr} cal</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Maintenance: </span>
                        <span className="font-medium">{calorieResult.maintenance} cal</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Water Intake Calculator */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-primary" />
                  Water Intake Calculator
                </CardTitle>
                <CardDescription>Calculate your daily water requirement based on activity and climate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="water-weight">Weight (kg)</Label>
                  <Input
                    id="water-weight"
                    type="number"
                    placeholder="70"
                    value={waterData.weight}
                    onChange={(e) => setWaterData({ ...waterData, weight: e.target.value })}
                  />
                </div>
                <div>
                  <Label>Activity Level</Label>
                  <Select
                    value={waterData.activity}
                    onValueChange={(value) => setWaterData({ ...waterData, activity: value })}
                  >
                    <SelectTrigger>
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
                  <Label>Climate</Label>
                  <Select
                    value={waterData.climate}
                    onValueChange={(value) => setWaterData({ ...waterData, climate: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select climate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cool">Cool (below 20°C)</SelectItem>
                      <SelectItem value="moderate">Moderate (20-30°C)</SelectItem>
                      <SelectItem value="hot">Hot (30-40°C)</SelectItem>
                      <SelectItem value="very_hot">Very Hot (above 40°C)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateWater} className="w-full">
                  Calculate Water Intake
                </Button>
                {waterResult && (
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-center mb-3">
                      <div className="text-3xl font-bold text-primary">{waterResult.liters}L</div>
                      <div className="text-lg text-muted-foreground">{waterResult.glasses} glasses per day</div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">{waterResult.advice}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Protein Calculator */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Protein Calculator
                </CardTitle>
                <CardDescription>Calculate your daily protein needs based on activity and goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="protein-weight">Weight (kg)</Label>
                    <Input
                      id="protein-weight"
                      type="number"
                      placeholder="70"
                      value={proteinData.weight}
                      onChange={(e) => setProteinData({ ...proteinData, weight: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="protein-age">Age</Label>
                    <Input
                      id="protein-age"
                      type="number"
                      placeholder="25"
                      value={proteinData.age}
                      onChange={(e) => setProteinData({ ...proteinData, age: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label>Activity Level</Label>
                  <Select
                    value={proteinData.activity}
                    onValueChange={(value) => setProteinData({ ...proteinData, activity: value })}
                  >
                    <SelectTrigger>
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
                  <Label>Primary Goal</Label>
                  <Select
                    value={proteinData.goal}
                    onValueChange={(value) => setProteinData({ ...proteinData, goal: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maintenance">General Health</SelectItem>
                      <SelectItem value="weight_loss">Weight Loss</SelectItem>
                      <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={calculateProtein} className="w-full">
                  Calculate Protein Intake
                </Button>
                {proteinResult && (
                  <div className="p-4 bg-muted/50 rounded-lg space-y-3">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{proteinResult.grams}g</div>
                      <div className="text-sm text-muted-foreground">per day</div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">{proteinResult.advice}</p>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Good Indian Protein Sources:</h4>
                      <div className="space-y-1">
                        {proteinResult.sources.map((source, index) => (
                          <div key={index} className="text-xs text-muted-foreground">
                            • {source}
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
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Need a Personalized Plan?</h2>
          <p className="text-xl mb-8 opacity-90">
            While these calculators provide great starting points, a personalized consultation can help you create a
            comprehensive plan tailored to your specific health conditions and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/contact">Book Consultation - ₹500</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/plans">View Weight Loss Plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
