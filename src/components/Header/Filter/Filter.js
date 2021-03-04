import React from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  return (
    <>
      <div className={styles.radio}>
        <label>
          <input
            type='radio'
            id='all'
            name='radio'
            value='all'
            defaultChecked
          />
          Все
        </label>
        <label>
          <input
            type='radio'
            id='action_movie'
            name='radio'
            value='action_movie'
          />
          Боевики
        </label>
        <label>
          <input type='radio' id='comedy' name='radio' value='comedy' />
          Комедии
        </label>
        <label>
          <input type='radio' id='fantasy' name='radio' value='fantasy' />
          Фантастика
        </label>
        <label>
          <input type='radio' id='horror' name='radio' value='horror' />
          Ужасы
        </label>
      </div>
    </>
  );
};

export default Filter;
