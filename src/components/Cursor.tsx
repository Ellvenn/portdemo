import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('button, a, [data-cursor="hover"], .work-card, .hover-underline')
      );
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.18;
      outlineY += (mouseY - outlineY) * 0.18;
      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlineX}px`;
        outlineRef.current.style.top = `${outlineY}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ transform: `translate(-50%, -50%) scale(${hovering ? 0 : 1})` }}
      />
      <div
        ref={outlineRef}
        className="cursor-outline"
        style={{
          width: hovering ? '56px' : '32px',
          height: hovering ? '56px' : '32px',
          borderColor: hovering ? 'rgba(255, 61, 41, 0.8)' : 'rgba(255, 61, 41, 0.5)',
        }}
      />
    </>
  );
}
