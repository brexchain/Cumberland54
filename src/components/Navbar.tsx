import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Über uns', href: '#ueber-uns' },
  { name: 'Räume', href: '#raeume' },
  { name: 'Equipment', href: '#equipment' },
  { name: 'Künstler', href: '#kuenstler' },
  { name: 'Mitgliedschaft', href: '#mitgliedschaft' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-brand-bg/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'
      } border-brand-border`}
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">Cumberland54</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-muted">Kunst & Werkstatt</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontakt"
              className="px-6 py-2 bg-brand-text text-white text-[11px] uppercase tracking-widest font-bold hover:bg-brand-accent transition-colors"
            >
              Platz anfragen
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-accent transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-t border-brand-border overflow-hidden"
          >
            <div className="px-10 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-black uppercase tracking-widest text-brand-text hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#kontakt"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-text text-white py-4 text-[11px] uppercase tracking-widest font-bold"
                >
                  Platz anfragen
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
