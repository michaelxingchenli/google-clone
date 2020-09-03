import React, { useState, useEffect } from "react";
import firebase from "firebase";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  //use firebase config for production, and local .env for local dev
  const apikey =
    process.env.NODE_ENV === "production"
      ? firebase.config().api.key
      : process.env.REACT_APP_API_KEY;
  const contextkey =
    process.env.NODE_ENV === "production"
      ? firebase.config().context.key
      : process.env.REACT_APP_CONTEXT_KEY;
  const url = `https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${contextkey}&q=${term}`;

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
