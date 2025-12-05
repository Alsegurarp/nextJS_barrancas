'use client';

// ScrollReveal.tsx
import React, { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Selector = string | string[];

export interface ScrollRevealProps {
  children?: React.ReactNode;
  /** Tailwind classes for the wrapper */
  className?: string;
  /** CSS selector(s) for elements to animate. Default: "[data-reveal]" */
  targets?: Selector;
  /** 'self' to use wrapper as trigger, or a selector inside it. Default: 'self' */
  trigger?: 'self' | string;
  /** From vars for gsap.fromTo */
  from?: gsap.TweenVars;
  /** To vars for gsap.fromTo (excluding scrollTrigger) */
  to?: gsap.TweenVars;
  /** Stagger between targets */
  stagger?: number;
  /** ScrollTrigger options */
  start?: string;        // e.g. 'top 80%'
  end?: string;          // e.g. 'bottom 40%'
  toggleActions?: string; // e.g. 'play none none reverse'
  /** If true, plays once and doesn't reverse on scroll up */
  once?: boolean;
}

/**
 * Reusable wrapper that animates its marked children when they scroll into view.
 * Mark children with `data-reveal` (or set `targets` prop).
 */
const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  (
    {
      children,
      className = '',
      targets = '[data-reveal]',
      trigger = 'self',
      from = { opacity: 0, y: 20 },
      to = { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      stagger = 0.15,
      start = 'top 80%',
      end = 'bottom 40%',
      toggleActions = 'play none none reverse',
      once = false,
    },
    forwardedRef
  ) => {
    const localRef = useRef<HTMLDivElement | null>(null);

    // expose the DOM node if consumer passes a ref
    useEffect(() => {
      if (!forwardedRef) return;
      if (typeof forwardedRef === 'function') {
        forwardedRef(localRef.current);
      } else {
        (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = localRef.current;
      }
    }, [forwardedRef]);

    useEffect(() => {
      const root = localRef.current;
      if (!root || typeof window === 'undefined') return;

      const ctx = gsap.context(() => {
        // Resolve targets
        const selectors = Array.isArray(targets) ? targets : [targets];
        const elements: HTMLElement[] = selectors.flatMap((sel) =>
          Array.from(root.querySelectorAll<HTMLElement>(sel))
        );

        if (elements.length === 0) return;

        // Resolve trigger element
        const triggerEl = trigger === 'self' ? root : (root.querySelector(trigger) as Element | null) || root;

        gsap.fromTo(
          elements,
          from,
          {
            ...to,
            stagger,
            scrollTrigger: {
              trigger: triggerEl,
              start,
              end,
              toggleActions: once ? 'play none none none' : toggleActions,
            },
          }
        );
      }, { scope: root });

      return () => ctx.revert();
    }, [targets, trigger, from, to, stagger, start, end, toggleActions, once]);

    return (
      <div
        ref={localRef}
        className={`flex flex-col items-center ${className}`}
      >
        {children}
      </div>
    );
  }
);

ScrollReveal.displayName = 'ScrollReveal';
export default ScrollReveal;


