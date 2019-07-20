import React, {Component} from "react"
import Nav from "./TopNav"
import Footer from "./Footer"
import Register from "../../components/Register"
import Home from "../../components/Home"
import Post from "../../components/Post"
import Login from "../../components/Login"
import TaskersView from "../../components/Tasker/TaskersView"
import TaskerEditView from "../../components/Tasker/TaskerEditView"
import TaskView from "../../components/Task/TaskView"
import Profile from "../../components/Seeker/Profile"
import Routes from "../../components/Routes"
import {Route,Redirect,withRouter} from "react-router-dom"
import '../../styles/global.scss'
// import { BrowserRouter as Route,Redirect,withRouter} from "react-router-dom";
import {loggedIn} from "../../api/auth";
export default class Layout extends Component {
  render(){
    return (
      <div className='background-color'>
        <Nav />
        <Routes />
        <Footer />
      </div>
    )
  }
}