import prisma from "./prisma";

export async function getPosts() {
  try {
    const post = await prisma.post.findMany();
    return post;
  } catch (error) {
    return error;
  }
}
