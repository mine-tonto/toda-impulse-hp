import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  date: string;
  category: string;
  title: string;
  body: string;
  image: string;
  href?: string;
};

export function NewsCard({
  date,
  category,
  title,
  body,
  image,
  href = "/news",
}: NewsCardProps) {
  return (
    <article className="blue-edge overflow-hidden rounded-md border border-white/12 bg-white text-black-base">
      <div className="relative h-52">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-xs font-black">
          <span className="text-blue-accent">{date}</span>
          <span className="rounded-md bg-black-base px-2 py-1 text-white">
            {category}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-black">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-black/70">{body}</p>
        <Link
          href={href}
          className="focus-ring mt-5 inline-flex text-sm font-black text-blue-accent"
        >
          READ MORE →
        </Link>
      </div>
    </article>
  );
}
