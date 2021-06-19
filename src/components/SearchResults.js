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
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import CallMade from "@material-ui/icons/CallMade";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {},
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  gridSubHeader: {
    textAlign: "center",
    color: "rgba(0, 0, 0,1)",
  },
}));

const SearchResults = ({ news, loading }) => {
  const classes = useStyles();
  if (loading) {
    console.log(news);
    return <h2>loading</h2>;
  }
  console.log(news.articles);
  var newsArray = [];

  newsArray = news.articles;
  if (news.status === "ok") {
    return (
      // <div>
      //   {newsArray.slice(0, 5).map((item) => (
      //     <div key={item.publishedAt}>
      //       <h2>{item.title}</h2>
      //       <p>{item.content}</p>
      //       <p>{item.author}</p>
      //     </div>
      //   ))}
      // </div>
      <div>
        <GridList
          cellHeight={200}
          className={classes.gridList}
          cols={2}
          rows={5}
        >
          <GridListTile
            className={classes.gridSubHeader}
            key="Subheader"
            cols={1}
          >
            <ListSubheader component="div">Search Results</ListSubheader>
          </GridListTile>
          {newsArray.slice(0, 9).map((item) => (
            <GridListTile key={item.urlToImage} cols={item.cols || 1}>
              <img src={item.urlToImage} alt={item.title} />
              <GridListTileBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.title}`}
                    className={classes.icon}
                    href={item.url}
                    target="_blank"
                  >
                    <CallMade />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  } else return <div></div>;
>>>>>>> Stashed changes
};

export default SearchResults;
