import axios from "axios";
import React, { useState, useEffect } from "react";

function GoogleRating() {
  const [rating, setRating] = useState(4.83);

  async function fetchRating() {
    const playStoreUrl =
      "https://play.google.com/store/apps/details?id=com.khalidwar.anonaddy";

    const config = {
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Methods":
        //   "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      },
    };
    const response = await axios.get("https://google.com", config);
    console.log(response.data.headers);
    console.log(response);
  }

  useEffect(() => {
    // fetchRating();
  }, []);

  return (
    <div>
      <p>⭐{rating}</p>
    </div>
  );
}

export default GoogleRating;
