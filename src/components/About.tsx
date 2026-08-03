import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CENTER_IMAGE = '/images/myPAS.jpg';
const LEFT_IMAGE = '/images/myPAS.jpg';
const RIGHT_IMAGE = '/images/myPAS.jpg';

const stats = [
  { value: '87', label: 'Pace\nShooting' },
  { value: '40', label: 'GK\nSkills' },
  { value: '99', label: 'EGOISTO\nATTACKER' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="bg-dark">
      {/* Section header */}
      <div className="section-header">
        <span
          className="text-white/40 text-xs tracking-widest"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          ini blm diganti
        </span>
        <span className="text-center" />
        <span
          className="text-white/40 text-xs tracking-widest text-right"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          ini juga
        </span>
      </div>

      {/* Main two-column bio */}
      <div className="grid grid-cols-12 min-h-[55vh] border-b border-white/10">
        {/* Left column */}
        <div
          className="col-span-12 md:col-span-4 flex flex-col justify-between px-8 md:px-16 py-14 border-r border-white/10"
        >
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <span
              className="text-accent text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              ABOUT&nbsp;&nbsp;ME
            </span>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-col gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.3s' }}
          >
            {stats.map((s) => (
              <div key={s.value} className="flex items-end gap-3">
                <span
                  className="display-text text-white leading-none"
                  style={{ fontSize: 'clamp(36px, 6vw, 72px)' }}
                >
                  {s.value}
                </span>
                <span
                  className="text-white/40 text-xs tracking-[0.15em] uppercase leading-tight mb-1 whitespace-pre-line"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="w-8 h-8 flex items-center justify-center border border-white/30 hover:border-accent hover:bg-accent transition-all duration-200 group cursor-pointer">
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Right column — bio text */}
        <div
          className={`col-span-12 md:col-span-8 flex flex-col justify-center px-8 md:px-16 py-14 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <p
            className="display-text text-white leading-tight mb-10"
            style={{ fontSize: 'clamp(22px, 3.2vw, 46px)' }}
          >
            D4 Applied Foreign Languages student at Universitas Diponegoro
            Based curriculum design, KPI development, and Learning & Development program management.
            Targeting a Human Resources Internship
            to contribute to talent development and people management initiatives.
          </p>

          <div>
            <button
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block border border-white text-white px-8 py-3 text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-dark transition-all duration-200"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              TELEPORTING
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicator row */}
      <div className="flex items-center px-8 md:px-16 py-5 border-b border-white/10">
        <div className="flex items-center w-full relative">
          {/* Line */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
          {/* Three dots */}
          <div className="relative flex items-center justify-between w-full">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                  activeSlide === i
                    ? 'bg-accent border-accent scale-110'
                    : 'bg-dark border-white/30 hover:border-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Three-panel image row */}
      <div className="grid grid-cols-3 h-[50vw] max-h-[520px]">
        {/* Left dark panel */}
        <div
          className={`img-zoom overflow-hidden relative transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <img
            src={LEFT_IMAGE}
            alt="Process"
            className="w-full h-full object-cover object-center border-r border-white/5"
          />
          <div className="absolute inset-0 panel-overlay bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
        </div>

        {/* Center: main portrait */}
        <div
          className={`img-zoom overflow-hidden relative transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '0.55s' }}
        >
          <img
            src={CENTER_IMAGE}
            alt="Kaelorian Frost"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 panel-overlay bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <span
              className="text-white/70 text-xs tracking-widest uppercase"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              The Artist
            </span>
            <span className="text-accent text-xs" style={{ fontFamily: 'Space Mono, monospace' }}>
              ∞
            </span>
          </div>
        </div>

        {/* Right dark panel */}
        <div
          className={`img-zoom overflow-hidden relative transition-all duration-1000 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <img
            src={RIGHT_IMAGE}
            alt="Vision"
            className="w-full h-full object-cover object-center border-l border-white/5"
          />
          <div className="absolute inset-0 panel-overlay bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
