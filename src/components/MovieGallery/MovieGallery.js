import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import s from './MovieGallery.module.css';

export default function MovieGallery({ filmArr }) {
  const { url } = useRouteMatch();
  const location = useLocation();

  console.log(location.state);
  console.log(location);

  return (
    <>
      {filmArr ? (
        <ul className={s.ImageGallery}>
          {filmArr.map(film => (
            <li key={film.id}>
              <Link
                to={{
                  pathname:
                    location.pathname === '/movies'
                      ? `${url}/${film.id}`
                      : `${url}movies/${film.id}`,
                  // pathname: `${url}movies/${film.id}`,
                  state: { from: location },
                }}
              >
                <img
                  className={s.ImageGalleryItemImage}
                  src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                  alt={film.title}
                />
              </Link>
              <p>{film.original_title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.infoText}>Please enter your query.</p>
      )}
    </>
  );
}
