"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
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

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm text-zinc-300 transition-colors hover:text-zinc-50"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm text-zinc-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 border-t border-zinc-800 pt-4">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-center text-sm text-zinc-300 ring-1 ring-zinc-700"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-zinc-50 px-4 py-2 text-center text-sm font-medium text-zinc-950"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
