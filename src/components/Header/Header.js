import React from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import styles from './Header.module.scss';

const Header = (props) => (
  <header className={styles.header}>
    <Filter handleRadioChange={props.handleRadioChange} />
    <Search handleInputChange={props.handleInputChange} />
  </header>
);

export default Header;

// убрать ?
