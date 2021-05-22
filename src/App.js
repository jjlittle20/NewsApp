import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import { SearchResults } from "./components/SearchResults";

import TopHeadlines from "./components/TopHeadlines";

function App() {
  const [query, setQuery] = useState("");
<<<<<<< Updated upstream
  const [news, setNews] = useState("");
  var url = `https://newsapi.org/v2/everything?q=${query}&apiKey=a676d4bc01294e67a91b2270b6be8ee4`;
  var articleNumber = 0;
  var req = new Request(url);
  const search = (evt) => {
=======
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [postsperpage] = useState(5);

  const searching = (evt) => {
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
=======
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
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://newsapi.org/v2/everything?q=coin&apiKey=a676d4bc01294e67a91b2270b6be8ee4`
  //     )
  //     .then((result) => setTopHeadlines(result.topHeadlines));

  //   console.log(topHeadlines);
  // }, []);
  // useEffect(() => {
  //   var url =
  //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=a676d4bc01294e67a91b2270b6be8ee4";
  //   var req = new Request(url);
  //   const res = fetch(req);
  //   const resu = res.json();
  //   console.log(resu);
  //   setTopHeadlines(resu);
  // }, []);

>>>>>>> Stashed changes
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
            onKeyPress={search}
          />
        </div>

<<<<<<< Updated upstream
        <SearchResults news={news} articleNumber={articleNumber} />
        <SearchResults news={news} articleNumber={articleNumber + 1} />
        <SearchResults news={news} articleNumber={articleNumber + 2} />
        <SearchResults news={news} articleNumber={articleNumber + 3} />
        <SearchResults news={news} articleNumber={articleNumber + 4} />
=======
        <SearchResults
          news={news}
          loading={loading}
          currentpage={currentpage}
          postsperpage={postsperpage}
          setCurrentpage={setCurrentpage}
        />
>>>>>>> Stashed changes
      </main>
    </div>
  );
}

export default App;

// search to return results up 10 per page
// under header to contain "latest news" (maybe on carosel?)
//
