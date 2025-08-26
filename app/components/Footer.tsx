"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand & About */}
        <div>
          <h3 className="text-xl font-bold flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21c-4.418 0-8-3.582-8-8 0-3.092 1.582-5.844 4-7.418V5a4 4 0 118 0v.582c2.418 1.574 4 4.326 4 7.418 0 4.418-3.582 8-8 8z"
              />
            </svg>
            <span>FitPlan India</span>
          </h3>
          <p className="text-sm mt-3 text-gray-400">
            Personalized weight loss plans for every Indian, every condition.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/plans" className="hover:text-white">Weight Loss Plans</Link></li>
            <li><Link href="/tools" className="hover:text-white">Calculators</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Health Conditions */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Health Conditions</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/blog/pcos" className="hover:text-white">PCOS</Link></li>
            <li><Link href="/blog/thyroid" className="hover:text-white">Thyroid</Link></li>
            <li><Link href="/blog/diabetes" className="hover:text-white">Diabetes</Link></li>
            <li><Link href="/blog/obesity" className="hover:text-white">Obesity</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} FitPlan India. All rights reserved. This is not medical advice. Please consult a doctor.
        </p>
      </div>
    </footer>
  )
}
