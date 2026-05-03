"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-white/12 rounded-md border border-white/12">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
            >
              <span className="font-black text-white">{item.question}</span>
              <span className="display-font text-2xl text-blue-soft">
                {active ? "-" : "+"}
              </span>
            </button>
            {active ? (
              <div className="px-5 pb-5 text-sm leading-7 text-white/70">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
