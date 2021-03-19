import React, { Component } from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import styles from './Header.module.scss';
import { connect } from 'react-redux';
import { changeHeaderScroll } from '../../store/actions';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  checkCords = () => {
    if (pageYOffset >= 1 && this.props.scroll === false) {
      this.props.changeHeader(true);
    }
    if (pageYOffset < 1 && this.props.scroll === true) {
      this.props.changeHeader(false);
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.checkCords);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkCords);
  }

  render() {
    return (
      <header
        className={this.props.scroll ? styles.headerScroll : styles.header}
      >
        <Filter />
        <Search />
      </header>
    );
  }
}

// const Header = ({ scroll, changeHeader }) => {
//   const checkCords = () => {
//     if (pageYOffset >= 1 && scroll === false) {
//       window.removeEventListener('scroll', checkCords);
//       changeHeader(true);
//     }
//     if (pageYOffset < 1 && scroll === true) {
//       window.removeEventListener('scroll', checkCords);
//       changeHeader(false);
//     }
//   };

//   window.addEventListener('scroll', checkCords);

//   return (
//     <header className={scroll ? styles.headerScroll : styles.header}>
//       <Filter />
//       <Search />
//     </header>
//   );
// };

const mapStatetoProps = (state) => {
  return {
    scroll: state.scroll,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeHeader: (scroll) => dispatch(changeHeaderScroll(scroll)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(Header);
