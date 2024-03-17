"use client";

import { Post } from "@prisma/client";
import * as servactions from "@/lib/serveractions";
import { useState } from "react";
import { notFound } from "next/navigation";
import { fetchPostBycontent } from "@/lib/request";

export default function searchPost() {
  const [posts, setPosts] = useState<Post[]>([]);

  const searchform = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search")?.toString() ?? "";

    const fetchedPosts = await fetchPostBycontent(searchQuery);
    if (!fetchedPosts) {
      notFound();
    }

    setPosts(fetchedPosts);
  };
  console.log(JSON.stringify(posts, null, 2));
  return (
    <main className="py-20">
      <h1 className="text-3xl font-bold text-center">Search</h1>
      <form
        onSubmit={searchform}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="search"
          placeholder="search"
          className="border border-grey-300 p-2 rounded-md text-black"
        />
        <button type="submit">search</button>
      </form>
      <h2 className="font-bold p-5">List of Posts</h2>

      <div className="flex flex-wrap gap-5">
        {posts.map((posts) => (
          <div key={posts.id} className="border border-grey-300 p-5 rounded-md">
            <h3>{posts.title}</h3>
            <p>{posts.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
