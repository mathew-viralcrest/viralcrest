"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const processSteps = [
    {
        step: "01",
        title: "Discovery & Audit",
        description: "We deep dive into your brand, understanding goals, analyzing past campaigns, and studying audience insights.",
        color: "#8b5cf6"
    },
    {
        step: "02",
        title: "Funnel Strategy",
        description: "We build a full-funnel strategy (TOF, MOF, BOF), defining KPIs, allocating budgets, and selecting projected high-yield platforms.",
        color: "#7c3aed"
    },
    {
        step: "03",
        title: "Creative Production",
        description: "Crafting ad creatives (UGC, statics, motion) tailored to each audience segment with high-performing copy.",
        color: "#db2777"
    },
    {
        step: "04",
        title: "Launch & Optimize",
        description: "Campaigns go live with daily monitoring. We optimize based on ROAS and CPA, pausing underperformers and scaling winners.",
        color: "#ea580c"
    },
    {
        step: "05",
        title: "Reporting & Iteration",
        description: "Weekly clear insights and next steps. We relentlessly test new angles, audiences, and formats to beat previous benchmarks.",
        color: "#16a34a"
    }
];

export default function PerformanceProcess() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left: Sticky Header */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                                    Our Proven <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-purple-600">Scaling Process</span>
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                    We don't guess. We execute a systematic approach to finding and scaling your winning ads, driven by data and creativity.
                                </p>
                                <a href="/contact" className="inline-flex items-center gap-2 text-[#8b5cf6] font-bold border-b-2 border-[#8b5cf6]/20 pb-1 hover:border-[#8b5cf6] transition-all group">
                                    Start Your Audit
                                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Connect Steps List */}
                    <div className="lg:w-2/3 relative">

                        {/* Connecting Line (Desktop) */}
                        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-white/10 hidden md:block">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#8b5cf6] to-purple-600 origin-top"
                                style={{ height: "100%", scaleY: scrollYProgress }}
                            />
                        </div>

                        <div className="space-y-12">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative pl-0 md:pl-24"
                                >
                                    {/* Number Bubble */}
                                    <div
                                        className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-full bg-[#18181b] border-4 border-[#0f0f14] items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300"
                                        style={{ borderColor: step.color }} // Dynamic border color
                                    >
                                        <span className="text-xl font-bold text-white">{step.step}</span>
                                    </div>

                                    {/* Mobile Number */}
                                    <div className="md:hidden text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400 mb-4">
                                        {step.step}
                                    </div>

                                    {/* Card Content */}
                                    <div className="bg-white/5 p-8 rounded-2xl shadow-sm border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#8b5cf6] transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
