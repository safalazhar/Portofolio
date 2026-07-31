import { useCounter } from "../../hooks/useCounter";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import ShaderBackground from "../layout/ShaderBackground";

function StatCard({ target, label, isDecimal = false }) {
  const { count, ref } = useCounter(isDecimal ? Math.round(target * 100) : target, 2000);

  const displayValue = isDecimal ? (count / 100).toFixed(2) : count;

  return (
    <div ref={ref} className="glass-panel p-6 rounded-2xl text-center glow-hover transition-all duration-300">
      <div className="text-primary font-headline text-headline-md">
        {displayValue}
        {!isDecimal && "+"}
      </div>
      <div className="font-body text-label-caps text-on-surface-variant uppercase mt-1 tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      <ShaderBackground />
      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-gutter w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Role Tags */}
          <span
            className={`font-body text-label-caps text-primary tracking-widest uppercase mb-4 ${
              isIntersecting ? "animate-fade-up" : "opacity-0"
            }`}
          >
            IT Project Manager · QA Specialist · System Analyst
          </span>

          {/* Name */}
          <h1
            className={`font-headline text-headline-lg-mobile md:text-display-xl text-on-surface font-bold mb-6 text-balance ${
              isIntersecting ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            Muhammad Safal{" "}
            <span className="primary-gradient-text">Azhar</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`font-body text-body-lg text-on-surface-variant mb-10 ${
              isIntersecting ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          >
            Mahasiswa Teknologi Informasi Universitas Jember ·{" "}
            <span className="text-primary font-semibold">IPK 3.72</span>
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-stack-md mb-16 ${
              isIntersecting ? "animate-fade-up-delay-3" : "opacity-0"
            }`}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="primary-gradient px-8 py-3.5 rounded-xl font-body text-body-md text-on-primary font-bold hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Lihat Proyek
            </a>
            <a
              href="/cv-safal-azhar.pdf"
              download
              className="glass-panel px-8 py-3.5 rounded-xl font-body text-body-md text-primary border border-primary/30 font-bold hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center"
            >
              Download CV
            </a>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-gutter w-full max-w-3xl ${
              isIntersecting ? "animate-fade-up-delay-4" : "opacity-0"
            }`}
          >
            <StatCard target={4} label="Proyek" />
            <StatCard target={4} label="Sertifikat" />
            <StatCard target={3.72} label="IPK" isDecimal />
            <StatCard target={25} label="Keahlian" />
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-on-surface-variant text-[10px] font-body tracking-[0.2em] uppercase">
          Explore
        </span>
        <div className="w-[26px] h-[40px] rounded-full border-2 border-on-surface-variant/40 flex justify-center p-1 relative">
          <div className="w-1.5 h-2 bg-primary rounded-full animate-bounce mt-1 shadow-[0_0_8px_rgba(70,241,197,0.8)]" />
        </div>
      </div>
    </section>
  );
}
