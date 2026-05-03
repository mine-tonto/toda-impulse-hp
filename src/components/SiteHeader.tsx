"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/about", label: "青年部とは" },
  { href: "/business", label: "仕事が生まれる仕組み" },
  { href: "/join", label: "入部案内" },
  { href: "/members", label: "部員紹介" },
  { href: "/news", label: "お知らせ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  if (pathname.startsWith("/members/")) return null;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black-base/82 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3">
          <span className="display-font text-2xl leading-none text-white">
            TODA
          </span>
          <span className="h-6 w-px bg-blue-accent" />
          <span className="text-xs font-bold uppercase leading-tight text-white/70">
            IMPULSE
            <br />
            戸田市商工会青年部
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-bold text-white/75 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring border-b border-transparent py-1 transition hover:border-blue-soft hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/join#contact"
          className="focus-ring hidden rounded-md bg-blue-accent px-4 py-2 text-xs font-black uppercase text-white transition hover:bg-blue-soft hover:text-black-base md:inline-flex"
        >
          新入部員 募集中
        </Link>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-white/16 bg-white/5 md:hidden"
          aria-label="メニューを開く"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-50 bg-black/70"
            aria-label="メニューを閉じる"
            onClick={() => setOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-full w-[84vw] max-w-sm border-l border-white/12 bg-black-base p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="display-font text-2xl">MENU</div>
              <button
                type="button"
                className="focus-ring h-10 w-10 rounded-md border border-white/14 text-sm font-black"
                aria-label="メニューを閉じる"
                onClick={() => setOpen(false)}
              >
                X
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-md border border-white/12 px-4 py-4 text-sm font-black text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/join#contact"
                className="focus-ring mt-3 rounded-md bg-blue-accent px-4 py-4 text-center text-sm font-black text-white"
                onClick={() => setOpen(false)}
              >
                新入部員 募集中
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
