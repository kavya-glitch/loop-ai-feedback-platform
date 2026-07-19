"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { signIn } from "next-auth/react";

import {
  signupSchema,
  type SignupFieldErrors,
  type SignupInput,
} from "@/lib/validation/signup";

type FormState = SignupInput;

const initialFormState: FormState = {
  workspaceName: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

type FieldName = keyof FormState;

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

function FormField({
  id,
  label,
  type = "text",
  value,
  error,
  disabled,
  onChange,
  autoComplete,
}: {
  id: FieldName;
  label: string;
  type?: string;
  value: string;
  error?: string;
  disabled: boolean;
  onChange: (value: string) => void;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-zinc-300"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        disabled={disabled}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 block w-full rounded-lg border border-zinc-700 bg-zinc-900/80 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-60"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<SignupFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function updateField(field: FieldName, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setFormError(null);
  }

  function setErrorsFromZod(errors: SignupFieldErrors) {
    setFieldErrors(errors);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const parsed = signupSchema.safeParse(form);

    if (!parsed.success) {
      const flattened = parsed.error.flatten().fieldErrors as SignupFieldErrors;
      setErrorsFromZod(flattened);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
        fieldErrors?: SignupFieldErrors;
      };

      if (response.status === 400 && data.fieldErrors) {
        setErrorsFromZod(data.fieldErrors);
        return;
      }

      if (response.status === 409) {
        setFormError(data.error ?? "An account with this email already exists.");
        return;
      }

      if (!response.ok) {
        setFormError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setIsSuccess(true);
      window.setTimeout(() => {
        router.push("/login?signup=success");
      }, 1500);
    } catch {
      setFormError("Unable to connect. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8 text-emerald-400"
            fill="none"
            aria-hidden
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-[landing-fade-in_0.5s_ease-out_both]"
            />
          </svg>
        </div>
        <h2 className="mt-6 text-xl font-semibold text-zinc-50">
          Workspace created!
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Redirecting you to login…
        </p>
      </div>
    );

    function FormField({
  id,
  label,
  type = "text",
  value,
  error,
  disabled,
  onChange,
  autoComplete,
}: {
  id: FieldName;
  label: string;
  type?: string;
  value: string;
  error?: string;
  disabled: boolean;
  onChange: (value: string) => void;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-zinc-300"
      >
        {label}
        <span className="ml-1 text-red-500">*</span>
      </label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        disabled={disabled}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 block w-full rounded-lg border border-zinc-700 bg-zinc-900/80 px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-60"
      />

      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-sm text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {formError && (
        <div
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {formError}
        </div>
      )}

      <FormField
        id="workspaceName"
        label="Workspace Name"
        value={form.workspaceName}
        error={fieldErrors.workspaceName?.[0]}
        disabled={isSubmitting}
        onChange={(value) => updateField("workspaceName", value)}
        autoComplete="organization"
      />

      <FormField
        id="name"
        label="Full Name"
        value={form.name}
        error={fieldErrors.name?.[0]}
        disabled={isSubmitting}
        onChange={(value) => updateField("name", value)}
        autoComplete="name"
      />

      <FormField
        id="email"
        label="Email"
        type="email"
        value={form.email}
        error={fieldErrors.email?.[0]}
        disabled={isSubmitting}
        onChange={(value) => updateField("email", value)}
        autoComplete="email"
      />

      <FormField
        id="password"
        label="Password"
        type="password"
        value={form.password}
        error={fieldErrors.password?.[0]}
        disabled={isSubmitting}
        onChange={(value) => updateField("password", value)}
        autoComplete="new-password"
      />

      <FormField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        value={form.confirmPassword}
        error={fieldErrors.confirmPassword?.[0]}
        disabled={isSubmitting}
        onChange={(value) => updateField("confirmPassword", value)}
        autoComplete="new-password"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Spinner />
            Creating workspace…
          </>
        ) : (
          "Create Workspace"
        )}
      </button>

      <div className="relative my-6 flex items-center justify-center">
        <div className="absolute inset-x-0 h-px bg-zinc-800/80" />
        <span className="relative bg-zinc-900 px-4 text-xs uppercase text-zinc-500">
          Or continue with
        </span>
      </div>

      <button
        type="button"
        disabled={isSubmitting}
        onClick={() => signIn("google")}
        className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </button>

      <p className="text-center text-sm text-zinc-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-emerald-400 transition-colors hover:text-emerald-300"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
