import { motion } from 'motion/react';

const equipmentGroups = [
  {
    title: 'Holz & Glas',
    desc: 'Sägen, Fräsen, Schleifen, Glasschneider, Bandsägen.',
  },
  {
    title: 'Metall & Keramik',
    desc: 'Schweißgeräte (MIG/MAG, WIG), Brennöfen, Bohrmaschinen.',
  },
  {
    title: 'Stoff & Leder',
    desc: 'Industrie-Nähmaschinen, Overlock, Leder-Spaltmaschinen.',
  },
  {
    title: 'Modellbau & Sand',
    desc: 'Sandstrahlkabine, Laser (geplant), Feinmechanik.',
  }
];

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 px-10 border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-sm font-bold bg-brand-text text-white px-2 py-1">03</span>
          <h2 className="text-xs uppercase tracking-[0.2em] font-black text-brand-text">Professional Equipment</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12">
          <div className="space-y-6">
            {equipmentGroups.map((group) => (
              <div key={group.title} className="flex justify-between items-baseline border-b border-brand-border pb-4 group">
                <span className="text-lg font-black uppercase tracking-tight group-hover:text-brand-accent transition-colors">{group.title}</span>
                <span className="text-xs font-medium text-brand-muted italic">{group.desc}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-brand-secondary p-10 border border-brand-border flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest mb-6 border-b border-brand-border pb-2">Nutzungshinweise</h3>
              <p className="text-brand-para leading-relaxed text-sm">
                Die Benutzung unserer professionellen Maschinen ist für alle Mitglieder ohne zusätzliche Kosten möglich. Wir legen Wert auf fachgerechte Einweisung und Sicherheit.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-brand-border">
              <p className="text-[10px] uppercase font-bold text-brand-accent tracking-widest leading-tight">
                * Verschleißmaterial (z.B. Sägeblätter, Gas, Nadeln) wird separat zum Selbstkostenpreis abgerechnet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
