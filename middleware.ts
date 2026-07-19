import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api/auth (NextAuth APIs, signup API, forgot password API)
     * - login (Login page)
     * - signup (Signup page)
     * - forgot-password (Forgot password page)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - / (landing page itself)
     */
    "/((?!api/auth|login|signup|forgot-password|_next/static|_next/image|favicon.ico|$).*)",
  ],
};
