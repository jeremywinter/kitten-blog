import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

      setTimeout(() => {
        fetch(url, {signal: abortController.signal}) // npx json-server --watch data/db.json --port 8001
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
            if (err.name === "AbortError") {
              console.log('fetch aborted');
            } else {
              setIsLoading(false);
              setError(err.message);
            }
          })   
      }, 1000);

      return () => abortController.abort();
    }, [url]);

    return { data, isLoading, error }
  }

export default useFetch;