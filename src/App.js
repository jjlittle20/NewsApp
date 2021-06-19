import "./App.css";
import React, { useState } from "react";
<<<<<<< Updated upstream
import Header from "./components/Header";
import { SearchResults } from "./components/SearchResults";
=======
import SearchResults from "./components/SearchResults";
import Weather from "./components/Weather";
import TopHeadlines from "./components/TopHeadlines";
import Covid from "./components/Covid";
import Crypto from "./components/Crypto";
import Grid from "@material-ui/core/Grid";
import { Container, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import BusinessSection from "./components/BusinessSection";
import FinanceSection from "./components/FinanceSection";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
  },
  containerBackground: {
    backgroundColor: "#fafafa",
  },
  title: {
    fontfamily: "Cinzel Decorative",
  },
  weathertile: {
    height: 50,
  },
  SearchGrow: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",

    display: "flex",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
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
  const classes = useStyles();
  return (
    <body>
      <br></br>
      <div className={classes.root}>
        <Typography
          className={classes.title}
          variant="h1"
          component="h2"
          gutterBottom
        >
          The World News
        </Typography>
      </div>

      <div className={classes.SearchGrow}>
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyDown={searching}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </div>
      <Container className={classes.containerBackground}>
        <Divider />
        <br></br>
        <br></br>
        <div>
          <SearchResults
            news={news}
            loading={loading}
            currentpage={currentpage}
            postsperpage={postsperpage}
            setCurrentpage={setCurrentpage}
>>>>>>> Stashed changes
          />

          <Grid container spacing={3}>
            <Grid item xs={12} md={9}>
              <TopHeadlines />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={12} md={2}>
              <GridList cellHeight={350} cols={1} rows={3}>
                <GridListTile cols={1} rows={1}>
                  <Crypto />
                </GridListTile>
                <GridListTile cols={1} rows={1}>
                  <Covid />
                </GridListTile>
                <GridListTile className={classes.weathertile} cols={1} rows={1}>
                  <Weather />
                </GridListTile>
              </GridList>
            </Grid>
          </Grid>
          <br></br>
          <br></br>
          <Divider />
          <br></br>
          <br></br>
        </div>

<<<<<<< Updated upstream
        <SearchResults news={news} articleNumber={articleNumber} />
        <SearchResults news={news} articleNumber={articleNumber + 1} />
        <SearchResults news={news} articleNumber={articleNumber + 2} />
        <SearchResults news={news} articleNumber={articleNumber + 3} />
        <SearchResults news={news} articleNumber={articleNumber + 4} />
      </main>
    </div>
=======
        <BusinessSection />
        <br></br>
        <br></br>
        <Divider />
        <br></br>
        <br></br>
        <FinanceSection />
      </Container>
    </body>
>>>>>>> Stashed changes
  );
}

export default App;
