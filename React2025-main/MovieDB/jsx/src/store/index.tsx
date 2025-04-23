import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesApi } from './api/moviesApi';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, //dette er en mere sikker måde, ungår "typo's"
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware ables RTK query
    return getDefaultMiddleware()
    .concat(moviesApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchPopularMoviesQuery } from './api/moviesApi';