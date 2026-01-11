import type { Metadata } from "next";
import ServiceGrid from "@/components/ServiceGrid";
import ServiceMarquee from "@/components/ServiceMarquee";
import GeometricBackground from "@/components/GeometricBackground";

export const metadata: Metadata = {
    title: "Services | Viralcrest",
};

export default function ServicesPage() {
    return (
        <>
            <div className="relative pt-32 pb-20 overflow-hidden">
                <GeometricBackground />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 font-outfit">
                            Our <span className="text-[#5057e6]">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                            Comprehensive digital solutions tailored to elevate your brand. We
                            turn your vision into reality with precision and creativity.
                        </p>
                    </div>
                </div>
            </div>

            <ServiceMarquee />

            <ServiceGrid />
        </>
    );
}
