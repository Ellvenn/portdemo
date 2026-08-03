import { useEffect, useState } from 'react';

interface NavProps {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}

export default function Nav({ menuOpen, setMenuOpen }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-8 py-5 transition-all duration-300 ${
          scrolled && !menuOpen ? 'bg-dark/90 backdrop-blur-sm border-b border-white/5' : ''
        }`}
      >
        <button
          onClick={() => scrollTo('hero')}
          className="font-barlow-condensed font-bold text-white text-xl tracking-widest uppercase hover:text-accent transition-colors duration-200"
        >
          KAELORIAN
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="font-mono text-xs tracking-[0.2em] uppercase bg-white text-dark px-4 py-2 hover:bg-accent hover:text-white transition-all duration-200"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[150] bg-dark flex flex-col justify-between px-8 md:px-16 py-24 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2 mt-8">
          {[
            { label: 'ABOUT', id: 'about' },
            { label: 'WORK', id: 'work' },
            { label: 'EXPERIENCE', id: 'experience' },
            { label: 'TEAM', id: 'team' },
            { label: 'CONTACT', id: 'footer' },
          ].map(({ label, id }, i) => (
            <button
              key={label}
              onClick={() => scrollTo(id)}
              className="text-left font-barlow-condensed font-black uppercase text-white hover:text-accent transition-colors duration-200 leading-none"
              style={{
                fontSize: 'clamp(3rem, 10vw, 8rem)',
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-end justify-between">
          <div className="flex gap-8">
            {['X', 'DRIBBBLE', 'INSTAGRAM', 'FACEBOOK'].map((s) => (
              <span
                key={s}
                className="font-mono text-xs tracking-widest text-white/50 hover:text-white cursor-pointer transition-colors"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                {s}
              </span>
            ))}
          </div>
          <span
            className="text-white/30 text-xs tracking-widest"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            © 2026
          </span>
        </div>
      </div>
    </>
  );
}
