import { useEffect, useState } from "react";

// The SWAPI spreads its species' objects across four pages. Defining the function here separately will make App.js less cluttered.
function FetchFromSwapi(rootUrl, endPoint) {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch(rootUrl + endPoint)
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [rootUrl, endPoint]);

  return fetchedData;
}

export default FetchFromSwapi;
