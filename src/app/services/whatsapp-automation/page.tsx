import type { Metadata } from "next";
import GeometricBackground from "@/components/GeometricBackground";
import ServiceMarquee from "@/components/ServiceMarquee";
import {
    CheckCircle2,
    MessageCircle,
    Bot,
    Zap,
    ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
    title: "WhatsApp Automation | Viralcrest",
};

const whatsappExpertise = [
    "Broadcast Campaigns",
    "Automated Workflows",
    "Chatbot Integration",
    "Customer Support",
    "CRM Integration",
    "Order Notifications",
    "Lead Qualification",
    "24/7 Availability",
];

const features = [
    {
        title: "Automated Responses",
        description:
            "Instantly reply to common customer queries 24/7, improving satisfaction and reducing support workload.",
        Icon: Bot,
    },
    {
        title: "Broadcast Campaigns",
        description:
            "Send personalized promotions, updates, and reminders to your entire customer list with high open rates.",
        Icon: MessageCircle,
    },
    {
        title: "CRM Integration",
        description:
            "Seamlessly connect WhatsApp with your CRM to track interactions and manage customer relationships effectively.",
        Icon: Zap,
    },
];

const benefits = [
    "98% Open Rates on Messages",
    "Instant Customer Support",
    "Personalized Marketing at Scale",
    "Reduced Operational Costs",
    "Higher Customer Engagement",
    "Automated Sales Funnels",
];

export default function WhatsAppAutomationPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <GeometricBackground />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 font-outfit">
                            WhatsApp <span className="text-[#5057e6]">Automation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
                            Connect with your customers where they are. Leverage the power of
                            WhatsApp to automate support and drive sales.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-[#5057e6] text-white rounded-full font-bold hover:bg-[#4349c2] transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Start Automating <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expertise Marquee */}
            <ServiceMarquee items={whatsappExpertise} />

            {/* Service Detail Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                Direct Access to <br />
                                <span className="text-[#5057e6]">Your Customers</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                WhatsApp is the most popular messaging app in the world. Using it
                                for business allows you to communicate with your customers
                                directly on their mobile phones, achieving engagement rates that
                                email can only dream of.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                Our automation solutions help you handle inquiries, process
                                orders, and send updates automatically, ensuring your business is
                                always "on" without requiring extra staff.
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
                                src="/services/whatsapp-automation.jpg"
                                alt="WhatsApp Messaging"
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
                            Automation Features
                        </h2>
                        <p className="text-slate-500 text-lg">
                            Powerful tools to streamline your communication.
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
                                Ready to Chat?
                            </h2>
                            <p className="text-slate-400 text-lg mb-10">
                                Unlock the potential of WhatsApp Marketing. Connect faster, sell
                                smarter.
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
