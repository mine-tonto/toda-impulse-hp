const stats = [
  {
    label: "学ぶ",
    value: "例会・研修",
    body: "経営に必要な知識と、現場で試せるヒントを得る。",
  },
  {
    label: "つながる",
    value: "会員交流",
    body: "業種を越えて相談できる関係を日常的につくる。",
  },
  {
    label: "動く",
    value: "地域貢献",
    body: "戸田のまちに事業者として関わり、次の機会を広げる。",
  },
];

export function StatsNumbers() {
  return (
    <section className="bg-forest text-white">
      <div className="section-shell grid gap-4 py-8 md:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-lg border border-white/15 bg-white/5 p-5"
          >
            <div className="text-sm font-bold text-gold">{stat.label}</div>
            <div className="mt-2 text-xl font-bold">{stat.value}</div>
            <p className="mt-3 text-sm leading-7 text-white/75">{stat.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
