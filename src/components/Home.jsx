import React, { Component } from "react";
// import Layout from '../components/Layout/Layout'
import Banner from '../components/Homepage/HomeBanner'
import { Helmet } from "react-helmet"
import Guide from "../components/Homepage/HowItWork"
import Service from "../components/Homepage/OurService"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Welcome to IBOOKING</title>
        </Helmet>
        <Banner />
        <Guide />
        <Service />
      </div>
    );
  }
}