import React from "react";

const CommentDetails = ({ comment }) => {
  return (
    <div>
      <h1>Comment Details</h1>
      <h3>
        {comment.id} - {comment.text}
      </h3>
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `http:localhost:3000/api/comments/${params.commentId}`
  );
  const data = await res.json();
  return {
    props: {
      comment: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { commentId: "1" },
      },
      {
        params: { commentId: "2" },
      },
      {
        params: { commentId: "3" },
      },
    ],
    fallback: false,
  };
}

export default CommentDetails;
