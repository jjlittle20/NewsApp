import Axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../img/pexels-pixabay-315788.jpg";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 140,
  },
});

const Crypto = () => {
  const [crypto, setCrypto] = useState([]);
  useEffect(() => {
    const getCrypto = async () => {
      const res = await Axios.get(
        "https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/latest"
      );
      setCrypto(res.data[0]);
      //   console.log(res);
      //   console.log(res.data);

      //   console.log(res.data[0].close);
      //   console.log(res.data.data[18].dead);
    };
    getCrypto();
  }, []);
  const classes = useStyles();
  return (
    // <div>
    //   <h2>{crypto.open} open</h2>
    //   <h2>{crypto.close} close</h2>
    //   <h2>{crypto.high} high</h2>
    //   <h2>{crypto.low} low</h2>
    // </div>
    <Card elevation={0}>
      <CardMedia
        className={classes.media}
        image={logo}
        title="Cloudy sky image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          BitCoin Latest
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {Math.round(crypto.open * 100) / 100} - Open
          <br></br>
          <br></br>
          {Math.round(crypto.close * 100) / 100} - Close
          <br></br>
          <br></br>
          {Math.round(crypto.high * 100) / 100} - High
          <br></br>
          <br></br>
          {Math.round(crypto.low * 100) / 100} - Low
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Crypto;
