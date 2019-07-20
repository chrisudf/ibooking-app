import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Container, Col,Row, Button } from "react-bootstrap";
import { login } from "../../src/api/auth";
import Styles from "../styles/login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmericanSignLanguageInterpreting, faUserCircle } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      email: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log({ email, password });
    this.setState({ isFetching: true });
    login(email, password)
      .then(auth => {
        this.setState({ isFetching: false });
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error.response);
        window.alert("invalid username or password");
      });
  };

  render() {
    const Shadow = () => (
      <div className={Styles.shadow}></div>
    );
    const { isFetching, email, password } = this.state;
    return (
      <div className={Styles.loginContainer}>
      <Shadow />
          <Container className={Styles.loginContent}>
            <div>
              <FontAwesomeIcon
                icon={faAmericanSignLanguageInterpreting}
                className={Styles.logo}
              />
            </div>
            <h1>IBooKing User Login</h1>
            <form className={Styles.loginForm} onSubmit={this.handleSubmit}>
              <Col xs={12}>
                <input
                  type="email"
                  name="email"
                  className={Styles.loginFormControl}
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
                  className={Styles.loginFormControl}
                  value={password}
                  onChange={this.handleInputChange}
                  placeholder="Password:"
                  required
                />
              </Col>
              <Col xs={12}>
                <Button
                  className={Styles.loginSubmitBtn}
                  type="submit"
                  loading={isFetching}
                >
                  Sign In
                </Button>
              </Col>
              <Col xs={12} className={Styles.haveAccount}>
                  Don't have an account?
              </Col>
            </form>
          </Container>
      </div>
    );
  }
}

export default withRouter(Login);
