import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

function App() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [postsperpage, setPostsPerPage] = useState(10);

  const searching = (evt) => {
    if (evt.key === "Enter") {
      newsFetch();
    }
  };

  async function newsFetch() {
    setLoading(true);
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=a676d4bc01294e67a91b2270b6be8ee4`;
    let req = new Request(url);
    const response = await fetch(req);
    const result = await response.json();
    console.log(result);
    setNews(result);
    setQuery("");
    setLoading(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div className="search-bar-area">
          <input
            type="text"
            className="search-bar"
            placeholder="search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={searching}
          />
        </div>
        {/* {typeof news.status != "undefined" ? (
          <ul>
            {news.articles.map((item) => (
              <li key={item.publishedAt}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <p>{item.author}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="search-blank">
            <h2>{news.totalResults}No Results</h2>
          </div>
        )} */}
        <SearchResults news={news} loading={loading} />
      </main>
    </div>
  );
}
export default App;

// search to return results up 10 per page
// under header to contain "latest news" (maybe on carosel?)
//
