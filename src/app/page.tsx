import Image from "next/image";
import Link from "next/link";
import { ActivityCard } from "@/components/home/ActivityCard";
import { BusinessCaseCard } from "@/components/home/BusinessCaseCard";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ValueFlowDiagram } from "@/components/home/ValueFlowDiagram";
import { NewsCard } from "@/components/news/NewsCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";

const shokosai = "/media/shokosai-2025-10-25";
const reikai = "/media/reikai-2025-09-10";

const stats = [
  {
    label: "Anniversary",
    value: 60,
    suffix: "th",
    note: "地域で積み重ねてきた信頼の土台。",
  },
  {
    label: "Members",
    value: 100,
    suffix: "+",
    note: "戸田で事業を営む仲間とつながる。",
  },
  {
    label: "Result",
    value: 1,
    suffix: "位",
    note: "新規会員獲得 全国1位の実績。",
    highlight: true,
  },
];

const businessCases = [
  {
    title: "開業直後のパン屋",
    category: "Food",
    image: `${shokosai}/photo-01.jpg`,
    body: "商工祭出店や会員の口コミを通じて認知を広げ、常連客の獲得につながる。",
  },
  {
    title: "地元に根ざす士業",
    category: "Professional",
    image: `${reikai}/photo-03.jpg`,
    body: "経営者との信頼関係から、顧問契約や相談案件の紹介につながる。",
  },
  {
    title: "Web・デザイン制作",
    category: "Creative",
    image: `${shokosai}/photo-18.jpg`,
    body: "飲食店や小売店とつながり、ロゴ・チラシ・Web制作案件が生まれる。",
  },
];

const news = [
  {
    date: "2025.10.25",
    category: "地域活動",
    title: "商工祭1日目の写真を追加しました",
    body: "雨の中でも地域の親子が集まり、青年部のブースにも多くの交流が生まれました。",
    image: `${shokosai}/photo-09.jpg`,
  },
  {
    date: "2025.09.10",
    category: "例会",
    title: "9月例会レポート",
    body: "会員同士が事業の現場感を共有し、相談できる関係を深めました。",
    image: `${reikai}/photo-01.jpg`,
  },
  {
    date: "随時",
    category: "入部案内",
    title: "見学から参加できます",
    body: "営業ノルマではなく、自然な交流と地域活動を通じて信頼を育てる場です。",
    image: `${shokosai}/photo-12.jpg`,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-black-base">
      <section className="relative min-h-[100svh] pt-16">
        <div className="absolute inset-0">
          <Image
            src={`${shokosai}/photo-18.jpg`}
            alt="商工祭で地域と交流する戸田市商工会青年部"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-46"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="section-shell relative flex min-h-[calc(100svh-4rem)] items-center py-12">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="display-font outline-title pointer-events-none absolute left-4 top-20 text-[28vw] leading-none opacity-55 md:text-[16rem]">
                60th
              </div>
              <p className="relative text-sm font-black uppercase text-blue-soft">
                TODA IMPULSE
              </p>
              <h1 className="relative mt-4 max-w-4xl text-5xl font-black leading-[1.04] text-white sm:text-7xl lg:text-8xl">
                一人じゃない
                <br />
                経営へ。
              </h1>
              <p className="relative mt-6 max-w-2xl text-lg font-bold leading-9 text-white/80">
                戸田で事業をする人が、人としてつながり、信頼と仕事を育てていく場所。
              </p>
              <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/join#contact">まずは見学してみる</CTAButton>
                <CTAButton href="/members" variant="secondary">
                  部員を見る
                </CTAButton>
                <CTAButton href="/business" variant="ghost">
                  仕組みを見る
                </CTAButton>
              </div>
            </div>

            <div className="rounded-md border border-blue-accent bg-blue-accent/14 p-5 text-white backdrop-blur">
              <div className="text-xs font-black uppercase text-blue-soft">
                Award
              </div>
              <div className="display-font mt-2 text-6xl leading-none text-yellow-accent">
                No.1
              </div>
              <p className="mt-3 text-sm font-bold leading-7 text-white/75">
                新規会員獲得 全国1位。はじめて参加する人を迎える力も、青年部の強みです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/12 bg-blue-accent py-3 text-black-base">
        <div className="marquee-track display-font flex w-max gap-8 text-3xl leading-none">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index}>
              MEET / TRUST / WORK / COMMUNITY / TODA IMPULSE /
            </span>
          ))}
        </div>
      </div>

      <section className="bg-black-base py-20">
        <div className="section-shell">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-blue-soft">
                Concept
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
                この街で、ちゃんとつながる。
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                商工会青年部は、地域で事業を営む人々が「人としてつながる」ことで、信頼・機会・仕事を育てていくコミュニティ型のビジネス基盤です。
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <ValueFlowDiagram />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 text-black-base">
        <div className="section-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase text-blue-accent">
                Business Cases
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
                出会いが、仕事になる。
              </h2>
            </div>
            <Link
              href="/business"
              className="focus-ring text-sm font-black text-blue-accent"
            >
              FLOW PAGE →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {businessCases.map((item) => (
              <Reveal key={item.title}>
                <BusinessCaseCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-base py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-blue-soft">
              Results
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
              安心材料になる実績。
            </h2>
          </div>
          <div className="mt-10">
            <StatsCounter stats={stats} />
          </div>
        </div>
      </section>

      <section className="bg-black-soft py-20">
        <div className="section-shell">
          <div className="grid gap-5 md:grid-cols-3">
            <ActivityCard
              number="01"
              title="学ぶ"
              body="例会・研修で、経営や地域活動に必要な視点を実践的に学びます。"
            />
            <ActivityCard
              number="02"
              title="つながる"
              body="業種を越えて顔を合わせ、相談や協業が生まれる関係を育てます。"
              tone="white"
            />
            <ActivityCard
              number="03"
              title="動く"
              body="商工祭などの地域活動に参加し、街の中で事業者として存在を伝えます。"
              tone="yellow"
            />
          </div>
        </div>
      </section>

      <section className="bg-black-base py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase text-blue-soft">
                News
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
                活動の実態が見える。
              </h2>
            </div>
            <Link href="/news" className="focus-ring text-sm font-black text-blue-soft">
              ALL NEWS →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-accent py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-white/80">
              Visit First
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
              まずは見学から。
            </h2>
            <p className="mt-6 max-w-2xl text-base font-bold leading-8 text-white/82">
              初参加でも大丈夫です。定例会やイベントの見学から、雰囲気を確かめて参加できます。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/join#contact" variant="secondary">
                見学・問い合わせ
              </CTAButton>
              <CTAButton href="/members" variant="ghost">
                人柄を見る
              </CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["09", "18", "31", "43"].map((id) => (
              <div key={id} className="relative h-44 overflow-hidden rounded-md sm:h-56">
                <Image
                  src={`${shokosai}/photo-${id}.jpg`}
                  alt="商工祭での青年部活動"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
