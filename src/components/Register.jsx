import React from 'react';
import { Navbar } from 'react-bootstrap';
import Styles from "../styles/nav.module.scss"

export const LoaderLine = () => (
  <div>
    <span className={Styles.expand} />
  </div>
)

const Register = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#register">I<span className={Styles.ibookBrand}>book</span>ing</Navbar.Brand>
      </Navbar>
      <LoaderLine />
    </div>
  );
}

export default Register;
