import GoogleProvider from 'next-auth/providers/google';
import NextAuth from "next-auth/next";

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
        async signIn({ account, profile }) {
            // 1. Connect to teh database
            // 2. Check if user exists
            // 3. If not then add user to database
            // 4. Return true to allow sign in

        //   if (account.provider === "google") {
        //     return profile.email_verified && profile.email.endsWith("@example.com")
        //   }
        //   return true // Do different verification for other providers that don't have `email_verified`
        },
        // Modifies the session
        async session({session}) {
            // 1. Get user from the database
            // 2. Assign the user id to the session
            // 3 . return the session
        }
      }
  }
  export default NextAuth(authOptions)