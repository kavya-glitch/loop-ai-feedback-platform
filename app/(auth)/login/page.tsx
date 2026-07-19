import Link from "next/link";
import { Suspense } from "react";
import { AuthBackground } from "@/components/auth/AuthBackground";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata = {
  title: "Log In — LOOP",
  description: "Log in to your LOOP account to manage customer feedback.",
};

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AuthBackground />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12 text-zinc-50">
        <Link
          href="/"
          className="auth-logo-enter mb-10 flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30">
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

        <div className="auth-card-enter w-full max-w-md rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-8 shadow-2xl shadow-emerald-500/5 ring-1 ring-zinc-800/80 backdrop-blur-md md:p-10">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
              Welcome back
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              Log in to access your feedback dashboard.
            </p>
          </div>

          <Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <svg className="h-6 w-6 animate-spin text-emerald-400" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
          }>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
