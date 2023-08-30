import { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from "@/schemas"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET!,
  adapter: DrizzleAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

  ],
}
