import React, { Component } from 'react';
// import Button, { LoadingButton } from '../../UI/Button';
import Button from 'react-bootstrap/Button';

import {withRouter} from "react-router-dom";
import { fetchTaskerById, addTasker, updateTasker } from '../../api/tasker';
import BlockUi from "react-block-ui";

class TaskerEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasker:{},
      isSaving: false,
      isFetching: false, 
      error: null
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((preState) => {
      const tasker = { ...preState.tasker };
      tasker[name] = value;
      return { tasker };
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const tasker =this.state.tasker
    // console.log(tasker)
    this.setState({ isSaving: true });
    addTasker(tasker)
    .then(res=>{
      res.status ===200? (this.props.history.push('/')):(console.log("wrong"))
      console.log('res=>',res);})
    .catch(error =>{
      let err=""
      err=error.response
      console.log(error.response)
      console.log(err)
      window.alert(error.response.data)
      // window.alert(err.toString().substring(20,50))
    })
    }
  // componentDidMount() {
  //   if (this._isNew()) {
  //       return;
  //   }
  //   const taskerId = this.props.match.params.id;
  //   console.log(taskerId)
  //   this.setState({ isFetching: true });
  //   fetchTaskerById(taskerId)
  //       .then(tasker => this.setState({ isFetching: false, tasker }))
  //       .catch(error => this.setState({ isFetching: false, error: error }));
  // }

  // _isNew = () => {
  //   const { id } = this.props.match.params;
  //   return id === 'NEW';
  // }
  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState((preState) => {
  //     const tasker = { ...preState.tasker };
  //     tasker[name] = value;
  //     return { tasker };
  //   });
  // }
  // _save = ({ id, data }) => {
  //   if (this._isNew()) {
  //       return addTasker(data);
  //   }
  //   return updateTasker(id, data);
  // }
  render() {
    const {tasker} = this.state;
    return (
        <form className="jr-form-edit" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>first name</label>
                <input
                  className="form-control"
                  name="firstName"
                  value={tasker.firstName || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>last name</label>
                <input
                  className="form-control"
                  name="lastName"
                  value={tasker.lastName || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>date of birth</label>
                <input
                  className="form-control"
                  name="dob"
                  value={tasker.dob || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>email</label>
                <input
                  className="form-control"
                  name="email"
                  value={tasker.email || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>phone</label>
                <input
                  className="form-control"
                  name="phone"
                  value={tasker.phone || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Description</label>
                <textarea
                  style={{ height: 100 }}
                  className="form-control"
                  name="description"
                  value={tasker.description || ''}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <Button type="submit" >
            <span style={{ paddingLeft: 3 }} />
            Save
          </Button>
          <Button onClick={this.handleCancel}> Cancel </Button>
        </form>
    );
  }
}

export default withRouter(TaskerEditView)
