"use client";
import { motion } from "framer-motion";

const clients = [
    {
        name: "Wed Art",
        logo: "/clients/wedart.png",
    },
    {
        name: "John & Company",
        logo: "/clients/john-and-company.png",
    },
    {
        name: "Maapi",
        logo: "/clients/maapi.png",
    },
    {
        name: "Nexus Voyage",
        logo: "/clients/nexus-voyage.png",
    },
];

export default function ClientMarquee() {
    return (
        <section className="py-6 bg-slate-50 border-b border-slate-200 overflow-hidden">

            <div className="flex">
                <motion.div
                    className="flex items-center gap-16 md:gap-24 px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                >
                    {/* Repeat list 4 times for smooth infinite loop */}
                    {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="relative w-32 h-16 flex items-center justify-center group"
                        >
                            {/* Logo Image */}
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="w-full h-full object-contain filter grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-110"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
