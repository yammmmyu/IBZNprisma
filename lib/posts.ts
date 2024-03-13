"use server";

import prisma from "./prisma";

export async function getPosts() {
  try {
    const post = await prisma.post.findMany();
    return post;
  } catch (error) {
    return error;
  }
}

export async function newUser(
  username: string,
  password: string,
  email: string
) {
  try {
    const user = await prisma.user.create({
      data: { username, password, email },
    });
    return { user };
  } catch (error) {
    return error;
  }
}
