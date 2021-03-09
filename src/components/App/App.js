import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioSelect: 'all',
      searchText: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      radioSelect: event.target.value,
    });
    console.log(this.state.radioSelect);
  };

  render() {
    return (
      <>
        <Header handleChange={this.handleChange} />
        <Gallery />
        <Footer />
      </>
    );
  }
}
