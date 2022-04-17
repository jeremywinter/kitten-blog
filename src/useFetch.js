import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      setTimeout(() => {
        fetch(url) // npx json-server --watch data/db.json --port 8001
          .then(res => {
            if (!res.ok) {
              throw Error('Could not fetch the data for that resource.');
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsLoading(false);
            setError(null);
          })
          .catch(err => {
            setIsLoading(false);
            setError(err.message);
          })   
      }, 1000);
    }, [url]);

    return { data, isLoading, error }
  }

export default useFetch;