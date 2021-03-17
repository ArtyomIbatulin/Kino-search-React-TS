import React from 'react';
import styles from './Search.module.scss';
import { connect } from 'react-redux';
import { changeInputSearch } from '../../../store/actions';

const Search = ({ changeInput }) => {
  const handleInputChange = (event) => {
    changeInput(event.target.value);
  };

  return (
    <input
      className={styles.input}
      type='text'
      name='search'
      placeholder='Search...'
      onChange={handleInputChange}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeInput: (value) => dispatch(changeInputSearch(value)),
});

export default connect(null, mapDispatchToProps)(Search);
