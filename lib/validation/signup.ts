import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .refine(
    (value) => /[A-Z]/.test(value),
    "Password must contain an uppercase letter",
  )
  .refine(
    (value) => /[a-z]/.test(value),
    "Password must contain a lowercase letter",
  )
  .refine((value) => /[0-9]/.test(value), "Password must contain a number")
  .refine(
    (value) => /[^A-Za-z0-9]/.test(value),
    "Password must contain a special character",
  );

export const signupSchema = z
  .object({
    workspaceName: z
      .string()
      .trim()
      .min(1, "Workspace name is required")
      .min(3, "Workspace name must be at least 3 characters"),
    name: z.string().trim().min(1, "Full name is required"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupInput = z.infer<typeof signupSchema>;

export type SignupFieldErrors = Partial<
  Record<keyof SignupInput, string[]>
>;

export function formatSignupErrors(
  error: z.ZodError<SignupInput>,
): SignupFieldErrors {
  const flattened = error.flatten().fieldErrors;
  return flattened as SignupFieldErrors;
}
