"use server";

import prisma from "./prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_noStore as noStore } from "next/cache";
import { Content } from "next/font/google";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  noStore();
  if (req.method === "POST") {
    const searchquery = req.body.search;
    const post = await prisma.post.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchquery,
            },
          },
          {
            content: {
              contains: searchquery,
            },
          },
        ],
      },
    });
    res.json(post);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

export async function fetchPosts() {
  // equivalent to doing fetch, cache: no-store
  noStore();

  try {
    const data = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts");
  }
}

export async function fetchPostById(id: string) {
  noStore();

  try {
    const data = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch post");
  }
}

export async function fetchPostBycontent(searchquery: string) {
  noStore();

  try {
    const data = await prisma.post.findMany({
      where: {
        OR: [
          {
            content: {
              contains: searchquery,
              mode: "insensitive",
            },
          },
          {
            title: {
              contains: searchquery,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        _relevance: {
          fields: ["title"],
          search: searchquery,
          sort: "desc",
        },
      },
    });

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch post");
  }
}
