import React from 'react';
import { Col } from 'react-bootstrap';
import Styles from '../../styles/tasker-card.module.scss'
import { faIdCardAlt,faThList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PUBLIC_URL = process.env.PUBLIC_URL;
const styles = {
  cover: {
    width: '100%',
    height: 175,
    objectFit: 'cover',
  },
  contentWrapper: {
    backgroundColor: 'white',
    height: 230,
    padding: '10px 15px',
  },
  meta: {
    color: '#9a9a9a',
    fontSize: 14,
  },
  separator: {
    margin: '3px 10px',
  },
};

function CoverPhoto({ img }) {
  return (
    <div>
      <img src={`${PUBLIC_URL}/${img}`} style={styles.cover} alt="" />
    </div>
  );
}

function TaskMeta({ task }) {
  return (
    <div className={Styles.taskerId}>
      <p>ID: {task._id || ''}</p>
    </div>
  );
}

export default function TaskerCard({ task }) {
  return (
    <Col xs={12} md={4}>
      <div className={Styles.taskerCard}>
        <TaskMeta task={task} />
        <h4 className={Styles.taskerName}> {task.title}</h4>
        <p>
          <FontAwesomeIcon icon={faThList} className={Styles.taskerInfoIcon} />
          Category: {task.category}
        </p>
        <p>
          <FontAwesomeIcon icon={faIdCardAlt} className={Styles.taskerInfoIcon} />
          Description: {task.description}
        </p>
      </div>
    </Col>
  );
}
