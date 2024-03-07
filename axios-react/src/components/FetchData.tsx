import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

interface FetchDataProps {
  url: string;
  render: (data: unknown) => JSX.Element;
  autoFetch?: boolean;
}

const FetchData: React.FC<FetchDataProps> = ({
  url,
  render,
  autoFetch = false,
}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setError('');
    } catch (error) {
      setError('There was an error fetching the data');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url]);

  // useEffect to automatically fetch data if autoFetch is true
  useEffect(() => {
    autoFetch && fetchData();
  }, [url, autoFetch, fetchData]);

  return (
    <div>
      {!autoFetch && (
        <button className="autofetch-button" onClick={fetchData}>
          Fetch Data
        </button>
      )}
      {loading && <div className="autofetch-loading">Loading...</div>}
      {error && <div className="autofetch-error">{error}</div>}
      {data && render(data)}
    </div>
  );
};

export default FetchData;
