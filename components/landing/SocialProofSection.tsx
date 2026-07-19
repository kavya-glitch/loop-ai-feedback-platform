const logos = ["Acme Co.", "Northstar", "Brightpath", "Meridian", "Vertex"];

const testimonials = [
  {
    quote:
      "We replaced three spreadsheets and a weekly sync with LOOP. Our roadmap priorities finally match what customers are actually saying.",
    role: "Head of Product",
    company: "B2B SaaS company",
  },
  {
    quote:
      "Ask LOOP changed how we prep for exec reviews. I can pull evidence-backed answers in minutes instead of spending a day in support tickets.",
    role: "Customer Success Lead",
    company: "Growth-stage startup",
  },
];

const delayClasses = ["landing-delay-2", "landing-delay-3"];

export function SocialProofSection() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="landing-reveal text-center text-sm font-medium uppercase tracking-wider text-zinc-500">
          Trusted by product teams
        </p>

        <div className="landing-reveal landing-delay-1 mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((name) => (
            <span
              key={name}
              className="text-sm font-medium tracking-wide text-zinc-600 transition-colors hover:text-zinc-400"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <blockquote
              key={index}
              className={`landing-reveal ${delayClasses[index]} rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8`}
            >
              <svg
                viewBox="0 0 24 24"
                className="mb-4 h-6 w-6 text-emerald-500/40"
                fill="currentColor"
                aria-hidden
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.016 3.016 0 01-3.016 3.016c-1.618 0-2.929-1.317-2.929-2.932 0-1.653 1.036-2.971 2.445-2.971.636 0 1.157.226 1.547.659zM14.583 17.321c-1.03-1.094-1.583-2.321-1.583-4.31 0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.016 3.016 0 01-3.016 3.016c-1.618 0-2.929-1.317-2.929-2.932 0-1.653 1.036-2.971 2.445-2.971.636 0 1.157.226 1.547.659z" />
              </svg>
              <p className="text-base leading-relaxed text-zinc-300">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-zinc-800 pt-4">
                <p className="text-sm font-medium text-zinc-200">{item.role}</p>
                <p className="text-sm text-zinc-500">{item.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
