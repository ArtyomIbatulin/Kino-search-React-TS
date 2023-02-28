import React, { Component } from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';
import styles from './Header.module.scss';

type PropsType = {
  checkCords: () => void
}

type StateType = {
  scroll: boolean
}

class Header extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      scroll: false,
    };
  }

  checkCords = () => {
    if (pageYOffset >= 1 && this.state.scroll === false) {
      this.setState({
        scroll: true,
      });
    }
    if (pageYOffset < 1 && this.state.scroll === true) {
      this.setState({
        scroll: false,
      });
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
        className={this.state.scroll ? styles.headerScroll : styles.header}
      >
        <Filter />
        <Search />
      </header>
    );
  }
}

export default Header;
