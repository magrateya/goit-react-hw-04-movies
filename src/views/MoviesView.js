import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';

import PageHeading from '../components/PageHeading/PageHeading';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieGallery from '../components/MovieGallery/MovieGallery';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();
  const [film, setFilm] = useState([]);
  const [query, setQuery] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const searchURL = new URLSearchParams(location.search).get('search');

  const onSearchChange = query => {
    history.push({ ...location, search: `search=${query}` });
  };

  useEffect(() => {
    if (!query && searchURL !== null) {
      movieShelfAPI
        .fetchMoviesByQuery(searchURL)
        .then(data => setFilm([...data.results]));

      return;
    }
    if (query) {
      movieShelfAPI.fetchMoviesByQuery(query).then(data => {
        setFilm([...data.results]);
      });
    }
  }, [query, searchURL]);

  const onChangeQuery = query => {
    setQuery(query);
    setFilm([]);
    onSearchChange(query);
  };

  // console.log(film);
  // console.log(location);

  return (
    <>
      <PageHeading text="Find movie"></PageHeading>
      <SearchForm onSubmit={onChangeQuery} />
      <MovieGallery filmArr={film} />
    </>
  );
}
