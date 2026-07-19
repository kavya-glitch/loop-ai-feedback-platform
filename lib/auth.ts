import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { db } from "./db";
import { Role } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email.toLowerCase().trim();
        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user || !user.passwordHash) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          workspaceId: user.workspaceId,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider === "google") {
        const email = profile?.email || user?.email;
        if (!email) return false;
        const normalizedEmail = email.toLowerCase().trim();

        try {
          const existingUser = await db.user.findUnique({
            where: { email: normalizedEmail },
          });

          if (!existingUser) {
            const name = profile?.name || user?.name || email.split("@")[0];
            const workspaceName = `${email}'s Workspace`;
            
            // Generate a random password for Google OAuth users to satisfy passwordHash constraint
            const dummyPassword = Math.random().toString(36) + Math.random().toString(36);
            const passwordHash = await bcrypt.hash(dummyPassword, 12);

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
          }
        } catch (error) {
          console.error("Error signing in Google user:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (user) {
        if (account?.provider === "google" && user.email) {
          const email = user.email.toLowerCase().trim();
          const dbUser = await db.user.findUnique({
            where: { email },
            select: { id: true, role: true, workspaceId: true },
          });
          if (dbUser) {
            token.id = dbUser.id;
            token.role = dbUser.role;
            token.workspaceId = dbUser.workspaceId;
          }
        } else {
          token.id = user.id;
          token.role = (user as any).role;
          token.workspaceId = (user as any).workspaceId;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
        (session.user as any).workspaceId = token.workspaceId;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

// NextAuth type definitions
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      workspaceId: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
    workspaceId: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    workspaceId: string;
  }
}
