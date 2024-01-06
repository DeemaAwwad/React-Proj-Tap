import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/LocalStorage";


const FavouritesContext = createContext(null);

export default function FavouritesProvider({ children }) {
  const FAV_key = "fat_items";
  const { getItem, setItem } = useLocalStorage();
  const [favItems, setFavItems] = useState(getItem(FAV_key, []));
  const [isFavOpen, setIsFavOpen] = useState(false);

  useEffect(() => {
    setItem(FAV_key, favItems);
  }, [favItems]);

  function isFavItem(itemID) {
    return favItems.findIndex((item) => item.id === parseInt(itemID)) > -1;
  }

  function addToFavItems({ id, topic, iamge, rating }) {
  
    if (!isFavItem(id)) {
      setFavItems((prev) => [...prev, { id, topic, iamge, rating }]);
    }
    if (!isFavOpen) {
      toggleIsFavOpen();
    }
  }
  function removeFromFavItems(id) {
    setFavItems((prev) => prev.filter((item) => item.id !== id));
  }

  function toggleIsFavOpen() {
    setIsFavOpen((prev) => !prev);
  }

  return (
    <FavouritesContext.Provider
      value={{
        favItems,
        isFavOpen,
        toggleIsFavOpen,
        isFavItem,
        addToFavItems,
        removeFromFavItems,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export const useFavourites = () => {
  return useContext(FavouritesContext);
};
