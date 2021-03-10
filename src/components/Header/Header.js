import React from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import styles from './Header.module.css';

const Header = (props) => (
  <header className={styles.header}>
    <Filter handleRadioChange={props.handleRadioChange} />
    <Search
      handleInputChange={props.handleInputChange}
      handleInputOnBlur={props.handleInputOnBlur}
      handleInputOnFocus={props.handleInputOnFocus}
    />
  </header>
);

export default Header;
