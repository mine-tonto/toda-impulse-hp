const steps = [
  "出会う",
  "関係ができる",
  "信頼される",
  "紹介される",
  "仕事になる",
];

export function ValueFlowDiagram() {
  return (
    <div className="overflow-hidden rounded-md border border-white/12 bg-white/[0.035]">
      <div className="grid md:grid-cols-5">
        {steps.map((step, index) => (
          <div
            key={step}
            className="relative border-b border-white/12 p-5 md:border-b-0 md:border-r last:md:border-r-0"
          >
            <div className="display-font text-5xl leading-none text-blue-soft/30">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="mt-4 text-lg font-black text-white">{step}</div>
            {index < steps.length - 1 ? (
              <div className="mt-3 text-sm font-black text-blue-soft md:absolute md:right-4 md:top-1/2 md:mt-0 md:-translate-y-1/2">
                →
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="border-t border-blue-accent bg-blue-accent/12 px-5 py-4 text-sm font-bold text-blue-soft">
        仕事になったあとも、また関係が深まり、次の相談や紹介につながっていきます。
      </div>
    </div>
  );
}
