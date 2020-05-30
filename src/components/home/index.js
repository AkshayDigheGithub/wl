import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    console.log("props", props);
  }

  render() {
    return (
      <Fragment>
        <h1>Home Component</h1>
        <Link to="/profile">Profile page</Link>
      </Fragment>
    );
  }
}

export default HomeComponent;
