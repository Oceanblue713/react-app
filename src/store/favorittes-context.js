import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0
});

function FavoritesContextProvider(props) {

  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    // setUserFavorites(userFavorites.concat(favoriteMeetup));
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoritHandler = (meetupId) => {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetupId => meetupId.id !== meetupId);
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some(meetup => meetup.id === meetupId);
  };


  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}