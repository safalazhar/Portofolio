export const projects = [
  {
    id: "gudangsafe",
    title: "GudangSafe",
    subtitle: "Aplikasi Manajemen Gudang",
    role: "System Analyst",
    category: "system-analyst",
    description:
      "Sistem manajemen gudang berbasis web yang dirancang untuk mengoptimalkan proses pencatatan barang masuk dan keluar, pelacakan stok secara real-time, serta pelaporan inventaris yang akurat dan efisien.",
    challenge:
      "Pengelolaan gudang secara manual menyebabkan ketidakakuratan data stok, kehilangan barang, dan kesulitan dalam pelacakan riwayat transaksi. Diperlukan sistem digital terintegrasi yang mampu mengatasi permasalahan tersebut.",
    solution:
      "Merancang dan mengembangkan aplikasi web dengan arsitektur MVC menggunakan Laravel, dilengkapi dengan dashboard real-time, fitur notifikasi stok minimum, serta sistem pelaporan otomatis untuk efisiensi operasional gudang.",
    outcomes: [
      "Peningkatan akurasi data inventaris hingga 95%",
      "Pengurangan waktu pencatatan manual sebesar 60%",
      "Dashboard real-time untuk monitoring stok",
      "Sistem pelaporan otomatis berkala",
    ],
    teamSize: 5,
    duration: "3 Bulan",
    method: "Agile (Scrum)",
    techStack: ["Laravel", "MySQL", "Bootstrap", "REST API", "Postman"],
    sdlcPhases: [
      {
        name: "Requirement Analysis",
        icon: "description",
        detail:
          "Mengumpulkan dan menganalisis kebutuhan pengguna melalui wawancara dan observasi. Menyusun dokumen Software Requirements Specification (SRS) yang komprehensif.",
      },
      {
        name: "System Design",
        icon: "design_services",
        detail:
          "Merancang arsitektur sistem menggunakan diagram UML (Use Case, Activity, Sequence) dan mendesain skema database relasional yang ternormalisasi.",
      },
      {
        name: "Development",
        icon: "code",
        detail:
          "Implementasi backend menggunakan framework Laravel dengan arsitektur MVC. Integrasi REST API untuk komunikasi antar modul dan pengolahan data.",
      },
      {
        name: "Testing",
        icon: "bug_report",
        detail:
          "Melaksanakan pengujian fungsional manual dan pengujian API menggunakan Postman untuk memastikan setiap endpoint berfungsi sesuai spesifikasi.",
      },
      {
        name: "Deployment",
        icon: "rocket_launch",
        detail:
          "Deployment ke server produksi dengan konfigurasi environment yang optimal. Monitoring performa dan perbaikan bug pasca-deployment.",
      },
    ],
    artifacts: [
      { type: "Use Case Diagram", icon: "account_tree" },
      { type: "Activity Diagram", icon: "conversion_path" },
      { type: "Sequence Diagram", icon: "swap_calls" },
      { type: "Database Schema", icon: "database" },
      { type: "API Documentation", icon: "api" },
      { type: "Trello Board", icon: "dashboard" },
    ],
  },
  {
    id: "traceit",
    title: "TraceIT",
    subtitle: "Sistem Pelacakan Produk",
    role: "QA & Documentation",
    category: "qa-testing",
    description:
      "Sistem pelacakan produk berbasis web yang memungkinkan pemantauan perjalanan produk dari produsen hingga konsumen akhir, memastikan transparansi dan ketertelusuran rantai pasok.",
    challenge:
      "Kurangnya transparansi dalam rantai pasok produk menyebabkan kesulitan dalam melacak asal-usul dan perjalanan produk. Hal ini berdampak pada kepercayaan konsumen dan efisiensi distribusi.",
    solution:
      "Mengembangkan platform pelacakan terintegrasi menggunakan CodeIgniter dengan fitur scanning kode unik, timeline perjalanan produk, serta dashboard monitoring untuk setiap stakeholder dalam rantai pasok.",
    outcomes: [
      "Transparansi rantai pasok meningkat 80%",
      "Dokumentasi pengujian 100% terstruktur",
      "Zero critical bugs pada rilis pertama",
      "SRS dan dokumen pengujian lengkap",
    ],
    teamSize: 4,
    duration: "3 Bulan",
    method: "Waterfall",
    techStack: ["CodeIgniter", "MySQL", "Bootstrap", "REST API", "Postman"],
    sdlcPhases: [
      {
        name: "Requirement Analysis",
        icon: "description",
        detail:
          "Melakukan analisis kebutuhan secara mendalam dan menyusun dokumen SRS yang menjadi acuan seluruh tim pengembangan.",
      },
      {
        name: "System Design",
        icon: "design_services",
        detail:
          "Menyusun rancangan arsitektur sistem dan diagram alur (flowchart) untuk setiap fitur utama platform pelacakan.",
      },
      {
        name: "Development",
        icon: "code",
        detail:
          "Kolaborasi dengan tim pengembang dalam implementasi fitur-fitur utama menggunakan CodeIgniter dan integrasi database MySQL.",
      },
      {
        name: "Testing",
        icon: "bug_report",
        detail:
          "Bertanggung jawab penuh atas strategi pengujian. Melaksanakan manual functional testing, system validation, dan REST API testing dengan Postman.",
      },
      {
        name: "Documentation",
        icon: "folder_open",
        detail:
          "Menyusun dokumentasi teknis lengkap meliputi dokumen pengujian, laporan bug, dan panduan pengguna (user manual).",
      },
    ],
    artifacts: [
      { type: "Test Plan Document", icon: "checklist" },
      { type: "Bug Report Log", icon: "bug_report" },
      { type: "API Test Results", icon: "api" },
      { type: "User Manual", icon: "menu_book" },
      { type: "SRS Document", icon: "description" },
    ],
  },
  {
    id: "incomend",
    title: "Incomend",
    subtitle: "Platform Rekomendasi Pendapatan",
    role: "Full-Stack Developer",
    category: "full-stack",
    description:
      "Platform berbasis web yang memberikan rekomendasi strategi peningkatan pendapatan berdasarkan analisis data keuangan pengguna, menggunakan algoritma machine learning sederhana.",
    challenge:
      "Banyak individu dan UMKM kesulitan dalam mengelola dan mengoptimalkan sumber pendapatan mereka karena kurangnya tools analisis keuangan yang mudah diakses dan dipahami.",
    solution:
      "Membangun platform rekomendasi yang menganalisis pola pendapatan dan pengeluaran, kemudian memberikan saran strategis yang dipersonalisasi untuk mengoptimalkan keuangan pengguna.",
    outcomes: [
      "Antarmuka yang intuitif dan user-friendly",
      "Sistem rekomendasi berbasis data",
      "Integrasi visualisasi data keuangan",
      "Arsitektur yang scalable",
    ],
    teamSize: 3,
    duration: "2 Bulan",
    method: "Agile",
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "Chart.js", "REST API"],
    sdlcPhases: [
      {
        name: "Planning",
        icon: "event_note",
        detail:
          "Merencanakan fitur-fitur utama, menyusun backlog produk, dan menentukan sprint planning untuk pengembangan iteratif.",
      },
      {
        name: "Design",
        icon: "design_services",
        detail:
          "Merancang wireframe dan UI/UX yang intuitif dengan fokus pada pengalaman pengguna dalam memahami data keuangan mereka.",
      },
      {
        name: "Development",
        icon: "code",
        detail:
          "Pengembangan full-stack menggunakan Laravel sebagai backend dan Tailwind CSS untuk antarmuka yang responsif dan modern.",
      },
      {
        name: "Testing",
        icon: "bug_report",
        detail:
          "Pengujian menyeluruh meliputi unit testing, integration testing, dan user acceptance testing (UAT).",
      },
      {
        name: "Deployment",
        icon: "rocket_launch",
        detail:
          "Deployment dan konfigurasi server produksi dengan optimasi performa dan keamanan aplikasi.",
      },
    ],
    artifacts: [
      { type: "Wireframe Design", icon: "web" },
      { type: "Database Schema", icon: "database" },
      { type: "API Documentation", icon: "api" },
      { type: "Sprint Board", icon: "dashboard" },
    ],
  },
  {
    id: "drivea",
    title: "Drivea",
    subtitle: "Aplikasi Rental Kendaraan",
    role: "System Analyst & QA",
    category: "system-analyst",
    description:
      "Aplikasi web untuk layanan rental kendaraan yang menyediakan fitur pemesanan online, manajemen armada, dan sistem pembayaran terintegrasi untuk pengalaman rental yang seamless.",
    challenge:
      "Proses rental kendaraan konvensional memiliki banyak inefisiensi: pencatatan manual, ketersediaan kendaraan yang sulit dipantau, dan proses pemesanan yang memakan waktu.",
    solution:
      "Merancang sistem rental digital end-to-end dengan fitur real-time fleet management, pemesanan online, dan dashboard admin untuk monitoring seluruh operasional bisnis rental.",
    outcomes: [
      "Proses pemesanan online yang efisien",
      "Monitoring armada secara real-time",
      "Dokumentasi sistem yang komprehensif",
      "Pengujian kualitas yang terstruktur",
    ],
    teamSize: 4,
    duration: "3 Bulan",
    method: "Agile (Scrum)",
    techStack: ["Laravel", "MySQL", "Bootstrap", "REST API", "Postman"],
    sdlcPhases: [
      {
        name: "Requirement Analysis",
        icon: "description",
        detail:
          "Menganalisis kebutuhan bisnis rental kendaraan dan mendefinisikan user stories serta acceptance criteria untuk setiap fitur.",
      },
      {
        name: "System Design",
        icon: "design_services",
        detail:
          "Merancang arsitektur sistem, diagram UML komprehensif, dan skema database yang mendukung skalabilitas bisnis.",
      },
      {
        name: "Development",
        icon: "code",
        detail:
          "Supervisi proses pengembangan dan memastikan implementasi sesuai dengan dokumen rancangan teknis yang telah disusun.",
      },
      {
        name: "Quality Assurance",
        icon: "verified_user",
        detail:
          "Melaksanakan pengujian fungsional komprehensif, validasi sistem, dan pengujian API menggunakan Postman untuk memastikan kualitas deliverable.",
      },
      {
        name: "Delivery",
        icon: "rocket_launch",
        detail:
          "Finalisasi dokumentasi teknis, handover ke klien, dan penyusunan laporan akhir proyek.",
      },
    ],
    artifacts: [
      { type: "Use Case Diagram", icon: "account_tree" },
      { type: "Activity Diagram", icon: "conversion_path" },
      { type: "Sequence Diagram", icon: "swap_calls" },
      { type: "Test Scenarios", icon: "checklist" },
      { type: "API Test Results", icon: "api" },
      { type: "Project Report", icon: "summarize" },
    ],
  },
];

export const projectCategories = [
  { id: "all", label: "Semua" },
  { id: "system-analyst", label: "System Analyst" },
  { id: "qa-testing", label: "QA & Testing" },
  { id: "full-stack", label: "Full-Stack" },
];
