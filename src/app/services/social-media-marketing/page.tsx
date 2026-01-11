import type { Metadata } from "next";
import GeometricBackground from "@/components/GeometricBackground";
import ServiceMarquee from "@/components/ServiceMarquee";
import { CheckCircle2, Heart, Share2, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Social Media Marketing | Viralcrest",
};

const socialMediaExpertise = [
    "Content Strategy",
    "Community Management",
    "Influencer Marketing",
    "Reels & TikTok Creation",
    "Social Advertising",
    "Analytics & Reporting",
    "Brand Awareness",
    "Engagement Growth",
];

const features = [
    {
        title: "Content Strategy",
        description:
            "Developing a roadmap for your social channels that aligns with your business goals and resonates with your target audience.",
        Icon: Share2,
    },
    {
        title: "Community Management",
        description:
            "Actively engaging with your followers, responding to comments, and building a loyal community around your brand.",
        Icon: Users,
    },
    {
        title: "Influencer Marketing",
        description:
            "Connecting you with key opinion leaders in your niche to amplify your message and reach new demographics.",
        Icon: Heart,
    },
];

const benefits = [
    "Increased Brand Awareness",
    "Direct Customer Engagement",
    "Higher Website Traffic",
    "Improved Brand Loyalty",
    "Viral Content Potential",
    "Real-Time Customer Feedback",
];

export default function SocialMediaMarketingPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <GeometricBackground />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 font-outfit">
                            Social Media <span className="text-[#5057e6]">Marketing</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
                            Build a brand that people love. We create engaging social media
                            strategies that spark conversations and drive growth.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-[#5057e6] text-white rounded-full font-bold hover:bg-[#4349c2] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Grow Your Following <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expertise Marquee */}
            <ServiceMarquee items={socialMediaExpertise} />

            {/* Service Detail Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Turn Followers into <br />
                                <span className="text-[#5057e6]">Customers</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Social media is more than just posting pictures; it's about
                                building relationships. We help you connect with your audience on
                                platforms like Instagram, Facebook, LinkedIn, and TikTok in
                                meaningful ways.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                From creative storytelling to strategic scheduling, we manage your
                                online presence so you can focus on running your business while we
                                grow your brand.
                            </p>

                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-slate-700 font-medium"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                            <CheckCircle2 size={14} strokeWidth={3} />
                                        </div>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#5057e6]/20 to-blue-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                            <img
                                src="/services/social-media-marketing.jpg"
                                alt="Social Media Apps on Phone"
                                className="rounded-3xl shadow-2xl w-full object-cover aspect-4/3"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our Social Success
                        </h2>
                        <p className="text-slate-500 text-lg">
                            We manage the full lifecycle of your social media presence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-[#5057e6]/10 rounded-xl flex items-center justify-center mb-6">
                                    <feature.Icon className="w-6 h-6 text-[#5057e6]" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-slate-900 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden">
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
                                Ready to Go Viral?
                            </h2>
                            <p className="text-slate-400 text-lg mb-10">
                                Transform your social media channels into powerful growth engines.
                                Let's make some noise together.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#5057e6] text-white rounded-full font-bold hover:bg-[#4349c2] transition-colors shadow-lg hover:shadow-[#5057e6]/25"
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
