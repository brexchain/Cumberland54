import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const artists = [
  {
    name: 'Hannah König',
    role: 'Bühnen- und Kostümbildnerin & Ledergalanteristin',
    description: 'Spezialisiert auf Leder, Stoff und Stick. Hannah verbindet traditionelles Handwerk mit moderner Ästhetik im Bereich Bühne und Kostüm.',
    link: 'https://www.hannahkoenig.at/',
    works: [
      'https://images.unsplash.com/photo-1544411047-c491e34a2450?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1551733005-731362947113?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600',
    ]
  },
  {
    name: 'Florian Tanzer',
    role: 'Keramik & Video-Design',
    description: 'Launische Keramik trifft auf dynamisches Video-Design. Florian erforscht die Schnittstelle zwischen physischer Form und digitalem Ausdruck.',
    link: 'https://www.cumberland54.com/?page_id=48',
    works: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600',
    ]
  }
];

export default function Artists() {
  return (
    <section id="kuenstler" className="py-24 px-10 border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-sm font-bold bg-brand-text text-white px-2 py-1">04</span>
          <h2 className="text-xs uppercase tracking-[0.2em] font-black text-brand-text">Künstler & Kreative</h2>
        </div>

        <div className="space-y-32">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid lg:grid-cols-12 gap-10"
            >
              <div className="lg:col-span-5">
                <h3 className="text-4xl font-extrabold mb-4 tracking-tighter">{artist.name}</h3>
                <p className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-6">
                  {artist.role}
                </p>
                <p className="text-brand-para leading-relaxed mb-8 text-lg">
                  {artist.description}
                </p>
                <a
                  href={artist.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors"
                >
                  Zur Seite von {artist.name.split(' ')[0]} <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="lg:col-span-7">
                <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x">
                  {artist.works.map((img, i) => (
                    <div 
                      key={i} 
                      className="min-w-[300px] md:min-w-[400px] aspect-[4/3] bg-brand-secondary border border-brand-border shrink-0 snap-start overflow-hidden"
                    >
                      <img
                        src={img}
                        alt={`${artist.name} work ${i + 1}`}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-2 h-1 bg-brand-secondary">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '40%' }}
                    viewport={{ once: true }}
                    className="h-full bg-brand-accent"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
