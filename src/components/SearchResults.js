import React from "react";
<<<<<<< Updated upstream

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
=======
import Pagination from "./Pagination";
import "./Component.css";
const SearchResults = ({
  news,
  loading,
  currentpage,
  postsperpage,
  setCurrentpage,
}) => {
  if (loading) {
    console.log(news);
    return <h2>loading</h2>;
  }
  console.log(news.articles);
  var newsArray = [];
  newsArray = news.articles;

  if (news.status === "ok") {
    //get current news search from query
    const indexOfLastArticle = currentpage * postsperpage;
    const indexOfFirstArticle = indexOfLastArticle - postsperpage;
    const currentArticles = newsArray.slice(
      indexOfFirstArticle,
      indexOfLastArticle
    );
    //change page of search results
    const paginate = (pageNumber) => setCurrentpage(pageNumber);

    console.log(currentArticles);
    console.log(newsArray.length);
    return (
      <div>
        {currentArticles.map((item) => (
          <div key={item.publishedAt}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <p>{item.author}</p>
            <img className="urlimg" src={item.urlToImage} alt="" />
          </div>
        ))}
        <Pagination
          postsperpage={postsperpage}
          totalPosts={newsArray.length}
          paginate={paginate}
        />
      </div>
    );
  } else return <div></div>;
>>>>>>> Stashed changes
};

export default SearchResults;
