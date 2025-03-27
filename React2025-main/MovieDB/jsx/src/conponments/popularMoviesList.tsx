import { useFetchPopularMoviesQuery } from "../store/api/moviesApi";
import MovieCard from "./movieCard";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

interface MoviesData {
  results: Movie[];
}

function PopularMoviesList() {
  const { data, error, isFetching } = useFetchPopularMoviesQuery({}) as {
    data: MoviesData;
    error: any;
    isFetching: boolean;
  };

  let content;
  if (isFetching) {
    content = <div>Loading;</div>;
  } else if (error) {
    content = <div>Error loading movies.</div>;
  } else {
    content = data.results.map((movie: Movie) => {
      return <MovieCard key={movie.id} movie={movie}></MovieCard>;
    });
  }
  return <div className="row row-cols-3 row-cols-md-2 m-4">{content}</div>;
}

export default PopularMoviesList;