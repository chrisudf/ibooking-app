import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Styles from "../../styles/nav.module.scss"
import {Link} from "react-router-dom"

export const LoaderLine = () => (
  <div>
    <span className={Styles.expand} />
  </div>
)

const TopNav = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">I<span className={Styles.ibookBrand}>book</span>ing</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/Post">Post</Nav.Link>
            <Nav.Link href="/Login">Log in</Nav.Link>
            <Nav.Link href="/Register">Register</Nav.Link> 
          </Nav>   
        </Navbar.Collapse>
      </Navbar>
      <LoaderLine />
    </div>
  );
}

export default TopNav;

