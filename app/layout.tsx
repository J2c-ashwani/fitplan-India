
import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"
import { SchemaMarkup } from "@/components/schema-markup"
import Link from "next/link"

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
  authors: [{ name: "FitPlan India", url: "https://fitplanindia.com" }],
  creator: "FitPlan India",
  publisher: "FitPlan India",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
        <ClientLayout>
          {/* ✅ Header */}
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-16 items-center justify-between px-6 mx-auto">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 ml-4">
                <span className="text-2xl font-bold text-primary">
                  FitPlan India
                </span>
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8 mr-6">
                <Link href="/" className="hover:text-primary">Home</Link>
                <Link href="/plans" className="hover:text-primary">Plans</Link>
                <Link href="/tools" className="hover:text-primary">Tools</Link>
                <Link href="/blog" className="hover:text-primary">Blog</Link>
                <Link href="/contact" className="hover:text-primary">Contact</Link>
                <Link
                  href="/consultation"
                  className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
                >
                  Book Consultation
                </Link>
              </nav>
            </div>
          </header>

          {/* ✅ Page Content */}
          <main>{children}</main>

        </ClientLayout>
      </body>
    </html>
  )
}