import React, {Component} from "react"
import Nav from "./TopNav"
import Footer from "./Footer"
import Register from "../../components/Register"
import Task from "../../components/Task"
import Home from "../../components/Home"
import {Route} from "react-router-dom"


export default class Layout extends Component {
  render(){
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Task" component={Task} />
        <Footer />
      </div>
    )
  }
}