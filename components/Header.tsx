"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Diet", href: "/blog" },
    { title: "Workouts", href: "/workouts" },
    { title: "Plans", href: "/plans" },
    { title: "Tools", href: "/tools" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-6 mx-auto">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center ml-4">
          <Image
            src="/logo.png"
            alt="FitPlan India Logo"
            width={56}
            height={56}
            className="h-14 w-auto"
            priority
          />
          <span className="ml-0.5 text-2xl font-bold text-green-700">
            FitPlan India
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mr-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.title}
            </Link>
          ))}

          {/* AI Coach highlighted as CTA button */}
          <Link
            href="/ai-coach"
            className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
            🧠 AI Coach
          </Link>

          <Link
            href="/contact#contact-form"
            className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <div
            className={`w-6 h-0.5 bg-primary mb-1 transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          />
          <div
            className={`w-6 h-0.5 bg-primary mb-1 transition-opacity ${mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
          />
          <div
            className={`w-6 h-0.5 bg-primary transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background border-t border-b shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            {/* AI Coach button for mobile menu */}
            <Link
              href="/ai-coach"
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              🧠 AI Coach
            </Link>

            <Link
              href="/contact#contact-form"
              className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
