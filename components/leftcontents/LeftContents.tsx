import React from "react";
import Explore from "./Explore";
import About from "./About";
import Featured from "./Featured";
import { Post } from "@/typings";

type Props = {
  posts: Post[];
};

const LeftContents = ({ posts }: Props) => {
  return (
    <div className="py-10">
      <Explore />
      <About />
      <Featured posts={posts} />
    </div>
  );
};

export default LeftContents;
