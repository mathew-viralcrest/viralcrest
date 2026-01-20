import type { Metadata } from "next";
import GeometricBackground from "@/components/GeometricBackground";
import ServiceMarquee from "@/components/ServiceMarquee";
import {
    CheckCircle2,
    Sparkles,
    PenTool,
    Image,
    ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
    title: "AI Content Creation | Viralcrest",
};

const aiContentExpertise = [
    "AI Blog Writing",
    "Social Media Captions",
    "Ad Copy Generation",
    "Email Marketing Copy",
    "Product Descriptions",
    "SEO Content Optimization",
    "AI Image Generation",
    "Video Script Writing",
];

const features = [
    {
        title: "AI Copywriting",
        description:
            "Generate persuasive, on-brand copy for blogs, ads, emails, and websites at scale without sacrificing quality.",
        Icon: PenTool,
    },
    {
        title: "Visual Asset Generation",
        description:
            "Create stunning, unique images and graphics for your marketing campaigns using advanced AI art tools.",
        Icon: Image,
    },
    {
        title: "Strategy & Automation",
        description:
            "Integrate AI workflows to streamline your content calendar and ensure consistent, high-value output.",
        Icon: Sparkles,
    },
];

const benefits = [
    "10x Faster Content Production",
    "Consistent Brand Voice",
    "Cost-Effective Content Scaling",
    "Unique & Creative Visuals",
    "SEO-Optimized Output",
    "Data-Backed Topic Strategy",
];

export default function AIContentCreationPage() {
    return (
        <main className="bg-[#0f0f14]">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <GeometricBackground theme="dark" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 font-outfit">
                            AI Content <span className="text-[#8b5cf6]">Creation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
                            Revolutionize your content strategy with Artificial Intelligence.
                            Create high-quality content faster and sharper than ever before.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-[#8b5cf6] text-white rounded-full font-bold hover:bg-[#7c3aed] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Automate Your Content <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expertise Marquee */}
            <ServiceMarquee items={aiContentExpertise} />

            {/* Service Detail Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Content at the <br />
                                <span className="text-[#8b5cf6]">Speed of AI</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Staying relevant means staying active. But producing high-quality
                                content consistently is a challenge. Our AI Content Creation
                                service bridges that gap, combining human creativity with machine
                                efficiency.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                We leverage cutting-edge AI tools to generate blogs, social media
                                posts, ad copy, and visuals that perfectly align with your brand
                                identity, allowing you to scale your presence effortlessly.
                            </p>

                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-slate-300 font-medium"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                                            <CheckCircle2 size={14} strokeWidth={3} />
                                        </div>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/20 to-white/5 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
                                alt="AI Technology Abstract"
                                className="rounded-3xl shadow-2xl w-full object-cover aspect-4/3"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Capabilities
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Next-gen tools to power your storytelling.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/5 p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-[#8b5cf6]/20 rounded-xl flex items-center justify-center mb-6">
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

            {/* CTA Section */}
            <section className="py-24 bg-transparent">
                <div className="container mx-auto px-6">
                    <div className="bg-white/5 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/10">
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
                                Ready to Innovate?
                            </h2>
                            <p className="text-slate-400 text-lg mb-10">
                                Embrace the future of content marketing. Reach more people with
                                less effort.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b5cf6] text-white rounded-full font-bold hover:bg-[#7c3aed] transition-colors shadow-lg hover:shadow-[#8b5cf6]/25"
                            >
                                Get Your Free Proposal <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
