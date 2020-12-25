import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api';
import ListItemCast from '../components/ListItem/ListItem';

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
        <ul style={{ display: 'flex', flexWrap: 'wrap', margin: '-10px' }}>
          {cast.map(item => (
            <ListItemCast
              key={item.id}
              profile_path={item.profile_path}
              character={item.character}
              name={item.name}
            />
          ))}
        </ul>
      )}
    </>
  );
}
