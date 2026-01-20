import type { Metadata } from "next";
import GeometricBackground from "@/components/GeometricBackground";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Viralcrest - Premium Digital Agency",
    description:
        "Get in touch with Viralcrest. We are ready to help you transform your digital presence.",
};

export default function ContactPage() {
    return (
        <div className="relative min-h-screen pt-20 overflow-hidden bg-[#0f0f14]">
            <GeometricBackground theme="dark" />

            <main className="container mx-auto px-6 py-12 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 font-outfit">
                        Let's Start a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-indigo-600">
                            Conversation
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                        Whether you have a question about our services, pricing, or just
                        want to say hello, we're ready to answer all your questions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Contact Information */}
                    <div className="space-y-12">
                        {/* Info Cards */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#8b5cf6]/10 text-[#8b5cf6] group-hover:bg-[#8b5cf6] group-hover:text-white transition-all duration-300 shadow-sm border border-white/5 group-hover:border-[#8b5cf6]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Call Us
                                    </h3>
                                    <p className="text-slate-400 mb-1">
                                        Mon-Fri from 9am to 6pm
                                    </p>
                                    <a
                                        href="tel:+919207220088"
                                        className="text-lg font-semibold text-[#8b5cf6] hover:text-[#8b5cf6]/80 transition-colors"
                                    >
                                        +91 92072 20088
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm border border-white/5 group-hover:border-indigo-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Email Us
                                    </h3>
                                    <p className="text-slate-400 mb-1">
                                        Our team will get back to you within 24 hours.
                                    </p>
                                    <a
                                        href="mailto:info@viralcrest.com"
                                        className="text-lg font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                                    >
                                        info@viralcrest.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm border border-white/5 group-hover:border-pink-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Visit Us
                                    </h3>
                                    <p className="text-slate-400 mb-1">
                                        Come say hello at our office headquarters.
                                    </p>
                                    <p className="text-lg font-semibold text-white">
                                        Kollam, Kerala, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            Send us a message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-slate-300"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#8b5cf6] focus:ring-4 focus:ring-[#8b5cf6]/10 outline-none transition-all placeholder:text-slate-500"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-slate-300"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#8b5cf6] focus:ring-4 focus:ring-[#8b5cf6]/10 outline-none transition-all placeholder:text-slate-500"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="phone"
                                    className="text-sm font-medium text-slate-300"
                                >
                                    Phone Number (Optional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#8b5cf6] focus:ring-4 focus:ring-[#8b5cf6]/10 outline-none transition-all placeholder:text-slate-500"
                                    placeholder="+91 00000 00000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-slate-300"
                                >
                                    How can we help?
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#8b5cf6] focus:ring-4 focus:ring-[#8b5cf6]/10 outline-none transition-all placeholder:text-slate-500 resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#8b5cf6] to-indigo-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-[#8b5cf6]/30 transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Send Message
                            </button>
                            <p className="text-xs text-center text-slate-500 mt-4">
                                By sending this form you agree to our{" "}
                                <a href="#" className="text-[#8b5cf6] hover:underline">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-[#8b5cf6] hover:underline">
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
