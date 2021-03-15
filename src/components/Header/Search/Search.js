import React from 'react';
import styles from './Search.module.scss';

const Search = (props) => (
  <input
    className={styles.input}
    type='text'
    name='search'
    placeholder='Search...'
    onChange={props.handleInputChange}
  />
);

export default Search;
