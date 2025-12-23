"use client"

import { useCurrency } from "./CurrencyProvider"
import { Skeleton } from "@/components/ui/skeleton"

interface PriceDisplayProps {
    amountIn: number
    amountUs: number
    className?: string
}

export default function PriceDisplay({ amountIn, amountUs, className = "" }: PriceDisplayProps) {
    const { currency, symbol, loading } = useCurrency()

    if (loading) {
        return <span className="h-6 w-16 inline-block bg-muted animate-pulse rounded-md" />
    }

    const price = currency === "INR" ? amountIn : amountUs

    // Format with commas
    const formattedPrice = new Intl.NumberFormat(currency === "INR" ? 'en-IN' : 'en-US').format(price)

    return (
        <span className={className}>
            {symbol}{formattedPrice}
        </span>
    )
}
