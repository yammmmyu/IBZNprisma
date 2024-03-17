import { Post } from "@prisma/client";
import * as servactions from "@/lib/serveractions";
import { useState } from "react";

import SearchPost from "./search";

export default function Home() {
  return (
    <main className="py-20">
      <div>
        <SearchPost />
      </div>

      {/* <h1 className="text-3xl font-bold text-center">Register</h1>
      <form
        action={servactions.newUserAction}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="username"
          placeholder="username"
          className="border border-grey-300 p-2 rounded-md text-black"
        />
        <input
          name="unhashedpassword"
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

      <h1 className="text-3xl font-bold text-center">New Post</h1>
      <form
        action={servactions.newPostAction}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="title"
          placeholder="title"
          className="border border-grey-300 p-2 rounded-md text-black"
        />
        <input
          name="content"
          placeholder="content"
          className="border border-grey-300 p-2 rounded-md text-black"
        />
        <button type="submit">Submit</button>
      </form>

      <h1 className="text-3xl font-bold text-center">New Profile</h1>
      <form
        action={servactions.newProfileAction}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          name="bio"
          placeholder="bio"
          className="border border-grey-300 p-2 rounded-md text-black"
        />
        <input
          name="grade_level"
          placeholder="grade_level"
          className="border border-grey-300 p-2 rounded-md text-black"
        />
        <input
          name="school"
          placeholder="school"
          className="border border-grey-300 p-2 rounded-md text-black"
        />
        <button type="submit">Submit</button>
      </form>
      <h1 className="text-3xl font-bold text-center">Server Action Test</h1> */}
    </main>
  );
}
