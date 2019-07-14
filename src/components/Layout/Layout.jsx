import React, {Component} from "react"
import Nav from "./TopNav"
import Footer from "./Footer"
import Register from "../../components/Register"
import Home from "../../components/Home"
import Post from "../../components/Post"
import Login from "../../components/Login"
import Cleaning from "../../components/Cleaning"


import {Route} from "react-router-dom"


export default class Layout extends Component {
  render(){
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/Post" component={Post} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Cleaning" component={Cleaning} />
        <Footer />
      </div>
    )
  }
}