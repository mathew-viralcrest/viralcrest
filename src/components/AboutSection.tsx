"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="relative py-24 overflow-hidden bg-white" id="about">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image Grid & Experience Badge */}
                    <div className="relative">
                        {/* 1. Large Main Experience Badge */}


                        {/* 2. Main Team Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative z-10 rounded-[2.5rem] overflow-hidden ml-12 mt-12 shadow-2xl border-4 border-slate-100"
                        >
                            {/* Fallback image if user hasn't provided one - Agency Team Working */}
                            <img
                                src="/about/team.jpg"
                                alt="Viralcrest Team working on strategy"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        </motion.div>

                        {/* Decorative Dots Pattern */}
                        <div className="absolute -bottom-10 -right-10 z-0 opacity-20">
                            <svg width="100" height="100" fill="none" viewBox="0 0 100 100">
                                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="2" className="text-[#5057e6]" fill="currentColor" />
                                </pattern>
                                <rect width="100" height="100" fill="url(#dots)" />
                            </svg>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Section Tag */}
                            <div className="flex items-center gap-2 mb-6 text-[#5057e6] font-semibold tracking-wide uppercase text-sm">
                                <Target size={18} />
                                <span>About Us</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
                                Who We Are
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                At <span className="font-bold text-[#5057e6]">Viralcrest</span>, we specialize in crafting innovative digital marketing strategies that drive real business growth. Our approach ensures your brand stays ahead in the competitive digital landscape.
                            </p>


                        </motion.div>


                    </div>

                </div>
            </div>
        </section>
    );
}
