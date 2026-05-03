import type { Metadata } from "next";
import Image from "next/image";
import { NewsCard } from "@/components/news/NewsCard";

export const metadata: Metadata = {
  title: "お知らせ",
};

const shokosai = "/media/shokosai-2025-10-25";
const reikai = "/media/reikai-2025-09-10";

const items = [
  {
    date: "2025.10.25",
    category: "地域活動",
    title: "商工祭1日目に青年部ブースを出展",
    body: "親子で楽しめる企画を通じて、地域の方との接点が生まれました。",
    image: `${shokosai}/photo-09.jpg`,
  },
  {
    date: "2025.10.25",
    category: "商工祭",
    title: "雨天でも交流が続いた一日",
    body: "テントを並べた会場で、会員同士も来場者も自然に言葉を交わしました。",
    image: `${shokosai}/photo-18.jpg`,
  },
  {
    date: "2025.09.10",
    category: "例会",
    title: "9月例会を開催しました",
    body: "例会では、経営や地域活動について会員同士が学びを深めました。",
    image: `${reikai}/photo-03.jpg`,
  },
  {
    date: "随時",
    category: "入部案内",
    title: "見学希望を受け付けています",
    body: "初参加の方も、定例会やイベントの見学から安心して参加できます。",
    image: `${shokosai}/photo-12.jpg`,
  },
];

export default function NewsPage() {
  return (
    <div className="bg-black-base pt-16">
      <section className="section-shell py-16">
        <p className="text-sm font-black uppercase text-blue-soft">News</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black leading-tight text-white sm:text-7xl">
          活動が見える。雰囲気が伝わる。
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-white/75">
          例会、研修、イベント、地域活動の記録を写真とともに掲載します。
        </p>
      </section>

      <section className="bg-black-base pb-20">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20 text-black-base">
        <div className="section-shell">
          <p className="text-sm font-black uppercase text-blue-accent">Gallery</p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            追加写真を織り交ぜた活動ギャラリー
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["01", "05", "09", "12", "18", "22", "31", "43"].map((id) => (
              <div
                key={id}
                className="relative h-56 overflow-hidden rounded-md lg:odd:h-72"
              >
                <Image
                  src={`${shokosai}/photo-${id}.jpg`}
                  alt="商工祭の活動写真"
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
