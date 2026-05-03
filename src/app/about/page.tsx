import type { Metadata } from "next";
import Image from "next/image";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "青年部について",
};

const reikai = "/media/reikai-2025-09-10";
const shokosai = "/media/shokosai-2025-10-25";

const values = [
  {
    title: "顔を合わせる",
    body: "画面越しだけではわからない人柄を、例会や地域活動の中で少しずつ知っていきます。",
  },
  {
    title: "街で動く",
    body: "商工祭や地域事業に参加して、事業者としてだけでなく、街の一員として動きます。",
  },
  {
    title: "相談できる関係をつくる",
    body: "すぐ仕事にするよりも、まず困った時に声をかけられる関係を大切にしています。",
  },
];

const faq = [
  {
    question: "商工会の堅い集まりですか？",
    answer:
      "制度や事業支援の土台はありますが、青年部の活動は顔を合わせる交流や地域活動が中心です。初めての方も見学から参加できます。",
  },
  {
    question: "営業目的で参加してもよいですか？",
    answer:
      "営業を禁止する場ではありませんが、売り込みよりも信頼関係づくりを大切にしています。人柄が見えると、自然に相談や紹介につながりやすくなります。",
  },
  {
    question: "仕事につながりますか？",
    answer:
      "仕事を保証する場ではありません。ただ、地域での認知や会員同士の信頼が育つことで、相談・紹介・協業につながることがあります。",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-black-base pt-16">
      <section className="section-shell grid min-h-[72svh] gap-12 py-16 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <div>
          <p className="inline-flex rotate-[-1deg] bg-yellow-accent px-3 py-1 text-sm font-black text-black-base">
            青年部について
          </p>
          <h1 className="mt-6 text-5xl font-black leading-tight text-white sm:text-7xl">
            戸田で商売を続ける人の、近くにいる仲間。
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-9 text-white/76">
            TODA IMPULSEは、戸田で事業を営む若手経営者や後継者が集まる青年部です。学ぶ日も、準備で動く日も、イベントで地域の人と話す日もあります。
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
            きれいな言葉だけでまとまる団体ではありません。現場ではバタバタすることもあります。それでも、顔を合わせて一緒に動くからこそ、仕事の相談や紹介につながる関係が育っていきます。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/activities">活動報告を見る</CTAButton>
            <CTAButton href="/join#contact" variant="ghost">
              見学してみる
            </CTAButton>
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <div className="photo-print tape absolute left-0 top-2 h-72 w-[78%] rotate-[2deg]">
            <Image
              src={`${reikai}/photo-03.jpg`}
              alt="例会で学び合う青年部メンバー"
              fill
              sizes="(min-width: 1024px) 420px, 78vw"
              className="object-cover"
            />
          </div>
          <div className="photo-print absolute bottom-0 right-0 h-64 w-[68%] rotate-[-3deg]">
            <Image
              src={`${shokosai}/photo-09.jpg`}
              alt="商工祭で地域の方と交流する様子"
              fill
              sizes="(min-width: 1024px) 360px, 68vw"
              className="object-cover"
            />
          </div>
          <div className="hand-note absolute bottom-10 left-6 max-w-[17rem] rotate-[1deg] p-4 text-sm font-bold leading-7">
            例会で話して、イベントで動いて、少しずつ仲間になっていく感じです。
          </div>
        </div>
      </section>

      <section className="paper-bg py-20 text-black-base">
        <div className="section-shell">
          <p className="text-sm font-black uppercase text-blue-accent">
            What We Care
          </p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            大切にしているのは、ちゃんと知ってもらうこと。
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`hand-note p-6 ${
                  index === 1 ? "md:mt-8 rotate-[1deg]" : "rotate-[-1deg]"
                }`}
              >
                <div className="display-font text-5xl leading-none text-blue-accent/30">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-2xl font-black">{value.title}</h3>
                <p className="mt-4 text-sm font-bold leading-7 text-black/70">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-base py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-blue-soft">FAQ</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-6xl">
              最初に気になること。
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70">
              入る前に気になることは、見学の時にそのまま聞いてください。かしこまらなくて大丈夫です。
            </p>
          </div>
          <FAQAccordion items={faq} />
        </div>
      </section>
    </div>
  );
}
