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
    />
  );
};

export default Search;
