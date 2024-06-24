import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [],
} satisfies NextAuthOptions;
export default NextAuth(authConfig);
