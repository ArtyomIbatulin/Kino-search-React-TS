import React from 'react';
import styles from './Search.module.css';

const Search = () => {
  return (
    <input
      className={styles.input}
      type='text'
      id='search'
      name='search'
      placeholder='Search...'
    />
  );
};

export default Search;
