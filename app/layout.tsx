import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"
import { SchemaMarkup } from "@/components/schema-markup" // Fixed import path and changed to named import

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "FitPlan India - Personalized Weight Loss Plans for Every Condition",
    template: "%s | FitPlan India",
  },
  description:
    "Get customized diet plans and expert guidance for PCOS, thyroid, diabetes, and more. Trusted by 10,000+ Indians for successful weight loss. Book consultation for ₹500.",
  keywords: [
    "weight loss",
    "diet plans",
    "PCOS",
    "thyroid",
    "diabetes",
    "Indian diet",
    "nutrition consultation",
    "health",
    "fitness",
    "weight management",
    "personalized diet",
    "nutrition expert",
    "healthy eating",
    "meal plans",
  ],
  authors: [{ name: "FitPlan India", url: "https://fitplanindia.com" }],
  creator: "FitPlan India",
  publisher: "FitPlan India",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fitplanindia.com",
    siteName: "FitPlan India",
    title: "FitPlan India - Personalized Weight Loss Plans for Every Condition",
    description:
      "Specialized weight loss plans for Indians with health conditions like PCOS, thyroid, diabetes. Expert nutrition consultation for ₹500.",
    images: [
      {
        url: "https://fitplanindia.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FitPlan India - Personalized Weight Loss Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitPlan India - Personalized Weight Loss Plans",
    description: "Specialized weight loss plans for Indians with health conditions. Expert consultation for ₹500.",
    images: ["https://fitplanindia.com/og-image.jpg"],
    creator: "@fitplanindia",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  alternates: {
    canonical: "https://fitplanindia.com",
  },
  category: "Health & Fitness",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <style>{`
          html {
            font-family: ${inter.style.fontFamily};
            --font-sans: ${inter.variable};
            --font-heading: ${poppins.variable};
          }
        `}</style>
        <SchemaMarkup type="website" />
        <SchemaMarkup type="organization" />
        <SchemaMarkup type="service" />
      </head>
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
