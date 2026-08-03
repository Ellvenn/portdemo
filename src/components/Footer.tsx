import { useEffect, useRef, useState } from 'react';

const marqueeItems = [
  'UI/UX DESIGN',
  'PRODUCT STRATEGY',
  'DESIGN SYSTEMS',
  'PROTOTYPING',
  'UX RESEARCH',
  'BRAND IDENTITY',
  'MOTION DESIGN',
];

function Marquee() {
  return (
    <div className="overflow-hidden py-6 border-y border-white/10">
      <div className="marquee-track flex gap-12">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span
              className="display-text text-white"
              style={{ fontSize: 'clamp(32px, 6vw, 80px)' }}
            >
              {item}
            </span>
            <span className="text-accent text-3xl md:text-5xl font-light">+</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer id="footer" className="bg-dark">
      {/* Section header */}
      <div className="section-header">
        <span className="text-white/40 text-xs tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>•06</span>
        <span className="text-accent text-xs tracking-[0.3em] uppercase text-center" style={{ fontFamily: 'Space Mono, monospace' }}>
          GET IN TOUCH
        </span>
        <span className="text-white/40 text-xs tracking-widest text-right" style={{ fontFamily: 'Space Mono, monospace' }}>© 2026</span>
      </div>

      {/* Marquee */}
      <div className="pt-16">
        <Marquee />
      </div>

      {/* Big CTA */}
      <div ref={ref} className="px-8 md:px-16 py-24 text-center overflow-hidden">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-white/50 text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Space Mono, monospace' }}>
            LET'S BUILD SOMETHING
          </p>
          <h2
            className="display-text text-white mb-8 hover-underline cursor-pointer inline-block"
            style={{ fontSize: 'clamp(48px, 12vw, 160px)' }}
          >
            <a href="mailto:hello@kaelorian.studio">HELLO@KAELORIAN.STUDIO</a>
          </h2>
          <div className="flex justify-center">
            <a
              href="mailto:hello@kaelorian.studio"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 hover:bg-white hover:text-dark transition-all duration-200"
            >
              <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'Space Mono, monospace' }}>
                START A PROJECT
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer info grid */}
      <div className="px-8 md:px-16 py-12 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white/40 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
              LOCATION
            </h4>
            <p className="text-white text-sm">Jakarta, ID</p>
            <p className="text-white/50 text-sm">Available Worldwide</p>
          </div>
          <div>
            <h4 className="text-white/40 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
              CONTACT
            </h4>
            <p className="text-white text-sm hover-underline cursor-pointer">hello@kaelorian.studio</p>
            <p className="text-white/50 text-sm">+62 812 3456 7890</p>
          </div>
          <div>
            <h4 className="text-white/40 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
              SOCIAL
            </h4>
            <div className="flex flex-col gap-1">
              {['X / TWITTER', 'DRIBBBLE', 'INSTAGRAM', 'LINKEDIN'].map((s) => (
                <span key={s} className="text-white text-sm hover-underline cursor-pointer hover:text-accent transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white/40 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
              STATUS
            </h4>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white text-sm">Available for Q1 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-16 py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-barlow-condensed font-bold text-white text-xl tracking-widest uppercase">
            KAELORIAN
          </span>
          <span className="text-white/30 text-xs tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>
            © 2026 ALL RIGHTS RESERVED
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: 'Space Mono, monospace' }}>
            BUILT WITH PRECISION
          </span>
          <span className="text-accent text-xs tracking-widest uppercase" style={{ fontFamily: 'Space Mono, monospace' }}>
            •
          </span>
          <span className="text-white/30 text-xs tracking-widest uppercase" style={{ fontFamily: 'Space Mono, monospace' }}>
            BACK TO TOP ↑
          </span>
        </div>
      </div>
    </footer>
  );
}
