import prisma from "@/lib/prisma"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth, { NextAuthOptions } from "next-auth"
import { signInEmailPassword } from "@/actions"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Adapter } from "next-auth/adapters"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET_KEY ?? ""
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "usuario@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "********" },
            },
            async authorize(credentials, req) {
                const user = await signInEmailPassword(credentials!.email, credentials!.password)
                if (user) {
                    return user
                } else {
                    return null
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {

            return true
        },

        async jwt({ token, user, account, profile }) {
            const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? "no-email" } })
            token.roles = dbUser?.roles ?? ["no-roles"];
            token.id = dbUser?.id ?? "no-id"
            return token
        },
        async session({ session, token, user }) {
            if (session && session.user) {
                const { id, roles } = token
                session.user.roles = roles
                session.user.id = id
            }
            return session
        },
    }
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }