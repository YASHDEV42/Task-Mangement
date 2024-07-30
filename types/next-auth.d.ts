import NextAuth from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      role: string | null;
    } & DefaultSession["user"];
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    role?: string | null;
  }
}
