import { MovieCard } from "../components/MovieCard";

import { useState , useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";

import "../css/Home.css";

export function Home() {

const [searchQuery, setSearchQuery] = useState("");

 const [movies, setMovies] = useState([]);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    const loadPopularMovies = async () => {
      try{
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
      } catch (error) {
        setError(error);
      }finally {
        setLoading(false);
      }
    }
    loadPopularMovies(); 
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    
    if (!searchQuery.trim()) {
      return;
    }
    if(loading) return;
    setLoading(true);

    try {
      const searchResults = await searchMovies(searchQuery);  
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search movies");
      
    }finally{
      setLoading(false);
    }


    setSearchQuery("");
  };

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for a movie" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        {error && <p className="error-message">{error.message}</p>}

        {loading ? (<p>Loading...</p>) :
        
        <div className="movies-grid">
        {movies.map((movie) => ( movie.title.toLowerCase()
        .startsWith(searchQuery.toLowerCase())
         && <MovieCard key={movie.id} movie={movie} />
   
        ))}
      </div>
        
        }
      
    </div>
  );
}

export default Home;