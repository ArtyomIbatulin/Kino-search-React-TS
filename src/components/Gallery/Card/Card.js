import React from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

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

Card.propTypes = {
  poster: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
};

export default Card;
