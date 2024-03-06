import axios from 'axios';
import { useState, useEffect } from 'react';

interface FetchDataProps {
  url: string;
  render: (data: any) => JSX.Element;
  autoFetch?: boolean;
}

const FetchData: React.FC<FetchDataProps> = ({ url, render, autoFetch = false }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
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
  };

  // useEffect to automatically fetch data if autoFetch is true
  useEffect(() => {
    {autoFetch && fetchData();}
  }, [url, autoFetch]);

  return (
    <div>
      {!autoFetch && <button className='autofetch-button' onClick={fetchData}>Fetch Data</button>}
      {loading && <div className='autofetch-loading'>Loading...</div>}
      {error && <div className='autofetch-error'>{error}</div>}
      {data && render(data)}
    </div>
  );
};

export default FetchData;