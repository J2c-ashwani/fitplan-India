"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { CreditCard, CheckCircle, X } from "lucide-react";

interface ChatUIProps {
  messages: { sender: string; text: string; type?: "text" | "plan" | "loader" }[];
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
  quickReplies?: string[];
  onQuickReplyClick?: (reply: string) => void;
  showSummary?: boolean;
  showPayment?: boolean; // ✅ NEW
  confirmProfile?: () => void;
  handlePayment?: () => void; // ✅ NEW
  handlePaymentAbandoned?: () => void; // ✅ NEW
  paymentAmount?: number; // ✅ NEW
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
  showPayment = false, // ✅ NEW
  confirmProfile,
  handlePayment, // ✅ NEW
  handlePaymentAbandoned, // ✅ NEW
  paymentAmount = 25, // ✅ NEW
  restartFlow,
  loadingPlan = false,
  disableConfirm = false,
}: ChatUIProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden relative">
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
            ) : msg.type === "loader" ? (
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
              </div>
            ) : (
              msg.text
            )}
          </motion.div>
        ))}
      </div>

      {/* ✅ PAYMENT POPUP */}
      {showPayment && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Payment</h2>
              <p className="text-gray-600">Get your personalized AI fitness plan</p>
            </div>

            {/* Price Box */}
            <div className="bg-green-50 rounded-xl p-5 mb-6 border-2 border-green-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-semibold text-lg">AI Coach Plan</span>
                <span className="text-4xl font-bold text-green-600">${paymentAmount}</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Personalized meal plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Custom workout routine</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Supplement recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Timeline & goals tracker</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>PDF sent to your email</span>
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={handlePayment}
                disabled={disableConfirm}
                className={`w-full font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg ${
                  disableConfirm
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white shadow-lg"
                }`}
              >
                {disableConfirm ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    Pay ${paymentAmount} & Get Plan
                  </>
                )}
              </button>

              <button
                onClick={handlePaymentAbandoned}
                className="w-full border-2 border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-5 h-5" />
                Cancel
              </button>
            </div>

            {/* Security Notice */}
            <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
              🔒 Secure payment • Instant access to your plan
            </p>
          </motion.div>
        </div>
      )}

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
