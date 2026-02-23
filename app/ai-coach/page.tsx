"use client"

import ChatUi from "@/components/ChatUi"
import { useCurrency } from "@/components/CurrencyProvider"
import { useState, useEffect } from "react"
import { Menu, X, Clock, Trash2, MessageSquare, Plus } from "lucide-react"
import { load } from "@cashfreepayments/cashfree-js"

interface ChatMessage {
  sender: string
  text: string
  type?: "text" | "loader" | "plan"
}

interface ChatSession {
  id: string
  timestamp: string
  name: string
  preview: string
  messages: ChatMessage[]
  profile: any
}

interface Step {
  key: string
  question: string
  type: string
  options?: string[]
  validate?: (value: string) => string | boolean
  response?: (value: string) => string
}

export default function AICoachPage() {
  const { currency, symbol } = useCurrency()
  const price = currency === "INR" ? 49 : 29

  const steps: Step[] = [
    // ... keep all your 25 steps
    {
      key: "name",
      question: "👋 Hey there! I'm your AI Fitness Coach 🤖\n\nWhat should I call you?",
      type: "text",
      response: (value: string) => `Nice to meet you, ${value}! 🎉`
    },
    {
      key: "phone",
      question: "What's your WhatsApp number? 📱\n\n(Required for your plan delivery)\n⚠️ Please include Country Code (e.g., +91 9876543210)",
      type: "text",
      validate: (value: string) => {
        if (!value.includes("+")) return "Please include the country code (starts with +)"
        if (value.length < 10) return "Please enter a valid phone number"
        const cleanVal = value.toLowerCase()
        if (cleanVal.includes("no") || cleanVal.includes("need") || cleanVal.includes("skip")) return "A valid contact number is required to generate your personalized plan."
        return true
      },
      response: (value: string) => "Got it! 📱"
    },
    {
      key: "email",
      question: "And your email address? 📧",
      type: "text",
      validate: (value: string) => {
        if (!value.includes("@") || !value.includes(".")) return "Please enter a valid email address"
        return true
      },
      response: (value: string) => `Perfect! 📧`
    },
    {
      key: "age",
      question: "How old are you? (This helps me personalize your plan)",
      type: "text",
      response: (value: string) => `Got it! ${value} years old. Perfect! ✨`
    },
    {
      key: "gender",
      question: "Are you:",
      type: "buttons",
      options: ["Male 👨", "Female 👩", "Other"],
      response: (value: string) => "Awesome! 👍"
    },
    {
      key: "weight",
      question: "What's your current weight? ⚖️ (in kg)",
      type: "text",
      response: (value: string) => `${value}kg - Got it! 📝`
    },
    {
      key: "height",
      question: "What's your height? 📏 (in cm)",
      type: "text",
      response: (value: string) => `${value}cm - Perfect! ✅`
    },
    {
      key: "targetWeight",
      question: "And what's your target weight? 🎯 (in kg)",
      type: "text",
      response: (value: string) => `Target: ${value}kg - Let's make it happen! 💪`
    },
    {
      key: "healthCondition",
      question: "Let me understand your health better 🏥\n\nDo you have any of these conditions?\n\n(You can select multiple or choose 'None')",
      type: "multiselect",
      options: [
        "PCOS/PCOD 🩺",
        "Hypothyroidism 🦋",
        "Hyperthyroidism ⚡",
        "Diabetes Type 1 💉",
        "Diabetes Type 2 🩸",
        "Obesity ⚖️",
        "Post-Pregnancy 🤱",
        "Hormonal Imbalance ⚖️",
        "Heart Issues ❤️",
        "None ✅"
      ],
      response: (value: string) => "Thanks for sharing! 🙏"
    },
    {
      key: "medications",
      question: "Are you currently taking any medications? 💊\n\n(Type 'None' if not applicable)",
      type: "text",
      response: (value: string) => value.toLowerCase() === "none" ? "Great! 👍" : "Noted! I'll keep that in mind. 📝"
    },
    {
      key: "allergies",
      question: "Do you have any food allergies? 🚫\n\n(e.g., Nuts, Dairy, Gluten)\n\nType 'None' if not applicable",
      type: "text",
      response: (value: string) => value.toLowerCase() === "none" ? "Perfect! ✅" : "Got it! I'll avoid those. 🙏"
    },
    {
      key: "primaryGoal",
      question: "What's your main fitness goal? 🎯",
      type: "buttons",
      options: ["Weight Loss 📉", "Muscle Gain 💪", "Maintain Weight ⚖️", "Health Improvement 🏃"],
      response: (value: string) => `${value} - Excellent choice! Let's crush it! 🔥`
    },
    {
      key: "timeline",
      question: "When do you want to achieve this? ⏰",
      type: "buttons",
      options: ["1 Month (Quick) 🚀", "3 Months (Balanced) ⚡", "6 Months (Sustainable) 🌱", "1 Year (Gradual) 🌳"],
      response: (value: string) => "Perfect timeline! 📅"
    },
    {
      key: "activityLevel",
      question: "How active are you currently? 🏃‍♀️",
      type: "buttons",
      options: [
        "Sedentary 🪑 (Desk job, no exercise)",
        "Light 🚶 (1-3 days/week)",
        "Moderate 🏋️ (3-5 days/week)",
        "Active 💪 (6-7 days/week)",
        "Very Active 🔥 (Athlete level)"
      ],
      response: (value: string) => "Got your activity level! 📊"
    },
    {
      key: "exercisePreference",
      question: "Where do you prefer to workout? 🏋️‍♀️",
      type: "buttons",
      options: ["None (Just Starting) 🌱", "Home Workouts 🏠", "Gym 🏋️", "Outdoor 🌳", "Mixed/Flexible 🔄"],
      response: (value: string) => "Perfect! I'll design accordingly! 💡"
    },
    {
      key: "dietType",
      question: "What's your diet preference? 🥗",
      type: "buttons",
      options: ["Vegetarian 🥬", "Non-Vegetarian 🍗", "Vegan 🌱", "Keto 🥑", "Paleo 🥩", "Balanced 🍽️"],
      response: (value: string) => "Awesome! I'll create meals you'll love! 😋"
    },
    {
      key: "cuisinePreference",
      question: "What cuisine do you prefer? 🍛",
      type: "buttons",
      options: ["Indian 🇮🇳", "Western 🇺🇸", "Mediterranean 🇮🇹", "Asian 🇨🇳", "Mixed 🌍"],
      response: (value: string) => "Delicious choice! 👨‍🍳"
    },
    {
      key: "mealsPerDay",
      question: "How many meals do you prefer daily? 🍽️",
      type: "buttons",
      options: ["2 Meals (IF 20:4) ⏱️", "3 Meals (IF 16:8) ⏰", "4 Meals 🍱", "5-6 Small Meals 🍽️"],
      response: (value: string) => "Got it! I'll structure your day accordingly! 📋"
    },
    {
      key: "cookingTime",
      question: "How much time can you spend cooking? 👨‍🍳",
      type: "buttons",
      options: ["Minimal (Quick meals) ⚡", "Moderate (30-45 min) ⏱️", "Extensive (Meal prep OK) 👩‍🍳"],
      response: (value: string) => "Perfect! I'll match your schedule! ⏰"
    },
    {
      key: "foodsToAvoid",
      question: "Any foods you want to avoid? 🚫\n\n(Type 'None' if not applicable)",
      type: "text",
      response: (value: string) => value.toLowerCase() === "none" ? "Great! No restrictions! 🎉" : "Noted! I'll avoid those! 📝"
    },
    {
      key: "waterIntake",
      question: "How much water do you currently drink? 💧",
      type: "buttons",
      options: ["Less than 2L 💧", "2-3L 💦", "3L+ 💦💦"],
      response: (value: string) => "Got it! Hydration is key! 💦"
    },
    {
      key: "sleepHours",
      question: "How many hours do you sleep per night? 😴",
      type: "buttons",
      options: ["Less than 5 hours 😫", "5-6 hours 😴", "7-8 hours ✅", "9+ hours 😌"],
      response: (value: string) => value.includes("7-8") ? "Perfect sleep! That's ideal! 🌙" : "Noted! Sleep affects results! 🛌"
    },
    {
      key: "stressLevel",
      question: "What's your current stress level? 🧘",
      type: "buttons",
      options: ["Low (Minimal) ✅", "Moderate (Manageable) 😌", "High (Very stressed) 😰"],
      response: (value: string) => "Thanks for sharing! I'll factor that in! 🙏"
    },
    {
      key: "workSchedule",
      question: "What's your work schedule like? 💼",
      type: "buttons",
      options: ["Regular 9-5 🕘", "Shift Work 🔄", "Flexible Hours 🏠", "Night Shift 🌙"],
      response: (value: string) => "Got your schedule! I'll plan around it! 📅"
    },
    {
      key: "budget",
      question: "What's your budget for healthy food? 💰",
      type: "buttons",
      options: ["Budget-Friendly 💵", "Moderate 💳", "Flexible 💎"],
      response: (value: string) => "Perfect! I'll keep it within budget! 💰"
    }
  ]


  const [messages, setMessages] = useState<ChatMessage[]>([])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const context = params.get("context")
    if (context) {
      const friendlyContext = context.replace(/-/g, " ")
      setMessages([
        { sender: "ai", text: `👋 Hi! I noticed you were exploring our ${friendlyContext} resources. Do you want me to build a personalized ${friendlyContext} plan for you? 🤖` },
        { sender: "ai", text: "I can build a 100% personalized diet & workout plan for you right now. Just ask me to get started! 👇" }
      ])
    } else {
      setMessages([
        { sender: "ai", text: "👋 Hi! I'm your AI Fitness Coach. I can build a 100% personalized diet & workout plan for you." },
        { sender: "ai", text: "Ask me anything to get started! Try asking: 'Plan for PCOS weight loss' or 'Vegetarian muscle gain diet'👇" }
      ])
    }
  }, [])
  const [input, setInput] = useState("")
  const [currentStep, setCurrentStep] = useState(0)
  const [profile, setProfile] = useState<{ [key: string]: any }>({})
  const [showPayment, setShowPayment] = useState(false)
  const [loadingPlan, setLoadingPlan] = useState(false)
  const [multiSelectAnswers, setMultiSelectAnswers] = useState<string[]>([])
  const [isMultiSelectActive, setIsMultiSelectActive] = useState(false)
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [leadId, setLeadId] = useState<string | null>(null)

  // History management
  const [chatHistory, setChatHistory] = useState<ChatSession[]>([])
  const [showHistory, setShowHistory] = useState(true) // ✅ Show by default
  const [currentSessionId, setCurrentSessionId] = useState<string>(Date.now().toString())

  // Load chat history
  useEffect(() => {
    const savedHistory = localStorage.getItem("aiCoachHistory")
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory))
    }
  }, [])

  // Save current session
  useEffect(() => {
    if (profile.name && messages.length > 4) {
      saveCurrentSession()
    }
  }, [messages, profile])

  const saveCurrentSession = () => {
    const session: ChatSession = {
      id: currentSessionId,
      timestamp: new Date().toISOString(),
      name: profile.name || "Anonymous",
      preview: `${profile.primaryGoal || "New conversation"}`,
      messages: messages,
      profile: profile
    }

    const updatedHistory = chatHistory.filter(s => s.id !== currentSessionId)
    updatedHistory.unshift(session)
    const trimmedHistory = updatedHistory.slice(0, 10)

    setChatHistory(trimmedHistory)
    localStorage.setItem("aiCoachHistory", JSON.stringify(trimmedHistory))
  }

  const loadHistorySession = (session: ChatSession) => {
    setMessages(session.messages)
    setProfile(session.profile)
    setCurrentSessionId(session.id)
    setCurrentStep(-1)
  }

  const deleteHistorySession = (sessionId: string) => {
    const updatedHistory = chatHistory.filter(s => s.id !== sessionId)
    setChatHistory(updatedHistory)
    localStorage.setItem("aiCoachHistory", JSON.stringify(updatedHistory))
  }

  const startNewChat = () => {
    if (profile.name) {
      saveCurrentSession()
    }

    setCurrentSessionId(Date.now().toString())
    setProfile({})
    setLeadId(null)
    setCurrentStep(0) // Will be ignored if in Demo Mode
    setShowPayment(false)
    setPaymentCompleted(false)
    setMultiSelectAnswers([])
    setIsMultiSelectActive(false)
    setIsDemoMode(true) // Start in Demo Mode
    setMessages([
      { sender: "ai", text: "👋 Hi! I'm your AI Fitness Coach. I can build a 100% personalized diet & workout plan for you." },
      { sender: "ai", text: "Ask me anything to get started! Try asking: 'Plan for PCOS weight loss' or 'Vegetarian muscle gain diet'👇" }
    ])
  }

  // Demo Mode State
  const [isDemoMode, setIsDemoMode] = useState(true)

  const samplePrompts = [
    "📉 Plan for rapid weight loss",
    "🥑 Keto diet for beginners",
    "💪 Vegeterian muscle building",
    "🩸 Diabetic-friendly meal plan",
    "🤰 Post-pregnancy weight loss",
  ]

  useEffect(() => {
    console.log("🔔 showPayment:", showPayment)
  }, [showPayment])

  const saveLeadToSheets = async (status: string, additionalData?: any) => {
    try {
      const leadData = {
        name: profile.name || "Anonymous",
        email: profile.email || "",
        mobile: profile.phone || "",
        condition: profile.healthCondition || "",
        message: JSON.stringify(profile),
        status,
        leadSource: "AI Coach",
        timestamp: new Date().toISOString(),
        updateExisting: true,
        leadId: leadId,
        ...additionalData
      }

      const response = await fetch("/api/save-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData)
      })

      const result = await response.json()
      if (result.success && result.leadId) {
        setLeadId(result.leadId)
      }
      return result
    } catch (err) {
      console.error("❌ Failed to save lead:", err)
      return { success: false }
    }
  }

  useEffect(() => {
    // Only start the lead tracking once we have the required fields to perform a Google Sheet Auth UPSERT reliably
    if (profile.name && profile.email && profile.phone && !leadId) {
      saveLeadToSheets("Started")
    }
  }, [profile.name, profile.email, profile.phone])

  const quickReplies = (() => {
    if (currentStep === -1 || !steps[currentStep]) return []
    const currentStepData = steps[currentStep]
    if (currentStepData.type === "buttons") return currentStepData.options || []
    if (currentStepData.type === "multiselect") {
      if (isMultiSelectActive) return [...(currentStepData.options || []), "Done ✅"]
      return currentStepData.options || []
    }
    return []
  })()

  const handleResponse = (response: string) => {
    // Demo Mode Interception
    if (isDemoMode) {
      setMessages((prev) => [...prev, { sender: "user", text: response }])
      setIsDemoMode(false)

      // Smart Pivot Response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: `I can definitely help with "${response}"! 🧠` },
          { sender: "ai", text: "To create a plan that actually WORKS for your body type, I need to know a few details first." },
          { sender: "ai", text: steps[0].question }
        ])
        // Start Step 0
        setCurrentStep(0)
      }, 600)
      return
    }

    if (currentStep === -1 || !steps[currentStep]) return

    // 1. Validation Logic
    if (steps[currentStep].validate) {
      const error = steps[currentStep].validate!(response)
      if (typeof error === "string") {
        setMessages((prev) => [
          ...prev,
          { sender: "user", text: response },
          { sender: "ai", text: `⚠️ ${error}` }
        ])
        return
      }
    }

    const cleanResponse = response.replace(/[🏋️‍♀️🔥💪🌱🏠🏋️🌳🔄💧💦😴😫✅😌😰🕘🔄🌙💵💳💎👨👩🎯📉⚖️🏃💊🚫🥬🍗🌱🥑🥩🍽️🇮🇳🇺🇸🇮🇹🇨🇳🌍⏱️⏰🍱👨‍🍳👩‍🍳⚡💼📧📱🪑🚶🩺🦋💉🩸🤱❤️]/g, '').trim()
    setMessages((prev) => [...prev, { sender: "user", text: response }])

    if (steps[currentStep].type === "multiselect") {
      if (!isMultiSelectActive && cleanResponse !== "None") {
        setIsMultiSelectActive(true)
        setMultiSelectAnswers([cleanResponse])
        setMessages((prev) => [...prev, { sender: "ai", text: "✅ Selected! Tap more or 'Done ✅'" }])
        return
      }
      if (cleanResponse === "None") {
        setProfile((prev) => ({ ...prev, [steps[currentStep].key]: "None" }))
        setIsMultiSelectActive(false)
        setMultiSelectAnswers([])
        moveToNextStep(cleanResponse)
        return
      }
      if (response === "Done ✅" && isMultiSelectActive) {
        setProfile((prev) => ({ ...prev, [steps[currentStep].key]: multiSelectAnswers.join(", ") }))
        setIsMultiSelectActive(false)
        const finalValue = multiSelectAnswers.join(", ")
        setMultiSelectAnswers([])
        moveToNextStep(finalValue)
        return
      }
      if (isMultiSelectActive && response !== "Done ✅") {
        const newAnswers = [...multiSelectAnswers, cleanResponse]
        setMultiSelectAnswers(newAnswers)
        setMessages((prev) => [...prev, { sender: "ai", text: `✅ Added: ${newAnswers.join(", ")}` }])
        return
      }
    }

    setProfile((prev) => ({ ...prev, [steps[currentStep].key]: cleanResponse }))
    moveToNextStep(cleanResponse)
    setInput("")
  }

  const moveToNextStep = (userValue: string) => {
    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        const contextualResponse = steps[currentStep].response ? steps[currentStep].response!(userValue) : "Great! 👍"
        setMessages((prev) => [...prev, { sender: "ai", text: contextualResponse }, { sender: "ai", text: steps[currentStep + 1].question }])
        setCurrentStep((prev) => prev + 1)
      }, 800)
    } else {
      showProfileSummary()
    }
  }

  const showProfileSummary = () => {
    saveLeadToSheets("Completed Questionnaire")
    const summary = `🎉 Amazing! Here's your profile:

👤 ${profile.name} | 🎂 ${profile.age} | ⚡ ${profile.gender}
⚖️ ${profile.weight}kg → 🎯 ${profile.targetWeight}kg | 📏 ${profile.height}cm
🏥 ${profile.healthCondition || "None"} | 💊 ${profile.medications || "None"}
🎯 ${profile.primaryGoal} | ⏰ ${profile.timeline}
🥗 ${profile.dietType} | 🍛 ${profile.cuisinePreference}
📧 ${profile.email}`

    setMessages((prev) => [...prev, { sender: "ai", text: summary }, { sender: "ai", text: `Perfect! 🎉 Your AI plan is ready for ${symbol}${price}!` }])
    setTimeout(() => {
      setShowPayment(true)
      saveLeadToSheets("Payment Screen Shown")
    }, 1000)
    setCurrentStep(-1)
  }

  const handlePaymentAbandoned = () => {
    saveLeadToSheets("Payment Abandoned")
    setShowPayment(false)
  }

  const handlePayment = async () => {
    if (currency === "INR") {
      // Cashfree flow for Indian payments
      try {
        setShowPayment(false)
        setLoadingPlan(true)
        setMessages((prev) => [...prev, { sender: "ai", text: "💳 Initiating secure payment..." }])

        const cashfree = await load({ mode: "production" })

        const orderResponse = await fetch("/api/payment/cashfree/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: price,
            customerName: profile.name,
            customerPhone: profile.phone,
            customerEmail: profile.email,
            orderNote: "AI Diet Coach Plan",
          })
        })

        const orderData = await orderResponse.json()

        if (!orderData.success) {
          throw new Error("Failed to create payment session")
        }

        setLoadingPlan(false)

        const checkoutOptions = {
          paymentSessionId: orderData.payment_session_id,
          redirectTarget: "_modal" as const,
        }

        cashfree.checkout(checkoutOptions).then(async (result: any) => {
          if (result.error) {
            setMessages((prev) => [...prev, { sender: "ai", text: "❌ Payment was cancelled or failed. You can try again." }])
            await saveLeadToSheets("Payment Abandoned")
            setShowPayment(true)
            return
          }
          if (result.paymentDetails) {
            // Verify payment on server
            const verifyResponse = await fetch("/api/payment/cashfree/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderId: orderData.order_id })
            })
            const verifyData = await verifyResponse.json()

            if (verifyData.success) {
              setLoadingPlan(true)
              await saveLeadToSheets("Payment Success", { paymentAmount: price, paymentCurrency: currency, paymentDate: new Date().toISOString() })
              setMessages((prev) => [...prev, { sender: "ai", text: "🎉 Payment successful!" }, { sender: "ai", text: "🤖 Generating...", type: "loader" }])

              try {
                const res = await fetch("/api/generate-plan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(profile) })
                const data = await res.json()
                await fetch("/api/send-plan-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: profile.email, name: profile.name, plan: data.plan, profile, currency }) })
                await saveLeadToSheets("Success", { planGenerated: true, emailSent: true, completedDate: new Date().toISOString() })
                setMessages((prev) => prev.filter(m => m.type !== "loader").concat({ sender: "ai", text: data.plan || "Plan generated!", type: "plan" }, { sender: "ai", text: `✅ Emailed to ${profile.email}` }))
                setPaymentCompleted(true)
                saveCurrentSession()
              } catch (err) {
                await saveLeadToSheets("Error")
                setMessages((prev) => prev.filter(m => m.type !== "loader").concat({ sender: "ai", text: "⚠️ Error. Contact support." }))
              } finally {
                setLoadingPlan(false)
              }
            } else {
              setMessages((prev) => [...prev, { sender: "ai", text: "❌ Payment verification failed. Please contact support." }])
              await saveLeadToSheets("Payment Abandoned")
              setShowPayment(true)
            }
          }
        })
      } catch (err) {
        console.error("Cashfree payment error:", err)
        setMessages((prev) => [...prev, { sender: "ai", text: "❌ Payment failed. Please try again." }])
        setLoadingPlan(false)
        setShowPayment(true)
      }
    } else {
      // Original USD/fallback flow
      setShowPayment(false)
      setLoadingPlan(true)
      await saveLeadToSheets("Payment Success", { paymentAmount: price, paymentCurrency: currency, paymentDate: new Date().toISOString() })
      setMessages((prev) => [...prev, { sender: "ai", text: "🎉 Payment successful!" }, { sender: "ai", text: "🤖 Generating...", type: "loader" }])

      try {
        const res = await fetch("/api/generate-plan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(profile) })
        const data = await res.json()
        await fetch("/api/send-plan-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: profile.email, name: profile.name, plan: data.plan, profile, currency }) })
        await saveLeadToSheets("Success", { planGenerated: true, emailSent: true, completedDate: new Date().toISOString() })
        setMessages((prev) => prev.filter(m => m.type !== "loader").concat({ sender: "ai", text: data.plan || "Plan generated!", type: "plan" }, { sender: "ai", text: `✅ Emailed to ${profile.email}` }))
        setPaymentCompleted(true)
        saveCurrentSession()
      } catch (err) {
        await saveLeadToSheets("Error")
        setMessages((prev) => prev.filter(m => m.type !== "loader").concat({ sender: "ai", text: "⚠️ Error. Contact support." }))
      } finally {
        setLoadingPlan(false)
      }
    }
  }

  const sendMessage = () => {
    if (!input.trim() || currentStep === -1 || showPayment) return
    handleResponse(input)
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ✅ LEFT SIDEBAR - History */}
      <div className={`${showHistory ? 'w-64' : 'w-0'} transition-all duration-300 bg-gray-900 text-white overflow-hidden flex-shrink-0`}>
        <div className="p-3 flex items-center justify-between border-b border-gray-700">
          <button onClick={startNewChat} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-3 py-2 rounded-lg text-sm font-semibold w-full justify-center transition-colors">
            <Plus className="w-4 h-4" /> New Chat
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-60px)] p-2">
          {chatHistory.length === 0 ? (
            <div className="p-4">
              <p className="text-gray-400 text-xs mb-3 font-medium uppercase tracking-wider">Try these prompts:</p>
              <div className="space-y-2">
                {samplePrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleResponse(prompt)}
                    className="w-full text-left bg-gray-800 hover:bg-gray-700 p-3 rounded-lg text-sm text-gray-300 transition-colors border border-gray-700 hover:border-gray-500"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            chatHistory.map((session) => (
              <div key={session.id} className="p-2 hover:bg-gray-800 rounded-lg cursor-pointer group relative mb-1" onClick={() => loadHistorySession(session)}>
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{session.name}</p>
                    <p className="text-xs text-gray-400 truncate">{session.preview}</p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {new Date(session.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); deleteHistorySession(session.id) }} className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-600 rounded transition-opacity">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ✅ RIGHT SIDE - Chat Interface */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="p-3 border-b border-gray-200 flex items-center gap-3 bg-white">
          <button onClick={() => setShowHistory(!showHistory)} className="p-2 hover:bg-gray-100 rounded-lg">
            {showHistory ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <h1 className="text-lg font-bold text-gray-800">AI Fitness Coach</h1>
        </div>

        <div className="flex-1 overflow-hidden p-2 md:p-4">
          <div className="max-w-3xl mx-auto h-full">
            <ChatUi
              messages={messages}
              input={input}
              setInput={setInput}
              onSend={sendMessage}
              quickReplies={quickReplies}
              onQuickReplyClick={handleResponse}
              showSummary={false}
              showPayment={showPayment}
              confirmProfile={() => { }}
              handlePayment={handlePayment}
              handlePaymentAbandoned={handlePaymentAbandoned}
              restartFlow={startNewChat}
              loadingPlan={loadingPlan}
              disableConfirm={loadingPlan}
              paymentAmount={price}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
