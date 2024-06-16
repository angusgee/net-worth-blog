import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
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
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default page;
