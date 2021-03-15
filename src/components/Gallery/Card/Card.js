import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  const { poster, name, genre, director, desc, description, rating } = props;

  return (
    <li className={styles.card}>
      <div className={styles.divImg}>
        <img src={poster} className={styles.img} />
      </div>
      <p className={styles.pName}>{name}</p>
      <p>{genre}</p>
      <p>{director}</p>
      <p className={styles.pDesc} title={desc}>
        {description}
      </p>
      <div className={styles.rating}>{rating}</div>
    </li>
  );
};

export default Card;
