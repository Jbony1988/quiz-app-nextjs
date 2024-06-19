import NextAuth from "next-auth/next";
import authOptions, { AuthOptions } from "../../../util/authOptions";


const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}