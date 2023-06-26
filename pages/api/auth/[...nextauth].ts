import { authOptions } from "@/lib/Auth";
import NextAuth from "next-auth/next";

export default NextAuth(authOptions)