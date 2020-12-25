import s from './ListItem.module.css';
import noImg from '../../img/noImg.jpg';

export default function ListItemCast({ id, profile_path, character, name }) {
  return (
    <li key={id} className={s.castItem}>
      <img
        className={s.castImg}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : noImg
        }
        alt={character}
      ></img>

      <p>{name}</p>
    </li>
  );
}
