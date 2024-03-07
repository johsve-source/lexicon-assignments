import React, { useEffect } from 'react';
import { Channel } from '../interfaces/IChannel';

interface FetchDataProps {
  data: { channels: Channel[] } | null;
  render: (data: { channels: Channel[] }) => JSX.Element;
  loading: boolean;
  error: string;
  hasMore: boolean;
  fetchMore: () => void;
}

const FetchData: React.FC<FetchDataProps> = ({
  data,
  render,
  loading,
  error,
  hasMore,
  fetchMore,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchMore();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchMore]);

  return (
    <div>
      {data?.channels && render({ channels: data.channels })}
      {loading && <span className="loader"></span>}
      {error && <div>Error: {error}</div>}
      {!loading && !hasMore && <div>No more data</div>}
    </div>
  );
};

export default FetchData;
