"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const portfolioItems = [
    '/portfolio/educare.png',
    '/portfolio/impulse.png',
    '/portfolio/magpi.png',
    '/portfolio/uplift.png',
    '/portfolio/yatrabay.png',
];

export default function PortfolioSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [bounds, setBounds] = useState({ containerWidth: 0, contentWidth: 0 });

    // Smooth spring animation for the movement
    const x = useSpring(0, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const calculateBounds = () => {
            if (containerRef.current && contentRef.current) {
                setBounds({
                    containerWidth: containerRef.current.offsetWidth,
                    contentWidth: contentRef.current.scrollWidth
                });
            }
        };

        // Calculate initially and on resize
        calculateBounds();
        // Small delay to ensure images/layout stable
        setTimeout(calculateBounds, 100);

        // Mobile: Scroll to second card on load to make it active
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setTimeout(() => {
                const secondCard = contentRef.current?.children[1];
                if (secondCard) {
                    if (containerRef.current) {
                        const el = secondCard as HTMLElement;
                        const containerWidth = containerRef.current.offsetWidth;
                        const cardWidth = el.offsetWidth;
                        const cardLeft = el.offsetLeft;
                        const scrollPos = cardLeft - (containerWidth / 2) + (cardWidth / 2);
                        containerRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
                    }
                }
            }, 300);
        }

        window.addEventListener("resize", calculateBounds);
        return () => window.removeEventListener("resize", calculateBounds);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Disable custom mouse move logic on mobile (breakpoint md = 768px)
        if (!containerRef.current || window.innerWidth < 768) return;

        const { clientX } = e;
        const { left, width } = containerRef.current.getBoundingClientRect();
        const relativeX = clientX - left;

        // Calculate percentage of mouse position inside container (0 to 1)
        const movePercentage = Math.max(0, Math.min(1, relativeX / width));

        // Calculate max scroll distance (content width - container width)
        const maxScroll = bounds.contentWidth - bounds.containerWidth;

        // Move the content based on percentage
        // If content is smaller than container, don't scroll
        if (maxScroll > 0) {
            x.set(-movePercentage * maxScroll);
        }
    };

    return (

        <section className="py-24 bg-[#0f0f14] overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <span className="text-[#8b5cf6] font-semibold tracking-wide uppercase text-sm">Our Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
                            Selected <span className="text-slate-500">Works</span>
                        </h2>
                    </div>
                    <p className="text-slate-400 max-w-md text-lg">
                        We build digital experiences that drive results. Drag or move your mouse to explore our recent projects.
                    </p>
                </div>
            </div>

            {/* Mouse Move Interactive Container */}
            <div
                ref={containerRef}
                className="w-full overflow-x-auto md:overflow-hidden cursor-grab md:cursor-e-resize py-8 snap-x snap-mandatory scroll-smooth"
                onMouseMove={handleMouseMove}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar Firefox/IE
            >
                <style>{`
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                <motion.div
                    ref={contentRef}
                    style={{ x }}
                    className="flex w-max pl-6 pr-6 md:pr-12 gap-4 md:gap-0"
                >
                    {portfolioItems.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative flex-none w-[85vw] md:w-[600px] aspect-video group cursor-pointer overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/10 via-white/5 to-[#8b5cf6]/5 border border-white/10 p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] md:snap-align-none hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                                <img
                                    src={src}
                                    alt="Portfolio Project"
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                                    loading="lazy"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white font-semibold text-lg border-b-2 border-white pb-1">
                                        View Project
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
