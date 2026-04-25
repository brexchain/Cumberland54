export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="h-20 border-t border-brand-border px-10 flex items-center justify-between shrink-0 bg-brand-bg relative z-10">
      <div className="text-[10px] uppercase tracking-[0.15em] font-medium text-brand-muted hidden md:block">
        Bühnenbild • Videodesign • Malerei • Glaskunst • Ledergalanterie • Kostüm • Grafik • Bildhauerei
      </div>
      <div className="text-[10px] font-black uppercase tracking-widest text-brand-text">
        &copy; {currentYear} CUMBERLAND54 VEREIN
      </div>
      <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-brand-muted">
        <a href="#" className="hover:text-brand-accent transition-colors">Impressum</a>
        <a href="#" className="hover:text-brand-accent transition-colors">Datenschutz</a>
      </div>
    </footer>
  );
}
