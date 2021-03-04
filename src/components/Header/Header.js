import React from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Filter />
      <Search />
    </header>
  );
};

export default Header;
