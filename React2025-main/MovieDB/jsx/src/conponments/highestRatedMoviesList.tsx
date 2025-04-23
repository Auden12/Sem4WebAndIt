import { useFetchHighestRatedMoviesQuery } from "../store/api/moviesApi";
import MovieCard from "./movieCard";
import { MovieType } from "../types/movieType";
function HighestRatedMoviesList() {
  const { data, error, isFetching } = useFetchHighestRatedMoviesQuery({});

  let content;
  if (isFetching) {
    content = <div className="text-center">Loading highest-rated movies...</div>;
  } else if (error) {
    content = <div className="text-center text-danger">Error loading highest-rated movies.</div>;
  } else {
    content = data?.results?.map((movie: MovieType) => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">Highest Rated Movies</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">{content}</div>
    </div>
  );
}

export default HighestRatedMoviesList;