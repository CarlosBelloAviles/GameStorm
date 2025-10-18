import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useScrollToTopOnChange = () => {
  const { page, genre } = useSelector(state => state.games);

  useEffect(() => {
    const mainElement = document.querySelector('.AllGames');
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [page, genre]);
};