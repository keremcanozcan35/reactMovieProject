import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
}

export const MovieProvider = ({children}) => {
    
    const [favorites,setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        if(storedFavs)  setFavorites(JSON.parse(storedFavs));
    },[]);

    useEffect(() => {
        localStorage.setItem("favorites",JSON.stringify(favorites));
    },[favorites]);

    const addFavorite = (movie) => {
        setFavorites([...favorites,movie]);
    } 

    const removeFavorite = (movie) => {
        setFavorites(favorites.filter(fav => fav.id !== movie.id));
    }
    const isFavorite = (movie) => {
        return favorites.some(fav => fav.id === movie);
    }

    const value = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    }
    
    return  <MovieContext.Provider value={value}>
                {children}
            </MovieContext.Provider>
    

}
