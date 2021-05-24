import Axios from "axios";
import React, { useEffect, useState } from "react";

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
  return (
    <div>
      <h2>{covid.dead} dead</h2>
      <h2>{covid.confirmed} confirmed</h2>
      <h2>{covid.recovered} recovered</h2>
    </div>
  );
};

export default Covid;
