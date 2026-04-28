import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/lib/mongodb";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "google") {
        return true;
      }

      if (!user.email) {
        return false;
      }

      await connectToDB();

      await User.findOneAndUpdate(
        { email: user.email.toLowerCase() },
        {
          $set: {
            email: user.email.toLowerCase(),
            name: user.name ? user.name : null,
          },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
      );

      return true;
    },
  },
};
