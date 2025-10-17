"use client"

import Link from "next/link"
import { Heart, Mail, Globe, Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 py-12 px-6 mt-auto border-t-4 border-emerald-600">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand & About */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">FitPlan</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4 max-w-sm">
              Personalized weight loss plans for PCOS, thyroid, diabetes, and more. Trusted by 10,000+ clients worldwide 
              in USA, UK, Canada, Australia.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe className="w-4 h-4 text-emerald-500" />
              <span>Available worldwide via video call</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/plans" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Weight Loss Plans
                </Link>
              </li>
              <li>
                <Link href="/workouts" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Workout Programs
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Free Calculators
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Health Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Plans */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Popular Plans</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/plans/pcos" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">→</span> PCOS Diet Plan
                </Link>
              </li>
              <li>
                <Link href="/plans/hypothyroidism" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Thyroid Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/plans/diabetes" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Diabetes Diet Plan
                </Link>
              </li>
              <li>
                <Link href="/plans/keto" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Keto Diet Plan
                </Link>
              </li>
              <li>
                <Link href="/plans/intermittent-fasting" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="text-emerald-500">→</span> Intermittent Fasting
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Shield className="w-3 h-3 text-emerald-500" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Shield className="w-3 h-3 text-emerald-500" /> Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Shield className="w-3 h-3 text-emerald-500" /> Medical Disclaimer
                </Link>
              </li>
              <li>
                <a href="mailto:support@fitplan.com" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Mail className="w-3 h-3 text-emerald-500" /> Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} FitPlan. All rights reserved worldwide.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-500" />
                USA • UK • Canada • Australia
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                10,000+ Happy Clients
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center md:text-left mt-4">
            <strong>Medical Disclaimer:</strong> This website provides general information and is not medical advice. 
            Always consult with a qualified healthcare provider before starting any diet or exercise program.
          </p>
        </div>
      </div>
    </footer>
  )
}
