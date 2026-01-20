"use client";
import { motion } from "framer-motion";
import { Bot, TrendingUp, Image as ImageIcon, MessageSquare, CheckCircle2, BarChart3, Globe } from "lucide-react";

export default function HeroVisual() {
    return (
        <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">

            {/* 1. The Main "AI Interface" Card */}
            <motion.div
                initial={{ y: 40, opacity: 0, rotateX: 10 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-20 w-[380px] bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            >
                {/* Header */}
                <div className="h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-medium text-slate-500 flex items-center gap-1">
                        <Bot size={12} /> Viralcrest AI Agent
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                    {/* Simulated Prompt Input */}
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6]">
                            <Bot size={16} />
                        </div>
                        <div className="text-xs text-slate-500 font-medium">Generate viral campaign for...</div>
                    </div>

                    {/* Generated Content - Typing Effect */}
                    <div className="space-y-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-2"
                        >
                            <div className="w-2 rounded-full bg-[#8b5cf6] h-16"></div>
                            <div className="flex-1 space-y-2">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="h-3 bg-slate-200 rounded-md w-full"
                                />
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "85%" }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="h-3 bg-slate-200 rounded-md w-full"
                                />
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "60%" }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    className="h-3 bg-slate-200 rounded-md w-full"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Generated Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 }}
                        className="w-full h-32 bg-slate-100 rounded-lg relative overflow-hidden flex items-center justify-center border border-slate-200"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/40 to-blue-100/40 opacity-80"></div>
                        <ImageIcon className="text-slate-300 relative z-10" size={32} />

                        {/* Scanning Light Effect */}
                        <motion.div
                            animate={{ top: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 2 }}
                            className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#8b5cf6]/20 to-transparent -skew-y-12"
                        />
                    </motion.div>

                    {/* CTA Button Mock */}
                    <div className="flex justify-end">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.2, type: "spring" }}
                            className="px-4 py-2 bg-gradient-to-r from-[#8b5cf6] to-blue-600 text-white text-xs font-bold rounded-full flex items-center gap-2 shadow-lg shadow-[#8b5cf6]/20"
                        >
                            <CheckCircle2 size={12} /> Campaign Ready
                        </motion.div>
                    </div>
                </div>
            </motion.div>


            {/* 2. Floating "Metric" Cards (Orbiting) */}

            {/* Analytics Card */}
            <motion.div
                animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 2, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-200 z-30"
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                        <TrendingUp size={18} />
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Engagement</div>
                        <div className="text-xl font-bold text-slate-900">+124%</div>
                    </div>
                </div>
                <div className="w-24 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                        animate={{ width: ["0%", "80%"] }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-green-500"
                    />
                </div>
            </motion.div>

            {/* Social Card */}
            <motion.div
                animate={{
                    y: [5, -15, 5],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-12 bottom-32 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-slate-200 z-10 flex items-center gap-3"
            >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Globe size={18} />
                </div>
                <div>
                    <div className="text-xs font-bold text-slate-800">SEO Optimized</div>
                    <div className="text-[10px] text-slate-500">Rank #1 Target</div>
                </div>
            </motion.div>

            {/* AI Processing Badge */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.5, type: "spring" }}
                className="absolute -right-8 bottom-20 bg-slate-900 text-white px-4 py-2 rounded-full shadow-xl shadow-slate-900/10 z-30 flex items-center gap-2 text-sm font-semibold"
            >
                <BarChart3 size={16} /> ROI Optimized
            </motion.div>

            {/* Background Connecting Lines/Glow */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-[100px]"
                />
            </div>
        </div>
    );
}
