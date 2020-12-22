import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';
import PageHeading from '../components/PageHeading/PageHeading';

export default function HomeView() {
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    movieShelfAPI.fetchPopularMovies().then(data => {
      setMovies([...data.results]);
    });
  }, []);

  // console.log(movies);

  return (
    <>
      <PageHeading text="Welcome"></PageHeading>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {
                <Link to={`${url}movies/${movie.id}`}>
                  {movie.title ?? movie.name}
                </Link>
              }
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
