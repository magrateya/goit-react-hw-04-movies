import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import s from './SearchForm.module.css';

export default function SearchForm({ onSubmit, filmArr }) {
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }
    onSubmit(query);

    setQuery('');
  };
  console.log(filmArr);
  return (
    <>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          value={query}
          onChange={handleChange}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
      {filmArr.length > 0 ? (
        <ul className={s.ImageGallery}>
          {filmArr.map(film => (
            <li key={film.id}>
              <Link to={`${url}/${film.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                  alt={film.title}
                />
              </Link>
              <p>{film.original_title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please enter your query.</p>
      )}
    </>
  );
}
