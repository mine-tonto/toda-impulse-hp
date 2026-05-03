import type { Metadata } from "next";
import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "商工会青年部とは",
};

const reikai = "/media/reikai-2025-09-10";
const shokosai = "/media/shokosai-2025-10-25";

const differences = [
  ["目的", "商談・紹介獲得", "交流・学び・地域貢献"],
  ["雰囲気", "営業色が強い", "自然で温かい"],
  ["ノルマ", "ある場合がある", "基本的になし"],
  ["関係性", "短期成果重視", "長期的な信頼重視"],
  ["仕事の生まれ方", "直接営業", "信頼・紹介・協業"],
];

const faq = [
  {
    question: "商工会は堅い場所ですか？",
    answer:
      "制度や事業支援の土台はありますが、青年部の活動は顔を合わせる交流や地域活動が中心です。はじめての方も見学から参加できます。",
  },
  {
    question: "営業目的で参加してもよいですか？",
    answer:
      "営業そのものを禁止する場ではありませんが、短期の売り込みではなく、信頼関係を育てることを大切にしています。",
  },
  {
    question: "仕事につながりますか？",
    answer:
      "仕事を保証する場ではありません。ただし、信頼関係や地域での認知が広がることで、相談・紹介・協業につながる可能性があります。",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black-base pt-16">
      <section className="section-shell grid min-h-[72svh] gap-10 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-blue-soft">About</p>
          <h1 className="mt-3 text-5xl font-black leading-tight text-white sm:text-7xl">
            商工会青年部とは
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-9 text-white/75">
            TODA IMPULSEは、戸田で事業を営む若手経営者・事業後継者が集まり、学び、交流し、地域に貢献しながら、事業の可能性を広げていく場所です。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/members">部員を見る</CTAButton>
            <CTAButton href="/join#contact" variant="ghost">
              見学する
            </CTAButton>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 h-64 overflow-hidden rounded-md sm:h-80">
            <Image
              src={`${reikai}/photo-03.jpg`}
              alt="例会で学び合う戸田市商工会青年部"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-md">
            <Image
              src={`${shokosai}/photo-09.jpg`}
              alt="地域イベントでの交流"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-md">
            <Image
              src={`${shokosai}/photo-18.jpg`}
              alt="商工祭のブース"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-black-base">
        <div className="section-shell">
          <p className="text-sm font-black uppercase text-blue-accent">
            Difference
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            営業交流会との違い
          </h2>
          <div className="mt-10 overflow-hidden rounded-md border border-black/10">
            <div className="grid grid-cols-[0.8fr_1fr_1fr] bg-black-base text-sm font-black text-white">
              <div className="p-4">項目</div>
              <div className="p-4">一般的な営業交流会</div>
              <div className="bg-blue-accent p-4">商工会青年部</div>
            </div>
            {differences.map(([label, ordinary, impulse]) => (
              <div
                key={label}
                className="grid grid-cols-[0.8fr_1fr_1fr] border-t border-black/10 text-sm"
              >
                <div className="p-4 font-black">{label}</div>
                <div className="p-4 text-black/60">{ordinary}</div>
                <div className="p-4 font-bold text-blue-accent">{impulse}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-base py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-blue-soft">FAQ</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
              不安をほどく。
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70">
              入部前に知りたいことを、先に見える形にしました。
            </p>
          </div>
          <FAQAccordion items={faq} />
        </div>
      </section>
    </div>
  );
}
