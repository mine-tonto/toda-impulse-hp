type BusinessCaseCardProps = {
  title: string;
  category: string;
  body: string;
  image: string;
};

export function BusinessCaseCard({
  title,
  category,
  body,
  image,
}: BusinessCaseCardProps) {
  return (
    <article className="blue-edge overflow-hidden rounded-md border border-black/10 bg-white text-black-base shadow-[6px_6px_0_rgba(22,131,255,0.14)]">
      <div
        className="m-3 h-48 rounded-sm bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={title}
      />
      <div className="p-5">
        <div className="text-xs font-black uppercase text-blue-accent">
          {category}
        </div>
        <h3 className="mt-2 text-xl font-black">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-black/70">{body}</p>
      </div>
    </article>
  );
}
