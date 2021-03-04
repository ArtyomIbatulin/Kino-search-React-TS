import React from 'react';
import styles from './Search.module.css';

const Search = () => {
  console.log(styles);

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
