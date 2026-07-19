import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-emerald-400"
                  aria-hidden
                >
                  <path
                    d="M4 12c0-4 3-7 8-7s8 3 8 7-3 7-8 7-8-3-8-7Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 8v8M8 12h8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight">LOOP</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              AI customer feedback intelligence for modern product teams.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-medium text-zinc-300">{group}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} LOOP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/login"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
