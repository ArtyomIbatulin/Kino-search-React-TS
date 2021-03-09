import React from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Filter handleChange={props.handleRadioChange} />
      <Search />
    </header>
  );
};

export default Header;
