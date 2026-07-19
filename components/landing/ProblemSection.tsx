const sources = [
  "Support tickets",
  "App store reviews",
  "NPS surveys",
  "Sales calls",
  "Social mentions",
];

export function ProblemSection() {
  return (
    <section className="border-y border-zinc-800/80 bg-zinc-900/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="landing-reveal text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            Feedback is scattered everywhere
          </h2>
          <p className="landing-reveal landing-delay-1 mt-5 text-lg leading-relaxed text-zinc-400">
            Your customers are talking — in support inboxes, review pages, survey
            tools, call recordings, and social feeds. The signal is there, but
            it&apos;s buried in noise. Product teams spend hours manually tagging,
            spreadsheet-jockeying, and arguing about what customers actually want.
          </p>
        </div>

        <div className="landing-reveal landing-delay-2 mt-12 flex flex-wrap items-center justify-center gap-3">
          {sources.map((source) => (
            <span
              key={source}
              className="rounded-full border border-zinc-700/80 bg-zinc-900 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
            >
              {source}
            </span>
          ))}
        </div>

        <p className="landing-reveal landing-delay-3 mx-auto mt-10 max-w-2xl text-center text-base text-zinc-500">
          LOOP unifies every channel into one intelligence layer — so you stop
          guessing and start prioritizing with confidence.
        </p>
      </div>
    </section>
  );
}
