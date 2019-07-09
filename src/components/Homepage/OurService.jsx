import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Styles from "../../styles/our-service.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom, faToilet, faPeopleCarry,faTree, faHouseDamage,faCar,faBug } from '@fortawesome/free-solid-svg-icons'
import cx from "classnames"

export default()=>{
  return(
    <div className={Styles.serviceContainer}>
      <h1 className={Styles.servicetitle}>Check out some of our <span className={Styles.serviceBoldTitle}>Services</span></h1>
      <Row className={cx("justify-content-center", Styles.serviceCard)}>
        <Col xs={3} md={1} >
          <FontAwesomeIcon icon={faBroom} className={Styles.serviceIcon} />
          <p className={Styles.serviceType}>Cleaning</p>
        </Col>
        <Col xs={3} md={1}>
          <FontAwesomeIcon icon={faTree} className={Styles.serviceIcon} />
          <p className={Styles.serviceType}>Gardening</p>
        </Col>
        <Col xs={3} md={1}>
          <FontAwesomeIcon icon={faPeopleCarry} className={Styles.serviceIcon} />
          <p className={Styles.serviceType}>Moving</p>
        </Col>
        <Col xs={3} md={1}>
          <FontAwesomeIcon icon={faToilet} className={Styles.serviceIcon} />
          <p className={Styles.serviceType}>Plumber</p>
        </Col>
        <Col xs={3} md={1}>
          <FontAwesomeIcon icon={faHouseDamage} className={Styles.serviceIcon} />
          <p className={Styles.serviceType}>We'll Clean it.</p>
        </Col>
        <Col xs={3} md={1}>
          <FontAwesomeIcon icon={faBug} className={Styles.serviceIcon} />
          <p className={Styles.serviceType}>Deworming</p>
        </Col>
        <Col xs={3} md={1}>
          <FontAwesomeIcon icon={faCar} className={Styles.serviceIcon} />
          <p className={Styles.serviceType}>car washing</p>
        </Col>
      </Row>
    </div>
  )
}