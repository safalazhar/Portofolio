import { useState, useEffect } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle scroll to hero after thank you overlay
  useEffect(() => {
    if (!showThankYou) return;

    const timer = setTimeout(() => {
      setShowThankYou(false);
      setStatus("idle");

      // Scroll ke halaman awal (hero section)
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [showThankYou]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setShowThankYou(true);
      } else {
        throw new Error(data.message || "Gagal mengirim pesan.");
      }
    } catch (error) {
      console.error("Error saat mengirim pesan:", error);
      setStatus("error");
      setErrorMsg(error.message || "Gagal mengirim pesan. Silakan coba lagi.");
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 4000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-section-gap bg-surface relative overflow-hidden">
      {/* Thank You Overlay */}
      {showThankYou && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(12px)",
            animation: "thankYouFadeIn 0.5s ease-out",
          }}
        >
          <div
            className="text-center px-8"
            style={{ animation: "thankYouScaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
          >
            <div
              className="mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary, #8b5cf6))",
                boxShadow: "0 0 40px rgba(99, 102, 241, 0.4)",
              }}
            >
              <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
            <h2 className="font-display text-display-xl md:text-5xl text-white font-bold mb-3 tracking-tight">
              Terima Kasih! 🙏
            </h2>
            <p className="font-body text-body-lg text-white/70 max-w-md mx-auto mb-6">
              Pesan kamu sudah terkirim. Saya akan segera membalas secepatnya!
            </p>
            <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
              <span className="material-symbols-outlined animate-spin text-sm">sync</span>
              Kembali ke halaman utama...
            </div>
          </div>
        </div>
      )}

      {/* Inline styles for thank you animations */}
      <style>{`
        @keyframes thankYouFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes thankYouScaleIn {
          from { opacity: 0; transform: scale(0.8) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div className="max-w-container mx-auto px-gutter relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isIntersecting ? "animate-fade-up" : "opacity-0"}`}>
          <h1 className="font-display text-headline-lg md:text-display-xl mb-4 text-primary tracking-tight font-bold">LET&apos;S CONNECT</h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Punya proyek yang ingin dikerjakan atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya! Saya selalu terbuka untuk berdiskusi tentang peluang baru maupun tren teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Left Column: Contact Form */}
          <div className={`md:col-span-7 ${isIntersecting ? "animate-fade-up-delay-1" : "opacity-0"}`}>
            <div className="glass-panel p-8 rounded-xl h-full">
              <h2 className="font-headline text-headline-sm mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">send</span>
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-lg">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest block">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-outline-variant rounded-lg p-4 text-on-surface input-glow focus:ring-0 font-body transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest block">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-outline-variant rounded-lg p-4 text-on-surface input-glow focus:ring-0 font-body transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest block">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-background border border-outline-variant rounded-lg p-4 text-on-surface input-glow focus:ring-0 font-body transition-all"
                    placeholder="How can I help you?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-outline-variant rounded-lg p-4 text-on-surface input-glow focus:ring-0 font-body transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Error Message */}
                {status === "error" && errorMsg && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3 text-sm">
                    <span className="material-symbols-outlined text-base">error</span>
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="primary-gradient-btn w-full py-4 px-8 rounded-xl text-on-primary font-bold text-body-lg flex items-center justify-center gap-3 active:scale-95 transform transition-transform disabled:opacity-70 disabled:hover:scale-100"
                >
                  {status === "idle" && (
                    <>
                      Send Message
                      <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </>
                  )}
                  {status === "loading" && (
                    <>
                      <span className="material-symbols-outlined animate-spin text-xl">sync</span>
                      Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <span className="material-symbols-outlined text-xl">check_circle</span>
                      Message Sent!
                    </>
                  )}
                  {status === "error" && (
                    <>
                      <span className="material-symbols-outlined text-xl">error</span>
                      Gagal Mengirim
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Quick Links & Info */}
          <div className={`md:col-span-5 flex flex-col gap-gutter ${isIntersecting ? "animate-fade-up-delay-2" : "opacity-0"}`}>
            <div className="glass-panel p-8 rounded-xl flex-grow flex flex-col justify-between">
              <div>
                <h2 className="font-headline text-headline-sm mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">contact_support</span>
                  Quick Links
                </h2>
                <div className="space-y-8">
                  {/* Email Me */}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=msafalazhar@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary">mail</span>
                    </div>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Email Me</h4>
                      <p className="font-body text-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">msafalazhar@gmail.com</p>
                    </div>
                  </a>

                  {/* Call Me */}
                  <a href="tel:+6283846447319" className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary">call</span>
                    </div>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Call Me</h4>
                      <p className="font-body text-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">+62 838-4644-7319</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/msafalazhar" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-container/30 transition-colors">
                      <span className="material-symbols-outlined text-secondary">work</span>
                    </div>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">LinkedIn</h4>
                      <p className="font-body text-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">linkedin.com/in/msafalazhar</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a href="https://wa.me/6283846447319" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary">chat</span>
                    </div>
                    <div>
                      <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">WhatsApp</h4>
                      <p className="font-body text-body-md text-on-surface font-semibold group-hover:text-primary transition-colors">Chat with me directly</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="/cv-safal-azhar.pdf"
                  download
                  className="w-full py-4 border border-primary/40 rounded-xl font-bold text-primary flex items-center justify-center gap-3 bg-primary/5 hover:bg-primary/10 transition-all active:scale-95"
                >
                  Download CV
                  <span className="material-symbols-outlined">description</span>
                </a>
              </div>
            </div>

            {/* Location Visual/Map Card */}
            <div className="glass-panel overflow-hidden rounded-xl h-56 relative group">
              <iframe
                title="Google Maps Jember"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126438.28548098175!2d113.6267776!3d-8.1724619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6943a53230a13%3A0xc39f2015df31fcfd!2sJember%2C%20Jember%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1714500000000!5m2!1sen!2sid"
                className="w-full h-full border-0 filter contrast-125 opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute bottom-3 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <div className="flex items-center gap-2 bg-background/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest font-bold">Jember, Indonesia</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/wGVFX4E55ahUJNz96?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all pointer-events-auto"
                >
                  <span>Buka Google Maps</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
