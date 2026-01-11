import GlossyHeroVisual from "@/components/GlossyHeroVisual";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ServiceMarquee from "@/components/ServiceMarquee";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceGrid from "@/components/ServiceGrid";
import ClientMarquee from "@/components/ClientMarquee";

export default function Home() {
  return (
    <main className="h-auto relative overflow-hidden bg-white pt-24 pb-8 flex flex-col justify-center">
      {/* Background Subtle Wave/Grid Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
          {/* Left Column: Content */}
          <div className="text-left relative z-20 pt-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight text-slate-900 leading-tight">
              Transforming Clicks <br />
              into Conversions, and <br />
              Ideas into{" "}
              <span className="text-[#5057e6]">Digital Success Stories.</span>
            </h1>

            <p className="text-lg text-slate-500 max-w-md mb-6 font-normal leading-relaxed">
              More than just storing ideas. Letting you have the best business
              outcome. Overflow yourself with ideas.
            </p>
          </div>

          {/* Right Column: Visual */}
          <div className="relative h-[400px] mt-4 pointer-events-none lg:pointer-events-auto">
            <GlossyHeroVisual />
          </div>
        </div>
      </div>

      <ServiceMarquee />
      <ServiceGrid />
      <ClientMarquee />
      <AboutSection />
      <PortfolioSection />
      <Testimonials />
    </main>
  );
}
