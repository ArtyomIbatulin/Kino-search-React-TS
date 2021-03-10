import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <li className={styles.card}>
      <img src={props.poster}></img>
      <p className={styles.desc}>{props.name}</p>
      <p className={styles.desc}>{props.genre}</p>
      <p className={styles.desc}>{props.director}</p>
      <p className={styles.desc} title={props.desc}>
        {props.desc}
      </p>
      <p className={styles.desc}>{props.stars}</p>
    </li>
  );
};

export default Card;
