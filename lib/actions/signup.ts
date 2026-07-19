import bcrypt from "bcryptjs";
import { Role } from "@prisma/client";

import { db } from "@/lib/db";
import {
  formatSignupErrors,
  signupSchema,
  type SignupFieldErrors,
  type SignupInput,
} from "@/lib/validation/signup";

const BCRYPT_SALT_ROUNDS = 12;

export type SignupActionResult =
  | { success: true }
  | { success: false; error: "VALIDATION"; fieldErrors: SignupFieldErrors }
  | { success: false; error: "EMAIL_EXISTS"; message: string }
  | { success: false; error: "SERVER"; message: string };

export async function signupUser(
  input: unknown,
): Promise<SignupActionResult> {
  const parsed = signupSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false,
      error: "VALIDATION",
      fieldErrors: formatSignupErrors(parsed.error),
    };
  }

  const { workspaceName, name, email, password } = parsed.data;
  const normalizedEmail = email.toLowerCase();

  try {
    const existingUser = await db.user.findUnique({
      where: { email: normalizedEmail },
      select: { id: true },
    });

    if (existingUser) {
      return {
        success: false,
        error: "EMAIL_EXISTS",
        message: "An account with this email already exists.",
      };
    }

    const passwordHash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

    await db.$transaction(async (tx) => {
      const workspace = await tx.workspace.create({
        data: { name: workspaceName },
      });

      await tx.user.create({
        data: {
          name,
          email: normalizedEmail,
          passwordHash,
          role: Role.ADMIN,
          workspaceId: workspace.id,
        },
      });
    });

    return { success: true };
  } catch {
    return {
      success: false,
      error: "SERVER",
      message: "Something went wrong. Please try again later.",
    };
  }
}

export type { SignupInput };
