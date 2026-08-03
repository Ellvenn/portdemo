import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    year: '2025 — NOW',
    role: 'PRODUCT DESIGNER',
    company: 'NEXUS LABS',
    location: 'REMOTE',
  },
  {
    year: '2023 — 2025',
    role: 'UI/UX ENGINEER',
    company: 'AURORA STUDIO',
    location: 'JAKARTA, ID',
  },
  {
    year: '2022 — 2023',
    role: 'DESIGN SYSTEM LEAD',
    company: 'VERTEX GROUP',
    location: 'SINGAPORE',
  },
  {
    year: '2020 — 2022',
    role: 'PRODUCT DESIGNER',
    company: 'PRISM DIGITAL',
    location: 'BANDUNG, ID',
  },
  {
    year: '2018 — 2020',
    role: 'JUNIOR DESIGNER',
    company: 'KAIROS AGENCY',
    location: 'JAKARTA, ID',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="bg-dark">
      {/* Section header */}
      <div className="section-header">
        <span className="text-white/40 text-xs tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>
          •04
        </span>
        <span className="text-accent text-xs tracking-[0.3em] uppercase text-center" style={{ fontFamily: 'Space Mono, monospace' }}>
          EXPERIENCE
        </span>
        <span className="text-white/40 text-xs tracking-widest text-right" style={{ fontFamily: 'Space Mono, monospace' }}>
          © 2026
        </span>
      </div>

      {/* Title */}
      <div className="px-8 md:px-16 pt-16 pb-12 overflow-hidden">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <h2 className="display-text text-white" style={{ fontSize: 'clamp(48px, 10vw, 130px)' }}>
            WORK
          </h2>
          <h2
            className="display-text"
            style={{
              fontSize: 'clamp(48px, 10vw, 130px)',
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
              color: 'transparent',
            }}
          >
            HISTORY
          </h2>
        </div>
      </div>

      {/* Experience list */}
      <div ref={sectionRef} className="px-8 md:px-16 pb-24">
        <div className="border-t border-white/10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`exp-item group grid grid-cols-12 gap-4 py-8 border-b border-white/10 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="col-span-12 md:col-span-2">
                <span className="text-white/40 text-sm tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>
                  {exp.year}
                </span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="display-text text-white group-hover:text-accent transition-colors duration-200" style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}>
                  {exp.role}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-3">
                <span className="text-white/70 text-base tracking-wide">{exp.company}</span>
              </div>
              <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
                <span className="text-white/40 text-sm tracking-widest uppercase" style={{ fontFamily: 'Space Mono, monospace' }}>
                  {exp.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
