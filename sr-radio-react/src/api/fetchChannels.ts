import { useEffect, useState } from 'react';

interface Channel {
  id: number;
  name: string;
  liveAudioUrl: string;
}

export const useFetchChannels = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch(
          'https://api.sr.se/v2/scheduledepisodes?channelid=132&format=json'
        );
        if (!response.ok) {
          throw new Error('Something went wrong while fetching the channels');
        }
        const data = await response.json();
        const loadedChannels = data.schedule.map((channelData: any) => ({
          id: channelData.channel.id,
          name: channelData.channel.name,
          liveAudioUrl: channelData.channel.liveaudio.url,
        }));
        setChannels(loadedChannels);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchChannels();
  }, []);
  return { channels, isLoading, error };
};
