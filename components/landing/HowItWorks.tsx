const steps = [
  {
    number: "01",
    title: "Feedback In",
    description:
      "Connect support tools, review platforms, surveys, and CRM notes. LOOP ingests feedback from every channel automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 8h16M4 12h10M4 16h14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 16l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "LOOP Engine",
    description:
      "AI classifies sentiment, clusters feedback into themes, detects emerging trends, and embeds every item for semantic search.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Insights Out",
    description:
      "Get ranked priorities, trend alerts, plain-English Q&A, and voice-of-customer reports — all grounded in real evidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
        <path
          d="M4 19V5M4 19h16M8 15l3-3 3 3 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const delayClasses = ["landing-delay-1", "landing-delay-2", "landing-delay-3"];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
            How it works
          </p>
          <h2 className="landing-reveal mt-3 text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            From raw feedback to clear priorities
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
          <div
            className="pointer-events-none absolute top-16 hidden h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent md:block"
            aria-hidden
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`landing-reveal ${delayClasses[index]} group relative rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/70`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 transition-colors group-hover:bg-emerald-500/20">
                  {step.icon}
                </span>
                <span className="font-mono text-xs text-zinc-600">{step.number}</span>
              </div>
              <h3 className="text-lg font-medium text-zinc-100">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
