import React, { Component } from 'react';
import { Form, Button, InputGroup, Col, Row } from 'react-bootstrap';
import './signup.css'
import { Link, Redirect } from 'react-router-dom';

const signupFormArr = ['firstName', 'lastName', 'username', 'email', 'password', 'cpassword', 'isTerms'];

class SignupComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem('user') || false,
            fields: {
                firstName: null,
                lastName: null,
                username: null,
                email: null,
                password: null,
                cpassword: null,
                isTerms: null
            },
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value.trim();
        const name = signupFormArr.find(element => element === target.name);
        const { fields } = this.state;
        fields[name] = value
        this.setState({ fields });
        console.log(fields)
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        for (let key in fields) {
            if ((fields[key] === null || fields[key] === "") && key !== "isTerms") {
                console.log("key", key)
                formIsValid = false;
                errors[key] = "Cannot be empty"
                this.setState({ errors: errors });
                return formIsValid;
            } else if (key === "username" && fields[key].length < 6) {
                formIsValid = false;
                errors[key] = "username should be minimum 6 letters";
                this.setState({ errors: errors });
            } else if (key === "password" && fields[key].length < 6) {
                formIsValid = false;
                errors[key] = "password should be minimum 6 letters";
                this.setState({ errors: errors });
            } else if (key === "cpassword" && fields[key] !== fields['password']) {
                formIsValid = false;
                errors[key] = "password and confirm password not equal";
                this.setState({ errors: errors });
            }
            //  else if (key === "isTerms" && (fields[key] === false || fields[key] === null)) {
            //     formIsValid = false;
            //     errors[key] = "please select checkbox";
            //     this.setState({ errors: errors });
            // }
            else {
                errors[key] = null
                this.setState({ errors: errors });
            }
        }
        return formIsValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        const { fields, errors } = this.state;
        const { firstName, lastName, email, username, password } = fields;
        if (this.handleValidation()) {
            console.log("sign up data", firstName, lastName, email, username, password);
        } else {
            console.log("Form has errors.", errors);
        }
    };
    render() {
        const { isLoggedIn } = this.state;
        return (
            isLoggedIn ? <Redirect to="/" /> :
                <div>
                    <Row >
                        <Col md={{ offset: 2, span: 8 }} >
                            <h2 className="login-header">Signup Page</h2>
                            <Form noValidate onSubmit={this.handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            name="firstName"
                                            value={this.state.firstName}
                                            onChange={this.handleChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <span style={{ color: "red" }}>{this.state.errors["firstName"]}</span>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            name="lastName"
                                            value={this.state.lastName}
                                            onChange={this.handleChange}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <span style={{ color: "red" }}>{this.state.errors["lastName"]}</span>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a username.</Form.Control.Feedback>
                                        </InputGroup>
                                        <span style={{ color: "red" }}>{this.state.errors["username"]}</span>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            required
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid email.</Form.Control.Feedback>
                                        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            required
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid Password.</Form.Control.Feedback>
                                        <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm Password"
                                            required
                                            name="cpassword"
                                            value={this.state.cpassword}
                                            onChange={this.handleChange} />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid confirm password.</Form.Control.Feedback>
                                        <span style={{ color: "red" }}>{this.state.errors["cpassword"]}</span>
                                    </Form.Group>
                                </Form.Row>
                                {/* <Form.Group>
                                <Form.Check
                                    className={className}
                                    label="Agree to terms and conditions"
                                    name="isTerms"
                                    feedback="You must agree before submitting."
                                    checked={this.state.isTerms}
                                    onChange={this.handleChange}
                                />
                            </Form.Group> */}
                                {/* <span style={{ color: "red" }}>{this.state.errors["isTerms"]}</span> */}
                                <Button type="submit" variant="primary" block>Signup</Button>
                                <Button variant="info" block to="/login" as={Link} >Login</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
        );
    }
}

export default SignupComponent;