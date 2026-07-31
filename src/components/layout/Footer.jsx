export default function Footer() {
  return (
    <footer className="w-full py-stack-lg bg-surface-container-lowest border-t border-outline-variant/30 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto gap-stack-md transition-all duration-300">
        <div className="font-headline-sm text-headline-sm text-primary">MSA.</div>
        <p className="font-body-md text-body-md text-on-surface-variant">© 2026 Muhammad Safal Azhar. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.linkedin.com/in/msafalazhar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/safalazhar" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://mail.google.com/mail/?view=cm&fs=1&to=msafalazhar@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
}
