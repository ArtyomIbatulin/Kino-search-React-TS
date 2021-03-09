import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.poster}></img>
      <p>{props.name}</p>
      <p>{props.genre}</p>
      <p>{props.director}</p>
      <p>{props.description}</p>
      <p>{props.stars}</p>
    </div>
  );
};

export default Card;
