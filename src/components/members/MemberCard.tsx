import Image from "next/image";
import Link from "next/link";
import type { Member } from "@/app/members/types";

export function MemberCard({ member }: { member: Member }) {
  return (
    <article className="blue-edge flex h-full flex-col overflow-hidden rounded-md border border-white/12 bg-white text-black-base">
      <div className="relative h-72">
        <Image
          src={member.image_path}
          alt={`${member.name}さんの写真`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute left-3 top-3 rounded-md bg-blue-accent px-3 py-1 text-xs font-black text-white">
          {member.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="text-xs font-black uppercase text-blue-accent">
          {member.name_en}
        </div>
        <h2 className="mt-2 text-2xl font-black">{member.name}</h2>
        <div className="mt-1 text-sm font-bold text-black/60">
          {member.company} / {member.position}
        </div>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-black/70">
          {member.message}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {member.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-black/10 px-2 py-1 text-xs font-bold"
            >
              {skill}
            </span>
          ))}
        </div>
        <Link
          href={`/members/${member.id}`}
          className="focus-ring mt-auto pt-5 text-sm font-black text-blue-accent"
        >
          PROFILE →
        </Link>
      </div>
    </article>
  );
}
