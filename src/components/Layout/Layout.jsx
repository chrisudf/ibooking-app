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
import {loggedIn} from '../../api/auth'

import {Route} from "react-router-dom"
export default class Layout extends Component {
  render(){
    return (
      <div>
        <Nav />
        {/* {loggedIn() && <Nav />} */} 
        <Route exact path="/" component={Home} />
        <Route exact path="/Post" component={Post} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Cleaning" component={TaskersView} />
        <Route exact path="/tasker/new" component={TaskerEditView} /> 
        <Route exact path="/Task" component={TaskView} />      
        <Footer />
      </div>
    )
  }
}