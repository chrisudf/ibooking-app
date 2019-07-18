import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap"
import Styles from "../../styles/home-banner.module.scss"
import cx from 'classnames'
import {Link} from "react-router-dom"

export default () => {
  return (
    <div className={Styles.bannerBgimage}>
      <Container>
        <Row className={cx("justify-content-center",Styles.bannerButtonContainer)}>
          <Col xs={12} md={5} className={Styles.userType}>
            <Button className={Styles.userButton}><h3>I need booking</h3></Button>
          </Col>
          <Col xs={12} md={5} className={Styles.userType}>
            <Link to ="/tasker/edit/new">
              <Button className={Styles.userButton}><h3>I want to be a tasker</h3></Button>
            </Link>
          </Col> 
        </Row>
      </Container>
    </div>)
}