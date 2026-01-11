"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ServiceMarqueeProps {
    items?: string[];
}

export default function ServiceMarquee({ items }: ServiceMarqueeProps) {
    const defaultServices = [
        "Web Development",
        "UI/UX Design",
        "App Development",
        "Innovative Ideas",
        "Development Agency",
        "Digital Marketing",
        "SEO Optimization",
        "Brand Strategy"
    ];

    const services = items || defaultServices;

    return (
        <div className="w-full bg-[#1e1b4b] overflow-hidden py-3 relative z-20 shadow-lg border-y border-white/10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex items-center gap-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Slower duration for smoother smaller text scroll
                    }}
                >
                    {/* Duplicate list multiple times for seamless loop */}
                    {[...services, ...services, ...services, ...services].map((service, index) => (
                        <div key={index} className="flex items-center gap-8 group">
                            <span className="text-xl md:text-3xl font-medium text-white tracking-tight group-hover:text-[#5057e6] transition-colors duration-300">
                                {service}
                            </span>
                            <Star
                                className="text-[#5057e6] w-5 h-5 md:w-8 md:h-8 fill-[#5057e6] group-hover:rotate-180 transition-transform duration-700"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
