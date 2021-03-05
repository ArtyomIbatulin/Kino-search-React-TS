import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <img src='https://upload.wikimedia.org/wikipedia/ru/7/7a/Spider-Man_3%2C_International_Poster.jpg'></img>
      <p>Человек паук</p>
      <p>Фантастика</p>
      <p>Режиссер:</p>
      <p>Описание:</p>
      <p>Рейтинг: 5</p>
    </div>
  );
};

export default Card;
