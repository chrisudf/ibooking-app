import React, { Component } from "react";
// import { BrowserRouter} from "react-router-dom";
import Routes from './components/Routes'
import Layout from './components/Layout/Layout'
import Banner from './components/Homepage/HomeBanner'
import { Helmet } from "react-helmet"
import Guide from "./components/Homepage/HowItWork"
import Service from "./components/Homepage/OurService"

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Welcome to IBOOK</title>
          <link href="/" />
        </Helmet>
        <Banner />
        <Guide />
        <Service />
        <Routes />
      </Layout>
    );
  }
}