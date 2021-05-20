import React from "react";
const SearchResults = ({ news, loading }) => {
  if (loading) {
    console.log(news);
    return <h2>loading</h2>;
  }
  console.log(news.articles);
  var newsArray = [];
  newsArray = news.articles;
  if (news.status === "ok") {
    return (
      <ul>
        {newsArray.map((item) => (
          <li key={item.publishedAt}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <p>{item.author}</p>
          </li>
        ))}
      </ul>
    );
  } else return <div></div>;
};

export default SearchResults;
