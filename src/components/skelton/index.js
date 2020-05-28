import React, { Component } from "react";
import Header from "./header/header.component";
import Footer from "./footer/footer.component";

class Skelton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
}

export default Skelton;
