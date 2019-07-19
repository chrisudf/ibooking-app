// import axios from 'axios';
import React from 'react';
// import Button, { LoadingButton } from '../UI/Button';
import TaskerCard from './TaskerCard';
import {fetchTaskers} from '../../../src/api/tasker'
import {Link} from "react-router-dom"

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
        console.log("dwa")
        console.log(data)
      })     
      .catch(error => {
        this.setState({ isFetching: false, error});
      });
  }
  render() {
    return (
      <div>
        <h6>Our trust worthy cleaner</h6>
        <div className="row" style={{ marginTop: 15 }}>
          {this.state.taskers.map((tasker, index) => <TaskerCard tasker={tasker} key={tasker._id} />)}
        </div>
      </div>
    );
  }
}
