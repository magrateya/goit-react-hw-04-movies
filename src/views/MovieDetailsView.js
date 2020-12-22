import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';

import PageHeading from '../components/PageHeading/PageHeading';
import MovieCastSubView from '../views/MovieCastCubView';
import MovieReviewersSubView from '../views/MovieReviewersSubView';

export default function MovieDetailView() {
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieShelfAPI.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  //   console.log(movie);

  return (
    <>
      <PageHeading text="Movie details"></PageHeading>

      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <h2>{movie.original_title}</h2>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
      )}
      <hr />
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Route path={`${path}/cast`} component={MovieCastSubView}></Route>
      <Route path={`${path}/reviews`} component={MovieReviewersSubView}></Route>
    </>
  );
}
