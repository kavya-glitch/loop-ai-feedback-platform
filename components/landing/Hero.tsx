import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="landing-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AI Customer Feedback Intelligence
          </p>

          <h1 className="landing-fade-in landing-delay-1 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl md:leading-[1.1]">
            Know exactly what to fix —{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
              backed by your customers
            </span>
          </h1>

          <p className="landing-fade-in landing-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            LOOP turns scattered customer feedback into a ranked, evidence-backed
            list of what to do next.
          </p>

          <div className="landing-fade-in landing-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-emerald-500 px-6 text-sm font-medium text-zinc-950 transition-all hover:bg-emerald-400 sm:w-auto"
            >
              Start free trial
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-700 px-6 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="landing-fade-in landing-delay-4 relative mx-auto mt-16 max-w-4xl">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-1 shadow-2xl shadow-emerald-500/5 ring-1 ring-zinc-800">
            <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
              <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="ml-2 text-xs text-zinc-500">LOOP Dashboard</span>
              </div>

              <div className="grid gap-4 p-4 md:grid-cols-5 md:p-6">
                <div className="space-y-3 md:col-span-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Top themes this week
                  </p>
                  {[
                    { label: "Checkout friction", pct: 82, trend: "+24%" },
                    { label: "Mobile performance", pct: 67, trend: "+12%" },
                    { label: "Pricing clarity", pct: 54, trend: "+8%" },
                  ].map((theme) => (
                    <div
                      key={theme.label}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-3 transition-colors hover:border-zinc-700"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-200">{theme.label}</span>
                        <span className="text-emerald-400">{theme.trend}</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                          style={{ width: `${theme.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 md:col-span-3">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Ask LOOP
                  </p>
                  <div className="mt-3 rounded-lg border border-zinc-700/50 bg-zinc-950 p-3 text-sm text-zinc-400">
                    Why are enterprise customers churning after onboarding?
                  </div>
                  <div className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-300">
                    <p>
                      Based on <span className="text-emerald-400">847 feedback items</span>{" "}
                      from support tickets, NPS, and sales calls:
                    </p>
                    <ul className="list-inside list-disc space-y-1 text-zinc-400">
                      <li>68% mention slow SSO setup in week one</li>
                      <li>41% cite missing admin controls vs. competitors</li>
                      <li>Sentiment dropped 22% since the v3.2 release</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -inset-x-6 -bottom-6 -z-10 h-24 bg-gradient-to-t from-zinc-950 to-transparent" aria-hidden />
        </div>
      </div>
    </section>
  );
}
