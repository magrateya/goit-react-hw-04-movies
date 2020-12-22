import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';

export default function MovieCastSubView() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieShelfAPI.fetchCast(movieId).then(data => {
      setCast([...data.cast]);
    });
  }, [movieId]);

  // console.log(cast);
  return (
    <>
      {cast && (
        <ul>
          {cast.map(item => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                alt={item.character}
              ></img>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
