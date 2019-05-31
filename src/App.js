import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from './components/Routes'
import TopNav from './components/TopNav'

export default class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <Routes />
      </div>
    );
  }
}