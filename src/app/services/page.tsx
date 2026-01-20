import type { Metadata } from "next";
import ServiceGrid from "@/components/ServiceGrid";
import ServiceMarquee from "@/components/ServiceMarquee";
import GeometricBackground from "@/components/GeometricBackground";

export const metadata: Metadata = {
    title: "Services | Viralcrest",
};

export default function ServicesPage() {
    return (
        <main className="bg-[#0f0f14]">
            <div className="relative pt-32 pb-20 overflow-hidden">
                <GeometricBackground theme="dark" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 font-outfit">
                            Our <span className="text-[#8b5cf6]">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            Comprehensive digital solutions tailored to elevate your brand. We
                            turn your vision into reality with precision and creativity.
                        </p>
                    </div>
                </div>
            </div>

            <ServiceMarquee />

            <ServiceGrid />
        </main>
    );
}
