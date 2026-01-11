"use client";
import { ArrowRight, Layers } from "lucide-react";

// Using the same portfolio items
// Using the same portfolio items
const portfolioItems = [
    { id: 1, image: "/portfolio/uplift.png", title: "Uplift Global Solutions" },
    { id: 2, image: "/portfolio/magpi.png", title: "Magpi Social" },
    { id: 3, image: "/portfolio/impulse.png", title: "Impulse Academy" },
    { id: 4, image: "/portfolio/yatrabay.png", title: "YatraBay Travels" },
    { id: 5, image: "/portfolio/educare.png", title: "Educare Institute" },
];

const DesktopCard = ({ item }: { item: typeof portfolioItems[0] }) => (
    <div className="flex-shrink-0 w-[480px] rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white relative group flex flex-col hover:shadow-2xl transition-shadow duration-300">
        {/* Browser Header */}
        <div className="h-9 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400 hover:bg-red-500 transition-colors"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 hover:bg-green-500 transition-colors"></div>
            </div>
            {/* Fake Address Bar */}
            <div className="ml-4 flex-1 h-5 bg-white rounded-md border border-slate-200 shadow-sm flex items-center px-2">
                <div className="w-16 h-1.5 bg-slate-200 rounded-full"></div>
            </div>
        </div>

        {/* Screen Content */}
        <div className="w-full aspect-[16/10] relative overflow-hidden bg-slate-50">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
            />
            {/* Removed the hover overlay that appears on bottom to keep image clearly visible at all times, 
                or we can keep it but ensure it doesn't obscure the main view if not hovered. 
                User asked for 'clearly visible'. Let's keep the image clean. 
            */}
        </div>
    </div>
);

export default function PremiumDesigns() {
    return (
        <section className="relative w-full py-24 bg-slate-50 overflow-hidden">

            {/* Background Marquees */}
            {/* Removed opacity-40 so images are fully visible always */}
            <div className="flex flex-col gap-10">

                {/* Row 1: Moving Left */}
                {/* Added 'group' to the container and 'group-hover:paused' logic via CSS class */}
                <div className="w-full overflow-hidden group">
                    <div className="flex gap-10 min-w-full marquee-scroll-left group-hover:pause-animation">
                        {[...portfolioItems, ...portfolioItems, ...portfolioItems].map((item, idx) => (
                            <DesktopCard key={`row1-${idx}`} item={item} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Moving Right */}
                <div className="w-full overflow-hidden group">
                    <div className="flex gap-10 min-w-full marquee-scroll-right group-hover:pause-animation">
                        {/* Reverse the items for visual variety */}
                        {[...portfolioItems.reverse(), ...portfolioItems, ...portfolioItems].map((item, idx) => (
                            <DesktopCard key={`row2-${idx}`} item={item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Absolute Center Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                {/* Gradient fade removed for clear view */}

                {/* The "Circle" Card */}
                <div className="relative pointer-events-auto bg-white rounded-full w-[320px] h-[320px] md:w-[400px] md:h-[400px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center text-center p-8 border border-slate-100 z-20 hover:scale-105 transition-transform duration-500 ring-8 ring-white/50 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-500">
                        <Layers size={32} />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                        100+ Premium
                    </h3>
                    <h4 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                        Designs
                    </h4>

                    <a href="#portfolio" className="bg-[#ff4e16] hover:bg-[#e03a05] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 group">
                        Explore all Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            <style>{`
                .marquee-scroll-left {
                    animation: scroll-left 50s linear infinite;
                }
                
                .marquee-scroll-right {
                    animation: scroll-right 55s linear infinite;
                }

                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }

                @keyframes scroll-right {
                    0% { transform: translateX(-50%); } 
                    100% { transform: translateX(0); }
                }

                .group:hover .pause-animation {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
