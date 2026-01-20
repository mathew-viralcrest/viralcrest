import type { Metadata } from "next";
import GeometricBackground from "@/components/GeometricBackground";
import ServiceMarquee from "@/components/ServiceMarquee";
import PortfolioSection from "@/components/PortfolioSection";
import {
    CheckCircle2,
    Globe,
    Code2,
    Smartphone,
    ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Website Development | Viralcrest",
};

const webDevExpertise = [
    "Custom Web Apps",
    "E-commerce Development",
    "UI/UX Design",
    "Speed Optimization",
    "Mobile-First Design",
    "Cloud Computing Systems",
    "Search Engine Friendly",
    "Secure & Scalable",
];

const features = [
    {
        title: "Responsive Design",
        description:
            "We build websites that look stunning and perform flawlessly on every device, from desktop monitors to mobile phones.",
        Icon: Smartphone,
    },
    {
        title: "Custom Development",
        description:
            "Tailor-made solutions that fit your specific business needs, ensuring scalability and security without the bloat.",
        Icon: Code2,
    },
    {
        title: "SEO-Friendly Structure",
        description:
            "Built with search engines in mind, featuring clean code, fast load times, and proper semantic structure for better ranking.",
        Icon: Globe,
    },
];

const benefits = [
    "Fast Loading Speed & High Performance",
    "Mobile-First & Responsive Layouts",
    "Secure & Scalable Architecture",
    "User-Friendly Content Management",
    "Integration with Third-Party Tools",
    "Ongoing Support & Maintenance",
];

export default function WebsiteDevelopmentPage() {
    return (
        <main className="bg-[#0f0f14]">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <GeometricBackground theme="dark" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 font-outfit">
                            Website <span className="text-[#8b5cf6]">Development</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
                            Create a powerful digital presence with our custom web development
                            services. We build sites that engage, convert, and scale.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-[#8b5cf6] text-white rounded-full font-bold hover:bg-[#7c3aed] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Start Your Project <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expertise Marquee */}
            <ServiceMarquee items={webDevExpertise} />

            {/* Service Detail Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Building Your <br />
                                <span className="text-[#8b5cf6]">Digital Foundation</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Your website is often the first interaction a potential customer
                                has with your brand. We ensure it's a memorable one. Our team of
                                expert developers and designers collaborates to create websites
                                that are not only visually striking but also functionally robust.
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                Whether you need a simple corporate landing page or a complex web
                                application, we utilize the latest technologies to deliver a
                                product that exceeds your expectations and drives your business
                                forward.
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
                                src="/services/web-development.jpg"
                                alt="Web Development Coding"
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
                            Our Development expertise
                        </h2>
                        <p className="text-slate-400 text-lg">
                            We use modern stacks to ensure your website is future-proof and
                            efficient.
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

            {/* Portfolio Section */}
            <PortfolioSection />

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
                                Ready to Build Something Amazing?
                            </h2>
                            <p className="text-slate-400 text-lg mb-10">
                                Let's turn your ideas into a fully functional, high-performance
                                website. Contact us today for a free consultation.
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
