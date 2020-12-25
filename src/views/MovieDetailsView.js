import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import {
  NavLink,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';

import PageHeading from '../components/PageHeading/PageHeading';
// import MovieCastSubView from '../views/MovieCastCubView';
// import MovieReviewersSubView from '../views/MovieReviewersSubView';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import Loader from '../components/Loader/Loader';

const MovieCastSubView = lazy(() =>
  import('../views/MovieCastCubView' /* webpackChunkName: "cast" */),
);
const MovieReviewersSubView = lazy(() =>
  import('../views/MovieReviewersSubView' /* webpackChunkName: "rewiew" */),
);

export default function MovieDetailView() {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const HandleGoBackClick = () => {
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push('/');

    // history.push(location?.state?.from || '/');
  };

  return (
    <>
      <GoBackBtn onBackClick={HandleGoBackClick} />

      {movie && (
        <div style={{ display: 'flex' }}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div style={{ marginLeft: '50px' }}>
            <h2>{movie.original_title}</h2>
            <p>{movie.vote_average}</p>
            <p>{movie.release_date}</p>
            <p>{movie.runtime} minutes</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      <hr />
      <PageHeading text="Aditional information"></PageHeading>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location.state ? location.state.from : '/' },
            }}
            // to={`${url}/cast`}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location.state ? location.state.from : '/' },
            }}
            // to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr />

      <Suspense fallback={<Loader />}>
        <Route path={`${path}/cast`}>
          <MovieCastSubView />
        </Route>
        <Route path={`${path}/reviews`}>
          <MovieReviewersSubView />
        </Route>
      </Suspense>
    </>
  );
}
