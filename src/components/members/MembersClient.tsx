"use client";

import { useMemo, useState } from "react";
import type { Member } from "@/app/members/types";
import { CategoryFilter } from "@/components/members/CategoryFilter";
import { MemberCard } from "@/components/members/MemberCard";

const allCategory = "すべて";

function searchableText(member: Member) {
  return [
    member.name,
    member.name_en,
    member.company,
    member.category,
    member.position,
    member.message,
    member.business_pr,
    member.skills.join(" "),
    member.matching.join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

export function MembersClient({ members }: { members: Member[] }) {
  const [activeCategory, setActiveCategory] = useState(allCategory);
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    return [
      allCategory,
      ...Array.from(new Set(members.map((member) => member.category))).sort(
        (a, b) => a.localeCompare(b, "ja")
      ),
    ];
  }, [members]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return members.filter((member) => {
      const categoryMatch =
        activeCategory === allCategory || member.category === activeCategory;
      const keywordMatch =
        normalized.length === 0 || searchableText(member).includes(normalized);
      return categoryMatch && keywordMatch;
    });
  }, [activeCategory, members, query]);

  return (
    <section className="bg-black-base py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-4 lg:grid-cols-[1fr_360px] lg:items-end">
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
          <label className="block">
            <span className="sr-only">キーワード検索</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="名前・会社・業種で検索"
              className="focus-ring h-12 w-full rounded-md border border-white/14 bg-white/10 px-4 text-sm font-bold text-white placeholder:text-white/40"
            />
          </label>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-8 rounded-md border border-white/12 p-6 text-sm text-white/66">
            条件に合う部員が見つかりませんでした。
          </div>
        ) : null}
      </div>
    </section>
  );
}
