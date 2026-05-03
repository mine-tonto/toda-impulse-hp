import Image from "next/image";
import Link from "next/link";
import membersData from "@/data/members.json";
import type { Member } from "@/app/members/types";
import { ActivityCard } from "@/components/home/ActivityCard";
import { BusinessCaseCard } from "@/components/home/BusinessCaseCard";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ValueFlowDiagram } from "@/components/home/ValueFlowDiagram";
import { NewsCard } from "@/components/news/NewsCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";

const shokosai = "/media/shokosai-2025-10-25";
const reikai = "/media/reikai-2025-09-10";
const members = (membersData as Member[]).slice(0, 4);

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

const notices = [
  "2025.10.25 商工祭1日目の写真を追加しました",
  "2025.09.10 9月例会レポートを公開しました",
];

const featureSections = [
  {
    eyebrow: "青年部とは",
    title: "互いに学び合い、地域と一緒に成長する団体",
    body: "経営の学び、会員同士の交流、地域イベントへの参加を通じて、戸田で事業を続けるための信頼関係を育てています。",
    href: "/about",
    linkLabel: "青年部についてもっと知る",
    image: `${reikai}/photo-03.jpg`,
  },
  {
    eyebrow: "地域活動",
    title: "商工祭など、街の中で顔が見える活動",
    body: "地域の方と直接ふれ合う場に参加し、事業者としてだけでなく、街の仲間として存在を伝えています。",
    href: "/news",
    linkLabel: "活動の様子を見る",
    image: `${shokosai}/photo-18.jpg`,
  },
  {
    eyebrow: "入部案内",
    title: "見学だけでも大歓迎です",
    body: "異業種の若手経営者や後継者との出会いが、相談・紹介・協業のきっかけになります。まずは雰囲気を見に来てください。",
    href: "/join",
    linkLabel: "入部案内を見る",
    image: `${shokosai}/photo-12.jpg`,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-black-base">
      <section className="relative min-h-[100svh] pt-16">
        <div className="absolute inset-0">
          <Image
            src={`${shokosai}/photo-09.jpg`}
            alt="商工祭で地域と交流する戸田市商工会青年部"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/74" />
        </div>

        <div className="section-shell relative flex min-h-[calc(100svh-4rem)] items-center py-14">
          <div className="mx-auto max-w-5xl text-center">
            <div className="display-font outline-title pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 text-[26vw] leading-none opacity-40 md:text-[14rem]">
              TODA
            </div>
            <p className="relative text-sm font-black uppercase tracking-[0.32em] text-blue-soft">
              TODA IMPULSE
            </p>
            <h1 className="relative mt-5 text-5xl font-black leading-[1.12] text-white sm:text-7xl lg:text-8xl">
              つながる、広がる、
              <br />
              成長する。
            </h1>
            <p className="relative mx-auto mt-7 max-w-3xl text-lg font-bold leading-9 text-white/80">
              戸田で事業を営む若手が、仲間と出会い、地域と関わりながら、仕事と自分自身の可能性を広げていく場所です。
            </p>
            <div className="relative mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <CTAButton href="/join#contact">新入部員 募集中</CTAButton>
              <CTAButton href="/about" variant="secondary">
                青年部とは
              </CTAButton>
              <CTAButton href="/members" variant="ghost">
                部員紹介
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/12 bg-black-soft">
        <div className="section-shell grid gap-0 md:grid-cols-[180px_1fr]">
          <div className="bg-blue-accent px-5 py-4 text-sm font-black uppercase text-white">
            News
          </div>
          <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
            {notices.map((notice) => (
              <Link
                key={notice}
                href="/news"
                className="focus-ring px-5 py-4 text-sm font-bold text-white/78 transition hover:bg-white/5 hover:text-white"
              >
                {notice}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-base py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-black uppercase text-blue-soft">
                Vision
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
                戸田市の未来を、共に創ろう。
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                地域の仲間とつながり、新しいビジネスの可能性を広げ、ともに成長していく。青年部は、一歩踏み出す人を迎え入れる場所です。
              </p>
              <div className="mt-8">
                <CTAButton href="/join#contact">まずは話を聞いてみる</CTAButton>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative grid grid-cols-2 gap-3">
              <div className="relative h-72 overflow-hidden rounded-md">
                <Image
                  src={`${shokosai}/photo-18.jpg`}
                  alt="商工祭での青年部ブース"
                  fill
                  sizes="(min-width: 1024px) 24vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-12 h-72 overflow-hidden rounded-md">
                <Image
                  src={`${reikai}/photo-03.jpg`}
                  alt="例会で学び合う青年部"
                  fill
                  sizes="(min-width: 1024px) 24vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 rounded-md border border-blue-accent bg-black-base/88 p-5 text-center shadow-2xl backdrop-blur">
                <div className="display-font text-5xl leading-none text-yellow-accent">
                  60th
                </div>
                <div className="mt-2 text-xs font-black text-white/72">
                  地域で積み重ねてきた信頼
                </div>
              </div>
            </div>
          </Reveal>
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

      <section className="bg-black-soft py-20">
        <div className="section-shell">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase text-blue-soft">
                Business × Friends × Community
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
                ビジネス × 仲間 × 地域貢献
              </h2>
              <p className="mt-5 text-base font-bold leading-8 text-white/68">
                最高の舞台は、身近な地域の中にあります。まずは顔を合わせるところから始まります。
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <ValueFlowDiagram />
          </Reveal>
        </div>
      </section>

      <section className="bg-black-base py-20">
        <div className="section-shell space-y-16">
          {featureSections.map((item, index) => (
            <Reveal key={item.title}>
              <article
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative h-80 overflow-hidden rounded-md sm:h-[28rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-5 top-5 rounded-md bg-blue-accent px-4 py-2 text-sm font-black text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="lg:px-8">
                  <p className="text-sm font-black uppercase text-blue-soft">
                    {item.eyebrow}
                  </p>
                  <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
                    {item.title}
                  </h2>
                  <p className="mt-6 text-base leading-8 text-white/70">
                    {item.body}
                  </p>
                  <Link
                    href={item.href}
                    className="focus-ring mt-8 inline-flex rounded-md border border-blue-accent px-5 py-3 text-sm font-black text-blue-soft transition hover:bg-blue-accent hover:text-white"
                  >
                    {item.linkLabel} →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
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

      <section className="bg-white py-20 text-black-base">
        <div className="section-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase text-blue-accent">
                Members
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
                部員の紹介
              </h2>
              <p className="mt-5 max-w-2xl text-base font-bold leading-8 text-black/64">
                入部のきっかけや、仕事への想いを掲載しています。
              </p>
            </div>
            <Link
              href="/members"
              className="focus-ring text-sm font-black text-blue-accent"
            >
              その他の部員を見る →
            </Link>
          </div>
          <div className="mt-10 flex gap-5 overflow-x-auto pb-4">
            {members.map((member) => (
              <Link
                key={member.id}
                href={`/members/${member.id}`}
                className="focus-ring blue-edge min-w-[280px] overflow-hidden rounded-md border border-black/10 bg-white shadow-lg"
              >
                <div className="relative h-72">
                  <Image
                    src={member.image_path}
                    alt={`${member.name}さんの写真`}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-black leading-7 text-blue-accent">
                    {member.member_comment}
                  </p>
                  <h3 className="mt-4 text-xl font-black">{member.name}</h3>
                  <p className="mt-1 text-xs font-bold text-black/55">
                    {member.company}
                  </p>
                </div>
              </Link>
            ))}
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
