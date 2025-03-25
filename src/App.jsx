
import { MovieCard } from './components/MovieCard';
import Favorite from './pages/Favorites';
import {Home} from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar  from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import Footer from './components/Footer';


export function App() {


  return (
    <MovieProvider>
<NavBar />
    
<main className='main-content'>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/favorites" element={<Favorite />} />
  </Routes>
</main>
<Footer />
</MovieProvider>
  );
}

export default App;


