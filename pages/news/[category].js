import React from "react";

const NewsListCategoryWise = ({ articles, category }) => {
  return (
    <div>
      <h1> Displaying records for {category}</h1>
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

export default NewsListCategoryWise;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log("query: ", query);
  // query return the query string of the url which could be used to filter out the filters page
  // params i.e. sharing the e-commerce products page after applying some filters and you are
  // sapposed to apply filters automatically when anyone hit the URL.
  res.setHeader("Set-Cookie", ["name=Arbab"]);
  console.log("cookie: ", req.headers.cookie);
  const result = await fetch(
    `http://localhost:4000/news/?category=${params.category}`
  );
  const data = await result.json();

  return {
    props: {
      articles: data,
      category: params.category,
    },
  };
}
