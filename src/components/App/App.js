import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
// import { films } from '../App/db';

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   films: films,
    //   radioSelect: 'all',
    //   searchText: '',
    // };
  }

  handleRadioChange = (event) => {
    this.setState({
      radioSelect: event.target.value,
    });
  };

  handleInputChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  render() {
    return (
      <>
        <Header
          handleRadioChange={this.handleRadioChange}
          handleInputChange={this.handleInputChange}
        />
        <Gallery
        // films={this.state.films}
        // radioSelect={this.state.radioSelect}
        // searchText={this.state.searchText}
        />
        <Footer />
      </>
    );
  }
}
