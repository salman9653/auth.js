import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "@/lib/auth.config"
import { getUserById } from "@/data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/login",
        error: "/authError",
    },
    events: {
        async linkAccount({ user }) {
            await db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            })
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            // allow OAuth without email verification
            if (account?.provider === 'credentials') return true

            // prevent sign in without email verification
            const existingUser = await getUserById(user.id)
            if (!existingUser?.emailVerified) return false

            // 2FA Check
            if (existingUser?.is2FAEnabled) {

            }

            return true
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
            }
            if (token.role && session.user) {
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token }) {
            if (!token.sub) return token
            const existingUser = await getUserById(token.sub)
            if (!existingUser) return token
            token.role = existingUser.role
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },
    ...authConfig
})