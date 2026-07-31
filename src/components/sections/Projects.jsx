import { useState } from "react";
import CaseStudyModal from "./CaseStudyModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: "gudangsafe",
      title: "GudangSafe",
      description: "Sistem Monitoring dan Controlling Suhu-Kelembaban Gudang Penyimpanan Pupuk & Pestisida Berbasis IoT",
      roles: ["System Analyst", "IoT"],
      image: "/gudangsafe.png",
      imageClass: "object-cover object-top"
    },
    {
      id: "traceit",
      title: "TraceIT",
      description: "Platform Pelaporan dan Pelacakan Barang Hilang Berbasis Lokasi yang Terintegrasi dengan Peta Interaktif, Fitur Kamera, dan Komunikasi Real-Time Antar Pengguna",
      roles: ["API", "Laravel"],
      image: "/TraceIT.png",
      imageClass: "object-cover"
    },
    {
      id: "incomend",
      title: "Incomend",
      description: "Platform Berbasis Web yang Memberikan Rekomendasi Strategi Peningkatan Pendapatan Berdasarkan Analisis Data Keuangan Pengguna",
      roles: ["Project Manager"],
      image: "/ADPL.jpeg",
      imageClass: "object-cover"
    },
    {
      id: "drivea",
      title: "Drivea",
      description: "Sistem Informasi Rental Berbasis C#",
      roles: ["Project Manager"],
      image: "/Auth-Pelanggan.png",
      imageClass: "object-cover"
    }
  ];

  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto relative z-10" id="projects">
      <div className="text-center mb-stack-lg">
        <span className="font-label-caps text-label-caps text-primary tracking-widest">PORTOFOLIO</span>
        <h2 className="font-headline-lg text-headline-lg mt-2 mb-4 text-on-surface">Project</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg mt-12">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="glass-panel rounded-xl overflow-hidden group cursor-pointer hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            onClick={() => setSelectedProject(project.id)}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${project.imageClass}`}
                alt={project.title}
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-stack-md">
                <span className="text-primary font-semibold">Lihat Detail Studi Kasus →</span>
              </div>
            </div>
            <div className="p-stack-md flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.roles.map((role, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-[10px] rounded-full font-bold uppercase tracking-wider ${idx === 0
                        ? "bg-secondary-container/20 text-secondary"
                        : "bg-primary-container/20 text-primary"
                        }`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <h3 className="font-card-title text-card-title text-primary mb-2">{project.title}</h3>
                <p className="text-on-surface-variant text-body-md line-clamp-2">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render the modal for any selected project */}
      {selectedProject && (
        <CaseStudyModal
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
