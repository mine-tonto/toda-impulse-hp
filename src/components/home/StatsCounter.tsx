"use client";

import { useRef } from "react";
import { useCountUp } from "@/lib/useCountUp";
import { useInView } from "@/lib/useInView";

type Stat = {
  label: string;
  value: number;
  suffix: string;
  note: string;
  highlight?: boolean;
};

function CounterCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { threshold: 0.4, once: true });
  const value = useCountUp({ to: stat.value, start: inView, durationMs: 1000 });

  return (
    <div
      ref={ref}
      className={`rounded-md border p-6 ${
        stat.highlight
          ? "shine border-yellow-accent bg-yellow-accent text-black-base"
          : "border-white/12 bg-white/[0.035] text-white"
      }`}
    >
      <div className="text-xs font-black uppercase opacity-70">{stat.label}</div>
      <div className="display-font mt-3 flex items-baseline gap-2 text-6xl leading-none">
        <span>{value}</span>
        <span className="text-lg font-black">{stat.suffix}</span>
      </div>
      <p className="mt-4 text-sm leading-7 opacity-75">{stat.note}</p>
    </div>
  );
}

export function StatsCounter({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <CounterCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
