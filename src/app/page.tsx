import Image from "next/image";
import Link from "next/link";
import membersData from "@/data/members.json";
import { activityReports } from "@/data/activityReports";
import type { Member } from "@/app/members/types";
import { CTAButton } from "@/components/ui/CTAButton";
import { Reveal } from "@/components/ui/Reveal";

const shokosai = "/media/shokosai-2025-10-25";
const reikai = "/media/reikai-2025-09-10";
const members = membersData as Member[];

const photoWall = [
  {
    src: `${shokosai}/photo-18.jpg`,
    alt: "商工祭で地域の方と交流する青年部",
    className: "md:col-span-2 md:row-span-2 h-72 md:h-[31rem] rotate-[-1.5deg]",
    label: "商工祭のブース",
  },
  {
    src: `${reikai}/photo-03.jpg`,
    alt: "例会で話し合う青年部メンバー",
    className: "h-64 md:mt-8 rotate-[2deg]",
    label: "9月例会",
  },
  {
    src: `${shokosai}/photo-09.jpg`,
    alt: "地域イベントの来場者と話す様子",
    className: "h-56 md:-mt-3 rotate-[-2deg]",
    label: "雨でもにぎやか",
  },
  {
    src: `${shokosai}/photo-31.jpg`,
    alt: "イベント会場で準備する様子",
    className: "h-64 md:col-span-2 rotate-[1deg]",
    label: "準備も本番",
  },
];

const activityNotes = [
  "例会で近況を話す",
  "商工祭の準備をする",
  "困りごとを相談する",
  "地域の人に声をかける",
];

