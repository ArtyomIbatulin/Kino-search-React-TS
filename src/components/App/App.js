import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header handleInputChange={this.handleInputChange} />
        <Gallery />
        <Footer />
      </>
    );
  }
}
