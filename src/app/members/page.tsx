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
        <p className="text-sm font-black uppercase text-blue-soft">Members</p>
        <h1 className="mt-3 max-w-5xl text-5xl font-black leading-tight text-white sm:text-7xl">
          顔が見える。人柄が見える。仕事が見える。
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-bold leading-9 text-white/75">
          単なる名簿ではなく、地域の相談・紹介・協業につながる入口として、部員の仕事と想いを紹介します。
        </p>
      </section>
      <MembersClient members={members} />
    </div>
  );
}
