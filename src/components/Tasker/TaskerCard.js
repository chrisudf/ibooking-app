import React from 'react';
import {Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Styles from '../../styles/tasker-card.module.scss'
import { faEnvelopeOpenText, faPhoneVolume, faPhoneAlt, faIdCardAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const PUBLIC_URL = process.env.PUBLIC_URL;

function CoverPhoto({ img }) {
  return (
    <Row className="justify-content-center" >
      {/* <img src={`${PUBLIC_URL}/${img}`} alt="" /> */}
      <img src='/image/avatar.png' alt="" className={Styles.avatar} />
    </Row>
  );
}

function TaskerMeta({ tasker }) {
  return (
    <div className = {Styles.taskerId}>
      <p>ID: {tasker._id || ''}</p>
    </div>
  );
}

export default function TaskerCard({ tasker }) {
  return (
    <Col xs={12} md={4}>
      <div className={Styles.taskerCard}>
        <TaskerMeta tasker={tasker}/>
        <Link
          to={{
            pathname: `/taskers/${tasker._id}`,
            state: { tasker },
          }}>
          <CoverPhoto img={tasker.cover} />
        </Link>
        <h4 className={Styles.taskerName}> {tasker.firstName} {tasker.lastName}</h4>
        <p>        
          <FontAwesomeIcon icon={faEnvelopeOpenText} className = {Styles.taskerInfoIcon}/>
          Email: 
          <a href={'mailto:'+tasker.email} className={Styles.taskerEmail}> {tasker.email}</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhoneAlt} className = {Styles.taskerInfoIcon}/> 
          Phone: {tasker.phone}
        </p>
        <p>
          <FontAwesomeIcon icon={faIdCardAlt} className = {Styles.taskerInfoIcon}/> 
          Description: {tasker.description}
        </p>
      </div>
    </Col>
  );
}
