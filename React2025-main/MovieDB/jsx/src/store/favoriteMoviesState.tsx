import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieType } from '../types/movieType';

interface FavoriteMoviesState {
  favorites: MovieType[];
}

const initialState: FavoriteMoviesState = {
  favorites: [],
};

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<MovieType>) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(movie => movie.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;