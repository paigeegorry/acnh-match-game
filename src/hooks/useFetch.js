import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
      if (!url) return;
      const fetchData = async () => {
          setLoading(true);
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
          setLoading(false);
      };

      fetchData();
  }, [url]);

  return { loading, data };
};
