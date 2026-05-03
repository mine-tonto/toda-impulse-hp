type CategoryFilterProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const selected = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`focus-ring rounded-md border px-4 py-2 text-sm font-black transition ${
              selected
                ? "border-blue-accent bg-blue-accent text-white"
                : "border-white/14 bg-white/5 text-white/75 hover:border-blue-soft hover:text-white"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
