import { useEffect, useState } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const localFavorites = localStorage.getItem('favorites');
    return localFavorites ? JSON.parse(localFavorites) : [];
  });

  const addFavorite = (id: number) => {
    const updatedFavorites = [...favorites, id];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter(
      (favoriteId) => favoriteId !== id
    );
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return { favorites, addFavorite, removeFavorite };
};
