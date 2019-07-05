import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Styles from "../../styles/nav.module.scss"

export const LoaderLine = () => (
  <div>
    <span className={Styles.expand} />
  </div>
)

const TopNav = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">I<span className={Styles.ibookBrand}>book</span>ing</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Tasker">Tasker</Nav.Link>
            <Nav.Link href="/Task">Task</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Login">Log in</Nav.Link>
            <Nav.Link href="/Logout">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <LoaderLine />
    </div>
  );
}

export default TopNav;

