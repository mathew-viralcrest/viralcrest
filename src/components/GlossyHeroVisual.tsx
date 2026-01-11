"use client";
import { motion } from "framer-motion";
import { TrendingUp, Users, Search, BarChart3, Heart, MousePointerClick, ArrowUpRight } from "lucide-react";

export default function GlossyHeroVisual() {
    return (
        <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">

            {/* Central Dashboard Card */}
            <motion.div
                initial={{ rotateX: 10, rotateY: -10, scale: 0.9, opacity: 0 }}
                animate={{ rotateX: 0, rotateY: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-[92vw] max-w-[320px] md:max-w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
            >
                {/* Header */}
                <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#5057e6]/10 text-[#5057e6] flex items-center justify-center">
                            <BarChart3 size={18} />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-slate-800">Campaign Overview</div>
                            <div className="text-[10px] text-slate-500">Live Analytics</div>
                        </div>
                    </div>
                    <div className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full flex items-center gap-1">
                        <TrendingUp size={12} /> +24%
                    </div>
                </div>

                {/* Main Chart Area */}
                <div className="p-6 space-y-6">
                    {/* Visitor Stats */}
                    <div className="flex justify-between items-end">
                        <div className="space-y-1">
                            <div className="text-3xl font-bold text-slate-900">84.2k</div>
                            <div className="text-xs text-slate-500 font-medium">Total Visitors</div>
                        </div>
                        <div className="h-24 flex items-end gap-2">
                            {[40, 65, 45, 80, 55, 95].map((height, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "backOut" }}
                                    className={`w-6 rounded-t-md ${i === 5 ? 'bg-gradient-to-t from-[#5057e6] to-indigo-500' : 'bg-slate-100'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Metric Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                            <div className="flex items-center gap-2 mb-2 text-blue-600">
                                <MousePointerClick size={14} />
                                <span className="text-[10px] font-bold uppercase">CTR</span>
                            </div>
                            <div className="text-lg font-bold text-slate-800">4.8%</div>
                            <div className="w-full h-1 bg-blue-100 rounded-full mt-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "75%" }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="h-full bg-blue-500"
                                />
                            </div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#5057e6]/5 border border-[#5057e6]/20">
                            <div className="flex items-center gap-2 mb-2 text-[#5057e6]">
                                <Users size={14} />
                                <span className="text-[10px] font-bold uppercase">Leads</span>
                            </div>
                            <div className="text-lg font-bold text-slate-800">1,240</div>
                            <div className="w-full h-1 bg-[#5057e6]/10 rounded-full mt-2 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "60%" }}
                                    transition={{ duration: 1, delay: 1.2 }}
                                    className="h-full bg-[#5057e6]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>


            {/* Floating Element 1: SEO Rank Card (Left) */}
            <motion.div
                className="absolute -left-4 md:-left-8 top-1/4 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 z-20 w-40"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
                transition={{ duration: 0.8, delay: 0.5, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            >
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                        <Search size={18} />
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase">Top Rank</div>
                        <div className="text-sm font-bold text-slate-900">#1 Result</div>
                    </div>
                </div>
            </motion.div>


            {/* Floating Element 2: Social Love (Right Top) */}
            <motion.div
                className="absolute -right-4 md:-right-6 top-20 bg-white p-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 z-0"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, rotate: [0, 5, 0] }}
                transition={{ duration: 0.5, delay: 0.8, rotate: { duration: 6, repeat: Infinity } }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                        <Heart size={16} fill="currentColor" />
                    </div>
                    <div className="pr-2">
                        <div className="text-xs font-bold text-slate-800">Viral Post</div>
                        <div className="text-[10px] text-slate-500">50k+ Likes</div>
                    </div>
                </div>
            </motion.div>


            {/* Floating Element 3: ROI Badge (Bottom Right) */}
            <motion.div
                className="absolute bottom-20 -right-2 md:right-0 bg-slate-900 text-white p-4 rounded-xl shadow-2xl z-20"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                        <ArrowUpRight size={20} className="text-green-400" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-400 font-medium">Return on Ad Spend</div>
                        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
                            450% ROI
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
