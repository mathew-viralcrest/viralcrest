"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Activity, MousePointerClick, BarChart2 } from "lucide-react";

export default function DigitalMarketingVisual() {
    const colors = {
        blue: "#2563ff",
        violet: "#8b5cf6",
        green: "#22ff88",
    };

    // Animation variants for floating elements
    const float = {
        animate: {
            y: [0, -15, 0],
            rotate: [0, 2, -2, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">

            {/* Background Ambience */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="w-80 h-80 bg-[#8b5cf6]/20 rounded-full blur-[100px] absolute"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="w-64 h-64 bg-[#2563ff]/20 rounded-full blur-[80px] absolute -translate-x-20 -translate-y-20"
                />
            </div>

            {/* Main Glass Dashboard Card */}
            <motion.div
                initial={{ rotateX: 10, rotateY: -10, scale: 0.9, opacity: 0 }}
                animate={{ rotateX: 5, rotateY: -5, scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20 w-[380px] bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#2563ff] flex items-center justify-center text-white shadow-lg shadow-[#8b5cf6]/20">
                            <Activity size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Campaign Status</div>
                            <div className="text-white font-bold text-lg">Active & Scaling</div>
                        </div>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                </div>

                {/* Chart Area */}
                <div className="h-32 w-full relative mb-8 border-b border-white/5 pb-8">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                        {/* Grid Lines */}
                        <line x1="0" y1="25" x2="300" y2="25" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                        <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                        <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                        {/* Animated Line Path */}
                        <motion.path
                            d="M0,80 C50,80 50,40 100,60 C150,80 150,20 200,40 C250,60 250,10 300,5"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                        />
                        {/* Area under curve */}
                        <motion.path
                            d="M0,80 C50,80 50,40 100,60 C150,80 150,20 200,40 C250,60 250,10 300,5 V100 H0 Z"
                            fill="url(#gradientFill)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ duration: 1, delay: 1 }}
                        />

                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563ff" />
                                <stop offset="50%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#22ff88" />
                            </linearGradient>
                            <linearGradient id="gradientFill" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Hovering Data Point */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2 }}
                        className="absolute top-0 right-0 transform translate-x-2 -translate-y-2"
                    >
                        <div className="bg-white text-[#0f0f14] text-xs font-bold px-2 py-1 rounded shadow-lg">
                            +184%
                        </div>
                        <div className="w-3 h-3 bg-white rotate-45 transform origin-center absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -z-10"></div>
                    </motion.div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="flex items-center gap-2 mb-1 text-slate-400 text-xs">
                            <Users size={14} className="text-[#2563ff]" /> Total Reach
                        </div>
                        <div className="text-xl font-bold text-white">845.2K</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="flex items-center gap-2 mb-1 text-slate-400 text-xs">
                            <MousePointerClick size={14} className="text-[#22ff88]" /> Conversions
                        </div>
                        <div className="text-xl font-bold text-white flex items-end gap-2">
                            2,340
                            <span className="text-[10px] text-[#22ff88] mb-1 font-bold">+12%</span>
                        </div>
                    </div>
                </div>
            </motion.div>


            {/* Floating Elements (Orbiting the dashboard) */}

            {/* 1. Growth Badge (Top Left - Behind) */}
            <motion.div
                variants={float}
                initial="initial"
                animate="animate"
                className="absolute top-10 left-10 md:left-20 z-10 bg-[#22ff88]/10 backdrop-blur-md border border-[#22ff88]/20 p-4 rounded-2xl flex items-center gap-3 shadow-[0_8px_32px_rgba(34,255,136,0.1)]"
            >
                <div className="p-2 bg-[#22ff88] rounded-lg text-[#0f0f14] shadow-lg shadow-[#22ff88]/40">
                    <TrendingUp size={20} />
                </div>
                <div>
                    <div className="text-[10px] text-[#22ff88] font-bold uppercase tracking-wider">Growth</div>
                    <div className="text-lg font-bold text-white">3.5x</div>
                </div>
            </motion.div>

            {/* 2. ROI Badge (Bottom Right - Front) */}
            <motion.div
                animate={{
                    y: [-10, 10, -10],
                    x: [0, 5, 0],
                    rotate: [-2, 2, -2]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-0 md:right-10 z-30 bg-[#2563ff] text-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(37,99,255,0.3)] flex items-center gap-4"
            >
                <div>
                    <div className="text-[10px] text-blue-100 font-medium uppercase mb-1">Return on Ad Spend</div>
                    <div className="text-2xl font-bold leading-none">420%</div>
                </div>
                <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                    <BarChart2 size={20} className="text-white" />
                </div>
            </motion.div>


        </div>
    );
}
