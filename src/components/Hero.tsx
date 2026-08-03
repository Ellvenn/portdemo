import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HERO_BG = 'https://images.pexels.com/photos/14900125/pexels-photo-14900125.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop';
const THUMB_1 = 'https://images.pexels.com/photos/12627677/pexels-photo-12627677.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setParallaxY(rect.top * 0.3);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="Hero background"
          className="w-full h-full object-cover object-center"
          style={{ transform: `translateY(${parallaxY}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-dark/20 to-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 pt-24">
        {/* Large display title */}
        <div
          className={`px-6 md:px-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h1
            className="display-text text-white leading-none whitespace-nowrap overflow-hidden"
            style={{ fontSize: 'clamp(60px, 17vw, 220px)' }}
          >
            KAELORIAN
          </h1>
          <h2
            className="display-text leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(55px, 16vw, 210px)',
              color: 'rgba(255,255,255,0.12)',
              marginTop: '-0.05em',
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
            }}
          >
            PORTFOLIO
          </h2>
        </div>

        {/* Skills row */}
        <div
          className={`flex items-center justify-between px-8 md:px-16 mt-8 md:mt-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          {['UI/UX DESIGN', 'PRODUCT STRATEGY', 'DESIGN SYSTEMS'].map((skill) => (
            <span
              key={skill}
              className="text-white/60 text-xs md:text-sm tracking-[0.2em] uppercase"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Middle content row */}
        <div className="flex-1 flex items-end px-8 md:px-16 pb-16 mt-8">
          <div className="flex items-end justify-between w-full">
            {/* Left: Tagline + arrow + thumbnail */}
            <div
              className={`flex flex-col gap-6 max-w-sm transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              {/* White tagline card */}
              <div className="bg-white text-dark p-5 md:p-6 max-w-xs">
                <p
                  className="font-black uppercase leading-tight text-sm md:text-base"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.02em' }}
                >
                  DESIGNING STRUCTURED INTERFACES BUILT FOR SCALE AND REAL-WORLD IMPACT.
                </p>
              </div>

              {/* Arrow + thumbnail row */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-10 h-10 flex items-center justify-center border border-white/30 hover:border-accent hover:bg-accent transition-all duration-200 group"
                >
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <div className="w-16 h-16 overflow-hidden">
                  <img src={THUMB_1} alt="Project thumbnail" className="w-full h-full object-cover" />
                </div>
                <div
                  className="text-white/40 text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                >
                  VIEW WORK
                </div>
              </div>
            </div>

            {/* Center decorative plus signs */}
            <div className="hidden md:flex flex-col items-center gap-48 text-white/20 text-2xl font-light">
              <span>+</span>
            </div>
            <div className="hidden md:block text-white/20 text-2xl font-light self-center">+</div>

            {/* Right: Year display */}
            <div
              className={`text-right transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.8s' }}
            >
              <div
                className="font-black text-white leading-none"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: 'clamp(80px, 14vw, 180px)',
                  lineHeight: '0.85',
                }}
              >
                <div>20</div>
                <div>26</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative plus signs */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/10 text-2xl font-light z-10 pointer-events-none">
        +
      </div>

      {/* Bottom info bar */}
      <div className="relative z-10 flex items-center justify-between px-8 md:px-16 py-4 border-t border-white/10">
        <span className="text-white/40 text-xs tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>
          •01
        </span>
        <span className="text-accent text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Space Mono, monospace' }}>
          PORTFOLIO
        </span>
        <span className="text-white/40 text-xs tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>
          © 2026
        </span>
      </div>
    </section>
  );
}
