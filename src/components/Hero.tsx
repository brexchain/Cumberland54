import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="px-10 pt-48 pb-24 border-b border-brand-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
              Raum & Werkstatt <br/> <span className="text-brand-accent italic">für Kunst & Kultur</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-para max-w-2xl leading-relaxed mb-12">
              Arbeitsplätze, Werkstätten und professionelles Equipment im Cumberland54. Ein kooperativer Raum für Künstler*innen, Handwerkende und kreative Projekte.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#kontakt"
                className="px-8 py-4 bg-brand-text text-white text-[11px] uppercase tracking-widest font-bold hover:bg-brand-accent transition-all"
              >
                Platz anfragen
              </a>
              <a
                href="#mitgliedschaft"
                className="px-8 py-4 border-2 border-brand-border text-brand-text text-[11px] uppercase tracking-widest font-bold hover:bg-brand-secondary transition-all"
              >
                Informationen
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:col-span-4 flex flex-col justify-end items-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 bg-brand-secondary border border-brand-border w-full"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-muted mb-4">Status</p>
            <div className="flex items-start gap-4">
              <span className="inline-block w-3 h-3 rounded-full bg-red-500 mt-1 animate-pulse"></span>
              <p className="text-sm leading-tight font-medium text-brand-para">
                Alle festen Plätze sind belegt. Trage dich auf unsere Warteliste ein, um beim nächsten freien Platz benachrichtigt zu werden.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
