import { useState, useEffect } from "react";

function useFetch(url = "", options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      let res = await fetch(url, options);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      let data = await res.json();
      setData(data);
    } catch (err) {
      setError(err.message || "Some Error Occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered with URL:", url, "and options:", options);
    fetchData();
  }, [url, options]);

  return { data, loading, error };
}

export default useFetch;
