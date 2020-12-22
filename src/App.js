import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import { Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import MovieDetailView from './views/MovieDetailsView';
import MoviesView from './views/MoviesView';
import NotFoundView from './views/NotFoundView';

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
