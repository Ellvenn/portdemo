import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'NEXUS DASHBOARD',
    category: 'UI/UX DESIGN',
    year: '2025',
    description: 'Enterprise analytics platform with real-time data visualization and modular design system.',
    image: 'https://images.pexels.com/photos/34270452/pexels-photo-34270452.png?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    tags: ['Product Design', 'Design System', 'Dashboard'],
    featured: true,
  },
  {
    id: 2,
    title: 'AURORA MOBILE',
    category: 'PRODUCT STRATEGY',
    year: '2025',
    description: 'Consumer fintech app focused on seamless onboarding, clarity, and trust at scale.',
    image: 'https://images.pexels.com/photos/9324905/pexels-photo-9324905.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    tags: ['Mobile', 'Fintech', 'UX Research'],
    featured: false,
  },
  {
    id: 3,
    title: 'VERTEX SYSTEM',
    category: 'DESIGN SYSTEMS',
    year: '2024',
    description: 'Scalable component library and token architecture built for cross-platform consistency.',
    image: 'https://images.pexels.com/photos/12627677/pexels-photo-12627677.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    tags: ['Design System', 'Tokens', 'Components'],
    featured: false,
  },
  {
    id: 4,
    title: 'PRISM BRAND',
    category: 'UI/UX DESIGN',
    year: '2024',
    description: 'Visual identity and digital experience for a next-gen creative technology studio.',
    image: 'https://images.pexels.com/photos/16358629/pexels-photo-16358629.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop',
    tags: ['Branding', 'Web', 'Motion'],
    featured: false,
  },
];

function WorkCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
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
      className={`work-card group cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="img-zoom relative overflow-hidden mb-5" style={{ aspectRatio: '16/10' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-300" />
        <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-white/40 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={14} />
        </div>
        <div
          className="absolute bottom-4 left-4 text-white/60 text-xs tracking-widest uppercase"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          {project.year}
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div
            className="text-accent text-xs tracking-[0.2em] uppercase mb-2"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            {project.category}
          </div>
          <h3
            className="display-text text-white group-hover:text-accent transition-colors duration-200"
            style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
          >
            {project.title}
          </h3>
          <p className="text-white/50 text-sm mt-2 leading-relaxed max-w-sm">
            {project.description}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-white/40 text-xs border border-white/10 px-3 py-1 tracking-wider"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="bg-dark">
      {/* Section header */}
      <div className="section-header">
        <span
          className="text-white/40 text-xs tracking-widest"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          •03
        </span>
        <span
          className="text-accent text-xs tracking-[0.3em] uppercase text-center"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          SELECTED WORK
        </span>
        <span
          className="text-white/40 text-xs tracking-widest text-right"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          © 2026
        </span>
      </div>

      {/* Large section title */}
      <div ref={titleRef} className="px-8 md:px-16 pt-16 pb-12 overflow-hidden">
        <div
          className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        >
          <h2
            className="display-text text-white"
            style={{ fontSize: 'clamp(48px, 10vw, 130px)' }}
          >
            SELECTED
          </h2>
          <h2
            className="display-text"
            style={{
              fontSize: 'clamp(48px, 10vw, 130px)',
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
              color: 'transparent',
            }}
          >
            WORKS
          </h2>
        </div>
      </div>

      {/* Projects grid */}
      <div className="px-8 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {projects.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
