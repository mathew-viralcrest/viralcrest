"use client";

import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "The sound quality is extraordinary. Every note, every beat, and every nuance comes through with stunning clarity and depth. The active noise cancellation is top-notch.",
        name: "Seddik Walid",
        role: "Product Designer",
        image: "/testimonials/man.png",
    },
    {
        text: "The team completely transformed our digital presence. Their strategic insights were invaluable, and the execution was flawless. We saw a 200% increase in engagement.",
        name: "Sarah Jenkins",
        role: "Marketing Director",
        image: "/testimonials/woman.png",
    },
    {
        text: "Working with Viralcrest was a game-changer for our brand. They understood our vision perfectly and translated it into a website that not only looks amazing but converts.",
        name: "David Chen",
        role: "Founder, TechFlow",
        image: "/testimonials/man.png",
    },
    {
        text: "Exceptional service and attention to detail. The team went above and beyond to ensure our project was a success. Their creativity and technical expertise are truly unmatched.",
        name: "Emily Rodriguez",
        role: "Creative Lead",
        image: "/testimonials/woman.png",
    },
    {
        text: "We've worked with many agencies, but none have delivered results like Viralcrest. Their AI-driven approach gave us a significant competitive advantage.",
        name: "Michael Chang",
        role: "CEO, NexaCorp",
        image: "/testimonials/man.png",
    },
    {
        text: "From concept to launch, the process was seamless. The design team is incredibly talented and responsive. I couldn't be happier with the final product.",
        name: "Jessica Lee",
        role: "VP of Sales",
        image: "/testimonials/woman.png",
    },
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="w-[400px] shrink-0 bg-gradient-to-br from-white via-white to-[#5057e6]/5 border border-slate-100 p-8 rounded-[2rem] relative flex flex-col justify-between h-[320px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] mx-4 hover:-translate-y-1 transition-transform duration-300">
        {/* Top Content */}
        <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 block">
                Testimonial
            </span>
            <p className="text-slate-700 text-base font-medium leading-relaxed line-clamp-4">
                "{item.text}"
            </p>
        </div>

        {/* Bottom Section with Quote & Profile */}
        <div className="flex items-end justify-between mt-4">
            {/* Quote Icon */}
            <div className="text-[#5057e6]/20">
                <Quote size={48} fill="currentColor" stroke="none" />
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-1.5 pr-4 rounded-full border border-slate-100 shadow-sm">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-medium">{item.role}</p>
                </div>
            </div>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 mb-16">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
                        Hear What Our Clients <br />
                        Say About Us <span className="text-[#5057e6]">.</span>
                    </h2>
                    <div className="lg:pl-10">
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Our clients appreciate the strategic approach, the dedication to
                            quality, and the tangible results we deliver. We create meaningful
                            connections.
                        </p>
                    </div>
                </div>
            </div>

            {/* Marquee Rows */}
            <div className="relative w-full space-y-8">

                {/* Row 1: Left Scroll */}
                <div className="w-full overflow-hidden flex">
                    <motion.div
                        className="flex"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 40,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <TestimonialCard key={`row1-${index}`} item={item} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right Scroll (Start from -50% and go to 0%) */}
                <div className="w-full overflow-hidden flex">
                    <motion.div
                        className="flex"
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{
                            duration: 40,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <TestimonialCard key={`row2-${index}`} item={item} />
                        ))}
                    </motion.div>
                </div>

            </div>

            {/* Fade Gradients for Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-20 top-40"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-20 top-40"></div>

        </section>
    );
}
