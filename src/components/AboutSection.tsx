"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";

export default function AboutSection() {
    const services = [
        "PPC & Paid Ads",
        "Brand Strategy",
        "Conversion Optimization",
        "Performance Marketing",
        "Social Media Growth",
        "Content Marketing"
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-[#0f0f14]" id="about">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Image & Stats Layout */}
                    <div className="flex flex-col gap-6">
                        {/* Top Row */}
                        <div className="flex gap-6 h-[180px] sm:h-[220px]">
                            {/* Experience Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex-[3] bg-[#0f0f14] border border-[#8b5cf6]/30 rounded-[2rem] p-6 lg:p-8 flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_-10px_rgba(139,92,246,0.2)] group"
                            >
                                <div className="absolute inset-0 bg-[#8b5cf6]/5 group-hover:bg-[#8b5cf6]/10 transition-colors duration-500"></div>
                                <div className="relative z-10 flex items-center gap-4">
                                    <span className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#8b5cf6] to-white stroke-2 font-outline-2">
                                        2+
                                    </span>
                                    <span className="text-sm font-medium text-slate-300 leading-tight max-w-[100px]">
                                        Years of Experience on Digital Marketing Services
                                    </span>
                                </div>
                            </motion.div>

                            {/* Small Vertical Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex-[1] rounded-[2rem] overflow-hidden relative hidden sm:block"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                    alt="Team Meeting"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-[#8b5cf6]/10 mix-blend-overlay"></div>
                            </motion.div>
                        </div>

                        {/* Bottom Row - Large Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="h-[300px] md:h-[400px] w-full rounded-[2.5rem] overflow-hidden relative shadow-2xl"
                        >
                            <img
                                src="/about/team.jpg"
                                alt="Viralcrest Core Team"
                                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            />
                            {/* Dark Overlay for better homogeneity */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:pl-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            {/* Section Tag */}
                            <div className="flex items-center gap-2 mb-6 text-[#8b5cf6] font-semibold tracking-wide uppercase text-sm">
                                <Target size={18} className="fill-[#8b5cf6]/20" />
                                <span>About Us</span>
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
                                Who We Are & <br />
                                <span className="text-slate-500">What Drives Us</span>
                            </h2>

                            <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
                                <p>
                                    At <span className="text-white font-medium">Viralcrest</span>, we specialize in crafting innovative digital marketing
                                    strategies that drive real business growth. Our approach ensures your brand
                                    stays ahead in the competitive digital landscape.
                                </p>
                                <p>
                                    Get to know the passionate team behind the strategies, the values that
                                    guide us, and the mission that fuels our growth.
                                </p>
                            </div>

                            {/* Service Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {services.map((service, index) => (
                                    <div key={index} className="flex items-center gap-3 group cursor-default">
                                        <CheckCircle2 size={20} className="text-[#8b5cf6] shrink-0" />
                                        <span className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">
                                            {service}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>

            {/* CSS for Outline Text effect */}
            <style jsx global>{`
                .font-outline-2 {
                    -webkit-text-stroke: 1px #8b5cf6;
                    color: transparent; 
                }
            `}</style>
        </section>
    );
}
