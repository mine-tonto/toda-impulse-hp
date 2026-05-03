import type { Metadata } from "next";
import { BusinessCaseCard } from "@/components/home/BusinessCaseCard";
import { ValueFlowDiagram } from "@/components/home/ValueFlowDiagram";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "仕事が生まれる仕組み",
};

const shokosai = "/media/shokosai-2025-10-25";
const reikai = "/media/reikai-2025-09-10";

const cases = [
  {
    title: "地域イベントで認知が広がる",
    category: "Event",
    image: `${shokosai}/photo-18.jpg`,
    body: "商工祭や地域事業に参加することで、まだ知られていない事業者にも接点が生まれます。",
  },
  {
    title: "例会で相談相手が見つかる",
    category: "Meeting",
    image: `${reikai}/photo-03.jpg`,
    body: "事業の悩みを話せる仲間ができ、紹介や協業の前に信頼関係をつくれます。",
  },
  {
    title: "顔が見えるから紹介しやすい",
    category: "Trust",
    image: `${shokosai}/photo-09.jpg`,
    body: "人柄や仕事の姿勢を知っているから、地域内で安心して紹介できます。",
  },
];

export default function BusinessPage() {
  return (
    <div className="bg-black-base pt-16">
      <section className="section-shell py-16">
        <p className="text-sm font-black uppercase text-blue-soft">Flow</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight text-white sm:text-7xl">
          出会いが、信頼になり、仕事になる。
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-white/75">
          売り込みの場ではなく、継続的に顔を合わせることで、相談・紹介・協業が自然に生まれる流れをつくります。
        </p>
        <div className="mt-10">
          <ValueFlowDiagram />
        </div>
      </section>

      <section className="bg-white py-20 text-black-base">
        <div className="section-shell">
          <p className="text-sm font-black uppercase text-blue-accent">
            Concrete Cases
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            抽象価値を、具体例で見る。
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {cases.map((item) => (
              <BusinessCaseCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-accent py-20">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase text-white/80">
              Matching
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
              会員紹介から、相談できる相手を探す。
            </h2>
          </div>
          <CTAButton href="/members" variant="secondary">
            部員紹介へ
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
