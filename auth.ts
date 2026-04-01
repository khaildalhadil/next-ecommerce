import { CredentialsProviderId } from './node_modules/@auth/core/providers/credentials.d';
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { adapter } from "next/dist/server/web/adapter";
import { prisma } from "./db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";

import { compareSync } from "bcrypt-ts-edge";

export const config = {
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      
      credentials: {
        email: { label: "Email", type: "email", placeholder: "" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        // find user in db

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string
          }
        });

        // check if user exists and password is correct
        if (!user || user.password !== credentials.password) return null;

        if (user && user.password) {
          const isMatch = compareSync(credentials.password as string, user.password);
          if (!isMatch) return null;
          return {id: user.id, email: user.email, name: user.name, role: user.role}
        }
      }

    })
  ],
  classbacks: {
    async sesstion({session, trigger, token, user}: any) {
      session.user.id = token.sub;
    }
  }
}

export const {handlers, auth, signIn, signOut} =  (config);