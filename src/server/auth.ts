// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { type GetServerSidePropsContext } from "next";
// import {
//   getServerSession,
//   type DefaultSession,
//   type NextAuthOptions,
// } from "next-auth";
// import DiscordProvider from "next-auth/providers/discord";

// import { env } from "gram/env.mjs";
// import { prisma } from "gram/server/db";
// import Credentials from "next-auth/providers/credentials";

// /**
//  * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
//  * object and keep type safety.
//  *
//  * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
//  */
// declare module "next-auth" {
//   interface Session extends DefaultSession {
//     user: DefaultSession["user"] & {
//       id: string;
//       // ...other properties
//       // role: UserRole;
//     };
//   }

//   // interface User {
//   //   // ...other properties
//   //   // role: UserRole;
//   // }
// }

// /**
//  * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
//  *
//  * @see https://next-auth.js.org/configuration/options
//  */
// export const authOptions: NextAuthOptions = {
//   callbacks: {
//     session: ({ session, user }) => ({
//       ...session,
//       user: {
//         ...session.user,
//         id: user.id,
//       },
//     }),
//   },
//   pages: {
//     signIn: "/sign-in",
//   },
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     DiscordProvider({
//       clientId: env.DISCORD_CLIENT_ID,
//       clientSecret: env.DISCORD_CLIENT_SECRET,
//     }),

//     Credentials({
//       credentials: {
//         firstname: { label: "firstname", type: "text" },
//         lastname: { label: "lastname", type: "text" },
//         username: { label: "username", type: "text" },
//         email: {
//           label: "email",
//           type: "email",
//         },
//         password: { label: "password", type: "password" },
//       },
//       authorize: (credentials) => {
//         if (!credentials?.email || !credentials?.password) return null;
//         //запит на бек для перевірки
//         const { password, ...userWithoutPass } = credentials; // якщо пройшов перевірку і данні правильні, а якщо ні , то null
//         return {
//           id: String(Math.random() * 100),
//           ...userWithoutPass,
//         }; // юзер без пароля
//       },
//     }),
//     /**
//      * ...add more providers here.
//      *
//      * Most other providers require a bit more work than the Discord provider. For example, the
//      * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
//      * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
//      *
//      * @see https://next-auth.js.org/providers/github
//      */
//   ],
// };

// /**
//  * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
//  *
//  * @see https://next-auth.js.org/configuration/nextjs
//  */
// export const getServerAuthSession = (ctx: {
//   req: GetServerSidePropsContext["req"];
//   res: GetServerSidePropsContext["res"];
// }) => {
//   return getServerSession(ctx.req, ctx.res, authOptions);
// };
