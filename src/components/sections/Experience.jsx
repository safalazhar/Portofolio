import { useState } from "react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section className="py-section-gap bg-surface-container-lowest relative z-10" id="experience">
      <div className="px-gutter max-w-container-max mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest">Expertise</span>
            <h2 className="font-headline-lg text-headline-lg mt-2 text-on-surface">Experience</h2>
          </div>
          <div className="flex items-center glass-panel p-1 rounded-full">
            <button
              className={`px-6 py-2 rounded-full transition-all font-semibold ${activeTab === "work"
                ? "bg-primary text-on-primary"
                : "text-on-surface-variant hover:text-primary"
                }`}
              onClick={() => setActiveTab("work")}
            >
              Internship
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-all font-semibold ${activeTab === "lead"
                ? "bg-primary text-on-primary"
                : "text-on-surface-variant hover:text-primary"
                }`}
              onClick={() => setActiveTab("lead")}
            >
              Organizational
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto min-h-[300px]">
          {/* Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent hidden md:block"></div>

          {/* Work Content */}
          {activeTab === "work" && (
            <div className="space-y-12 animate-fade-up">
              {/* Item 1 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-5/12 text-right hidden md:block">
                  <span className="text-primary font-bold">1 April 2021 - 30 Juni 2021</span>
                  <h4 className="font-headline-sm text-headline-sm mt-1 text-on-surface">Unit Logistik & General Support</h4>
                  <p className="text-secondary font-semibold">PT Telkom Jember</p>
                </div>
                <div className="w-10 h-10 rounded-full primary-gradient z-10 flex items-center justify-center border-4 border-background absolute left-1/2 -translate-x-1/2 hidden md:flex">
                  <span className="material-symbols-outlined text-on-primary text-sm">work</span>
                </div>
                <div className="md:w-5/12 glass-panel p-stack-md rounded-xl w-full">
                  <div className="md:hidden mb-4">
                    <span className="text-primary font-bold">2023 - Sekarang</span>
                    <h4 className="font-headline-sm text-headline-sm mt-1 text-on-surface">Anak Magang IT</h4>
                    <p className="text-secondary font-semibold">PT Telkom Indonesia</p>
                  </div>
                  <ul className="space-y-2 text-on-surface-variant list-disc pl-4">
                    <li>Menyusun denah bangunan dan dokumentasi jaringan.</li>
                    <li>Mengelola inventaris serta administrasi pengadaan barang.</li>
                    <li>Memverifikasi keakuratan dokumentasi.</li>
                    <li>Berkoordinasi dengan berbagai departemen.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Leadership Content */}
          {activeTab === "lead" && (
            <div className="space-y-12 animate-fade-up">
              {/* Item 1 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between">
                <div className="md:w-5/12 text-left hidden md:block">
                  <span className="text-primary font-bold">2025 & 2026</span>
                  <h4 className="font-headline-sm text-headline-sm mt-1 text-on-surface">Koordinator Acara Futsal</h4>
                  <p className="text-secondary font-semibold">SISFO Cup</p>
                </div>
                <div className="w-10 h-10 rounded-full primary-gradient z-10 flex items-center justify-center border-4 border-background absolute left-1/2 -translate-x-1/2 hidden md:flex">
                  <span className="material-symbols-outlined text-on-primary text-sm">event</span>
                </div>
                <div className="md:w-5/12 glass-panel p-stack-md rounded-xl w-full">
                  <div className="md:hidden mb-4">
                    <span className="text-primary font-bold">2025 & 2026</span>
                    <h4 className="font-headline-sm text-headline-sm mt-1 text-on-surface">Koordinator Acara</h4>
                    <p className="text-secondary font-semibold">SISFO Cup</p>
                  </div>
                  <p className="text-on-surface-variant">Memimpin perencanaan dan eksekusi event futsal melalui koordinasi dengan 5 anggota acara futsal, manajemen jadwal, serta bersinergi dengan SISFO untuk mendukung operasional digital dan pengarsipan data peserta yang terstruktur.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
