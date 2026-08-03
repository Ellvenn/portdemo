import { useEffect, useRef, useState } from 'react';

const founders = [
  {
    name: 'KAEL HASTINGS',
    role: 'FOUNDER & LEAD DESIGNER',
    image: 'https://images.pexels.com/photos/33761233/pexels-photo-33761233.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    bio: 'Eight years shaping digital products across fintech, SaaS, and creative tooling. Obsessed with systems that scale and interfaces that feel inevitable.',
    skills: ['PRODUCT DESIGN', 'DESIGN SYSTEMS', 'PROTOTYPE'],
  },
  {
    name: 'LORIAN VANCE',
    role: 'CO-FOUNDER & STRATEGIST',
    image: 'https://images.pexels.com/photos/34078749/pexels-photo-34078749.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    bio: 'Strategy lead bridging research, brand, and product. Translates ambiguous problems into roadmaps teams can actually execute against.',
    skills: ['PRODUCT STRATEGY', 'UX RESEARCH', 'BRAND'],
  },
];

function FounderCard({ founder, index }: { founder: (typeof founders)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Image */}
      <div className="img-zoom relative overflow-hidden mb-6" style={{ aspectRatio: '3/4' }}>
        <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="text-accent text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'Space Mono, monospace' }}>
            {founder.role}
          </span>
        </div>
      </div>

      {/* Name */}
      <h3 className="display-text text-white mb-3" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
        {founder.name}
      </h3>

      {/* Bio */}
      <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-sm">{founder.bio}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {founder.skills.map((skill) => (
          <span
            key={skill}
            className="text-white/40 text-xs border border-white/10 px-3 py-1 tracking-wider"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="bg-dark">
      {/* Section header */}
      <div className="section-header">
        <span className="text-white/40 text-xs tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>•05</span>
        <span className="text-accent text-xs tracking-[0.3em] uppercase text-center" style={{ fontFamily: 'Space Mono, monospace' }}>
          THE TEAM
        </span>
        <span className="text-white/40 text-xs tracking-widest text-right" style={{ fontFamily: 'Space Mono, monospace' }}>© 2026</span>
      </div>

      {/* Title */}
      <div ref={titleRef} className="px-8 md:px-16 pt-16 pb-12 overflow-hidden">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <h2 className="display-text text-white" style={{ fontSize: 'clamp(48px, 10vw, 130px)' }}>
            THE
          </h2>
          <h2
            className="display-text"
            style={{
              fontSize: 'clamp(48px, 10vw, 130px)',
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
              color: 'transparent',
            }}
          >
            FOUNDERS
          </h2>
        </div>
      </div>

      {/* Founders grid */}
      <div className="px-8 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
