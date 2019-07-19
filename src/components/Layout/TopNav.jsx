import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Styles from "../../styles/nav.module.scss"
import {Link} from "react-router-dom"
import { withRouter } from 'react-router-dom';
import {loggedIn , logout} from "../../api/auth";

export const LoaderLine = () => (
  <div>
    <span className={Styles.expand} />
  </div>
)
class TopNav extends React.Component{
  render(){
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">I<span className={Styles.ibookBrand}>Book</span>ing</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Cleaning">Our Taskers</Nav.Link>
              <Nav.Link href="/Task">Current Tasks</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/Post">Post</Nav.Link>
              {loggedIn() ? 
              (
                <Nav>
                  <Nav.Link href="/Profile">Profile</Nav.Link>
                  <Nav.Link href="/Login">Logout</Nav.Link>
                </Nav>
              ):
              (
                <Nav>
                  <Nav.Link href="/Login">Log in</Nav.Link>
                  <Nav.Link href="/Register">Register</Nav.Link> 
                </Nav>
              )}
            </Nav>   
          </Navbar.Collapse>
        </Navbar>
        <LoaderLine />
      </div>
    );
  }
}

export default withRouter(TopNav);

// const withoutLogin = withRouter(props => {
//   return(
//     <Nav>
//       <Nav.Link href="/Login">Log in</Nav.Link>
//       <Nav.Link href="/Register">Register</Nav.Link> 
//     </Nav>
//   )
// })