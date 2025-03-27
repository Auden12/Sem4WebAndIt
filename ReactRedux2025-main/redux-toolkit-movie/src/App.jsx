import MovieImg from './assets/Image/movie_img.png';
import {MovieList} from './components/MovieList';
import {MoviePoster} from './components/MoviePoster';
import {MoviePlot} from './components/MoviePlot';
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="mt-4 p-5 bg-dark text-white rounded">
        <h1>React-Redux Movies <img alt="Movie" src={MovieImg}></img> </h1>  
         This small React-App demonstrates the use of React-Redux for the communication between child-components
      </div> 
      <div className="row mt-4">
        <div className="col-sm-1"></div>
        <div className="col-sm-4">
            <MovieList />
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
            <MoviePoster />
        </div>
        <div className="col-sm-1"></div>
      </div>
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-8">
            <MoviePlot />
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}

export default App
