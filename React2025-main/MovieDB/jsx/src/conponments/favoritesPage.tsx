import { useSelector } from "react-redux";
import { RootState } from "../store";
import MovieCard from "./movieCard";

function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favoriteMovies.favorites); // favurit fra redux store

  let content;
  if (favorites.length === 0) {
    content = <div className="text-center">You have no favorite movies yet.</div>;
  } else {
    content = favorites.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">Your Favorite Movies</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">{content}</div>
    </div>
  );
}

export default FavoritesPage;