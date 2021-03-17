import React from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import styles from './Header.module.scss';
import { connect } from 'react-redux';
import { changeHeaderScroll } from '../../store/actions';

const Header = ({ scroll, changeHeader }) => {
  const checkCords = () => {
    if (pageYOffset >= 1 && scroll === false) {
      window.removeEventListener('scroll', checkCords);
      changeHeader(true);
    }
    if (pageYOffset < 1 && scroll === true) {
      window.removeEventListener('scroll', checkCords);
      changeHeader(false);
    }
  };

  window.addEventListener('scroll', checkCords);

  return (
    <header className={scroll ? styles.headerScroll : styles.header}>
      <Filter />
      <Search />
    </header>
  );
};

const mapStatetoProps = (state) => {
  return {
    scroll: state.scroll,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeHeader: (scroll) => dispatch(changeHeaderScroll(scroll)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
