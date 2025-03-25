import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";

import MovieCard from "../components/MovieCard";

function  Favorite(){

    const { favorites } = useMovieContext();


    if (favorites) {
        return (
            <div className="favorites">
                <h1>Favorite Movies</h1>
                <div className="favorite-movies">
                    {favorites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h1>No Favorites Yet</h1>
            <p>Favorite movies will show up here when you add new</p>
        </div>
    );
}

export default Favorite;