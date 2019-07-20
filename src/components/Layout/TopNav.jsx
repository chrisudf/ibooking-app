import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Styles from "../../styles/nav.module.scss"
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';
import { loggedIn, logout } from "../../api/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmericanSignLanguageInterpreting } from '@fortawesome/free-solid-svg-icons'

export const LoaderLine = () => (
  <div>
    <span className={Styles.expand} />
  </div>
)
class TopNav extends React.Component {
  render() {
    return (
      <div className={Styles.topNav}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} className={Styles.logo} />
            I<span className={Styles.ibookBrand}>BooK</span>ing
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Cleaning">Our Taskers</Nav.Link>
              <Nav.Link href="/Task">Current Tasks</Nav.Link>
            </Nav>
            <Nav>
              {loggedIn() ?
                (
                  <Nav>
                    <Nav.Link href="/Post" className={Styles.post}>Booking a cleaning</Nav.Link>
                    <Nav.Link href="/Profile">Profile</Nav.Link>
                    <UserLogOut />
                  </Nav>
                ) :
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

const UserLogOut = withRouter(props => {
  return (
    <Nav.Link
      onClick={e => {
        e.preventDefault();
        logout().then(() => props.history.replace('/Login'));
      }}>
      Logout
      </Nav.Link>
  );
});