import React, {Component} from "react"
import Nav from "./TopNav"
import Footer from "./Footer"
import Routes from "../../components/Routes"
import '../../styles/global.scss'
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