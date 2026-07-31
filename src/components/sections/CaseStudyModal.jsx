import { useState, useEffect } from "react";

export default function CaseStudyModal({ projectId = "gudangsafe", onClose }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const projectsData = {
    gudangsafe: {
      title: "GudangSafe - Dokumentasi Proyek",
      subtitle: "Sistem Monitoring dan Controlling Suhu-Kelembaban Gudang Penyimpanan Pupuk & Pestisida Berbasis IoT",
      photos: [
        {
          id: 1,
          src: "/gudangsafe.png",
          title: "Dokumentasi 1",
          description: "Tampilan Sistem Monitoring & Controlling Suhu-Kelembaban Berbasis IoT",
          featured: true
        },
        {
          id: 2,
          src: "/Dokumentasi.jpeg",
          title: "Dokumentasi 2",
          description: "Expo PPL"
        },
        {
          id: 3,
          src: "/IoT.jpeg",
          title: "Dokumentasi 3",
          description: "Arsitektur Alat IoT"
        }
      ]
    },
    traceit: {
      title: "TraceIT - Dokumentasi Proyek",
      subtitle: "Platform Pelaporan dan Pelacakan Barang Hilang Berbasis Lokasi yang Terintegrasi dengan Peta Interaktif",
      photos: [
        {
          id: 1,
          src: "/TraceIT.png",
          title: "Dokumentasi 1",
          description: "Tampilan Aplikasi TraceIT",
          featured: true
        },
        {
          id: 2,
          src: "/Auth.png",
          title: "Dokumentasi 2",
          description: "Tampilan Halaman TraceIT"
        },
        {
          id: 3,
          src: "/Dokum.jpeg",
          title: "Dokumentasi 3",
          description: "Dokumentasi Tugas Akhir PBM & PAA"
        }
      ]
    },
    incomend: {
      title: "Incomend - Dokumentasi Proyek",
      subtitle: "Sistem Informasi Manajemen Inventaris dan Peminjaman Barang Berbasis Web App pada UKM O-MACO Fasilkom Universitas Jember",
      photos: [
        {
          id: 1,
          src: "/Use-Case.png",
          title: "Dokumentasi 1",
          description: "Use Case Model Incomend",
          featured: true
        },
        {
          id: 2,
          src: "/Class-Diagram.png",
          title: "Dokumentasi 2",
          description: "Class Diagram Incomend",
          featured: false
        },
        {
          id: 3,
          src: "/Object-Diagram.png",
          title: "Dokumentasi 3",
          description: "Object Diagram Incomend",
          featured: false
        }
      ]
    },
    drivea: {
      title: "Drivea - Dokumentasi Proyek",
      subtitle: "Sistem Informasi Rental Mobil Berbasis C#",
      photos: [
        {
          id: 1,
          src: "/Dashboard Admin.png",
          title: "Dokumentasi 1",
          description: "Tampilan Dashboard Admin",
          featured: true
        },
        {
          id: 2,
          src: "/Kelola Kendaraan.png",
          title: "Dokumentasi 2",
          description: "Tampilan Halaman Kelola Kendaraan",
          featured: false
        },
        {
          id: 3,
          src: "/Kelola Pelanggan.png",
          title: "Dokumentasi 3",
          description: "Tampilan Halaman Kelola Pelanggan",
          featured: false
        }
      ]
    }
  };

  const currentProject = projectsData[projectId] || projectsData.gudangsafe;
  const photos = currentProject.photos;

  const getPhotoClass = (src, isFeatured) => {
    if (src === "/gudangsafe.png") {
      return isFeatured
        ? "h-[50vh] object-cover object-top"
        : "h-full object-cover object-top";
    }
    if (src === "/Dokumentasi.jpeg") {
      return "h-full object-cover object-[center_70%]";
    }
    if (src === "/IoT.jpeg") {
      return "h-full object-cover object-center";
    }
    return isFeatured
      ? "h-auto max-h-[55vh] object-contain"
      : "h-full object-contain";
  };

  return (
    <div className="fixed inset-0 z-[100] animate-fade-in flex items-center justify-center" id="modal-project">
      <div className="modal-overlay absolute inset-0 z-0" onClick={onClose}></div>
      <div className="relative z-10 w-full h-full md:w-11/12 md:h-[90%] mx-auto glass-panel border-0 md:border md:rounded-3xl overflow-hidden flex flex-col animate-scale-in bg-surface shadow-2xl">

        {/* Modal Header */}
        <div className="px-gutter py-6 border-b border-white/10 flex justify-between items-center bg-surface/50 backdrop-blur-xl">
          <div>
            <h2 className="font-headline text-headline-sm md:text-headline-md text-primary font-bold">{currentProject.title}</h2>
            <p className="text-on-surface-variant text-sm mt-1">{currentProject.subtitle}</p>
          </div>
          <button
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-error/20 hover:text-error transition-colors flex-shrink-0 ml-4"
            onClick={onClose}
            aria-label="Tutup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content - Hanya Menampilkan Dokumentasi Foto */}
        <div className="flex-1 overflow-y-auto p-gutter custom-scrollbar bg-surface/20">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">GALERI DOKUMENTASI (3 FOTO)</span>
            </div>

            {/* Featured Photo 1 */}
            <div
              className="w-full rounded-2xl glass-panel border border-white/10 overflow-hidden group bg-surface/40 p-4 cursor-pointer hover:border-primary/40 transition-all duration-300"
              onClick={() => setLightboxImage(photos[0].src)}
            >
              <div className="relative w-full max-h-[60vh] flex items-center justify-center overflow-hidden rounded-xl bg-background/50 p-2">
                <img
                  src={photos[0].src}
                  alt={photos[0].title}
                  className={`w-full ${getPhotoClass(photos[0].src, true)} group-hover:scale-[1.02] transition-transform duration-500`}
                />
                <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-md p-2.5 rounded-full border border-white/20 flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 px-2">
                <h4 className="text-primary font-bold">{photos[0].title}</h4>
                <p className="text-on-surface-variant text-sm mt-1">{photos[0].description}</p>
              </div>
            </div>

            {/* Photos 2 & 3 in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {photos.slice(1).map((photo) => (
                <div
                  key={photo.id}
                  className="w-full rounded-2xl glass-panel border border-white/10 overflow-hidden group bg-surface/40 p-4 cursor-pointer hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                  onClick={() => setLightboxImage(photo.src)}
                >
                  <div className="relative w-full h-72 flex items-center justify-center overflow-hidden rounded-xl bg-background/50 p-2">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className={`w-full ${getPhotoClass(photo.src, false)} group-hover:scale-105 transition-transform duration-500`}
                    />
                    <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-md p-2 rounded-full border border-white/20 flex items-center justify-center text-primary shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 px-2">
                    <h4 className="text-primary font-bold">{photo.title}</h4>
                    <p className="text-on-surface-variant text-sm mt-1">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="fixed top-6 right-6 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors shadow-lg z-50"
            onClick={() => setLightboxImage(null)}
            aria-label="Tutup Layar Penuh"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={lightboxImage}
              alt="Fullscreen Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
