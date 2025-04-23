import { Routes, Route, Link } from 'react-router-dom';
import HighestRatedMoviesList from "./conponments/highestRatedMoviesList";
import PopularMoviesList from "./conponments/popularMoviesList";
import Home from './conponments/home';
import MovieImg from './assets/pics/mb.jpg';
import FavoritesPage from "./conponments/favoritesPage";

function App() {
  return (
    <div>
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/popular" className="nav-item nav-link">Popular</Link>
            <Link to="/highest-rated" className="nav-item nav-link">Highest Rated</Link>
            <Link to="/favorites" className="nav-item nav-link">Favorites</Link>
          </nav>
        </div>
        <span className="h1">React Moviefinder <img className="rounded movie_img m-3" src={MovieImg} width="75" height="75" /></span>
        <span className="d-flex justify-content-between p-0">This small App demonstrates React, Redux-Toolkit, RTK Query, and React-Router</span>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<PopularMoviesList />} />
        <Route path="/highest-rated" element={<HighestRatedMoviesList />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;