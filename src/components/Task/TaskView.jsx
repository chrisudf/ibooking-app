// import axios from 'axios';
import React from 'react';
import {Container, Row} from 'react-bootstrap'
import TaskCard from './TaskCard';
import {fetchTasks} from '../../../src/api/task'
import Styles from '../../styles/tasker-card.module.scss'

export default class TaskView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching:false,
      tasks:[]
    };
  }
  componentDidMount() {
    this.setState({ isFetching: true, error: null});
    fetchTasks()
      .then(data => {
        this.setState({ tasks:data, isFetching: false });
        console.log(data)
      })     
      .catch(error => {
        this.setState({ isFetching: false, error});
      });
  }
  render() {
    return (
      <Container className={Styles.taskCardContainer}>
        <h2 className={Styles.pageTitle}>Current tasks</h2>
        <Row>
          {this.state.tasks.map((task, index) => <TaskCard task={task} key={task._id} />)}
        </Row>
      </Container>
    );
  }
}
