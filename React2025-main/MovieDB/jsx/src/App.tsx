import './App.css';
import PopularMoviesList from './conponments/popularMoviesList';
import  HighestRatedMoviesList from './conponments/highestRatedMoviesList';

function App() {
  return (
    <div>
      <h1 className="title is-2">Movies from TheMovieDB</h1>
      <PopularMoviesList />
      <HighestRatedMoviesList />


    </div>
  );
}

export default App;