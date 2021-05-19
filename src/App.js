import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import { SearchResults } from "./components/SearchResults";

function App() {
  const [query, setQuery] = useState("");
  const [news, setNews] = useState("");
  var url = `https://newsapi.org/v2/everything?q=${query}&apiKey=a676d4bc01294e67a91b2270b6be8ee4`;
  var articleNumber = 0;
  var req = new Request(url);
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(req)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setNews(result);
        });
      setQuery("");
    }
  };

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
            onKeyPress={search}
          />
        </div>

        <SearchResults news={news} articleNumber={articleNumber} />
        <SearchResults news={news} articleNumber={articleNumber + 1} />
        <SearchResults news={news} articleNumber={articleNumber + 2} />
        <SearchResults news={news} articleNumber={articleNumber + 3} />
        <SearchResults news={news} articleNumber={articleNumber + 4} />
      </main>
    </div>
  );
}

export default App;

// search to return results up 10 per page
// under header to contain "latest news" (maybe on carosel?)
//
