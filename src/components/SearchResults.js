import React from "react";

export const SearchResults = ({ news, articleNumber }) => {
  return (
    <div>
      {typeof news.status != "undefined" ? (
        <div className="article-two">
          <h3 className="article-two-title">
            {news.articles[articleNumber].title}
          </h3>
          <h6 className="article-two-author-source">
            {news.articles[1].author},{" "}
            {news.articles[articleNumber].source.name}
          </h6>
          <span className="article-two-content">
            {news.articles[articleNumber].content}
          </span>
          {
            <a className="read-link" href={news.articles[articleNumber].url}>
              read here
            </a>
          }
          <img
            className="article-two-img"
            src={news.articles[articleNumber].urlToImage}
            alt={news.articles[articleNumber].title}
          />
        </div>
      ) : (
        <div className="search-blank">{news.message}</div>
      )}
      );
    </div>
  );
};

export default SearchResults;
