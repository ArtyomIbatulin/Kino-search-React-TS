import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  console.log(styles);

  return <div className={styles.card}>10</div>;
};

export default Card;
