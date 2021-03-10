import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <li className={styles.card}>
      <img src={props.poster}></img>
      <p>{props.name}</p>
      <p>{props.genre}</p>
      <p>{props.director}</p>
      <p className={styles.desc} title={props.desc}>
        {props.description}
      </p>
      <p>{props.stars}</p>
    </li>
  );
};

export default Card;
