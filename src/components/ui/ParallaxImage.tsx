import React from 'react';
import { useParallax } from '../../hooks/useParallax';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ src, alt, className = '', speed = 0.5 }: ParallaxImageProps) {
  const scrollOffset = useParallax();
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transform: `translateY(${scrollOffset * speed}px)`,
          marginTop: `-${scrollOffset * speed}px`
        }}
      />
    </div>
  );
}