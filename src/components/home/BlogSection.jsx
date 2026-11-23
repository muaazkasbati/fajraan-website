import React from "react";
import BlogCard from "../BlogCard";
import Button from "../Button";
import SectionHead from "../SectionHead";

export default function BlogSection({ posts = [], index = "07" }) {
  if (!posts?.length) return null;

  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          index={index}
          eyebrow="Journal"
          title="Notes on building better software."
          aside={<Button variant="text" link href="/blog">All articles</Button>}
        />
        <div className="mt-14 grid gap-x-8 gap-y-12 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((data, i) => (
            <BlogCard data={data} index={i} key={data.id || i} />
          ))}
        </div>
      </div>
    </section>
  );
}
