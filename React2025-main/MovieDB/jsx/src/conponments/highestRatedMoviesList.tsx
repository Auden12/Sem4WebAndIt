import { useFetchHighestRatedMoviesQuery } from '../store/api/moviesApi';
import { MovieType } from '../types/movieType';
import MovieCard from './movieCard';

const HighestRatedMoviesList = () => {
  const { data, error, isFetching } = useFetchHighestRatedMoviesQuery({}); // Pass an empty object or required parameters

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error loading highest-rated movies.</div>;

  return (
    <div>
      <h2>Highest Rated Movies</h2>
      <ul>
        {data?.results
          ?.filter((movie: MovieType) => movie.poster_path !== null && movie.vote_average !== 0) // Filter movies
          .map((movie: MovieType) => (
            <MovieCard key={movie.id} movie={movie} />
            
          ))}
      </ul>
    </div>
  );
};

export default HighestRatedMoviesList;