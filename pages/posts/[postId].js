import React from "react";
import { useRouter } from "next/router";

const Post = ({ post }) => {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <h2>Loading....</h2>;
  // }
  return (
    <div>
      <h1>Post Details</h1>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const filteredData = data.slice(0, 4);
  const paths = filteredData.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
    // If fallback is FALSE then any paths not mentioned in the paths array will return 404 Page!

    // If fallback is TRUE then any paths not mentioned in the paths array will return a fallback and after few time it will render the page
    //  along which its HTML and JSON will be generated on run time so that subsequent requests for the same path can serve the generated page

    // If fallback is 'BLOCKING' [STRING] then any paths not mentioned in the paths array will block the UI from which you requested new page
    // and after the page being loaded along generation of its HTML and JSON. It will be rendered over the browser. Subsequent requests behaviour
    // will remain same.
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}
