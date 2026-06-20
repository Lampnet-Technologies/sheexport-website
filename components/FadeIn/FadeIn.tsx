'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './FadeIn.module.css';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
}

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if window and IntersectionObserver are supported
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.05, // Trigger as soon as 5% of the section is visible
        rootMargin: '0px 0px -40px 0px', // Trigger slightly before entering viewport fully
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${isIntersecting ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
