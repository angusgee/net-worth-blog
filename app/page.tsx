import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Post } from "@/typings";

const query = groq`
*[_type == "post"] {
  ...,
  author ->,
} | order(_createdAt, desc)
`;

const page = async () => {
  const posts = await client.fetch(query);
  console.log("Posts", posts);
  return (
    <div>
      {posts.map((post: Post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
};

export default page;
