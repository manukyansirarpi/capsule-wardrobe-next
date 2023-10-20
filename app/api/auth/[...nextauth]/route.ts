import connectMongoDB from "@/lib/mongodb";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
import User from '@/models/user';
import { verify } from "crypto";
import { validatePassword } from "@/lib/auth";

const config = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            // session: {
            //     jwt: true
            // },
            credentials: {
            },
            async authorize(credentials, req) {
 
                console.log( 'credentials', credentials)
                let user;
                if (credentials) {
                    await connectMongoDB();
                    user = await User.findOne({  'email': credentials.email });
                }
                if (!user) {
                    throw new Error("No user found");
                } else {
                    const isValid = await validatePassword(credentials.password, user.password);
                    if(!isValid) {
                        throw new Error("Could not log you in");
                    }

                return { email: user.email, name: user.name, id: user._id };
                }
            }
        })
    ]
}

const handler = NextAuth(config)
export { handler as GET, handler as POST }