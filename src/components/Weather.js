import React, { useEffect, useState } from "react";
import Axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      console.log(position.coords);
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      var getLatitude = position.coords.latitude.toFixed(2);
      var getLongitude = position.coords.longitude.toFixed(2);
      console.log(getLatitude);
      console.log(getLongitude);
    });
    const getWeather = async () => {
      const res = await Axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=1c9ae2425bd9536b22d564fee3e9adf5"
      );
      setWeather(res.data.main);
      console.log(res.data);
    };
    getWeather();
  }, []);
  return (
    <div>
      <p>{weather.temp}</p>
    </div>
  );
};

export default Weather;
