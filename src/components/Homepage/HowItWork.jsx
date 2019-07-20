import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Styles from "../../styles/how-it-work.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faCheckCircle, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import cx from "classnames"

export default () => {
  return (
    <div className={Styles.guide}>
      <h1 className={Styles.guidetitle}>How it <span className={Styles.boldTitle}>works</span></h1>
      <Row className={cx("justify-content-center", Styles.guideCard)}>
        <Col md={3} >
          <FontAwesomeIcon icon={faCalendarCheck} className={Styles.guideIcon} />
          <h5 className={Styles.guideContentTitle}>Book a Cleaning.</h5>
          <p>Click the book now button to make a booking on your preffered date and time</p>
        </Col>
        <Col md={3}>
          <FontAwesomeIcon icon={faCheckCircle} className={Styles.guideIcon} />
          <h5 className={Styles.guideContentTitle}>Confirm Booking.</h5>
          <p>We will confirm your booking along with your instructions via secure transaction.</p>
        </Col>
        <Col md={3}>
          <FontAwesomeIcon icon={faDoorOpen} className={Styles.guideIcon} />
          <h5 className={Styles.guideContentTitle}>We'll Do it.</h5>
          <p>Our trusted & experienced taskers will come to your door-step and get every thing done</p>
        </Col>
      </Row>
    </div>
  )
}