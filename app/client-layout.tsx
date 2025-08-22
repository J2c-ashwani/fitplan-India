"use client"

import type React from "react"
import { GoogleAnalytics } from "@/components/analytics"
import { Suspense } from "react"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
    </>
  )
}
