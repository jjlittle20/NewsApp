import Axios from "axios";
import React, { useEffect, useState } from "react";
var BtcLow;
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
      console.log(res.data[0]);
      //   console.log(res.data[0].close);
      //   console.log(res.data.data[18].dead);
    };
    getCrypto();
  }, []);

  return (
    <div>
      {/* <h2>{crypto.open.toFixed(3)} open</h2>
      <h2>{crypto.close.toFixed(3)} close</h2>
      <h2>{crypto.high.toFixed(3)} high</h2>
      <h2>{crypto.low.toFixed(3)} low</h2> */}
    </div>
  );
};

export default Crypto;
