export default function Skills() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto relative z-10" id="skills">
      <div className="mb-16 text-center md:text-left">
        <span className="font-label-caps text-label-caps text-primary tracking-widest">Skills</span>
        <h2 className="font-headline-lg text-headline-lg mt-2 text-on-surface">Technical Expertise</h2>
      </div>

      {/* Bento Grid Skills */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-gap">
        {/* Skill 1 */}
        <div className="md:col-span-4 glass-panel p-stack-md rounded-2xl flex flex-col justify-between group">
          <div>
            <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">architecture</span>
            <h4 className="font-card-title text-card-title mb-2 text-on-surface">System Analys</h4>
            <p className="text-on-surface-variant text-sm">Pengumpulan Kebutuhan, Diagram UML, Pemodelan Proses Bisnis (BPMN), dan penyusunan ERD.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-surface-container rounded text-xs text-on-surface">Figma</span>
            <span className="px-2 py-1 bg-surface-container rounded text-xs text-on-surface">BPMN</span>
          </div>
        </div>

        {/* Skill 2 */}
        <div className="md:col-span-4 glass-panel p-stack-md rounded-2xl flex flex-col justify-between group">
          <div>
            <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">verified</span>
            <h4 className="font-card-title text-card-title mb-2 text-on-surface">Quality Assurance</h4>
            <p className="text-on-surface-variant text-sm">Pengujian Manual, Otomatisasi, Desain Test Case, dan Manajemen Siklus Hidup Bug.</p>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1"><span className="text-on-surface-variant">Tingkat Kemahiran</span><span className="text-primary">90%</span></div>
            <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
              <div className="w-[90%] h-full primary-gradient"></div>
            </div>
          </div>
        </div>

        {/* Skill 3 */}
        <div className="md:col-span-4 glass-panel p-stack-md rounded-2xl flex flex-col justify-between group">
          <div>
            <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">developer_mode</span>
            <h4 className="font-card-title text-card-title mb-2 text-on-surface">Keahlian Teknis</h4>
            <p className="text-on-surface-variant text-sm">Pengembangan Web, Manajemen Basis Data, dan Pemahaman Dasar Jaringan.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-surface-container rounded text-xs text-on-surface">SQL</span>
            <span className="px-2 py-1 bg-surface-container rounded text-xs text-on-surface">React</span>
            <span className="px-2 py-1 bg-surface-container rounded text-xs text-on-surface">Python</span>
          </div>
        </div>

        {/* Skill 4 */}
        <div className="md:col-span-8 glass-panel p-stack-md rounded-2xl group">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">assignment</span>
              <h4 className="font-card-title text-card-title mb-2 text-on-surface">Project Manager</h4>
              <p className="text-on-surface-variant text-sm">Metodologi SDLC (Agile/Scrum), Alokasi Sumber Daya, dan Manajemen Jadwal menggunakan berbagai alat berstandar industri.</p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-3 bg-surface-container-high rounded-xl text-center flex flex-col justify-center">
                <p className="text-primary font-bold text-xl">10+</p>
                <p className="text-xs text-on-surface-variant">Proyek Dipimpin</p>
              </div>
              <div className="p-3 bg-surface-container-high rounded-xl text-center flex flex-col justify-center">
                <p className="text-primary font-bold text-xl">95%</p>
                <p className="text-xs text-on-surface-variant">Tingkat Kesuksesan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skill 5 */}
        <div className="md:col-span-4 glass-panel p-stack-md rounded-2xl group">
          <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">psychology</span>
          <h4 className="font-card-title text-card-title mb-2 text-on-surface">Keahlian Non-Teknis</h4>
          <ul className="space-y-1 text-on-surface-variant text-sm">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Komunikasi Strategis</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Pemecahan Masalah</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Kepemimpinan Proyek</li>
          </ul>
        </div>
      </div>

      {/* Certifications Carousel */}
      <div className="mt-section-gap">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-headline-sm text-headline-sm text-on-surface">Sertifikasi & Pelatihan</h3>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary hover:bg-primary/10">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary hover:bg-primary/10">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="flex gap-stack-md overflow-x-auto pb-6 custom-scrollbar snap-x">

          {/* Cert 1 */}
          <div className="min-w-[300px] glass-panel p-stack-md rounded-xl snap-start">
            <div className="w-full h-40 rounded-lg mb-4 bg-surface-container overflow-hidden">
              <img className="w-full h-full object-cover" alt="KKNI L2" src="/public/kkni.jpeg" />
            </div>
            <h4 className="font-card-title text-card-title mb-1 text-on-surface">Sertifikat Kompetensi</h4>
            <p className="text-sm text-on-surface-variant mb-4">Skema KKNI Level II Pada Kompetensi Keahlian Teknik Komputer Jaringan.</p>
            <a className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">Lihat Kredensial <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>

          {/* Cert 2 */}
          <div className="min-w-[300px] glass-panel p-stack-md rounded-xl snap-start">
            <div className="w-full h-40 rounded-lg mb-4 bg-surface-container overflow-hidden">
              <img className="w-full h-full object-cover" alt="SEO Copywriting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiFsDLBmUxjno4cCOK40N_QCjVv_0uxmQ2QoAHQwQQ06Qz4KiBZv_Wts1ZsUIeZ3v9E9kUFQk9QFGLy0j0KrFRjTHMjr0zE69RQC1rp1vtDGknyjak9SNpH-IOIxGC74Ei5qPjtNnwQL-fwcwd9obwAYrj3SDyOiomZD3gqvhN-B8PilWHVmfN50eFrQQVVXsTiO-i_FuO0Pqr1KD0B6ySlQevK7ijwA37sVtKgYzff5seNampj5GU" />
            </div>
            <h4 className="font-card-title text-card-title mb-1 text-on-surface">Copywriting SEO</h4>
            <p className="text-sm text-on-surface-variant mb-4">Pelatihan lanjutan dalam visibilitas digital dan strategi konten untuk dokumentasi teknis.</p>
            <a className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">Lihat Kredensial <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>

          {/* Cert 3 */}
          <div className="min-w-[300px] glass-panel p-stack-md rounded-xl snap-start">
            <div className="w-full h-40 rounded-lg mb-4 bg-surface-container overflow-hidden">
              <img className="w-full h-full object-cover" alt="Warehouse Handling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA63CCzBXx2uy0uiyjHVdbBezLTeV0IND8ZDPiTRHwsibMkp0p6cD6t2qqiZYH-1snhxv6Yh9H2lW7_tnKsl3TofLMDg-PwbEbYdg45pVljtFEzQhFDL71A64ClodZdm1OJ7BToIcQe0lS6QmfHkkVzoLFvKZxw6LNqFdr5MHfuaZRAWyWsywL2ue1oPvK5ECgrPb1wSKGjt3PxUociMNfd_mcB4E6y9z4IZLNMC6aXvB_PXsbf-N6l" />
            </div>
            <h4 className="font-card-title text-card-title mb-1 text-on-surface">Penanganan Gudang</h4>
            <p className="text-sm text-on-surface-variant mb-4">Sertifikasi manajemen logistik dan efisiensi operasional untuk sistem rantai pasokan.</p>
            <a className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="#">Lihat Kredensial <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
