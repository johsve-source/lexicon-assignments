import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Channel } from '../interfaces/IChannel';
import {
  UseInfiniteScrollProps,
  UseInfiniteScrollResult,
} from '../interfaces/IUseInfiniteScroll';

const useInfiniteScroll = ({
  url,
}: UseInfiniteScrollProps): UseInfiniteScrollResult => {
  const [data, setData] = useState<{ channels: Channel[] } | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ channels: Channel[] }>(
        `${url}&page=${pageNumber}`
      );
      const newData = response.data;

      if (newData.channels.length > 0) {
        setData((prevData) => ({
          channels: prevData
            ? [...prevData.channels, ...newData.channels]
            : newData.channels,
        }));
      } else {
        setHasMore(false);
      }
      setError('');
    } catch (error) {
      setError('There was an error fetching the data');
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [url, pageNumber]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFetchMore = () => {
    if (!loading && hasMore) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  return { data, error, loading, hasMore, fetchMore: handleFetchMore };
};

export default useInfiniteScroll;
