"use server";

import { User } from "@prisma/client";
import { prisma } from "@/lib/prisma";

import * as bcrypt from "bcrypt";

export async function registerUser(data) {
    let user = {
        name:data.username,
        email:data.email,
        password:data.password
    }
    console.log(user)
    const result = await prisma.user.create({
        data: {
          ...user,
          password: await bcrypt.hash(user.password, 10),
        },
      });
      console.log(result) 
}