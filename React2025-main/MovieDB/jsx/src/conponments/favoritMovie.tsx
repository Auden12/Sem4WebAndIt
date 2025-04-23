import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addFavorite, removeFavorite } from "../store/favoriteMoviesState";
import { MovieType } from "../types/movieType";

function FavoritMovie({ movie }: { movie: MovieType }) {
  const dispatch = useDispatch(); // hook til dispatch til redux store
  const favorites = useSelector((state: RootState) => state.favoriteMovies.favorites); // tjekker om filmen allerede er favorit

  const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`btn ${isFavorite ? "btn-danger" : "btn-primary"} btn-sm`}
    >
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}

export default FavoritMovie;