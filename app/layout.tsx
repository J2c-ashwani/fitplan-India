import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "@/app/globals.css"
import { SchemaMarkup } from "@/components/schema-markup"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/app/components/Footer"
import { Suspense } from "react"
import { GoogleAnalytics } from "@/components/analytics" // ✅ FIX: named import

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
    "weight loss India",
    "PCOS diet plan",
    "thyroid diet plan",
    "diabetes diet plan",
    "Indian weight loss program",
    "post pregnancy diet",
    "healthy lifestyle India",
  ],
  authors: [{ name: "FitPlan India", url: "https://fitplanindia.com" }],
  creator: "FitPlan India",
  publisher: "FitPlan India",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/favicon.png", color: "#166534" }],
  },
  openGraph: {
    title: "FitPlan India - Personalized Weight Loss Plans for Every Condition",
    description:
      "Custom Indian diet plans for PCOS, thyroid, diabetes, and more. Start your health journey with FitPlan India today.",
    url: "https://fitplanindia.com",
    siteName: "FitPlan India",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FitPlan India - Personalized Weight Loss Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitPlan India - Personalized Weight Loss Plans for Every Condition",
    description:
      "Custom Indian diet & lifestyle plans for PCOS, thyroid, diabetes, and more.",
    images: ["/og-image.jpg"],
    creator: "@fitplanindia",
  },
  metadataBase: new URL("https://fitplanindia.com"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="theme-color" content="#166534" />
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
        {/* ✅ Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
          <div className="container flex h-16 items-center justify-between px-6 mx-auto">
            {/* Logo + Brand */}
            <Link href="/" className="flex items-center ml-4">
              <Image
                src="/logo.png"
                alt="FitPlan India Logo"
                width={56} // slightly bigger logo
                height={56}
                className="h-14 w-auto"
                priority
              />
              <span className="ml-0.5 text-2xl font-bold text-green-700">
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
                href="/contact"
                className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
              >
                Book Consultation
              </Link>
            </nav>
          </div>
        </header>

        {/* ✅ Page Content */}
        <main>{children}</main>

        {/* ✅ Footer */}
        <Footer />

        {/* ✅ Google Analytics - wrapped in Suspense */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
