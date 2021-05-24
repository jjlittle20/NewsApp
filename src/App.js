import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Weather from "./components/Weather";

import TopHeadlines from "./components/TopHeadlines";
import Covid from "./components/Covid";
import Crypto from "./components/Crypto";

function App() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [postsperpage] = useState(5);

  const searching = (evt) => {
    if (evt.key === "Enter") {
      newsFetch();
    }
  };

  async function newsFetch() {
    setLoading(true);
    var url = `https://newsapi.org/v2/everything?q=${query}&apiKey=a676d4bc01294e67a91b2270b6be8ee4`;
    var req = new Request(url);
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
        <div>
          <TopHeadlines />
        </div>

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
        <Weather />
        <SearchResults
          news={news}
          loading={loading}
          currentpage={currentpage}
          postsperpage={postsperpage}
          setCurrentpage={setCurrentpage}
        />
        <Covid />
        <Crypto />
      </main>
    </div>
  );
}

export default App;

// search to return results up 10 per page
// under header to contain "latest news" (maybe on carosel?)
//
