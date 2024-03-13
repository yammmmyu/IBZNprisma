"use server";

import { newUser } from "./posts";

export const newUserAction = async (e: FormData) => {
  const username = e.get("username")?.toString();
  const password = e.get("password")?.toString();
  const email = e.get("email")?.toString();
  console.log(username, password, email);
  if (!username || !password || !email) return;

  await newUser(username, password, email);
};
