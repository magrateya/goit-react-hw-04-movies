import { useState, useEffect } from 'react';
import * as movieShelfAPI from '../services/movieshelf-api';

import PageHeading from '../components/PageHeading/PageHeading';
import SearchForm from '../components/SearchForm/SearchForm';

export default function MoviesView() {
  const [film, setFilm] = useState([]);
  const [query, setQuery] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    movieShelfAPI.fetchMoviesByQuery(query).then(data => {
      setFilm([...data.results]);
    });
  }, [query]);

  const onChangeQuery = query => {
    setQuery(query);
    setFilm([]);
  };

  // console.log(film);
  return (
    <>
      <PageHeading text="Find movie"></PageHeading>
      <SearchForm onSubmit={onChangeQuery} filmArr={film} />
    </>
  );
}
