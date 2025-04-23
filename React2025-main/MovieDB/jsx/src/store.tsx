import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesApi } from './store/api/moviesApi';
import favoriteMoviesReducer from './store/favoriteMoviesState';

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, // Movies API reducer
    favoriteMovies: favoriteMoviesReducer, // Add the favoriteMovies reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware), // Add the moviesApi middleware
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;