import React, { useEffect, useState } from "react";
import Axios from "axios";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

const TopHeadlines = () => {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=a676d4bc01294e67a91b2270b6be8ee4"
      );
      setarticles(res.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      <div>
        <Carousel>
          {articles.slice(0, 5).map((item) => (
            <div key={item.publishedAt}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <p>{item.author}</p>
              <img className="urlimg" src={item.urlToImage} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TopHeadlines;

// var url =
// "https://newsapi.org/v2/top-headlines?country=us&apiKey=a676d4bc01294e67a91b2270b6be8ee4";
// var req = new Request(url);
// const res = fetch(req);
// const resu = res.json();
// console.log(resu);
