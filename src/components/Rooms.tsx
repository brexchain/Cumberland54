import { motion } from 'motion/react';

const rooms = [
  { id: '02.1', title: 'Ladenlokal', desc: '200 m², große Fenster', type: 'Repräsentation' },
  { id: '02.2', title: 'Co-creative-Working', desc: 'Austausch & Planung', type: 'Büro' },
  { id: '02.3', title: 'Nähzimmer', desc: 'Textil & Leder', type: 'Werkstatt' },
  { id: '02.4', title: 'Holzwerkstatt', desc: 'Maschinenraum', type: 'Werkstatt' },
  { id: '02.5', title: 'Metallwerkstatt', desc: 'Schweißen & Schleifen', type: 'Werkstatt' },
  { id: '02.6', title: 'Ausgebauter Keller', desc: 'Ruhe & Dunkelheit', type: 'Spezialraum' },
  { id: '02.7', title: 'Küche', desc: 'Pausen & Vernetzung', type: 'Infrastruktur' },
];

export default function Rooms() {
  return (
    <section id="raeume" className="py-24 px-10 border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-sm font-bold bg-brand-text text-white px-2 py-1">02</span>
          <h2 className="text-xs uppercase tracking-[0.2em] font-black text-brand-text">Unsere Räume</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 border border-brand-border flex flex-col justify-between h-48 hover:bg-white transition-colors group"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] uppercase tracking-wider font-bold text-brand-muted">{room.id}</span>
                <span className="text-[8px] uppercase tracking-widest font-black bg-brand-text text-white px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {room.type}
                </span>
              </div>
              <div>
                <p className="text-sm font-black uppercase leading-tight mb-1">{room.title}</p>
                <p className="text-[10px] font-medium text-brand-para uppercase opacity-70 italic">{room.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="p-6 border-2 border-dashed border-brand-border flex items-center justify-center h-48">
            <p className="text-[10px] uppercase font-black text-brand-muted text-center tracking-widest">
              Lerne uns kennen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
