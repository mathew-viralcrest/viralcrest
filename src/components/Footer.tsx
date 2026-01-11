"use client";
import { Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-black text-white pt-24 pb-8 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">

                    {/* Left Column: Headline */}
                    <div className="lg:col-span-6">
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-2xl">
                            Fuel Your Brand's Potential with Results-Focused Strategies
                        </h2>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Middle Column: Address & Socials */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold mb-6">Address</h3>
                        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                            Kerala, India
                        </p>

                        <div className="flex items-center gap-3">
                            <a href="#" className="w-10 h-10 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all bg-black hover:bg-white/10">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all bg-black hover:bg-white/10">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all bg-black hover:bg-white/10">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold mb-6">Say Hello</h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                <a href="mailto:info@viralcrest.com" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                                    info@viralcrest.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                                <a href="tel:+917012780370" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                                    +917012780370
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-slate-800 mb-8 relative">
                    {/* Back to Top Button sitting on the line */}
                    <button
                        onClick={scrollToTop}
                        className="absolute right-0 -top-5 w-10 h-10 bg-[#5057e6] rounded-lg flex items-center justify-center text-white shadow-lg hover:bg-[#4b48d6] transition-colors"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>

                {/* Bottom Bar: Links & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
                    <ul className="flex flex-wrap justify-center md:justify-start gap-8">
                        <li><a href="/" className="hover:text-white transition-colors border-b border-white pb-0.5 text-white">Home</a></li>
                        <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                        <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                    </ul>

                    <div className="text-center md:text-right">
                        Viralcrest © 2026. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
