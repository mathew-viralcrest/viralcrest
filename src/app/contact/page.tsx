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
        <div className="relative min-h-screen pt-20 overflow-hidden">
            <GeometricBackground />

            <main className="container mx-auto px-6 py-12 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 font-outfit">
                        Let's Start a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5057e6] to-indigo-600">
                            Conversation
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
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
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#5057e6]/5 text-[#5057e6] group-hover:bg-[#5057e6] group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Call Us
                                    </h3>
                                    <p className="text-slate-600 mb-1">
                                        Mon-Fri from 9am to 6pm
                                    </p>
                                    <a
                                        href="tel:+919207220088"
                                        className="text-lg font-semibold text-[#5057e6] hover:text-[#5057e6]/80 transition-colors"
                                    >
                                        +91 92072 20088
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Email Us
                                    </h3>
                                    <p className="text-slate-600 mb-1">
                                        Our team will get back to you within 24 hours.
                                    </p>
                                    <a
                                        href="mailto:info@viralcrest.com"
                                        className="text-lg font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                                    >
                                        info@viralcrest.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Visit Us
                                    </h3>
                                    <p className="text-slate-600 mb-1">
                                        Come say hello at our office headquarters.
                                    </p>
                                    <p className="text-lg font-semibold text-slate-900">
                                        Kollam, Kerala, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-white/50">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">
                            Send us a message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-slate-700"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#5057e6] focus:ring-4 focus:ring-[#5057e6]/10 outline-none transition-all placeholder:text-slate-400"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-slate-700"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#5057e6] focus:ring-4 focus:ring-[#5057e6]/10 outline-none transition-all placeholder:text-slate-400"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="phone"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    Phone Number (Optional)
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#5057e6] focus:ring-4 focus:ring-[#5057e6]/10 outline-none transition-all placeholder:text-slate-400"
                                    placeholder="+91 00000 00000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-slate-700"
                                >
                                    How can we help?
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#5057e6] focus:ring-4 focus:ring-[#5057e6]/10 outline-none transition-all placeholder:text-slate-400 resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#5057e6] to-indigo-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-[#5057e6]/30 transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Send Message
                            </button>
                            <p className="text-xs text-center text-slate-500 mt-4">
                                By sending this form you agree to our{" "}
                                <a href="#" className="text-[#5057e6] hover:underline">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-[#5057e6] hover:underline">
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
