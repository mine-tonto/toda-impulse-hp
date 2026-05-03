"use client";

import { RefObject, useEffect, useState } from "react";

export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  options?: IntersectionObserverInit & { once?: boolean }
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.once !== false) observer.disconnect();
        } else if (options?.once === false) {
          setInView(false);
        }
      },
      {
        root: options?.root ?? null,
        rootMargin: options?.rootMargin ?? "0px",
        threshold: options?.threshold ?? 0.2,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [
    ref,
    options?.once,
    options?.root,
    options?.rootMargin,
    options?.threshold,
  ]);

  return inView;
}

