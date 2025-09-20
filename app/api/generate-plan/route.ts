import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const profile = await req.json();

    // Build a prompt from profile data
    const prompt = `
Generate a personalized health and fitness plan based on this profile:
- Name: ${profile.name}
- Age: ${profile.age}
- Weight: ${profile.weight} kg
- Height: ${profile.height} cm
- Goal: ${profile.goal}
- Lifestyle: ${profile.lifestyle}
- Diet: ${profile.dietPreference} (${profile.dietType})
- Health Condition: ${profile.healthCondition}

Provide:
1. Daily calorie recommendation
2. Sample meals/snacks (Indian if selected)
3. Workout routine
4. Lifestyle tips

Respond clearly, with line breaks for readability.
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a fitness coach." },
        { role: "user", content: prompt },
      ],
    });

    const aiPlan = completion.choices[0].message?.content || "";

    return NextResponse.json({ plan: aiPlan });
  } catch (err) {
    console.error("OpenAI API Error:", err);
    return NextResponse.json({ error: "Failed to generate plan" }, { status: 500 });
  }
}