export default function Home() {
  const latestReport = activityReports[0];
  const previewMembers = members.slice(0, 4);

  return (
    <div className="overflow-hidden bg-black-base">
      <section className="relative min-h-[100svh] pt-16">
        <div className="absolute inset-0">
          <Image
            src={`${shokosai}/photo-18.jpg`}
            alt="商工祭で活動する戸田市商工会青年部"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/62" />
        </div>

        <div className="section-shell relative grid min-h-[calc(100svh-4rem)] gap-10 py-12 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="max-w-4xl">
            <p className="inline-flex rotate-[-1deg] bg-yellow-accent px-3 py-1 text-sm font-black text-black-base">
              戸田で、ちゃんと顔を合わせる。
            </p>
            <h1 className="mt-7 text-5xl font-black leading-[1.08] text-white sm:text-7xl lg:text-8xl">
              この街で、
              <br />
              <span className="rough-underline">動いている</span>
              <br />
              若手経営者たち。
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-bold leading-9 text-white/84">
              戸田で商売をする人たちが、例会で話し、イベントで汗をかき、少しずつ信頼を重ねていく。TODA IMPULSEは、そんな現場の空気がある青年部です。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/activities">最新の活動を見る</CTAButton>
              <CTAButton href="/members" variant="secondary">
                メンバーを見る
              </CTAButton>
              <CTAButton href="/join#contact" variant="ghost">
                見学してみる
              </CTAButton>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <div className="photo-print tape absolute left-0 top-4 h-64 w-[78%] rotate-[3deg] sm:w-72 lg:w-80">
              <Image
                src={`${shokosai}/photo-09.jpg`}
                alt="地域イベントで来場者と交流する様子"
                fill
                sizes="(min-width: 1024px) 320px, 78vw"
                className="object-cover"
              />
            </div>
            <div className="photo-print absolute bottom-0 right-0 h-72 w-[76%] rotate-[-4deg] sm:w-80">
              <Image
                src={`${reikai}/photo-03.jpg`}
                alt="例会で学び合うメンバー"
                fill
                sizes="(min-width: 1024px) 320px, 76vw"
                className="object-cover"
              />
            </div>
            <div className="hand-note absolute bottom-8 left-4 max-w-[16rem] rotate-[-2deg] p-4 text-sm font-bold leading-7">
              <div className="text-xs font-black text-blue-accent">最近の活動メモ</div>
              雨の商工祭。準備は大変でしたが、ブースはずっとにぎやかでした。
            </div>
          </div>
        </div>
      </section>

      <section className="paper-bg py-18 text-black-base sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <Reveal>
            <div className="photo-print tape h-[24rem] rotate-[-1.5deg] sm:h-[32rem]">
              <Image
                src={latestReport.image}
                alt={latestReport.title}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="inline-flex rotate-[1deg] bg-blue-accent px-3 py-1 text-sm font-black text-white">
              最新活動
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              {latestReport.title}
            </h2>
            <p className="mt-6 text-lg font-bold leading-9 text-black/72">
              {latestReport.excerpt}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {activityNotes.map((note, index) => (
                <div
                  key={note}
                  className={`hand-note px-4 py-3 text-sm font-black ${
                    index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                  }`}
                >
                  {note}
                </div>
              ))}
            </div>
            <Link
              href="/activities"
              className="focus-ring mt-8 inline-flex rounded-md bg-black-base px-5 py-3 text-sm font-black text-white transition hover:bg-blue-accent"
            >
              活動報告を読む →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-black-base py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="text-sm font-black uppercase text-blue-soft">
                About
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
                仕事の前に、まず人としてつながる。
              </h2>
              <p className="mt-6 text-base leading-8 text-white/74">
                青年部は、名刺交換だけで終わる場所ではありません。顔を合わせて話して、地域の行事を一緒に動かして、「この人なら相談できるな」という関係をつくっていく場所です。
              </p>
              <p className="mt-4 text-base leading-8 text-white/74">
                かっちりした会議の日もあれば、準備で汗だくになる日もあります。どちらも含めて、戸田で商売を続けていくための仲間づくりだと思っています。
              </p>
              <div className="mt-8">
                <CTAButton href="/about" variant="ghost">
                  青年部について
                </CTAButton>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {photoWall.map((photo) => (
              <Reveal key={photo.src} className={photo.className}>
                <div className="photo-print h-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-[-0.7rem] left-3 z-10 rotate-[-1deg] bg-yellow-accent px-3 py-1 text-xs font-black text-black-base">
                    {photo.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-bg py-20 text-black-base">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase text-blue-accent">
              Members
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
              メンバーの顔と、ちょっとした人柄。
            </h2>
            <p className="mt-5 text-base font-bold leading-8 text-black/68">
              仕事の内容だけでなく、周りから見たコメントも載せています。紹介しやすさは、こういう空気から生まれます。
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {previewMembers.map((member, index) => (
              <Reveal
                key={member.id}
                className={index % 2 === 0 ? "lg:mt-8" : "lg:-mt-2"}
              >
                <Link
                  href={`/members/${member.id}`}
                  className={`focus-ring block ${
                    index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                  }`}
                >
                  <article className="photo-print bg-white text-black-base transition hover:-translate-y-1">
                    <div className="relative h-72">
                      <Image
                        src={member.image_path}
                        alt={`${member.name}さんの写真`}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="px-4 pb-4 pt-3">
                      <div className="text-xs font-black text-blue-accent">
                        {member.category}
                      </div>
                      <h3 className="mt-1 text-xl font-black">{member.name}</h3>
                      <p className="mt-1 text-xs font-bold text-black/58">
                        {member.company}
                      </p>
                      <p className="mt-3 text-sm font-bold leading-7 text-black/74">
                        「{member.member_comment}」
                      </p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <CTAButton href="/members">部員紹介を見る</CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-black-soft py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-blue-soft">Join</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
              いきなり入部じゃなくて、まず見に来てください。
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/74">
              例会の雰囲気、イベントの準備、メンバー同士の距離感。文章だけでは伝わりきらないので、気軽にのぞいてもらえるとうれしいです。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/join#contact">見学・問い合わせ</CTAButton>
              <CTAButton href="/activities" variant="ghost">
                活動報告を見る
              </CTAButton>
            </div>
          </div>

          <div className="hand-note rotate-[1deg] p-6">
            <div className="text-xs font-black uppercase text-blue-accent">
              Contact
            </div>
            <h3 className="mt-2 text-2xl font-black">戸田市商工会青年部</h3>
            <div className="mt-5 space-y-2 text-sm font-bold leading-7 text-black/72">
              <div>〒335-0022 埼玉県戸田市上戸田1-21-23</div>
              <div>TEL 048-441-2617 / FAX 048-444-0935</div>
              <div>E-mail toda@syokoukai.jp</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
