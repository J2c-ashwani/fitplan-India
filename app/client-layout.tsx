"use client"

import type React from "react"
import { GoogleAnalytics } from "@/components/analytics"
import { Suspense } from "react"
import Footer from "./components/Footer" // ✅ import footer

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main>{children}</main>
      <Footer /> {/* ✅ Footer added */}
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
    </>
  )
}
