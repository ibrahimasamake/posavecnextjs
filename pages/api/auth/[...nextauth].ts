import NextAuth ,{NextAuthOptions} from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/src/lib/prisma";


export const authConfig={
    adapter: PrismaAdapter(prisma),
    providers: [],
} satisfies  NextAuthOptions;


export default NextAuth(authConfig);