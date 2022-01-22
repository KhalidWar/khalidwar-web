import React, { useState, useEffect } from "react";
import axios from "axios";

function AppleRatings() {
  const [rating, setRating] = useState("");

  async function fetchRatings() {
    const appStoreUrl = "https://itunes.apple.com/lookup?id=1547461270";
    const response = await axios(appStoreUrl);
    const userRating = response.data.results[0].averageUserRating;
    const fixedUserRating = userRating.toFixed(1);

    setRating(fixedUserRating);
  }

  useEffect(async () => {
    fetchRatings();
  }, []);

  return (
    <div>
      <p>⭐{rating}</p>
    </div>
  );
}

export default AppleRatings;
