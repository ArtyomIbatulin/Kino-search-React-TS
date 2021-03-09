import React from 'react';
import styles from './Search.module.css';

const Search = (props) => {
  return (
    <input
      className={styles.input}
      type='text'
      id='search'
      name='search'
      placeholder='Search...'
      onChange={props.handleInputChange}
      onBlur={props.handleInputOnBlur}
      onFocus={props.handleInputOnFocus}
    />
  );
};

export default Search;
