import React from 'react';
import styles from './Filter.module.scss';
import { connect } from 'react-redux';
import { changeRadioSelect } from '../../../store/actions';

const Filter = ({ changeRadio }) => {
  const handleRadioChange = (event) => {
    changeRadio(event.target.value);
  };

  return (
    <div className={styles.radio}>
      <label>
        <input
          type='radio'
          name='radio'
          value='all'
          onChange={handleRadioChange}
          defaultChecked
        />
        Все
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          value='action_movie'
          onChange={handleRadioChange}
        />
        Боевики
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          value='comedy'
          onChange={handleRadioChange}
        />
        Комедии
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          value='fantasy'
          onChange={handleRadioChange}
        />
        Фантастика
      </label>
      <label>
        <input
          type='radio'
          name='radio'
          value='horror'
          onChange={handleRadioChange}
        />
        Ужасы
      </label>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeRadio: (value) => dispatch(changeRadioSelect(value)),
});

export default connect(null, mapDispatchToProps)(Filter);
