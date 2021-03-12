import React from 'react';
import styles from './Filter.module.scss';

const Filter = (props) => (
  <div className={styles.radio}>
    <label>
      <input
        type='radio'
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
        name='radio'
        value='action_movie'
        onChange={props.handleRadioChange}
      />
      Боевики
    </label>
    <label>
      <input
        type='radio'
        name='radio'
        value='comedy'
        onChange={props.handleRadioChange}
      />
      Комедии
    </label>
    <label>
      <input
        type='radio'
        name='radio'
        value='fantasy'
        onChange={props.handleRadioChange}
      />
      Фантастика
    </label>
    <label>
      <input
        type='radio'
        name='radio'
        value='horror'
        onChange={props.handleRadioChange}
      />
      Ужасы
    </label>
  </div>
);

export default Filter;
