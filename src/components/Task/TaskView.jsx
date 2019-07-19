// import axios from 'axios';
import React from 'react';
// import Button, { LoadingButton } from '../UI/Button';
import TaskCard from './TaskCard';
import {fetchTasks} from '../../../src/api/task'
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
      <div>
        {/* <Link to="/taskers/edit/NEW" className="btn btn-lg btn-primary ">
          Add new tasker
        </Link> */}
        <h6>Current tasks</h6>
        <div className="row" style={{ marginTop: 15 }}>
          {this.state.tasks.map((task, index) => <TaskCard task={task} key={task._id} />)}
        </div>
      </div>
    );
  }
}
