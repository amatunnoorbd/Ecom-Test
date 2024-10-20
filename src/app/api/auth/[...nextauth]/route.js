import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";

const handler = NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
        rolling: false,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                mobile: {},
                password: {},
            },
            async authorize(credentials) {
                console.log(credentials);
                const { mobile, password } = credentials;
                if (!mobile || !password) {
                    return null;
                }
                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({ mobile });
                console.log(currentUser);
                if (!currentUser) {
                    return null;
                }
                const passwordMatched = bcrypt.compareSync(
                    password,
                    currentUser.password
                );
                if (!passwordMatched) {
                    return null;
                }
                return currentUser;
            },
        }),
    ],
    pages: {
        signIn: "/",

    },
    callbacks: {
        async session({ session, token }) {
            // User information JWT থেকে session-এ সেট করা হচ্ছে
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }) {
            // যখন ব্যবহারকারী লগইন করবে তখন JWT-তে ইউজারের ডেটা সেট হবে
            if (user) {
                token.user = {
                    id: user._id,
                    number: user.mobile, // Mobile ফিল্ড থেকে number সেট করা হচ্ছে
                };
            }
            return token;
        },
    },

});

export { handler as GET, handler as POST };