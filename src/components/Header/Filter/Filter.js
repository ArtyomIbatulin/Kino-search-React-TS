import React from 'react';
import styles from './Filter.module.css';

const Filter = (props) => {
  return (
    <>
      <div className={styles.radio}>
        <label>
          <input
            type='radio'
            id='all'
            name='radio'
            value='all'
            onChange={props.handleChange}
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
            onChange={props.handleChange}
          />
          Боевики
        </label>
        <label>
          <input
            type='radio'
            id='comedy'
            name='radio'
            value='comedy'
            onChange={props.handleChange}
          />
          Комедии
        </label>
        <label>
          <input
            type='radio'
            id='fantasy'
            name='radio'
            value='fantasy'
            onChange={props.handleChange}
          />
          Фантастика
        </label>
        <label>
          <input
            type='radio'
            id='horror'
            name='radio'
            value='horror'
            onChange={props.handleChange}
          />
          Ужасы
        </label>
      </div>
    </>
  );
};

export default Filter;
