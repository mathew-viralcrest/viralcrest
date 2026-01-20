
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ServiceMarquee from "@/components/ServiceMarquee";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceGrid from "@/components/ServiceGrid";
import ClientMarquee from "@/components/ClientMarquee";
import DigitalMarketingVisual from "@/components/DigitalMarketingVisual";

export default function Home() {
  return (
    <main className="h-auto relative w-full overflow-hidden bg-background">
      {/* Dark Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Background Subtle Wave/Grid Pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
            {/* Left Column: Content */}
            <div className="text-left relative z-20 pt-4">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight text-white leading-tight">
                Transforming Clicks <br />
                into Conversions, and <br />
                Ideas into{" "}
                <span className="text-[#8b5cf6]">Digital Success Stories.</span>
              </h1>

              <p className="text-lg text-slate-400 max-w-md mb-6 font-normal leading-relaxed">
                More than just storing ideas. Letting you have the best business
                outcome. Overflow yourself with ideas.
              </p>
            </div>

            {/* Right Column: Visual */}
            <div className="relative z-10 w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center lg:justify-end">
              <DigitalMarketingVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="flex flex-col justify-center py-8">
        <ServiceMarquee />
        <ServiceGrid />
        <ClientMarquee />
        <AboutSection />
        <PortfolioSection />
        <Testimonials />
      </div>
    </main>
  );
}
