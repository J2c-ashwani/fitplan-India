"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cookie } from "lucide-react"

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookieConsent")
        if (!consent) {
            // Delay showing slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted")
        setIsVisible(false)
    }

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "declined")
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-gray-800 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                    <div className="p-2 bg-emerald-900/30 rounded-lg hidden md:block">
                        <Cookie className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div className="text-sm text-gray-300 leading-relaxed">
                        <p className="font-semibold text-white mb-1">We value your privacy</p>
                        <p>
                            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By
                            clicking "Accept All", you consent to our use of cookies. Read our{" "}
                            <Link href="/privacy" className="text-emerald-400 hover:underline">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Button
                        variant="outline"
                        className="flex-1 sm:flex-none border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                        onClick={handleDecline}
                    >
                        Decline
                    </Button>
                    <Button
                        className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white"
                        onClick={handleAccept}
                    >
                        Accept All
                    </Button>
                </div>
            </div>
        </div>
    )
}
