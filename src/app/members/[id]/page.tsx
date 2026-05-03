import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import membersData from "@/data/members.json";
import type { Member } from "@/app/members/types";
import { MemberCard } from "@/components/members/MemberCard";

const members = membersData as Member[];

function getMember(id: string) {
  return members.find((member) => member.id === id);
}

export function generateStaticParams() {
  return members.map((member) => ({ id: member.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const member = getMember(id);
  return {
    title: member ? `${member.name} | 部員紹介` : "部員紹介",
  };
}

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = getMember(id);
  if (!member) notFound();

  const related = member.related_ids
    .map((relatedId) => getMember(relatedId))
    .filter((item): item is Member => Boolean(item))
    .slice(0, 3);

  return (
    <div className="bg-black-base text-white">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-4 mix-blend-difference md:px-8">
        <Link href="/" className="focus-ring display-font text-2xl">
          TODA IMPULSE
        </Link>
        <Link href="/members" className="focus-ring text-xs font-black">
          メンバー一覧へ
        </Link>
      </header>

      <section className="flex min-h-screen flex-col md:flex-row">
        <div className="relative flex min-h-[62svh] items-center justify-center overflow-hidden bg-blue-accent md:min-h-screen md:flex-[0_0_45%]">
          <Image
            src={member.image_path}
            alt={`${member.name}さん`}
            width={720}
            height={920}
            priority
            className="relative z-10 h-[78svh] max-h-[820px] w-[78%] rotate-[1deg] border-[7px] border-white bg-white object-cover object-center shadow-2xl"
          />
          <div className="display-font pointer-events-none absolute right-3 top-20 text-7xl leading-none text-white/30 [writing-mode:vertical-rl] md:text-8xl">
            {member.name_vertical}
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center px-5 py-14 md:px-[clamp(2rem,5vw,5rem)]">
          <div className="text-sm font-black uppercase text-blue-soft">
            {member.role_tag} / {member.category}
          </div>
          <h1 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">
            {member.name}
          </h1>
          <div className="display-font mt-3 text-4xl leading-none text-white/18 sm:text-6xl">
            {member.name_en}
          </div>
          <p className="mt-6 max-w-2xl text-lg font-bold leading-9 text-white/75">
            {member.message}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {[member.company, member.position, member.area].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/12 px-3 py-2 text-xs font-black text-white/75"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={member.url}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-blue-accent px-5 text-sm font-black text-white"
            >
              企業HP
            </a>
            <Link
              href="/join#contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/24 px-5 text-sm font-black text-white"
            >
              相談の入口へ
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid border-t-8 border-blue-accent md:grid-cols-4">
          {[
            ["参加", member.stats.attendance],
            ["紹介", member.stats.introduced],
            ["活動", member.stats.events],
            ["実績", member.stats.works],
          ].map(([label, value]) => (
            <div key={label} className="border-b border-white/12 p-6 md:border-r">
              <div className="text-xs font-black uppercase text-white/48">
                {label}
              </div>
              <div className="display-font mt-2 text-5xl leading-none text-blue-soft">
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-4 py-16 lg:grid-cols-2">
        <div className="rounded-md border border-white/10 p-6">
          <div className="text-xs font-black uppercase text-blue-soft">この街への想い</div>
          <p className="mt-4 text-base leading-8 text-white/75">
            {member.city_thought}
          </p>
        </div>
        <div className="rounded-md border border-white/10 p-6">
          <div className="text-xs font-black uppercase text-blue-soft">
            仕事のこと
          </div>
          <p className="mt-4 text-base leading-8 text-white/75">
            {member.business_pr}
          </p>
        </div>
        <div className="rounded-md border border-white/10 p-6">
          <div className="text-xs font-black uppercase text-blue-soft">
            ふだんの活動
          </div>
          <dl className="mt-4 grid gap-3 text-sm text-white/75">
            <div className="flex justify-between gap-4">
              <dt>入部</dt>
              <dd className="font-bold text-white">{member.join_year}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>委員会</dt>
              <dd className="font-bold text-white">{member.committee}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>エリア</dt>
              <dd className="font-bold text-white">{member.area}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-md border border-white/10 p-6">
          <div className="text-xs font-black uppercase text-blue-soft">できること</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-white px-3 py-2 text-xs font-black text-black-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-md border border-white/10 p-6">
          <div className="text-xs font-black uppercase text-blue-soft">
            つながりたい人
          </div>
          <ul className="mt-4 grid gap-3 text-sm font-bold text-white/75">
            {member.matching.map((item) => (
              <li key={item}>・{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-white/10 p-6">
          <div className="text-xs font-black uppercase text-blue-soft">
            青年部で生まれたこと
          </div>
          <p className="mt-4 text-base leading-8 text-white/75">
            {member.connection_story}
          </p>
          <p className="mt-5 border-l-4 border-blue-accent pl-4 text-sm font-bold leading-7 text-white">
            {member.member_comment}
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-3 pb-16 md:grid-cols-2">
        {member.gallery.map((src) => (
          <div key={src} className="relative h-72 overflow-hidden rounded-md">
            <Image
              src={src}
              alt={`${member.name}さんの関連写真`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </section>

      <section className="bg-white py-16 text-black-base">
        <div className="section-shell">
          <div className="text-xs font-black uppercase text-blue-accent">
            Related members
          </div>
          <h2 className="mt-3 text-4xl font-black leading-tight">
            つながりが近い部員
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <MemberCard key={item.id} member={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
