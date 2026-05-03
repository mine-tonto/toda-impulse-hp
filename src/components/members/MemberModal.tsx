"use client";

import Link from "next/link";
import type { Member } from "@/app/members/types";

export function MemberModal({
  member,
  onClose,
}: {
  member: Member | null;
  onClose: () => void;
}) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-black/72"
        aria-label="閉じる"
        onClick={onClose}
      />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="relative w-full max-w-lg rounded-md border border-white/12 bg-black-base p-6 text-white">
          <button
            type="button"
            className="focus-ring absolute right-4 top-4 rounded-md border border-white/12 px-3 py-1 text-xs font-black"
            onClick={onClose}
          >
            CLOSE
          </button>
          <div className="text-sm font-black text-blue-soft">{member.category}</div>
          <h2 className="mt-3 text-3xl font-black">{member.name}</h2>
          <p className="mt-3 text-sm leading-7 text-white/70">{member.message}</p>
          <Link
            href={`/members/${member.id}`}
            className="focus-ring mt-6 inline-flex rounded-md bg-blue-accent px-4 py-3 text-sm font-black text-white"
          >
            PROFILEへ
          </Link>
        </div>
      </div>
    </div>
  );
}
