import React from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Filter handleChange={props.handleChange} />
      <Search />
    </header>
  );
};

Header.propTypes = {
  handleChange: PropTypes.string.isRequired,
};

export default Header;
