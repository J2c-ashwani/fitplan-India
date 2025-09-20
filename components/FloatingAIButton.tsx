"use client"

import Link from "next/link"
import { useState } from "react"
import { MessageCircle } from "lucide-react" // icon

export default function FloatingAIButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href="/ai-coach"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-200"
      style={{
        width: isHovered ? "60px" : "56px",
        height: isHovered ? "60px" : "56px",
      }}
    >
      <MessageCircle className="text-white w-7 h-7" />
    </Link>
  )
}
