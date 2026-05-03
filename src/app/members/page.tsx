import type { Metadata } from "next";
import membersData from "@/data/members.json";
import type { Member } from "@/app/members/types";
import { MembersClient } from "@/components/members/MembersClient";

export const metadata: Metadata = {
  title: "部員紹介",
};

const members = membersData as Member[];

export default function MembersPage() {
  return (
    <div className="bg-black-base pt-16">
      <section className="section-shell py-16">
        <p className="inline-flex rotate-[-1deg] bg-yellow-accent px-3 py-1 text-sm font-black text-black-base">
          メンバー紹介
        </p>
        <h1 className="mt-3 max-w-5xl text-5xl font-black leading-tight text-white sm:text-7xl">
          顔が見える。人柄が見える。仕事が見える。
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-white/75">
          どんな仕事をしているかだけでなく、普段の雰囲気や周りから見たコメントも少し載せています。相談や紹介は、こういう人柄の見える関係から始まります。
        </p>
      </section>
      <MembersClient members={members} />
    </div>
  );
}
