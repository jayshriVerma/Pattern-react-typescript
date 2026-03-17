import { useState, useEffect } from "react";

const DataFetcher = ({ url, children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);
  // Assuming the API returns an array of users
  //Passsing the data to the children as a render prop as function
  if (loading) {
    return <div>Loading...</div>;
  }
  return children({ data, loading });
};

export default DataFetcher;
