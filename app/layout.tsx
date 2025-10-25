import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "@/app/globals.css"
import { SchemaMarkup } from "@/components/schema-markup"
import Header from "@/components/Header"
import Footer from "@/app/components/Footer"
import { Analytics } from "@vercel/analytics/next"
import FloatingAIButton from "@/components/FloatingAIButton"
import Script from "next/script"  // ✅ Added for AdSense

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
    "weight loss India",
    "PCOS diet plan",
    "thyroid diet plan",
    "diabetes diet plan",
    "Indian weight loss program",
    "post pregnancy diet",
    "healthy lifestyle India",
    "personalized diet plan India",
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
      "Custom Indian diet plans for PCOS, thyroid, diabetes, post-pregnancy, and more. Start your health journey with FitPlan India today.",
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
      "Custom Indian diet & lifestyle plans for PCOS, thyroid, diabetes, post-pregnancy, and more.",
    images: ["/og-image.jpg"],
    creator: "@fitplanindia",
  },
  metadataBase: new URL("https://fitplanindia.com"),
  alternates: {
    canonical: "https://fitplanindia.com",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
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

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon.svg" color="#166534" />

        {/* ✅ Preconnect for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <style>{`
          html {
            font-family: ${inter.style.fontFamily};
            --font-sans: ${inter.variable};
            --font-heading: ${poppins.variable};
          }

          html, body {
            overflow-x: hidden;
            width: 100%;
            max-width: 100vw;
          }

          button, a {
            min-height: 44px;
            min-width: 44px;
          }

          html {
            scroll-behavior: smooth;
            -webkit-text-size-adjust: 100%;
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
                  gtag('config', '${gaMeasurementId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingAIButton />
        <Analytics />
      </body>
    </html>
  )
}
