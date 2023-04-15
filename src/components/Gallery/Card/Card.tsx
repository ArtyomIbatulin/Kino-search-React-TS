import React, { FC } from 'react';
import styles from './Card.module.scss';
import { FilmsType } from '../../../store/reducers';



const Card: FC<FilmsType> = (props) => {
  const {  poster, name, genre, director, desc, description } = props;

  return (
    <li className={styles.card}>
      <div className={styles.divImg}>
        <img src={poster} alt={name} className={styles.img} />
      </div>
      <p className={styles.pName}>{name}</p>
      <p>{genre}</p>
      <p>{director}</p>
      <p className={styles.pDesc} title={desc}>
        <a href={description} rel="noreferrer" target="_blank">
          Описание
        </a>
      </p>
      <div className={styles.rating}>{props.children}</div>
    </li>
  );
};

export default Card;
