import type { Metadata } from "next";
import GeometricBackground from "@/components/GeometricBackground";
import ServiceMarquee from "@/components/ServiceMarquee";
import PerformanceProcess from "@/components/PerformanceProcess";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Performance Marketing | Viralcrest",
};

const channels = [
    {
        title: "Meta Ads (Facebook & Instagram)",
        description:
            "We launch high-performing ads using UGC, remarketing, and creative testing to maximize ROAS and scale your brand socially.",
        image: "/services/social-media-marketing.jpg",
    },
    {
        title: "Google & YouTube Ads",
        description:
            "Performance-driven Search, Shopping, and Video campaigns that capture high-intent traffic and convert searchers into buyers.",
        image: "/services/pay-per-click.jpg",
    },
    {
        title: "TikTok Ads",
        description:
            "Tap into the TikTok ecosystem with thumb-stopping creatives and sound-led campaigns that connect with Gen Z & Millennial users.",
        image: "/services/branding-design.jpg",
    },
    {
        title: "Snapchat Ads",
        description:
            "Reach younger audiences through interactive, engaging, and high-converting ad formats designed for the Snap generation.",
        image: "/services/ecommerce-development.jpg",
    },

    {
        title: "Performance Creative",
        description:
            "We plan, script, and build high-converting creatives — UGC, motion graphics, and carousels — tailored for every funnel stage.",
        image: "/services/ai-content-creation.jpg",
    },
];

export default function PerformanceMarketingPage() {
    return (
        <main className="bg-[#0f0f14]">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <GeometricBackground theme="dark" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Breadcrumbs */}

                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 font-outfit leading-tight">
                            Full-Funnel Paid <br />
                            <span className="text-[#8b5cf6]">Ad Strategies</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
                            We drive conversions and revenue across Meta, Google, TikTok, and
                            more. Scale your brand with data-backed decisions.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-[#8b5cf6] text-white rounded-full font-bold hover:bg-[#7c3aed] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Let's Scale Your Brand <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Marquee */}
            <ServiceMarquee
                items={[
                    "ROAS Optimization",
                    "Targeted Ads",
                    "High Conversions",
                    "Meta Ads",
                    "Google PPC",
                    "Scale Your Brand",
                    "Data-Driven Results",
                ]}
            />

            {/* Channels Grid (Services) */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Multi-Channel Growth
                        </h2>
                        <p className="text-slate-400 text-lg">
                            We manage the entire ecosystem to capture demand wherever it
                            exists.
                        </p>
                    </div>

                    <div className="flex flex-col gap-[30vh] lg:gap-[40vh] pb-24">
                        {channels.map((channel, index) => (
                            <div
                                key={index}
                                className="group relative w-full aspect-square md:aspect-[2.4/1] rounded-3xl overflow-hidden flex flex-col justify-end p-6 md:p-12 transition-all hover:shadow-2xl cursor-pointer"
                                style={{
                                    position: "sticky",
                                    top: `${120 + index * 40}px`,
                                    zIndex: index,
                                }}
                            >
                                {/* Background Image - Always Visible */}
                                <div className="absolute inset-0 z-0 transition-all duration-500">
                                    <img
                                        src={channel.image}
                                        alt={channel.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                        <div className="max-w-2xl">
                                            <div className="text-sm font-bold text-[#8b5cf6] mb-3 uppercase tracking-widest">
                                                Channel Info
                                            </div>
                                            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                                {channel.title}
                                            </h3>
                                            <p className="text-slate-200 text-base md:text-lg leading-relaxed opacity-90 font-medium max-w-xl">
                                                {channel.description}
                                            </p>
                                        </div>

                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#8b5cf6] text-white flex-shrink-0 flex items-center justify-center group-hover:bg-white group-hover:text-[#8b5cf6] transition-all shadow-lg backdrop-blur-sm">
                                            <ArrowRight
                                                size={28}
                                                className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <PerformanceProcess />

            {/* CTA Section */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-6">
                    <div className="bg-white/5 rounded-[2.5rem] p-12 md:p-24 text-center border border-white/10 shadow-sm relative overflow-hidden">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Ready to Scale?
                            </h2>
                            <p className="text-slate-400 text-lg mb-10">
                                Partner with the agency that treats your budget like its own.
                                Let's drive measurable growth today.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b5cf6] text-white rounded-full font-bold hover:bg-[#7c3aed] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Book a Strategy Call <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
