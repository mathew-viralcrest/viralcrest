"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, ShieldCheck, Zap, BarChart3, Rocket } from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function AboutPage() {
    return (
        <div className="bg-white overflow-hidden">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-[#5057e6] uppercase bg-[#5057e6]/10 rounded-full">
                        About ViralCrest
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8">
                        A results focused <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5057e6] to-[#5057e6]">
                            digital marketing agency.
                        </span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        We help businesses grow through performance marketing, conversion-driven websites, and automation-led systems.
                    </p>
                </motion.div>

                {/* Stats / Goal Banner */}
                <motion.div
                    {...fadeIn}
                    className="mt-16 max-w-5xl mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12 text-center"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">One Goal in Mind</h3>
                            <p className="text-slate-600">Measurable growth.</p>
                        </div>
                        <div className="hidden md:block w-px h-16 bg-slate-200"></div>
                        <div className="flex gap-4 lg:gap-8 flex-wrap justify-center">
                            {['More Leads', 'More Sales', 'Better Visibility'].map((stat, i) => (
                                <div key={i} className="flex items-center gap-2 text-slate-800 font-medium bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
                                    <TrendingUp size={18} className="text-[#5057e6]" />
                                    {stat}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* What We Do */}
            <section className="py-20 bg-slate-50/50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6">What We Do</h2>
                            <p className="text-2xl font-medium text-slate-800 leading-relaxed mb-6">
                                We design and execute digital strategies that connect traffic, conversion, and retention.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                From paid ads and SEO to websites, ecommerce, and WhatsApp automation, every service we offer is built to support business outcomes, not vanity metrics.
                            </p>

                            <a href="/contact" className="inline-flex items-center text-[#5057e6] font-semibold hover:gap-2 transition-all">
                                View our services <ArrowRight size={20} className="ml-1" />
                            </a>
                        </motion.div>

                        <div className="relative h-[400px] lg:h-[500px]">
                            {/* Abstract Visual Representation */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#5057e6]/20 to-[#5057e6]/20 rounded-[2.5rem] p-8 overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#5057e6] rounded-full blur-[100px] opacity-40 animate-pulse"></div>

                                <motion.div
                                    className="relative z-10 grid grid-cols-2 gap-4 h-full"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true }}
                                >
                                    {[
                                        { title: "Paid Ads", icon: Target },
                                        { title: "SEO", icon: BarChart3 },
                                        { title: "Ecommerce", icon: ShoppingBagIcon },
                                        { title: "Automation", icon: Zap }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemAnim}
                                            className="bg-white/60 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:bg-white/80 transition-colors"
                                        >
                                            <item.icon size={32} className="text-[#5057e6] mb-3" />
                                            <span className="font-bold text-slate-900">{item.title}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-24 container mx-auto px-6">
                <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Approach</h2>
                    <p className="text-lg text-slate-600">
                        We do not sell generic packages. Every solution is built around your business goals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Strategy before execution", icon: Target, desc: "We plan before we act." },
                        { title: "Data over assumptions", icon: BarChart3, desc: "Decisions backed by real numbers." },
                        { title: "Simple systems that scale", icon: Rocket, desc: "Complexity kills growth." },
                        { title: "Continuous optimisation", icon: TrendingUp, desc: "Always improving, never static." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-[#5057e6]">
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>



            {/* Why ViralCrest */}
            <section className="py-24 container mx-auto px-6 text-center">
                <motion.div {...fadeIn} className="max-w-4xl mx-auto">
                    <span className="text-[#5057e6] font-bold tracking-wider uppercase mb-4 block">Why Us?</span>
                    <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">
                        Because good marketing should <span className="text-[#5057e6]">pay for itself.</span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                        We focus on execution, transparency, and results. No long contracts. No unnecessary complexity.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Execution", desc: "We get things done." },
                            { title: "Transparency", desc: "No hidden fees or secrets." },
                            { title: "Results", desc: "Outcome over output." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#5057e6] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-7xl font-bold text-white mb-8">Let’s Build Growth</h2>
                        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                            If you want a digital partner focused on performance, not hype, we should talk.
                        </p>

                        <a href="/contact" className="inline-block px-8 py-4 bg-white text-[#5057e6] font-bold rounded-full text-lg hover:bg-slate-100 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                            Contact ViralCrest
                        </a>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}

// Icon helper since I need ShoppingBag for Ecommerce
function ShoppingBagIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    )
}
