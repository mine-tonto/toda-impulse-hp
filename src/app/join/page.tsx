import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ActivityCard } from "@/components/home/ActivityCard";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "入部案内",
};

const steps = [
  "お問い合わせ",
  "定例会・イベントを見学",
  "条件と会費を確認",
  "入部手続き",
  "活動開始",
];

const faq = [
  {
    question: "初参加でも大丈夫ですか？",
    answer:
      "はい。まずは定例会やイベントの見学からお気軽にご参加ください。",
  },
  {
    question: "営業されませんか？",
    answer:
      "TODA IMPULSEは営業ノルマを目的にした交流会ではありません。自然な交流や地域活動を通じて信頼関係を育てる場です。",
  },
  {
    question: "仕事につながりますか？",
    answer:
      "保証する場ではありませんが、信頼関係や地域での認知が広がることで、相談・紹介・協業につながる可能性があります。",
  },
];

export default function JoinPage() {
  return (
    <div className="bg-black-base pt-16">
      <section className="section-shell py-16">
        <p className="text-sm font-black uppercase text-blue-soft">Join</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight text-white sm:text-7xl">
          見学から、安心して始める。
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-white/75">
          いきなり入部を決める必要はありません。活動の雰囲気を見て、不安を解消してから参加できます。
        </p>
      </section>

      <section className="bg-black-soft py-20">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          <ActivityCard
            number="01"
            title="入部するとできること"
            body="研修、例会、地域活動、会員交流を通じて、相談できる仲間と接点が増えます。"
          />
          <ActivityCard
            number="02"
            title="こんな人におすすめ"
            body="地域で長く事業を続けたい方、一人で営業や集客に不安がある方、事業者仲間がほしい方。"
            tone="white"
          />
          <ActivityCard
            number="03"
            title="会費・条件"
            body="詳細な条件や会費は事務局で確認できます。まずは見学時にご相談ください。"
            tone="yellow"
          />
        </div>
      </section>

      <section className="bg-white py-20 text-black-base">
        <div className="section-shell">
          <p className="text-sm font-black uppercase text-blue-accent">Steps</p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            入部までの流れ
          </h2>
          <div className="mt-10 grid gap-3 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-md border border-black/10 p-5"
              >
                <div className="display-font text-5xl leading-none text-blue-accent/35">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 text-sm font-black">{step}</div>
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
              よくある不安
            </h2>
          </div>
          <FAQAccordion items={faq} />
        </div>
      </section>

      <section id="contact" className="bg-blue-accent py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase text-white/80">
              Contact
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
              見学・お問い合わせ
            </h2>
            <p className="mt-6 text-base font-bold leading-8 text-white/80">
              活動内容、見学可能日、入部条件は戸田市商工会青年部事務局へお問い合わせください。
            </p>
          </div>
          <div className="grid gap-3 text-sm font-bold leading-7 md:grid-cols-2">
            <div className="rounded-md border border-white/18 p-5">
              〒335-0022
              <br />
              埼玉県戸田市上戸田1-21-23
            </div>
            <div className="rounded-md border border-white/18 p-5">
              TEL 048-441-2617
              <br />
              FAX 048-444-0935
            </div>
            <div className="rounded-md border border-white/18 p-5 md:col-span-2">
              E-mail toda@syokoukai.jp
              <div className="mt-5">
                <CTAButton href="/members" variant="secondary">
                  部員の人柄を見る
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
