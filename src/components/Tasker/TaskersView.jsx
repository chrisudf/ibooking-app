// import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

// import Button, { LoadingButton } from '../UI/Button';
import TaskerCard from './TaskerCard';
import {fetchTaskers} from '../../../src/api/tasker'
export default class TaskersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading: false,
      isFetching:false,
      taskers:[]
      // taskers: [
      //   {
      //     _id: 1,
      //     firstName:"ape",
      //     lastName:"cry",
      //     dob:"09,20,1995",
      //     email:"dawd@gmail.com",
      //     phone:"000000",
      //     description:"1st USER"
      //   },
      //   {
      //     _id: 2,
      //     firstName:"kitty",
      //     lastName:"cry",
      //     dob:"09,20,1995",
      //     email:"dawd@gmail.com",
      //     phone:"000002",
      //     description:"2nd USER"
      //   },
      //   {
      //     _id: 3,
      //     firstName:"dog",
      //     lastName:"cry",
      //     dob:"09,20,1995",
      //     email:"dawd@gmail.com",
      //     phone:"000003",
      //     description:"3rd USER"
      //   },
      //   {
      //     _id: 4,
      //     firstName:"zz4",
      //     lastName:"qq",
      //     dob:"09,20,1995",
      //     email:"dawd@gmail.com",
      //     phone:"000004",
      //     description:"4th USER"
      //   },
      // ],
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
        {/* <Link to="/taskers/edit/NEW" className="btn btn-lg btn-primary ">
          Add new tasker
        </Link> */}
        <h6>Our trust worthy cleaner</h6>
        <div className="row" style={{ marginTop: 15 }}>
          {this.state.taskers.map((tasker, index) => <TaskerCard tasker={tasker} key={tasker._id} />)}
        </div>
      </div>
    );
  }
}
