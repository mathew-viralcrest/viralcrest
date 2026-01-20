"use client";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useSpring } from "framer-motion";

const services = [
    {
        category: "Advertising",
        title: "Performance Marketing",
        href: "/performance-marketing",
        image: "/services/pay-per-click.jpg"
    },
    {
        category: "Development",
        title: "Website Development",
        href: "/website-development",
        image: "/services/web-development.jpg"
    },
    {
        category: "Commerce",
        title: "Ecommerce Development",
        href: "/shopify-development",
        image: "/services/ecommerce-development.jpg"
    },
    {
        category: "AI & content",
        title: "AI Content Creations",
        href: "/ai-content-creations",
        image: "/services/ai-content-creation.jpg"
    },
    {
        category: "Marketing",
        title: "Social Media Marketing",
        href: "/social-media-marketing",
        image: "/services/social-media-marketing.jpg"
    },
    {
        category: "Growth",
        title: "SEO (Search Engine Optimization)",
        href: "/search-engine-optimization",
        image: "/services/seo-optimization.jpg"
    },
    {
        category: "Automation",
        title: "WhatsApp Automation & Marketing",
        href: "/whatsapp-marketing",
        image: "/services/whatsapp-automation.jpg"
    },
    {
        category: "Creative",
        title: "Branding & Design Service",
        href: "/branding-design-service",
        image: "/services/branding-design.jpg"
    }
];

export default function ServiceGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [bounds, setBounds] = useState({ containerWidth: 0, contentWidth: 0 });
    const [isMobile, setIsMobile] = useState(false);

    // Smooth spring animation for the movement
    const x = useSpring(0, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        }

        const calculateBounds = () => {
            if (containerRef.current && contentRef.current) {
                setBounds({
                    containerWidth: containerRef.current.offsetWidth,
                    contentWidth: contentRef.current.scrollWidth
                });
            }
        };

        checkMobile();
        calculateBounds();

        // Small delay to ensure images/layout stable
        setTimeout(calculateBounds, 100);

        window.addEventListener("resize", () => {
            checkMobile();
            calculateBounds();
        });

        return () => window.removeEventListener("resize", calculateBounds);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || isMobile) return;

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
        <section className="bg-background border-t border-white/10">
            {/* Mouse Move Interactive Container */}
            <div
                ref={containerRef}
                className="w-full overflow-hidden cursor-default md:cursor-e-resize"
                onMouseMove={handleMouseMove}
            >
                <motion.div
                    ref={contentRef}
                    style={{ x: isMobile ? 0 : x }}
                    className="grid grid-cols-2 w-full md:flex md:w-max"
                >
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href={service.href}
                            // Mobile: Grid cols 2, aspect-square, border-b, smaller padding
                            // Desktop: Fixed 400x400, flex row, border-r (handled), no border-b
                            className="group relative w-full aspect-square md:h-[400px] md:w-[400px] border-r-0 border-b border-white/10 md:border-b-0 md:border-r md:last:border-r-0 overflow-hidden flex flex-col justify-end p-4 md:p-8 transition-all hover:bg-white/5 bg-background"
                        >
                            {/* Background Image - Always Visible */}
                            <div className="absolute inset-0 z-0 transition-all duration-500">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="text-[10px] md:text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider">
                                    {service.category}
                                </div>
                                <div className="flex items-end justify-between gap-2 md:gap-4">
                                    <h3 className="text-sm md:text-3xl font-bold text-white leading-tight max-w-[85%]">
                                        {service.title}
                                    </h3>
                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all shadow-lg backdrop-blur-sm shrink-0">
                                        <ArrowRight size={16} className="md:w-5 md:h-5 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
