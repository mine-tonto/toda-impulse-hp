type ActivityCardProps = {
  number: string;
  title: string;
  body: string;
  tone?: "blue" | "white" | "yellow";
};

export function ActivityCard({
  number,
  title,
  body,
  tone = "blue",
}: ActivityCardProps) {
  const toneClass =
    tone === "yellow"
      ? "bg-yellow-accent text-black-base border-yellow-accent"
      : tone === "white"
        ? "bg-white text-black-base border-white"
        : "bg-blue-accent text-white border-blue-accent";

  return (
    <article className={`rounded-md border p-6 ${toneClass}`}>
      <div className="display-font text-7xl leading-none opacity-40">{number}</div>
      <h3 className="mt-5 text-2xl font-black">{title}</h3>
      <p className="mt-4 text-sm leading-7 opacity-75">{body}</p>
    </article>
  );
}
