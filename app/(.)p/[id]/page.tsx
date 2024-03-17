import { fetchPostById, fetchPostBycontent } from "@/lib/request";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function PostModal({ params: { id } }: Props) {
  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  console.log(post);

  return post;
}

export default PostModal;
