"use server";

import { serialize } from "v8";
import prisma from "./prisma";
import bcrypt from "bcrypt";

export async function newUser(
  username: string,
  unhashedpassword: string,
  email: string
) {
  try {
    const password = await bcrypt.hash(unhashedpassword, 10);

    const user = await prisma.user.create({
      data: { username, password, email },
    });
    return { user };
  } catch (error) {
    return error;
  }
}

export async function newPost(title: string, content: string) {
  try {
    console.log(title, content);
    const post = await prisma.post.create({
      data: {
        title,
        content,
        author: { connect: { id: "c7813839-a9c1-4ef8-8076-8f40cb0822a8" } },
        category: {
          connectOrCreate: {
            where: {
              id: 1,
            },
            create: {
              id: 1,
              name: "languages",
            },
          },
        },
      },
    });
    return { post };
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function newProfile(
  bio: string,
  grade_level: string,
  school: string
) {
  try {
    console.log(bio, grade_level, school);
    const post = await prisma.profile.create({
      data: {
        bio,
        grade_level,
        school,
        user: { connect: { id: "c7813839-a9c1-4ef8-8076-8f40cb0822a8" } },
      },
    });
    return { post };
  } catch (error) {
    console.log(error);
    return error;
  }
}
