import React from 'react';
import TaskerCard from './TaskerCard';
import {fetchTaskers} from '../../../src/api/tasker'
import {Container, Row} from 'react-bootstrap'
import {Link} from "react-router-dom"
import Styles from '../../styles/tasker-card.module.scss'


export default class TaskersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading: false,
      isFetching:false,
      taskers:[]
    };
  }
  componentDidMount() {
    this.setState({ isFetching: true, error: null});
    fetchTaskers()
      .then(data => {
        this.setState({ taskers:data, isFetching: false });
        console.log(data)
      })     
      .catch(error => {
        this.setState({ isFetching: false, error});
      });
  }
  render() {
    return (
      <Container className={Styles.taskCardContainer}>
        <h2 className={Styles.pageTitle}>Our trust worthy cleaner</h2>
        <Row>
          {this.state.taskers.map((tasker, index) => <TaskerCard tasker={tasker} key={tasker._id} />)}
        </Row>
      </Container>
    );
  }
}
