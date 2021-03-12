import React from 'react';
import styles from './Filter.module.scss';

const Filter = (props) => (
  <div className={styles.radio}>
    <label>
      <input
        type='radio'
        id='all'
        name='radio'
        value='all'
        onChange={props.handleRadioChange}
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
        onChange={props.handleRadioChange}
      />
      Боевики
    </label>
    <label>
      <input
        type='radio'
        id='comedy'
        name='radio'
        value='comedy'
        onChange={props.handleRadioChange}
      />
      Комедии
    </label>
    <label>
      <input
        type='radio'
        id='fantasy'
        name='radio'
        value='fantasy'
        onChange={props.handleRadioChange}
      />
      Фантастика
    </label>
    <label>
      <input
        type='radio'
        id='horror'
        name='radio'
        value='horror'
        onChange={props.handleRadioChange}
      />
      Ужасы
    </label>
  </div>
);

export default Filter;
