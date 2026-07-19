import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="landing-reveal relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-zinc-900 to-zinc-900 px-8 py-16 text-center md:px-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.12),transparent_50%)]"
            aria-hidden
          />

          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
              Stop guessing. Start knowing.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
              Join product teams who use LOOP to turn customer feedback into
              confident, evidence-backed decisions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-emerald-500 px-8 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-400 sm:w-auto"
              >
                Get started free
              </Link>
              <Link
                href="/login"
                className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-zinc-600 px-8 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-400 hover:bg-zinc-800/50 sm:w-auto"
              >
                Log in to your workspace
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
