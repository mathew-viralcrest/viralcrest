import { motion } from "framer-motion";

export default function AnimatedBackground() {
    return (
        <div className="absolute inset-0 -z-50 overflow-hidden bg-slate-50">

            {/* 1. Moving Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[10%] -left-[10%] w-[700px] h-[700px] bg-purple-200/40 rounded-full blur-[100px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute -bottom-[20%] left-[20%] w-[800px] h-[800px] bg-indigo-200/40 rounded-full blur-[120px]"
            />

            {/* 2. CSS Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.4]"
                style={{
                    backgroundImage: "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                    maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)"
                }}
            ></div>

            {/* 3. Twinkling 'Data' Particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-slate-400 rounded-full opacity-0"
                        style={{
                            width: Math.random() * 2 + 1 + "px",
                            height: Math.random() * 2 + 1 + "px",
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                        }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 3, // 3-6 seconds
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

        </div>
    );
}
