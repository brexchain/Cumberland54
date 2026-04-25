import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 px-10 border-b border-brand-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-sm font-bold bg-brand-text text-white px-2 py-1">06</span>
            <h2 className="text-xs uppercase tracking-[0.2em] font-black text-brand-text">Kennenlernen & Anfrage</h2>
          </div>
          <p className="text-4xl font-extrabold leading-[1.1] tracking-tighter uppercase text-brand-text mb-8">
            Werde Teil der Gemeinschaft.
          </p>
          <p className="text-lg text-brand-para leading-relaxed mb-12">
            Schreib uns für die Warteliste oder projektbezogene Anfragen. Wir freuen uns darauf, dich und deine Arbeit kennenzulernen.
          </p>
          <div className="space-y-6 pt-8 border-t border-brand-border">
            <div>
              <p className="text-[10px] uppercase font-black text-brand-muted mb-1">Email</p>
              <a href="mailto:info@cumberland54.com" className="text-xl font-bold hover:text-brand-accent transition-colors underline decoration-brand-accent decoration-2 underline-offset-4">info@cumberland54.com</a>
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-brand-muted mb-1">Standort</p>
              <p className="text-xl font-bold">Cumberlandstraße 54, 30161 Hannover</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-secondary p-12 border border-brand-border h-full">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-brand-muted">Name</label>
              <input type="text" className="w-full bg-white border-b border-brand-border py-4 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Vollständiger Name" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-brand-muted">E-Mail</label>
              <input type="email" className="w-full bg-white border-b border-brand-border py-4 focus:outline-none focus:border-brand-accent transition-colors" placeholder="email@adresse.de" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black tracking-widest text-brand-muted">Thema</label>
              <select className="w-full bg-white border-b border-brand-border py-4 focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                <option>Warteliste / Fester Platz</option>
                <option>Temporäre Projektmiete</option>
                <option>Allgemeines Kennenlernen</option>
              </select>
            </div>
            <button className="w-full bg-brand-text text-white py-6 text-xs uppercase font-black tracking-[0.2em] hover:bg-brand-accent transition-all">
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
