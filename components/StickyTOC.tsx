"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface TOCItem {
    id: string
    label: string
}

interface StickyTOCProps {
    items: TOCItem[]
}

export default function StickyTOC({ items }: StickyTOCProps) {
    const [activeId, setActiveId] = useState<string>("")
    const [isOpen, setIsOpen] = useState(false)

    // Intersection Observer to highlight active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "0px 0px -80% 0px" } // Trigger when section hits top part of view
        )

        items.forEach((item) => {
            const element = document.getElementById(item.id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [items])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Offset for header
                behavior: "smooth",
            })
            setIsOpen(false) // Close mobile menu if open
        }
    }

    if (items.length === 0) return null

    return (
        <>
            {/* Desktop Sidebar TOC - Stick to left or right */}
            <div className="hidden xl:block fixed left-8 top-32 z-40 w-64 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-200 shadow-sm max-h-[70vh] overflow-y-auto">
                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">In This Guide</h4>
                <ul className="space-y-1">
                    {items.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={cn(
                                    "text-sm text-left w-full py-1.5 px-2 rounded-md transition-all duration-200 flex items-center group",
                                    activeId === item.id
                                        ? "bg-emerald-50 text-emerald-700 font-medium"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                                )}
                            >
                                {activeId === item.id && <ChevronRight className="w-3 h-3 mr-1.5 text-emerald-500" />}
                                <span className="truncate">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Sticky Bottom Bar */}
            <div className="xl:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-sm">
                <div className="bg-white/95 backdrop-blur-md rounded-full shadow-xl border border-emerald-100 p-1.5 flex items-center justify-between">
                    <span className="pl-4 text-sm font-semibold text-emerald-800 truncate max-w-[200px]">
                        {items.find(i => i.id === activeId)?.label || "Table of Contents"}
                    </span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-700 transition"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Expanded Menu */}
                {isOpen && (
                    <div className="absolute bottom-16 left-0 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-5">
                        <div className="p-3 bg-emerald-50 border-b border-emerald-100">
                            <h4 className="font-bold text-emerald-800 text-sm">Navigate this Guide</h4>
                        </div>
                        <div className="max-h-[50vh] overflow-y-auto p-2">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={cn(
                                        "w-full text-left p-3 rounded-lg text-sm mb-1 transition-colors",
                                        activeId === item.id
                                            ? "bg-emerald-50 text-emerald-700 font-medium"
                                            : "text-gray-600 hover:bg-gray-50"
                                    )}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
