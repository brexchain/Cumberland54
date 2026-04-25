import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 px-10 border-b border-brand-border">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-bold bg-brand-text text-white px-2 py-1">01</span>
            <h2 className="text-xs uppercase tracking-[0.2em] font-black text-brand-text">Über Uns</h2>
          </div>
          <p className="text-4xl font-extrabold leading-[1.1] tracking-tighter uppercase text-brand-text">
            Förderung von Kunst, Handwerk & Kultur.
          </p>
        </div>
        
        <div className="lg:w-2/3 space-y-8">
          <p className="text-xl text-brand-para leading-relaxed">
            Cumberland54 ist mehr als nur eine Werkstatt. Es ist eine Plattform für alle, die professionell im Bereich Kunst, Design und Handwerk tätig sind oder es werden wollen. Wir glauben daran, dass der Zugang zu professionellem Equipment und der Austausch innerhalb einer heterogenen Community die Qualität künstlerischer und handwerklicher Arbeit bereichert.
          </p>
          <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-brand-border">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest mb-4">Unsere Mission</h3>
              <p className="text-sm text-brand-para leading-relaxed">
                Bereitstellung von Infrastruktur und Wissen für Künstler*innen, Handwerkende und kreative Köpfe aus allen Sparten.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest mb-4">Vernetzung</h3>
              <p className="text-sm text-brand-para leading-relaxed">
                Ein Ort des Austauschs, an dem Synergien zwischen den Gewerken entstehen und Projekte gemeinsam wachsen können.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
