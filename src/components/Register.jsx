import React , {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import { LoadingButton } from '../UI/Button';
import Styles from "../styles/nav.module.scss"
import {addUser} from "../api/register"
export default class Register extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isSaving: false,
      user:{}
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((preState) => {
      const user = { ...preState.user };
      user[name] = value;
      // console.log(user)
      return { user };
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user =this.state.user
    // console.log(user)
    this.setState({ isSaving: true });
    addUser(user)
    .then(res=>{
      res.status ===200? (this.props.history.push('/')):(console.log("wrong"))
      console.log('res=>',res);})
      //need to make error handler,an alert window for example
    .catch(error =>{
      console.log(error.response)
      window.alert("User already exists")
    })
    }
    

  render(){
    const {isFetching, username, password} = this.state;
    return (
      <div className="container">
        <form className="jr-form-signin" onSubmit={this.handleSubmit}>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            name="username"
            className="form-control"
            placeholder="Email address"
            value={username}
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
            Register
          </LoadingButton>
        </form>
      </div>
    );
  }
}

