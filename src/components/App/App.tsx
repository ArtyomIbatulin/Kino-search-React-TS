import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";

type PropsType = {
}



export default class App extends Component<PropsType>{
  constructor(props: PropsType) {
    super(props)
  }



  render() {
    return (
      <>
        <Header />
        <Gallery />
        <Footer />
      </>
    );
  }
}
