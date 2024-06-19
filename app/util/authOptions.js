import GoogleProvider from 'next-auth/providers/google';
import NextAuth from "next-auth/next";
import connectDB from '../../config/database';
import User from '../../models/User';

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        })
      ],
      callbacks: {
        async signIn({ profile }) {
            // 1. Connect to teh database
            await connectDB();
            // 2. Check if user exists
            const userExists = await User.findOne({ email: profile.email });
            // 3. If not then add user to database
            if (!userExists) {
                // Truncate user name if too long
                const username = profile.name.slice(0, 20);
        
                await User.create({
                  email: profile.email,
                  username,
                  image: profile.picture,
                });
              }
            // 4. Return true to allow sign in
            return true;

        //   if (account.provider === "google") {
        //     return profile.email_verified && profile.email.endsWith("@example.com")
        //   }
        //   return true // Do different verification for other providers that don't have `email_verified`
        },
        // Modifies the session
        async session({session}) {
            // 1. Get user from the database
            const user = await User.findOne({ email: session.user.email });
            // 2. Assign the user id to the session
            session.user.id = user._id.toString();
            // 3 . return the session
            return session;
        }
      }
  }
  export default NextAuth(authOptions)