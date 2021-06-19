import React, { useEffect, useState } from "react";
import Axios from "axios";
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
  const classes = useStyles();
  return (
    <GridList cellHeight={200} className={classes.gridList} cols={2} rows={5}>
      <GridListTile className={classes.gridSubHeader} key="Subheader" cols={1}>
        <ListSubheader component="div">Top Headlines</ListSubheader>
      </GridListTile>
      {articles.slice(0, 9).map((item) => (
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
  );
};

export default TopHeadlines;
