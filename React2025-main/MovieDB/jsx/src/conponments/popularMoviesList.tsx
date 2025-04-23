import { useFetchPopularMoviesQuery } from "../store/api/moviesApi";
import MovieCard from "./movieCard";
import { MovieType } from "../types/movieType";



function PopularMoviesList() {
  const { data, error, isFetching } = useFetchPopularMoviesQuery({});

  let content;
  if (isFetching) {
    content = <div className="text-center">Loading popular movies...</div>;
  } else if (error) {
    content = <div className="text-center text-danger">Error loading popular movies.</div>;
  } else {
    content = data?.results?.map((movie: MovieType) => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">Popular Movies</h2>
      <div className="row row-cols-3 row-cols-md-2 m-4">{content}</div>
    </div>
  );
}

export default PopularMoviesList;