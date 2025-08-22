"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
  }
}

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      // Initialize Google Analytics
      window.gtag =
        window.gtag ||
        (() => {
          ;(window.gtag as any).q = (window.gtag as any).q || []
          ;(window.gtag as any).q.push(arguments)
        })
      window.gtag("js", new Date())
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [GA_MEASUREMENT_ID])

  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Custom event tracking functions
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters)
  }
}

export const trackConsultationRequest = (healthCondition: string, isPaid: boolean) => {
  trackEvent("consultation_request", {
    health_condition: healthCondition,
    consultation_type: isPaid ? "paid" : "free",
    value: isPaid ? 500 : 0,
    currency: "INR",
  })
}

export const trackCalculatorUse = (calculatorType: string) => {
  trackEvent("calculator_used", {
    calculator_type: calculatorType,
  })
}

export const trackPlanView = (planType: string) => {
  trackEvent("plan_viewed", {
    plan_type: planType,
  })
}
