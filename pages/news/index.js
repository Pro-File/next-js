import React from "react";

const NewsList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.category}
            </h2>
            <p>
              {article.title} | {article.description}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
}
