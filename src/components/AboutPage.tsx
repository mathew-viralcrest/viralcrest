"use client";

import ServiceMarquee from "@/components/ServiceMarquee";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import {
    Target,
    BarChart3,
    Rocket,
    ArrowRight,
} from "lucide-react";

const expertise = [
    "Performance Marketing",
    "Web Development",
    "AI Automation",
    "Branding & Design",
    "SEO Optimization",
    "E-commerce",
    "WhatsApp Marketing",
    "Lead Generation",
];

const values = [
    {
        title: "Strategy before execution",
        description:
            "We plan before we act. Every campaign and line of code starts with a clear understanding of your business goals.",
        Icon: Target,
    },
    {
        title: "Data over assumptions",
        description:
            "Decisions backed by real numbers. We constantly analyze performance data to optimize and improve results.",
        Icon: BarChart3,
    },
    {
        title: "Simple systems that scale",
        description:
            "Complexity kills growth. We build streamlined, efficient systems that can grow with your business without breaking.",
        Icon: Rocket,
    },
];

export default function AboutPage() {
    return (
        <main className="bg-[#0f0f14]">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Subtle Wave/Grid Pattern */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
                    style={{
                        backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                ></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-[#8b5cf6] uppercase bg-[#8b5cf6]/10 rounded-full">
                            Who We Are
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 font-outfit">
                            About <span className="text-[#8b5cf6]">Viralcrest</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
                            We are a results-focused digital marketing agency. We help businesses
                            grow through performance marketing, conversion-driven websites, and
                            automation-led systems.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-[#8b5cf6] text-white rounded-full font-bold hover:bg-[#7c3aed] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Work With Us <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expertise Marquee */}
            <ServiceMarquee items={expertise} />

            {/* Service Detail Section (About Overview) - Replaced with Homepage AboutSection */}
            <AboutSection />

            {/* Features (Values) Grid */}
            <section className="py-24 bg-[#0f0f14]">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Our Approach
                        </h2>
                        <p className="text-slate-400 text-lg">
                            We focus on execution, transparency, and results. No long contracts. No unnecessary complexity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-[#18181b] p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-6">
                                    <feature.Icon className="w-6 h-6 text-[#8b5cf6]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <PortfolioSection />

            {/* CTA Section */}
            <section className="py-24 bg-[#0f0f14]">
                <div className="container mx-auto px-6">
                    <div className="bg-[#18181b] rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/5">
                        {/* Decorative Pattern */}
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage:
                                    "radial-gradient(#fff 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                            }}
                        ></div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Ready to Grow Your Business?
                            </h2>
                            <p className="text-slate-400 text-lg mb-10">
                                Let's build a strategy that works for you. Contact us today to discuss your goals.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b5cf6] text-white rounded-full font-bold hover:bg-[#7c3aed] transition-colors shadow-lg hover:shadow-[#8b5cf6]/25"
                            >
                                Get in Touch <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
