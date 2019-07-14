import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { LoadingButton } from '../UI/Button';
import { login } from '../../src/api/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,  
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    this.setState({ isFetching: true });
    login(email, password).then(auth => {
      this.setState({ isFetching: false });
      this.props.history.push('/');
    });
  }

  render() {
    const {isFetching, email, password} = this.state;
    return (
      <div className="container">
        <form className="jr-form-signin" onSubmit={this.handleSubmit}>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            value={email}
            onChange={this.handleInputChange}
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Password"
            required
          />

          <LoadingButton
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            loading={isFetching}>
            Sign in
          </LoadingButton>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
