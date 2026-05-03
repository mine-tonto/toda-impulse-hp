import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { activityReports } from "@/data/activityReports";

export const metadata: Metadata = {
  title: "活動報告",
  description:
    "戸田市商工会青年部の例会、地域イベント、準備日の様子をカジュアルなブログ形式で紹介します。",
};

export default function ActivitiesPage() {
  const [featured, ...reports] = activityReports;

  return (
    <div className="bg-black-base pt-16">
      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.85fr_1fr] lg:items-end">
        <div>
          <p className="inline-flex rotate-[-1deg] bg-yellow-accent px-3 py-1 text-sm font-black text-black-base">
            活動報告
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight text-white sm:text-7xl">
            きれいにまとめすぎない、現場の記録。
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-white/75">
            例会、商工祭、準備日、ちょっとした打ち合わせ。メンバーが更新しているような距離感で、活動の空気を残していきます。
          </p>
        </div>
        <div className="photo-print tape h-72 rotate-[2deg] sm:h-96">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="paper-bg py-20 text-black-base">
        <div className="section-shell">
          <article className="grid gap-10 lg:grid-cols-[0.92fr_1fr] lg:items-start">
            <div className="photo-print h-[28rem] rotate-[-1deg]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm font-black">
                <span className="bg-blue-accent px-3 py-1 text-white">
                  {featured.category}
                </span>
                <span>{featured.date}</span>
                <span className="text-black/48">更新: {featured.author}</span>
              </div>
              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
                {featured.title}
              </h2>
              <p className="mt-5 text-lg font-bold leading-9 text-black/72">
                {featured.excerpt}
              </p>
              <div className="mt-7 space-y-5 text-base font-medium leading-8 text-black/74">
                {featured.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="hand-note mt-8 rotate-[1deg] p-4 text-sm font-bold leading-7">
                <span className="text-blue-accent">メモ：</span>
                {featured.memo}
              </div>
            </div>
          </article>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {featured.gallery.map((image, index) => (
              <div
                key={image}
                className={`photo-print h-56 ${
                  index === 1 ? "rotate-[2deg] sm:mt-8" : "rotate-[-1deg]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${featured.title}の写真 ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-base py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-blue-soft">
              More Reports
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
              最近の活動を、ブログっぽく。
            </h2>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {reports.map((report, index) => (
              <article
                key={report.slug}
                className={`grid gap-5 rounded-md border border-white/12 bg-white/[0.04] p-4 text-white sm:grid-cols-[220px_1fr] ${
                  index % 2 === 0 ? "rotate-[-0.5deg]" : "rotate-[0.5deg]"
                }`}
              >
                <div className="photo-print h-64 sm:h-full">
                  <Image
                    src={report.image}
                    alt={report.title}
                    fill
                    sizes="(min-width: 1024px) 220px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-black text-blue-soft">
                    <span>{report.date}</span>
                    <span className="bg-blue-accent px-2 py-1 text-white">
                      {report.category}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black leading-tight">
                    {report.title}
                  </h3>
                  <p className="mt-4 text-sm font-bold leading-7 text-white/70">
                    {report.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-bold text-white/48">
                    更新: {report.author}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/join#contact"
              className="focus-ring inline-flex rounded-md bg-blue-accent px-5 py-3 text-sm font-black text-white transition hover:bg-blue-soft hover:text-black-base"
            >
              見学して雰囲気を見てみる →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
