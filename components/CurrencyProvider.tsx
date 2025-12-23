"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Currency = "INR" | "USD"

interface CurrencyContextType {
    currency: Currency
    symbol: string
    loading: boolean
}

const CurrencyContext = createContext<CurrencyContextType>({
    currency: "INR",
    symbol: "₹",
    loading: true,
})

export const useCurrency = () => useContext(CurrencyContext)

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const [currency, setCurrency] = useState<Currency>("INR")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                // Simple check using timezone or IP
                // Primary method: Intl.DateTimeFormat (No API call needed, very fast)
                const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

                // If timezone is Indian Standard Time, assume INR
                if (timeZone === 'Asia/Kolkata' || timeZone === 'Asia/Calcutta') {
                    setCurrency('INR')
                } else {
                    // Fallback/Confirmation: Logic can be improved here
                    // For now, if not in India timezone, default to USD for global
                    setCurrency('USD')
                }
            } catch (error) {
                console.error("Failed to detect location", error)
                setCurrency("INR")
            } finally {
                setLoading(false)
            }
        }

        fetchLocation()
    }, [])

    const symbol = currency === "INR" ? "₹" : "$"

    return (
        <CurrencyContext.Provider value={{ currency, symbol, loading }}>
            {children}
        </CurrencyContext.Provider>
    )
}
