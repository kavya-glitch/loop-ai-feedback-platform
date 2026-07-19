const features = [
  {
    title: "Auto-classification",
    description:
      "Every piece of feedback is tagged by sentiment, channel, and topic automatically — no manual triage required.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M7 7h.01M7 12h.01M7 17h.01M12 7h5M12 12h5M12 17h5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Theme Trends",
    description:
      "Watch themes rise and fall over time. Spot emerging issues before they become churn, and validate fixes with data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M4 18V6M4 18h16M8 14l3-4 3 2 4-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Ask LOOP (Q&A)",
    description:
      "Ask plain-English questions and get answers grounded in your actual feedback data — with citations you can share with stakeholders.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M8 10a4 4 0 118 0c0 2-2 2.5-2 4M12 18h.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Voice-of-Customer Reports",
    description:
      "Generate executive-ready reports that summarize what customers are saying, what's changing, and what to prioritize next.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M8 4h8a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const delayClasses = [
  "landing-delay-1",
  "landing-delay-2",
  "landing-delay-3",
  "landing-delay-4",
];

export function FeaturesGrid() {
  return (
    <section id="features" className="border-t border-zinc-800/80 bg-zinc-900/20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
            Features
          </p>
          <h2 className="landing-reveal mt-3 text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            Everything you need to act on customer voice
          </h2>
          <p className="landing-reveal landing-delay-1 mt-4 text-zinc-400">
            LOOP classifies, clusters, and surfaces insights so your team spends
            time building — not digging through spreadsheets.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`landing-reveal ${delayClasses[index]} group rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/80 text-emerald-400 transition-colors group-hover:bg-emerald-500/10">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-zinc-100">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
