import { motion } from 'motion/react';

export default function Membership() {
  return (
    <section id="mitgliedschaft" className="py-24 px-10 border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-sm font-bold bg-brand-text text-white px-2 py-1">05</span>
          <h2 className="text-xs uppercase tracking-[0.2em] font-black text-brand-text">Nutzung & Preise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Full Membership */}
          <div className="bg-brand-text text-brand-bg p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-5xl font-black italic tracking-tighter mb-2">ab 200€<span className="text-sm font-normal not-italic opacity-60"> / Monat</span></h3>
              <p className="text-[11px] uppercase tracking-widest font-bold opacity-70 mb-10">Volle Mitgliedschaft</p>
              <ul className="space-y-4 mb-12 text-sm font-medium opacity-90">
                <li className="flex gap-3"><span>•</span> Fester Arbeitsbereich (24/7)</li>
                <li className="flex gap-3"><span>•</span> Alle Werkstätten & Maschinen</li>
                <li className="flex gap-3"><span>•</span> Kunst- & Handwerksnetzwerk</li>
                <li className="flex gap-3"><span>•</span> Infrastruktur (Küche, Keller)</li>
              </ul>
            </div>
            <a href="#kontakt" className="inline-block text-center border-t border-white/20 pt-6 text-[10px] font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
              Auf die Warteliste
            </a>
          </div>

          {/* Temporary Usage */}
          <div className="border-2 border-brand-accent p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-black text-brand-accent mb-6">Temporäre Projekte</h3>
              <p className="text-brand-para text-sm leading-relaxed mb-10">
                Miete Maschinen & Know-How kurzfristig für Bühnenbild, Video, Malerei oder Ausstattung. Wir unterstützen mit Infrastruktur und Support für befristete Vorhaben.
              </p>
              <div className="grid grid-cols-2 gap-4 text-[10px] font-bold uppercase opacity-60">
                <p>• Bühnenbild</p>
                <p>• Malerei</p>
                <p>• Videodesign</p>
                <p>• Glaskunst</p>
              </div>
            </div>
            <a href="#kontakt" className="inline-block text-center mt-12 border-t border-brand-accent/20 pt-6 text-[10px] font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
              Projekt anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
