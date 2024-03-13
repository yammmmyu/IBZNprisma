import { getPosts } from "@/lib/posts";
import { Post } from "@prisma/client";
import { main } from "@/create";
import { newUserAction } from "@/lib/serveractions";

export default async function Home() {
  const posts: Post[] = (await getPosts()) as Post[];

  main();

  return (
    <main className="py-20">
      <h1 className="text-3xl font-bold text-center">Server Action Test</h1>
      <form
        action={newUserAction}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="username"
          placeholder="username"
          className="border border-grey-300 p-2 rounded-md text-black"
        />
        <input
          name="password"
          placeholder="password"
          className="border border-grey-300 p-2 rounded-md text-black"
        />
        <input
          name="email"
          placeholder="email"
          className="border border-grey-300 p-2 rounded-md text-black"
        />
        <button type="submit">Submit</button>
      </form>

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
