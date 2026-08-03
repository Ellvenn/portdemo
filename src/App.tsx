import { useEffect, useState } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';

const sections = [
  { id: 'hero', label: '01' },
  { id: 'about', label: '02' },
  { id: 'work', label: '03' },
  { id: 'experience', label: '04' },
  { id: 'team', label: '05' },
  { id: 'footer', label: '06' },
];

function ScrollIndicator() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handler = () => {
      let current = 'hero';
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) current = s.id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="scroll-indicator hidden md:flex">
      {sections.map((s) => (
        <div
          key={s.id}
          className={`scroll-dot ${active === s.id ? 'active' : ''}`}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-dark text-white min-h-screen">
      <Cursor />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ScrollIndicator />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
