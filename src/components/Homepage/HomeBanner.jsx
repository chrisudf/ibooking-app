import React from 'react'
import { Row, Col, Container, Button } from "react-bootstrap"
import Styles from "../../styles/home-banner.module.scss"
import cx from 'classnames'

export default () => {
  return (
    <div className={Styles.bannerBgimage}>
      <Container>
        <Row className={cx("justify-content-center",Styles.bannerButtonContainer)}>
          <Col xs={12} md={5} className={Styles.userType}>
            <Button className={Styles.userButton}><h3>I need booking</h3></Button>
          </Col>
          <Col xs={12} md={5} className={Styles.userType}>
            <Button className={Styles.userButton}><h3>I am a tasker</h3></Button>
          </Col> 
        </Row>
      </Container>
    </div>)
}