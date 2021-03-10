import React from 'react';
import styles from './Stars.module.css';

const Stars = (props) => {
  return (
    <div className={styles.rating}>
      <label title='Оценка «5»'>
        <input
          className={styles.inp}
          type='radio'
          id='star-5'
          name='rating'
          value='5'
          onChange={props.handleStarsChange}
        />
      </label>
      <label title='Оценка «4»'>
        <input
          className={styles.inp}
          type='radio'
          id='star-4'
          name='rating'
          value='4'
          onChange={props.handleStarsChange}
        />
      </label>
      <label title='Оценка «3»'>
        <input
          className={styles.inp}
          type='radio'
          id='star-3'
          name='rating'
          value='3'
          onChange={props.handleStarsChange}
        />
      </label>
      <label title='Оценка «2»'>
        <input
          className={styles.inp}
          type='radio'
          id='star-2'
          name='rating'
          value='2'
          onChange={props.handleStarsChange}
        />
      </label>
      <label title='Оценка «1»'>
        <input
          className={styles.inp}
          type='radio'
          id='star-1'
          name='rating'
          value='1'
          onChange={props.handleStarsChange}
        />
      </label>
    </div>
  );
};

export default Stars;
