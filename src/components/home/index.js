import React, { Component, Fragment } from "react";

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    console.log("props", props);
  }

  render() {
    const { email } = JSON.parse(localStorage.getItem('user'))
    return (
      <Fragment>
        <h1>Home Component</h1>
        <h4>User Email is <span style={{ color: "red" }}>{email}</span></h4>
      </Fragment>
    );
  }
}

export default HomeComponent;
