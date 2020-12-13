import { useState, useEffect } from 'react';

export const useFetch = (uri) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!uri) return;

    const getAPIData = async () => {
      try {
        const response = await fetch(uri);
        if (response.status >= 200 && response.status <= 299) {
          const data = await response.json();
          setData(data);
          setLoading(false);
        } else {
          setLoading(false);
          setError(`${response.status} - ${response.statusText}`);
        }
      } catch (error) {}
    };

    getAPIData();

    // fetch(uri)
    //   .then((data) => data.json())
    //   .then(setData)
    //   .then(() => setLoading(false))
    //   .catch(setError);
  }, [uri]);

  return { loading, data, error };
};
