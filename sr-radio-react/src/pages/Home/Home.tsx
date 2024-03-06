import { useFavorites } from '../../hooks/useFavorites';
import { useFetchChannels } from '../../api/fetchChannels';
import { RadioChannelList } from '../../components/RadioChannelList';

export default function Home() {
  const { channels, isLoading, error } = useFetchChannels();

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  return (
    <div className="home">
      <header className="home-header">
        <h1>Channels</h1>
      </header>
      <main>
        <RadioChannelList
          channels={channels}
          favorites={favorites}
          onAddFavorite={addFavorite}
          onRemoveFavorite={removeFavorite}
        />
      </main>
    </div>
  );
}
