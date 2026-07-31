import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const competencies = [
  {
    icon: "https://cdn.simpleicons.org/trello/c0c1ff",
    alt: "Trello Logo",
    title: "Project Manager",
    tags: ["SDLC", "Trello", "Agile", "Documentation"],
  },
  {
    icon: "https://cdn.simpleicons.org/diagramsdotnet/46f1c5",
    alt: "Draw.io Logo",
    title: "System Analyst",
    tags: ["SRS Dev", "UML Diagram", "DB Design", "REST API"],
  },
  {
    icon: "https://cdn.simpleicons.org/postman/46f1c5",
    alt: "Postman Logo",
    title: "Quality Assurance",
    tags: ["Manual Test", "API Testing", "Postman", "Validation"],
  },
];

export default function About() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={sectionRef} className="py-section-gap bg-surface relative z-10">
      <div className="max-w-container mx-auto px-gutter">
        {/* Section Label */}
        <div
          className={`mb-16 ${isIntersecting ? "animate-fade-up" : "opacity-0"}`}
        >
          <span className="font-label-caps text-label-caps text-primary tracking-widest">PROFIL</span>
          <h2 className="font-headline-lg text-headline-lg mt-2 text-on-surface">TENTANG SAYA</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Bio Card */}
          <div
            className={`lg:col-span-8 ${
              isIntersecting ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            <div className="glass-panel p-8 md:p-10 rounded-[2rem] h-full flex flex-col justify-center">
              <p className="font-body text-body-lg text-on-surface-variant leading-relaxed mb-6">
                Halo, saya mahasiswa Teknologi Informasi Universitas Jember yang saat ini menempuh semester 5 dengan IPK 3,72/4,00. Saya memiliki ketertarikan di bidang <span className="text-primary font-semibold">IT Project Management</span> dan <span className="text-primary font-semibold">IT Quality Assurance</span>, khususnya dalam analisis sistem, manajemen proyek, dokumentasi, dan pengujian perangkat lunak.
              </p>
              <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                Saya telah terlibat dalam beberapa proyek pengembangan aplikasi dan IoT, serta terbiasa menggunakan <span className="text-secondary font-semibold">Trello</span> untuk manajemen proyek dan <span className="text-secondary font-semibold">Postman</span> untuk pengujian API. Saya senang belajar hal baru, bekerja secara kolaboratif, dan terus mengembangkan kemampuan untuk menciptakan solusi digital yang berkualitas.
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`lg:col-span-4 ${
              isIntersecting ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          >
            <div className="relative rounded-[2rem] overflow-hidden h-[350px] md:h-[400px] group glass-panel border border-white/10 bg-surface/30">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
              <img 
                src="/profil.png" 
                alt="Muhammad Safal Azhar - Profile" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          {/* Bento Competencies Grid */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-gutter mt-stack-lg">
            {competencies.map((comp, index) => (
              <div
                key={comp.title}
                className={`glass-panel p-8 rounded-3xl glow-hover transition-all duration-300 group ${
                  isIntersecting
                    ? `animate-fade-up`
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: isIntersecting ? `${0.3 + index * 0.1}s` : undefined,
                  animationFillMode: "forwards",
                  opacity: isIntersecting ? undefined : 0,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <img src={comp.icon} alt={comp.alt} className="w-6 h-6" />
                </div>
                <h3 className="font-body text-card-title text-on-surface mb-4">
                  {comp.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {comp.tags.map((tag) => (
                    <span key={tag} className="tag-badge px-3 py-1 bg-surface-container/50 text-on-surface-variant rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
