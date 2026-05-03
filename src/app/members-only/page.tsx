import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "会員専用",
};

const cards = [
  "例会・事業の予定",
  "出欠確認フォーム",
  "資料・議事録の共有",
  "会員限定マッチング",
];

export default function MembersOnlyPage() {
  return (
    <div className="bg-black-base pt-16">
      <section className="section-shell py-16">
        <p className="text-sm font-black uppercase text-blue-soft">
          Members Only
        </p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight text-white sm:text-7xl">
          入部後のつながりを、もっと近く。
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-white/75">
          会員専用ページでは、活動予定や資料共有、会員同士の相談導線を集約できます。
        </p>
      </section>

      <section className="bg-black-soft py-20">
        <div className="section-shell grid gap-5 md:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card}
              className="rounded-md border border-white/12 bg-white/5 p-6"
            >
              <div className="display-font text-5xl leading-none text-blue-soft/30">
                LOCK
              </div>
              <h2 className="mt-5 text-lg font-black text-white">{card}</h2>
              <div className="mt-5 h-2 rounded bg-white/10" />
              <div className="mt-3 h-2 w-2/3 rounded bg-white/10" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-accent py-20">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
            まずは表の活動を見て、雰囲気を知る。
          </h2>
          <Link
            href="/news"
            className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-white px-5 text-sm font-black text-black-base"
          >
            活動レポートへ
          </Link>
        </div>
      </section>
    </div>
  );
}
