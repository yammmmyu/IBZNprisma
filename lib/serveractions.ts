"use server";

import * as actions from "./posts";

export const newUserAction = async (e: FormData) => {
  const username = e.get("username")?.toString();
  const unhashedpassword = e.get("unhashedpassword")?.toString();
  const email = e.get("email")?.toString();
  console.log("serveraction" + username, unhashedpassword, email);

  if (!username || !unhashedpassword || !email) return;

  await actions.newUser(username, unhashedpassword, email);
};

export const newPostAction = async (e: FormData) => {
  const title = e.get("title")?.toString();
  const content = e.get("content")?.toString();
  console.log("serveraction" + title, content);

  if (!title || !content) return;

  await actions.newPost(title, content);
};

export const newProfileAction = async (e: FormData) => {
  const bio = e.get("bio")?.toString();
  const grade_level = e.get("grade_level")?.toString();
  const school = e.get("school")?.toString();
  console.log("serveraction" + bio, grade_level, school);

  if (!bio || !grade_level || !school) return;

  await actions.newProfile(bio, grade_level, school);
};
