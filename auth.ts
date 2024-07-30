import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./models/User";
import bcyrpt from "bcryptjs";
import Google from "next-auth/providers/google";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import type { Provider } from "next-auth/providers";

const providers: Provider[] = [
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
  Credentials({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },

    authorize: async (credentials) => {
      const email = credentials.email as string | undefined;
      const password = credentials.password as string | undefined;
      if (!email || !password) {
        throw new Error("Please fill in all fields");
      }

      await connectDB();

      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        throw new Error("Invalid credentials");
      }

      if (!user.password) {
        throw new Error("Invalid credentials");
      }

      const passwordsMatch = await bcyrpt.compare(password, user.password);

      if (!passwordsMatch) {
        throw new Error("Invalid credentials");
      }
      const userData = {
        name: user.firstName + " " + user.lastName,
        email: user.email,
        role: user.role,
        id: user._id,
      };

      return userData;
    },
  }),
];
export const authConfig: any = {
  providers,
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async session({ session, token }: { session: Session; token: any }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }

      return session;
    },

    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    signIn: async ({ user, account }: { user: any; account: any }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, given_name, family_name, image, id } = user;
          const firstName = name || given_name || "";
          const lastName = family_name || "";
          console.log(user);
          await connectDB();
          const existingUser = await User.findOne({ email });

          if (!existingUser) {
            await User.create({
              email,
              firstName,
              lastName,
              image,
              authProviderId: id,
            });
          } else {
            return true;
          }
        } catch (err) {
          throw new Error("Invalid credentials");
        }
      }
      if (account?.provider === "credentials") {
        console.log(user);
        return true;
      } else {
        return false;
      }
    },
  },
};
export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
