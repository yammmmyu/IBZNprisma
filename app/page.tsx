import { getPosts } from "@/lib/posts";
import { Post } from "@prisma/client";
import { main } from "@/create";

interface PostData {
  id: string;
  title: string;
  content: string;
  authorid: string;
}

export default async function Home() {
  const posts: Post[] = (await getPosts()) as Post[];

  main();

  return (
    <main className="py-20">
      <h1 className="text-3xl font-bold text-center">Server Action Test</h1>

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
