import React, { Component } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  FormCheck,
  Button,
  ButtonToolbar,
} from "react-bootstrap";
import "./login.css";
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "email" ? target.value : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onSubmitHandle(event) {
    event.preventDefault();
    console.log(this.state);
    sessionStorage.setItem("login", true);
  }

  render() {
    return (
      <Row>
        <Col md={{ offset: 3, span: 6 }}>
          <h2>Login Page</h2>
          <Form onSubmit={this.onSubmitHandle}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                checked
                type="password"
                placeholder="Enter password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <ButtonToolbar>
              <Button
                variant="primary"
                block
                className="login-button"
                type="submit"
              >
                Login
              </Button>
            </ButtonToolbar>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default LoginComponent;
