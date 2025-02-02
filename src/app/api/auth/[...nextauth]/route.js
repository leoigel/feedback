import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";

import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: "Credentials",
      
            credentials: {
              username: {
                label: "User Name",
                type: "text",
                placeholder: "Your User Name",
              },
              password: {
                label: "Password",
                type: "password",
              },
            },
            async authorize(credentials) {
              const user = await prisma.user.findUnique({
                where: {
                  email: credentials?.username,
                },
              });
      
              if (!user) throw new Error("User name or password is not correct");
      
              if (!credentials?.password) throw new Error("Please Provide Your Password");

              const isPassowrdCorrect = await bcrypt.compare(credentials.password, user.password);
      
              if (!isPassowrdCorrect) throw new Error("User name or password is not correct");
      
              const { password, ...userWithoutPass } = user;
              return userWithoutPass;
            },
          }),
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };