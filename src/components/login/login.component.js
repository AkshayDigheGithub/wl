import React, { Component } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  ButtonToolbar,
} from "react-bootstrap";
import { Control, actions, LocalForm } from 'react-redux-form';
import "./login.css";
import { connect } from "react-redux";


class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleSubmit(user) {
    console.log("user", user);

  }


  render() {
    const { user } = this.props;
    return (
      <Row>
        <Col md={{ offset: 3, span: 6 }}>
          <h2>Login Page</h2>

          <LocalForm
            model="user"
            onSubmit={(user) => this.handleSubmit(user)}
          >
            <Form.Group id="user.email">
              <Form.Label>Email address</Form.Label>
              <Control.text model="user.email" component="input" id="user.email" />
              {/* <Form.Control model="user.email" placeholder="Enter email" id="user.email" /> */}
            </Form.Group>

            <Form.Group id="user.password">
              <Form.Label>Password</Form.Label>
              <Control.text model="user.password" component="input" id="user.password" />
              {/* <Form.Control model="user.password" placeholder="Password" id="user.password" /> */}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </LocalForm>



          {/* <LocalForm
            model="user"
            onSubmit={(user) => this.handleSubmit(user)}
          >
            <label htmlFor="user.email">First name:</label>
            <Control.text model="user.email" component="input" id="user.email" />
            <br />
            <label htmlFor="user.password">Last name:</label>
            <Control.text model="user.password" component="input" id="user.password" />

            <button type="submit">Login</button>
          </LocalForm> */}
        </Col >
      </Row >
    );
  }
}


function mapStateToProps(state) {
  return { user: state.userLoginInfo };
}

export default connect(mapStateToProps)(LoginComponent);