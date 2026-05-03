import type { Metadata } from "next";
import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ActivityCard } from "@/components/home/ActivityCard";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "入会案内",
};

const shokosai = "/media/shokosai-2025-10-25";
const reikai = "/media/reikai-2025-09-10";

const steps = [
  "問い合わせる",
  "例会や活動を見学",
  "会費・条件を確認",
  "入会手続き",
  "できる範囲から参加",
];

const faq = [
  {
    question: "初参加でも浮きませんか？",
    answer:
      "大丈夫です。最初は見学だけでも構いません。担当メンバーが雰囲気を案内します。",
  },
  {
    question: "毎回参加できないと難しいですか？",
    answer:
      "仕事や家庭の都合もあるので、できる範囲で参加しているメンバーもいます。まずは続けやすい関わり方を一緒に考えます。",
  },
  {
    question: "営業の場ですか？",
    answer:
      "売り込みの場というより、顔を合わせて信頼をつくる場です。自然な相談や紹介につながることはありますが、ノルマのような雰囲気ではありません。",
  },
];

export default function JoinPage() {
  return (
    <div className="bg-black-base pt-16">
      <section className="section-shell grid gap-12 py-16 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <p className="inline-flex rotate-[-1deg] bg-yellow-accent px-3 py-1 text-sm font-black text-black-base">
            入会案内
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight text-white sm:text-7xl">
            まずは見学で、空気を見てください。
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-white/75">
            いきなり入会を決めなくて大丈夫です。例会の様子、メンバー同士の距離感、地域活動の雰囲気を見てから考えてください。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#contact">問い合わせる</CTAButton>
            <CTAButton href="/activities" variant="ghost">
              活動報告を見る
            </CTAButton>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <div className="photo-print tape absolute left-0 top-0 h-72 w-[76%] rotate-[2deg]">
            <Image
              src={`${reikai}/photo-01.jpg`}
              alt="例会で話し合うメンバー"
              fill
              sizes="(min-width: 1024px) 380px, 76vw"
              className="object-cover"
            />
          </div>
          <div className="photo-print absolute bottom-0 right-0 h-64 w-[72%] rotate-[-3deg]">
            <Image
              src={`${shokosai}/photo-12.jpg`}
              alt="地域イベントで活動する様子"
              fill
              sizes="(min-width: 1024px) 360px, 72vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="paper-bg py-20 text-black-base">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          <ActivityCard
            number="01"
            title="見学だけでもOK"
            body="まずは例会やイベントに来て、話しやすそうか、続けられそうかを見てください。"
          />
          <ActivityCard
            number="02"
            title="できる範囲で参加"
            body="仕事が忙しい時期もあります。無理に背伸びせず、関われるところから始められます。"
            tone="white"
          />
          <ActivityCard
            number="03"
            title="地域で顔が見える"
            body="商工祭や地域活動を通じて、事業者としてだけでなく人として知ってもらえます。"
            tone="yellow"
          />
        </div>
      </section>

      <section className="bg-black-base py-20">
        <div className="section-shell">
          <p className="text-sm font-black uppercase text-blue-soft">Steps</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
            入会までの流れ
          </h2>
          <div className="mt-10 grid gap-3 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`rounded-md border border-white/12 bg-white/[0.04] p-5 ${
                  index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"
                }`}
              >
                <div className="display-font text-5xl leading-none text-blue-soft/35">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 text-sm font-black text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-soft py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-blue-soft">FAQ</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
              よくある不安
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70">
              気になることは、そのまま聞いてください。きっちり答えられることも、現場感で答えることもあります。
            </p>
          </div>
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section id="contact" className="paper-bg py-20 text-black-base">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase text-blue-accent">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
              見学・お問い合わせ
            </h2>
            <p className="mt-6 text-base font-bold leading-8 text-black/70">
              「ちょっと話を聞いてみたい」くらいで大丈夫です。活動内容、見学できる日、入会条件などは事務局へお問い合わせください。
            </p>
          </div>
          <div className="hand-note rotate-[1deg] p-6">
            <div className="grid gap-4 text-sm font-bold leading-7 md:grid-cols-2">
              <div>
                〒335-0022
                <br />
                埼玉県戸田市上戸田1-21-23
              </div>
              <div>
                TEL 048-441-2617
                <br />
                FAX 048-444-0935
              </div>
              <div className="md:col-span-2">
                E-mail toda@syokoukai.jp
                <div className="mt-5">
                  <CTAButton href="/members">メンバーの雰囲気を見る</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
