import React, { Component } from "react";
import { addUser } from "../api/register";
import Styles from "../styles/login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Button } from "react-bootstrap";
import {Link} from "react-router-dom"

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false,
      user: {}
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(preState => {
      const user = { ...preState.user };
      user[name] = value;
      // console.log(user)
      return { user };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = this.state.user;
    // console.log(user)
    this.setState({ isSaving: true });
    addUser(user)
      .then(res => {
        res.status === 200
          ? this.props.history.push("/")
          : console.log("wrong");
        console.log("res=>", res);
      })
      //need to make error handler,an alert window for example
      .catch(error => {
        console.log(error.response);
        window.alert("User already exists");
      });
  };

  render() {
    const Shadow = ({ children }) => (
      <div className={Styles.shadow}>{children}</div>
    );
    const { isFetching, email, password } = this.state;
    return (
      <div className={Styles.registerContainer}>
      <Shadow />
          <Container className={Styles.registerContent}>
            <div>
              <FontAwesomeIcon
                icon={faAmericanSignLanguageInterpreting}
                className={Styles.logo}
              />
            </div>
            <h1>IBooKing User Register</h1>
            <form className={Styles.registerForm} onSubmit={this.handleSubmit}>
              <Col xs={12}>
                <input
                  type="email"
                  name="email"
                  className={Styles.registerFormControl}
                  placeholder={"Email address:"}
                  value={email}
                  onChange={this.handleInputChange}
                  required
                  autoFocus
                />
              </Col>
              <Col xs={12}>
                <input
                  type="password"
                  name="password"
                  className={Styles.registerFormControl}
                  value={password}
                  onChange={this.handleInputChange}
                  placeholder="Password:"
                  required
                />
              </Col>
              <Col xs={12}>
                <Button
                  className={Styles.registerSubmitBtn}
                  type="submit"
                  loading={isFetching}
                >
                  Create your account
                </Button>
              </Col>
              <Col xs={12} className={Styles.haveAccount}>
                <Link to ="/Login">Already have an account?</Link>
              </Col>
            </form>
          </Container>
      </div>
    );
  }
}
