import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import Twitter from "next-auth/providers/twitter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Facebook,
    Twitter,
    Resend({ apiKey: process.env.RESEND_API_KEY, from: "contact@bdglab.com" }),
  ],
  pages: {
    signIn: "/login",
    verifyRequest: "/login/verify",
  },
});
