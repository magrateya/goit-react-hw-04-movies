import { useState, useEffect } from 'react';
// import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';
import MovieGallery from '../components/MovieGallery/MovieGallery';

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  // const { url } = useRouteMatch();
  // const location = useLocation();

  useEffect(() => {
    movieShelfAPI.fetchPopularMovies().then(data => {
      setMovies([...data.results]);
    });
  }, []);

  return (
    <>
      <PageHeading text="Welcome"></PageHeading>

      <MovieGallery filmArr={movies} />

      {/* {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {
                <Link
                  to={{
                    pathname: `${url}movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title ?? movie.name}
                </Link>
              }
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
}
