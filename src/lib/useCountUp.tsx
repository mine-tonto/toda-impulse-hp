"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

type Options = {
  from?: number;
  to: number;
  durationMs?: number;
  start?: boolean;
};

export function useCountUp({ from = 0, to, durationMs = 900, start }: Options) {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(from);
  const rafRef = useRef<number | null>(null);
  const startAtRef = useRef<number | null>(null);

  const finalValue = useMemo(() => (Number.isFinite(to) ? to : from), [to, from]);

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      rafRef.current = requestAnimationFrame(() => {
        setValue(finalValue);
      });
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      };
    }

    const tick = (t: number) => {
      if (startAtRef.current == null) startAtRef.current = t;
      const elapsed = t - startAtRef.current;
      const p = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const next = from + (finalValue - from) * eased;
      setValue(next);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startAtRef.current = null;
    };
  }, [start, reduced, durationMs, from, finalValue]);

  return Math.round(value);
}

