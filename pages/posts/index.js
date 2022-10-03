import Link from "next/link";
import React from "react";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        return (
          <Link key={post.id} href={`/posts/${post.id}`} passHref>
            <div>
              <p>{post.id}</p>
              <p>{post.title}</p>
              <hr />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PostList;

export async function getStaticProps() {
  console.log("Generating /Regenerating Static Props of Product List");
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data.slice(0, 4),
    },
    revalidate: 10,
    // This Property will alow Next.js to rebuild Static Page Generation for products list
    // after every 10 seconds. It will revalidate by requesting the server and will refetch
    // the latest data. That's the concept of Incremental Static Regeneration(ISR) in Next.js

    // NOTE: If data is changed and you refresh the page after 10 secs you might not see the
    // changes being occured as ISR triggered in the background after the rendering of the cached
    // page was completed and once updated data is fetched it will invalidate the cached page to replace
    // the updated page. Now if you will refresh again then you will see the updated data over the page.
  };
}
