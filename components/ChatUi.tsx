"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface ChatUIProps {
  messages: { sender: string; text: string; type?: "text" | "plan" }[];
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  quickReplies?: string[];
  onQuickReplyClick?: (reply: string) => void;
  showSummary?: boolean;
  confirmProfile?: () => void;
  restartFlow?: () => void;
  loadingPlan?: boolean;
  disableConfirm?: boolean;
}

export default function ChatUI({
  messages,
  input,
  setInput,
  onSend,
  quickReplies = [],
  onQuickReplyClick,
  showSummary = false,
  confirmProfile,
  restartFlow,
  loadingPlan = false,
  disableConfirm = false,
}: ChatUIProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 font-bold text-lg shadow">
        AI Health Coach
      </div>

      {/* Chat Messages */}
      <div
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50"
      >
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`max-w-[85%] ${
              msg.type === "plan"
                ? "w-full bg-white p-4 rounded-xl border shadow-md"
                : `p-3 rounded-2xl break-words text-sm md:text-base shadow ${
                    msg.sender === "user"
                      ? "ml-auto bg-green-500 text-white rounded-br-none"
                      : "mr-auto bg-gray-200 text-black rounded-bl-none"
                  }`
            }`}
          >
            {msg.type === "plan" ? (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-green-700">
                  Your Personalized Health Plan
                </h3>
                {msg.text.split("\n").map((line, i) => {
                  if (line.toLowerCase().includes("diet")) {
                    return (
                      <p key={i} className="font-semibold text-green-600">
                        🍽️ {line}
                      </p>
                    );
                  }
                  if (line.toLowerCase().includes("workout")) {
                    return (
                      <p key={i} className="font-semibold text-blue-600">
                        🏋️ {line}
                      </p>
                    );
                  }
                  return (
                    <p key={i} className="text-gray-700 leading-relaxed">
                      {line}
                    </p>
                  );
                })}
              </div>
            ) : (
              msg.text
            )}
          </motion.div>
        ))}

        {loadingPlan && (
          <div className="mr-auto text-gray-500 italic">⏳ Generating your plan...</div>
        )}
      </div>

      {/* Summary Confirmation */}
      {showSummary && (
        <div className="flex gap-3 p-3 bg-white border-t">
          <button
            onClick={confirmProfile}
            disabled={disableConfirm || loadingPlan}
            className={`flex-1 px-4 py-2 rounded-xl text-white flex items-center justify-center gap-2 ${
              disableConfirm || loadingPlan
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loadingPlan && (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {loadingPlan ? "Generating..." : "✅ Confirm"}
          </button>
          <button
            onClick={restartFlow}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
          >
            🔄 Restart
          </button>
        </div>
      )}

      {/* Quick Replies */}
      {quickReplies.length > 0 && (
        <div className="flex flex-wrap gap-2 p-3 bg-white border-t">
          {quickReplies.map((reply, idx) => (
            <button
              key={idx}
              onClick={() => onQuickReplyClick && onQuickReplyClick(reply)}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-sm"
            >
              {reply}
            </button>
          ))}
        </div>
      )}

      {/* Input Section */}
      <div className="flex p-3 bg-white border-t sticky bottom-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
        />
        <button
          onClick={onSend}
          className="ml-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
