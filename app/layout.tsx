import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "@/app/globals.css"
import { SchemaMarkup } from "@/components/schema-markup"
import Header from "@/components/Header"
import Footer from "@/app/components/Footer"
import { Analytics } from "@vercel/analytics/next"
import FloatingAIButton from "@/components/FloatingAIButton" // ✅ NEW IMPORT

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
    other: [{ rel: "mask-icon", url: "/favicon.svg", color: "#166534" }],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="theme-color" content="#166534" />

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon.svg" color="#166534" />

        <style>{`
          html {
            font-family: ${inter.style.fontFamily};
            --font-sans: ${inter.variable};
            --font-heading: ${poppins.variable};
          }
        `}</style>

        {/* ✅ Schema Markup */}
        <SchemaMarkup type="website" />
        <SchemaMarkup type="organization" />
        <SchemaMarkup type="service" />

        {/* ✅ Google Analytics */}
        {gaMeasurementId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingAIButton /> {/* ✅ Always visible floating chat button */}
        <Analytics />
      </body>
    </html>
  )
}
