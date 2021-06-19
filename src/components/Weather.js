import React, { useEffect, useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "@fontsource/roboto";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import logo from "../img/pexels-pixabay-209831.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 140,
  },
});
const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(50);
  const [lng, setLng] = useState(0.1);
  let apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1c9ae2425bd9536b22d564fee3e9adf5&units=metric`;
  useEffect(() => {
    const getWeather = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        // console.log(position);
        // console.log(position.coords);
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
        setLat(position.coords.latitude.toFixed(2));
        setLng(position.coords.longitude.toFixed(2));
      });

      const res = await Axios.get(apiCall);
      setWeather(res.data.main);
      console.log(res.data);
    };
    getWeather();
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
          Weather
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {weather.temp} <sup>o</sup>C
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Weather;
