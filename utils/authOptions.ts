import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth"; // Import the Profile type
import connectToDb from "@/lib/database";
import User from "@/lib/database/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          acces_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      await connectToDb();

      if (profile?.email !== "filippetrovicfr04@gmail.com") {
        throw new Error("Impossible de se connecter.");
      }

      const user = await User.findOne({ email: profile?.email });

      if (!user) {
        const username = profile?.name?.slice(0, 20);
        await User.create({
          email: profile?.email,
          username,
          image: profile?.picture,
        });
      }

      return true;
    },
    async session({ session }) {
      const user = await User.findOne({
        email: session?.user?.email,
      });

      session.user.id = user._id.toString();

      return session;
    },
  },
};
