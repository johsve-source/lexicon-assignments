import { Channel } from '../interfaces/IChannel';

export interface UseInfiniteScrollProps {
  url: string;
}

export interface UseInfiniteScrollResult {
  data: { channels: Channel[] } | null;
  error: string;
  loading: boolean;
  hasMore: boolean;
  fetchMore: () => void;
}
