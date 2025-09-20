"use client";

import ChatUI from "@/components/ChatUI";
import { useState } from "react";

export default function AICoachPage() {
  const steps = [
    { key: "name", question: "👋 Hi! I'm your AI Coach. What’s your name?", type: "text" },
    { key: "age", question: "Great! How old are you?", type: "text" },
    { key: "weight", question: "Got it. What’s your current weight (in kg)?", type: "text" },
    { key: "height", question: "Nice! What’s your height (in cm)?", type: "text" },
    {
      key: "goal",
      question: "What’s your fitness goal?",
      type: "buttons",
      options: ["Weight Loss", "Weight Gain", "General Fitness"],
    },
    {
      key: "lifestyle",
      question: "How active are you daily?",
      type: "buttons",
      options: ["Sedentary", "Moderate", "Active"],
    },
    {
      key: "dietPreference",
      question: "What is your diet preference?",
      type: "buttons",
      options: ["Veg", "Non-Veg", "Vegan"],
    },
    {
      key: "dietType",
      question: "Do you prefer Indian Diet or Western Diet?",
      type: "buttons",
      options: ["Indian", "Western"],
    },
    {
      key: "healthCondition",
      question: "Do you have any existing health condition?",
      type: "buttons",
      options: ["Diabetes", "Thyroid", "PCOS", "Heart Issue", "None", "Other"],
    },
  ];

  const [messages, setMessages] = useState([{ sender: "ai", text: steps[0].question }]);
  const [input, setInput] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState<{ [key: string]: string }>({});
  const [awaitingCustomCondition, setAwaitingCustomCondition] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState(false);

  // Dynamic quick replies based on current step
  const quickReplies =
    currentStep !== -1 && steps[currentStep]?.type === "buttons"
      ? steps[currentStep].options
      : [];

  const handleResponse = (response: string) => {
    setMessages((prev) => [...prev, { sender: "user", text: response }]);

    if (steps[currentStep].key === "healthCondition" && response === "Other") {
      setAwaitingCustomCondition(true);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Please type your health condition:" },
      ]);
      return;
    }

    setProfile((prev) => ({ ...prev, [steps[currentStep].key]: response }));

    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: steps[currentStep + 1].question },
        ]);
        setCurrentStep((prev) => prev + 1);
      }, 500);
    } else {
      showProfileSummary();
    }

    setInput("");
  };

  const showProfileSummary = () => {
    const summary = `
Here’s what I understood:

👤 Name: ${profile.name || "-"}
🎂 Age: ${profile.age || "-"}
⚖️ Weight: ${profile.weight || "-"} kg
📏 Height: ${profile.height || "-"} cm
🎯 Goal: ${profile.goal || "-"}
🏃 Lifestyle: ${profile.lifestyle || "-"}
🥗 Diet: ${profile.dietPreference || "-"} (${profile.dietType || "-"})
🩺 Health Condition: ${profile.healthCondition || "None"}
    `;

    setMessages((prev) => [...prev, { sender: "ai", text: summary.trim() }]);
    setShowSummary(true);
    setCurrentStep(-1);
  };

  const confirmProfile = async () => {
    setShowSummary(false);
    setLoadingPlan(true);
    setMessages((prev) => [
      ...prev,
      { sender: "ai", text: `Awesome! 🎉 Preparing your personalized plan...` },
    ]);

    try {
      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.plan || "Sorry, I couldn’t generate a plan right now. Please try again later.",
          type: "plan",
        },
      ]);
    } catch (err) {
      console.error("Error generating plan:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ There was an error generating your plan. Please try again." },
      ]);
    } finally {
      setLoadingPlan(false);
    }
  };

  const restartFlow = () => {
    setShowSummary(false);
    setProfile({});
    setCurrentStep(0);
    setMessages([{ sender: "ai", text: steps[0].question }]);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    if (awaitingCustomCondition) {
      setProfile((prev) => ({ ...prev, healthCondition: input }));
      setAwaitingCustomCondition(false);
      showProfileSummary();
      setInput("");
      return;
    }

    handleResponse(input);
  };

  return (
    <div className="p-2 md:p-4 flex justify-center">
      <div className="w-full max-w-lg">
        <ChatUI
          messages={messages}
          input={input}
          setInput={setInput}
          onSend={sendMessage}
          quickReplies={quickReplies}
          onQuickReplyClick={handleResponse}
          showSummary={showSummary}
          confirmProfile={confirmProfile}
          restartFlow={restartFlow}
          loadingPlan={loadingPlan}
          disableConfirm={loadingPlan}
        />
      </div>
    </div>
  );
}
