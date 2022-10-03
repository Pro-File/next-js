import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("POST comment: ", data);
    setComments([...comments, data]);
    setComment("");
  };

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    console.log("GET comments: ", data);
    setComments([...data]);
  };

  const handleDeleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log("DELETE comment: ", data);
    fetchComments();
  };

  return (
    <div>
      <button onClick={() => fetchComments()}>Load Comments</button>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              {comment.id} - {comment.text}
              <button onClick={() => handleDeleteComment(comment.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <input
          type={"text"}
          value={comment}
          onChange={(e) => handleCommentChange(e)}
        />
        <button onClick={() => handleCommentSubmit()}>Submit</button>
      </div>
    </div>
  );
};

export default Comments;
