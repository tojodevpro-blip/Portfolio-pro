"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  value?: number;
  display: string;
  prefix?: string;
  suffix?: string;
};

/**
 * Compteur progressif déclenché à l'entrée dans le viewport.
 * Le HTML initial contient déjà la valeur finale pour le SEO et sans JavaScript.
 */
export function AnimatedNumber({
  value,
  display,
  prefix = "",
  suffix = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState<number | null>(value ?? null);

  useEffect(() => {
    if (value === undefined) return;
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const duration = 900;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  if (value === undefined) {
    return <span className="font-mono">{display}</span>;
  }

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {prefix}
        {current ?? value}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
    </span>
  );
}
