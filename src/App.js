import { Route, Switch } from 'react-router-dom';
// import { lazy } from 'react';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

import HomeView from './views/HomeView';
import MovieDetailView from './views/MovieDetailsView';
import MoviesView from './views/MoviesView';
import NotFoundView from './views/NotFoundView';

// const HomeView = lazy(() =>
//   import('./views/HomeView' /* webpackChunkName: "home-page" */),
// );
// const MovieDetailView = lazy(() =>
//   import('./views/MovieDetailView.js' /* webpackChunkName: "details-page" */),
// );
// const MoviesView = lazy(() =>
//   import('./views/MoviesView.js' /* webpackChunkName: "movies-page" */),
// );
// const NotFoundView = lazy(() =>
//   import('./views/NotFoundView.js' /* webpackChunkName: "404-page" */),
// );

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailView />
        </Route>

        <Route path="/movies">
          <MoviesView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
