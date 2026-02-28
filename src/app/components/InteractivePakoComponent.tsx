import React, { useState, useRef } from 'react';
import baseSvgUrl from '@assets/svg/pakosvg_base.svg';

export default function InteractivePakoComponent() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringAnimate, setIsHoveringAnimate] = useState(false);
  const animateSvgRef = useRef<SVGSVGElement>(null);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!animateSvgRef.current) return;
    const rect = animateSvgRef.current.getBoundingClientRect();

    // Scale pixel coordinates to viewBox coordinates (428x336)
    const x = ((e.clientX - rect.left) / rect.width) * 428;
    const y = ((e.clientY - rect.top) / rect.height) * 336;

    setMousePos({ x, y });
  };

  return (
    <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[350px] aspect-square mx-auto flex items-center justify-center group cursor-pointer">
      <img
        src={baseSvgUrl}
        alt="Base layer"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div
        className="absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ top: '16.4%', bottom: '16.4%', left: '7.2%', right: '7.2%' }}
      >
        <svg
          ref={animateSvgRef}
          width="100%"
          height="100%"
          viewBox="0 0 428 336"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => setIsHoveringAnimate(true)}
          onMouseLeave={() => setIsHoveringAnimate(false)}
          onMouseMove={handleMouseMove}
          className="relative w-full h-full"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <radialGradient
              id="cursor-glow"
              cx={isHoveringAnimate ? mousePos.x : '50%'}
              cy={isHoveringAnimate ? mousePos.y : '50%'}
              r="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                stopColor={isHoveringAnimate ? 'var(--color-secondary)' : '#868686'}
                stopOpacity="1"
              />
              <stop offset="100%" stopColor="#868686" stopOpacity="1" />
            </radialGradient>
          </defs>

          <path
            d="M262.056 122.066L259.409 124.043L262.639 124.735L310.075 134.899L16.8535 323.383L207.503 158.207L209.672 156.328L206.892 155.619L150.439 141.244L413.448 8.99512L262.056 122.066Z"
            stroke="url(#cursor-glow)"
            strokeWidth="3"
            style={{
              filter: isHoveringAnimate ? 'drop-shadow(0 0 8px rgba(175, 228, 3, 0.6))' : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        </svg>
      </div>
    </div>
  );
}
