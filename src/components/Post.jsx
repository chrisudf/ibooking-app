import React, { Component } from 'react';
// import Button, { LoadingButton } from '../UI/Button';
import Button from 'react-bootstrap/Button';
import {addTask} from "../api/task.js"
export default class TaskEditView extends Component {
  constructor(props) {
    super(props);
    this.state = { task: {}, isSaving: false };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((preState) => {
      const task = { ...preState.task };
      task[name] = value;
      // console.log(task)
      return { task };
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const task =this.state.task
    // console.log(task)
    this.setState({ isSaving: true });
    addTask(task)
    .then(res=>{
      res.status ===200? (this.props.history.push('/')):(console.log("wrong"))
      console.log('res=>',res);})
      //need to make error handler,an alert window for example
    .catch(error =>{
      console.log(error.response)
      window.alert(error.response)
      window.alert("User already exists")
    })
    }
  render() {
    const { task, isSaving } = this.state;
    return (
      <form className="jr-form-edit" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Category</label>
              <input
                className="form-control"
                name="category"
                value={task.category || ''}
                onChange={this.handleInputChange}
                required
                autoFocus
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>title</label>
              <input
                className="form-control"
                name="title"
                value={task.title || ''}
                onChange={this.handleInputChange}
                required
                autoFocus
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
                value={task.description || ''}
                onChange={this.handleInputChange}
                required
                autoFocus
              />
            </div>
          </div>
        </div>
        <Button type="submit" loading={isSaving}>
          <span style={{ paddingLeft: 3 }} />
          Save
        </Button>
        <Button> Cancel </Button>
      </form>
    );
  }
}
