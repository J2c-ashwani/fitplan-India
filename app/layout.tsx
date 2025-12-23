import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "@/app/globals.css"
import { JsonLd } from "@/components/json-ld"
import Header from "@/components/Header"
import Footer from "@/app/components/Footer"
import { Analytics } from "@vercel/analytics/next"
import FloatingAIButton from "@/components/FloatingAIButton"
import Script from "next/script"  // ✅ Added for AdSense
import { CurrencyProvider } from "@/components/CurrencyProvider"

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

// ✅ Mobile viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#166534",
}

export const metadata: Metadata = {
  title: {
    default: "FitPlan India - Personalized Weight Loss Plans for Every Condition",
    template: "%s | FitPlan India",
  },
  description:
    "Get customized diet plans and expert guidance for PCOS, thyroid, diabetes, post-pregnancy, and more. Trusted by 10,000+ clients worldwide in USA, UK, Canada, and Australia. Science-based nutrition tailored to your lifestyle and goals.",
  keywords: [
    "Indian diet plan for weight loss",
    "PCOS Indian diet plan",
    "thyroid Indian diet chart",
    "diabetes Indian diet food list",
    "post pregnancy Indian diet",
    "healthy indian recipes for weight loss",
    "personalized indian diet plan",
    "fitplan india",
  ],
  authors: [{ name: "FitPlan India", url: "https://fitplanindia.com" }, { name: "Dr. Arti Kumari", url: "https://fitplanindia.com/about" }],
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
    title: "FitPlan India - Authentic Indian Diet Plans for Global Weight Loss",
    description:
      "#1 Rated Indian Diet Plans for weight loss, PCOS, and Thyroid. Trusted by 20,000+ clients across USA, UK, Canada, Australia & India.",
    url: "https://fitplanindia.com",
    siteName: "FitPlan India",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitPlan India - Authentic Indian Diet Plans for Global Weight Loss",
    description:
      "#1 Rated Indian Diet Plans for weight loss, PCOS, and Thyroid. Trusted by 20,000+ clients across USA, UK, Canada, Australia & India.",
    creator: "@fitplanindia",
  },
  metadataBase: new URL("https://fitplanindia.com"),
  alternates: {
    canonical: "./",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        {/* ✅ Google AdSense (Static tag for crawler verification) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1200907614877581"
          crossOrigin="anonymous"
        ></script>


        {/* ✅ Theme color for mobile browsers */}
        <meta name="theme-color" content="#166534" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#166534" media="(prefers-color-scheme: dark)" />

        {/* ✅ Mobile web app capable */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="FitPlan India" />

        {/* ✅ Schema Markup (Server-Side) */}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FitPlan India",
            url: "https://fitplanindia.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://fitplanindia.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FitPlan India",
            url: "https://fitplanindia.com",
            logo: "https://fitplanindia.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-98765-43210",
              contactType: "customer service",
              areaServed: ["US", "GB", "CA", "AU", "IN", "AE"],
              availableLanguage: ["English", "Hindi"],
            },
            sameAs: [
              "https://facebook.com/fitplanindia",
              "https://instagram.com/fitplanindia",
              "https://twitter.com/fitplanindia",
            ],
          }}
        />

        {/* ✅ Google Analytics */}
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <CurrencyProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingAIButton />
          <Analytics />
        </CurrencyProvider>
      </body>
    </html>
  )
}
