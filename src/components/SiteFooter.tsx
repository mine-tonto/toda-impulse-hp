import Link from "next/link";

const nav = [
  { href: "/activities", label: "活動報告" },
  { href: "/about", label: "商工会青年部とは" },
  { href: "/members", label: "部員紹介" },
  { href: "/join", label: "入部案内" },
];

export function SiteFooter() {
  return (
    <footer className="border-t-8 border-blue-accent bg-black-base text-white">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="display-font inline-block rotate-[-1deg] text-5xl leading-none">
            TODA IMPULSE
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/66">
            戸田で事業を営む人が、顔を合わせて話し、地域で一緒に動きながら、信頼と仕事を育てていく場所です。
          </p>
        </div>
        <div>
          <div className="text-xs font-black uppercase text-blue-soft">
            Navigation
          </div>
          <div className="mt-4 flex flex-col gap-2 text-sm font-bold text-white/75">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-black uppercase text-blue-soft">
            Contact
          </div>
          <div className="mt-4 space-y-1 text-sm leading-7 text-white/66">
            <div>戸田市商工会青年部</div>
            <div>〒335-0022 埼玉県戸田市上戸田1-21-23</div>
            <div>TEL 048-441-2617</div>
            <div>FAX 048-444-0935</div>
            <div>E-mail toda@syokoukai.jp</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-5 text-xs text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} TODA IMPULSE</span>
          <Link href="/members-only" className="focus-ring hover:text-white">
            MEMBERS ONLY
          </Link>
        </div>
      </div>
    </footer>
  );
}
