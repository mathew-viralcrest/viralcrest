import type { Metadata } from "next";
import GeometricBackground from "@/components/GeometricBackground";
import {
    CheckCircle2,
    Palette,
    Layers,
    PenTool,
    ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Branding & Design | Viralcrest",
};

const features = [
    {
        title: "Visual Identity",
        description:
            "Creating a cohesive look for your brand, including logos, color palettes, and typography that reflect your values.",
        Icon: Palette,
    },
    {
        title: "Marketing Materials",
        description:
            "Designing professional business cards, brochures, and digital assets that leave a lasting impression.",
        Icon: Layers,
    },
    {
        title: "UI/UX Design",
        description:
            "Designing intuitive and beautiful user interfaces for websites and apps that delight users and drive conversions.",
        Icon: PenTool,
    },
];

const benefits = [
    "Strong Brand Recognition",
    "Professional Image",
    "Emotional Customer Connection",
    "Consistent Visual Communication",
    "Differentiation from Competitors",
    "Increased Brand Value",
];

export default function BrandingDesignPage() {
    return (
        <main className="bg-[#0f0f14]">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <GeometricBackground theme="dark" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 font-outfit">
                            Branding & <span className="text-[#8b5cf6]">Design</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
                            Define who you are. We craft memorable brand identities that
                            resonate with your audience and stand the test of time.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-[#8b5cf6] text-white rounded-full font-bold hover:bg-[#7c3aed] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Build Your Brand <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Detail Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Design That Tells <br />
                                <span className="text-[#8b5cf6]">Your Story</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Great design is about more than just looking good; it's about
                                communication. Your brand's visual identity dictates how the world
                                perceives you. We help you control that narrative.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Our design team dives deep into your business goals to create a
                                visual language that speaks directly to your target audience,
                                fostering trust and loyalty from the very first interaction.
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
                                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop"
                                alt="Design Tools"
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
                            Our Design Services
                        </h2>
                        <p className="text-slate-400 text-lg">
                            From logos to full brand guidelines, we cover it all.
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
                                Ready to Stand Out?
                            </h2>
                            <p className="text-slate-400 text-lg mb-10">
                                Elevate your business with professional branding. Make an impact
                                that lasts.
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
