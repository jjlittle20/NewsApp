import Axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../img/pexels-cdc-3993212.jpg";
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
const Covid = () => {
  // https://www.trackcorona.live/api/countries
  const [covid, setCovid] = useState([]);
  useEffect(() => {
    const getCovid = async () => {
      const res = await Axios.get("https://www.trackcorona.live/api/countries");
      setCovid(res.data.data[18]);
      //   console.log(res);
      //   console.log(res.data);
      //   console.log(res.data.data);
      //   console.log(res.data.data[18]);
      //   console.log(res.data.data[18].dead);
    };
    getCovid();
  }, []);
  const classes = useStyles();

  return (
    <Card elevation={0}>
      <CardMedia
        className={classes.media}
        image={logo}
        title="Cloudy sky image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Covid-19 Latest
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {covid.dead} - Deaths
          <br></br>
          {covid.confirmed} - Confirmed Cases
          <br></br>
          {covid.recovered} - Recovered Cases
          <br></br>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Covid;
