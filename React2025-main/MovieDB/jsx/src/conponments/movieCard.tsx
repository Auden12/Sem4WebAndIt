import FavoritMovie from "./favoritMovie";
import { MovieType } from "../types/movieType";

function MovieCard({ movie }: { movie: MovieType }) {
  const posterBasePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";

  return (
    <div className="col-lg-2 mb-4">
      <div className="card position-relative">
        <img
          src={posterBasePath + movie.poster_path}
          className="card-img-top"
          alt={movie.title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview.substring(0, 125)}...</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-muted">{movie.release_date}</span>
            <span className="badge bg-warning text-dark">{movie.vote_average}</span>
          </div>
          <div className="mt-3">
            <FavoritMovie movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;