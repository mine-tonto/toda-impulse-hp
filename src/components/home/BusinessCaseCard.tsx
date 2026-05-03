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
    <article className="blue-edge overflow-hidden rounded-md border border-white/12 bg-white text-black-base">
      <div
        className="h-48 bg-cover bg-center"
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
