import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
    }

    const formattedMessages = messages.map((msg: any) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    }));

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: formattedMessages,
    });

    const aiMessage = completion.choices[0].message?.content || "";

    return NextResponse.json({ text: aiMessage });
  } catch (err) {
    console.error("OpenAI API Error:", err);
    return NextResponse.json({ error: "Failed to fetch AI response" }, { status: 500 });
  }
}
