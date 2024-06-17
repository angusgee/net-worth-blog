import React from "react";
import { Post } from "@/typings";

type Props = {
  posts: Post[];
};

const Featured = ({ posts }: Props) => {
  return (
    <div>
      {/* {posts.map((post) => (
        <div key={post.name}>{post.title}</div>
      ))} */}
    </div>
  );
};

export default Featured;
