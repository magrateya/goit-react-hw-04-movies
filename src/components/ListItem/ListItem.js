import s from './ListItem.module.css';

export default function ListItemCast({ id, profile_path, character, name }) {
  return (
    profile_path && (
      <li key={id} className={s.castItem}>
        <img
          className={s.castImg}
          src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
          alt={character}
        ></img>
        <p>{name}</p>
      </li>
    )
  );
}
