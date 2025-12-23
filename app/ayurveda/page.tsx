import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, Moon, Sun, Wind, Droplet, Flame, Brain, Heart, Activity, Coffee, Smile, Star, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Ayurveda Hub - Ancient Wisdom for Modern Health | FitPlan India",
    description: "Explore our comprehensive Ayurveda guide. Learn about Prakriti, herbal remedies for PCOS, Thyroid, Diabetes, and daily routines for holistic wellness.",
    keywords: ["Ayurveda India", "Ayurvedic Diet", "Prakriti Quiz", "Ayurvedic Herbs", "PCOS Ayurveda", "Thyroid Ayurveda", "Holistic Health India"],
}

export default function AyurvedaHub() {
    const categories = [
        {
            title: "Core Health Conditions",
            icon: <Activity className="w-6 h-6 text-emerald-600" />,
            items: [
                { title: "PCOS Herbs", href: "/ayurveda/pcos-herbs", desc: "5 Essential Herbs for Hormonal Balance" },
                { title: "Thyroid Remedies", href: "/ayurveda/thyroid-remedies", desc: "Natural Boosters for Thyroid Function" },
                { title: "Diabetes Control", href: "/ayurveda/diabetes-control", desc: "Managing Sugar Levels Naturally" },
                { title: "Joint Pain", href: "/ayurveda/joint-pain", desc: "Relief from Arthritis & Inflammation" },
            ],
        },
        {
            title: "Daily Wellness",
            icon: <Sun className="w-6 h-6 text-amber-500" />,
            items: [
                { title: "Weight Loss Routine", href: "/ayurveda/weight-loss-routine", desc: "Dinacharya for Natural Slimming" },
                { title: "Gut Health & Agni", href: "/ayurveda/gut-health", desc: "Improve Digestion & Immunity" },
                { title: "Sleep Hygiene", href: "/ayurveda/sleep-hygiene", desc: "Night Rituals for Deep Sleep" },
                { title: "Stress & Anxiety", href: "/ayurveda/stress-anxiety", desc: "Calming Herbs for the Mind" },
            ],
        },
        {
            title: "Beauty & Vitality",
            icon: <Star className="w-6 h-6 text-pink-500" />,
            items: [
                { title: "Hair Health", href: "/ayurveda/hair-health", desc: "Secrets for Strong, Lustrous Hair" },
                { title: "Skin Glow", href: "/ayurveda/skin-glow", desc: "Natural Solutions for Radiant Skin" },
                { title: "Anti-Aging", href: "/ayurveda/anti-aging", desc: "Rasayana for Youthful Aging" },
                { title: "Eye Care", href: "/ayurveda/eye-care", desc: "Relief for Digital Eye Strain & Dark Circles" },
            ],
        },
        {
            title: "Specialized Care",
            icon: <Heart className="w-6 h-6 text-rose-500" />,
            items: [
                { title: "Post-Pregnancy", href: "/ayurveda/post-pregnancy", desc: "Postpartum Recovery & Lactation" },
                { title: "Acidity & Bloating", href: "/ayurveda/acidity-bloating", desc: "Home Remedies for Acid Reflux" },
                { title: "Men's Vitality", href: "/ayurveda/mens-vitality", desc: "Herbs for Strength & Stamina" },
                { title: "Home Detox", href: "/ayurveda/home-detox", desc: "Weekend Mini-Panchakarma Plan" },
            ],
        },
    ]

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Hero Section */}
            <section className="relative bg-[#064e3b] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge className="bg-amber-400 text-amber-900 hover:bg-amber-300 transition-colors mb-6 text-sm font-bold tracking-wide uppercase px-4 py-1">
                        Medically Reviewed by Dr. Arti (BAMS)
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6">Ayurveda Hub</h1>
                    <p className="text-xl md:text-2xl text-stone-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Discover ancient wisdom for modern living. Explore our expert-curated guides on diet, lifestyle, and natural healing.
                    </p>
                </div>
            </section>

            {/* Prakriti Quiz CTA */}
            <section className="py-12 px-4 -mt-10 relative z-20">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border-t-8 border-emerald-600 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-amber-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsure about your Body Type?</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            According to Ayurveda, health is not one-size-fits-all. Knowing your **Prakriti** (Vata, Pitta, or Kapha) is the key to personalized wellness.
                        </p>
                        <Link
                            href="/tools/prakriti-quiz"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-1"
                        >
                            <Leaf className="w-5 h-5 mr-2" />
                            Take the Free Tridosha Test
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category, idx) => (
                            <div key={idx} className="space-y-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-emerald-100 rounded-lg">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                                </div>
                                <div className="grid gap-4">
                                    {category.items.map((item, i) => (
                                        <Card key={i} className="h-full border hover:border-emerald-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                                            <div>
                                                <CardHeader className="p-4 pb-2">
                                                    <CardTitle className="text-base font-semibold text-gray-900 flex items-center justify-between">
                                                        {item.title}
                                                        <Wind className="w-4 h-4 text-emerald-500 opacity-50" />
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="p-4 pt-0">
                                                    <CardDescription className="text-sm line-clamp-2 mb-4">
                                                        {item.desc}
                                                    </CardDescription>
                                                </CardContent>
                                            </div>
                                            <div className="p-4 pt-0 mt-auto">
                                                <Button
                                                    className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 font-semibold justify-between group"
                                                    variant="ghost"
                                                    asChild
                                                >
                                                    <Link href={item.href}>
                                                        Learn about
                                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Wisdom Section */}
            <section className="bg-amber-50 py-20 px-4">
                <div className="container mx-auto text-center max-w-3xl">
                    <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-6" />
                    <h2 className="text-3xl font-serif text-gray-900 mb-6">Ayurvedic Wisdom of the Day</h2>
                    <blockquote className="text-2xl text-gray-700 italic font-serif leading-loose">
                        "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need."
                    </blockquote>
                    <p className="mt-6 text-gray-600 font-medium">— Ancient Ayurvedic Proverb</p>
                </div>
            </section>
        </div>
    )
}
